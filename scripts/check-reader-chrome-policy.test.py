#!/usr/bin/env python3
"""Regression guard for the Desk Reader's minimal Bookself chrome opt-out."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
loader = (ROOT / "reader" / "js" / "app-loader.js").read_text(encoding="utf-8")

required = (
    "document.documentElement.dataset.oneHandedActionsReady = 'true';",
    "await import(canonicalAppUrl);",
)
for marker in required:
    assert marker in loader, f"missing Desk Reader chrome-policy marker: {marker}"

retired = (
    "installDeskChromePolicy",
    "deskReaderChromePolicy",
    "#readerOneHandedActions",
    ".reader-one-handed-actions",
)
for marker in retired:
    assert marker not in loader, f"redundant injected chrome suppression returned: {marker}"

assert loader.count("oneHandedActionsReady = 'true'") == 1, "Desk Reader chrome opt-out must remain a single stable configuration assignment"

print('Desk Reader suppresses duplicate one-handed chrome through Bookself configuration only')
