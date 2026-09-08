#!/usr/bin/env python3
"""Regression guard for the Desk Reader portion of scripts/check-desk.py."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
source = (ROOT / "scripts" / "check-desk.py").read_text(encoding="utf-8")

required = (
    'check-reader-runtime-boundary.py',
    'const canonicalAppUrl = \'https://svyable.github.io/bookself/reader/js/app.js?v=r4\';',
    "const canonicalAppUrl = new URL('./app.js', import.meta.url).href;",
)
for marker in required:
    assert marker in source, f"missing current Reader integrity marker: {marker}"

retired = (
    'Reader loader is missing DESK_CATALOG_AUDIT',
    'Reader loader DESK_CATALOG_AUDIT does not match',
    'active catalog compatibility guard',
    'rewriteSharedModuleSpecifiers(source, upstream)',
)
for marker in retired:
    assert marker not in source, f"retired Reader integrity contract returned: {marker}"

print('check-desk.py enforces the local-sync Reader boundary without retired source rewriting')
