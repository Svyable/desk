#!/usr/bin/env python3
"""Reject remote Desk Reader runtime dependencies that violate ownership.

Ordinary navigation links to the released Shelf Reader are allowed. Personal
Shelf runtime is always forbidden. During the checked-in migration state,
canonical Bookself Pages runtime is temporarily allowed; a completed sync opts
into --require-local-bookself and must contain no remote Bookself runtime either.
"""

from __future__ import annotations

import argparse
from pathlib import Path

SHELF_RUNTIME = (
    "https://svyable.github.io/shelf/reader/js/",
    "https://svyable.github.io/shelf/reader/css/",
    "https://svyable.github.io/shelf/reader/vendor/",
    "https://svyable.github.io/shelf/reader/sw.js",
)
BOOKSELF_RUNTIME = (
    "https://svyable.github.io/bookself/reader/js/",
    "https://svyable.github.io/bookself/reader/css/",
    "https://svyable.github.io/bookself/reader/vendor/",
    "https://svyable.github.io/bookself/reader/sw.js",
)
TEXT_SUFFIXES = {".html", ".js", ".mjs", ".css", ".json", ".webmanifest"}


def check(root: Path, *, require_local_bookself: bool = False) -> list[str]:
    reader = root / "reader"
    failures: list[str] = []
    if not reader.is_dir():
        return [f"Desk Reader not found: {reader}"]

    forbidden = [(runtime, "personal Shelf") for runtime in SHELF_RUNTIME]
    if require_local_bookself:
        forbidden.extend((runtime, "remote Bookself") for runtime in BOOKSELF_RUNTIME)

    for path in sorted(reader.rglob("*")):
        if not path.is_file() or path.suffix not in TEXT_SUFFIXES:
            continue
        try:
            source = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for runtime, provider in forbidden:
            if runtime in source:
                failures.append(
                    f"{path.relative_to(root)} depends on {provider} runtime: {runtime}"
                )
    return failures


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", nargs="?", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument(
        "--require-local-bookself",
        action="store_true",
        help="also reject canonical Bookself Pages runtime after a complete local sync",
    )
    args = parser.parse_args()
    failures = check(args.root.resolve(), require_local_bookself=args.require_local_bookself)
    if failures:
        for failure in failures:
            print(f"ERROR: {failure}")
        return 1
    if args.require_local_bookself:
        print("Desk Reader runtime boundary: all Bookself runtime is local and no personal Shelf runtime is used")
    else:
        print("Desk Reader runtime boundary: no executable/style/vendor dependencies on personal Shelf")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
