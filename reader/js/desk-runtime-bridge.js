const BRIDGE_FLAG = Symbol.for('svyable.desk.reader.runtimeBridge');
const SHELF_BOOKS_PREFIX = '/shelf/books/';
const DESK_BOOKS_PREFIX = '/desk/books/';
const SHELF_WORKER_PATH = '/shelf/reader/sw.js';
const OFFLINE_QUERY = 'BOOKSELF_OFFLINE_READINESS';

function asUrl(value, base) {
  try {
    if (value instanceof URL) return new URL(value.href);
    if (typeof Request !== 'undefined' && value instanceof Request) return new URL(value.url);
    return new URL(String(value), base);
  } catch {
    return null;
  }
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
