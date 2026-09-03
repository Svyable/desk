#!/usr/bin/env python3
"""Check the local invariants that keep Desk navigation and discovery usable.

This script intentionally uses only the Python standard library and the checked-out
repository. It does not require GitHub Actions, network access, or a build step.
"""

from __future__ import annotations

import csv
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BOOKS = ROOT / "books"
README = ROOT / "README.md"
FEEDBACK = ROOT / ".github" / "ISSUE_TEMPLATE" / "chapter-feedback.yml"
INDEX = ROOT / "index.html"
LLMS = ROOT / "llms.txt"
SITEMAP = ROOT / "sitemap.xml"
LOADER = ROOT / "reader" / "js" / "app-loader.js"
SOURCE_LEDGER_FIELDS = (
    "id",
    "year",
    "author_or_institution",
    "title",
    "source_type",
    "book_use",
    "url",
)
SOURCE_RECORD_FIELDS = SOURCE_LEDGER_FIELDS[1:]


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


def public_readme_slugs(text: str) -> set[str]:
    return set(
        re.findall(
            r"https://svyable\.github\.io/desk/books/([^/]+)/README\.md",
            text,
        )
    )


def dashboard_rows(text: str) -> list[tuple[str, str]]:
    """Return (Desk slug, Reader slug) pairs regardless of dashboard column count."""
    rows: list[tuple[str, str]] = []
    for line in section(text, "The books").splitlines():
        book = re.search(r"\]\(books/([^/]+)/\)", line)
        reader = re.search(
            r"\]\(https://svyable\.github\.io/desk/reader/#/b/([^/]+)/\)",
            line,
        )
        if book and reader:
            rows.append((book.group(1), reader.group(1)))
    return rows


def register_source(
    source_id: str,
    url: str,
    location: str,
    seen_ids: dict[str, str],
    seen_urls: dict[str, str],
) -> None:
    if source_id in seen_ids:
        fail(f"{location} duplicates source id {source_id!r} from {seen_ids[source_id]}")
    else:
        seen_ids[source_id] = location

    if url in seen_urls:
        fail(f"{location} duplicates source URL {url!r} from {seen_urls[url]}")
    else:
        seen_urls[url] = location


def check_source_ledger(
    path: Path,
    seen_ids: dict[str, str],
    seen_urls: dict[str, str],
) -> int:
    relative = path.relative_to(ROOT)
    try:
        with path.open(encoding="utf-8", newline="") as handle:
            reader = csv.DictReader(handle)
            if tuple(reader.fieldnames or ()) != SOURCE_LEDGER_FIELDS:
                fail(
                    f"{relative} has unexpected columns; expected "
                    f"{', '.join(SOURCE_LEDGER_FIELDS)}"
                )
                return 0

            row_count = 0
            for line_number, row in enumerate(reader, start=2):
                row_count += 1
                location = f"{relative}:{line_number}"
                if None in row:
                    fail(f"{location} has too many CSV fields")
                    continue

                missing = [field for field in SOURCE_LEDGER_FIELDS if not (row[field] or "").strip()]
                if missing:
                    fail(f"{location} has empty fields: {', '.join(missing)}")
                    continue

                register_source(
                    (row["id"] or "").strip(),
                    (row["url"] or "").strip(),
                    location,
                    seen_ids,
                    seen_urls,
                )
    except csv.Error as exc:
        fail(f"{relative} is not valid CSV: {exc}")
        return 0

    return row_count


