#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("release_book", ROOT / "scripts" / "release-book.py")
assert spec and spec.loader
release_book = importlib.util.module_from_spec(spec)
spec.loader.exec_module(release_book)

manifest = '{"version":1,"books":["alpha"]}\n'
updated, action = release_book.upsert_catalog_manifest(manifest, "beta")
assert action == "added"
assert json.loads(updated)["books"] == ["alpha", "beta"]

unchanged, action = release_book.upsert_catalog_manifest(updated, "beta")
assert action == "unchanged"
assert json.loads(unchanged)["books"] == ["alpha", "beta"]

for invalid in (
    '{"version":2,"books":[]}',
    '{"version":1,"books":["alpha","alpha"]}',
    '{"version":1,"books":["Bad Slug"]}',
):
    try:
        release_book.upsert_catalog_manifest(invalid, "beta")
    except release_book.ReleaseError:
        pass
    else:
        raise AssertionError(f"invalid manifest should fail: {invalid}")

print("Desk release catalog manifest tests ok")
