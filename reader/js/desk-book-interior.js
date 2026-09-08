const UPSTREAM_MODULE = 'https://raw.githubusercontent.com/Svyable/bookself/fc056870d666a52b3f65684a05968238dc94a712/reader/js/book-interior.js';
const UPSTREAM_STYLE = 'https://raw.githubusercontent.com/Svyable/bookself/fc056870d666a52b3f65684a05968238dc94a712/reader/css/book-interior.css';
const LOCAL_STYLE_HREF = new URL('../css/desk-book-interior.css?v=bookself-fc056870', import.meta.url).href;
let styleReady = null;

export function interiorStyleHref() {
  return LOCAL_STYLE_HREF;
}

export function upstreamInteriorSources() {
  return { module: UPSTREAM_MODULE, style: UPSTREAM_STYLE };
}

function ensureStyles() {
  if (styleReady) return styleReady;
  const existing = document.querySelector(`link[href="${LOCAL_STYLE_HREF}"]`);
  if (existing) {
    styleReady = Promise.resolve(true);
    return styleReady;
  }

  styleReady = new Promise((resolve) => {
    const link = document.createElement('link');
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      resolve(value);
    };
    link.rel = 'stylesheet';
    link.href = LOCAL_STYLE_HREF;
    link.addEventListener('load', () => finish(true), { once: true });
    link.addEventListener('error', () => finish(false), { once: true });
    document.head.appendChild(link);
    window.setTimeout(() => finish(!!link.sheet), 900);
  });
  return styleReady;
}

async function initialize() {
  const ready = await ensureStyles();
  if (!ready) return;
  document.documentElement.dataset.bookInterior = 'true';
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
}
