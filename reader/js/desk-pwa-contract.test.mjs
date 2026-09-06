import assert from 'node:assert/strict';
import fs from 'node:fs';

const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');
const bridge = fs.readFileSync(new URL('./desk-runtime-bridge.js', import.meta.url), 'utf8');
const worker = fs.readFileSync(new URL('../sw.js', import.meta.url), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('../manifest.webmanifest', import.meta.url), 'utf8'));
const catalogManifest = JSON.parse(fs.readFileSync(new URL('../../catalog.json', import.meta.url), 'utf8'));

assert.equal(manifest.id, './');
assert.equal(manifest.name, 'Sven Hardy Benson’s Desk');
assert.equal(manifest.start_url, './');
assert.equal(manifest.scope, './');
assert.equal(catalogManifest.version, 1);
assert.ok(Array.isArray(catalogManifest.books));
assert.equal(new Set(catalogManifest.books).size, catalogManifest.books.length);

for (const helper of [
  'offline-cache.js',
  'offline-fetch-policy.js',
  'offline-storage-budget.js',
  'offline-shell-install.js',
]) {
  assert.match(worker, new RegExp(`shelf/reader/js/${helper.replaceAll('.', '\\.')}`));
}

assert.match(worker, /const CACHE = 'svyable-desk-reader-v20';/);
assert.match(worker, /const CACHE_PREFIX = 'svyable-desk-reader-';/);
assert.match(worker, /key\.startsWith\(CACHE_PREFIX\) && key !== CACHE/);
assert.match(worker, /const CORE_SHELL = LOCAL_SHELL;/);
assert.match(worker, /'\.\.\/catalog\.json'/);
assert.match(worker, /'\.\/css\/desk-library-home\.css'/);
assert.match(worker, /'\.\/css\/desk-reading-app\.css'/);
assert.match(worker, /'\.\/css\/desk-reading-form-factor\.css'/);
assert.match(worker, /'\.\/js\/desk-reading-app\.js'/);
assert.match(worker, /'js\/pwa-update\.js'/);
assert.match(worker, /'js\/native-share\.js'/);
assert.match(worker, /'css\/settings-panel\.css'/);
assert.match(worker, /'js\/gui\.js'/);
assert.doesNotMatch(worker, /'\.\/js\/settings-hierarchy\.js'/);
assert.match(worker, /'js\/viewport-stability\.js'/);
assert.match(worker, /'js\/viewport-stability-runtime\.js'/);
for (const dependency of [
  'scroll-reflow-anchor-model.js',
  'scroll-reflow-anchor.js',
  'immersive-focus-model.js',
  'immersive-focus.js',
]) {
  assert.match(worker, new RegExp(`'js/${dependency.replaceAll('.', '\\.')}'`));
}
for (const dependency of [
  'one-handed-actions-model.js',
  'one-handed-actions.js',
  'dialog-focus-model.js',
  'dialog-focus-runtime.js',
]) {
  assert.match(worker, new RegExp(`'js/${dependency.replaceAll('.', '\\.')}'`));
}
for (const dependency of [
  'css/media-resilience.css',
  'js/media-resilience-model.js',
  'js/media-resilience.js',
]) {
  assert.match(worker, new RegExp(`'${dependency.replaceAll('.', '\\.')}'`));
}
for (const dependency of [
  'css/library-quick-look.css',
  'js/library-book-preview-model.js',
  'js/library-quick-look.js',
  'js/theme-controls.js',
  'js/global-reader-controls.js',
]) {
  assert.match(worker, new RegExp(`'${dependency.replaceAll('.', '\\.')}'`));
}
const sharedShell = worker.slice(worker.indexOf('const SHARED_PATHS'));
const localShell = worker.slice(worker.indexOf('const LOCAL_SHELL'), worker.indexOf('const SHARED_PATHS'));
assert.match(sharedShell, /library-quick-look/);
assert.match(sharedShell, /library-book-preview-model/);
assert.match(sharedShell, /theme-controls/);
assert.match(sharedShell, /global-reader-controls/);
assert.match(localShell, /desk-library-home\.css/);
assert.match(localShell, /desk-reading-app\.css/);
assert.match(localShell, /desk-reading-form-factor\.css/);
assert.match(localShell, /desk-reading-app\.js/);
assert.doesNotMatch(localShell, /library-quick-look|library-book-preview|theme-controls|global-reader-controls/);
assert.doesNotMatch(worker, /offline-readiness/);
assert.doesNotMatch(worker, /'css\/one-handed-actions\.css'/);
assert.match(worker, /BookselfOfflineCache\.publicationWarmPlan\(self\.navigator\?\.connection \|\| \{\}\)/);
assert.match(worker, /if \(plan\.warmChapters\)/);
assert.match(worker, /!plan\?\.warmChapters/);
assert.match(worker, /!response \|\| !plan\.warmMedia/);
assert.match(worker, /BookselfOfflineFetchPolicy\.isRevisionLookup\(url\.href\)/);
assert.match(worker, /!sameOrigin && !external && !revisionLookup/);
assert.match(worker, /function emptyRevisionResponse\(\)/);
assert.match(worker, /return new Response\('\[\]'/);
assert.match(worker, /async function deferredRevisionResponse\(request\)/);
assert.match(worker, /if \(revisionLookup\) \{[\s\S]*event\.waitUntil\(network[\s\S]*event\.respondWith\(deferredRevisionResponse\(request\)\);[\s\S]*return;/);

assert.match(loader, /installDeskRuntimeBridge/);
assert.match(loader, /fetchBootstrapResource/);
assert.ok(loader.indexOf('installDeskRuntimeBridge();') < loader.indexOf('fetchBootstrapResource(appUrl'));
assert.doesNotMatch(loader, /adaptSharedReaderAppSource/);
assert.match(loader, /DESK_CATALOG_AUDIT/);
assert.match(loader, /catalogEntryVisible/);
assert.match(loader, /rewriteSharedModuleSpecifiers\(source, upstream\)/);
assert.match(loader, /viewport-stability-runtime\.js\?v=r1/);
assert.match(loader, /Viewport stability could not be loaded/);
assert.match(loader, /const appAcquisition = fetchBootstrapResource\(appUrl\)\.then/);
assert.match(loader, /await appAcquisition/);
assert.match(loader, /const nativeShareUrl = `\$\{upstream\}native-share\.js`;/);
assert.match(loader, /Native sharing could not be loaded/);
assert.match(loader, /desk-reading-app\.js\?v=bookself-20260905/);
assert.doesNotMatch(loader, /quickLookUrl|library-quick-look\.js/);
assert.doesNotMatch(loader, /settingsHierarchyUrl|settings-hierarchy\.js/);
assert.match(loader, /document\.documentElement\.dataset\.oneHandedActionsReady = 'true'/);
assert.match(loader, /#readerOneHandedActions/);
assert.match(loader, /\.reader-one-handed-actions/);
assert.doesNotMatch(loader, /const catalogGate =/);
assert.doesNotMatch(loader, /source\.replace\(\s*catalogGate/);
assert.doesNotMatch(bridge, /functionSlice/);
assert.doesNotMatch(bridge, /DESK_CATALOG_GATE/);
assert.doesNotMatch(bridge, /executableSourceMask/);
assert.doesNotMatch(bridge, /catalogGatePattern/);
assert.doesNotMatch(bridge, /adaptDeskCatalogVisibility/);
assert.doesNotMatch(bridge, /adaptSharedReaderAppSource/);
assert.doesNotMatch(bridge, /Expected one shared Reader catalog gate/);
assert.match(bridge, /rewriteSharedModuleSpecifiers/);
assert.match(bridge, /parsePortalCatalogManifest/);
assert.match(bridge, /applyPortalCatalogManifest/);
assert.match(bridge, /new URL\('\.\.\/\.\.\/catalog\.json', moduleUrl\)\.href/);
assert.match(bridge, /nativeFetch\(options\.catalogUrl, \{ cache: 'no-cache' \}\)/);
assert.match(bridge, /isDeskPortalReadme/);
assert.doesNotMatch(bridge, /BOOKSELF_OFFLINE_READINESS/);
assert.doesNotMatch(loader, /serviceWorkerPattern/);

console.log('Desk PWA source contract: canonical Reader controls and library hierarchy are cold-offline safe');