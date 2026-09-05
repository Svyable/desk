import assert from 'node:assert/strict';
import fs from 'node:fs';

const css = fs.readFileSync(new URL('../css/desk-reading-app.css', import.meta.url), 'utf8');
const adapter = fs.readFileSync(new URL('./desk-reading-app.js', import.meta.url), 'utf8');
const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');
const index = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');

let assertions = 0;
const check = (run) => {
  run();
  assertions += 1;
};

check(() => assert.match(css, /Reading app shell/));
check(() => assert.match(css, /#settingsBtn::before/));
check(() => assert.match(css, /content: "Aa"/));
check(() => assert.match(css, /body\[data-stage="read"\] \.reading-time \{\s*display: none;/));
check(() => assert.match(css, /\.page-nav \.view-toggle \{\s*display: none !important;/));
check(() => assert.match(css, /\.progress-bar-container\[data-reader-seekable="true"\] \{/));
check(() => assert.match(css, /bottom: calc\(var\(--reader-app-rail-offset\) \+ env\(safe-area-inset-bottom\)\)/));
check(() => assert.match(css, /\.progress-bar-container\[data-reader-seekable="true"\] \+ \.stage \{\s*border-top: 2px solid transparent;/));
check(() => assert.match(css, /\[data-reader-mode="scroll"\] body\[data-stage="read"\] \.progress-bar-container[\s\S]*bottom: calc\(\.8rem \+ env\(safe-area-inset-bottom\)\)/));
check(() => assert.match(css, /reader-chrome-hidden \.progress-bar-container/));
check(() => assert.match(css, /#settingsPanel \{\s*place-items: end center;/));
check(() => assert.match(css, /#settingsPanel \.settings-card::before/));
check(() => assert.match(css, /#settingsPanel \.atmosphere-lede \{\s*display: none;/));
check(() => assert.match(css, /grid-template-columns: repeat\(3, minmax\(0, 1fr\)\)/));
check(() => assert.match(css, /@media \(max-width: 700px\)/));
check(() => assert.match(css, /@media \(pointer: coarse\)/));
check(() => assert.match(css, /@media \(forced-colors: active\)/));
check(() => assert.match(css, /@media \(prefers-reduced-motion: reduce\)/));
check(() => assert.doesNotMatch(css, /--reader-page-(?:top|bottom|pad|radius)/));
check(() => assert.doesNotMatch(css, /\.page-inner\s*\{/));

check(() => assert.match(adapter, /\/reader\\\/css\\\/settings-panel\\\.css/));
check(() => assert.match(adapter, /shared\.insertAdjacentElement\('afterend', local\)/));
check(() => assert.match(adapter, /new MutationObserver\(keepDeskStylesAfterShared\)/));
check(() => assert.match(adapter, /data\.bookselfPromotion = 'reading-app-gui-292'/));
check(() => assert.doesNotMatch(adapter, /addEventListener\(['"]click/));

check(() => assert.match(loader, /desk-reading-app\.js\?v=bookself-20260905/));
check(() => assert.match(loader, /Desk reading-app hierarchy could not be loaded/));
check(() => assert.match(index, /id="viewModeBtn"/));
check(() => assert.match(index, /id="settingsPanel"/));

console.log(`Desk reading-app promotion contract: ${assertions}/29 assertions passed`);
