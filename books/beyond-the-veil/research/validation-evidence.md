# Validation evidence from manuscript batches

The stacked manuscript PRs that produced Chapters 4–18 recorded word counts using the same Desk tokenization rule as the full-book validator.

- Chapters 4–6: each just over 3,260 words
- Chapters 7–9: 3,316 / 3,524 / 3,493
- Chapters 10–12: 3,344 / 3,226 / 3,296
- Chapters 13–15: 3,199 / 3,079 / 3,093
- Chapters 16–18: 3,170 / 3,058 / 3,064

Those records establish the per-chapter floor for Chapters 4–18. Chapters 1–3 and 19–20 were the focus of the current expansion pass because they were the earlier, materially shorter files.

This historical evidence does not replace running `scripts/check-book-length.py` against the final combined snapshot.
