const BRIDGE_FLAG = Symbol.for('svyable.desk.reader.runtimeBridge');
const SHELF_BOOKS_PREFIX = '/shelf/books/';
const DESK_BOOKS_PREFIX = '/desk/books/';
const SHELF_WORKER_PATH = '/shelf/reader/sw.js';
const OFFLINE_QUERY = 'BOOKSELF_OFFLINE_READINESS';
const DEFAULT_RETRY_DELAYS = Object.freeze([140, 520]);
const OFFLINE_RETRY_FLOOR_MS = 1200;
const OFFLINE_RETRY_CEILING_MS = 1800;

function asUrl(value, base) {
  try {
    if (value instanceof URL) return new URL(value.href);
    if (typeof Request !== 'undefined' && value instanceof Request) return new URL(value.url);
    return new URL(String(value), base);
  } catch {
    return null;
  }
}

function statusOf(error) {
  const status = Number(error?.status);
  return Number.isFinite(status) ? status : null;
}

export function bootstrapFailureKind(error) {
  if (error?.name === 'AbortError') return 'abort';
  const status = statusOf(error);
  if (status == null || status === 0) {
    return error instanceof TypeError || error?.network === true ? 'transient' : 'permanent';
  }
  if (status === 408 || status === 425 || status === 429 || status >= 500) return 'transient';
  return 'permanent';
}

export function retryPauseMs(delay, { offline = false } = {}) {
  const base = Math.max(0, Math.floor(Number(delay) || 0));
  if (!offline) return base;
  return Math.min(OFFLINE_RETRY_CEILING_MS, Math.max(OFFLINE_RETRY_FLOOR_MS, base));
}

export function responseError(response, label = 'shared Reader') {
  const error = new Error(`Could not load ${label} (${response?.status ?? 'unknown'})`);
  if (Number.isFinite(Number(response?.status))) error.status = Number(response.status);
  return error;
}

async function defaultPause(delay, { offline = false } = {}) {
  const wait = retryPauseMs(delay, { offline });
  if (!wait) return;
  if (!offline || typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    await new Promise((resolve) => setTimeout(resolve, wait));
    return;
  }
  await new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      window.removeEventListener('online', finish);
      resolve();
    };
    const timer = setTimeout(finish, wait);
    window.addEventListener('online', finish, { once: true });
  });
}

export async function fetchBootstrapResource(url, {
  fetchImpl = globalThis.fetch,
  retryDelays = DEFAULT_RETRY_DELAYS,
  pause = defaultPause,
  online = () => globalThis.navigator?.onLine !== false,
  cache = 'reload',
} = {}) {
  const delays = Array.isArray(retryDelays)
    ? retryDelays.map((value) => Math.max(0, Math.floor(Number(value) || 0))).slice(0, 4)
    : [...DEFAULT_RETRY_DELAYS];

  for (let attempt = 0; ; attempt += 1) {
    try {
      const response = await fetchImpl(url, { cache });
      if (!response.ok) throw responseError(response);
      return response;
    } catch (error) {
      const retryable = bootstrapFailureKind(error) === 'transient' && attempt < delays.length;
      if (!retryable) throw error;
      await pause(delays[attempt], {
        attempt,
        error,
        offline: !online(),
      });
    }
  }
}

export function bootstrapRecoveryCopy(error, { online = true } = {}) {
  const kind = bootstrapFailureKind(error);
  if (!online && kind === 'transient') {
    return Object.freeze({
      title: 'Desk Reader is offline',
      message: 'The shared Reader could not be loaded from this device yet. Your Desk manuscripts are unchanged.',
      action: 'Try again',
    });
  }
  if (kind === 'transient') {
    return Object.freeze({
      title: 'Desk Reader is temporarily unavailable',
      message: 'The shared Reader could not be loaded after retrying. Your Desk manuscripts are unchanged.',
      action: 'Try again',
    });
  }
  return Object.freeze({
    title: 'Desk Reader needs an update',
    message: error instanceof Error ? error.message : String(error),
    action: 'Reload',
  });
}

