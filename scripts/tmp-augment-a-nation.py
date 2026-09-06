#!/usr/bin/env python3
from pathlib import Path

ROOT = Path("books/a-nation-in-their-wake/manuscript")
MARKER = "<!-- PUB-AUGMENT-ROUND4-2026-09-06 -->"

ADDITIONS = {
"ch20-the-runway-beneath-the-moon.md": r'''

The recovery network also made success transferable. Apollo 12 would splash down later in 1969 and be recovered by the same carrier. That repetition matters more than ceremonial novelty. A capability that works once may be luck supported by skill; a capability designed to be repeated becomes institutional knowledge. The United States did not merely bring Apollo 11 home. It had built a system ready to bring the next crew home too.
''',
}

for name, addition in ADDITIONS.items():
    path = ROOT / name
    text = path.read_text(encoding="utf-8")
    if MARKER in text:
        continue
    path.write_text(text.rstrip() + addition.rstrip() + "\n\n" + MARKER + "\n", encoding="utf-8")

print(f"Round-four augmented {len(ADDITIONS)} chapter idempotently.")
