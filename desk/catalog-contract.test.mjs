import assert from 'node:assert/strict';
import {
  extractSection,
  parseBookReadme,
  parsePortalCatalog,
  parsePortalStand,
  parsePortalWebShelf,
} from './catalog-contract.js';

let assertions = 0;
function equal(actual, expected) { assertions += 1; assert.equal(actual, expected); }
function deepEqual(actual, expected) { assertions += 1; assert.deepEqual(actual, expected); }
function ok(value) { assertions += 1; assert.ok(value); }

const portal = `# Svyable Desk

## The books

- [Working Draft](books/working-draft/)
- [Released Title](books/released-title/)
- [Working Draft Again](./books/working-draft/)

## The web shelf

- [QNTLab](https://qntlab.app/) — Build + Test = Run

## The stand

- [Geek to Me](https://geektome.lovable.app/)
`;

deepEqual(parsePortalCatalog(portal), ['working-draft', 'released-title']);
deepEqual(parsePortalWebShelf(portal), [
  { title: 'QNTLab', url: 'https://qntlab.app/', note: 'Build + Test = Run', domain: 'qntlab.app' },
]);
deepEqual(parsePortalStand(portal), [
  { title: 'Geek to Me', url: 'https://geektome.lovable.app/', note: '', domain: 'geektome.lovable.app' },
]);
ok(extractSection(portal, 'The books').includes('working-draft'));

const draft = parseBookReadme(`# Working Draft

| | |
|---|---|
| **Authors** | [Ada Example](https://example.com/ada) |
| **Status** | Drafting |
| **Format** | Whitepaper |
| **Venue** | Example Lab |
| **DOI** | 10.1234/example |
| **Series** | Field Notes |
| **Tags** | guide, git |
| **Chapters** | 1 of 2 drafted |

## Contents

- [x] [Front Matter](manuscript/front-matter.md)
- [ ] [Current](manuscript/ch01-current.md)
`, 'working-draft');

equal(draft.slug, 'working-draft');
equal(draft.title, 'Working Draft');
equal(draft.status, 'Drafting');
equal(draft.published, false);
equal(draft.authors, 'Ada Example');
deepEqual(draft.authorLinks, [{ label: 'Ada Example', url: 'https://example.com/ada' }]);
equal(draft.format, 'paper');
equal(draft.formatLabel, 'Whitepaper');
equal(draft.venue, 'Example Lab');
equal(draft.doi, '10.1234/example');
equal(draft.series, 'Field Notes');
deepEqual(draft.tags, ['guide', 'git']);
equal(draft.contents.length, 2);
equal(draft.contents[0].id, 'front-matter');
equal(draft.contents[1].id, 'ch01-current');
equal(draft.rights, 'All Rights Reserved');
equal(draft.aiUse, 'AI training and generative use reserved');
equal(draft.rightsFile, '[RIGHTS.md](RIGHTS.md)');

const published = parseBookReadme(`# Released

| **Status** | Published |
| **Publisher** | House |
| **Edition** | Second |
| **ISBN** | 978-0-306-40615-7 |
| **Links** | [WorldCat](https://worldcat.org/example) |
`, 'released');

equal(published.published, true);
equal(published.publisher, 'House');
equal(published.edition, 'Second');
equal(published.isbn, '978-0-306-40615-7');
deepEqual(published.externalLinks, [
  { label: 'WorldCat', url: 'https://worldcat.org/example' },
  { label: 'Open Library', url: 'https://openlibrary.org/isbn/9780306406157' },
]);

console.log(`Desk catalog contract: ${assertions} assertions passed`);
