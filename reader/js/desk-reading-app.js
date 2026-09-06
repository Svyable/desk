const STYLE_ID = 'deskReadingApp';
const FORM_FACTOR_STYLE_ID = 'deskReadingFormFactor';
const COMPAT_STYLE_ID = 'deskReadingAppCompatibility';
const STYLE_HREF = new URL('../css/desk-reading-app.css?v=bookself-20260905', import.meta.url).href;
const FORM_FACTOR_STYLE_HREF = new URL('../css/desk-reading-form-factor.css?v=desk-20260906-1', import.meta.url).href;
const SHARED_SETTINGS_STYLE = /\/reader\/css\/settings-panel\.css(?:\?|$)/;

function sharedSettingsStylesheet() {
  return [...document.querySelectorAll('link[rel="stylesheet"][href]')]
    .find((link) => SHARED_SETTINGS_STYLE.test(link.href) && link.id !== STYLE_ID) || null;
}

function ensureDeskStylesheet() {
  let link = document.getElementById(STYLE_ID);
  if (link) return link;
  link = document.createElement('link');
  link.id = STYLE_ID;
  link.rel = 'stylesheet';
  link.href = STYLE_HREF;
  link.dataset.bookselfPromotion = 'reading-app-gui-292';
  document.head.appendChild(link);
  return link;
}

function ensureDeskFormFactorStylesheet() {
  let link = document.getElementById(FORM_FACTOR_STYLE_ID);
  if (link) return link;
  link = document.createElement('link');
  link.id = FORM_FACTOR_STYLE_ID;
  link.rel = 'stylesheet';
  link.href = FORM_FACTOR_STYLE_HREF;
  link.dataset.deskReaderPolish = 'immersive-form-factor-20260906';
  document.head.appendChild(link);
  return link;
}

function ensureDeskCompatibilityStyles() {
  if (document.getElementById(COMPAT_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = COMPAT_STYLE_ID;
  style.dataset.bookselfDivergence = 'preserve-single-spread';
  style.textContent = `body[data-stage="read"] .page-nav .view-toggle{display:inline-flex!important;}`;
  document.head.appendChild(style);
}

function keepDeskStylesAfterShared() {
  const local = ensureDeskStylesheet();
  const formFactor = ensureDeskFormFactorStylesheet();
  ensureDeskCompatibilityStyles();
  const shared = sharedSettingsStylesheet();
  if (!shared) return false;
  if (shared.nextElementSibling !== local) shared.insertAdjacentElement('afterend', local);
  if (local.nextElementSibling !== formFactor) local.insertAdjacentElement('afterend', formFactor);
  const compatibility = document.getElementById(COMPAT_STYLE_ID);
  if (compatibility && formFactor.nextElementSibling !== compatibility) {
    formFactor.insertAdjacentElement('afterend', compatibility);
  }
  return true;
}

if (typeof document !== 'undefined' && !keepDeskStylesAfterShared()) {
  const observer = new MutationObserver(() => {
    if (!keepDeskStylesAfterShared()) return;
    observer.disconnect();
  });
  observer.observe(document.head, { childList: true });
}
