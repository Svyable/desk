#!/usr/bin/env python3
"""Check the local invariants that keep Desk navigation and feedback usable.

This script intentionally uses only the Python standard library and the checked-out
repository. It does not require GitHub Actions, network access, or a build step.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BOOKS = ROOT / "books"
README = ROOT / "README.md"
FEEDBACK = ROOT / ".github" / "ISSUE_TEMPLATE" / "chapter-feedback.yml"
INDEX = ROOT / "index.html"
LOADER = ROOT / "reader" / "js" / "app-loader.js"


def fail(message: str) -> None:
    print(f"ERROR: {message}")
    global FAILED
    FAILED = True


def section(text: str, heading: str) -> str:
    marker = f"## {heading}"
    start = text.find(marker)
    if start < 0:
        fail(f"missing {marker!r}")
        return ""
    body = text[start + len(marker) :]
    end = re.search(r"^##\s+", body, flags=re.MULTILINE)
    return body[: end.start()] if end else body


def compare(label: str, expected: set[str], actual: set[str]) -> None:
    missing = sorted(expected - actual)
    extra = sorted(actual - expected)
    if missing:
        fail(f"{label} is missing: {', '.join(missing)}")
    if extra:
        fail(f"{label} has unexpected entries: {', '.join(extra)}")


FAILED = False

book_dirs = {
    path.name
    for path in BOOKS.iterdir()
    if path.is_dir() and not path.name.startswith("_")
}
if not book_dirs:
    fail("no books discovered under books/")

for slug in sorted(book_dirs):
    if not (BOOKS / slug / "README.md").is_file():
        fail(f"books/{slug}/ is missing README.md")

readme_text = README.read_text(encoding="utf-8")
books_section = section(readme_text, "The books")
rows = re.findall(
    r"^\|\s*\[[^\]]+\]\(books/([^/]+)/\)\s*\|\s*"
    r"\[[^\]]+\]\(https://svyable\.github\.io/desk/reader/#/b/([^/]+)/\)\s*\|\s*$",
    books_section,
    flags=re.MULTILINE,
)
readme_slugs = {book_slug for book_slug, _reader_slug in rows}
compare("README book catalog", book_dirs, readme_slugs)

for book_slug, reader_slug in rows:
    if book_slug != reader_slug:
        fail(f"README route mismatch: books/{book_slug}/ points at Reader slug {reader_slug}")

if len(rows) != len(readme_slugs):
    fail("README book catalog contains duplicate book rows")

feedback_text = FEEDBACK.read_text(encoding="utf-8")
book_block = re.search(
    r"(?ms)^\s*- type: dropdown\n\s+id: book\n(?P<body>.*?)(?=^\s*- type: |\Z)",
    feedback_text,
)
if not book_block:
    fail("could not find chapter-feedback.yml book dropdown")
    feedback_slugs: set[str] = set()
else:
    options = re.search(r"(?ms)^\s+options:\n(?P<body>(?:\s+- .+\n?)+)", book_block.group("body"))
    if not options:
        fail("could not find options for chapter-feedback.yml book dropdown")
        feedback_slugs = set()
    else:
        feedback_slugs = {
            match.group(1).strip()
            for match in re.finditer(r"^\s+-\s+(.+?)\s*$", options.group("body"), flags=re.MULTILINE)
        }
compare("chapter feedback book dropdown", book_dirs, feedback_slugs)

index_text = INDEX.read_text(encoding="utf-8")
for required in ("fetch('README.md'", "## The books", "parseCatalog"):
    if required not in index_text:
        fail(f"Desk landing page is not deriving its catalog from README.md ({required!r} missing)")

loader_text = LOADER.read_text(encoding="utf-8")
for required in (
    "meta\\.published",
    "window.__IMPRINT?.role === 'desk'",
    "Shared Reader catalog hook changed",
):
    if required not in loader_text:
        fail(f"Reader loader is missing compatibility guard {required!r}")

if FAILED:
    print("\nDesk integrity check failed.")
    sys.exit(1)

print(f"Desk integrity check passed: {len(book_dirs)} books are cataloged consistently.")
