#!/usr/bin/env python3
"""Normalize Desk book display titles and front-matter title pages.

This is intentionally conservative: it standardizes presentation without
rewriting manuscript prose, inventing subtitles/years, renaming slugs, or
changing rights files. Use --write to apply; without it the command reports the
proposed changes. Use --check to fail when a book is not canonical.
"""
from __future__ import annotations

import argparse
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BOOKS = ROOT / "books"
CANONICAL_AUTHOR = "Sven Hardy Benson"

SMALL_WORDS = {
    "a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into",
    "nor", "of", "on", "or", "over", "per", "the", "to", "up", "via", "with",
}
ACRONYMS = {
    "AI", "AGI", "API", "APIS", "DNA", "ETF", "ETFS", "GDP", "GPU", "GPUS",
    "LLM", "LLMS", "RNA", "TCO", "UBI", "US", "U.S.", "USA",
}
SECTION_HEADINGS = {
    "about the author", "acknowledgments", "acknowledgements", "author note",
    "author's note", "contents", "dedication", "foreword", "introduction",
    "note to the reader", "preface", "prologue", "research", "sources",
}


def plain_inline(value: str) -> str:
    value = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", value.strip())
    value = re.sub(r"^\*\*(.+)\*\*$", r"\1", value)
    value = re.sub(r"^__(.+)__$", r"\1", value)
    value = re.sub(r"^\*(.+)\*$", r"\1", value)
    value = re.sub(r"^_(.+)_$", r"\1", value)
    return value.strip()


def info_cell(markdown: str, label: str) -> str:
    match = re.search(
        rf"\|\s*\*\*{re.escape(label)}\*\*\s*\|\s*([^|\n]+)\|",
        markdown,
        re.I,
    )
    return match.group(1).strip() if match else ""


def replace_info_cell(markdown: str, label: str, value: str) -> str:
    pattern = re.compile(
        rf"(\|\s*\*\*{re.escape(label)}\*\*\s*\|\s*)([^|\n]+)(\|)",
        re.I,
    )
    match = pattern.search(markdown)
    if not match:
        return markdown
    return markdown[: match.start()] + match.group(1) + value + " " + match.group(3) + markdown[match.end() :]


def canonical_author(raw: str) -> str:
    plain = plain_inline(raw)
    if plain in {"Sven Benson", "Sven Hardy Benson"}:
        return CANONICAL_AUTHOR
    return plain


def all_caps_title(title: str) -> bool:
    letters = [char for char in title if char.isalpha()]
    return bool(letters) and all(not char.islower() for char in letters)


def title_word(word: str, *, first: bool, after_break: bool, all_caps: bool) -> str:
    if not word:
        return word
    prefix = re.match(r"^[\"'“‘(\[]*", word).group(0)
    suffix = re.search(r"[\"'”’),.?!;:\]]*$", word).group(0)
    core = word[len(prefix): len(word) - len(suffix) if suffix else None]
    if not core:
        return word

    upper_key = core.upper()
    if upper_key in ACRONYMS:
        rendered = upper_key
    elif all_caps:
        lower = core.lower()
        rendered = lower if lower in SMALL_WORDS and not first and not after_break else lower[:1].upper() + lower[1:]
    elif core in {small.capitalize() for small in SMALL_WORDS} and not first and not after_break:
        rendered = core.lower()
    else:
        rendered = core
    return prefix + rendered + suffix


def normalize_title(title: str) -> str:
    title = re.sub(r"\s+", " ", title.strip())
    words = title.split(" ")
    caps = all_caps_title(title)
    rendered: list[str] = []
    after_break = False
    for index, word in enumerate(words):
        rendered_word = title_word(word, first=index == 0, after_break=after_break, all_caps=caps)
        rendered.append(rendered_word)
        after_break = bool(re.search(r"[:—–]$", word.rstrip('"”’')))
    # Small words at the end of a title are conventionally capitalized.
    if rendered:
        last_plain = re.sub(r"^[\"'“‘(\[]+|[\"'”’),.?!;:\]]+$", "", rendered[-1])
        if last_plain in SMALL_WORDS:
            rendered[-1] = rendered[-1].replace(last_plain, last_plain.capitalize(), 1)
    return " ".join(rendered)


def readme_title(markdown: str) -> str:
    match = re.search(r"^#\s+(.+?)\s*$", markdown, re.M)
    return match.group(1).strip() if match else ""


def replace_h1(markdown: str, title: str) -> str:
    return re.sub(r"^#\s+.+?$", f"# {title}", markdown, count=1, flags=re.M)


def is_divider(line: str) -> bool:
    return line.strip() in {"---", "___", "***"}


def legacy_subtitle_heading(line: str) -> str | None:
    match = re.fullmatch(r"##\s+(.+?)\s*", line.strip())
    if not match:
        return None
    value = match.group(1).strip()
    return None if value.lower() in SECTION_HEADINGS else value


def italic_subtitle(line: str) -> str | None:
    stripped = line.strip()
    match = re.fullmatch(r"\*([^*].*?)\*", stripped) or re.fullmatch(r"_([^_].*?)_", stripped)
    return match.group(1).strip() if match else None


def looks_like_author(line: str, author: str) -> bool:
    plain = plain_inline(line)
    if plain.lower().startswith("by "):
        plain = plain[3:].strip()
    return bool(author) and plain.casefold() == author.casefold()


