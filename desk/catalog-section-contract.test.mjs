import assert from 'node:assert/strict';
import {
  extractSection,
  parsePortalCatalog,
  parsePortalStand,
  parsePortalWebShelf,
} from './catalog-contract.js';

const portal = `# Example portal

A stray link outside the catalog: [Noise](books/noise/)

## The books

- [Alpha](books/alpha/) — Book
- [Beta](./books/beta/) — Paper
- [Template](books/_TEMPLATE/) — starter
- [Alpha again](books/alpha/) — duplicate

## Notes

Another non-catalog link: [Gamma](books/gamma/)

## The web shelf

- [Project](https://example.com/project) — useful external work

## The stand

- [Issue](https://mag.example.org/issue-1) — magazine doorway
`;

const booksSection = extractSection(portal, 'The books');
assert.match(booksSection, /Alpha/);
assert.match(booksSection, /Beta/);
assert.doesNotMatch(booksSection, /Gamma/);
assert.doesNotMatch(booksSection, /Noise/);

assert.deepEqual(parsePortalCatalog(portal), ['alpha', 'beta']);
assert.deepEqual(parsePortalCatalog('## The books\n- [One](books/one/)\n'), ['one']);
assert.deepEqual(parsePortalCatalog('- [Fallback](books/fallback/)'), ['fallback']);

const web = parsePortalWebShelf(portal);
assert.equal(web.length, 1);
assert.equal(web[0].title, 'Project');
assert.equal(web[0].domain, 'example.com');
assert.equal(web[0].note, 'useful external work');

const stand = parsePortalStand(portal);
assert.equal(stand.length, 1);
assert.equal(stand[0].title, 'Issue');
assert.equal(stand[0].domain, 'mag.example.org');

const spacing = '# Portal\n\n##   The books   \n- [Spaced](books/spaced/)\n\n## End\n';
assert.deepEqual(parsePortalCatalog(spacing), ['spaced']);

assert.equal(extractSection(portal, 'Missing'), '');

console.log('Desk catalog section contract: 16 assertions passed');
