import assert from 'node:assert/strict';
import fs from 'node:fs';

const css = fs.readFileSync(new URL('../css/desk-reading-form-factor.css', import.meta.url), 'utf8');
const adapter = fs.readFileSync(new URL('./desk-reading-app.js', import.meta.url), 'utf8');

let assertions = 0;
const check = (run) => {
  run();
  assertions += 1;
};

check(() => assert.match(css, /Responsive reading-shell polish/));
check(() => assert.match(css, /--desk-reader-chrome-surface/));
check(() => assert.match(css, /backdrop-filter: blur\(18px\) saturate\(1\.08\)/));
check(() => assert.match(css, /padding-inline-start: max\(\.75rem, env\(safe-area-inset-left\)\)/));
check(() => assert.match(css, /padding-inline-end: max\(\.75rem, env\(safe-area-inset-right\)\)/));
check(() => assert.match(css, /touch-action: manipulation/));
check(() => assert.match(css, /\.page-nav::before/));
check(() => assert.match(css, /pointer-events: none/));
check(() => assert.match(css, /text-overflow: ellipsis/));
check(() => assert.match(css, /overscroll-behavior: contain/));
check(() => assert.match(css, /scrollbar-gutter: stable/));
check(() => assert.match(css, /@media \(hover: hover\) and \(pointer: fine\)/));
check(() => assert.match(css, /@media \(min-width: 1100px\)/));
check(() => assert.match(css, /calc\(\(100vw - 82rem\) \/ 2\)/));
check(() => assert.match(css, /calc\(\(100vw - 60rem\) \/ 2\)/));
check(() => assert.match(css, /@media \(min-width: 760px\) and \(min-height: 560px\)/));
check(() => assert.match(css, /place-items: stretch end/));
check(() => assert.match(css, /width: min\(31rem, 44vw\)/));
check(() => assert.match(css, /height: 100dvh/));
check(() => assert.match(css, /border-radius: 24px 0 0 24px/));
check(() => assert.match(css, /@media \(max-width: 700px\)/));
check(() => assert.match(css, /min-width: 44px/));
check(() => assert.match(css, /min-height: 44px/));
check(() => assert.match(css, /@media \(max-width: 560px\)/));
check(() => assert.match(css, /@media \(max-height: 540px\) and \(orientation: landscape\)/));
check(() => assert.match(css, /width: min\(27rem, 54vw\)/));
check(() => assert.match(css, /reader-context,[\s\S]*\.page-chapter \{\s*display: none;/));
check(() => assert.match(css, /@media \(pointer: coarse\)/));
check(() => assert.match(css, /@supports not \(backdrop-filter: blur\(1px\)\)/));
check(() => assert.match(css, /@media \(forced-colors: active\)/));
check(() => assert.match(css, /@media \(prefers-reduced-motion: reduce\)/));

// Keep the layer presentation-only. It may reshape chrome and overlays, but it
// must not become a second paginator or manuscript typography owner.
check(() => assert.doesNotMatch(css, /--reader-page-(?:top|bottom|pad|radius)/));
check(() => assert.doesNotMatch(css, /\.page-inner\s*\{/));
check(() => assert.doesNotMatch(css, /\.page-surface\s*\{/));
check(() => assert.doesNotMatch(css, /font-(?:family|size|weight)\s*:/));
check(() => assert.doesNotMatch(css, /line-height\s*:/));
check(() => assert.doesNotMatch(css, /text-indent\s*:/));

check(() => assert.match(adapter, /FORM_FACTOR_STYLE_ID = 'deskReadingFormFactor'/));
check(() => assert.match(adapter, /desk-reading-form-factor\.css\?v=desk-20260906-1/));
check(() => assert.match(adapter, /data\.deskReaderPolish = 'immersive-form-factor-20260906'/));
check(() => assert.match(adapter, /local\.insertAdjacentElement\('afterend', formFactor\)/));
check(() => assert.match(adapter, /formFactor\.insertAdjacentElement\('afterend', compatibility\)/));
check(() => assert.doesNotMatch(adapter, /addEventListener\(['"]click/));

console.log(`Desk reading form-factor contract: ${assertions}/43 assertions passed`);
