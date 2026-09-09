// Temporary migration boundary: canonical Bookself still supplies app.js until
// scripts/sync-bookself.sh materializes the complete application graph locally.
const canonicalAppUrl = 'https://svyable.github.io/bookself/reader/js/app.js?v=r4';
const viewportStabilityUrl = new URL('./desk-viewport-stability-runtime.js', import.meta.url).href;
const nativeShareUrl = new URL('./native-share.js', import.meta.url).href;
const appShellPolishUrl = new URL('./app-shell-polish.js', import.meta.url).href;
const libraryHomeUrl = new URL('../css/library-home.css', import.meta.url).href;
const bookOpeningHandoffUrl = new URL('../css/desk-book-opening-handoff.css?v=bookself-20260906', import.meta.url).href;

const optionalEnhancements = [
  [viewportStabilityUrl, 'Viewport stability'],
  [nativeShareUrl, 'Native sharing'],
  ['./desk-book-interior.js?v=bookself-20260906-fail-open-1', 'Desk premium book interior'],
  [appShellPolishUrl, 'Desk Reader app-shell polish'],
  ['./desk-book-opening-handoff.js?v=bookself-20260906', 'Desk book-opening handoff'],
  ['./desk-reading-app.js?v=bookself-20260905', 'Desk reading-app hierarchy'],
];

function installDeskChromePolicy() {
  if (document.getElementById('deskReaderChromePolicy')) return;
  const style = document.createElement('style');
  style.id = 'deskReaderChromePolicy';
  style.textContent = `#readerOneHandedActions,.reader-one-handed-actions{display:none!important;}`;
  document.head.appendChild(style);
}

function installDeskStylesheet(id, href) {
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

installDeskChromePolicy();
installDeskStylesheet('bookselfLibraryHome', libraryHomeUrl);
installDeskStylesheet('deskBookOpeningHandoff', bookOpeningHandoffUrl);

function installRecoveryStyles() {
  if (document.getElementById('deskBootstrapRecoveryStyle')) return;
  const style = document.createElement('style');
  style.id = 'deskBootstrapRecoveryStyle';
  style.textContent = `
    .desk-bootstrap-recovery { box-sizing:border-box; width:min(42rem,calc(100vw - 32px)); margin:max(3rem,env(safe-area-inset-top)) auto 2rem; padding:0 max(1rem,env(safe-area-inset-right)) 0 max(1rem,env(safe-area-inset-left)); font-family:system-ui,sans-serif; line-height:1.55; }
    .desk-bootstrap-recovery h1 { font-size:clamp(1.6rem,7vw,2.4rem); line-height:1.1; }
    .desk-bootstrap-recovery button { min-height:40px; padding:8px 14px; border:1px solid currentColor; border-radius:999px; background:transparent; color:inherit; font:inherit; font-weight:650; cursor:pointer; }
    .desk-bootstrap-recovery-detail { opacity:.72; overflow-wrap:anywhere; }
    @media (pointer:coarse),(max-width:680px) { .desk-bootstrap-recovery button { min-height:44px; padding-inline:16px; } }
    @media (max-height:430px) and (orientation:landscape) { .desk-bootstrap-recovery { margin-top:max(1rem,env(safe-area-inset-top)); } .desk-bootstrap-recovery h1 { margin-block:.4rem; font-size:1.5rem; } }
    @media (forced-colors:active) { .desk-bootstrap-recovery button { border:2px solid ButtonText; forced-color-adjust:auto; } }
  `;
  document.head.appendChild(style);
}

function bootstrapFailureKind(error) {
  if (error?.name === 'AbortError') return 'abort';
  const status = Number(error?.status);
  if (!Number.isFinite(status) || status === 0) {
    return error instanceof TypeError || error?.network === true ? 'transient' : 'permanent';
  }
  if (status === 408 || status === 425 || status === 429 || status >= 500) return 'transient';
  return 'permanent';
}

function bootstrapRecoveryCopy(error, { online = true } = {}) {
  const kind = bootstrapFailureKind(error);
  if (!online && kind === 'transient') {
    return Object.freeze({
      title: 'Desk Reader is offline',
      message: 'The Reader could not be loaded from this device yet. Your Desk manuscripts are unchanged.',
      action: 'Try again',
    });
  }
  if (kind === 'transient') {
    return Object.freeze({
      title: 'Desk Reader is temporarily unavailable',
      message: 'The Reader could not be loaded. Your Desk manuscripts are unchanged.',
      action: 'Try again',
    });
  }
  return Object.freeze({
    title: 'Desk Reader needs an update',
    message: error instanceof Error ? error.message : String(error),
    action: 'Reload',
  });
}

function showRecovery(error) {
  console.error('Desk Reader bootstrap failed', error);
  installRecoveryStyles();
  const copy = bootstrapRecoveryCopy(error, { online: navigator.onLine !== false });
  const main = document.createElement('main');
  main.className = 'desk-bootstrap-recovery';
  main.setAttribute('role', 'alert');
  main.setAttribute('aria-live', 'assertive');
  const title = document.createElement('h1');
  title.textContent = copy.title;
  const detail = document.createElement('p');
  detail.textContent = copy.message;
  const retry = document.createElement('button');
  retry.type = 'button';
  retry.textContent = copy.action;
  retry.addEventListener('click', () => window.location.reload());
  const help = document.createElement('p');
  help.append('The manuscript files are still available. ', Object.assign(document.createElement('a'), { href:'https://github.com/Svyable/desk#the-books', textContent:'Open the Desk catalog' }), ' or try the ', Object.assign(document.createElement('a'), { href:'https://svyable.github.io/shelf/reader/', textContent:'released Shelf Reader' }), '.');
  const diagnostic = document.createElement('p');
  diagnostic.className = 'desk-bootstrap-recovery-detail';
  diagnostic.textContent = error instanceof Error ? error.message : String(error);
  main.append(title, detail, retry, help, diagnostic);
  document.body.replaceChildren(main);
  retry.focus({ preventScroll:true });
}

function loadOptionalEnhancements() {
  for (const [url, label] of optionalEnhancements) {
    import(url).catch((error) => {
      console.warn(`${label} could not be loaded`, error);
    });
  }
}

function scheduleOptionalEnhancements() {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadOptionalEnhancements, { timeout: 750 });
  } else {
    window.setTimeout(loadOptionalEnhancements, 0);
  }
}

try {
  // Match Bookself's first-paint boundary: canonical app startup is the critical
  // path. Desk-only polish starts afterward during idle time and always fails open.
  await import(canonicalAppUrl);
  scheduleOptionalEnhancements();
} catch (error) {
  showRecovery(error);
}
