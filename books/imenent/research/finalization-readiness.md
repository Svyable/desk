# Imenent — finalization readiness audit

Date: 2026-09-07

This note records the transition from chapter-by-chapter drafting and revision into finalization. It is bookkeeping, not a declaration that the Desk copy is published or ready for Shelf.

## Current book state

- Status remains **Drafting**.
- The book has 20 numbered chapters plus the Six-Hour Firm interlude.
- Front matter and back matter are present.
- `RIGHTS.md` and `rights.json` are present.
- The research trail includes a research brief, chapter evidence map, source ledger, and dedicated revision-control notes spanning Chapters 1–20.
- The README TOC lists all 20 numbered chapters, the interlude, front matter, and back matter.

## Revision coverage now present

The research/revision trail has explicit control passes for the complete numbered manuscript:

- Chapters 1–3: re-entry controls
- Chapters 4–6: authority and speed controls
- Chapters 7–9: delegation, firm, and finance controls
- Chapters 10–12: resilience controls
- Chapters 13–15: evaluation, correlation, and security controls
- Chapters 16–18: veto, competitive dependence, and kill-switch controls
- Chapters 19–20: return and final-control architecture

Those passes preserve the book's main evidentiary boundary: *Imenent* argues about a possible institutional route to practical loss of control. It does not claim that current AI has already crossed a global re-entry threshold, that evaluation gaming proves durable deceptive goals, that automation is necessarily less safe than human operation, or that every dependency deserves takeover language.

## Full-book standard audit

The repository's automated full-book standard requires at least 18 numbered chapters, at least 3,000 words per chapter, at least 65,000 chapter-only words, a proportional research trail, and matching rights files.

The structural requirements visible in the committed tree are satisfied: 20 numbered chapters, proportional research material, and both rights files are present.

The exact word-count requirements are **not certified by this connector-only audit**. Finalization should not infer compliance from file size. Before any release-readiness claim, run the repository's canonical local command against a frozen commit:

`python3 scripts/check-book-length.py imenent`

If any chapter is below 3,000 words, deepen that chapter substantively rather than padding it. If the chapter-only total is below 65,000 words, identify the weakest argument/case-study gaps and add evidence-driven depth.

## Integrity gate

Before a release-readiness PR, run the repository's local integrity checker against the same frozen source state:

`python3 scripts/check-desk.py`

Do not substitute GitHub Actions for this check. Desk is explicitly local-first and must remain usable with zero Actions minutes.

## Editorial finalization pass

The remaining editorial work should be full-book rather than another automatic expansion cycle. Read the manuscript in sequence and fix only demonstrated problems:

- duplicated explanations of the re-entry threshold that no longer add a new mechanism;
- transitions that repeat the previous chapter instead of advancing the argument;
- places where a current observation, analysis, and forecast blur together;
- examples whose causal burden exceeds the cited evidence;
- repeated rhetorical symmetry, presentation voice, or framework density that makes the prose sound synthetic;
- inconsistent use of control, authority, re-entry, degraded mode, independence, and recovery;
- places where counterevidence is mentioned but not allowed to change the strength of the claim;
- front/back matter language that has drifted from the final manuscript.

Preserve the existing voice and intervene surgically. Do not smooth the book into a generic governance manual.

## Research and source closeout

Before release readiness:

1. Verify that every concrete current or historical claim that carries argumentative weight has a traceable source in `research/source-ledger.csv` and is mapped to the chapter that uses it.
2. Recheck volatile 2026 claims against authoritative or primary sources where practical and record access/update dates when the ledger convention calls for them.
3. Keep vendor material identified as vendor material and incident reporting identified as reporting; do not silently promote either into independent prevalence evidence.
4. Preserve falsification notes and meaningful counterevidence during copyediting.
5. Remove any source that is no longer used rather than leaving bibliography-shaped decoration.

## Packaging boundary

Ordinary manuscript revision should continue to avoid root `README.md`, `index.html`, `llms.txt`, `sitemap.xml`, Reader files, and global discovery/catalog surfaces.

Only after the frozen manuscript passes the exact length and integrity gates should a separate mechanical finalization/catalog PR synchronize the required discovery surfaces. The Desk copy must not be marked `Published`; publication is a Shelf state and requires an explicit release workflow.

## Release-readiness definition

For this book, “ready for finalization” means the manuscript is structurally complete and the chapter-level research/revision passes cover the full argument. “Ready for release” is stronger and should be claimed only after:

- the exact local length checker passes on the frozen source commit;
- the exact local Desk integrity checker passes on that same source state;
- the source trail has been reconciled with the final prose;
- front matter, back matter, and rights metadata have been checked against the final manuscript;
- required catalog/discovery synchronization is complete in a clean mechanical PR;
- the Desk status remains a Desk-appropriate state rather than `Published`.

Until those gates are evidenced, keep *Imenent* **Drafting**.