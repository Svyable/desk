import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const readerRoot = new URL('../', import.meta.url);
const index = readFileSync(new URL('index.html', readerRoot), 'utf8');
const manifest = JSON.parse(readFileSync(new URL('manifest.webmanifest', readerRoot), 'utf8'));
const icon = readFileSync(new URL('app-icon.svg', readerRoot), 'utf8');

const deskReaderUrl = 'https://svyable.github.io/desk/reader/';

assert.equal(manifest.id, './');
assert.equal(manifest.name, 'Sven Hardy Benson’s Desk');
assert.equal(manifest.short_name, 'Desk');
assert.equal(manifest.start_url, './');
assert.equal(manifest.scope, './');
assert.equal(manifest.display, 'standalone');
assert.equal(manifest.orientation, 'any');
assert.deepEqual(manifest.icons[0], {
  src: 'app-icon.svg',
  sizes: 'any',
  type: 'image/svg+xml',
  purpose: 'any maskable',
});
assert.ok(manifest.categories.includes('books'));

// Desk's HTML intentionally uses Shelf as its shared Reader base. Native app
// identity must therefore be pinned to Desk explicitly rather than resolving
// through that base to the released Shelf Reader.
assert.match(index, /<base href="https:\/\/svyable\.github\.io\/shelf\/reader\/">/);
assert.match(index, new RegExp(`<link rel="manifest" href="${deskReaderUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}manifest\\.webmanifest">`));
assert.match(index, new RegExp(`<link rel="icon" type="image/svg\\+xml" href="${deskReaderUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}app-icon\\.svg" data-bookself-app-icon>`));
assert.doesNotMatch(index, /<link rel="manifest" href="manifest\.webmanifest">/);

assert.match(icon, /<title id="title">Sven Hardy Benson’s Desk<\/title>/);
assert.match(icon, /Three working books standing on a shelf/);
assert.match(icon, /viewBox="0 0 512 512"/);
assert.match(icon, /#0c0b0a/);
assert.match(icon, /#c89a52/);

for (const forbidden of [
  'location.hash',
  'history.pushState',
  'history.replaceState',
  'localStorage',
  'sessionStorage',
]) {
  assert.doesNotMatch(icon, new RegExp(forbidden));
}

console.log('Desk Reader native app identity contract ok');
