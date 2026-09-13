const BOOK_SLUG = 'red-sox-diplomacy';

function routeSlug(hash = window.location.hash || '') {
  const match = hash.match(/^#\/b\/([^/?#]+)/);
  return match ? decodeURIComponent(match[1]) : '';
}

function syncBookIdentity() {
  const active = routeSlug() === BOOK_SLUG;
  if (active) document.documentElement.dataset.redSoxDiplomacy = 'true';
  else delete document.documentElement.dataset.redSoxDiplomacy;
}

function initialize() {
  syncBookIdentity();
  window.addEventListener('hashchange', syncBookIdentity);
  window.addEventListener('popstate', syncBookIdentity);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
else initialize();
