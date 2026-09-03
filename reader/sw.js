importScripts(
  'https://svyable.github.io/shelf/reader/js/offline-cache.js',
  'https://svyable.github.io/shelf/reader/js/offline-fetch-policy.js',
  'https://svyable.github.io/shelf/reader/js/offline-storage-budget.js',
  'https://svyable.github.io/shelf/reader/js/offline-shell-install.js'
);

const CACHE = 'svyable-desk-reader-v5';
const CACHE_PREFIX = 'svyable-desk-reader-';
const SHARED_READER = 'https://svyable.github.io/shelf/reader/';
const KATEX_CDN = 'https://cdn.jsdelivr.net/npm/katex@0.18.4/dist/katex.min.js';

const LOCAL_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './js/app-loader.js',
  './js/desk-runtime-bridge.js',
];

const SHARED_PATHS = [
  'css/style.css',
  'css/experience.css',
  'css/experience-scroll.css',
  'css/scroll-performance.css',
  'css/typesetting.css',
  'css/atmosphere.css',
  'css/atmosphere-library.css',
  'css/navigation.css',
  'css/reading-surface.css',
  'css/reading-chrome.css',
  'css/reading-content.css',
  'css/content-scroll-regions.css',
  'css/gui.css',
  'css/search-navigation.css',
  'css/search-landing.css',
  'css/selection-marker.css',
  'css/annotation-navigator.css',
  'css/reader-state-backup.css',
  'css/pwa-update.css',
  'css/reading-trail.css',
  'css/bookmark-atlas.css',
  'css/cover-design.css',
  'css/content-inspector.css',
  'css/direct-route-preview.css',
  'css/scroll-chapter-nav.css',
  'css/media.css',
  'css/formats.css',
  'css/math.css',
  'css/academic.css',
  'vendor/marked.min.js',
  'js/atmosphere.js',
  'js/navigation.js',
  'js/content-navigation.js',
  'js/reading-surface.js',
  'js/viewport-stability.js',
  'js/viewport-stability-runtime.js',
  'js/scroll-reflow-anchor-model.js',
  'js/scroll-reflow-anchor.js',
  'js/immersive-focus-model.js',
  'js/immersive-focus.js',
  'js/immersive-chrome.js',
  'js/font-readiness.js',
  'js/font-readiness-runtime.js',
  'js/font-settlement.js',
  'js/font-settlement-model.js',
  'js/reading-position.js',
  'js/reading-continuity.js',
  'js/page-drag.js',
  'js/reader-keyboard-policy.js',
  'js/reader-keyboard-runtime.js',
  'js/app.js',
  'js/route-queue.js',
  'js/pagination-scheduler.js',
  'js/experience.js',
  'js/scroll-performance-model.js',
  'js/scroll-performance.js',
  'js/gui.js',
  'js/dialog-stack.js',
  'js/pwa-update-model.js',
  'js/pwa-update.js',
  'js/native-share.js',
  'js/search-navigation.js',
  'js/search-landing.js',
  'js/cover-presentation.js',
  'js/cover-runtime.js',
  'js/media.js',
  'js/media-viewer.js',
  'js/content-scroll-region-model.js',
  'js/content-scroll-regions.js',
  'js/formats.js',
  'js/math.js',
  'js/academic.js',
  'js/base.js',
  'js/resource-cache.js',
  'js/navigation-prefetch.js',
  'js/startup-catalog-primer.js',
  'js/startup-publication-primer.js',
  'js/catalog.js',
  'js/imprint.js',
  'js/presentation.js',
  'js/presentation-runtime.js',
  'js/markdown.js',
  'js/derivation-cache.js',
  'js/paginate.js',
  'js/storage.js',
  'js/router.js',
  'js/reading-trail-model.js',
  'js/reading-trail.js',
  'js/bookmark-atlas-model.js',
  'js/bookmark-atlas.js',
  'js/notes.js',
  'js/annotations.js',
  'js/annotation-anchor-model.js',
  'js/annotation-anchor-repair.js',
  'js/annotation-navigator-model.js',
  'js/annotation-backup.js',
  'js/annotation-navigator.js',
  'js/annotation-navigator-modal.js',
  'js/reader-state-backup.js',
  'js/reader-state-backup-runtime.js',
  'js/reader-state-transaction.js',
  'js/selection-memory.js',
  'js/selection-marker.js',
  'js/selection-actions.js',
  'js/search.js',
  'js/cooperative-search-model.js',
  'js/progressive-library-search-model.js',
  'js/progressive-library-search.js',
  'js/content-inspector-model.js',
  'js/content-inspector.js',
  'js/reading-wake-lock-model.js',
  'js/reading-wake-lock.js',
  'js/read-aloud-model.js',
  'js/read-aloud.js',
  'js/reading-guide-model.js',
  'js/reading-guide.js',
  'js/accessibility-surface-model.js',
  'js/accessibility-surfaces.js',
  'js/direct-route-preview-model.js',
  'js/direct-route-preview.js',
  'js/direct-route-actions-model.js',
  'js/direct-route-actions.js',
  'js/reading-mode-transition-model.js',
  'js/reading-mode-transition.js',
  'js/scroll-chapter-nav-model.js',
  'js/scroll-chapter-nav.js',
  'js/continuous-keyboard-model.js',
  'js/continuous-keyboard.js',
  'js/reading-session-model.js',
  'js/reading-session.js',
  'js/export.js',
  'js/offline-cache.js',
  'js/offline-fetch-policy.js',
  'js/offline-storage-budget.js',
  'js/offline-shell-install.js',
  'js/progress-position.js',
  'js/semantic-progress.js',
  'js/chapter-availability-model.js',
  'js/chapter-availability.js',
];
const SHARED_SHELL = SHARED_PATHS.map((path) => new URL(path, SHARED_READER).href);
const SHELL = [...LOCAL_SHELL, ...SHARED_SHELL];
const CORE_SHELL = LOCAL_SHELL;
const SHELL_URLS = self.BookselfOfflineFetchPolicy.shellUrlSet(SHELL, self.location.href);
const warmScheduler = self.BookselfOfflineCache.createWarmScheduler({ concurrency: 3 });
const warmBudget = self.BookselfOfflineStorageBudget.createBudgetMonitor({
  estimate: self.navigator?.storage?.estimate
    ? () => self.navigator.storage.estimate()
    : null,
  ttlMs: 1200,
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => self.BookselfOfflineShellInstall.installShell(
      cache,
      SHELL,
      CORE_SHELL,
      { concurrency: 4 }
    ))
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'BOOKSELF_ACTIVATE_UPDATE') self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function cacheableExternal(url) {
  return url.href === KATEX_CDN
    || url.origin === 'https://fonts.googleapis.com'
    || url.origin === 'https://fonts.gstatic.com';
}

