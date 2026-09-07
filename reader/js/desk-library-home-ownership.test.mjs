import assert from 'node:assert/strict';
import fs from 'node:fs';

const root = new URL('../', import.meta.url);
const adapter = fs.readFileSync(new URL('css/desk-library-home.css', root), 'utf8');
const readingCss = fs.readFileSync(new URL('css/desk-reading-app.css', root), 'utf8');
const shell = fs.readFileSync(new URL('index.html', root), 'utf8');
const loader = fs.readFileSync(new URL('js/app-loader.js', root), 'utf8');
const worker = fs.readFileSync(new URL('sw.js', root), 'utf8');

// The shared Shelf-backed Reader owns library hierarchy, the canonical Continue
// card, and global control presentation. Desk keeps only explicit delegation.
assert.match(adapter, /@import url\("https:\/\/svyable\.github\.io\/shelf\/reader\/css\/library-home\.css\?v=bookself-[^"]+"\);/);
assert.doesNotMatch(adapter, /\.library-bar\s*\{/);
assert.doesNotMatch(adapter, /\.continue-card\s*\{/);
assert.doesNotMatch(adapter, /\.volume-subtitle\s*\{/);
assert.doesNotMatch(adapter, /\.app-header\s+\.header-right\s*\{/);
assert.doesNotMatch(adapter, /#themeModeBtn|#settingsBtn|#bookmarkBtn|#searchBtn|#tocBtn/);
assert.doesNotMatch(adapter, /#settingsBtn::before|content:\s*["']Aa["']/);
assert.doesNotMatch(readingCss, /#settingsBtn::before|content:\s*["']Aa["']/);

// Preserve the canonical shared resume surface in the Desk shell instead of
// rebuilding it with a second local book-object/progress runtime.
assert.match(shell, /class="continue-card" id="continueCard" hidden/);
assert.match(shell, /id="continueCardLink"/);
assert.match(shell, /id="continueCardTitle"/);
assert.equal(fs.existsSync(new URL('js/desk-library-current-book.js', root)), false);
assert.equal(fs.existsSync(new URL('css/desk-library-current-book.css', root)), false);
assert.equal(fs.existsSync(new URL('js/desk-library-current-book.test.mjs', root)), false);
assert.doesNotMatch(loader, /desk-library-current-book/);
assert.doesNotMatch(worker, /desk-library-current-book/);

// Keep the one local stylesheet hook and Desk catalog semantics, but do not grow
// another library/control runtime or take ownership of Reader geometry/state.
assert.match(loader, /desk-library-home\.css/);
assert.match(loader, /installDeskStylesheet\('deskLibraryHome'/);
assert.match(loader, /sharedReaderOwnsDeskCatalogVisibility/);
assert.match(loader, /skipDeskCatalogCoverProbe/);
assert.doesNotMatch(loader, /desk-global-controls/);
assert.doesNotMatch(adapter, /\.page-inner\s*\{|\.pages-wrapper\s*\{|localStorage|sessionStorage/);

console.log('desk shared library, current-book, and global-control ownership contract ok');
