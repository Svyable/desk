import assert from 'node:assert/strict';
import fs from 'node:fs';

const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');
const index = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const readme = fs.readFileSync(new URL('../../README.md', import.meta.url), 'utf8');
const catalog = JSON.parse(fs.readFileSync(new URL('../../catalog.json', import.meta.url), 'utf8'));

const viewport = loader.indexOf('await import(viewportStabilityUrl)');
const nativeShare = loader.indexOf('await import(nativeShareUrl)');
const openingHandoff = loader.indexOf("await import('./desk-book-opening-handoff.js?v=bookself-20260906')");
const readingApp = loader.indexOf("await import('./desk-reading-app.js?v=bookself-20260905')");
const importApp = loader.indexOf('await import(canonicalAppUrl)');

assert.ok(viewport >= 0, 'viewport preflight should remain explicit');
assert.ok(viewport < nativeShare, 'viewport preflight order should stay unchanged');
assert.ok(nativeShare < openingHandoff, 'native-share preflight should precede the unified opening adapter');
assert.doesNotMatch(loader, /desk-cover-actions\.js/, 'Bookself #295 should have one Desk adapter owner');
assert.ok(openingHandoff < readingApp, 'book-opening preflight order should stay unchanged');
assert.ok(readingApp < importApp, 'all pre-app adapters should finish before Reader app evaluation');

assert.match(loader, /const canonicalAppUrl = (?:'https:\/\/svyable\.github\.io\/bookself\/reader\/js\/app\.js\?v=r4'|new URL\('\.\/app\.js', import\.meta\.url\)\.href);/);
assert.doesNotMatch(loader, /desk-runtime-bridge|installDeskRuntimeBridge|fetchBootstrapResource|acquireReaderApp|appAcquisition/);
assert.doesNotMatch(loader, /rewriteSharedModuleSpecifiers|createObjectURL|new Blob|sharedReaderOwnsDeskCatalogVisibility/);
assert.match(loader, /showRecovery\(error\)/);
assert.doesNotMatch(loader, /Promise\.all\(/, 'pre-app adapters should remain ordered');

assert.match(index, /rel="manifest" href="https:\/\/svyable\.github\.io\/desk\/reader\/manifest\.webmanifest"/, 'Desk shell already owns its manifest directly');
assert.doesNotMatch(index, /<base\s+href="https:\/\/svyable\.github\.io\/shelf\/reader\/"/, 'Desk must not globally route relative URLs through Shelf');
assert.match(index, /src="js\/app-loader\.js\?v=/, 'Desk bootstrap should load from the local Reader tree');
assert.match(index, /src="js\/desk-page-tap-policy\.js\?v=/, 'Desk tap policy should load from the local Reader tree');
assert.doesNotMatch(index, /https:\/\/svyable\.github\.io\/shelf\/reader\/(?:js|css|vendor)\//, 'Desk must not acquire shared runtime assets from personal Shelf');
assert.doesNotMatch(index, /src="https:\/\/svyable\.github\.io\/desk\/reader\/js\//, 'Desk-owned modules must not depend on deployed Desk Pages');

assert.equal(catalog.version, 1);
assert.ok(Array.isArray(catalog.books) && catalog.books.length > 0, 'Desk catalog manifest should remain populated');
for (const slug of catalog.books) {
  assert.ok(readme.includes(`books/${slug}/`), `root README should remain the canonical Reader catalog for ${slug}`);
}

console.log(`Desk bootstrap ownership contract: runtime bridge retired; ${catalog.books.length} catalog entries remain discoverable from README`);