async function cachedResponse(request, sameOrigin) {
  const cache = await caches.open(CACHE);
  return cache.match(request, { ignoreSearch: sameOrigin });
}

async function networkResponse(request) {
  const response = await fetch(request);
  if (!response.ok) return response;
  try {
    const cache = await caches.open(CACHE);
    await cache.put(request, response.clone());
  } catch {
    // Cache pressure must never interfere with the manuscript being read.
  }
  return response;
}

function after(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function respondWithPolicy(request, network, kind, sameOrigin) {
  const cached = await cachedResponse(request, sameOrigin);
  const plan = self.BookselfOfflineFetchPolicy.responsePlan(kind, !!cached);

  if (plan === 'cache-then-network' && cached) return cached;
  if (plan === 'network-with-cache-deadline') {
    const deadline = self.BookselfOfflineFetchPolicy.deadlineMs(kind);
    return Promise.race([network, after(deadline, cached)]).then(
      (response) => response || network
    ).catch(() => cached);
  }
  return network.catch(() => cached || Promise.reject(new Error('Network unavailable and no cached response')));
}

function cacheRequest(cache, href, kind = 'other') {
  return warmScheduler.run(href, async () => {
    const request = new Request(href, { credentials: 'same-origin' });
    const existing = await cache.match(request, { ignoreSearch: true });
    if (existing) return existing;
    const decision = await warmBudget.canWarm(kind);
    if (!decision.allow) return null;
    const response = await fetch(request);
    if (!response.ok) return null;
    try {
      await cache.put(request, response.clone());
      warmBudget.invalidate();
    } catch {
      // Cache pressure must never interfere with the manuscript being read.
    }
    return response;
  });
}

async function warmChapterMedia(cache, chapterResponse, chapterUrl, publicationUrl) {
  if (!chapterResponse?.ok) return;
  let markdown;
  try {
    markdown = await chapterResponse.text();
  } catch {
    return;
  }
  const media = self.BookselfOfflineCache.mediaLinks(markdown, chapterUrl, publicationUrl);
  await Promise.allSettled(media.map((href) => cacheRequest(cache, href, 'media')));
}

async function warmPublication(readmeResponse, readmeUrl) {
  if (!readmeResponse?.ok) return;
  let markdown;
  try {
    markdown = await readmeResponse.text();
  } catch {
    return;
  }

  const chapters = self.BookselfOfflineCache.chapterLinks(markdown, readmeUrl.href);
  if (!chapters.length) return;
  const cache = await caches.open(CACHE);
  await Promise.allSettled(chapters.map(async (href) => {
    const response = await cacheRequest(cache, href, 'chapter');
    if (!response) return;
    await warmChapterMedia(cache, response.clone(), href, readmeUrl.href);
  }));
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  const sameOrigin = url.origin === location.origin;
  const external = cacheableExternal(url);
  if (!sameOrigin && !external) return;

  const kind = self.BookselfOfflineFetchPolicy.classifyRequest(url.href, {
    sameOrigin,
    external,
    shellUrls: SHELL_URLS,
  });
  const network = networkResponse(request);
  event.waitUntil(network.then(() => {}).catch(() => {}));

  if (sameOrigin && self.BookselfOfflineCache.isPublicationReadme(url.href)) {
    event.waitUntil(
      network
        .then((response) => warmPublication(response.clone(), url))
        .catch(() => {})
    );
  }

  event.respondWith(respondWithPolicy(request, network, kind, sameOrigin));
});
