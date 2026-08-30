#!/usr/bin/env python3
"""Generate the Svyable Desk book dashboard and audit Reader-facing manifests.

Local-first by design: this script reads only repository files and needs no
network access or third-party packages.
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
READER_BASE = "https://svyable.github.io/desk/reader/#/b/"
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
    low = value.lower()
    if "complete" in low:
        return f"✅ {value}"
    if "revision" in low or "editing" in low:
        return f"🔁 {value}"
    return f"✍️ {value}"


def chapters_for(markdown: str) -> str:
    declared = table_cell(markdown, "Chapters")
    if declared:
        return declared.replace(" drafted", "")
    items = CHECKLIST_LINK_RE.findall(markdown)
    if items:
        drafted = sum(mark.strip().lower() == "x" for mark, _title, _path in items)
        return f"{drafted} / {len(items)} sections"
    return "—"


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


def replace_catalog(readme: str, table: str) -> str:
    start = readme.find(CATALOG_START)
    end = readme.find(CATALOG_END)
    if start < 0 or end < 0 or end < start:
        raise ValueError(
            f"README.md must contain {CATALOG_START!r} and {CATALOG_END!r} markers."
        )
    end += len(CATALOG_END)
    return readme[:start] + table + readme[end:]


def catalog_slugs(readme: str) -> list[str]:
    match = re.search(r"^##\s+The books\s*$", readme, re.IGNORECASE | re.MULTILINE)
    section = readme[match.end():] if match else readme
    next_heading = re.search(r"^##\s+", section, re.MULTILINE)
    section = section[: next_heading.start()] if next_heading else section
    return re.findall(r"\]\(books/([a-z0-9][a-z0-9-]*)/\)", section)


def audit(root: Path, rows: list[BookRow]) -> list[Finding]:
    findings: list[Finding] = []
    readme_path = root / "README.md"
    root_readme = read(readme_path) if readme_path.is_file() else ""
    actual = [row.slug for row in rows]
    listed = catalog_slugs(root_readme)

    missing = sorted(set(actual) - set(listed))
    extra = sorted(set(listed) - set(actual))
    for slug in missing:
        findings.append(Finding("error", "catalog_missing", slug, "Book directory is missing from ## The books."))
    for slug in extra:
        findings.append(Finding("error", "catalog_extra", slug, "Catalog points to a book directory that does not exist."))
    if len(listed) != len(set(listed)):
        findings.append(Finding("error", "catalog_duplicate", "README", "The books catalog contains duplicate book links."))

    for row in rows:
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
        findings.append(Finding("ok", "reader_ready", "Desk", f"{len(rows)} catalog books have Reader-visible manifests."))
    return findings


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", default=".", help="Desk repository root")
    parser.add_argument("--write", action="store_true", help="Rewrite the marked README catalog with live local stats")
    parser.add_argument("--json", action="store_true", dest="as_json", help="Emit rows and audit findings as JSON")
    args = parser.parse_args(argv)

    root = Path(args.root).resolve()
    rows = load_rows(root)
    findings = audit(root, rows)

    if args.write:
        readme_path = root / "README.md"
        updated = replace_catalog(read(readme_path), render_table(rows))
        readme_path.write_text(updated, encoding="utf-8")
        rows = load_rows(root)
        findings = audit(root, rows)

    errors = [finding for finding in findings if finding.level == "error"]
    if args.as_json:
        print(json.dumps({
            "books": [asdict(row) for row in rows],
            "findings": [asdict(finding) for finding in findings],
            "healthy": not errors,
        }, indent=2, ensure_ascii=False))
    else:
        print(render_table(rows))
        print()
        for finding in findings:
            marker = "✓" if finding.level == "ok" else "✗"
            print(f"{marker} {finding.book}: {finding.message}")
        print(f"\nReader audit: {len(errors)} blocking error{'s' if len(errors) != 1 else ''} across {len(rows)} books.")

    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
