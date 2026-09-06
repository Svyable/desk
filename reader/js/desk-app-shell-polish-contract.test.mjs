import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const runtime = readFileSync(new URL('js/desk-app-shell-polish.js', root), 'utf8');
const css = readFileSync(new URL('css/desk-app-shell-polish.css', root), 'utf8');
const loader = readFileSync(new URL('js/app-loader.js', root), 'utf8');

let assertions = 0;
const match = (value, pattern) => { assertions += 1; assert.match(value, pattern); };
const doesNotMatch = (value, pattern) => { assertions += 1; assert.doesNotMatch(value, pattern); };

match(loader, /import\('\.\/desk-app-shell-polish\.js\?v=bookself-20260906'\)/);
match(runtime, /new URL\('\.\.\/css\/desk-app-shell-polish\.css\?v=bookself-20260906', import\.meta\.url\)/);
match(runtime, /getAttribute\('aria-label'\)/);
match(runtime, /getAttribute\('title'\)/);
match(runtime, /dataset\.readerLabel = label/);
match(runtime, /attributeFilter: \['aria-label', 'title'\]/);
match(css, /@media \(hover: hover\) and \(pointer: fine\)/);
match(css, /content: attr\(data-reader-label\)/);
match(css, /@media \(max-width: 700px\), \(pointer: coarse\)/);
match(css, /@media \(forced-colors: active\)/);
match(css, /@media \(prefers-reduced-motion: reduce\)/);
match(css, /@media \(prefers-reduced-transparency: reduce\)/);
match(css, /@media \(prefers-contrast: more\)/);
doesNotMatch(runtime, /localStorage|sessionStorage|fetch\(/);
doesNotMatch(css, /\.page-inner\s*\{|\.page-surface\s*\{|--page-|--base-font-size|--line-height/);
doesNotMatch(loader, /readerOneHandedActions[^\n]*display:(?!none)/);

console.log(`Desk Reader app-shell discoverability: ${assertions} assertions passed`);
