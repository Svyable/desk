import './scroll-reflow-anchor.js';
import './immersive-focus.js';
import {
  keyboardViewportTransition,
  lifecycleResumePlan,
  readingLifecycleSnapshot,
  textEntryTarget,
} from './viewport-stability.js';

const FAST_DESK_CATALOG_KEY = 'sven-desk:fast-catalog:v1';
const DESK_READER_EXPERIENCE_KEY = 'svyable-desk:reader-experience';
const READER_FONTS = ['book', 'literary', 'warm', 'classic', 'modern', 'clear', 'humanist', 'system'];
const READER_EXPERIENCE_DEFAULTS = Object.freeze({
  fontSize: 18,
  font: 'book',
  fontWeight: 400,
  tracking: 0,
  leading: 1.55,
  measure: 'balanced',
  align: 'justify',
  paragraph: 'normal',
  indent: 'none',
  mode: 'paged',
  hyphens: 'auto',
});

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalizeReaderExperience(raw = {}) {
  const font = READER_FONTS.includes(raw.font) ? raw.font : READER_EXPERIENCE_DEFAULTS.font;
  const measure = ['narrow', 'balanced', 'wide'].includes(raw.measure) ? raw.measure : READER_EXPERIENCE_DEFAULTS.measure;
  const align = ['left', 'justify'].includes(raw.align) ? raw.align : READER_EXPERIENCE_DEFAULTS.align;
  const paragraph = ['compact', 'normal', 'airy'].includes(raw.paragraph) ? raw.paragraph : READER_EXPERIENCE_DEFAULTS.paragraph;
  const indent = ['none', 'gentle', 'classic'].includes(raw.indent) ? raw.indent : READER_EXPERIENCE_DEFAULTS.indent;
  const mode = ['paged', 'scroll'].includes(raw.mode) ? raw.mode : READER_EXPERIENCE_DEFAULTS.mode;
  const hyphens = ['auto', 'off'].includes(raw.hyphens) ? raw.hyphens : READER_EXPERIENCE_DEFAULTS.hyphens;
  const fontWeight = [400, 500, 600].includes(Number(raw.fontWeight))
    ? Number(raw.fontWeight)
    : READER_EXPERIENCE_DEFAULTS.fontWeight;
  return {
    fontSize: Math.round(clamp(Number(raw.fontSize) || READER_EXPERIENCE_DEFAULTS.fontSize, 14, 32)),
    font,
    fontWeight,
    tracking: Number(clamp(Number(raw.tracking) || 0, -0.02, 0.08).toFixed(2)),
    leading: Number(clamp(Number(raw.leading) || READER_EXPERIENCE_DEFAULTS.leading, 1.3, 2).toFixed(2)),
    measure,
    align,
    paragraph,
    indent,
    mode,
    hyphens,
  };
}

function savedReaderExperience() {
  try {
    const stored = localStorage.getItem(DESK_READER_EXPERIENCE_KEY);
    return normalizeReaderExperience(stored ? JSON.parse(stored) : {});
  } catch {
    return { ...READER_EXPERIENCE_DEFAULTS };
  }
}

function installCriticalReaderExperienceStyles(document = globalThis.document) {
  if (!document?.head || document.getElementById('deskReaderFirstPaintTypography')) return;
  const style = document.createElement('style');
  style.id = 'deskReaderFirstPaintTypography';
  style.textContent = `
    :root {
      --reader-font-weight: 400;
      --reader-tracking: 0em;
    }
    [data-reader-font="book"] .page-surface { font-family: "Source Serif 4", Georgia, serif; }
    [data-reader-font="literary"] .page-surface { font-family: "Literata", Georgia, serif; }
    [data-reader-font="warm"] .page-surface { font-family: "Lora", Georgia, serif; }
    [data-reader-font="classic"] .page-surface { font-family: Georgia, "Times New Roman", serif; }
    [data-reader-font="modern"] .page-surface { font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    [data-reader-font="clear"] .page-surface { font-family: "Atkinson Hyperlegible", Verdana, sans-serif; }
    [data-reader-font="humanist"] .page-surface { font-family: "Trebuchet MS", "Segoe UI", sans-serif; }
    [data-reader-font="system"] .page-surface { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    .page-inner { font-weight: var(--reader-font-weight); letter-spacing: var(--reader-tracking); }
    [data-reader-indent="gentle"] .page-inner p + p { text-indent: .85em; }
    [data-reader-indent="classic"] .page-inner p + p { text-indent: 1.45em; }
    [data-reader-hyphens="off"] .page-inner p { hyphens: none; -webkit-hyphens: none; }
    [data-reader-hyphens="auto"][data-reader-align="justify"] .page-inner p { hyphens: auto; -webkit-hyphens: auto; }
  `;
  document.head.appendChild(style);
}

