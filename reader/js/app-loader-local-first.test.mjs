import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const source = readFileSync(fileURLToPath(new URL('./app-loader.js', import.meta.url)), 'utf8');

assert.match(source, /const localAppUrl = '\.\/js\/app\.js';/);
assert.match(source, /const canonicalReader = 'https:\/\/svyable\.github\.io\/bookself\/reader\/js\/';/);
assert.match(source, /const canonicalAppUrl = `\$\{canonicalReader\}app\.js\?v=r4`;/);
assert.match(source, /const libraryHomeUrl = '\.\.\/css\/desk-library-home\.css\?v=bookself-20260904';/);
assert.match(source, /const bookOpeningHandoffUrl = '\.\.\/css\/desk-book-opening-handoff\.css\?v=bookself-20260906';/);
assert.match(source, /fetchBootstrapResource\(localAppUrl, \{ retryDelays: \[\] \}\)/);
assert.match(source, /fetchBootstrapResource\(canonicalAppUrl\)/);
assert.match(source, /return \{ local: true, url: '\.\/app\.js' \};/);
assert.match(source, /return \{ local: false, url: canonicalAppUrl \};/);
assert.match(source, /const \{ url \} = await appAcquisition;\s*await import\(url\);/s);

assert.doesNotMatch(source, /svyable\.github\.io\/shelf\/reader\/js\//);
assert.doesNotMatch(source, /svyable\.github\.io\/desk\/reader\/css\//);
assert.doesNotMatch(source, /rewriteSharedModuleSpecifiers/);
assert.doesNotMatch(source, /skipDeskCatalogCoverProbe/);
assert.doesNotMatch(source, /sharedReaderOwnsDeskCatalogVisibility/);
assert.doesNotMatch(source, /URL\.createObjectURL/);
assert.doesNotMatch(source, /new Blob\(/);

console.log('Desk Reader prefers local app, keeps Desk-owned CSS local, and falls back directly to canonical Bookself without Shelf source rewriting');
