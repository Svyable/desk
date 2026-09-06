#!/usr/bin/env python3
"""Check one Desk book against the automated full-book length standard.

By default this counts local ``chNN-*.md`` files. ``--counts`` accepts a JSON
path→word-count object for a frozen source reviewed without a checkout. Both
modes apply the same release minimums.
"""
from __future__ import annotations
import argparse, json, re, sys
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
def load_counts(path: Path, slug: str) -> list[ChapterCount]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, dict): raise ValueError("counts file must be a JSON object")
    prefix=f"books/{slug}/manuscript/"; chapters=[]
    for p,w in data.items():
        if not isinstance(p,str) or not p.startswith(prefix) or not CHAPTER_RE.fullmatch(Path(p).name): raise ValueError(f"invalid chapter path: {p!r}")
        if not isinstance(w,int) or isinstance(w,bool) or w < 0: raise ValueError(f"invalid word count for {p}")
        chapters.append(ChapterCount(p,w))
    return sorted(chapters,key=lambda c:c.path)
def main(argv=None) -> int:
    p=argparse.ArgumentParser(description=__doc__); p.add_argument("slug"); p.add_argument("--root",default="."); p.add_argument("--counts"); p.add_argument("--min-chapters",type=int,default=18); p.add_argument("--min-chapter-words",type=int,default=3000); p.add_argument("--min-total-words",type=int,default=65000); p.add_argument("--target-low",type=int,default=3500); p.add_argument("--target-high",type=int,default=4500); p.add_argument("--json",action="store_true",dest="as_json"); a=p.parse_args(argv)
    root=Path(a.root).resolve()
    try:
        if a.counts: chapters=load_counts(Path(a.counts),a.slug)
        else:
            manuscript=root/"books"/a.slug/"manuscript"
            if not manuscript.is_dir(): print(f"ERROR: manuscript directory not found: {manuscript}",file=sys.stderr); return 2
            chapters=[ChapterCount(str(x.relative_to(root)),count_words(x)) for x in sorted(manuscript.glob("*.md")) if CHAPTER_RE.fullmatch(x.name)]
    except (OSError,json.JSONDecodeError,ValueError) as exc: print(f"ERROR: could not load chapter counts: {exc}",file=sys.stderr); return 2
    total=sum(c.words for c in chapters); under=[c for c in chapters if c.words<a.min_chapter_words]; target=[c for c in chapters if a.target_low<=c.words<=a.target_high]; errors=[]
    if len(chapters)<a.min_chapters: errors.append(f"{len(chapters)} chapters found; minimum is {a.min_chapters}")
    errors += [f"{c.path} has {c.words:,} words; minimum is {a.min_chapter_words:,}" for c in under]
    if total<a.min_total_words: errors.append(f"chapter-only total is {total:,} words; minimum is {a.min_total_words:,}")
    report={"book":a.slug,"chapters":[asdict(c) for c in chapters],"chapter_count":len(chapters),"chapter_only_words":total,"minimums":{"chapters":a.min_chapters,"chapter_words":a.min_chapter_words,"total_words":a.min_total_words},"target_band":{"low":a.target_low,"high":a.target_high,"chapters_in_band":len(target),"chapter_count":len(chapters)},"errors":errors,"healthy":not errors}
    if a.as_json: print(json.dumps(report,indent=2,ensure_ascii=False))
    else:
        print(f"Book: {a.slug}"); [print(f"{'!' if c in under else '✓'} {c.path}: {c.words:,} words") for c in chapters]; print(f"\nChapters: {len(chapters)} (minimum {a.min_chapters})\nChapter-only words: {total:,} (minimum {a.min_total_words:,})\nTarget band {a.target_low:,}–{a.target_high:,}: {len(target)} of {len(chapters)} chapters")
        if errors: print("\nLength check failed:\n"+"\n".join(f"- {e}" for e in errors))
        else: print("\nLength check passed.")
    return 1 if errors else 0
if __name__ == "__main__": raise SystemExit(main())
