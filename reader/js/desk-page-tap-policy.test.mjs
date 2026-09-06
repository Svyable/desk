import assert from 'node:assert/strict';
import fs from 'node:fs';
import { pageTapIntent } from './page-tap-zones.js';

let assertions = 0;
const equal = (actual, expected, message) => {
  assertions += 1;
  assert.equal(actual, expected, message);
};
const match = (actual, expected, message) => {
  assertions += 1;
  assert.match(actual, expected, message);
};
const ok = (value, message) => {
  assertions += 1;
  assert.ok(value, message);
};

// Exact Bookself coarse-pointer contract: deliberate edges with a broad no-turn
// region that fully contains the immersive chrome's 34-66% center band.
equal(pageTapIntent(0, 100, { coarse: true }), 'prev');
equal(pageTapIntent(20, 100, { coarse: true }), 'prev');
equal(pageTapIntent(21, 100, { coarse: true }), 'pass');
equal(pageTapIntent(34, 100, { coarse: true }), 'pass');
equal(pageTapIntent(50, 100, { coarse: true }), 'pass');
equal(pageTapIntent(66, 100, { coarse: true }), 'pass');
equal(pageTapIntent(71, 100, { coarse: true }), 'pass');
equal(pageTapIntent(72, 100, { coarse: true }), 'next');
equal(pageTapIntent(100, 100, { coarse: true }), 'next');

// Fine pointers preserve Bookself's existing physical-edge calculation.
equal(pageTapIntent(61, 1000), 'prev');
equal(pageTapIntent(62, 1000), 'prev');
equal(pageTapIntent(500, 1000), 'pass');
equal(pageTapIntent(868, 1000), 'next');
equal(pageTapIntent(939, 1000), 'next');
equal(pageTapIntent(-1, 100, { coarse: true }), 'pass');
equal(pageTapIntent(101, 100, { coarse: true }), 'pass');
equal(pageTapIntent(50, 0, { coarse: true }), 'pass');

const adapter = fs.readFileSync(new URL('./desk-page-tap-policy.js', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../css/desk-page-tap-policy.css', import.meta.url), 'utf8');
const index = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');

match(adapter, /import \{ pageTapIntent \} from '\.\/page-tap-zones\.js'/);
match(adapter, /pageTapIntent\(event\.clientX - rect\.left, rect\.width, \{ coarse: true \}\)/);
match(adapter, /if \(intent !== 'pass'\) return/);
match(adapter, /event\.stopImmediatePropagation\(\)/);
match(adapter, /surface\.addEventListener\('click', onPageClick, true\)/);
match(adapter, /document\.documentElement\.dataset\.readerMode !== 'scroll'/);
match(adapter, /Tap center for controls · tap an edge or swipe to turn/);
match(adapter, /OVERLAY_SELECTOR/);
match(adapter, /selectionActive\(\)/);
match(adapter, /INTERACTIVE_SELECTOR/);

// The adapter must not fork the canonical page-turn path or add controls.
assertions += 1;
assert.doesNotMatch(adapter, /getElementById\(['"](?:prevBtn|nextBtn)['"]\)/);
assertions += 1;
assert.doesNotMatch(adapter, /\.click\(\)/);

match(css, /\.nav-gesture-preview\.prev \{\s*width: 20%/s);
match(css, /\.nav-gesture-preview\.next \{\s*width: 28%/s);
match(css, /data-reader-immersive="manual"/);
match(css, /@media \(forced-colors: active\)/);

const adapterScript = 'https://svyable.github.io/desk/reader/js/desk-page-tap-policy.js?v=bookself-20260905';
const sharedNavigation = 'js/navigation.js?v=r1';
ok(index.includes(adapterScript), 'Desk index should load the local tap policy');
ok(index.indexOf(adapterScript) < index.indexOf(sharedNavigation), 'Desk tap policy must register before shared Shelf navigation');

console.log(`Desk deliberate page-tap policy: ${assertions} assertions passed`);
