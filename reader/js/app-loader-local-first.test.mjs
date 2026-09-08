import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const source = readFileSync(fileURLToPath(new URL('./app-loader.js', import.meta.url)), 'utf8');

assert.match(source, /const canonicalAppUrl = (?:'https:\/\/svyable\.github\.io\/bookself\/reader\/js\/app\.js\?v=r4'|new URL\('\.\/app\.js', import\.meta\.url\)\.href);/);
assert.match(source, /const viewportStabilityUrl = new URL\('\.\/desk-viewport-stability-runtime\.js', import\.meta\.url\)\.href;/);
assert.match(source, /const nativeShareUrl = new URL\('\.\/native-share\.js', import\.meta\.url\)\.href;/);
assert.match(source, /const libraryHomeUrl = new URL\('\.\.\/css\/desk-library-home\.css\?v=bookself-20260904', import\.meta\.url\)\.href;/);
assert.match(source, /const bookOpeningHandoffUrl = new URL\('\.\.\/css\/desk-book-opening-handoff\.css\?v=bookself-20260906', import\.meta\.url\)\.href;/);
assert.match(source, /await import\(canonicalAppUrl\);/);

assert.doesNotMatch(source, /desk-runtime-bridge|installDeskRuntimeBridge/);
assert.doesNotMatch(source, /fetchBootstrapResource/);
assert.doesNotMatch(source, /appAcquisition/);
assert.doesNotMatch(source, /localAppUrl/);
assert.doesNotMatch(source, /acquireReaderApp/);
assert.doesNotMatch(source, /retryDelays:\s*\[\]/);
assert.doesNotMatch(source, /svyable\.github\.io\/shelf\/reader\/js\//);
assert.doesNotMatch(source, /viewport-stability-runtime\.js\?v=/);
assert.doesNotMatch(source, /svyable\.github\.io\/desk\/reader\/css\//);
assert.doesNotMatch(source, /rewriteSharedModuleSpecifiers/);
assert.doesNotMatch(source, /skipDeskCatalogCoverProbe/);
assert.doesNotMatch(source, /sharedReaderOwnsDeskCatalogVisibility/);
assert.doesNotMatch(source, /URL\.createObjectURL/);
assert.doesNotMatch(source, /new Blob\(/);

console.log('Desk Reader has one app import boundary and no runtime bridge; the test remains valid before and after complete local sync');
