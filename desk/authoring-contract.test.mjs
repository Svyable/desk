import assert from 'node:assert/strict';
import fs from 'node:fs';

import { parseBookReadme, parsePortalCatalog } from './platform/catalog-contract.js';
import {
  READER_PRESENTATION_OPTIONS,
  READER_PRESENTATION_PRESETS,
  READER_PRESENTATION_VERSION,
  normalizeReaderPresentation,
} from './platform/presentation-contract.js';
import {
  COVER_PRESENTATION_DEFAULTS,
  COVER_PRESENTATION_OPTIONS,
  coverStyleState,
  normalizeCoverPresentation,
  resolveCoverPresentation,
} from './platform/cover-presentation-contract.js';

let assertions = 0;
function equal(actual, expected, message) {
  assertions += 1;
  assert.deepEqual(actual, expected, message);
}
function ok(value, message) {
  assertions += 1;
  assert.ok(value, message);
}

const portal = `# Desk\n\n## The books\n\n- [Alpha](books/alpha/)\n- [Template](books/_TEMPLATE/)\n- [Beta](./books/beta/)\n- [Alpha again](books/alpha/)\n`;
equal(parsePortalCatalog(portal), ['alpha', 'beta']);

const readme = `# Example Publication\n\n| | |\n|---|---|\n| **Status** | Drafting |\n| **Authors** | [Sven Example](https://example.com/author) |\n| **Chapters** | 1 of 1 |\n| **Format** | Whitepaper |\n| **Tags** | energy, systems |\n| **DOI** | 10.1234/example |\n| **Rights** | All Rights Reserved |\n\n## Contents\n\n- [x] [Introduction](manuscript/ch01-introduction.md)\n`;
const book = parseBookReadme(readme, 'example-publication');
equal(book.title, 'Example Publication');
equal(book.status, 'Drafting');
equal(book.authors, 'Sven Example');
equal(book.format, 'paper');
equal(book.contents, [{ title: 'Introduction', file: 'manuscript/ch01-introduction.md', id: 'ch01-introduction' }]);
equal(book.tags, ['energy', 'systems']);
equal(book.published, false);
ok(book.externalLinks.some((link) => link.label === 'DOI' && link.url === 'https://doi.org/10.1234/example'));

equal(READER_PRESENTATION_VERSION, 1);
equal(Object.keys(READER_PRESENTATION_PRESETS), [
  'book', 'literary', 'modern-essay', 'editorial', 'poetry', 'night-story', 'accessible', 'quiet-study',
]);
equal(READER_PRESENTATION_PRESETS.accessible.typography.fontSize, 22);
equal(READER_PRESENTATION_OPTIONS.modes, ['paged', 'scroll']);
const normalizedPresentation = normalizeReaderPresentation({
  preset: 'book',
  typography: { fontSize: 80, mode: 'invalid', leading: 1.71 },
});
equal(normalizedPresentation.preset, 'book');
equal(normalizedPresentation.typography.fontSize, 32);
equal(normalizedPresentation.typography.leading, 1.71);
equal(Object.hasOwn(normalizedPresentation.typography, 'mode'), false);

equal(COVER_PRESENTATION_DEFAULTS.shade, 0.42);
equal(COVER_PRESENTATION_OPTIONS.layouts, ['classic', 'centered', 'lower-third']);
equal(normalizeCoverPresentation({ shade: 4 }).shade, 0.75);
equal(normalizeCoverPresentation({ titleScale: 0.1 }).titleScale, 0.8);
equal(normalizeCoverPresentation({ cover: { positionX: 140, tone: 'dark' } }), { positionX: 100, tone: 'dark' });
equal(resolveCoverPresentation({ layout: 'centered' }).layout, 'centered');
equal(coverStyleState({ shade: 0.5 }).shadeTop, 0.15);

const index = fs.readFileSync(new URL('./index.html', import.meta.url), 'utf8');
const desk = fs.readFileSync(new URL('./desk.js', import.meta.url), 'utf8');
const newPublication = fs.readFileSync(new URL('./new-publication.js', import.meta.url), 'utf8');
const readerDesign = fs.readFileSync(new URL('./reader-design.js', import.meta.url), 'utf8');
const coverDesign = fs.readFileSync(new URL('./cover-design.js', import.meta.url), 'utf8');

const mappings = [
  ['https://svyable.github.io/shelf/reader/js/catalog.js', './platform/catalog-contract.js'],
  ['https://svyable.github.io/shelf/reader/js/presentation.js', './platform/presentation-contract.js'],
  ['https://svyable.github.io/shelf/reader/js/cover-presentation.js', './platform/cover-presentation-contract.js'],
];
for (const [remote, local] of mappings) {
  ok(index.includes(`\"${remote}\": \"${local}\"`), `import map must redirect ${remote}`);
}
ok(index.indexOf('type="importmap"') < index.indexOf('type="module" src="desk.js'), 'import map must precede Desk modules');
ok(desk.includes(mappings[0][0]));
ok(newPublication.includes(mappings[1][0]));
ok(readerDesign.includes(mappings[1][0]));
ok(coverDesign.includes(mappings[2][0]));

equal(new Set(mappings.map(([remote]) => remote)).size, 3);

console.log(`Desk local-first authoring contract: ${assertions} assertions passed`);
