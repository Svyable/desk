import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const css = readFileSync(new URL('css/desk-library-home.css', root), 'utf8');
const loader = readFileSync(new URL('js/app-loader.js', root), 'utf8');

let assertions = 0;
const match = (value, pattern) => { assertions += 1; assert.match(value, pattern); };
const doesNotMatch = (value, pattern) => { assertions += 1; assert.doesNotMatch(value, pattern); };

// Temporary adaptation of Bookself #301 while Shelf remains on #300.
// Presentation is canonical in Desk CSS rather than depending on Shelf's late
// global-reader-controls stage/icon override. Delete this compatibility block
// once Shelf's own library/settings styles have synced #301.
match(css, /body\[data-stage="library"\] \.app-header \.header-right \{[\s\S]*display:flex;/);
match(css, /body\[data-stage="library"\] #bookmarkBtn,[\s\S]*#searchBtn,[\s\S]*#tocBtn,[\s\S]*\.reading-time \{ display:none; \}/);
match(css, /body\[data-stage="library"\] #themeModeBtn,[\s\S]*#settingsBtn \{ display:inline-flex; \}/);
match(css, /body\[data-stage="read"\] #settingsBtn svg[\s\S]*display:block !important;/);
match(css, /body\[data-stage="read"\] #settingsBtn::before[\s\S]*content:none !important;[\s\S]*display:none !important;/);
doesNotMatch(css, /content:\s*["']Aa["']/);

// Keep this in the existing local library stylesheet instead of growing a
// second control-specific adapter or copying Shelf's runtime module.
match(loader, /desk-library-home\.css/);
doesNotMatch(loader, /desk-global-controls|global-reader-controls\.js/);

// This adaptation must not own reading geometry or state.
doesNotMatch(css, /\.page-inner\s*\{/);
doesNotMatch(css, /\.pages-wrapper\s*\{/);
doesNotMatch(css, /localStorage|sessionStorage/);

console.log(`Desk canonical global controls: ${assertions} assertions passed`);
