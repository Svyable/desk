import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const source = readFileSync(fileURLToPath(new URL('./app-loader.js', import.meta.url)), 'utf8');

assert.match(source, /const localAppUrl = '\.\/js\/app\.js';/);
assert.match(source, /const fallbackAppUrl = `\$\{upstream\}app\.js/);
assert.match(source, /fetchBootstrapResource\(localAppUrl, \{ retryDelays: \[\] \}\)/);
assert.match(source, /fetchBootstrapResource\(fallbackAppUrl\)/);
assert.match(source, /if \(local\) \{\s*await import\('\.\/app\.js'\);/s);
assert.match(source, /const adapted = adaptRemoteReaderSource\(source\);/);
assert.doesNotMatch(source, /const appUrl = `\$\{upstream\}app\.js/);

console.log('Desk Reader bootstrap prefers local canonical app with Shelf compatibility fallback');
