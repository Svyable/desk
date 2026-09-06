# Release review — The Decisive 25

**Review date:** September 6, 2026  
**Manuscript snapshot reviewed:** `2f2d953576b27ea78b75dc459bc9a931c6385804`  
**Disposition:** **remain Drafting; structurally complete, not release-cleared**

This review separates four questions that are easy to blur when a manuscript looks finished in the Reader: is the book complete in structure, is its argument supported, does it satisfy the Desk's mechanical depth standard, and is the repository transaction clean enough to land? A release requires all four. Passing the first two does not waive the last two.

## 1. Structural gate — PASS

The book has a complete publication-shaped packet:

- front matter;
- twenty-five numbered chapters covering the twenty-five ten-year intervals from 1776–1785 through 2016–2026;
- afterword, *The Twenty-Sixth Person*;
- a canonical README with all twenty-five chapters checked off;
- `RIGHTS.md` and `rights.json` using the existing `bookself-arr-v1` profile;
- a book-local selection board;
- evidence ledgers covering Chapters 1–25.

The README therefore correctly records **25 of 25 drafted** while retaining a Drafting state. “Structurally complete” describes manuscript coverage, not publication readiness.

## 2. Substantive / research gate — PASS FOR COMPLETE-DRAFT REVIEW

The manuscript's central wager is explicit and falsifiable: for each decade, choose the person whose removal creates the largest plausible counterfactual change in what the United States becomes next. Selection is based on scale, persistence, personal leverage, and counterfactual distance rather than admiration, fame, office, citizenship, or moral approval.

The research packet prevents the format from collapsing into great-person mythology. Every later-decade ledger records a working causal claim, primary or institutional anchors, serious secondary checks, a strongest counterargument, and a falsification condition. The first three chapters carry the same disciplines in the main research brief.

The strongest editorial safeguard is that the book repeatedly restores distributed causation. Washington does not receive French naval power as personal credit; Hamilton does not invent public credit; Louverture does not single-handedly cause the Louisiana Purchase; Lincoln does not “free the slaves” alone; Oppenheimer does not own the Manhattan Project; King does not own the civil-rights movement; Jobs does not invent the smartphone; bin Laden does not own American policy choices after September 11. The person is treated as a lever inside a system.

The final 2016–2026 chapter has an explicit **September 6, 2026 evidence freeze** and a language boundary requiring certified election results, court and congressional records, allegations, findings, appeals, and political claims to remain distinct. Importance is not endorsement.

This is enough to call the research architecture proportionate to a complete draft. It is not a claim that no later fact-check, copyedit, bibliographic expansion, or rival-selection challenge can improve the manuscript.

## 3. Mechanical depth gate — NOT CLEARED

The controlling Desk full-book standard requires:

- at least 18 numbered chapters;
- at least 3,000 words in every numbered chapter;
- at least 65,000 words total across numbered chapters;
- with most chapters preferably in the 3,500–4,500-word editorial band.

The book easily clears the chapter-count requirement with twenty-five numbered chapters. The exact word-count requirements have **not** been mechanically proven on this snapshot.

This connector session does not expose a trusted checked-out repository on which to run:

`python3 scripts/check-book-length.py the-decisive-25`

File-size inspection is not a substitute for that command. Several chapter files are compact enough that a per-chapter shortfall is plausible even if the aggregate manuscript is substantial. Do not infer a pass from byte size or total page count.

**Required next action:** run the exact checker on the frozen source. If any chapter is below 3,000 words, deepen it with additional sourced cases, causal mechanisms, rival analysis, or counterevidence. Do not pad. Then rerun until every chapter and the chapter-only total pass.

## 4. Repository gate — NOT CLEARED

This title is a new top-level Desk book. Before the PR can land on `main`, current-main discovery and catalog surfaces must be synchronized according to the active Desk invariants, and the same final source must pass:

`python3 scripts/check-desk.py`

At review time the manuscript branch has been reconciled with a recent `main`, but `main` is moving and the root generated/discovery surfaces have deliberately not been hand-edited from stale snapshots. That restraint is preferable to overwriting newer book registrations.

**Required next action:** after the depth pass, reconcile once more to the publication base, generate/synchronize the root catalog surfaces from that base, then run `check-desk.py`. Any concrete failure remains controlling.

## Release decision

**Not yet.**

The book is no longer blocked by missing chapters, missing research lanes, missing back matter, or missing rights metadata. Its remaining blockers are narrow and objective:

1. prove or remediate the full-book word-count gate;
2. synchronize current-main repository discovery/catalog surfaces;
3. pass the deterministic Desk integrity check on the final frozen source.

Only after those succeed should the Desk status advance from `Drafting — structurally complete` to `Complete draft`, the parent PR become ready/mergeable on objective evidence, and a separate Desk → Shelf release transaction be considered.

No additional human-review blocker is introduced by this review.