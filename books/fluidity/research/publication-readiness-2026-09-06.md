# Publication readiness — September 6, 2026

This note records the transition from structural draft to publication-preparation work for *Fluidity*.

## Current scientific status

As of September 6, 2026, the Clay Mathematics Institute continues to list the Navier–Stokes Millennium problem as unsolved. No claim identified in the September 5–6 research passes has changed the accepted status of the problem. The manuscript must continue to present Anthropic as a prospective protagonist and architectural case study, not as the author of an existing Navier–Stokes solution.

## Current manuscript gate

The Desk automated full-book standard requires:

- at least 18 numbered chapters;
- at least 3,000 words in every numbered chapter;
- at least 65,000 chapter-only words;
- preferably most chapters in the 3,500–4,500-word editorial band.

*Fluidity* currently has 24 numbered chapters, complete front matter, complete back matter, rights files, and a substantial research trail. A representative exact count using the same word-token regular expression as `scripts/check-book-length.py` shows that byte size in this manuscript corresponds closely enough to word count to establish that the current draft is materially short of the required gate. The chapter-file byte total before the publication deepening pass is 356,213 bytes; the representative chapter `ch05-claude-enters-mathematics.md` contains 2,483 checker-style word tokens in 16,670 bytes. This implies a chapter-only manuscript around the low-50,000-word range, with many chapters individually below 3,000 words.

This is a diagnostic estimate, not a substitute for the required mechanical check. The formal status therefore remains **Drafting** until an environment capable of running `python3 scripts/check-book-length.py fluidity` against the completed branch confirms the gate.

## Publication deepening rule

The remaining length must come from new substance, not restatement. Each short chapter should be expanded with one or more of the following:

- a primary-source case that tests the chapter's claim;
- a mathematical mechanism omitted from the first pass;
- counter-evidence or a failure mode;
- a historical comparison that changes interpretation;
- a concrete research or verification workflow;
- a sharper distinction between numerical, informal, formal, and socially accepted proof;
- consequences for the prospective Navier–Stokes program.

No chapter should be extended merely to hit a number.

## Final publication sequence

1. Deepen all numbered chapters that remain below the length floor.
2. Re-run the cutting-edge factual-status check immediately before publication preparation.
3. Run `python3 scripts/check-book-length.py fluidity` locally.
4. Run `python3 scripts/check-desk.py` after adding all required Desk catalog surfaces.
5. Conduct factual/editorial release review and record unresolved claims.
6. Mark the Desk manuscript `Complete draft` only after the gates actually pass.
7. Commit the complete Desk snapshot.
8. Release that committed snapshot to Sven Hardy Benson’s Shelf using the repository’s local release workflow.

The publication process must never convert “provocative title” into “false factual claim.”