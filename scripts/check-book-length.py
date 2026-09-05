#!/usr/bin/env python3
"""Check one Desk book against the automated full-book length standard.

This is intentionally opt-in per book. Desk contains short-form, partial, legacy,
and experimental manuscripts that should not all be forced through the one-shot
full-book standard.

The checker counts only chapter files named like ``ch01-title.md``. Front matter,
back matter, research notes, and other manuscript Markdown are excluded by
construction. Word tokenization matches ``scripts/catalog.py``.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import asdict, dataclass
from pathlib import Path

WORD_RE = re.compile(r"\b[\w’'-]+\b", re.UNICODE)
CHAPTER_RE = re.compile(r"^ch\d{2}[-_].+\.md$", re.IGNORECASE)


@dataclass(frozen=True)
class ChapterCount:
    path: str
    words: int


def count_words(path: Path) -> int:
    return len(WORD_RE.findall(path.read_text(encoding="utf-8")))


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("slug", help="Book slug under books/, for example neuralase")
    parser.add_argument("--root", default=".", help="Desk repository root")
    parser.add_argument("--min-chapters", type=int, default=18)
    parser.add_argument("--min-chapter-words", type=int, default=3000)
    parser.add_argument("--min-total-words", type=int, default=65000)
    parser.add_argument("--target-low", type=int, default=3500)
    parser.add_argument("--target-high", type=int, default=4500)
    parser.add_argument("--json", action="store_true", dest="as_json")
    args = parser.parse_args(argv)

    root = Path(args.root).resolve()
    manuscript = root / "books" / args.slug / "manuscript"
    if not manuscript.is_dir():
        print(f"ERROR: manuscript directory not found: {manuscript}", file=sys.stderr)
        return 2

    chapter_paths = sorted(
        path
        for path in manuscript.glob("*.md")
        if CHAPTER_RE.fullmatch(path.name)
    )
    chapters = [
        ChapterCount(str(path.relative_to(root)), count_words(path))
        for path in chapter_paths
    ]
    total = sum(chapter.words for chapter in chapters)
    under = [chapter for chapter in chapters if chapter.words < args.min_chapter_words]
    target = [
        chapter
        for chapter in chapters
        if args.target_low <= chapter.words <= args.target_high
    ]

    errors: list[str] = []
    if len(chapters) < args.min_chapters:
        errors.append(f"{len(chapters)} chapters found; minimum is {args.min_chapters}")
    for chapter in under:
        errors.append(
            f"{chapter.path} has {chapter.words:,} words; "
            f"minimum is {args.min_chapter_words:,}"
        )
    if total < args.min_total_words:
        errors.append(
            f"chapter-only total is {total:,} words; "
            f"minimum is {args.min_total_words:,}"
        )

    report = {
        "book": args.slug,
        "chapters": [asdict(chapter) for chapter in chapters],
        "chapter_count": len(chapters),
        "chapter_only_words": total,
        "minimums": {
            "chapters": args.min_chapters,
            "chapter_words": args.min_chapter_words,
            "total_words": args.min_total_words,
        },
        "target_band": {
            "low": args.target_low,
            "high": args.target_high,
            "chapters_in_band": len(target),
            "chapter_count": len(chapters),
        },
        "errors": errors,
        "healthy": not errors,
    }

    if args.as_json:
        print(json.dumps(report, indent=2, ensure_ascii=False))
    else:
        print(f"Book: {args.slug}")
        for chapter in chapters:
            marker = "!" if chapter in under else "✓"
            print(f"{marker} {chapter.path}: {chapter.words:,} words")
        print()
        print(f"Chapters: {len(chapters)} (minimum {args.min_chapters})")
        print(f"Chapter-only words: {total:,} (minimum {args.min_total_words:,})")
        print(
            f"Target band {args.target_low:,}–{args.target_high:,}: "
            f"{len(target)} of {len(chapters)} chapters"
        )
        if errors:
            print("\nLength check failed:")
            for error in errors:
                print(f"- {error}")
        else:
            print("\nLength check passed.")

    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
