#!/usr/bin/env python3
"""Regression guards for Desk Reader ownership and Bookself update boundaries."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
check_source = (ROOT / "scripts" / "check-desk.py").read_text(encoding="utf-8")
sync_source = (ROOT / "scripts" / "sync-bookself.sh").read_text(encoding="utf-8")

required = (
    'check-reader-runtime-boundary.py',
    'const canonicalAppUrl = \'https://svyable.github.io/bookself/reader/js/app.js?v=r4\';',
    "const canonicalAppUrl = new URL('./app.js', import.meta.url).href;",
)
for marker in required:
    assert marker in check_source, f"missing current Reader integrity marker: {marker}"

retired = (
    'Reader loader is missing DESK_CATALOG_AUDIT',
    'Reader loader DESK_CATALOG_AUDIT does not match',
    'active catalog compatibility guard',
    'rewriteSharedModuleSpecifiers(source, upstream)',
)
for marker in retired:
    assert marker not in check_source, f"retired Reader integrity contract returned: {marker}"

assert 'SYNC="$PLATFORM/scripts/sync-ui.py"' in sync_source
assert 'exec python3 "$SYNC" --desk-safe "$ROOT"' in sync_source
assert 'const SHELL = [' not in sync_source
assert '.bookself-runtime-files' not in sync_source
assert 'check-reader-runtime-boundary.py' not in sync_source
assert len(sync_source.splitlines()) < 25, "Desk Bookself updater should remain a thin role adapter"

print('Desk delegates framework synchronization to Bookself while retaining local Reader integrity checks')
