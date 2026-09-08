import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const root = new URL('../../', import.meta.url);
const loader = await readFile(new URL('./app-loader.js', import.meta.url), 'utf8');
const readme = await readFile(new URL('README.md', root), 'utf8');
const catalog = JSON.parse(await readFile(new URL('catalog.json', root), 'utf8'));
const bookEntries = await readdir(new URL('books/', root), { withFileTypes: true });
const bookSlugs = bookEntries
  .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
  .map((entry) => entry.name)
  .sort();
const catalogSlugs = [...catalog.books].sort();

assert.equal(catalog.version, 1);
assert.deepEqual(catalogSlugs, bookSlugs, 'catalog.json should describe the actual Desk book folders');
for (const slug of catalogSlugs) {
  assert.ok(readme.includes(`books/${slug}/`), `README should expose ${slug} to Bookself catalog parsing`);
}

assert.doesNotMatch(loader, /desk-runtime-bridge|installDeskRuntimeBridge/);
assert.doesNotMatch(loader, /parsePortalCatalogManifest|applyPortalCatalogManifest|overlayCatalogManifest/);
assert.doesNotMatch(loader, /global\.fetch\s*=|window\.fetch\s*=|fetch\s*=\s*async/);
assert.doesNotMatch(loader, /rewriteSharedModuleSpecifiers|skipDeskCatalogCoverProbe|sharedReaderOwnsDeskCatalogVisibility/);

console.log(`Desk catalog contract: ${catalogSlugs.length} book folders are discoverable directly from the canonical README without a runtime fetch overlay`);
