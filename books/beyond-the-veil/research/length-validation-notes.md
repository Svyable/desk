# Length validation notes

The Desk full-book standard requires at least 18 chapters, at least 3,000 words in every chapter, and at least 65,000 chapter-only words.

The manuscript has 20 chapter files. The publication pass should run the canonical checker before calling the draft a complete trade manuscript:

```bash
python3 scripts/check-book-length.py beyond-the-veil
```

The opening three chapters were drafted earlier and are visibly shorter than the later manuscript. The publication-length pass therefore deepens Chapters 1–3 with additional mechanism, boundary cases, and counter-evidence rather than padding or adding new claims merely to reach a count.

This note is bookkeeping only and is not part of the manuscript word count.
