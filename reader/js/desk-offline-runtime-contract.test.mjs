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

function serviceWorkerShell(source) {
  const match = source.match(/const SHELL = \[([\s\S]*?)\n\];/);
  assert.ok(match, 'service worker must declare a SHELL array');
  return [...match[1].matchAll(/['"](\.\/[^'"]+)['"]/g)].map((row) => row[1]);
}

const STATIC_IMPORT_RE = /(?:import|export)\s+(?:[^'"\n]*?\s+from\s+)?['"](?<path>\.[^'"]+\.js)['"]/g;

assert.match(sw, /const CACHE_PREFIX = ['"]svyable-desk-reader-shell-['"]/);
assert.match(sw, /const CACHE = ['"]svyable-desk-reader-shell-v107['"]/);
assert.match(sw, /key\.startsWith\(CACHE_PREFIX\) && key !== CACHE/);
assert.doesNotMatch(sw, /raw\.githubusercontent\.com/);
assert.match(sw, /const BOOKSELF_READER_ORIGIN = 'https:\/\/svyable\.github\.io';/);
assert.match(sw, /const BOOKSELF_READER_PATH = '\/bookself\/reader\/';/);
assert.match(sw, /url\.origin === BOOKSELF_READER_ORIGIN && url\.pathname\.startsWith\(BOOKSELF_READER_PATH\)/);

for (const helper of helpers) {
  assert.match(sw, new RegExp(`importScripts\\(['"]\\./js/${helper.replace('.', '\\.')}`));
  assert.ok(fs.existsSync(path.join(here, helper)), `${helper} must be local beside the service worker`);
  assert.ok(manifest.includes(`js/${helper}`), `${helper} must be Bookself-owned in the sync manifest`);
}
assert.ok(manifest.includes('sw.js'), 'service worker must be Bookself-owned in the sync manifest');

const shell = serviceWorkerShell(sw);
const shellSet = new Set(shell);
for (const entry of shell) {
  if (entry === './') continue;
  const target = path.resolve(reader, entry.replace(/^\.\//, ''));
  assert.ok(
    fs.existsSync(target),
    `service-worker SHELL must not claim missing local asset: ${entry}`,
  );
}

for (const entry of shell.filter((value) => value.endsWith('.js'))) {
  const sourcePath = path.resolve(reader, entry.replace(/^\.\//, ''));
  const source = fs.readFileSync(sourcePath, 'utf8');
  for (const match of source.matchAll(STATIC_IMPORT_RE)) {
    const dependency = path.resolve(path.dirname(sourcePath), match.groups.path);
    const relative = path.relative(reader, dependency).replaceAll(path.sep, '/');
    if (relative.startsWith('../')) continue;
    assert.ok(
      shellSet.has(`./${relative}`),
      `service-worker SHELL is missing static dependency: ${entry} -> ./${relative}`,
    );
  }
}

const handoff = fs.readFileSync(path.join(here, 'desk-book-opening-handoff.js'), 'utf8');
assert.match(handoff, /from '\.\/router\.js'/);
assert.doesNotMatch(handoff, /svyable\.github\.io\/bookself/);

const tapPolicy = fs.readFileSync(path.join(here, 'desk-page-tap-policy.js'), 'utf8');
assert.match(tapPolicy, /new URL\('\.\/library-sort\.js', import\.meta\.url\)\.href/);
assert.doesNotMatch(tapPolicy, /svyable\.github\.io\/bookself\/reader\/js\/library-sort/);

await import('./offline-fetch-policy.js');
const policy = globalThis.BookselfOfflineFetchPolicy;
assert.equal(policy.responsePlan('publication', true), 'network-first');
assert.equal(policy.responsePlan('shell', true), 'network-first');
assert.equal(policy.responsePlan('external', true), 'cache-then-network');

console.log('Desk offline runtime contract: local shell closure and warm Bookself fallback are coherent');
