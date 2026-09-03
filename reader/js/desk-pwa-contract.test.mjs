import assert from 'node:assert/strict';
import fs from 'node:fs';

const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');
const bridge = fs.readFileSync(new URL('./desk-runtime-bridge.js', import.meta.url), 'utf8');
const worker = fs.readFileSync(new URL('../sw.js', import.meta.url), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('../manifest.webmanifest', import.meta.url), 'utf8'));

assert.equal(manifest.id, './');
assert.equal(manifest.name, 'Svyable Desk Reader');
assert.equal(manifest.start_url, './');
assert.equal(manifest.scope, './');

for (const helper of [
  'offline-cache.js',
  'offline-fetch-policy.js',
  'offline-storage-budget.js',
  'offline-shell-install.js',
]) {
  assert.match(worker, new RegExp(`shelf/reader/js/${helper.replaceAll('.', '\\.')}`));
}

assert.match(worker, /const CACHE = 'svyable-desk-reader-v9';/);
assert.match(worker, /const CACHE_PREFIX = 'svyable-desk-reader-';/);
assert.match(worker, /key\.startsWith\(CACHE_PREFIX\) && key !== CACHE/);
assert.match(worker, /const CORE_SHELL = LOCAL_SHELL;/);
assert.match(worker, /'js\/pwa-update\.js'/);
assert.match(worker, /'js\/native-share\.js'/);
assert.match(worker, /'css\/settings-panel\.css'/);
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
assert.doesNotMatch(worker, /offline-readiness/);
assert.doesNotMatch(worker, /'css\/one-handed-actions\.css'/);
assert.match(worker, /BookselfOfflineCache\.publicationWarmPlan\(self\.navigator\?\.connection \|\| \{\}\)/);
assert.match(worker, /if \(plan\.warmChapters\)/);
assert.match(worker, /!plan\?\.warmChapters/);
assert.match(worker, /!response \|\| !plan\.warmMedia/);

assert.match(loader, /installDeskRuntimeBridge/);
assert.match(loader, /fetchBootstrapResource/);
assert.ok(loader.indexOf('installDeskRuntimeBridge();') < loader.indexOf('fetchBootstrapResource(appUrl'));
assert.match(loader, /adaptSharedReaderAppSource/);
assert.match(loader, /viewport-stability-runtime\.js\?v=r1/);
assert.match(loader, /Viewport stability could not be loaded/);
assert.ok(loader.indexOf('await import(viewportStabilityUrl)') < loader.indexOf('fetchBootstrapResource(appUrl'));
assert.match(loader, /const nativeShareUrl = `\$\{upstream\}native-share\.js`;/);
assert.match(loader, /Native sharing could not be loaded/);
assert.ok(loader.indexOf('await import(nativeShareUrl)') < loader.indexOf('fetchBootstrapResource(appUrl'));
assert.match(loader, /document\.documentElement\.dataset\.oneHandedActionsReady = 'true'/);
assert.match(loader, /#readerOneHandedActions/);
assert.match(loader, /\.reader-one-handed-actions/);
assert.doesNotMatch(loader, /const catalogGate =/);
assert.doesNotMatch(loader, /source\.replace\(\s*catalogGate/);
assert.doesNotMatch(bridge, /functionSlice/);
assert.match(bridge, /executableSourceMask/);
assert.match(bridge, /adaptDeskCatalogVisibility/);
assert.match(bridge, /Expected one shared Reader catalog gate/);
assert.match(bridge, /window\.__IMPRINT\?\.role === 'desk'/);
assert.doesNotMatch(bridge, /BOOKSELF_OFFLINE_READINESS/);
assert.doesNotMatch(loader, /serviceWorkerPattern/);

console.log('Desk PWA source contract: 56 assertions passed');
