import assert from 'node:assert/strict';
import fs from 'node:fs';

const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');

const acquire = loader.indexOf('const appAcquisition = fetchBootstrapResource(appUrl).then(');
const viewport = loader.indexOf('await import(viewportStabilityUrl)');
const nativeShare = loader.indexOf('await import(nativeShareUrl)');
const coverActions = loader.indexOf("await import('./desk-cover-actions.js?v=bookself-20260905')");
const openingHandoff = loader.indexOf("await import('./desk-book-opening-handoff.js?v=bookself-20260905')");
const readingApp = loader.indexOf("await import('./desk-reading-app.js?v=bookself-20260905')");
const awaitApp = loader.indexOf('await appAcquisition');
const importSharedApp = loader.indexOf('await import(moduleUrl)');

assert.ok(acquire >= 0, 'shared app acquisition should start explicitly');
assert.ok(acquire < viewport, 'shared app acquisition should start before viewport preflight');
assert.ok(viewport < nativeShare, 'viewport preflight order should stay unchanged');
assert.ok(nativeShare < coverActions, 'native-share preflight order should stay unchanged');
assert.ok(coverActions < openingHandoff, 'cover-action preflight order should stay unchanged');
assert.ok(openingHandoff < readingApp, 'book-opening preflight order should stay unchanged');
assert.ok(readingApp < awaitApp, 'all pre-app adapters should finish before shared app evaluation');
assert.ok(awaitApp < importSharedApp, 'shared app source should still be acquired before evaluation');

assert.match(loader, /\(response\) => \(\{ response, error: null \}\)/);
assert.match(loader, /\(error\) => \(\{ response: null, error \}\)/);
assert.match(loader, /if \(!response\) throw appAcquisitionError \|\| new Error\('Shared Reader app could not be acquired\.'\)/);
assert.match(loader, /showRecovery\(error\)/);

// Overlap acquisition only: do not parallelize initialization or bypass the
// active Desk catalog compatibility guard.
assert.match(loader, /DESK_CATALOG_AUDIT/);
assert.match(loader, /sharedReaderOwnsDeskCatalogVisibility/);
assert.match(loader, /rewriteSharedModuleSpecifiers\(source, upstream\)/);
assert.doesNotMatch(loader, /Promise\.all\(/);

console.log('Desk bootstrap acquisition contract: 16 assertions passed');
