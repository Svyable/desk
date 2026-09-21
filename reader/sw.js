importScripts('./js/offline-cache.js');
importScripts('./js/offline-fetch-policy.js');
importScripts('./js/offline-storage-budget.js');
importScripts('./js/offline-shell-install.js');

const CACHE_PREFIX = 'svyable-desk-reader-shell-';
const CACHE = 'svyable-desk-reader-shell-v112';
const KATEX_CDN = 'https://cdn.jsdelivr.net/npm/katex@0.18.4/dist/katex.min.js';
const BOOKSELF_READER_ORIGIN = 'https://svyable.github.io';
const BOOKSELF_READER_PATH = '/bookself/reader/';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './app-icon.svg',
  './css/app-shell-polish.css',
  './css/desk-book-interior.css',
  './css/desk-book-opening-handoff.css',
  './css/desk-page-tap-policy.css',
  './css/desk-reading-app.css',
  './css/desk-reading-form-factor.css',
  './css/desk-red-sox-diplomacy.css',
  './css/library-home.css',
  './js/app-loader.js',
  './js/app-shell-polish.js',
  './js/desk-book-interior.js',
  './js/desk-book-opening-handoff.js',
  './js/desk-page-tap-policy.js',
  './js/desk-reading-app.js',
  './js/desk-red-sox-diplomacy.js',
  './js/desk-viewport-stability-runtime.js',
  './js/immersive-focus-model.js',
  './js/immersive-focus.js',
  './js/library-sort-model.js',
  './js/library-sort.js',
  './js/native-share.js',
  './js/router.js',
  './js/reading-trail-model.js',
  './js/offline-cache.js',
  './js/offline-fetch-policy.js',
  './js/offline-shell-install.js',
  './js/offline-storage-budget.js',
  './js/page-tap-zones.js',
  './js/router.js',
  './js/reading-trail-model.js',
  './js/scroll-reflow-anchor-model.js',
  './js/scroll-reflow-anchor.js',
  './js/viewport-stability.js',
];

const OPTIONAL_SHELL = new Set([
  './css/app-shell-polish.css',
  './css/desk-book-interior.css',
  './css/desk-book-opening-handoff.css',
  './css/desk-reading-app.css',
  './css/desk-reading-form-factor.css',
  './css/desk-red-sox-diplomacy.css',
  './js/app-shell-polish.js',
  './js/desk-book-interior.js',
  './js/desk-book-opening-handoff.js',
  './js/desk-reading-app.js',
  './js/desk-red-sox-diplomacy.js',
  './js/library-sort-model.js',
  './js/library-sort.js',
  './js/native-share.js',
]);
const CORE_SHELL = SHELL.filter((url) => !OPTIONAL_SHELL.has(url));

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
      .then((keys) => Promise.all(keys
        .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE)
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

function cacheableExternal(url) {
  return url.href === KATEX_CDN
    || url.origin === 'https://fonts.googleapis.com'
    || url.origin === 'https://fonts.gstatic.com'
    || (url.origin === BOOKSELF_READER_ORIGIN && url.pathname.startsWith(BOOKSELF_READER_PATH));
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
    // A full cache must not interfere with the book currently being read.
  }
  return response;
}

function emptyRevisionResponse() {
  return new Response('[]', {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

async function deferredRevisionResponse(request) {
  const cached = await cachedResponse(request, false);
  return cached || emptyRevisionResponse();
}

function after(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function respondWithPolicy(request, network, kind, sameOrigin) {
  const cached = await cachedResponse(request, sameOrigin);
  const plan = self.BookselfOfflineFetchPolicy.responsePlan(kind, !!cached);

  if (plan === 'cache-then-network') return cached;
  if (plan === 'network-with-cache-deadline') {
    const deadline = self.BookselfOfflineFetchPolicy.deadlineMs(kind);
    return Promise.race([network, after(deadline, cached)]).catch(() => cached);
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
      // A full cache must not interfere with the book currently being read.
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

async function warmPublication(readmeResponse, readmeUrl, plan) {
  if (!readmeResponse?.ok || !plan?.warmChapters) return;
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
    if (!response || !plan.warmMedia) return;
    await warmChapterMedia(cache, response.clone(), href, readmeUrl.href);
  }));
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  const external = cacheableExternal(url);
  const revisionLookup = self.BookselfOfflineFetchPolicy.isRevisionLookup(url.href);
  if (!sameOrigin && !external && !revisionLookup) return;

  const network = networkResponse(req);

  // Revision provenance is useful enrichment, but it must not block opening a
  // publication. A cached result is immediate; a cold lookup fills that cache
  // in the background while app.js falls back to Last-Modified and History URL.
  if (revisionLookup) {
    event.waitUntil(network.then(() => {}).catch(() => {}));
    event.respondWith(deferredRevisionResponse(req));
    return;
  }

  const kind = self.BookselfOfflineFetchPolicy.classifyRequest(url.href, {
    sameOrigin,
    external,
    shellUrls: SHELL_URLS,
  });

  // Keep revalidation alive even when a cached response wins immediately. The
  // next request then sees the fresh copy; network-first requests simply share
  // the same in-flight response.
  event.waitUntil(network.then(() => {}).catch(() => {}));

  if (sameOrigin && self.BookselfOfflineCache.isPublicationReadme(url.href)) {
    const plan = self.BookselfOfflineCache.publicationWarmPlan(self.navigator?.connection || {});
    if (plan.warmChapters) {
      event.waitUntil(
        network
          .then((res) => warmPublication(res.clone(), url, plan))
          .catch(() => {})
      );
    }
  }

  event.respondWith(respondWithPolicy(req, network, kind, sameOrigin));
});