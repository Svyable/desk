import './scroll-reflow-anchor.js';
import './immersive-focus.js';
import {
  keyboardViewportTransition,
  lifecycleResumePlan,
  readingLifecycleSnapshot,
  textEntryTarget,
} from './viewport-stability.js';

const FAST_DESK_CATALOG_KEY = 'sven-desk:fast-catalog:v1';

function parseRoute(location = globalThis.location) {
  const query = new URLSearchParams(location?.search || '');
  const querySlug = query.get('b');
  if (querySlug) {
    const chapter = query.get('c');
    const offset = Math.max(0, parseInt(query.get('o') || '0', 10) || 0);
    return chapter
      ? { view: 'read', slug: querySlug, chapter, offset }
      : { view: 'cover', slug: querySlug, chapter: null, offset: 0 };
  }

  const parts = String(location?.hash || '#/').replace(/^#/, '').split('/').filter(Boolean);
  if (parts[0] !== 'b' || !parts[1]) return { view: 'library', slug: null, chapter: null, offset: 0 };
  const slug = decodeURIComponent(parts[1]);
  const chapter = parts[2] ? decodeURIComponent(parts[2]) : null;
  const offset = parts[3] ? Math.max(0, parseInt(parts[3], 10) || 0) : 0;
  return chapter
    ? { view: 'read', slug, chapter, offset }
    : { view: 'cover', slug, chapter: null, offset: 0 };
}

function snapshot(vv = globalThis.visualViewport) {
  if (!vv) return null;
  return {
    width: Number(vv.width) || 0,
    height: Number(vv.height) || 0,
    offsetTop: Number(vv.offsetTop) || 0,
    offsetLeft: Number(vv.offsetLeft) || 0,
    scale: Number(vv.scale) || 1,
  };
}

export function createViewportKeyboardGuard({ visualViewport = globalThis.visualViewport, document = globalThis.document } = {}) {
  let stable = snapshot(visualViewport);
  let keyboardActive = false;
  let editing = textEntryTarget(document?.activeElement);
  let suppressed = 0;
  const evaluate = () => {
    const next = snapshot(visualViewport);
    const result = keyboardViewportTransition(stable, next, { editing, keyboardActive });
    stable = result.snapshot;
    keyboardActive = result.keyboardActive;
    if (result.suppress) suppressed += 1;
    return result;
  };
  const onFocusIn = (event) => { editing = textEntryTarget(event.target); };
  const onFocusOut = () => { queueMicrotask(() => { editing = textEntryTarget(document?.activeElement); }); };
  const onResize = (event) => { const result = evaluate(); if (result.suppress) event.stopImmediatePropagation(); };
  document?.addEventListener('focusin', onFocusIn, true);
  document?.addEventListener('focusout', onFocusOut, true);
  visualViewport?.addEventListener('resize', onResize, true);
  return Object.freeze({ evaluate, state() { return { stable, keyboardActive, editing, suppressed }; }, destroy() { document?.removeEventListener('focusin', onFocusIn, true); document?.removeEventListener('focusout', onFocusOut, true); visualViewport?.removeEventListener('resize', onResize, true); } });
}

function readerMode(document) { return document?.documentElement?.dataset.readerMode === 'scroll' ? 'scroll' : 'paged'; }
function overlaysOpen(document) { return !!document?.querySelector?.('.toc-overlay.active, .stats-overlay.active, .search-overlay.active, .settings-panel.active, .note-dialog.active, .help-overlay.active'); }

export function createReaderLifecycleGuard({ window = globalThis.window, document = globalThis.document, visualViewport = globalThis.visualViewport, now = () => Date.now() } = {}) {
  let suspended = null; let resumeCount = 0; let rafA = 0; let rafB = 0;
  const capture = () => { suspended = readingLifecycleSnapshot({ route: parseRoute(window?.location), stage: document?.body?.dataset.stage || '', mode: readerMode(document), viewport: snapshot(visualViewport), at: now() }); return suspended; };
  const settle = (plan) => { if (!plan.resume) return plan; resumeCount += 1; window?.dispatchEvent?.(new CustomEvent('bookself:reader-resume', { detail: plan })); if (plan.repaginate) window?.dispatchEvent?.(new Event('resize')); if (plan.resyncRoute && !overlaysOpen(document)) window?.dispatchEvent?.(new HashChangeEvent('hashchange')); return plan; };
  const resume = ({ persisted = false } = {}) => { const current = readingLifecycleSnapshot({ route: parseRoute(window?.location), stage: document?.body?.dataset.stage || '', mode: readerMode(document), viewport: snapshot(visualViewport), at: now() }); const plan = lifecycleResumePlan(suspended, current, { persisted, now: now(), viewport: snapshot(visualViewport) }); if (!plan.resume) return plan; cancelAnimationFrame(rafA); cancelAnimationFrame(rafB); rafA = requestAnimationFrame(() => { rafB = requestAnimationFrame(() => settle(plan)); }); return plan; };
  const onPageHide = () => capture(); const onPageShow = (event) => resume({ persisted: !!event.persisted }); const onVisibility = () => { if (document.visibilityState === 'hidden') capture(); else if (document.visibilityState === 'visible') resume(); }; const onFreeze = () => capture(); const onResume = () => resume();
  window?.addEventListener?.('pagehide', onPageHide, true); window?.addEventListener?.('pageshow', onPageShow, true); document?.addEventListener?.('visibilitychange', onVisibility, true); document?.addEventListener?.('freeze', onFreeze, true); document?.addEventListener?.('resume', onResume, true);
  return Object.freeze({ capture, resume, state() { return { suspended, resumeCount }; }, destroy() { cancelAnimationFrame(rafA); cancelAnimationFrame(rafB); window?.removeEventListener?.('pagehide', onPageHide, true); window?.removeEventListener?.('pageshow', onPageShow, true); document?.removeEventListener?.('visibilitychange', onVisibility, true); document?.removeEventListener?.('freeze', onFreeze, true); document?.removeEventListener?.('resume', onResume, true); } });
}

function releasedSection(markdown) {
  const match = /^##\s+The books\s*$/im.exec(String(markdown || ''));
  if (!match) return '';
  const tail = String(markdown).slice(match.index + match[0].length);
  const next = /^##\s+/m.exec(tail);
  return next ? tail.slice(0, next.index) : tail;
}

function cleanTitle(label, slug) {
  const title = String(label || '').replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim();
  if (title) return title;
  return String(slug || '').split('-').filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

function parseFastDeskCatalog(markdown) {
  const entries = [];
  const seen = new Set();
  const re = /\[([^\]]+)\]\((?:\.\/)?books\/([a-z0-9][a-z0-9-]*)\/?\)/gi;
  let match;
  while ((match = re.exec(releasedSection(markdown)))) {
    const slug = match[2].toLowerCase();
    if (seen.has(slug) || slug.startsWith('_')) continue;
    seen.add(slug);
    entries.push({ slug, title: cleanTitle(match[1], slug) });
  }
  return entries;
}

function fastDeskCatalogFromStorage() {
  try {
    const value = JSON.parse(localStorage.getItem(FAST_DESK_CATALOG_KEY) || '[]');
    return Array.isArray(value) ? value.filter((entry) => entry?.slug && entry?.title) : [];
  } catch {
    return [];
  }
}

function renderFastDeskCatalog(entries) {
  if (parseRoute().view !== 'library' || !entries.length) return;
  const shelf = document.getElementById('shelf');
  const empty = document.getElementById('emptyShelf');
  if (!shelf || !empty) return;
  // This is a first-paint placeholder only. Once either this primer or the
  // canonical Reader has populated the Shelf, a later lightweight fetch may
  // update storage but must never replace the richer rendered library.
  if (shelf.dataset.deskFastCatalog === 'primed' || shelf.children.length) return;

  const fragment = document.createDocumentFragment();
  for (const entry of entries.slice().sort((a, b) => a.title.localeCompare(b.title))) {
    const link = document.createElement('a');
    link.className = 'volume';
    link.href = `#/b/${entry.slug}/`;
    link.innerHTML = `
      <span class="volume-spine"></span>
      <span class="volume-block"></span>
      <span class="volume-cover">
        <span class="volume-title"></span>
        <span class="volume-author">Sven Hardy Benson</span>
        <span class="volume-open">Open</span>
      </span>`;
    link.querySelector('.volume-title').textContent = entry.title;
    fragment.appendChild(link);
  }
  shelf.replaceChildren(fragment);
  shelf.dataset.deskFastCatalog = 'primed';
  empty.hidden = true;
}

function primeDeskLibrary() {
  if (parseRoute().view !== 'library') return;
  const cached = fastDeskCatalogFromStorage();
  if (cached.length) renderFastDeskCatalog(cached);

  fetch(new URL('../../README.md', import.meta.url), { cache: 'default' })
    .then((response) => response.ok ? response.text() : '')
    .then((markdown) => {
      const entries = parseFastDeskCatalog(markdown);
      if (!entries.length) return;
      try { localStorage.setItem(FAST_DESK_CATALOG_KEY, JSON.stringify(entries)); } catch {}
      renderFastDeskCatalog(entries);
    })
    .catch(() => {});
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (window.visualViewport) {
    window.__bookselfViewportKeyboardGuard?.destroy?.();
    window.__bookselfViewportKeyboardGuard = createViewportKeyboardGuard({ visualViewport: window.visualViewport, document });
  }
  window.__bookselfReaderLifecycleGuard?.destroy?.();
  window.__bookselfReaderLifecycleGuard = createReaderLifecycleGuard({ window, document, visualViewport: window.visualViewport });
  primeDeskLibrary();
}
