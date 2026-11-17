# Release screening — Da Vinci Process

**Screened:** November 16, 2026  
**Frozen Desk source examined:** `1901cfe8efdbd0e10196f4eb5f24cd8437b4ce81`  
**Decision:** **Hold. Not release-cleared. Do not copy to Shelf from this review.**

This records a bounded release screening, not a claim to have completed the required whole-book editorial read. The screening covered the book README, front and back matter, research trail and book brief; all 18 numbered chapter openings and endings; representative interior passages in chapters 1, 8, 14, and 18; the numbered-chapter mechanical count; and the Desk repository checker. The full manuscript still needs an uninterrupted editorial/factual reading before a release decision.

## Gate evidence

| Gate | Finding |
|---|---|
| Complete | The README declares an 18/18 complete first draft and links all 18 numbered chapters plus front/back matter. The front matter carries the Sven Hardy Benson byline. |
| Mechanical | **Pass** on the frozen source: `python3 scripts/check-book-length.py da-vinci-process --json` reports **18 numbered chapters, 65,116 numbered-chapter words, minimum chapter 3,515 words, zero underlength chapters**. |
| Cover metadata | **Pass**: `python3 scripts/check-book-cover-metadata.py da-vinci-process` reports title, subtitle and byline agreement. |
| Substantive | **Pending / not cleared**. The review below identifies specific narrative work and a chapter-by-chapter source-traceability audit still required. |
| Repository | **Fail**: `python3 scripts/check-desk.py` reported **160 ERROR lines** at the examined source. Failures include research source-fragment schemas, source-ledger metadata, and out-of-sync inventory/discovery surfaces across unrelated books. These are existing Desk-wide problems, not defects introduced by this review. Do not suppress the validator or treat a focused book pass as a global pass. |

## What is working

The opening's central object—the disputed account of Leonardo's contribution to Verrocchio's *Baptism of Christ*—has a genuine investigative hook. Chapter 1 distinguishes Giorgio Vasari's later anecdote from the collaborative painting and available Uffizi evidence rather than treating the humiliation story as fact. Chapter 12 gives a productive second historical mechanism: Francesco Melzi, the notebooks, and the survival of working memory. The research trail names museum/conservation collections and distinguishes historical evidence, contemporary field experiments, vendor telemetry, and the author's synthesis. Chapter 14 is careful not to romanticize exploitative apprenticeship merely because the old system trained skill.

The book's distinctive proposition is worth protecting: craft and responsibility may migrate from executing each stroke to designing, criticizing, and preserving a shared workshop. It does not need a new thesis.

## Specific editorial findings before publication

1. **Opening rhythm / evidence.** Chapter 1 begins with several isolated stage beats—“Verrocchio gives Leonardo an angel,” “Then comes the wound,” “The story is also too perfect”—before the material evidence arrives. Keep the Vasari uncertainty, but let the documented painting, attribution problem, and workshop practice carry more of the tension. The existing stage beats produce a more theatrical certainty than the source warrants.
2. **The central loop needs one deep case.** Chapter 8 has a useful escalation from correctness to support, fit to commission, and reconsideration of the commission itself. The middle currently presents this mostly through generic examples and a sequence of questions. Follow a specific, sourced modern AI/human collaboration study or real documented work process through a false start, critique, change, and outcome, so the reader can see the correction mechanism rather than only receive its taxonomy.
3. **The apprenticeship cost must be concrete.** Chapter 14's argument about protecting judgment without preserving junior drudgery is nuanced. Its hypothetical negotiations, emergency response, and patient examples are more compelling when anchored to documented training and skill-transfer evidence; otherwise the chapter risks repeating the proposition that consequences make learning real without showing when and how.
4. **Ending must transform the opening.** Chapter 18 returns to the Baptism painting but then repeats the workshop/augmentation thesis, lists possible roles and industries, and closes by naming a “democratization of ambition.” A stronger ending needs an earned final consequence or test case that makes the opening object mean something new, not another summary of what the workshop ought to do.
5. **Whole-book repetition and paragraph pass.** Across the 18 chapters, the screening found many short declarative paragraph breaks, frequent thesis-announcing “This is…” sentences, and repeated master/workshop antitheses. These may be effective in isolation but become conspicuous across a book. Read the full sequence for repeated work done by the same example or concept; cut duplicate claims before polishing individual sentences. Do not mechanically target words or erase the author's particular voice.
6. **Claim-to-source mapping.** The selected bibliography is in back matter and the working research trail. The numbered chapters have no inline source URLs. This is not, by itself, evidence that claims are false; it does mean a release editor must map specific consequential historical and 2025–2026 human-AI findings to the exact primary source, population, caveat, and reader-facing note or citation. Check that the cited claim is supported at the point of inference rather than relying on a book-level list.

These are work assignments, not an assertion that every page or every fact is defective. The screening did not independently verify every source or read every paragraph, so it cannot certify the literary, factual, or rights gates.

## Finish line

- Perform an end-to-end editorial read, logging concrete passages that improve or drain momentum; revise the highest-impact structural repetitions and preserve the strong historical distinctions.
- Audit principal historical attributions, current agent-capability and workplace findings, and study-population limits against primary sources; link readers to the evidence at useful points.
- Recheck the book's rights, publication metadata, source mapping, and literal chapter-length command on the **new** frozen source.
- Repair the Desk-wide baseline failures in their own bounded changes, then require a clean `python3 scripts/check-desk.py` on the same frozen commit.
- Only after all four gates are green, run the canonical `scripts/release-book.sh <slug> ../shelf` transaction, verify the Desk SHA and Shelf `release.json` payload digest, and land the matched release. Do not mark the Desk copy `Published`.

**No Shelf manuscript, public catalog, or publication marker was changed by this screening.**
