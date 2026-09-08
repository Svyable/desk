#!/usr/bin/env python3
"""Reject Desk Reader runtime dependencies on the personal Shelf.

Ordinary navigation links to the released Shelf Reader are allowed. Executable,
stylesheet, worker, and vendored runtime assets must come from the local Desk
copy of canonical Bookself instead.
"""

from __future__ import annotations

import argparse
from pathlib import Path

FORBIDDEN = (
    "https://svyable.github.io/shelf/reader/js/",
    "https://svyable.github.io/shelf/reader/css/",
    "https://svyable.github.io/shelf/reader/vendor/",
    "https://svyable.github.io/shelf/reader/sw.js",
)
TEXT_SUFFIXES = {".html", ".js", ".mjs", ".css", ".json", ".webmanifest"}


def check(root: Path) -> list[str]:
    reader = root / "reader"
    failures: list[str] = []
    if not reader.is_dir():
        return [f"Desk Reader not found: {reader}"]

    for path in sorted(reader.rglob("*")):
        if not path.is_file() or path.suffix not in TEXT_SUFFIXES:
            continue
        try:
            source = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for forbidden in FORBIDDEN:
            if forbidden in source:
                failures.append(f"{path.relative_to(root)} depends on personal Shelf runtime: {forbidden}")
    return failures


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", nargs="?", type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    failures = check(args.root.resolve())
    if failures:
        for failure in failures:
            print(f"ERROR: {failure}")
        return 1
    print("Desk Reader runtime boundary: no executable/style/vendor dependencies on personal Shelf")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
