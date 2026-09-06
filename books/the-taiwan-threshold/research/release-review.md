# Release review — The Taiwan Threshold

**Reviewed:** 2026-09-06  
**Desk source under review:** `4a45ab0db697317bc5773f5d3162584159e769d6`  
**Decision:** **Remain blocked — do not release to Shelf.**

## What is now established

- The canonical README says `Complete draft`, with front matter, prologue, 18 numbered chapters, and back matter checked.
- `RIGHTS.md` and `rights.json` are present.
- The research brief and source ledger preserve the controlling distinctions between capability and intent, exercises and operations, and scenario analysis and observed events.
- A September 6 release-evidence pass inspected the front matter, prologue, Chapters 1–5, and the completed late-book Chapters 15–18 against current authoritative evidence. Those sections are developed trade-manuscript prose rather than placeholders, and no factual manuscript correction was required in that tranche.
- Current Taiwan MND activity reporting and current allied policy statements were added to the source ledger with explicit boundaries against treating recurring activity as proof of invasion intent or treating partner concern as an automatic contingency commitment.

See [release-evidence-pass-2026-09-06.md](release-evidence-pass-2026-09-06.md).

## Controlling blocker: complete the claim-level pass before retiring the field-edition note

The current `manuscript/back-matter.md` still says that the complete trade manuscript remains under development. The inspected opening and late-book chapters provide concrete evidence that this description is stale in at least part of the manuscript, but the repository should not delete the note based on metadata or a partial audit alone.

The remaining substantive gate is now precise: perform the same current-source claim-level review for **Chapters 6–14**, covering the inspection regime, air/maritime pressure, undersea cables, cyber activity and attribution, financial coercion, semiconductor dependencies, Japan, the Philippines, and Washington's classification/response problem.

For each chapter, preserve these boundaries:

- capability is not intent;
- exercise/training is not operational decision;
- scenario analysis is not an observed event;
- announced strategy or access is not proof of operational deployment or effectiveness;
- partner relevance is not an automatic commitment to a Taiwan contingency;
- commercial or infrastructure effects should not be upgraded into legal conclusions without appropriate authority.

If Chapters 6–14 are green, then re-evaluate the stale field-edition sentence and record a full substantive release decision from the remediated frozen Desk source.

## Mechanical gates after substantive review

If and only if the full factual/research pass is green:

1. run the repository-conventional book-length validation applicable to this manuscript;
2. run `python3 scripts/check-desk.py` and any current catalog/discovery checks;
3. freeze one committed Desk source;
4. prepare the linked Desk/Shelf publication pair from that exact snapshot.

No additional human-review requirement is imposed. The remaining blocker is evidentiary completeness plus the ordinary repository mechanical checks.