export function applySavedReaderExperienceBeforePagination({
  document = globalThis.document,
} = {}) {
  if (!document?.documentElement) return null;
  const prefs = savedReaderExperience();
  const root = document.documentElement;
  installCriticalReaderExperienceStyles(document);
  root.dataset.readerFont = prefs.font;
  root.dataset.readerMeasure = prefs.measure;
  root.dataset.readerAlign = prefs.align;
  root.dataset.readerParagraph = prefs.paragraph;
  root.dataset.readerIndent = prefs.indent;
  root.dataset.readerMode = prefs.mode;
  root.dataset.readerHyphens = prefs.hyphens;
  root.dataset.readerPrefsPrimed = 'true';
  root.style.setProperty('--reader-font-size', `${prefs.fontSize}px`);
  root.style.setProperty('--reader-leading', String(prefs.leading));
  root.style.setProperty('--reader-font-weight', String(prefs.fontWeight));
  root.style.setProperty('--reader-tracking', `${prefs.tracking}em`);
  return prefs;
}

function installDeskContentsDrawerContract({
  window = globalThis.window,
  document = globalThis.document,
} = {}) {
  if (!window || !document?.head) return;
  const root = document.documentElement;
  const button = document.getElementById('tocBtn');
  const drawer = document.getElementById('tocOverlay');
  const header = document.getElementById('readerChrome');
  const search = document.getElementById('tocSearch');
  const close = document.getElementById('tocClose');
  if (!root || !button || !drawer || !header) return;

  if (!document.getElementById('deskContentsDrawerContract')) {
    const style = document.createElement('style');
    style.id = 'deskContentsDrawerContract';
    style.textContent = `
      .gui-toc-scrim {
        top: var(--reader-toc-top, 0px) !important;
      }
      .toc-overlay {
        top: var(--reader-toc-top, 0px) !important;
        bottom: auto !important;
        height: calc(100dvh - var(--reader-toc-top, 0px)) !important;
      }
      @media (max-width: 700px), (pointer: coarse) and (max-width: 900px) {
        .toc-overlay {
          right: 0 !important;
          width: 100% !important;
          max-width: none !important;
          padding: 1rem max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left)) !important;
          border: 0 !important;
          border-top: 1px solid var(--border) !important;
          border-radius: 0 !important;
          transform: translateX(102%) !important;
          box-shadow: -14px 0 38px color-mix(in srgb, var(--shadow) 46%, transparent) !important;
          overflow: hidden !important;
        }
        .toc-overlay.active {
          transform: translateX(0) !important;
        }
        .toc-overlay::before {
          display: none !important;
        }
        .toc-header {
          flex: 0 0 auto;
          padding-top: 0 !important;
        }
        .toc-search {
          flex: 0 0 auto;
        }
        #tocList {
          flex: 1 1 auto;
          min-height: 0;
          overflow: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }
        .toc-close {
          min-width: 2.75rem;
          min-height: 2.75rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const syncTop = () => {
    root.style.setProperty('--reader-toc-top', `${Math.max(0, Math.ceil(header.getBoundingClientRect().height))}px`);
  };
  syncTop();
  if ('ResizeObserver' in window) new ResizeObserver(syncTop).observe(header);
  window.addEventListener('orientationchange', syncTop, { passive: true });
  window.visualViewport?.addEventListener('resize', syncTop, { passive: true });

  button.setAttribute('aria-controls', 'tocOverlay');
  button.setAttribute('aria-label', 'Contents');
  button.title = 'Contents';

  // The shared GUI historically autofocuses the Contents search input. On a
  // phone that can summon the software keyboard, resize the visual viewport,
  // and cause the first correctly typeset page to be repaginated just because
  // the reader opened navigation. Keep automatic focus on a non-text control;
  // an explicit tap/click on the search field still focuses it normally.
  if (search && !search.dataset.deskContentsFocusGuard) {
    search.dataset.deskContentsFocusGuard = 'true';
    const nativeFocus = search.focus.bind(search);
    search.focus = (options) => {
      const compact = window.matchMedia('(max-width: 700px), (pointer: coarse)').matches;
      if (compact && drawer.classList.contains('active')) {
        close?.focus?.({ preventScroll: true });
        return;
      }
      nativeFocus(options);
    };
  }
}

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
  applySavedReaderExperienceBeforePagination({ document });
  installDeskContentsDrawerContract({ window, document });
  if (window.visualViewport) {
    window.__bookselfViewportKeyboardGuard?.destroy?.();
    window.__bookselfViewportKeyboardGuard = createViewportKeyboardGuard({ visualViewport: window.visualViewport, document });
  }
  window.__bookselfReaderLifecycleGuard?.destroy?.();
  window.__bookselfReaderLifecycleGuard = createReaderLifecycleGuard({ window, document, visualViewport: window.visualViewport });
  primeDeskLibrary();
}
