import assert from 'node:assert/strict';
import {
  adaptDeskCatalogVisibility,
  adaptSharedReaderAppSource,
} from './desk-runtime-bridge.js';

const app = `
import { parseBookReadme } from './catalog.js';
import('./pagination-scheduler.js');
function applyPrefs() {
  document.body.classList.toggle('is-draft', !!(app.book && !app.book.published));
}
async function loadCatalog() {
  const entries = [];
  for (const slug of slugs) {
    const meta = parseBookReadme(slug);
    if ( meta.published ) entries.push( meta );
  }
  return entries;
}
async function loadBook(slug) {
  const meta = parseBookReadme(slug);
  return { ...meta };
}`;

const catalog = adaptDeskCatalogVisibility(app);
assert.equal(catalog.catalogGates, 1);
assert.match(catalog.source, /meta\.published \|\| window\.__IMPRINT\?\.role === 'desk'/);
assert.match(catalog.source, /!app\.book\.published/);
assert.match(catalog.source, /async function loadBook/);
assert.doesNotMatch(catalog.source, /if \( meta\.published \) entries\.push\( meta \)/);

const adapted = adaptSharedReaderAppSource(app, 'https://svyable.github.io/shelf/reader/js/');
assert.equal(adapted.staticImports, 1);
assert.equal(adapted.dynamicImports, 1);
assert.equal(adapted.catalogGates, 1);
assert.match(adapted.source, /https:\/\/svyable\.github\.io\/shelf\/reader\/js\/catalog\.js/);
assert.match(adapted.source, /https:\/\/svyable\.github\.io\/shelf\/reader\/js\/pagination-scheduler\.js/);
assert.match(adapted.source, /!app\.book\.published/);

assert.throws(
  () => adaptDeskCatalogVisibility('async function somethingElse() {}'),
  /loadCatalog\(\) contract was not found/
);
assert.throws(
  () => adaptDeskCatalogVisibility('async function loadCatalog() { return []; }'),
  /found 0/
);
assert.throws(
  () => adaptDeskCatalogVisibility(`async function loadCatalog() {
    if (meta.published) entries.push(meta);
    if (meta.published) entries.push(meta);
  }`),
  /found 2/
);
assert.throws(
  () => adaptSharedReaderAppSource('async function loadCatalog() { if (meta.published) entries.push(meta); }', 'x/'),
  /imports were not recognized/
);

console.log('Desk catalog compatibility contract: 15 assertions passed');
