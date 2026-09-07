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
check(() => assert.match(loader, /skipDeskCatalogCoverProbe/));
check(() => assert.match(loader, /rewriteSharedModuleSpecifiers\(skipDeskCatalogCoverProbe\(source\), upstream\)/));
check(() => assert.doesNotMatch(loader, /adaptSharedReaderAppSource/));
check(() => assert.doesNotMatch(loader, /adaptDeskCatalogVisibility/));
check(() => assert.ok(!loader.includes('meta.published || window')));

const auditMatch = loader.match(/const\s+DESK_CATALOG_AUDIT\s*=\s*Object\.freeze\(\[(?<body>.*?)\]\);/s);
check(() => assert.ok(auditMatch));
const auditValues = [...auditMatch.groups.body.matchAll(/['"]([^'"]+)['"]/g)].map((match) => match[1]);
check(() => assert.deepEqual(auditValues, [
  'catalogEntryVisible',
  'window.__IMPRINT?.role',
  'Shared Reader is missing role-aware Desk catalog visibility',
]));
check(() => assert.ok(!loader.includes('meta\\.published')));
check(() => assert.doesNotMatch(loader, /window\.__IMPRINT\?\.role === 'desk'/));
check(() => assert.doesNotMatch(loader, /Expected one shared Reader catalog gate/));

const adapterStart = loader.indexOf('function skipDeskCatalogCoverProbe');
const adapterEnd = loader.indexOf('\nfunction adaptReaderSource', adapterStart);
check(() => assert.ok(adapterStart >= 0 && adapterEnd > adapterStart));
const skipDeskCatalogCoverProbe = Function(
  `${loader.slice(adapterStart, adapterEnd)}\nreturn skipDeskCatalogCoverProbe;`
)();
const sharedCatalogSample = `async function loadCatalog() {
  const slug = 'sample';
  const meta = {};
  meta.cover = await firstExisting(
        ['cover.png', 'cover.jpg', 'cover.webp', 'cover.jpeg'].map(
          (name) => \`books/\${slug}/media/\${name}\`
        )
      );
}
async function loadBook(slug) {
  const cover = await firstExisting(['cover.png']);
}`;
const adaptedCatalogSample = skipDeskCatalogCoverProbe(sharedCatalogSample);
check(() => assert.match(adaptedCatalogSample, /meta\.cover = null;/));
check(() => assert.match(adaptedCatalogSample, /async function loadBook[\s\S]*const cover = await firstExisting/));

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

console.log(`Desk shared catalog ownership contract: ${assertions}/18 assertions passed`);
