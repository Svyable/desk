import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const source = readFileSync(fileURLToPath(new URL('./app-loader.js', import.meta.url)), 'utf8');

assert.match(source, /const localAppUrl = new URL\('\.\/app\.js', import\.meta\.url\)\.href;/);
assert.match(source, /const canonicalReader = 'https:\/\/svyable\.github\.io\/bookself\/reader\/js\/';/);
assert.match(source, /const canonicalAppUrl = `\$\{canonicalReader\}app\.js\?v=r4`;/);
assert.match(source, /const viewportStabilityUrl = new URL\('\.\/desk-viewport-stability-runtime\.js', import\.meta\.url\)\.href;/);
assert.match(source, /const nativeShareUrl = new URL\('\.\/native-share\.js', import\.meta\.url\)\.href;/);
assert.match(source, /const libraryHomeUrl = new URL\('\.\.\/css\/desk-library-home\.css\?v=bookself-20260904', import\.meta\.url\)\.href;/);
assert.match(source, /const bookOpeningHandoffUrl = new URL\('\.\.\/css\/desk-book-opening-handoff\.css\?v=bookself-20260906', import\.meta\.url\)\.href;/);
assert.match(source, /fetchBootstrapResource\(localAppUrl, \{ retryDelays: \[\] \}\)/);
assert.match(source, /fetchBootstrapResource\(canonicalAppUrl\)/);
assert.match(source, /return \{ local: true, url: localAppUrl \};/);
assert.match(source, /return \{ local: false, url: canonicalAppUrl \};/);
assert.match(source, /const \{ url \} = await appAcquisition;\s*await import\(url\);/s);

assert.doesNotMatch(source, /svyable\.github\.io\/shelf\/reader\/js\//);
assert.doesNotMatch(source, /viewport-stability-runtime\.js\?v=/);
assert.doesNotMatch(source, /svyable\.github\.io\/desk\/reader\/css\//);
assert.doesNotMatch(source, /rewriteSharedModuleSpecifiers/);
assert.doesNotMatch(source, /skipDeskCatalogCoverProbe/);
assert.doesNotMatch(source, /sharedReaderOwnsDeskCatalogVisibility/);
assert.doesNotMatch(source, /URL\.createObjectURL/);
assert.doesNotMatch(source, /new Blob\(/);

console.log('Desk Reader resolves viewport stability and native sharing locally; only app.js retains a canonical Bookself fallback');
