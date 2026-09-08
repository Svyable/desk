#!/usr/bin/env python3
"""Regression guard for Desk Reader chrome adaptation and local Bookself ownership."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
loader = (ROOT / "reader" / "js" / "app-loader.js").read_text(encoding="utf-8")
library_path = ROOT / "reader" / "css" / "library-home.css"
library_css = library_path.read_text(encoding="utf-8")
manifest = (ROOT / "reader" / ".bookself-runtime-files").read_text(encoding="utf-8").splitlines()
retired_bridge = ROOT / "reader" / "css" / "desk-library-home.css"

required_loader = (
    "function installDeskChromePolicy()",
    "style.id = 'deskReaderChromePolicy';",
    "#readerOneHandedActions,.reader-one-handed-actions{display:none!important;}",
    "installDeskChromePolicy();",
    "new URL('../css/library-home.css', import.meta.url).href",
    "installDeskStylesheet('bookselfLibraryHome', libraryHomeUrl);",
    "await import(canonicalAppUrl);",
)
for marker in required_loader:
    assert marker in loader, f"missing Desk Reader chrome-policy marker: {marker}"

assert "oneHandedActionsReady" not in loader, "retired Bookself one-handed opt-out flag returned"
assert "desk-library-home.css" not in loader, "retired Desk library-home bridge returned to the loader"
assert not retired_bridge.exists(), "retired Desk library-home bridge file returned"
assert "css/library-home.css" in manifest, "canonical library-home stylesheet must be Bookself-owned"
assert "https://svyable.github.io/shelf/reader/" not in library_css, "Desk library chrome must not come from personal Shelf"
assert "https://svyable.github.io/bookself/reader/" not in library_css, "localized Bookself library chrome must not fetch Bookself Pages"
assert "@import" not in library_css, "localized Bookself library chrome must not be an import bridge"

for marker in (
    "Reading-library home hierarchy",
    '@media (max-width: 700px)',
    '@media (prefers-reduced-motion: reduce)',
    '@media (forced-colors: active)',
):
    assert marker in library_css, f"canonical library-home behavior missing: {marker}"

print('Desk Reader owns canonical library-home chrome locally and keeps only its required duplicate-control suppression')
