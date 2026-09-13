const BOOK_SLUG = 'red-sox-diplomacy';
const STYLE_ID = 'deskRedSoxDiplomacyStyle';
const STYLE_HREF = new URL('../css/desk-red-sox-diplomacy.css?v=20260912-1', import.meta.url).href;

function routeSlug(hash = window.location.hash || '') {
  const match = hash.match(/^#\/b\/([^/?#]+)/);
  return match ? decodeURIComponent(match[1]) : '';
}

function ensureStyle() {
  let link = document.getElementById(STYLE_ID);
  if (link) return link;
  link = document.createElement('link');
  link.id = STYLE_ID;
  link.rel = 'stylesheet';
  link.href = STYLE_HREF;
  document.head.appendChild(link);
  return link;
}

function syncBookIdentity() {
  const active = routeSlug() === BOOK_SLUG;
  if (active) {
    ensureStyle();
    document.documentElement.dataset.redSoxDiplomacy = 'true';
  } else {
    delete document.documentElement.dataset.redSoxDiplomacy;
  }
}

function initialize() {
  syncBookIdentity();
  window.addEventListener('hashchange', syncBookIdentity);
  window.addEventListener('popstate', syncBookIdentity);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
else initialize();
