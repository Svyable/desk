const READER_EXPERIENCE_KEY = 'svyable-desk:reader-experience';
const READER_FONTS = ['book', 'literary', 'warm', 'classic', 'modern', 'clear', 'humanist', 'system'];
const DEFAULTS = Object.freeze({
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

const FONT_FAMILIES = Object.freeze({
  book: '"Source Serif 4"',
  literary: '"Literata"',
  warm: '"Lora"',
  classic: 'Georgia',
  modern: '"IBM Plex Sans"',
  clear: '"Atkinson Hyperlegible"',
  humanist: '"Trebuchet MS"',
  system: 'system-ui',
});

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalize(raw = {}) {
  return {
    fontSize: Math.round(clamp(Number(raw.fontSize) || DEFAULTS.fontSize, 14, 32)),
    font: READER_FONTS.includes(raw.font) ? raw.font : DEFAULTS.font,
    fontWeight: [400, 500, 600].includes(Number(raw.fontWeight)) ? Number(raw.fontWeight) : DEFAULTS.fontWeight,
    tracking: Number(clamp(Number(raw.tracking) || 0, -0.02, 0.08).toFixed(2)),
    leading: Number(clamp(Number(raw.leading) || DEFAULTS.leading, 1.3, 2).toFixed(2)),
    measure: ['narrow', 'balanced', 'wide'].includes(raw.measure) ? raw.measure : DEFAULTS.measure,
    align: ['left', 'justify'].includes(raw.align) ? raw.align : DEFAULTS.align,
    paragraph: ['compact', 'normal', 'airy'].includes(raw.paragraph) ? raw.paragraph : DEFAULTS.paragraph,
    indent: ['none', 'gentle', 'classic'].includes(raw.indent) ? raw.indent : DEFAULTS.indent,
    mode: ['paged', 'scroll'].includes(raw.mode) ? raw.mode : DEFAULTS.mode,
    hyphens: ['auto', 'off'].includes(raw.hyphens) ? raw.hyphens : DEFAULTS.hyphens,
  };
}

function loadSavedPrefs(window = globalThis.window) {
  try {
    const stored = window?.localStorage?.getItem(READER_EXPERIENCE_KEY);
    return normalize(stored ? JSON.parse(stored) : {});
  } catch {
    return { ...DEFAULTS };
  }
}

function installCriticalTypography(document = globalThis.document) {
  if (!document?.head || document.getElementById('deskReaderFirstPaintTypography')) return;
  const style = document.createElement('style');
  style.id = 'deskReaderFirstPaintTypography';
  style.textContent = `
    :root { --reader-font-weight: 400; --reader-tracking: 0em; }
    [data-reader-font="book"] .page-inner { font-family: "Source Serif 4", Georgia, serif !important; }
    [data-reader-font="literary"] .page-inner { font-family: "Literata", Georgia, serif !important; }
    [data-reader-font="warm"] .page-inner { font-family: "Lora", Georgia, serif !important; }
    [data-reader-font="classic"] .page-inner { font-family: Georgia, "Times New Roman", serif !important; }
    [data-reader-font="modern"] .page-inner { font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important; }
    [data-reader-font="clear"] .page-inner { font-family: "Atkinson Hyperlegible", Verdana, sans-serif !important; }
    [data-reader-font="humanist"] .page-inner { font-family: "Trebuchet MS", "Segoe UI", sans-serif !important; }
    [data-reader-font="system"] .page-inner { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important; }
    .page-inner { font-weight: var(--reader-font-weight); letter-spacing: var(--reader-tracking); }
    [data-reader-indent="gentle"] .page-inner p + p { text-indent: .85em; }
    [data-reader-indent="classic"] .page-inner p + p { text-indent: 1.45em; }
    [data-reader-hyphens="off"] .page-inner p { hyphens: none; -webkit-hyphens: none; }
    [data-reader-hyphens="auto"][data-reader-align="justify"] .page-inner p { hyphens: auto; -webkit-hyphens: auto; }
  `;
  document.head.appendChild(style);
}

function applyPrefs(prefs, document = globalThis.document) {
  const root = document.documentElement;
  installCriticalTypography(document);
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
}

function stylesheetReady(link) {
  if (!link) return Promise.resolve();
  if (link.sheet) return Promise.resolve();
  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };
    link.addEventListener('load', finish, { once: true });
    link.addEventListener('error', finish, { once: true });
    window.setTimeout(finish, 5000);
  });
}

