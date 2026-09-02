import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('./', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');
const newPublication = readFileSync(new URL('new-publication.js', root), 'utf8');
const readerDesign = readFileSync(new URL('reader-design.js', root), 'utf8');
const coverDesign = readFileSync(new URL('cover-design.js', root), 'utf8');
const presentationContract = readFileSync(new URL('reader-presentation-contract.js', root), 'utf8');
const coverContract = readFileSync(new URL('cover-presentation-contract.js', root), 'utf8');

let assertions = 0;
function match(value, pattern) { assertions += 1; assert.match(value, pattern); }
function doesNotMatch(value, pattern) { assertions += 1; assert.doesNotMatch(value, pattern); }

const presentationUrl = 'https://svyable.github.io/shelf/reader/js/presentation.js';
const coverUrl = 'https://svyable.github.io/shelf/reader/js/cover-presentation.js';

match(newPublication, new RegExp(presentationUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
match(readerDesign, new RegExp(presentationUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
match(coverDesign, new RegExp(coverUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));

match(html, /<script type="importmap">/);
match(html, /"https:\/\/svyable\.github\.io\/shelf\/reader\/js\/presentation\.js": "\.\/reader-presentation-contract\.js"/);
match(html, /"https:\/\/svyable\.github\.io\/shelf\/reader\/js\/cover-presentation\.js": "\.\/cover-presentation-contract\.js"/);

// The promoted contract layer must remain pure and local. Network/document/storage
// behavior belongs to the shared Reader or the studios, not these schema modules.
for (const source of [presentationContract, coverContract]) {
  doesNotMatch(source, /^import\s/m);
  doesNotMatch(source, /https?:\/\//);
  doesNotMatch(source, /\bfetch\s*\(/);
  doesNotMatch(source, /\blocalStorage\b/);
  doesNotMatch(source, /\bdocument\b/);
}

match(presentationContract, /366bc90859c77f1d5e4a27d232d302141872fbe4/);
match(coverContract, /f8455299c5df234199dd450deb11e11b5cdbf9d6/);

console.log(`Desk authoring locality: ${assertions} assertions passed`);
