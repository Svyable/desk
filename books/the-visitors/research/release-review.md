# Release review — The Visitors

Review date: 2026-09-06

Canonical Desk source reviewed: `c0481af0de35a759a40c3898e9301a2e3e057539`

## Decision

**Remain blocked with precise remediations.**

The manuscript is structurally complete at 26 of 26 numbered chapters, includes front and back matter, and has a book-local research packet plus `RIGHTS.md` and `rights.json`. The current 2020s closing claim about King Charles III's April 2026 U.S. state visit and Joint Meeting of Congress is supported by primary/current institutional records. The broader research brief is unusually explicit about selection uncertainty, causal overclaiming, current-decade provisionality, and falsification.

Publication should nevertheless remain blocked because the research packet itself still records two unfinished publication-level evidence tasks, and the source ledger does not use the current Desk source-ledger schema.

## Current-claim verification

The most time-sensitive claim is Chapter 26's treatment of King Charles III as the provisional 2020s selection. That event is real and current as of this review: the White House announced the April 27–30, 2026 state visit; the Royal Family records the April 28 Joint Meeting of Congress; and the manuscript ledger includes contemporary congressional/executive sources for the visit. The chapter's framing remains appropriately bounded: Charles is an architectural/provisional selection for the decade, not a claim that he exercised more direct policy leverage than every alternative, and Volodymyr Zelenskyy remains an explicit rival.

No release blocker was found in that specific current-event lane.

## Controlling blockers

1. **Foreign-side primary-source audit remains explicitly unfinished.** The research brief says publication editing should add at least one primary source from the visitor's own government, language, memoirs, or archival tradition where available, and specifically flags Gardoqui, Mellimelli, Onís, Min Yong-ik, Li Hongzhang, Eshkol, Deng, Gorbachev, Mandela, Xi, and Charles for deeper non-U.S. sourcing. That is a concrete publication-level research task, not vague review language.
2. **Prior-art review remains explicitly unfinished.** The research brief says a later prior-art review should search trade books, academic monographs, exhibition catalogs, diplomatic-protocol histories, presidential-visit histories, and works about foreign travelers in America before publication language describes the one-dignitary-per-decade device as unprecedented. The current manuscript is careful not to make an unsupported first-ever claim, but the repository itself still marks this publication edit as pending.
3. **Source-ledger schema is stale.** `research/source-ledger.csv` currently uses `id,chapters,type,source,url,use,caveat`; current Desk integrity conventions require the canonical `id,year,author_or_institution,title,source_type,book_use,url` schema. Migrate without dropping the existing chapter mapping or caveat information; preserve those details in a compatible supplemental field/file if necessary rather than losing research context.
4. **Mechanical publication validation still needs one frozen-source run.** The generated Desk dashboard reports 73,456 words across the book directory, which does not itself prove the numbered-chapter gate. Before release, run `python3 scripts/check-book-length.py the-visitors` and require every numbered chapter to clear the repository floor and the numbered corpus to clear 65,000 words.
5. **Repository integrity must be clean on the same eventual publication source.** After the research/schema work and any resulting prose changes, run `python3 scripts/check-desk.py` and resolve title-specific catalog/Reader/discovery mismatches before creating a Shelf transaction.

## Bounded remediation path

- Complete the foreign-side primary-source audit for the specifically flagged chapters, recording concrete additions and any claim changes.
- Complete the bounded prior-art scan and record the result without upgrading it into an unsupported universal novelty claim.
- Migrate the source ledger to the current Desk schema while preserving chapter mapping and caveats.
- Reconcile any manuscript claims materially changed by that evidence work.
- Run the exact book-length checker on the frozen candidate.
- Run Desk integrity/catalog checks on that same source.

If those steps pass with no new factual blocker, the title can be re-evaluated for **release-cleared** status and a matched Desk/Shelf release transaction. Do not publish from this review state.
