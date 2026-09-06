import assert from 'node:assert/strict';
import fs from 'node:fs';

const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');

assert.match(loader, /rewriteSharedModuleSpecifiers/);
assert.match(loader, /function sharedReaderOwnsDeskCatalogVisibility\(source\)/);
assert.match(loader, /catalogEntryVisible\\\(\\s\*meta/);
assert.match(loader, /window\\\.__IMPRINT\\\?\\\.role/);
assert.match(loader, /if \(sharedReaderOwnsDeskCatalogVisibility\(source\)\)/);
assert.match(loader, /return rewriteSharedModuleSpecifiers\(source, upstream\);/);
assert.match(loader, /return adaptSharedReaderAppSource\(source, upstream\);/);
assert.ok(
  loader.indexOf('sharedReaderOwnsDeskCatalogVisibility(source)')
    < loader.indexOf('adaptSharedReaderAppSource(source, upstream)')
);

console.log('Desk shared catalog ownership contract: 8 assertions passed');
