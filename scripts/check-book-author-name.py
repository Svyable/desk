#!/usr/bin/env python3
"""Reject the legacy Svyable name in book-draft copy without breaking repo URLs."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BOOKS = ROOT / "books"
LEGACY_NAME = re.compile(r"\bsvyable\b", re.IGNORECASE)
RAW_URL = re.compile(r"https?://[^\s)>\]}]+", re.IGNORECASE)
REPO_CODE = re.compile(r"`Svyable/[A-Za-z0-9._/-]+`", re.IGNORECASE)


def visible_copy(line: str) -> str:
    """Remove technical identifiers that must stay valid before checking prose."""
    line = RAW_URL.sub("", line)
    return REPO_CODE.sub("", line)


def candidate_files(book_dir: Path) -> list[Path]:
    files = sorted(book_dir.rglob("*.md"))
    rights_json = book_dir / "rights.json"
    if rights_json.is_file():
        files.append(rights_json)
    return files


def main() -> int:
    findings: list[tuple[Path, int, str]] = []
    checked = 0

    for book_dir in sorted(
        path for path in BOOKS.iterdir() if path.is_dir() and not path.name.startswith("_")
    ):
        for path in candidate_files(book_dir):
            checked += 1
            relative = path.relative_to(ROOT)
            if LEGACY_NAME.search(path.name):
                findings.append((relative, 0, "legacy name remains in filename"))
            for line_number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
                if LEGACY_NAME.search(visible_copy(line)):
                    findings.append((relative, line_number, line.strip()))

    if findings:
        print("Legacy public-facing name found in book drafts:")
        for path, line_number, line in findings:
            where = f"{path}:{line_number}" if line_number else str(path)
            print(f"{where}: {line}")
        return 1

    print(
        f"Book author-name check passed across {checked} draft files; "
        "technical Svyable repository URLs/coordinates were preserved."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