function optionalFontStylesheet(prefs, document = globalThis.document) {
  if (!['literary', 'warm'].includes(prefs.font)) return null;
  let link = document.querySelector('link[data-desk-reader-font-library]');
  if (link) return link;
  link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,500;7..72,600&family=Lora:wght@400;500;600&display=swap';
  link.dataset.deskReaderFontLibrary = 'true';
  document.head.appendChild(link);
  return link;
}

function twoFrames(window = globalThis.window) {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => window.requestAnimationFrame(resolve));
  });
}

function geometrySignature(window, document) {
  const root = document.documentElement;
  return [
    Math.round(window.visualViewport?.width || window.innerWidth || 0),
    Math.round(window.visualViewport?.height || window.innerHeight || 0),
    root.dataset.readerMode || '',
    root.dataset.readerFont || '',
    root.dataset.readerMeasure || '',
    root.dataset.readerAlign || '',
    root.dataset.readerParagraph || '',
    root.dataset.readerIndent || '',
    root.dataset.readerHyphens || '',
    root.style.getPropertyValue('--reader-font-size'),
    root.style.getPropertyValue('--reader-leading'),
    root.style.getPropertyValue('--reader-font-weight'),
    root.style.getPropertyValue('--reader-tracking'),
  ].join('|');
}

function installRedundantStartupResizeGuard({ window, document }) {
  const root = document.documentElement;
  let baseline = '';
  let active = true;
  let releaseTimer = 0;

  const cleanup = () => {
    if (!active) return;
    active = false;
    window.clearTimeout(releaseTimer);
    window.removeEventListener('resize', onResize, true);
  };

  const onResize = (event) => {
    if (!active || root.dataset.readerFirstRenderReady !== 'true') return;
    if (event.isTrusted) {
      cleanup();
      return;
    }
    const next = geometrySignature(window, document);
    if (baseline && next === baseline) {
      event.stopImmediatePropagation();
      return;
    }
    cleanup();
  };

  window.addEventListener('resize', onResize, true);
  window.addEventListener('load', () => {
    releaseTimer = window.setTimeout(cleanup, 650);
  }, { once: true });
  window.setTimeout(cleanup, 4500);

  return {
    arm() {
      baseline = geometrySignature(window, document);
    },
  };
}

async function settleFirstRender(prefs, { window, document }) {
  const guard = installRedundantStartupResizeGuard({ window, document });
  const critical = [
    ...document.querySelectorAll('link[rel="stylesheet"]'),
  ].filter((link) => (
    link.dataset.readerNavigation === 'true'
    || /\/reader\/css\/(?:style|experience)\.css(?:\?|$)/.test(link.href)
  ));
  const optionalFonts = optionalFontStylesheet(prefs, document);
  if (optionalFonts) critical.push(optionalFonts);
  await Promise.all(critical.map(stylesheetReady));

  if (document.fonts?.load) {
    const family = FONT_FAMILIES[prefs.font] || FONT_FAMILIES.book;
    try {
      await document.fonts.load(`${prefs.fontSize}px ${family}`);
    } catch {}
  }
  try {
    await document.fonts?.ready;
  } catch {}
  await twoFrames(window);
  document.documentElement.dataset.readerFirstRenderReady = 'true';
  guard.arm();
}

