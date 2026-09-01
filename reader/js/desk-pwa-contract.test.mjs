import assert from 'node:assert/strict';
import fs from 'node:fs';

const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');
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

assert.match(worker, /const CACHE_PREFIX = 'svyable-desk-reader-';/);
assert.match(worker, /key\.startsWith\(CACHE_PREFIX\) && key !== CACHE/);
assert.match(worker, /const CORE_SHELL = LOCAL_SHELL;/);
assert.match(worker, /'js\/pwa-update\.js'/);
assert.match(worker, /'js\/offline-readiness\.js'/);

assert.match(loader, /installDeskRuntimeBridge/);
assert.match(loader, /fetchBootstrapResource/);
assert.ok(loader.indexOf('installDeskRuntimeBridge();') < loader.indexOf('fetchBootstrapResource(appUrl'));
assert.match(loader, /rewriteSharedModuleSpecifiers/);
assert.match(loader, /unresolved relative module imports/);
assert.match(loader, /window\.__IMPRINT\?\.role === 'desk'/);
assert.doesNotMatch(loader, /serviceWorkerPattern/);

console.log('Desk PWA source contract: 20 assertions passed');