def normalize_front_matter(markdown: str, title: str, author: str) -> tuple[str, dict[str, str]]:
    lines = markdown.splitlines()
    h1 = next((i for i, line in enumerate(lines) if re.match(r"^#\s+", line)), None)
    if h1 is None:
        return markdown, {"status": "missing-h1", "subtitle": "", "copyright": ""}

    # Work only on the opening title-page region. Everything after the first
    # divider or substantive H2 is preserved byte-for-byte apart from leading
    # blank lines introduced by the old title page.
    prefix_indices: list[int] = []
    body_start = len(lines)
    seen_subtitle = False
    subtitle = ""
    copyright_line = ""

    i = h1 + 1
    while i < len(lines):
        stripped = lines[i].strip()
        if is_divider(stripped):
            body_start = i + 1
            break
        if stripped.startswith("## "):
            legacy = legacy_subtitle_heading(stripped)
            if legacy and not seen_subtitle:
                subtitle = legacy
                seen_subtitle = True
                prefix_indices.append(i)
                i += 1
                continue
            body_start = i
            break
        if not stripped:
            prefix_indices.append(i)
            i += 1
            continue
        italic = italic_subtitle(stripped)
        if italic and not seen_subtitle:
            subtitle = italic
            seen_subtitle = True
            prefix_indices.append(i)
            i += 1
            continue
        if stripped.startswith("©") and not copyright_line:
            copyright_line = stripped
            prefix_indices.append(i)
            i += 1
            continue
        if looks_like_author(stripped, author):
            prefix_indices.append(i)
            i += 1
            continue
        # A single plain line before a known byline/copyright is a legacy subtitle.
        if not seen_subtitle:
            lookahead = [candidate.strip() for candidate in lines[i + 1 : i + 6] if candidate.strip()]
            if any(looks_like_author(candidate, author) or candidate.startswith("©") for candidate in lookahead):
                subtitle = plain_inline(stripped).rstrip('.')
                seen_subtitle = True
                prefix_indices.append(i)
                i += 1
                continue
        body_start = i
        break

    while body_start < len(lines) and not lines[body_start].strip():
        body_start += 1
    body = lines[body_start:]

    title_page = [f"# {title}", ""]
    if subtitle:
        title_page.extend([f"*{subtitle}*", ""])
    if author:
        title_page.extend([f"**{author}**", ""])
    if copyright_line:
        title_page.extend([copyright_line, ""])
    if body:
        title_page.extend(["---", ""])
        title_page.extend(body)
    result = "\n".join(title_page).rstrip() + "\n"
    return result, {
        "status": "ok",
        "subtitle": subtitle,
        "copyright": copyright_line,
    }


def real_books() -> list[Path]:
    if not BOOKS.is_dir():
        return []
    return sorted(
        path for path in BOOKS.iterdir()
        if path.is_dir() and not path.name.startswith(("_", "style-", "."))
    )


def proposed(path: Path) -> tuple[str | None, str | None, dict[str, str]]:
    readme = path / "README.md"
    front = path / "manuscript" / "front-matter.md"
    if not readme.is_file():
        return None, None, {"status": "missing-readme", "subtitle": "", "copyright": ""}

    readme_text = readme.read_text(encoding="utf-8")
    current_title = readme_title(readme_text)
    title = normalize_title(current_title)
    author_raw = info_cell(readme_text, "Authors") or info_cell(readme_text, "Author")
    author = canonical_author(author_raw)
    next_readme = replace_h1(readme_text, title)
    if author_raw and author and plain_inline(author_raw) != author:
        label = "Authors" if info_cell(readme_text, "Authors") else "Author"
        next_readme = replace_info_cell(next_readme, label, author)

    if not front.is_file():
        return next_readme, None, {
            "status": "missing-front-matter", "subtitle": "", "copyright": "", "title": title,
            "old_title": current_title, "author": author,
        }
    front_text = front.read_text(encoding="utf-8")
    next_front, meta = normalize_front_matter(front_text, title, author)
    meta.update({"title": title, "old_title": current_title, "author": author})
    return next_readme, next_front, meta


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true", help="Apply canonical title/front-matter formatting.")
    parser.add_argument("--check", action="store_true", help="Exit non-zero if any canonicalization is pending.")
    args = parser.parse_args()

    books = real_books()
    changed_books = 0
    title_changes: list[tuple[str, str, str]] = []
    missing_front: list[str] = []
    missing_author: list[str] = []
    pending = False

    for path in books:
        next_readme, next_front, meta = proposed(path)
        if next_readme is None:
            print(f"WARN {path.name}: missing README.md")
            pending = True
            continue
        readme_path = path / "README.md"
        front_path = path / "manuscript" / "front-matter.md"
        readme_changed = readme_path.read_text(encoding="utf-8") != next_readme
        front_changed = next_front is not None and front_path.read_text(encoding="utf-8") != next_front
        if meta.get("old_title") != meta.get("title"):
            title_changes.append((path.name, meta.get("old_title", ""), meta.get("title", "")))
        if meta.get("status") == "missing-front-matter":
            missing_front.append(path.name)
        if not meta.get("author"):
            missing_author.append(path.name)
        if readme_changed or front_changed:
            pending = True
            changed_books += 1
            if args.write:
                if readme_changed:
                    readme_path.write_text(next_readme, encoding="utf-8")
                if front_changed and next_front is not None:
                    front_path.write_text(next_front, encoding="utf-8")

    print(f"books scanned: {len(books)}")
    print(f"books needing alignment: {changed_books}")
    print(f"display-title changes: {len(title_changes)}")
    for slug, old, new in title_changes:
        print(f"TITLE {slug}: {old!r} -> {new!r}")
    if missing_front:
        print("missing front matter: " + ", ".join(missing_front))
    if missing_author:
        print("missing author metadata: " + ", ".join(missing_author))

    if args.check and pending:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
