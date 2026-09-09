#!/usr/bin/env python3
"""Regression guard for Desk Reader's Bookself-aligned first-paint boundary."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
loader = (ROOT / "reader" / "js" / "app-loader.js").read_text(encoding="utf-8")

assert "function loadOptionalEnhancements()" in loader
assert "for (const [url, label] of optionalEnhancements)" in loader
assert "import(url).catch((error) =>" in loader
assert "loadOptionalEnhancements();" in loader
assert "await import(canonicalAppUrl);" in loader

optional_markers = (
    "viewportStabilityUrl",
    "nativeShareUrl",
    "./desk-book-interior.js?v=bookself-20260906-fail-open-1",
    "appShellPolishUrl",
    "./desk-book-opening-handoff.js?v=bookself-20260906",
    "./desk-reading-app.js?v=bookself-20260905",
)
for marker in optional_markers:
    assert marker in loader, f"missing optional Desk Reader enhancement: {marker}"

startup = loader[loader.index("try {") :]
assert startup.index("loadOptionalEnhancements();") < startup.index("await import(canonicalAppUrl);")
assert startup.count("await import(") == 1, "only canonical app startup may block the Desk Reader bootstrap"
assert "try { await import(" not in startup, "serial optional enhancement awaits returned to startup"
assert "showRecovery(error);" in startup, "canonical app failure must retain accessible recovery"

print("Desk Reader starts optional polish in parallel and blocks only on canonical app startup")
