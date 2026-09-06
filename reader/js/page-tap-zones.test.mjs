import assert from 'node:assert/strict';
import fs from 'node:fs';
import { coarseTapZones, pageTapIntent } from './page-tap-zones.js';

let assertions = 0;
const equal = (actual, expected, message) => {
  assertions += 1;
  assert.equal(actual, expected, message);
};
const deepEqual = (actual, expected, message) => {
  assertions += 1;
  assert.deepEqual(actual, expected, message);
};
const match = (actual, expected, message) => {
  assertions += 1;
  assert.match(actual, expected, message);
};

// Keep Desk's temporary Shelf compatibility adapter pinned to Bookself #298's
// deliberate coarse-pointer model until Shelf can own this behavior directly.
equal(pageTapIntent(0, 100, { coarse: true }), 'prev');
equal(pageTapIntent(20, 100, { coarse: true }), 'prev');
equal(pageTapIntent(21, 100, { coarse: true }), 'pass');
equal(pageTapIntent(50, 100, { coarse: true }), 'pass');
equal(pageTapIntent(71, 100, { coarse: true }), 'pass');
equal(pageTapIntent(72, 100, { coarse: true }), 'next');
equal(pageTapIntent(100, 100, { coarse: true }), 'next');
deepEqual(coarseTapZones(1000), { previousEnd: 200, nextStart: 720 });

// Fine-pointer geometry remains the shared physical-edge contract.
equal(pageTapIntent(61, 1000), 'prev');
equal(pageTapIntent(62, 1000), 'prev');
equal(pageTapIntent(500, 1000), 'pass');
equal(pageTapIntent(868, 1000), 'next');

const policy = fs.readFileSync(new URL('./desk-page-tap-policy.js', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../css/desk-page-tap-policy.css', import.meta.url), 'utf8');
match(policy, /if \(intent !== 'pass'\) return/);
match(policy, /stopImmediatePropagation\(\)/);
match(policy, /Tap center for controls · tap an edge or swipe to turn/);
match(css, /\.nav-gesture-preview\.prev \{\s*width: 20%/s);
match(css, /\.nav-gesture-preview\.next \{\s*width: 28%/s);
match(css, /@media \(max-width: 700px\)[\s\S]*?#pagesWrapper \.nav-gesture-preview \{\s*opacity: 0/s);
match(css, /@media \(forced-colors: active\)[\s\S]*?#pagesWrapper \.nav-gesture-preview \{\s*opacity: 0/s);

console.log(`Desk page tap zones ok (${assertions} assertions)`);
