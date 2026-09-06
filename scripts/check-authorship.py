#!/usr/bin/env python3
"""Enforce Sven Hardy Benson as the author of every Desk book."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BOOKS = ROOT / "books"
CANONICAL_AUTHOR = "Sven Hardy Benson"
AUTHOR_ROW = re.compile(
    r"^\|\s*\*\*(?:Authors?|Author)\*\*\s*\|\s*([^|]+?)\s*\|\s*$",
    flags=re.IGNORECASE | re.MULTILINE,
)


def main() -> int:
    failures: list[str] = []
    checked = 0

    for book_dir in sorted(BOOKS.iterdir()):
        if not book_dir.is_dir() or book_dir.name.startswith("_"):
            continue

        checked += 1
        readme = book_dir / "README.md"
        if not readme.is_file():
            failures.append(f"{book_dir.relative_to(ROOT)}: missing README.md")
            continue

        text = readme.read_text(encoding="utf-8")
        match = AUTHOR_ROW.search(text)
        if not match:
            failures.append(
                f"{readme.relative_to(ROOT)}: missing Authors metadata; expected {CANONICAL_AUTHOR!r}"
            )
        elif match.group(1).strip() != CANONICAL_AUTHOR:
            failures.append(
                f"{readme.relative_to(ROOT)}: author is {match.group(1).strip()!r}; "
                f"expected {CANONICAL_AUTHOR!r}"
            )

        front_matter = book_dir / "manuscript" / "front-matter.md"
        if front_matter.is_file():
            front_text = front_matter.read_text(encoding="utf-8")
            if CANONICAL_AUTHOR not in front_text:
                failures.append(
                    f"{front_matter.relative_to(ROOT)}: missing visible author {CANONICAL_AUTHOR!r}"
                )

    if failures:
        for failure in failures:
            print(f"ERROR: {failure}")
        print(f"\nAuthorship check failed with {len(failures)} issue(s) across {checked} books.")
        return 1

    print(f"Authorship check passed: {checked} books credit {CANONICAL_AUTHOR}.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
