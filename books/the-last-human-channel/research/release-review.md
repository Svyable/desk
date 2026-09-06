# Release Review — The Last Human Channel

## Decision — September 6, 2026

**Remain blocked.** The manuscript is complete and the rights package is present. Claim-level review is now complete through Chapter 7, but Chapters 8–18 still require explicit source mapping and current-claim verification before mechanical publication gates.

This decision is tied to Desk source `a8538e1756319e4ca2338a4e999e5f75c396ff0f` plus the focused Chapters 4–7 review recorded in [release-evidence-map-2026-09-06.md](release-evidence-map-2026-09-06.md).

## What is already ready

- Book README says `Complete draft` with 18 of 18 numbered chapters plus prologue, front matter, and back matter checked into the Reader manifest.
- `RIGHTS.md` and `rights.json` are present and identify Sven Hardy Benson as author/copyright owner under the `bookself-arr-v1` rights profile.
- The research packet includes a research brief, book brief, chapter briefs, a normalized source ledger, and a bounded release-evidence map.
- The thesis is bounded appropriately: the book does not claim that AI inevitably causes diplomatic crisis or that machine output substitutes for political authority.
- Prologue and Chapters 1–3 already have detailed source coverage in the canonical ledger.
- **Chapters 4–7 now have a completed claim-level release pass.** Current practitioner and institutional sources were checked where the chapters make claims about diplomatic AI assistance, media authentication, senior decision support, alliance digital experimentation, and AI governance. No manuscript correction was required in those four chapters.

## Chapters 4–7 findings

The September 6 evidence map records the controlling boundaries rather than upgrading strategy, experimentation, or official self-description into measured effectiveness:

- Chapter 4 distinguishes useful machine translation from the political and institutional context that lives outside the sentence. Current diplomatic practitioner evidence supports AI-assisted analysis and drafting but does not establish a measured machine-translation failure rate; the chapter does not claim one.
- Chapter 5 is supported by DARPA media-forensics work and C2PA provenance standards while explicitly preserving the distinction between provenance, truth, identity, constituency, and political effect.
- Chapter 6 now has direct senior-diplomat practitioner evidence from Singapore alongside NIST governance material. The chapter does not claim heads of government routinely use unmediated AI policy systems or that AI improves outcomes by itself.
- Chapter 7 is mapped to deterrence research, NATO AI governance, and current NATO digital/interoperability experimentation. Those sources support the existence of active testing and governance work, not a claim that adversary models reliably predict future intent.

## Remaining blocking evidence gaps

1. **Chapters 8–18 still need claim-level source coverage.** They retain chapter briefs and useful research seeds, but publication clearance requires explicit supporting and counterevidence for their material factual/current claims rather than assuming the Chapters 1–7 evidence generalizes automatically.
2. **The remaining publication research priorities must be resolved where material.** These include a current U.S.–China strategic-communication chronology, practitioner evidence on AI-assisted mediation, comparative small-state evidence, current alliance implementation boundaries, and primary/authoritative support for protocols and military-AI risk-reduction claims used later in the book.
3. **Current-deployment language must remain separated from strategy and experimentation.** The Chapters 4–7 pass closed this issue for its tranche; the same discipline still has to be applied to Chapters 8–18.
4. **Later changed chapters require evidence review against their current text.** The Chapter 7 expansion is now covered. Any Chapters 8–18 that changed after the original research seeds must be reviewed in their current canonical form rather than assumed covered by older notes.

## Precise remediation

Before reconsidering release:

1. Extend the release evidence map or equivalent chapter-source map through Chapters 8–18, recording supporting evidence, strongest counterevidence, and the exact boundary between observed deployment, announced strategy, experimentation, scenario analysis, and authorial synthesis.
2. Recheck material current claims against authoritative/primary sources, especially U.S.–China crisis communication, NATO implementation, synthetic-media/authentication where reused, diplomatic mediation, small-state AI use, commercial intelligence/OSINT, risk-reduction protocols, and responsible military-AI initiatives.
3. Narrow or remove any claim that cannot be supported rather than carrying a vague research TODO into release.
4. Once substantive review is green, run the standard mechanical length gate and `python3 scripts/check-desk.py` on one frozen Desk source before creating a Desk/Shelf publication pair.

No additional human-review gate is imposed by this review. The blocker is now narrower and concrete: **Chapters 8–18 claim-level evidence review, followed by objective mechanical validation.**
