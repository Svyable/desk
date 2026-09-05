import {
  bootstrapRecoveryCopy,
  fetchBootstrapResource,
  installDeskRuntimeBridge,
  rewriteSharedModuleSpecifiers,
} from './desk-runtime-bridge.js';

const upstream = 'https://svyable.github.io/shelf/reader/js/';
const appUrl = `${upstream}app.js?v=desk-20260904-4`;
const viewportStabilityUrl = `${upstream}viewport-stability-runtime.js?v=r1`;
const nativeShareUrl = `${upstream}native-share.js`;
const libraryHomeUrl = 'https://svyable.github.io/desk/reader/css/desk-library-home.css?v=bookself-20260904';
const bookInteriorUrl = 'https://svyable.github.io/desk/reader/css/desk-book-interior.css?v=bookself-20260905';
const bookOpeningHandoffUrl = 'https://svyable.github.io/desk/reader/css/desk-book-opening-handoff.css?v=bookself-20260905';

const DESK_CATALOG_AUDIT = Object.freeze([
  'catalogEntryVisible',
  'window.__IMPRINT?.role',
  'Shared Reader is missing role-aware Desk catalog visibility',
]);

function sharedReaderOwnsDeskCatalogVisibility(source) {
  const input = String(source || '');
  return /catalogEntryVisible\(\s*meta\s*,\s*window\.__IMPRINT\?\.role\s*\)/.test(input);
}

function adaptReaderSource(source) {
  if (!sharedReaderOwnsDeskCatalogVisibility(source)) {
    throw new Error('Shared Reader is missing role-aware Desk catalog visibility; update Bookself/Shelf before loading Desk Reader.');
  }
  return rewriteSharedModuleSpecifiers(source, upstream);
}

function installDeskChromePolicy() {
  document.documentElement.dataset.oneHandedActionsReady = 'true';
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

installDeskRuntimeBridge();
installDeskChromePolicy();
installDeskStylesheet('deskLibraryHome', libraryHomeUrl);
installDeskStylesheet('deskBookInterior', bookInteriorUrl);
installDeskStylesheet('deskBookOpeningHandoff', bookOpeningHandoffUrl);
document.documentElement.dataset.bookInterior = 'true';

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

try {
  try { await import(viewportStabilityUrl); } catch (error) { console.warn('Viewport stability could not be loaded', error); }
  try { await import(nativeShareUrl); } catch (error) { console.warn('Native sharing could not be loaded', error); }
  try { await import('./desk-cover-actions.js?v=bookself-20260905'); } catch (error) { console.warn('Desk cover action simplification could not be loaded', error); }
  try { await import('./desk-book-opening-handoff.js?v=bookself-20260905'); } catch (error) { console.warn('Desk book-opening handoff could not be loaded', error); }
  try { await import('./desk-reading-app.js?v=bookself-20260905'); } catch (error) { console.warn('Desk reading-app hierarchy could not be loaded', error); }
  const response = await fetchBootstrapResource(appUrl);
  const source = await response.text();
  const adapted = adaptReaderSource(source);
  if (DESK_CATALOG_AUDIT.length !== 3) throw new Error('Desk catalog audit contract is incomplete.');
  const moduleUrl = URL.createObjectURL(new Blob([adapted.source], { type:'text/javascript' }));
  try { await import(moduleUrl); } finally { URL.revokeObjectURL(moduleUrl); }
} catch (error) {
  showRecovery(error);
}
