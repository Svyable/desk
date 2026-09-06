import assert from 'node:assert/strict';
import fs from 'node:fs';

const handoff = fs.readFileSync(new URL('./desk-book-opening-handoff.js', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../css/desk-book-opening-handoff.css', import.meta.url), 'utf8');
const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');

let assertions = 0;
const match = (value, pattern, message) => {
  assertions += 1;
  assert.match(value, pattern, message);
};
const doesNotMatch = (value, pattern, message) => {
  assertions += 1;
  assert.doesNotMatch(value, pattern, message);
};
const deepEqual = (actual, expected, message) => {
  assertions += 1;
  assert.deepEqual(actual, expected, message);
};

const actionBlock = handoff.match(/const COVER_MORE_ACTION_IDS = Object\.freeze\(\[(?<body>[\s\S]*?)\]\);/);
assertions += 1;
assert.ok(actionBlock, 'unified handoff should declare the cover action contract');
const actionIds = [...actionBlock.groups.body.matchAll(/'([^']+)'/g)].map((entry) => entry[1]);
deepEqual(actionIds, [
  'copyPreviewBtn',
  'citeBtn',
  'feedbackBtn',
  'sourceLink',
  'historyLink',
  'rightsLink',
], 'Bookself #295 secondary action IDs should remain unchanged');

match(handoff, /function installCoverDockHierarchy\(\)/);
match(handoff, /dock\.dataset\.bookHandoffReady === 'true'/);
match(handoff, /document\.createElement\('details'\)/);
match(handoff, /details\.className = 'cover-more'/);
match(handoff, /summary\.textContent = 'More'/);
match(handoff, /summary\.setAttribute\('aria-label', 'More book actions'\)/);
match(handoff, /menu\.className = 'cover-more-menu'/);
match(handoff, /menu\.setAttribute\('role', 'group'\)/);
match(handoff, /menu\.setAttribute\('aria-label', 'Book actions'\)/);
match(handoff, /actions\.forEach\(\(action\) => menu\.appendChild\(action\)\)/);
match(handoff, /details\.addEventListener\('toggle',[\s\S]*?:is\(button,a\):not\(\[hidden\]\)[\s\S]*?focus\(\{ preventScroll: true \}\)/);
match(handoff, /menu\.addEventListener\('click',[\s\S]*?queueMicrotask\(\(\) => \{ details\.open = false; \}\)/);
match(handoff, /event\.key === 'Escape' && details\.open/);
match(handoff, /event\.preventDefault\(\)/);
match(handoff, /summary\.focus\(\{ preventScroll: true \}\)/);
match(handoff, /const coverActions = installCoverDockHierarchy\(\)/);
match(handoff, /document\.body\.dataset\.stage !== 'cover' && coverActions\?\.open/);

doesNotMatch(handoff, /createElement\('style'\)/, 'cover hierarchy styling should live in the handoff stylesheet');
match(loader, /desk-book-opening-handoff\.js\?v=bookself-20260906/);
doesNotMatch(loader, /desk-cover-actions\.js/, 'retired split cover-action adapter must stay absent');

match(css, /body\[data-stage="cover"\] \.cover-dock/);
match(css, /\.cover-dock > #startOverBtn/);
match(css, /\.cover-more > summary/);
match(css, /\.cover-more-menu/);
match(css, /@media \(max-width:700px\)/);
match(css, /env\(safe-area-inset-bottom\)/);
match(css, /@media \(forced-colors:active\)/);
match(css, /@media \(prefers-reduced-motion:reduce\)/);

console.log(`Desk unified book-opening ownership: ${assertions}/30 assertions passed`);