def check_source_fragment(
    path: Path,
    seen_ids: dict[str, str],
    seen_urls: dict[str, str],
) -> int:
    relative = path.relative_to(ROOT)
    try:
        record = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        fail(f"{relative} is not valid JSON: {exc}")
        return 0

    if not isinstance(record, dict):
        fail(f"{relative} must contain one JSON object")
        return 0

    expected = set(SOURCE_RECORD_FIELDS)
    actual = set(record)
    if actual != expected:
        missing = sorted(expected - actual)
        extra = sorted(actual - expected)
        if missing:
            fail(f"{relative} is missing fields: {', '.join(missing)}")
        if extra:
            fail(f"{relative} has unexpected fields: {', '.join(extra)}")
        return 0

    empty = [field for field in SOURCE_RECORD_FIELDS if not str(record[field]).strip()]
    if empty:
        fail(f"{relative} has empty fields: {', '.join(empty)}")
        return 0

    source_id = path.stem
    if not re.fullmatch(r"[a-z0-9][a-z0-9._-]*", source_id):
        fail(f"{relative} filename must be a lowercase stable source id")
        return 0

    register_source(source_id, str(record["url"]).strip(), str(relative), seen_ids, seen_urls)
    return 1


def check_book_sources(book_dir: Path) -> tuple[int, int]:
    seen_ids: dict[str, str] = {}
    seen_urls: dict[str, str] = {}
    ledger_count = 0
    source_count = 0

    ledger = book_dir / "research" / "source-ledger.csv"
    if ledger.is_file():
        ledger_count = 1
        source_count += check_source_ledger(ledger, seen_ids, seen_urls)

    fragments = sorted((book_dir / "research" / "sources").glob("*.json"))
    source_count += sum(
        check_source_fragment(path, seen_ids, seen_urls)
        for path in fragments
    )
    return ledger_count, source_count


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
rows = dashboard_rows(readme_text)
readme_slugs = {book_slug for book_slug, _reader_slug in rows}
compare("README book catalog", book_dirs, readme_slugs)

for book_slug, reader_slug in rows:
    if book_slug != reader_slug:
        fail(f"README route mismatch: books/{book_slug}/ points at Reader slug {reader_slug}")

if len(rows) != len(readme_slugs):
    fail("README book catalog contains duplicate book rows")

# The catalog generator owns stage/progress freshness. Running it in JSON mode keeps
# this integrity command as the single CI entry point while avoiding duplicated
# metadata parsing rules here.
catalog_check = subprocess.run(
    [sys.executable, str(ROOT / "scripts" / "catalog.py"), "--root", str(ROOT), "--json"],
    check=False,
    capture_output=True,
    text=True,
)
if catalog_check.returncode:
    try:
        catalog_report = json.loads(catalog_check.stdout)
    except json.JSONDecodeError:
        fail(f"catalog.py audit failed: {catalog_check.stderr.strip() or catalog_check.stdout.strip()}")
    else:
        errors = [finding for finding in catalog_report.get("findings", []) if finding.get("level") == "error"]
        if not errors:
            fail("catalog.py audit returned a failure without structured error findings")
        for finding in errors:
            fail(f"catalog.py {finding.get('book', 'Desk')}: {finding.get('message', 'unknown error')}")

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

llms_text = LLMS.read_text(encoding="utf-8")
llms_books = section(llms_text, "Books")
compare("llms.txt book catalog", book_dirs, public_readme_slugs(llms_books))

sitemap_text = SITEMAP.read_text(encoding="utf-8")
compare("sitemap book catalog", book_dirs, public_readme_slugs(sitemap_text))

loader_text = LOADER.read_text(encoding="utf-8")
for required in (
    "meta\\.published",
    "window.__IMPRINT?.role === 'desk'",
    "Expected one shared Reader catalog gate",
):
    if required not in loader_text:
        fail(f"Reader loader is missing compatibility guard {required!r}")

ledger_count = 0
source_count = 0
for slug in sorted(book_dirs):
    book_ledger_count, book_source_count = check_book_sources(BOOKS / slug)
    ledger_count += book_ledger_count
    source_count += book_source_count

if FAILED:
    print("\nDesk integrity check failed.")
    sys.exit(1)

print(
    f"Desk integrity check passed: {len(book_dirs)} books are cataloged consistently; "
    f"{ledger_count} legacy source ledgers plus source fragments contain "
    f"{source_count} unique records."
)
