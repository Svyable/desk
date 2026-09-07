import assert from 'node:assert/strict';
import fs from 'node:fs';
import { interiorStyleHref } from './desk-book-interior.js';

let assertions = 0;
const equal = (...args) => { assertions += 1; assert.equal(...args); };
const match = (...args) => { assertions += 1; assert.match(...args); };
const doesNotMatch = (...args) => { assertions += 1; assert.doesNotMatch(...args); };

const styleHref = interiorStyleHref();
match(styleHref, /\/reader\/css\/desk-book-interior\.css\?v=bookself-20260905$/);

const source = fs.readFileSync(new URL('./desk-book-interior.js', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../css/desk-book-interior.css', import.meta.url), 'utf8');
const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');
const worker = fs.readFileSync(new URL('../sw.js', import.meta.url), 'utf8');

match(source, /new URL\('\.\.\/css\/desk-book-interior\.css\?v=bookself-20260905', import\.meta\.url\)\.href/);
match(source, /dataset\.bookInterior = 'true'/);
match(source, /link\.addEventListener\('error'/);
match(source, /window\.setTimeout\(\(\) => finish\(!!link\.sheet\), 900\)/);
doesNotMatch(source, /https:\/\/svyable\.github\.io\/desk\/reader\/css\/desk-book-interior\.css/);

match(css, /\.page-surface\.left \.page-running/);
match(css, /\.page-surface\.right \.page-running/);
match(css, /\.page-inner\.chapter-open>h1:first-child::before/);
match(css, /p:first-of-type::first-line/);
match(css, /blockquote::before/);
match(css, /figcaption::before/);
match(css, /\[data-reader-mode="scroll"\] \.scroll-reader/);
match(css, /@media\(max-width:700px\)/);
match(css, /@media\(prefers-contrast:more\)/);
match(css, /@media\(forced-colors:active\)/);
match(css, /@media print/);

/* Progressive aesthetic loading must never invalidate already-measured pages. */
doesNotMatch(css, /--reader-page-(?:top|bottom|pad|inline|radius)\s*:/);
doesNotMatch(css, /--reader-stage-(?:inline|block)\s*:/);
doesNotMatch(css, /\.pages-wrapper\.active\s*\{/);
doesNotMatch(css, /\.page-inner\s*\{/);
doesNotMatch(css, /p:first-of-type::first-line\s*\{[^}]*(?:font-family|font-size|font-weight|font-variant|letter-spacing|line-height|margin|padding|text-indent)/s);
doesNotMatch(css, /(?:\.page-inner h2|\.scroll-document h2)[^{]*\{[^}]*(?:font-family|font-size|font-weight|letter-spacing|line-height|margin|padding|text-indent)/s);
doesNotMatch(css, /figcaption\s*\{[^}]*(?:font-family|font-size|font-weight|font-style|letter-spacing|line-height|margin|padding)/s);
doesNotMatch(css, /\) strong\s*\{[^}]*font-weight/s);

match(loader, /import\('\.\/desk-book-interior\.js\?v=bookself-20260906-fail-open-1'\)/);
match(loader, /Desk premium book interior could not be loaded/);
doesNotMatch(loader, /const bookInteriorUrl/);
doesNotMatch(loader, /installDeskStylesheet\('deskBookInterior'/);
doesNotMatch(loader, /document\.documentElement\.dataset\.bookInterior = 'true'/);
doesNotMatch(loader, /https:\/\/svyable\.github\.io\/desk\/reader\/css\/desk-book-interior\.css/);

// The premium layer stays nonessential to a cold offline install; the base
// Reader remains usable if this aesthetic enhancement has never been cached.
doesNotMatch(worker, /desk-book-interior/);

console.log(`Desk premium book interior contract: ${assertions}/32 assertions passed`);
