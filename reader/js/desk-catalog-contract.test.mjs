import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const loader = await readFile(new URL('./app-loader.js', import.meta.url), 'utf8');
let assertions = 0;
const check = (run) => {
  run();
  assertions += 1;
};

check(() => assert.match(loader, /catalogEntryVisible\\\(\\s\*meta/));
check(() => assert.match(loader, /window\\\.__IMPRINT/));
check(() => assert.match(loader, /Shared Reader is missing role-aware Desk catalog visibility/));
check(() => assert.match(loader, /rewriteSharedModuleSpecifiers\(source, upstream\)/));
check(() => assert.doesNotMatch(loader, /adaptSharedReaderAppSource/));
check(() => assert.doesNotMatch(loader, /adaptDeskCatalogVisibility/));
check(() => assert.doesNotMatch(loader, /meta\\\.published \\|\\| window/));

const auditMatch = loader.match(/const\s+DESK_CATALOG_AUDIT\s*=\s*Object\.freeze\(\[(?<body>.*?)\]\);/s);
check(() => assert.ok(auditMatch));
const auditValues = [...auditMatch.groups.body.matchAll(/['"]([^'"]+)['"]/g)].map((match) => match[1]);
check(() => assert.deepEqual(auditValues, [
  'catalogEntryVisible',
  'window.__IMPRINT?.role',
  'Shared Reader is missing role-aware Desk catalog visibility',
]));
check(() => assert.doesNotMatch(loader, /meta\\\.published/));
check(() => assert.doesNotMatch(loader, /window\.__IMPRINT\?\.role === 'desk'/));
check(() => assert.doesNotMatch(loader, /Expected one shared Reader catalog gate/));

const compatibleSharedApp = `
import { catalogEntryVisible } from './catalog.js';
async function loadCatalog() {
  const meta = {};
  if (catalogEntryVisible(meta, window.__IMPRINT?.role)) entries.push(meta);
}`;
const incompatibleSharedApp = `
async function loadCatalog() {
  const meta = {};
  if (meta.published) entries.push(meta);
}`;
const contract = /catalogEntryVisible\(\s*meta\s*,\s*window\.__IMPRINT\?\.role\s*\)/;

check(() => assert.match(compatibleSharedApp, contract));
check(() => assert.doesNotMatch(incompatibleSharedApp, contract));

console.log(`Desk shared catalog ownership contract: ${assertions}/14 assertions passed`);
