const BOOK_SLUG = 'red-sox-diplomacy';
const STYLE_ID = 'deskRedSoxDiplomacyStyle';
const STYLE_HREF = new URL('../css/desk-red-sox-diplomacy.css?v=20260912-2', import.meta.url).href;
const VIDEO_FILE_URL = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ambassador_Nicholas_Burns%E2%80%99_Introductory_Video.webm';

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

function isBurnsIntroVideoLink(anchor) {
  const href = anchor?.href || '';
  return href.includes('commons.wikimedia.org/wiki/File:Ambassador_Nicholas_Burns') && href.includes('Introductory_Video.webm');
}

function ensureMovingImageDialog() {
  let dialog = document.getElementById('rsdMovingImageDialog');
  if (dialog) return dialog;
  dialog = document.createElement('dialog');
  dialog.id = 'rsdMovingImageDialog';
  dialog.className = 'rsd-media-dialog';
  dialog.setAttribute('aria-labelledby', 'rsdMovingImageTitle');

  const shell = document.createElement('div');
  shell.className = 'rsd-media-shell';

  const header = document.createElement('div');
  header.className = 'rsd-media-header';
  const eyebrow = document.createElement('p');
  eyebrow.className = 'rsd-media-eyebrow';
  eyebrow.textContent = 'MOVING IMAGE 01 · PUBLIC ARCHIVE';
  const title = document.createElement('h2');
  title.id = 'rsdMovingImageTitle';
  title.textContent = 'Ambassador Nicholas Burns — Introductory Video';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'rsd-media-close';
  close.setAttribute('aria-label', 'Close moving image');
  close.textContent = '×';
  header.append(eyebrow, title, close);

  const video = document.createElement('video');
  video.controls = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.src = VIDEO_FILE_URL;
  video.setAttribute('aria-label', 'Ambassador Nicholas Burns introductory video, April 29, 2022');

  const label = document.createElement('div');
  label.className = 'rsd-media-label';
  const facts = document.createElement('p');
  facts.textContent = 'U.S. Embassy & Consulates in China · 29 April 2022 · 2:25 · U.S. Department of State official-duty work · public domain';
  const note = document.createElement('p');
  note.textContent = 'The moving image is screened over the page so the reader never leaves the book or loses reading position.';
  label.append(facts, note);

  shell.append(header, video, label);
  dialog.appendChild(shell);
  document.body.appendChild(dialog);

  const reset = () => {
    video.pause();
    try { video.currentTime = 0; } catch {}
  };
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', reset);
  dialog.addEventListener('click', (event) => {
    const rect = shell.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) dialog.close();
  });
  return dialog;
}

function handleArchiveClick(event) {
  if (document.documentElement.dataset.redSoxDiplomacy !== 'true') return;
  const anchor = event.target?.closest?.('a');
  if (!isBurnsIntroVideoLink(anchor)) return;
  const dialog = ensureMovingImageDialog();
  if (typeof dialog.showModal !== 'function') return;
  event.preventDefault();
  dialog.showModal();
  const video = dialog.querySelector('video');
  video?.play?.().catch(() => {});
}

function initialize() {
  syncBookIdentity();
  window.addEventListener('hashchange', syncBookIdentity);
  window.addEventListener('popstate', syncBookIdentity);
  document.addEventListener('click', handleArchiveClick, true);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
else initialize();
