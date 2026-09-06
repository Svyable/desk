# Release method

Desk is work in motion. Shelf is a deliberate released snapshot. Release asks one question: **is this exact Desk snapshot ready to become a Shelf edition?**

## Four gates

All four must be green on the same frozen Desk commit.

1. **Complete** — the book README says the manuscript is complete and its Reader checklist resolves to real files.
2. **Substantive** — the editorial/research review records no unresolved factual, rights, novelty, or editorial blocker.
3. **Mechanical** — the standard length check passes: at least 18 numbered chapters, each at least 3,000 words, and at least 65,000 numbered-chapter words, unless an explicit documented exception applies.
4. **Repository** — `python3 scripts/check-desk.py` passes and the release is built from that exact Desk commit.

A failed gate produces a concrete remediation and the candidate leaves the front of the queue until that remediation changes. Do not repeatedly re-review a known blocker.

## One source of truth per fact

- `catalog.json`: canonical Desk slug inventory.
- Book README: title, workflow status, chapter declaration, Reader manuscript list, short release-review status.
- `scripts/catalog.py --write`: generated root dashboard and counts.
- Editorial/research review: substantive release evidence.
- `scripts/check-book-length.py`: standard mechanical length decision.
- `scripts/check-desk.py`: repository integrity.

The release queue is derived state. Do not maintain a second queue ledger.

## Connector-only length validation

The gate tests evidence, not where the test runs. With a checkout:

```bash
python3 scripts/check-book-length.py neuralase
```

For a frozen GitHub source without a checkout, count every numbered chapter with the same `WORD_RE`, put the path/count pairs in a temporary JSON object, and run:

```bash
python3 scripts/check-book-length.py neuralase --counts /tmp/neuralase-counts.json
```

The counts file is temporary evidence, not a canonical repository artifact. It must cover the exact frozen source being considered for release.

## Publication transaction

Once all gates are green: freeze the Desk SHA; create the Shelf edition from that snapshot; update Desk's publication marker to name the Shelf release and frozen SHA; validate both sides; merge the matched changes when objective repository protections allow. If either side changes materially after the freeze, invalidate and refreeze.

## Queue policy

Prefer the candidate with the fewest unresolved gates, not merely the oldest complete manuscript. Known substantive blockers move behind candidates that need only mechanical confirmation.
