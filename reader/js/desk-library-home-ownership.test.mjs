import assert from 'node:assert/strict';
import fs from 'node:fs';

const adapter = fs.readFileSync(new URL('../css/desk-library-home.css', import.meta.url), 'utf8');
const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');

assert.match(adapter, /@import url\("https:\/\/svyable\.github\.io\/shelf\/reader\/css\/library-home\.css\?v=bookself-[^"]+"\);/);
assert.doesNotMatch(adapter, /\.library-bar\s*\{/);
assert.doesNotMatch(adapter, /\.continue-card\s*\{/);
assert.doesNotMatch(adapter, /\.volume-subtitle\s*\{/);
assert.doesNotMatch(adapter, /#themeModeBtn[\s\S]*display\s*:\s*inline-flex/);
assert.match(loader, /desk-library-home\.css/);
assert.match(loader, /installDeskStylesheet\('deskLibraryHome'/);
assert.match(loader, /sharedReaderOwnsDeskCatalogVisibility/);
assert.match(loader, /skipDeskCatalogCoverProbe/);

console.log('desk library-home ownership contract ok');
