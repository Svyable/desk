import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const runtime = readFileSync(new URL('js/app-shell-polish.js', root), 'utf8');
const styles = readFileSync(new URL('css/app-shell-polish.css', root), 'utf8');
const loader = readFileSync(new URL('js/app-loader.js', root), 'utf8');
const ownership = readFileSync(new URL('.bookself-runtime-files', root), 'utf8');

let assertions = 0;
const match = (value, pattern) => { assertions += 1; assert.match(value, pattern); };
const doesNotMatch = (value, pattern) => { assertions += 1; assert.doesNotMatch(value, pattern); };

// Bookself owns the shared app-shell behavior and presentation. Desk executes
// the synced copies locally rather than delegating executable code or CSS to Shelf.
match(loader, /const appShellPolishUrl = new URL\('\.\/app-shell-polish\.js', import\.meta\.url\)\.href;/);
match(loader, /await import\(appShellPolishUrl\)/);
match(runtime, /const STYLE_HREF = 'css\/app-shell-polish\.css\?v=r1';/);
match(runtime, /export function decorateAppShell/);
match(runtime, /export function installAppShellStyles/);
match(styles, /\[data-reader-label\]/);
match(styles, /prefers-reduced-motion: reduce/);
match(styles, /forced-colors: active/);
match(ownership, /^css\/app-shell-polish\.css$/m);
match(ownership, /^js\/app-shell-polish\.js$/m);

// The old dependency triangle must not return. Shelf remains a publication
// destination/reference, never the executable provider for this shared runtime.
doesNotMatch(loader, /desk-app-shell-polish\.js/);
doesNotMatch(loader, /svyable\.github\.io\/shelf\/reader\/(?:js|css)\/app-shell-polish/);
doesNotMatch(runtime, /svyable\.github\.io\/shelf\/reader/);
doesNotMatch(styles, /@import\s+url\([^)]*svyable\.github\.io\/shelf\/reader/);

console.log(`Desk local Bookself app-shell ownership: ${assertions} assertions passed`);
