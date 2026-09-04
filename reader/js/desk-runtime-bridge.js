const BRIDGE_FLAG = Symbol.for('svyable.desk.reader.runtimeBridge');
const SHELF_BOOKS_PREFIX = '/shelf/books/';
const DESK_BOOKS_PREFIX = '/desk/books/';
const SHELF_WORKER_PATH = '/shelf/reader/sw.js';
const DEFAULT_RETRY_DELAYS = Object.freeze([140, 520]);
const OFFLINE_RETRY_FLOOR_MS = 1200;
const OFFLINE_RETRY_CEILING_MS = 1800;
const DESK_CATALOG_GATE = "if (meta.published || window.__IMPRINT?.role === 'desk') entries.push(meta);";

function asUrl(value, base) {
  try {
    if (value instanceof URL) return new URL(value.href);
    if (typeof Request !== 'undefined' && value instanceof Request) return new URL(value.url);
    return new URL(String(value), base);
  } catch {
    return null;
  }
}

export function parsePortalCatalogManifest(value) {
  let manifest = value;
  if (typeof value === 'string') {
    try {
      manifest = JSON.parse(value);
    } catch {
      return null;
    }
  }
  if (!manifest || manifest.version !== 1 || !Array.isArray(manifest.books)) return null;
  const slugs = [];
  for (const raw of manifest.books) {
    const slug = String(raw || '').trim();
    if (!/^[a-z0-9][a-z0-9-]*$/.test(slug) || slug === '_TEMPLATE') continue;
    if (!slugs.includes(slug)) slugs.push(slug);
  }
  return slugs;
}

export function applyPortalCatalogManifest(markdown, manifest) {
  const slugs = parsePortalCatalogManifest(manifest);
  if (slugs === null) return markdown;

  const rows = slugs.map((slug) => `- [${slug}](books/${slug}/)`).join('\n');
  const body = rows ? `\n\n${rows}\n` : '\n';
  const heading = /^##\s+The books\s*$/im;
  const match = heading.exec(markdown);
  if (!match) {
    const spacer = markdown.endsWith('\n') ? '\n' : '\n\n';
    return `${markdown}${spacer}## The books${body}`;
  }

  const start = match.index + match[0].length;
  const next = /^##\s+/m.exec(markdown.slice(start));
  const end = next ? start + next.index : markdown.length;
  const suffix = markdown.slice(end);
  const separator = suffix && !suffix.startsWith('\n') ? '\n' : '';
  return `${markdown.slice(0, start)}${body}${separator}${suffix}`;
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

function executableSourceMask(source) {
  const chars = [...source];
  let quote = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let index = 0; index < chars.length; index += 1) {
    const char = chars[index];
    const next = chars[index + 1];

    if (lineComment) {
      if (char === '\n') {
        lineComment = false;
      } else {
        chars[index] = ' ';
      }
      continue;
    }

    if (blockComment) {
      if (char === '*' && next === '/') {
        chars[index] = ' ';
        chars[index + 1] = ' ';
        blockComment = false;
        index += 1;
      } else if (char !== '\n') {
        chars[index] = ' ';
      }
      continue;
    }

    if (quote) {
      if (char !== '\n') chars[index] = ' ';
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '/' && next === '/') {
      chars[index] = ' ';
      chars[index + 1] = ' ';
      lineComment = true;
      index += 1;
      continue;
    }

    if (char === '/' && next === '*') {
      chars[index] = ' ';
      chars[index + 1] = ' ';
      blockComment = true;
      index += 1;
      continue;
    }

    if (char === "'" || char === '"' || char === '`') {
      chars[index] = ' ';
      quote = char;
    }
  }

  return chars.join('');
}

function catalogGatePattern() {
  return /if\s*\(\s*meta\.published\s*\)\s*entries\.push\(\s*meta\s*\)\s*;/g;
}

export function adaptDeskCatalogVisibility(source) {
  const input = String(source || '');
  const masked = executableSourceMask(input);
  const matches = [...masked.matchAll(catalogGatePattern())];

  if (matches.length !== 1) {
    throw new Error(`Expected one shared Reader catalog gate; found ${matches.length}.`);
  }

  const gate = matches[0];
  const start = gate.index;
  const end = start + gate[0].length;
  return Object.freeze({
    source: `${input.slice(0, start)}${DESK_CATALOG_GATE}${input.slice(end)}`,
    catalogGates: 1,
    gateIndex: start,
  });
}

export function adaptSharedReaderAppSource(source, upstream) {
  const imports = rewriteSharedModuleSpecifiers(source, upstream);
  if (!imports.staticImports) {
    throw new Error('Shared Reader imports were not recognized; update Desk adapter.');
  }
  if (/from\s+['"]\.\//.test(imports.source) || /import\(\s*['"]\.\//.test(imports.source)) {
    throw new Error('Shared Reader still contains unresolved relative module imports; update Desk adapter.');
  }
  const catalog = adaptDeskCatalogVisibility(imports.source);
  return Object.freeze({
    source: catalog.source,
    staticImports: imports.staticImports,
    dynamicImports: imports.dynamicImports,
    catalogGates: catalog.catalogGates,
  });
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

function rewriteFetchInput(input, global, options) {
  const rewritten = rewriteDeskPublicationUrl(input, options);
  if (typeof Request !== 'undefined' && input instanceof Request) {
    if (rewritten === input.url) return input;
    return new Request(rewritten, input);
  }
  if (input instanceof URL) return new URL(rewritten);
  return rewritten;
}

function isDeskPortalReadme(input, options) {
  const url = asUrl(input, options.base);
  const portal = asUrl(options.portalUrl, options.base);
  return !!url && !!portal && url.origin === portal.origin && url.pathname === portal.pathname;
}

async function overlayCatalogManifest(response, nativeFetch, global, options) {
  if (!response?.ok || typeof global.Response !== 'function') return response;
  let manifestResponse;
  try {
    manifestResponse = await nativeFetch(options.catalogUrl, { cache: 'no-cache' });
  } catch {
    return response;
  }
  if (!manifestResponse.ok) return response;

  const [markdown, manifest] = await Promise.all([response.text(), manifestResponse.text()]);
  const body = applyPortalCatalogManifest(markdown, manifest);
  return new global.Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

function installManifest(global, moduleUrl) {
  const link = global.document?.querySelector?.('link[rel="manifest"]');
  if (link) link.href = deskManifestUrl(moduleUrl);
}

function installFetchBridge(global, options) {
  if (typeof global.fetch !== 'function') return;
  const nativeFetch = global.fetch.bind(global);
  global.fetch = async (input, init) => {
    const rewritten = rewriteFetchInput(input, global, options);
    const response = await nativeFetch(rewritten, init);
    if (!isDeskPortalReadme(rewritten, options)) return response;
    return overlayCatalogManifest(response, nativeFetch, global, options);
  };
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

export function installDeskRuntimeBridge({
  global = globalThis,
  moduleUrl = import.meta.url,
} = {}) {
  if (global[BRIDGE_FLAG]) return;
  Object.defineProperty(global, BRIDGE_FLAG, { value: true });
  const options = {
    base: global.location?.href || new URL('../', moduleUrl).href,
    origin: global.location?.origin || new URL(moduleUrl).origin,
    portalUrl: new URL('../../README.md', moduleUrl).href,
    catalogUrl: new URL('../../catalog.json', moduleUrl).href,
  };
  installManifest(global, moduleUrl);
  installFetchBridge(global, options);
  installRegistrationBridge(global, moduleUrl, options);
}
