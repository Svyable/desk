import assert from 'node:assert/strict';
import fs from 'node:fs';

const adapter = fs.readFileSync(new URL('../css/desk-library-home.css', import.meta.url), 'utf8');
const readingCss = fs.readFileSync(new URL('../css/desk-reading-app.css', import.meta.url), 'utf8');
const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');

// The shared Shelf-backed Reader owns library hierarchy and global control
// presentation. Desk keeps only the explicit delegation boundary.
assert.match(adapter, /@import url\("https:\/\/svyable\.github\.io\/shelf\/reader\/css\/library-home\.css\?v=bookself-[^"]+"\);/);
assert.doesNotMatch(adapter, /\.library-bar\s*\{/);
assert.doesNotMatch(adapter, /\.continue-card\s*\{/);
assert.doesNotMatch(adapter, /\.volume-subtitle\s*\{/);
assert.doesNotMatch(adapter, /\.app-header\s+\.header-right\s*\{/);
assert.doesNotMatch(adapter, /#themeModeBtn|#settingsBtn|#bookmarkBtn|#searchBtn|#tocBtn/);
assert.doesNotMatch(adapter, /#settingsBtn::before|content:\s*["']Aa["']/);
assert.doesNotMatch(readingCss, /#settingsBtn::before|content:\s*["']Aa["']/);

// Keep the one local stylesheet hook, but do not grow another library/control
// runtime or take ownership of Reader geometry/state.
assert.match(loader, /desk-library-home\.css/);
assert.match(loader, /installDeskStylesheet\('deskLibraryHome'/);
assert.match(loader, /sharedReaderOwnsDeskCatalogVisibility/);
assert.match(loader, /skipDeskCatalogCoverProbe/);
assert.doesNotMatch(loader, /desk-global-controls/);
assert.doesNotMatch(adapter, /\.page-inner\s*\{|\.pages-wrapper\s*\{|localStorage|sessionStorage/);

console.log('desk library-home and global-control ownership contract ok');
