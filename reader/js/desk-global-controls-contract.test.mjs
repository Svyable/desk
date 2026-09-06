import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const libraryCss = readFileSync(new URL('css/desk-library-home.css', root), 'utf8');
const readingCss = readFileSync(new URL('css/desk-reading-app.css', root), 'utf8');
const loader = readFileSync(new URL('js/app-loader.js', root), 'utf8');

let assertions = 0;
const match = (value, pattern) => { assertions += 1; assert.match(value, pattern); };
const doesNotMatch = (value, pattern) => { assertions += 1; assert.doesNotMatch(value, pattern); };

// Desk owns its library hierarchy, while the synchronized Shelf runtime owns
// the actual Theme + Settings controls and gear presentation.
match(libraryCss, /body\[data-stage="library"\] \.app-header \.header-right \{[\s\S]*display:flex;/);
match(libraryCss, /body\[data-stage="library"\] #bookmarkBtn,[\s\S]*#searchBtn,[\s\S]*#tocBtn,[\s\S]*\.reading-time \{ display:none; \}/);
match(libraryCss, /body\[data-stage="library"\] #themeModeBtn,[\s\S]*#settingsBtn \{ display:inline-flex; \}/);
doesNotMatch(libraryCss, /#settingsBtn\s+svg|#settingsBtn::before/);
doesNotMatch(libraryCss, /content:\s*["']Aa["']/);
doesNotMatch(readingCss, /#settingsBtn::before|content:\s*["']Aa["']/);

// Keep the localized library hierarchy, but do not grow another control runtime.
match(loader, /desk-library-home\.css/);
doesNotMatch(loader, /desk-global-controls/);
match(loader, /viewport-stability-runtime\.js/);

// Presentation adapters must not own reading geometry or state.
doesNotMatch(libraryCss, /\.page-inner\s*\{/);
doesNotMatch(libraryCss, /\.pages-wrapper\s*\{/);
doesNotMatch(libraryCss, /localStorage|sessionStorage/);

console.log(`Desk canonical global controls: ${assertions} assertions passed`);
