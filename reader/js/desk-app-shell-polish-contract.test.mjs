import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const adapter = readFileSync(new URL('js/desk-app-shell-polish.js', root), 'utf8');
const cssAdapter = readFileSync(new URL('css/app-shell-polish.css', root), 'utf8');
const loader = readFileSync(new URL('js/app-loader.js', root), 'utf8');

let assertions = 0;
const match = (value, pattern) => { assertions += 1; assert.match(value, pattern); };
const doesNotMatch = (value, pattern) => { assertions += 1; assert.doesNotMatch(value, pattern); };

// Keep the existing caught Desk bootstrap hook, but delegate Bookself #305's
// behavior and presentation to the exact shared Shelf-backed Reader assets.
match(loader, /import\('\.\/desk-app-shell-polish\.js\?v=bookself-20260906'\)/);
match(adapter, /https:\/\/svyable\.github\.io\/shelf\/reader\/js\/app-shell-polish\.js/);
match(adapter, /export \* from/);
match(cssAdapter, /@import url\("https:\/\/svyable\.github\.io\/shelf\/reader\/css\/app-shell-polish\.css\?v=r1"\);/);

// Desk must not regrow a second implementation of shared labels, observers,
// transient surfaces, responsive chrome, Reader geometry, or state ownership.
doesNotMatch(adapter, /MutationObserver|dataset\.readerLabel|aria-label|localStorage|sessionStorage|fetch\(/);
doesNotMatch(cssAdapter, /data-reader-label|\.sel-pop|\.toast|\.read-hint|\.page-inner|\.page-surface|--page-|--base-font-size|--line-height/);
doesNotMatch(loader, /readerOneHandedActions[^\n]*display:(?!none)/);

console.log(`Desk shared app-shell ownership: ${assertions} assertions passed`);
