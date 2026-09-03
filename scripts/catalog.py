#!/usr/bin/env python3
"""Generate the Svyable Desk book dashboard and audit Reader-facing manifests.

Local-first by design: this script reads repository files and, when available,
a sibling Shelf checkout. It needs no network access or third-party packages.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import asdict, dataclass
from pathlib import Path

CATALOG_START = "<!-- DESK_CATALOG:START -->"
CATALOG_END = "<!-- DESK_CATALOG:END -->"
DESK_SUMMARY_START = "<!-- DESK_SUMMARY:START -->"
DESK_SUMMARY_END = "<!-- DESK_SUMMARY:END -->"
SHELF_SUMMARY_START = "<!-- SHELF_SUMMARY:START -->"
SHELF_SUMMARY_END = "<!-- SHELF_SUMMARY:END -->"
READER_BASE = "https://svyable.github.io/desk/reader/#/b/"
SHELF_READER_BASE = "https://svyable.github.io/shelf/reader/#/b/"
WORD_RE = re.compile(r"\b[\w’'-]+\b", re.UNICODE)
TITLE_RE = re.compile(r"^#\s+(.+?)\s*$", re.MULTILINE)
CHECKLIST_LINK_RE = re.compile(
    r"^- \[([ xX])\] \[([^\]]+)\]\((manuscript/[^)\s]+)\)", re.MULTILINE
)
STALE_READER_RE = re.compile(
    r"https://svyable\.github\.io/(?:self|binder)/reader/#/b/([a-z0-9-]+)/?",
    re.IGNORECASE,
)


@dataclass(frozen=True)
class BookRow:
    slug: str
    title: str
    status: str
    chapters: str
    words: int
    summary: str


@dataclass(frozen=True)
class ShelfRow:
    slug: str
    title: str
    state: str


@dataclass(frozen=True)
class Finding:
    level: str
    code: str
    book: str
    message: str


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def table_cell(markdown: str, *labels: str) -> str:
    for label in labels:
        pattern = re.compile(
            rf"\|\s*\*\*{re.escape(label)}\*\*\s*\|\s*([^|\n]+)\|",
            re.IGNORECASE,
        )
        match = pattern.search(markdown)
        if match:
            return match.group(1).strip()
    return ""


def first_section_paragraph(markdown: str, heading: str) -> str:
    pattern = re.compile(rf"^##\s+{re.escape(heading)}\s*$", re.IGNORECASE | re.MULTILINE)
    match = pattern.search(markdown)
    if not match:
        return ""
    rest = markdown[match.end():]
    next_heading = re.search(r"^##\s+", rest, re.MULTILINE)
    section = rest[: next_heading.start()] if next_heading else rest
    return first_prose_paragraph(section)


def first_prose_paragraph(markdown: str) -> str:
    for raw in re.split(r"\n\s*\n", markdown):
        paragraph = " ".join(line.strip() for line in raw.splitlines()).strip()
        if not paragraph:
            continue
        if paragraph.startswith(("#", "|", "- [", "- ", "```", ">")):
            continue
        if paragraph.startswith("**") and paragraph.endswith("**") and len(paragraph) < 220:
            continue
        if len(paragraph) < 90:
            continue
        return paragraph
    return ""


def clean_summary(text: str, limit: int = 190) -> str:
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    text = re.sub(r"[*_`]+", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    if not text:
        return "Working manuscript in Svyable Desk."
    sentence = re.split(r"(?<=[.!?])\s+", text, maxsplit=1)[0]
    candidate = sentence if 70 <= len(sentence) <= limit else text
    if len(candidate) <= limit:
        return candidate
    clipped = candidate[: limit - 1].rsplit(" ", 1)[0].rstrip(" ,;:-")
    return f"{clipped}…"


def summary_for(markdown: str) -> str:
    for heading in ("Premise", "What this is"):
        value = first_section_paragraph(markdown, heading)
        if value:
            return clean_summary(value)

    paragraphs = [
        " ".join(p.split())
        for p in re.split(r"\n\s*\n", markdown)
        if len(" ".join(p.split())) >= 90
    ]
    preferred = (
        "working thesis",
        "central thesis",
        "central argument",
        "central wager",
        "this book",
        "the book",
    )
    for needle in preferred:
        for paragraph in paragraphs:
            if needle in paragraph.lower() and not paragraph.lstrip().startswith(("|", "-")):
                return clean_summary(paragraph)
    return clean_summary(first_prose_paragraph(markdown))


def word_count(manuscript_dir: Path) -> int:
    total = 0
    if not manuscript_dir.is_dir():
        return total
    for path in sorted(manuscript_dir.rglob("*.md")):
        total += len(WORD_RE.findall(read(path)))
    return total


def title_for(markdown: str, slug: str) -> str:
    match = TITLE_RE.search(markdown)
    return (match.group(1).strip().rstrip(":") if match else slug.replace("-", " ").title())


def status_for(markdown: str) -> str:
    value = table_cell(markdown, "Status") or "Drafting"
    value = re.sub(r"^[✅🔁✍️🟡]+\s*", "", value).strip()
    low = value.lower()
    if "complete" in low:
        return f"✅ {value}"
    if "revision" in low or "editing" in low:
        return f"🔁 {value}"
    return f"✍️ {value}"


def status_key(value: str) -> str:
    low = value.lower()
    if "complete" in low:
        return "complete"
    if "revision" in low or "editing" in low:
        return "revision"
    return "drafting"


def chapters_for(markdown: str) -> str:
    declared = table_cell(markdown, "Chapters")
    if declared:
        return declared.replace(" drafted", "")
    items = CHECKLIST_LINK_RE.findall(markdown)
    if items:
        drafted = sum(mark.strip().lower() == "x" for mark, _title, _path in items)
        return f"{drafted} / {len(items)} sections"
    return "—"


def normalize_chapters(value: str) -> str:
    value = value.lower().replace("drafted", "").replace(" of ", " / ")
    value = re.sub(r"\s*/\s*", "/", value)
    return re.sub(r"\s+", " ", value).strip()


def real_books(root: Path) -> list[Path]:
    books = root / "books"
    if not books.is_dir():
        return []
    return sorted(
        path for path in books.iterdir()
        if path.is_dir() and not path.name.startswith("_")
    )


def load_rows(root: Path) -> list[BookRow]:
    rows: list[BookRow] = []
    for book in real_books(root):
        readme = book / "README.md"
        markdown = read(readme) if readme.is_file() else ""
        rows.append(
            BookRow(
                slug=book.name,
                title=title_for(markdown, book.name),
                status=status_for(markdown),
                chapters=chapters_for(markdown),
                words=word_count(book / "manuscript"),
                summary=summary_for(markdown),
            )
        )
    return rows


def load_shelf_rows(shelf_root: Path | None) -> list[ShelfRow] | None:
    if shelf_root is None or not (shelf_root / "books").is_dir():
        return None
    rows: list[ShelfRow] = []
    for book in sorted((shelf_root / "books").iterdir()):
        if not book.is_dir() or book.name.startswith(("_", "style-")):
            continue
        readme = book / "README.md"
        markdown = read(readme) if readme.is_file() else ""
        raw_status = table_cell(markdown, "Status") or "Drafting"
        if "publish" in raw_status.lower() or "release" in raw_status.lower():
            state = "✅ Released"
        elif "public proof" in markdown.lower() or "unlisted" in markdown.lower():
            state = "🟡 Public proof"
        else:
            state = "🟡 Public draft"
        rows.append(ShelfRow(book.name, title_for(markdown, book.name), state))
    return rows


def markdown_escape(value: str) -> str:
    return value.replace("|", "\\|").replace("\n", " ").strip()


def render_table(rows: list[BookRow]) -> str:
    lines = [
        CATALOG_START,
        "| Book | Status | Chapters | Words | What it is | Read |",
        "|---|---|---:|---:|---|---|",
    ]
    for row in rows:
        words = f"{row.words:,}"
        lines.append(
            "| "
            f"[**{markdown_escape(row.title)}**](books/{row.slug}/) | "
            f"{markdown_escape(row.status)} | "
            f"{markdown_escape(row.chapters)} | "
            f"{words} | "
            f"{markdown_escape(row.summary)} | "
            f"[Read →]({READER_BASE}{row.slug}/) |"
        )
    lines.append(CATALOG_END)
    return "\n".join(lines)


def render_desk_summary(rows: list[BookRow]) -> str:
    counts = {"complete": 0, "revision": 0, "drafting": 0}
    for row in rows:
        counts[status_key(row.status)] += 1
    return "\n".join([
        DESK_SUMMARY_START,
        f"> **Desk: {len(rows)} book projects · {counts['complete']} complete drafts · "
        f"{counts['revision']} in revision · {counts['drafting']} drafting**",
        DESK_SUMMARY_END,
    ])


def render_shelf_summary(desk_rows: list[BookRow], shelf_rows: list[ShelfRow]) -> str:
    desk_by_slug = {row.slug: row for row in desk_rows}
    shelf_slugs = {row.slug for row in shelf_rows}
    desk_slugs = set(desk_by_slug)
    overlap = desk_slugs & shelf_slugs
    released = sum("Released" in row.state for row in shelf_rows)
    public_drafts = len(shelf_rows) - released
    release_queue = [
        row for row in desk_rows
        if status_key(row.status) == "complete" and row.slug not in shelf_slugs
    ]

    lines = [
        SHELF_SUMMARY_START,
        f"> **Shelf: {len(shelf_rows)} author projects · {released} released · "
        f"{public_drafts} public drafts/proofs**",
        f"> **Where they live: {len(overlap)} in both Desk + Shelf · "
        f"{len(desk_slugs - shelf_slugs)} Desk-only · {len(shelf_slugs - desk_slugs)} Shelf-only**",
        f"> **Release review queue: {len(release_queue)} complete drafts are Desk-only.** "
        "`Complete draft` means manuscript-complete, not automatically approved for release.",
        "",
        "| Public project | Desk state | Shelf state | Open |",
        "|---|---|---|---|",
    ]
    for shelf in shelf_rows:
        desk = desk_by_slug.get(shelf.slug)
        desk_state = desk.status if desk else "— Not in Desk"
        desk_link = f"[**{markdown_escape(shelf.title)}**](books/{shelf.slug}/)" if desk else f"**{markdown_escape(shelf.title)}**"
        lines.append(
            f"| {desk_link} | {markdown_escape(desk_state)} | {shelf.state} | "
            f"[Shelf →]({SHELF_READER_BASE}{shelf.slug}/) |"
        )
    lines.extend([
        "",
        "**Desk-only complete drafts awaiting an explicit release decision:** "
        + (", ".join(f"[{row.title}](books/{row.slug}/)" for row in release_queue) if release_queue else "none"),
        SHELF_SUMMARY_END,
    ])
    return "\n".join(lines)


def replace_marked(readme: str, start_marker: str, end_marker: str, replacement: str) -> str:
    start = readme.find(start_marker)
    end = readme.find(end_marker)
    if start < 0 or end < 0 or end < start:
        raise ValueError(
            f"README.md must contain {start_marker!r} and {end_marker!r} markers."
        )
    end += len(end_marker)
    return readme[:start] + replacement + readme[end:]


def replace_catalog(readme: str, table: str) -> str:
    return replace_marked(readme, CATALOG_START, CATALOG_END, table)


def catalog_slugs(readme: str) -> list[str]:
    match = re.search(r"^##\s+The books\s*$", readme, re.IGNORECASE | re.MULTILINE)
    section = readme[match.end():] if match else readme
    next_heading = re.search(r"^##\s+", section, re.MULTILINE)
    section = section[: next_heading.start()] if next_heading else section
    return re.findall(r"\]\(books/([a-z0-9][a-z0-9-]*)/\)", section)


def catalog_metadata(readme: str) -> dict[str, tuple[str, str]]:
    start = readme.find(CATALOG_START)
    end = readme.find(CATALOG_END)
    if start < 0 or end < 0 or end < start:
        return {}
    metadata: dict[str, tuple[str, str]] = {}
    for line in readme[start:end].splitlines():
        match = re.search(r"\]\(books/([a-z0-9][a-z0-9-]*)/\)", line)
        if not match:
            continue
        parts = line.strip().split(" | ")
        if len(parts) < 4:
            continue
        metadata[match.group(1)] = (parts[1].strip(), parts[2].strip())
    return metadata


def audit(root: Path, rows: list[BookRow]) -> list[Finding]:
    findings: list[Finding] = []
    readme_path = root / "README.md"
    root_readme = read(readme_path) if readme_path.is_file() else ""
    actual = [row.slug for row in rows]
    listed = catalog_slugs(root_readme)
    metadata = catalog_metadata(root_readme)

    missing = sorted(set(actual) - set(listed))
    extra = sorted(set(listed) - set(actual))
    for slug in missing:
        findings.append(Finding("error", "catalog_missing", slug, "Book directory is missing from ## The books."))
    for slug in extra:
        findings.append(Finding("error", "catalog_extra", slug, "Catalog points to a book directory that does not exist."))
    if len(listed) != len(set(listed)):
        findings.append(Finding("error", "catalog_duplicate", "README", "The books catalog contains duplicate book links."))

    for row in rows:
        current = metadata.get(row.slug)
        if current:
            current_status, current_chapters = current
            if status_key(current_status) != status_key(row.status):
                findings.append(Finding(
                    "error", "catalog_status_stale", row.slug,
                    f"Dashboard stage {current_status!r} disagrees with book README {row.status!r}. Run scripts/catalog.py --write.",
                ))
            if normalize_chapters(current_chapters) != normalize_chapters(row.chapters):
                findings.append(Finding(
                    "error", "catalog_progress_stale", row.slug,
                    f"Dashboard progress {current_chapters!r} disagrees with book README {row.chapters!r}. Run scripts/catalog.py --write.",
                ))

        book = root / "books" / row.slug
        readme = book / "README.md"
        if not readme.is_file():
            findings.append(Finding("error", "missing_readme", row.slug, "README.md is missing."))
            continue
        markdown = read(readme)
        stale = STALE_READER_RE.findall(markdown)
        if stale:
            findings.append(Finding("error", "stale_reader_url", row.slug, "README contains an old /self/ or /binder/ Reader URL."))

        items = CHECKLIST_LINK_RE.findall(markdown)
        if not items:
            findings.append(Finding("error", "reader_empty", row.slug, "Reader sees zero checklist manuscript entries in README.md."))
        for mark, title, relative in items:
            target = book / relative
            if mark.strip().lower() == "x" and not target.is_file():
                findings.append(Finding("error", "drafted_file_missing", row.slug, f"Checked manuscript entry is missing: {relative} ({title})."))

        manuscript = book / "manuscript"
        actual_md = sorted(manuscript.rglob("*.md")) if manuscript.is_dir() else []
        if not actual_md:
            findings.append(Finding("error", "manuscript_empty", row.slug, "manuscript/ contains no Markdown files."))

    if not findings:
        findings.append(Finding("ok", "reader_ready", "Desk", f"{len(rows)} catalog books have Reader-visible manifests and fresh dashboard metadata."))
    return findings


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", default=".", help="Desk repository root")
    parser.add_argument("--shelf-root", default=None, help="Optional Shelf checkout root; defaults to a sibling ../shelf when present")
    parser.add_argument("--write", action="store_true", help="Rewrite marked README dashboard blocks with live local stats")
    parser.add_argument("--json", action="store_true", dest="as_json", help="Emit rows and audit findings as JSON")
    args = parser.parse_args(argv)

    root = Path(args.root).resolve()
    shelf_root = Path(args.shelf_root).resolve() if args.shelf_root else root.parent / "shelf"
    shelf_rows = load_shelf_rows(shelf_root)
    rows = load_rows(root)
    findings = audit(root, rows)

    if args.write:
        readme_path = root / "README.md"
        updated = read(readme_path)
        updated = replace_marked(updated, DESK_SUMMARY_START, DESK_SUMMARY_END, render_desk_summary(rows))
        updated = replace_catalog(updated, render_table(rows))
        if shelf_rows is not None:
            updated = replace_marked(updated, SHELF_SUMMARY_START, SHELF_SUMMARY_END, render_shelf_summary(rows, shelf_rows))
        readme_path.write_text(updated, encoding="utf-8")
        rows = load_rows(root)
        findings = audit(root, rows)

    errors = [finding for finding in findings if finding.level == "error"]
    if args.as_json:
        print(json.dumps({
            "books": [asdict(row) for row in rows],
            "shelf": [asdict(row) for row in shelf_rows] if shelf_rows is not None else None,
            "findings": [asdict(finding) for finding in findings],
            "healthy": not errors,
        }, indent=2, ensure_ascii=False))
    else:
        print(render_desk_summary(rows))
        if shelf_rows is not None:
            print()
            print(render_shelf_summary(rows, shelf_rows))
        print()
        print(render_table(rows))
        print()
        for finding in findings:
            marker = "✓" if finding.level == "ok" else "✗"
            print(f"{marker} {finding.book}: {finding.message}")
        print(f"\nReader audit: {len(errors)} blocking error{'s' if len(errors) != 1 else ''} across {len(rows)} books.")

    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
