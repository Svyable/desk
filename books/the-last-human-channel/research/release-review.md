# Release Review — The Last Human Channel

## Decision — September 5, 2026

**Remain blocked.** The manuscript is complete and the rights package is present, but the current research packet does not yet support a release-cleared claim-level factual review across the full book.

This decision is tied to Desk source `909aff08329e0788b481d6faebfe082e53eb5f23`.

## What is already ready

- Book README says `Complete draft` with 18 of 18 numbered chapters plus prologue, front matter, and back matter checked into the Reader manifest.
- `RIGHTS.md` and `rights.json` are present and identify Sven Hardy Benson as author/copyright owner under the `bookself-arr-v1` rights profile.
- The research packet includes a research brief, book brief, chapter briefs, and a normalized source ledger.
- The thesis is bounded appropriately: the book does not claim that AI inevitably causes diplomatic crisis or that machine output substitutes for political authority.

## Blocking evidence gaps

1. **Chapters 4–18 do not yet have claim-level source coverage.** The source ledger is detailed through the prologue and Chapters 1–3, then falls back to three `future-*` research seeds for the rest of the manuscript. Those seeds are not a chapter-level factual audit.
2. **The research brief itself records unfinished publication research.** Its current priorities still call for a verified foreign-ministry AI-deployment timeline, a U.S.–China strategic-communication chronology, authenticated synthetic-media response cases, comparative small-state evidence, practitioner evidence on mediation, and stronger primary documentation for the 1963 direct link.
3. **Current-deployment language needs a 2026 boundary pass.** Several ledger entries for U.S. State Department AI use are archived 2021–2025 material and explicitly say not to present them as current 2026 policy or measured effectiveness without separate confirmation.
4. **The latest Chapter 7 expansion needs matching evidence review.** Desk commit `909aff08329e0788b481d6faebfe082e53eb5f23` substantially deepened `ch07-the-adversarys-model.md`. Its central claims are mostly conceptual and appropriately caveated, but the new text should be mapped to the eventual claim-level source pass rather than treated as automatically covered by older generic research seeds.
5. **Strategy must not be confused with deployment.** Current NATO material supports a direction toward interoperable, data-centric, human-machine digital capability and accelerated AI adoption, but strategy/implementation documents are not evidence that every contemplated operational capability is already fielded or effective.

## Precise remediation

Before reconsidering release:

1. Extend the source ledger or equivalent chapter-source map so Chapters 4–18 each have explicit supporting and counterevidence for their material factual/current claims.
2. Resolve the research brief's listed publication priorities where they materially affect manuscript claims; delete or narrow claims that cannot be supported rather than carrying vague TODO language into release.
3. Recheck current U.S. State Department, NATO, U.S.–China strategic-communication, synthetic-media/authentication, and AI-mediation claims against current authoritative or primary sources, clearly separating announced strategy, pilot use, operational deployment, and measured effect.
4. Perform a claim-level pass on the expanded Chapter 7 and any other manuscript chapters changed after their supporting research notes were written.
5. Once substantive review is green, run the standard mechanical length gate and `python3 scripts/check-desk.py` on one frozen Desk source before creating a Desk/Shelf publication pair.

No additional human-review gate is imposed by this review. The blocker is evidentiary completeness, not reviewer availability.
