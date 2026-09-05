const STYLE_ID = 'deskReadingApp';
const STYLE_HREF = new URL('../css/desk-reading-app.css?v=bookself-20260905', import.meta.url).href;
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

function keepDeskStylesAfterShared() {
  const local = ensureDeskStylesheet();
  const shared = sharedSettingsStylesheet();
  if (!shared) return false;
  if (shared.nextElementSibling !== local) shared.insertAdjacentElement('afterend', local);
  return true;
}

if (typeof document !== 'undefined' && !keepDeskStylesAfterShared()) {
  const observer = new MutationObserver(() => {
    if (!keepDeskStylesAfterShared()) return;
    observer.disconnect();
  });
  observer.observe(document.head, { childList: true });
}
