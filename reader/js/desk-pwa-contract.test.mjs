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

assert.match(worker, /const CACHE = 'svyable-desk-reader-v2';/);
assert.match(worker, /const CACHE_PREFIX = 'svyable-desk-reader-';/);
assert.match(worker, /key\.startsWith\(CACHE_PREFIX\) && key !== CACHE/);
assert.match(worker, /const CORE_SHELL = LOCAL_SHELL;/);
assert.match(worker, /'js\/pwa-update\.js'/);
assert.doesNotMatch(worker, /offline-readiness/);

assert.match(loader, /installDeskRuntimeBridge/);
assert.match(loader, /fetchBootstrapResource/);
assert.ok(loader.indexOf('installDeskRuntimeBridge();') < loader.indexOf('fetchBootstrapResource(appUrl'));
assert.match(loader, /adaptSharedReaderAppSource/);
assert.doesNotMatch(loader, /const catalogGate =/);
assert.doesNotMatch(loader, /source\.replace\(\s*catalogGate/);
assert.match(bridge, /functionSlice/);
assert.match(bridge, /adaptDeskCatalogVisibility/);
assert.match(bridge, /loadCatalog\(\) contract was not found/);
assert.match(bridge, /publication gate escaped loadCatalog/);
assert.match(bridge, /window\.__IMPRINT\?\.role === 'desk'/);
assert.doesNotMatch(bridge, /BOOKSELF_OFFLINE_READINESS/);
assert.doesNotMatch(loader, /serviceWorkerPattern/);

console.log('Desk PWA source contract: 27 assertions passed');
