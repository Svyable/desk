const BOOK_SLUG = 'red-sox-diplomacy';
const STYLE_ID = 'deskRedSoxDiplomacyStyle';
const STYLE_HREF = new URL('../css/desk-red-sox-diplomacy.css?v=20260916-1', import.meta.url).href;
const VIDEO_FILE_URL = new URL('../../books/red-sox-diplomacy/media/primary-source/ch01-nicholas-burns-introductory-video-2022.webm', import.meta.url).href;

const GENERIC_SOURCE_LABEL = /^(?:primary source|source|source scan|primary transcript|transcript|transcript mirror|archive record|school-archive record|event transcript)$/i;
const EXACT_SOURCE_LABELS = new Map([
  [
    'https://1997-2001.state.gov/policy_remarks/970524.burns.html',
    '“Preparing for the International Age” — U.S. Department of State, May 24, 1997',
  ],
  [
    'https://2001-2009.state.gov/p/us/rm/2007/87176.htm',
    '“Commemoration of the 60th Anniversary of the Marshall Plan” — U.S. Department of State, June 12, 2007',
  ],
  [
    'https://www.stripes.com/news/2006-10-19/no-world-series-on-afn-radio-this-year-1974176.html1',
    '“No World Series on AFN Radio This Year” — Stars and Stripes, October 19, 2006',
  ],
  [
    'https://chrissmith.house.gov/uploadedfiles/1999.03.04_foreign_relations_authorization_for_fy_2000_2001-_public_diplomacy_programs.pdf',
    'David L. Marcus, “America’s Salesman” — congressional hearing scan',
  ],
]);

const SOURCE_INSTITUTIONS = [
  [/state\.gov$/i, 'U.S. Department of State — original record'],
  [/congress\.gov$/i, 'U.S. Congress — hearing record'],
  [/govinfo\.gov$/i, 'U.S. Government Publishing Office — official record'],
  [/archives\.gov$/i, 'U.S. National Archives — archival record'],
  [/nato\.int$/i, 'NATO — official record'],
  [/un\.org$/i, 'United Nations — official record'],
  [/washingtonpost\.com$/i, 'The Washington Post — original report'],
  [/stripes\.com$/i, 'Stars and Stripes — original report'],
  [/reuters\.com$/i, 'Reuters — original report'],
];

function routeParts(hash = window.location.hash || '') {
  const match = hash.match(/^#\/b\/([^/?#]+)(?:\/([^/?#]+))?/);
  return {
    slug: match ? decodeURIComponent(match[1]) : '',
    chapter: match?.[2] ? decodeURIComponent(match[2]) : '',
  };
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
  const route = routeParts();
  const active = route.slug === BOOK_SLUG;
  if (active) {
    ensureStyle();
    document.documentElement.dataset.redSoxDiplomacy = 'true';
    if (route.chapter) document.documentElement.dataset.rsdChapter = route.chapter;
    else delete document.documentElement.dataset.rsdChapter;
  } else {
    delete document.documentElement.dataset.redSoxDiplomacy;
    delete document.documentElement.dataset.rsdChapter;
  }
}

function sourceLabelFor(anchor) {
  let url;
  try { url = new URL(anchor.href); } catch { return ''; }
  const exact = EXACT_SOURCE_LABELS.get(url.href);
  if (exact) return exact;
  const host = url.hostname.replace(/^www\./i, '');
  const institution = SOURCE_INSTITUTIONS.find(([pattern]) => pattern.test(host));
  return institution?.[1] || `${host} — original source`;
}

function polishCitationLinks(root = document) {
  if (document.documentElement.dataset.redSoxDiplomacy !== 'true') return;
  root.querySelectorAll?.('a[href^="http"]').forEach((anchor) => {
    if (anchor.dataset.rsdCitationPolished === 'true') return;
    const visible = anchor.textContent.trim();
    if (GENERIC_SOURCE_LABEL.test(visible)) {
      anchor.textContent = sourceLabelFor(anchor);
      anchor.classList.add('rsd-source-link');
    } else if (EXACT_SOURCE_LABELS.has(anchor.href)) {
      anchor.classList.add('rsd-source-link');
    }
    anchor.dataset.rsdCitationPolished = 'true';
  });
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
  polishCitationLinks();
  window.addEventListener('hashchange', () => {
    syncBookIdentity();
    requestAnimationFrame(() => polishCitationLinks());
  });
  window.addEventListener('popstate', () => {
    syncBookIdentity();
    requestAnimationFrame(() => polishCitationLinks());
  });
  document.addEventListener('click', handleArchiveClick, true);

  const root = document.getElementById('bookStage') || document.body;
  new MutationObserver((mutations) => {
    if (document.documentElement.dataset.redSoxDiplomacy !== 'true') return;
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 1) polishCitationLinks(node);
      }
    }
  }).observe(root, { childList: true, subtree: true });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
else initialize();