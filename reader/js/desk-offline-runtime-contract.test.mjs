import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const reader = path.resolve(here, '..');
const sw = fs.readFileSync(path.join(reader, 'sw.js'), 'utf8');
const manifest = fs.readFileSync(path.join(reader, '.bookself-runtime-files'), 'utf8').trim().split(/\r?\n/);
const helpers = [
  'offline-cache.js',
  'offline-fetch-policy.js',
  'offline-storage-budget.js',
  'offline-shell-install.js',
];

assert.match(sw, /const CACHE_PREFIX = ['"]desk-reader-shell-['"]/);
assert.match(sw, /const CACHE = ['"]desk-reader-shell-v106['"]/);
assert.match(sw, /key\.startsWith\(CACHE_PREFIX\) && key !== CACHE/);
assert.doesNotMatch(sw, /svyable\.github\.io|raw\.githubusercontent\.com/);
assert.match(sw, /'\.\/js\/app-loader\.js'/, 'Desk service-worker shell should cache its real local entrypoint');
assert.doesNotMatch(sw, /'\.\/js\/app\.js'/, 'transitional Desk must not claim a local canonical app that is absent');
assert.doesNotMatch(sw, /'\.\/js\/startup-publication-primer\.js'/, 'transitional Desk must not require unsynced canonical modules');
for (const helper of helpers) {
  assert.match(sw, new RegExp(`importScripts\\(['"]\\./js/${helper.replace('.', '\\.')}`));
  assert.ok(fs.existsSync(path.join(here, helper)), `${helper} must be local beside the service worker`);
  assert.ok(manifest.includes(`js/${helper}`), `${helper} must be Bookself-owned in the sync manifest`);
}
assert.ok(manifest.includes('sw.js'), 'service worker must be Bookself-owned in the sync manifest');

console.log('Desk offline runtime contract: transitional shell is local, scoped, and installable');
