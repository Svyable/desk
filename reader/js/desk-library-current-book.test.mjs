import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  chapterResumeLabel,
  relativeSavedLabel,
  slugFromContinueHref,
} from './desk-library-current-book-model.js';

let assertions = 0;
const equal = (...args) => { assertions += 1; assert.equal(...args); };
const match = (...args) => { assertions += 1; assert.match(...args); };
const doesNotMatch = (...args) => { assertions += 1; assert.doesNotMatch(...args); };

const now = Date.UTC(2026, 8, 5, 20, 0, 0);
equal(relativeSavedLabel(now - 20_000, now), 'Saved just now');
equal(relativeSavedLabel(now - 12 * 60_000, now), 'Saved 12m ago');
equal(relativeSavedLabel(now - 3 * 60 * 60_000, now), 'Saved 3h ago');
equal(relativeSavedLabel(now - 2 * 24 * 60 * 60_000, now), 'Saved 2d ago');
equal(relativeSavedLabel(null, now), '');

const meta = { contents: [
  { id: 'front-matter', title: 'Front matter' },
  { id: 'chapter-one', title: 'The first room' },
  { id: 'chapter-two', title: 'The second room' },
] };
equal(chapterResumeLabel(meta, { chapter: 'chapter-one' }), 'The first room · 2 of 3');
equal(chapterResumeLabel(meta, { chapter: 'missing' }), '');
equal(slugFromContinueHref('#/b/warm-library/chapter-one/42'), 'warm-library');
equal(slugFromContinueHref('#/'), '');

const source = fs.readFileSync(new URL('./desk-library-current-book.js', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../css/desk-library-current-book.css', import.meta.url), 'utf8');
const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');
const worker = fs.readFileSync(new URL('../sw.js', import.meta.url), 'utf8');

match(source, /https:\/\/svyable\.github\.io\/shelf\/reader\/js\/base\.js/);
match(source, /https:\/\/svyable\.github\.io\/shelf\/reader\/js\/catalog\.js/);
match(source, /https:\/\/svyable\.github\.io\/shelf\/reader\/js\/progress-position\.js/);
match(source, /firstExisting\(coverCandidates\(slug\)\)/);
match(source, /requestIdleCallback/);
match(source, /setAttribute\('aria-label'/);
match(source, /card\.dataset\.currentBookReady = 'fallback'/);
match(source, /document\.body\.dataset\.stage !== 'library'/);
match(css, /\.continue-book-object/);
match(css, /\.continue-book-meter-fill/);
match(css, /#continueCardLink:focus-visible/);
match(css, /@media \(max-width:700px\)/);
match(css, /max-height:430px/);
match(css, /forced-colors:active/);
match(css, /prefers-reduced-motion:reduce/);
doesNotMatch(css, /body\[data-stage="read"\]/);
doesNotMatch(css, /--reader-page-/);
match(loader, /desk-library-current-book\.js\?v=bookself-20260905/);

// This enhancement is deliberately nonessential to shell installation. A cold
// offline launch keeps the canonical Continue card instead of failing Reader install.
doesNotMatch(worker, /desk-library-current-book/);

console.log(`Desk current-book resume promotion: ${assertions} assertions passed`);
