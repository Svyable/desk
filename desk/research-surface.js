const RESEARCH_LINK_CLASS = 'research-action';

export function researchReadmeUrl(slug, moduleUrl = import.meta.url) {
  return new URL(`../books/${encodeURIComponent(String(slug || '').trim())}/research/README.md`, moduleUrl).href;
}

export function researchBrowseUrl(folderHref, slug, moduleUrl = import.meta.url) {
  const fallback = researchReadmeUrl(slug, moduleUrl);
  const href = String(folderHref || '').trim();
  if (!href) return fallback;
  try {
    const url = new URL(href, moduleUrl);
    if (url.hostname === 'github.com' && /\/tree\//.test(url.pathname)) {
      url.pathname = `${url.pathname.replace(/\/$/, '')}/research`;
      return url.href;
    }
  } catch {
    return fallback;
  }
  return fallback;
}

async function researchExists(slug) {
  if (!slug) return false;
  try {
    const response = await fetch(researchReadmeUrl(slug), { cache: 'no-store' });
    return response.ok;
  } catch {
    return false;
  }
}

async function enhanceBookCard(card) {
  if (!(card instanceof HTMLElement) || card.dataset.researchSurfaceChecked === 'true') return;
  card.dataset.researchSurfaceChecked = 'true';
  const slug = String(card.dataset.slug || '').trim();
  if (!slug || !(await researchExists(slug))) return;

  const links = card.querySelector('.book-secondary-links');
  if (!links || links.querySelector(`.${RESEARCH_LINK_CLASS}`)) return;
  const research = document.createElement('a');
  research.className = `secondary-action ${RESEARCH_LINK_CLASS}`;
  research.target = '_blank';
  research.rel = 'noopener';
  research.href = researchBrowseUrl(card.querySelector('.folder-action')?.href, slug);
  research.textContent = 'Research';
  research.setAttribute('aria-label', `Open research trail for ${card.querySelector('.book-title')?.textContent || slug}`);
  links.appendChild(research);
}

function enhanceVisibleCards(root) {
  root.querySelectorAll('.book-card[data-slug]').forEach((card) => { void enhanceBookCard(card); });
}

export function installResearchSurface(root = document.getElementById('manuscriptList')) {
  if (!root || root.dataset.researchSurface === 'true') return null;
  root.dataset.researchSurface = 'true';
  enhanceVisibleCards(root);
  const observer = new MutationObserver(() => enhanceVisibleCards(root));
  observer.observe(root, { childList: true });
  document.getElementById('repoForm')?.addEventListener('submit', () => observer.disconnect(), { once: true });
  return observer;
}

if (typeof document !== 'undefined' && !new URLSearchParams(location.search).has('repo')) {
  installResearchSurface();
}
