import assert from 'node:assert/strict';
import fs from 'node:fs';

const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');
const index = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');

const acquire = loader.indexOf('const appAcquisition = acquireReaderApp();');
const viewport = loader.indexOf('await import(viewportStabilityUrl)');
const nativeShare = loader.indexOf('await import(nativeShareUrl)');
const openingHandoff = loader.indexOf("await import('./desk-book-opening-handoff.js?v=bookself-20260906')");
const readingApp = loader.indexOf("await import('./desk-reading-app.js?v=bookself-20260905')");
const awaitApp = loader.indexOf('await appAcquisition');
const importApp = loader.indexOf('await import(url)');

assert.ok(acquire >= 0, 'Reader app acquisition should start explicitly');
assert.ok(acquire < viewport, 'Reader app acquisition should overlap optional preflight imports');
assert.ok(viewport < nativeShare, 'viewport preflight order should stay unchanged');
assert.ok(nativeShare < openingHandoff, 'native-share preflight should precede the unified opening adapter');
assert.doesNotMatch(loader, /desk-cover-actions\.js/, 'Bookself #295 should have one Desk adapter owner');
assert.ok(openingHandoff < readingApp, 'book-opening preflight order should stay unchanged');
assert.ok(readingApp < awaitApp, 'all pre-app adapters should finish before Reader app evaluation');
assert.ok(awaitApp < importApp, 'Reader app acquisition should finish before evaluation');

assert.match(loader, /const localAppUrl = new URL\('\.\/app\.js', import\.meta\.url\)\.href;/);
assert.match(loader, /const canonicalReader = 'https:\/\/svyable\.github\.io\/bookself\/reader\/js\/';/);
assert.match(loader, /await fetchBootstrapResource\(localAppUrl, \{ retryDelays: \[\] \}\)/);
assert.match(loader, /return \{ local: true, url: localAppUrl \};/);
assert.match(loader, /return \{ local: false, url: canonicalAppUrl \};/);
assert.match(loader, /new URL\('\.\.\/css\/desk-library-home\.css\?v=bookself-20260904', import\.meta\.url\)\.href/);
assert.match(loader, /new URL\('\.\.\/css\/desk-book-opening-handoff\.css\?v=bookself-20260906', import\.meta\.url\)\.href/);
assert.doesNotMatch(loader, /svyable\.github\.io\/shelf\/reader\/js\//, 'Desk must not execute Reader modules from Shelf');
assert.doesNotMatch(loader, /rewriteSharedModuleSpecifiers|createObjectURL|new Blob|sharedReaderOwnsDeskCatalogVisibility/, 'removed source surgery must stay removed');
assert.match(loader, /showRecovery\(error\)/);
assert.doesNotMatch(loader, /Promise\.all\(/, 'pre-app adapters should remain ordered');

assert.doesNotMatch(index, /<base\s+href="https:\/\/svyable\.github\.io\/shelf\/reader\/"/, 'Desk must not globally route relative URLs through Shelf');
assert.match(index, /src="js\/app-loader\.js\?v=/, 'Desk bootstrap should load from the local Reader tree');
assert.match(index, /src="js\/desk-page-tap-policy\.js\?v=/, 'Desk tap policy should load from the local Reader tree');
assert.match(index, /https:\/\/svyable\.github\.io\/bookself\/reader\/js\/experience\.js/, 'shared Reader modules should identify canonical Bookself explicitly');
assert.match(index, /https:\/\/svyable\.github\.io\/bookself\/reader\/css\/style\.css/, 'shared Reader CSS should identify canonical Bookself explicitly');
assert.doesNotMatch(index, /https:\/\/svyable\.github\.io\/shelf\/reader\/(?:js|css|vendor)\//, 'Desk must not acquire shared runtime assets from personal Shelf');
assert.doesNotMatch(index, /src="https:\/\/svyable\.github\.io\/desk\/reader\/js\//, 'Desk-owned modules must not depend on deployed Desk Pages');

console.log('Desk bootstrap acquisition contract: 27 assertions passed');
