#!/usr/bin/env python3
"""Normalize Desk book display titles and front-matter title pages.

The migration is intentionally conservative: it standardizes title-page
presentation without rewriting manuscript prose, inventing publication years,
renaming slugs, or changing rights files. Existing copyright lines are carried
forward verbatim. Use --write to apply; use --check to fail if canonicalization
is still pending.
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
    "author's note", "author’s note", "contents", "dedication", "foreword",
    "introduction", "note to the reader", "preface", "prologue", "research",
    "sources",
}


def plain_inline(value: str) -> str:
    value = value.strip()
    value = re.sub(r"^#{1,6}\s+", "", value)
    value = re.sub(r"^>\s*", "", value)
    value = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", value)
    value = re.sub(r"^\*\*(.+)\*\*$", r"\1", value)
    value = re.sub(r"^__(.+)__$", r"\1", value)
    value = re.sub(r"^\*(.+)\*$", r"\1", value)
    value = re.sub(r"^_(.+)_$", r"\1", value)
    return value.strip()


def trim_terminal_period(value: str) -> str:
    value = value.strip()
    if value.endswith(".") and not value.endswith("..."):
        return value[:-1].rstrip()
    return value


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
    if plain in {"Sven Benson", "Sven Hard Benson", "Sven Hardy Benson"}:
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
    if core in ACRONYMS or (all_caps and upper_key in ACRONYMS):
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
        rendered.append(title_word(word, first=index == 0, after_break=after_break, all_caps=caps))
        after_break = bool(re.search(r"[:—–]$", word.rstrip('"”’')))
    if rendered:
        last_plain = re.sub(r"^[\"'“‘(\[]+|[\"'”’),.?!;:\]]+$", "", rendered[-1])
        if last_plain in SMALL_WORDS:
            rendered[-1] = rendered[-1].replace(last_plain, last_plain.capitalize(), 1)
    return " ".join(rendered)


def title_for_separate_subtitle(title: str, subtitle: str) -> str:
    title = normalize_title(title)
    if subtitle and title.endswith(":"):
        return title[:-1].rstrip()
    return title


def readme_title(markdown: str) -> str:
    match = re.search(r"^#\s+(.+?)\s*$", markdown, re.M)
    return match.group(1).strip() if match else ""


def readme_subtitle(markdown: str) -> str:
    lines = markdown.splitlines()
    h1 = next((i for i, line in enumerate(lines) if re.match(r"^#\s+", line)), None)
    if h1 is None:
        return ""
    for line in lines[h1 + 1 :]:
        stripped = line.strip()
        if not stripped:
            continue
        if stripped.startswith("|"):
            return ""
        if stripped.startswith("## "):
            value = stripped[3:].strip()
            return "" if value.lower() in SECTION_HEADINGS else trim_terminal_period(plain_inline(value))
        if stripped.startswith(("**", "__", "*", "_")):
            value = plain_inline(stripped)
            if value.casefold() in {"sven benson", "sven hard benson", "sven hardy benson"}:
                return ""
            return trim_terminal_period(value)
        return ""
    return ""


def normalize_readme_opening(markdown: str, title: str, subtitle: str) -> str:
    lines = markdown.splitlines()
    h1 = next((i for i, line in enumerate(lines) if re.match(r"^#\s+", line)), None)
    if h1 is None:
        return markdown
    lines[h1] = f"# {title_for_separate_subtitle(title, subtitle)}"
    if subtitle:
        for index in range(h1 + 1, len(lines)):
            stripped = lines[index].strip()
            if not stripped:
                continue
            if stripped.startswith("|"):
                break
            if stripped.startswith("## "):
                value = stripped[3:].strip()
                if value.lower() in SECTION_HEADINGS:
                    break
                lines[index] = f"*{subtitle}*"
                break
            if stripped.startswith(("**", "__", "*", "_")):
                value = plain_inline(stripped)
                if value.casefold() in {"sven benson", "sven hard benson", "sven hardy benson"}:
                    break
                lines[index] = f"*{subtitle}*"
                break
            break
    return "\n".join(lines).rstrip() + "\n"


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
    legacy_names = {author.casefold()} if author else set()
    if author == CANONICAL_AUTHOR:
        legacy_names.update({"sven benson", "sven hard benson", "sven hardy benson"})
    return bool(plain) and plain.casefold() in legacy_names


def normalize_front_matter(markdown: str, title: str, author: str, fallback_subtitle: str = "") -> tuple[str, dict[str, str]]:
    lines = markdown.splitlines()
    h1 = next((i for i, line in enumerate(lines) if re.match(r"^#\s+", line)), None)
    if h1 is None:
        return markdown, {"status": "missing-h1", "subtitle": "", "copyright": ""}

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
                i += 1
                continue
            body_start = i
            break
        if not stripped:
            i += 1
            continue
        italic = italic_subtitle(stripped)
        if italic and not seen_subtitle:
            subtitle = italic
            seen_subtitle = True
            i += 1
            continue
        if stripped.startswith("©") and not copyright_line:
            copyright_line = stripped
            i += 1
            continue
        if looks_like_author(stripped, author):
            i += 1
            continue
        if not seen_subtitle:
            lookahead = [candidate.strip() for candidate in lines[i + 1 : i + 6] if candidate.strip()]
            if any(looks_like_author(candidate, author) or candidate.startswith("©") for candidate in lookahead):
                subtitle = plain_inline(stripped)
                seen_subtitle = True
                i += 1
                continue
        body_start = i
        break

    while body_start < len(lines) and not lines[body_start].strip():
        body_start += 1
    body = lines[body_start:]
    subtitle = trim_terminal_period(subtitle or fallback_subtitle)
    title = title_for_separate_subtitle(title, subtitle)

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
    return result, {"status": "ok", "subtitle": subtitle, "copyright": copyright_line, "title": title}


def front_matter_target(path: Path, readme: str) -> tuple[Path, bool, bool]:
    """Return target path, whether it is embedded, and whether README names it."""
    named = re.search(r"\[Front Matter\]\((manuscript/[^)\s]+\.md)\)", readme, re.I)
    if named:
        return path / named.group(1), False, True

    standard = path / "manuscript" / "front-matter.md"
    if standard.is_file():
        return standard, False, False

    manuscript_links = re.findall(r"\]\((manuscript/[^)\s]+\.md)\)", readme, re.I)
    unique_links = list(dict.fromkeys(manuscript_links))
    if len(unique_links) == 1:
        only = path / unique_links[0]
        if only.is_file():
            return only, True, False

    return standard, False, False


def ensure_front_link(readme: str, relative_path: str) -> str:
    if re.search(r"\[Front Matter\]\(manuscript/[^)]+\)", readme, re.I):
        return re.sub(
            r"^- \[ \] \[Front Matter\](\(manuscript/[^)]+\))",
            r"- [x] [Front Matter]\1",
            readme,
            count=1,
            flags=re.I | re.M,
        )
    heading = re.search(r"^##\s+Contents\s*$", readme, re.I | re.M)
    if not heading:
        return readme
    suffix = readme[heading.end():].lstrip("\n")
    return readme[: heading.end()] + f"\n\n- [x] [Front Matter]({relative_path})\n" + suffix


def real_books() -> list[Path]:
    if not BOOKS.is_dir():
        return []
    return sorted(
        path for path in BOOKS.iterdir()
        if path.is_dir() and not path.name.startswith(("_", "style-", "."))
    )


def proposed(path: Path) -> tuple[str | None, Path | None, str | None, dict[str, str]]:
    readme_path = path / "README.md"
    if not readme_path.is_file():
        return None, None, None, {"status": "missing-readme", "subtitle": "", "copyright": ""}

    readme_text = readme_path.read_text(encoding="utf-8")
    current_title = readme_title(readme_text)
    subtitle = readme_subtitle(readme_text)
    title = title_for_separate_subtitle(current_title, subtitle)
    author_raw = info_cell(readme_text, "Authors") or info_cell(readme_text, "Author")
    author = canonical_author(author_raw)
    next_readme = normalize_readme_opening(readme_text, title, subtitle)
    if author_raw and author and plain_inline(author_raw) != author:
        label = "Authors" if info_cell(readme_text, "Authors") else "Author"
        next_readme = replace_info_cell(next_readme, label, author)

    front_path, embedded, named = front_matter_target(path, next_readme)
    relative_front = front_path.relative_to(path).as_posix()
    created = not front_path.is_file()
    if created:
        seed = f"# {title}\n"
        next_front, meta = normalize_front_matter(seed, title, author, subtitle)
        if not embedded:
            next_readme = ensure_front_link(next_readme, relative_front)
    else:
        front_text = front_path.read_text(encoding="utf-8")
        next_front, meta = normalize_front_matter(front_text, title, author, subtitle)
        if named:
            next_readme = ensure_front_link(next_readme, relative_front)

    canonical_title = meta.get("title", title)
    if canonical_title != title:
        title = canonical_title
        next_readme = normalize_readme_opening(next_readme, title, subtitle)

    meta.update({
        "title": title,
        "old_title": current_title,
        "author": author,
        "front_path": relative_front,
        "embedded": "yes" if embedded else "no",
        "created": "yes" if created else "no",
    })
    return next_readme, front_path, next_front, meta


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true", help="Apply canonical title/front-matter formatting.")
    parser.add_argument("--check", action="store_true", help="Exit non-zero if canonicalization is pending.")
    args = parser.parse_args()

    books = real_books()
    changed_books = 0
    title_changes: list[tuple[str, str, str]] = []
    created_front: list[tuple[str, str]] = []
    embedded_front: list[tuple[str, str]] = []
    missing_author: list[str] = []
    pending = False

    for path in books:
        next_readme, front_path, next_front, meta = proposed(path)
        if next_readme is None or front_path is None or next_front is None:
            print(f"WARN {path.name}: missing README.md")
            pending = True
            continue
        readme_path = path / "README.md"
        readme_changed = readme_path.read_text(encoding="utf-8") != next_readme
        front_changed = not front_path.is_file() or front_path.read_text(encoding="utf-8") != next_front

        if meta.get("old_title") != meta.get("title"):
            title_changes.append((path.name, meta.get("old_title", ""), meta.get("title", "")))
        if meta.get("created") == "yes":
            created_front.append((path.name, meta.get("front_path", "")))
        if meta.get("embedded") == "yes":
            embedded_front.append((path.name, meta.get("front_path", "")))
        if not meta.get("author"):
            missing_author.append(path.name)

        if readme_changed or front_changed:
            pending = True
            changed_books += 1
            if args.write:
                if readme_changed:
                    readme_path.write_text(next_readme, encoding="utf-8")
                if front_changed:
                    front_path.parent.mkdir(parents=True, exist_ok=True)
                    front_path.write_text(next_front, encoding="utf-8")

    print(f"books scanned: {len(books)}")
    print(f"books needing alignment: {changed_books}")
    print(f"display-title changes: {len(title_changes)}")
    for slug, old, new in title_changes:
        print(f"TITLE {slug}: {old!r} -> {new!r}")
    if created_front:
        print("front matter to create: " + ", ".join(f"{slug}:{target}" for slug, target in created_front))
    if embedded_front:
        print("embedded title pages: " + ", ".join(f"{slug}:{target}" for slug, target in embedded_front))
    if missing_author:
        print("missing author metadata: " + ", ".join(missing_author))

    if args.check and pending:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
