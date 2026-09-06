import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { researchBrowseUrl, researchReadmeUrl } from './research-surface.js';

const moduleUrl = 'https://svyable.github.io/desk/desk/research-surface.js';
assert.equal(
  researchReadmeUrl('a-book', moduleUrl),
  'https://svyable.github.io/desk/books/a-book/research/README.md',
);
assert.equal(
  researchBrowseUrl('https://github.com/Svyable/desk/tree/main/books/a-book', 'a-book', moduleUrl),
  'https://github.com/Svyable/desk/tree/main/books/a-book/research',
);
assert.equal(
  researchBrowseUrl('', 'a-book', moduleUrl),
  'https://svyable.github.io/desk/books/a-book/research/README.md',
);

const source = readFileSync(new URL('./research-surface.js', import.meta.url), 'utf8');
assert.match(source, /fetch\(researchReadmeUrl\(slug\), \{ cache: 'no-store' \}\)/);
assert.match(source, /if \(!slug \|\| !\(await researchExists\(slug\)\)\) return;/);
assert.match(source, /research\.textContent = 'Research'/);
assert.match(source, /research\.setAttribute\('aria-label'/);
assert.match(source, /observer\.observe\(root, \{ childList: true \}\)/);
assert.match(source, /repoForm.*submit.*observer\.disconnect\(\)/s);
assert.match(source, /URLSearchParams\(location\.search\).*has\('repo'\)/s);
assert.doesNotMatch(source, /localStorage|sessionStorage|\.page-inner|\.pages-wrapper/);
assert.doesNotMatch(source, /PUT|POST|PATCH|DELETE/);

console.log('canonical research surface tests ok');
