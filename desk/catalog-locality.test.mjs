import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('./', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');
const desk = readFileSync(new URL('desk.js', root), 'utf8');
const catalog = readFileSync(new URL('catalog-contract.js', root), 'utf8');

let assertions = 0;
function match(value, pattern) { assertions += 1; assert.match(value, pattern); }
function doesNotMatch(value, pattern) { assertions += 1; assert.doesNotMatch(value, pattern); }

match(desk, /^import \{ parseBookReadme, parsePortalCatalog \} from '\.\/catalog-contract\.js';/m);
doesNotMatch(desk, /https:\/\/svyable\.github\.io\/shelf\/reader\/js\/catalog\.js/);
doesNotMatch(html, /https:\/\/svyable\.github\.io\/shelf\/reader\/js\/catalog\.js/);
match(html, /"https:\/\/svyable\.github\.io\/shelf\/reader\/js\/presentation\.js": "\.\/reader-presentation-contract\.js"/);
match(html, /"https:\/\/svyable\.github\.io\/shelf\/reader\/js\/cover-presentation\.js": "\.\/cover-presentation-contract\.js"/);

// Catalog parsing is a pure local contract. Repository/network access remains in
// desk.js; this module only interprets Markdown already acquired by the workspace.
doesNotMatch(catalog, /^import\s/m);
doesNotMatch(catalog, /\bfetch\s*\(/);
doesNotMatch(catalog, /\blocalStorage\b/);
doesNotMatch(catalog, /\bdocument\b/);
match(catalog, /export function parsePortalCatalog/);
match(catalog, /export function parseBookReadme/);
match(catalog, /published: status === 'Published'/);

console.log(`Desk catalog locality: ${assertions} assertions passed`);