function installContentsDrawer({ window, document }) {
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
      .gui-toc-scrim { top: var(--reader-toc-top, 0px) !important; }
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
        .toc-overlay.active { transform: translateX(0) !important; }
        .toc-overlay::before { display: none !important; }
        .toc-header { flex: 0 0 auto; padding-top: 0 !important; }
        .toc-search { flex: 0 0 auto; }
        #tocList {
          flex: 1 1 auto;
          min-height: 0;
          overflow: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }
        .toc-close { min-width: 2.75rem; min-height: 2.75rem; }
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

  const compact = () => window.matchMedia('(max-width: 700px), (pointer: coarse)').matches;
  const reconcileState = () => {
    const active = drawer.classList.contains('active');
    const expanded = String(active);
    if (button.getAttribute('aria-expanded') !== expanded) button.setAttribute('aria-expanded', expanded);
    if (drawer.getAttribute('aria-modal') !== 'false') drawer.setAttribute('aria-modal', 'false');
    if (drawer.inert === active) drawer.inert = !active;
    if (active) {
      const app = document.querySelector('.app');
      if (app?.inert) app.inert = false;
      app?.classList.remove('gui-modal-background');
    }
  };
  const syncOpenState = (active) => {
    drawer.classList.toggle('active', active);
    reconcileState();
    if (active) {
      if (compact()) close?.focus?.({ preventScroll: true });
    } else if (document.activeElement && drawer.contains(document.activeElement)) {
      button.focus({ preventScroll: true });
    }
  };
  const open = () => syncOpenState(true);
  const closeDrawer = () => syncOpenState(false);
  const toggle = () => syncOpenState(!drawer.classList.contains('active'));

  // Desk owns the base availability of Contents. Capture the explicit open and
  // close controls before optional upstream enhancements can install competing
  // toggle handlers. Upstream code still owns chapter population/navigation.
  if (!button.dataset.deskContentsOwner) {
    button.dataset.deskContentsOwner = 'true';
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      toggle();
    }, true);
  }
  if (close && !close.dataset.deskContentsOwner) {
    close.dataset.deskContentsOwner = 'true';
    close.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeDrawer();
    }, true);
  }
  if (!document.documentElement.dataset.deskContentsEscapeOwner) {
    document.documentElement.dataset.deskContentsEscapeOwner = 'true';
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !drawer.classList.contains('active')) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      closeDrawer();
    }, true);
  }

  // Late optional GUI modules may rewrite ARIA/inert metadata while leaving the
  // drawer class untouched. Keep the visible state authoritative without
  // dispatching resize or changing Reader geometry.
  const stateObserver = new MutationObserver(reconcileState);
  stateObserver.observe(drawer, { attributes: true, attributeFilter: ['class', 'aria-modal', 'inert'] });
  stateObserver.observe(button, { attributes: true, attributeFilter: ['aria-expanded'] });
  syncOpenState(drawer.classList.contains('active'));

  // Bookself's current shared GUI focuses Contents search automatically. On a
  // phone that summons the software keyboard and changes visual viewport
  // geometry before the reader asked to search. Keep programmatic opening on a
  // non-text control; a deliberate tap in Search still focuses it normally.
  if (search && !search.dataset.deskContentsFocusGuard) {
    search.dataset.deskContentsFocusGuard = 'true';
    const nativeFocus = search.focus.bind(search);
    search.focus = (options) => {
      if (compact() && drawer.classList.contains('active')) {
        close?.focus?.({ preventScroll: true });
        return;
      }
      nativeFocus(options);
    };
  }

  // Expose idempotent actions only for local integration/tests; chapter links
  // continue to be populated and navigated by the canonical Reader.
  window.__deskContentsDrawer = Object.freeze({ open, close: closeDrawer, toggle });
}

export async function prepareDeskReaderFirstRender({
  window = globalThis.window,
  document = globalThis.document,
} = {}) {
  if (!window || !document?.documentElement) return null;
  const prefs = loadSavedPrefs(window);
  applyPrefs(prefs, document);
  installContentsDrawer({ window, document });
  await settleFirstRender(prefs, { window, document });
  return prefs;
}
