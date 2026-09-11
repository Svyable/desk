import assert from 'node:assert/strict';
import fs from 'node:fs';

const handoff = fs.readFileSync(new URL('./desk-book-opening-handoff.js', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../css/desk-book-opening-handoff.css', import.meta.url), 'utf8');
const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');

let assertions = 0;
const match = (value, pattern, message) => { assertions += 1; assert.match(value, pattern, message); };
const doesNotMatch = (value, pattern, message) => { assertions += 1; assert.doesNotMatch(value, pattern, message); };
const deepEqual = (actual, expected, message) => { assertions += 1; assert.deepEqual(actual, expected, message); };

const actionBlock = handoff.match(/(?:export )?const COVER_MORE_ACTION_IDS = Object\.freeze\(\[(?<body>[\s\S]*?)\]\);/);
assertions += 1;
assert.ok(actionBlock, 'unified handoff should declare the cover action contract');
const actionIds = [...actionBlock.groups.body.matchAll(/'([^']+)'/g)].map((entry) => entry[1]);
deepEqual(actionIds, ['copyPreviewBtn','citeBtn','feedbackBtn','sourceLink','historyLink','rightsLink'], 'Bookself #295 secondary action IDs should remain unchanged');

// Promote Bookself's canonical route and defensive animation model rather than
// maintaining Desk-only regex parsing and raw DOMRect interpolation.
match(handoff, /import \{ parseHash \} from 'https:\/\/svyable\.github\.io\/bookself\/reader\/js\/router\.js';/);
match(handoff, /export function handoffFrames\(/);
match(handoff, /function finite\(/);
match(handoff, /Number\.isFinite/);
match(handoff, /Math\.max\(1, finite\(sourceRect\.width, 1\)\)/);
match(handoff, /transform:resume \? 'rotate\(0deg\) scale\(\.99\)'/);
match(handoff, /export function sourceKindForElement\(/);
match(handoff, /export function reducedMotionPreferred\(/);
match(handoff, /route:parseHash\(resumeLink\.getAttribute\('href'\) \|\| ''\)/);
match(handoff, /const route = parseHash\(window\.location\.hash \|\| ''\)/);
match(handoff, /clone\.animate\(handoffFrames\(pending\.sourceRect,targetRect,kind\)/);
match(handoff, /animation\.finished\.catch\(\(\) => \{\}\)\.then\(\(\) => finishAnimation/);
doesNotMatch(handoff, /function routeSlug\(/, 'Desk regex route parser must stay retired');

// Preserve Desk's stronger keyboard/focus hierarchy as intentional divergence.
match(handoff, /function installCoverDockHierarchy\(\)/);
match(handoff, /document\.createElement\('details'\)/);
match(handoff, /summary\.setAttribute\('aria-label', 'More book actions'\)/);
match(handoff, /menu\.setAttribute\('aria-label', 'Book actions'\)/);
match(handoff, /actions\.forEach\(\(action\) => menu\.appendChild\(action\)\)/);
match(handoff, /details\.addEventListener\('toggle',[\s\S]*?focus\(\{ preventScroll:true \}\)/);
match(handoff, /event\.key === 'Escape' && details\.open/);
match(handoff, /event\.preventDefault\(\)/);
match(handoff, /summary\.focus\(\{ preventScroll:true \}\)/);

doesNotMatch(handoff, /createElement\('style'\)/, 'cover hierarchy styling should live in the handoff stylesheet');
match(loader, /desk-book-opening-handoff\.js\?v=bookself-20260906/);
doesNotMatch(loader, /desk-cover-actions\.js/, 'retired split cover-action adapter must stay absent');

match(css, /body\[data-stage="cover"\] \.cover-dock/);
match(css, /\.cover-more-menu/);
match(css, /@media \(max-width:700px\)/);
match(css, /env\(safe-area-inset-bottom\)/);
match(css, /@media \(forced-colors:active\)/);
match(css, /@media \(prefers-reduced-motion:reduce\)/);

console.log(`Desk unified book-opening ownership: ${assertions} assertions passed`);
