import { pageTapIntent } from './page-tap-zones.js';

const OVERLAY_SELECTOR = '#tocOverlay.active, #progressPanel.active, #settingsPanel.active, #searchOverlay.active, #noteDialog.active, #helpOverlay.active';
const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, label, mark, pre, code, [contenteditable="true"], .sel-pop';

function coarseClick(event) {
  return event.pointerType === 'touch'
    || event.pointerType === 'pen'
    || window.matchMedia?.('(pointer: coarse)').matches;
}

function selectionActive() {
  return !!window.getSelection?.().toString().trim();
}

function pagedRead() {
  return document.body?.dataset.stage === 'read'
    && document.documentElement.dataset.readerMode !== 'scroll';
}

function installStyles() {
  if (document.querySelector('link[data-desk-page-tap-policy]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = new URL('../css/desk-page-tap-policy.css?v=bookself-20260905', import.meta.url).href;
  link.dataset.deskPageTapPolicy = 'true';
  document.head.appendChild(link);
}

function tuneHint() {
  const hint = document.getElementById('readHint');
  if (!hint || !window.matchMedia?.('(pointer: coarse)').matches) return;
  hint.innerHTML = 'Tap center for controls · tap an edge or swipe to turn · <kbd>←</kbd> <kbd>→</kbd> also work';
}

function onPageClick(event) {
  if (!pagedRead() || !coarseClick(event) || selectionActive()) return;
  if (document.querySelector(OVERLAY_SELECTOR)) return;
  if (event.target.closest?.(INTERACTIVE_SELECTOR)) return;

  const surface = event.target.closest?.('#pagesWrapper');
  if (!surface) return;
  const rect = surface.getBoundingClientRect();
  const intent = pageTapIntent(event.clientX - rect.left, rect.width, { coarse: true });

  // Bookself's shared navigation still owns Previous/Next, swipe buffering,
  // persistence, and page boundaries. Desk only suppresses the deliberate
  // no-turn buffer before Shelf's older broad coarse-tap handler sees it.
  if (intent !== 'pass') return;
  event.preventDefault();
  event.stopImmediatePropagation();
}

function initialize() {
  const surface = document.getElementById('pagesWrapper');
  if (!surface || document.documentElement.dataset.deskPageTapPolicy === 'true') return;
  document.documentElement.dataset.deskPageTapPolicy = 'true';
  installStyles();
  surface.addEventListener('click', onPageClick, true);
  window.setTimeout(tuneHint, 0);
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
}