export function rewriteSharedModuleSpecifiers(source, upstream) {
  const input = String(source || '');
  const base = String(upstream || '');
  const staticPattern = /from\s+(['"])\.\/([^'"]+)\1/g;
  const dynamicPattern = /import\(\s*(['"])\.\/([^'"]+)\1\s*\)/g;
  const staticImports = [...input.matchAll(staticPattern)].length;
  const dynamicImports = [...input.matchAll(dynamicPattern)].length;
  const rewrittenStatic = input.replace(
    staticPattern,
    (_match, quote, path) => `from ${quote}${base}${path}${quote}`
  );
  const rewritten = rewrittenStatic.replace(
    dynamicPattern,
    (_match, quote, path) => `import(${quote}${base}${path}${quote})`
  );
  return Object.freeze({ source: rewritten, staticImports, dynamicImports });
}

export function rewriteDeskPublicationUrl(value, {
  base = 'https://svyable.github.io/desk/reader/',
  origin = 'https://svyable.github.io',
} = {}) {
  const url = asUrl(value, base);
  if (!url || url.origin !== origin || !url.pathname.startsWith(SHELF_BOOKS_PREFIX)) {
    return url?.href || String(value);
  }
  url.pathname = `${DESK_BOOKS_PREFIX}${url.pathname.slice(SHELF_BOOKS_PREFIX.length)}`;
  return url.href;
}

export function deskWorkerUrl(moduleUrl = import.meta.url) {
  return new URL('../sw.js', moduleUrl).href;
}

export function deskManifestUrl(moduleUrl = import.meta.url) {
  return new URL('../manifest.webmanifest', moduleUrl).href;
}

export function deskReaderScope(moduleUrl = import.meta.url) {
  return new URL('../', moduleUrl).pathname;
}

export function shouldRedirectShelfWorker(value, {
  base = 'https://svyable.github.io/desk/reader/',
  origin = 'https://svyable.github.io',
} = {}) {
  const url = asUrl(value, base);
  return !!url && url.origin === origin && url.pathname === SHELF_WORKER_PATH;
}

export function rewriteOfflineReadinessMessage(message, options = {}) {
  if (!message || typeof message !== 'object' || message.type !== OFFLINE_QUERY || !message.url) {
    return message;
  }
  const rewritten = rewriteDeskPublicationUrl(message.url, options);
  if (rewritten === message.url) return message;
  return { ...message, url: rewritten };
}

function rewriteFetchInput(input, global, options) {
  const rewritten = rewriteDeskPublicationUrl(input, options);
  if (typeof Request !== 'undefined' && input instanceof Request) {
    if (rewritten === input.url) return input;
    return new Request(rewritten, input);
  }
  if (input instanceof URL) return new URL(rewritten);
  return rewritten;
}

function installManifest(global, moduleUrl) {
  const link = global.document?.querySelector?.('link[rel="manifest"]');
  if (link) link.href = deskManifestUrl(moduleUrl);
}

function installFetchBridge(global, options) {
  if (typeof global.fetch !== 'function') return;
  const nativeFetch = global.fetch.bind(global);
  global.fetch = (input, init) => nativeFetch(rewriteFetchInput(input, global, options), init);
}

function installRegistrationBridge(global, moduleUrl, options) {
  const container = global.navigator?.serviceWorker;
  if (!container || typeof container.register !== 'function') return;
  const prototype = Object.getPrototypeOf(container);
  if (!prototype || prototype[BRIDGE_FLAG]) return;
  const nativeRegister = prototype.register;
  Object.defineProperty(prototype, BRIDGE_FLAG, { value: true });
  Object.defineProperty(prototype, 'register', {
    configurable: true,
    writable: true,
    value(scriptURL, registerOptions = {}) {
      if (!shouldRedirectShelfWorker(scriptURL, options)) {
        return nativeRegister.call(this, scriptURL, registerOptions);
      }
      return nativeRegister.call(this, deskWorkerUrl(moduleUrl), {
        ...registerOptions,
        scope: deskReaderScope(moduleUrl),
      });
    },
  });
}

function installMessageBridge(global, options) {
  const prototype = global.ServiceWorker?.prototype;
  if (!prototype || prototype[BRIDGE_FLAG] || typeof prototype.postMessage !== 'function') return;
  const nativePostMessage = prototype.postMessage;
  Object.defineProperty(prototype, BRIDGE_FLAG, { value: true });
  Object.defineProperty(prototype, 'postMessage', {
    configurable: true,
    writable: true,
    value(message, transfer) {
      return nativePostMessage.call(this, rewriteOfflineReadinessMessage(message, options), transfer);
    },
  });
}

export function installDeskRuntimeBridge({
  global = globalThis,
  moduleUrl = import.meta.url,
} = {}) {
  if (global[BRIDGE_FLAG]) return;
  Object.defineProperty(global, BRIDGE_FLAG, { value: true });
  const options = {
    base: global.location?.href || new URL('../', moduleUrl).href,
    origin: global.location?.origin || new URL(moduleUrl).origin,
  };
  installManifest(global, moduleUrl);
  installFetchBridge(global, options);
  installRegistrationBridge(global, moduleUrl, options);
  installMessageBridge(global, options);
}
