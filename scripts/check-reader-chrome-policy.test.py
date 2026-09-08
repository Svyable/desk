#!/usr/bin/env python3
"""Regression guard for Desk Reader chrome adaptation and Shelf independence."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
loader = (ROOT / "reader" / "js" / "app-loader.js").read_text(encoding="utf-8")
library_css = (ROOT / "reader" / "css" / "desk-library-home.css").read_text(encoding="utf-8")

required_loader = (
    "function installDeskChromePolicy()",
    "style.id = 'deskReaderChromePolicy';",
    "#readerOneHandedActions,.reader-one-handed-actions{display:none!important;}",
    "installDeskChromePolicy();",
    "await import(canonicalAppUrl);",
)
for marker in required_loader:
    assert marker in loader, f"missing Desk Reader chrome-policy marker: {marker}"

assert "oneHandedActionsReady" not in loader, "retired Bookself one-handed opt-out flag returned"
assert "https://svyable.github.io/shelf/reader/css/" not in library_css, "Desk library chrome must not come from personal Shelf"
assert "https://svyable.github.io/bookself/reader/css/library-home.css" in library_css, "Desk library chrome must follow canonical Bookself during migration"

print('Desk Reader keeps the required duplicate-chrome suppression without a personal-Shelf style dependency')
