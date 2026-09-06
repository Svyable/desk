# Publication Readiness Audit — September 6, 2026

This note records the final editorial pass performed before moving *I’m Not a Robot: And Other Stories I Tell Myself* from its long-running writing branch onto a clean release branch based on the current Desk `main`.

## Scope

The pass did not change the book’s 22-chapter architecture. It deepened chapters that were materially shorter than the stronger back half so the manuscript would not approach the repository’s full-book length standard by relying on a few oversized chapters.

The final pass concentrated on Chapters 1–12 and 21, with particular attention to:

- operational personhood versus authorization in CAPTCHA and agentic systems;
- tests that alter the behavior they claim merely to measure;
- hidden human labor and distributed institutional authorship inside automation;
- error distributions, asymmetric false-positive costs, and correction paths;
- stale consent, revocation, and when a prior choice deserves to be asked again;
- reason-giving as accountable revision rather than justification on demand;
- archive missingness and the difference between stored traces and a life;
- recommender feedback, exploration, and the future person a profile can undersupply;
- consistency versus integrity and the institutional conditions for second chances;
- attention filtering, low-frequency high-consequence signals, and control over salience;
- delegated language, speech acts, and who is authorized to make a promise;
- selective provenance: enough process evidence to reconstruct responsibility without turning creation into surveillance;
- relationship continuity, portability, vulnerability, and provider power in synthetic companions.

## Size screen

The repository’s full-book standard requires at least 18 chapters, at least 3,000 words per chapter, and at least 65,000 chapter-only manuscript words.

This environment could not execute the repository’s local `scripts/check-book-length.py` against a real checkout, so this note does **not** claim that the mechanical word-count gate ran here.

As a conservative pre-release screen, the final GitHub blobs for all 22 `chNN-*.md` files were inspected after the prose freeze. Chapter blobs range from approximately **19.6 KB to 30.1 KB**, and the chapter-only set totals approximately **494.9 KB** of UTF-8 Markdown. Earlier chapters below that size profile were deepened before this audit was closed.

The canonical local release process should still run the repository’s mechanical checks when a full checkout is available. The purpose of this screen is to avoid knowingly presenting a short manuscript as ready merely because the metadata says `Complete draft`.

## Research discipline

No new empirical claim in the publication-length pass depends on an uncited headline statistic. The new material primarily develops implications of sources already recorded in `research/README.md` and the three robustness notes.

Where the manuscript moves beyond empirical findings into design or normative claims—such as selective provenance, stale authorization, exploration budgets, relationship portability, or responsibility tracking meaningful control—the prose presents those as arguments rather than established scientific results.

## Falsification and revision triggers

The publication framing should be revisited if evidence shows any of the following:

- the local book-length checker finds a chapter below the repository minimum;
- a named empirical example has been misstated or materially superseded;
- a legal or regulatory statement dated to the September 2026 snapshot is no longer accurate for the edition being released;
- a chapter relies on a machine/human analogy more strongly than the underlying evidence supports;
- the book’s central idea of `revision under responsibility` is used to assign responsibility to people who lack meaningful power, information, alternatives, or ability to revise the relevant system.

## Release intent

The Desk copy should remain `Complete draft` as the canonical working edition. Publication is a separate Shelf snapshot. The released Shelf copy should be marked `Published`, preserve the same manuscript/research/rights payload, and be cataloged under Sven Hardy Benson’s Shelf.
