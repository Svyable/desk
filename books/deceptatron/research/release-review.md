# Release review — Deceptatron: Propaganda in the 2030s

Reviewed: 2026-09-08  
Desk source reviewed: `deceptatron-depth-final-pass` through `4a24be1f27a8db814c151aeb2132dd74d5d5a1d4`

## Decision

**Remain blocked with precise remediations.**

The manuscript's core factual framing remains supportable on the existing research packet, required rights/source-ledger repairs are present, and the bounded depth remediation requested by the prior review has now been carried through the complete numbered manuscript. The controlling remaining gate is mechanical validation on one frozen committed Desk source, not another open-ended editorial or factual-review pass.

## Factual and research review

The central thesis remains deliberately narrower than a claim of AI mind control: adaptive, low-cost, repeated persuasion can change the economics of influence even when individual effects are modest and unstable. The current manuscript preserves that distinction.

The principal modern evidence lanes previously checked remain controlling:

- Salvi et al. (Nature Human Behaviour, 2025) support a bounded claim that personal information improved persuasive performance in a controlled short-debate setting; the manuscript does not convert the reported odds ratio into an election-conversion rate or evidence of durable voting behavior.
- Bai et al. (Nature Communications, 2025) support small policy-attitude effects from LLM-generated messages in preregistered experiments; the manuscript does not generalize those effects into population-scale political control.
- Lin et al. (Nature, 2025) support candidate-preference effects from AI dialogues across multiple election contexts while remaining experimental capability evidence rather than proof of a deployed covert end-to-end system.
- The FTC's January 17, 2025 surveillance-pricing findings support the narrower proposition that granular behavioral and contextual signals can be operationalized for individualized commercial treatment; the manuscript continues to mark the political application as an analogy rather than evidence of deployment.
- C2PA Harms Modelling v2.4 supports the provenance/truth distinction: valid manifests do not establish truth, and missing Content Credentials do not establish falsity.

No depth pass added a new named empirical result that requires upgrading these factual lanes. The expansions concentrate on institutional consequences, accountability, user control, sequence-level auditing, verification latency, provenance governance, common-reality infrastructure, selective friction, democratic counterintelligence, and the limits that should constrain optimization.

No reviewed source supports reliable individualized mind control, guaranteed persuasion, population-scale election control, or proof that a complete "Deceptatron" is already operational. Those stronger claims remain excluded.

## Package readiness already repaired

The prior readiness cycle repaired two book-local integrity defects:

1. `RIGHTS.md` and `rights.json` now use the repository's `bookself-arr-v1` All Rights Reserved profile for this title.
2. `research/source-ledger.csv` uses the canonical `id,year,author_or_institution,title,source_type,book_use,url` schema with stable source rows and material cautions retained in `book_use`.

Front matter, back matter, README/TOC, research brief, source ledger, robustness/falsification material, and rights metadata remain part of the canonical package.

## Depth remediation completed

The original reviewed catalog snapshot reported 44,716 words across all Markdown files in the book directory, which necessarily placed the numbered-chapter corpus below the repository's 65,000-word chapter-only gate.

Substantive remediation has since proceeded across the manuscript rather than by padding:

- PR #1395 deepened Chapter 3, **The Audience Becomes a Model**, adding 994 exact checker-token words around model usefulness versus global accuracy, model decay, resistance/counter-optimization, and user-facing model control.
- PR #1398 deepened Chapter 4, **The Argument Learns Your Weakness**, around inference error, cheap persistence, user resistance, design controls, adaptation records, and sequence-level accountability.
- PR #1401 deepened Chapters 1, 2, and 5–13 as one coherent pass, adding approximately 14,803 checker-token words across accountability, public legibility, synthetic social proof, persistent-agent loyalty, memory provenance, counterfactual feeds, emotional-context boundaries, and supply-chain responsibility.
- The present focused pass deepens Chapters 14–20 around system composition and reversibility, verification latency, provenance appeals and recoverability, public comparability and version history, measurable selective friction, contestable attribution, and civic/institutional alignment.

Every numbered chapter has therefore received either a dedicated expansion pass or was already part of the large middle-book remediation. The review does not claim that arithmetic on historical catalog totals proves the length gate; only the repository checker on the frozen committed source can do that.

## Remaining mechanical release gates

1. Freeze the merged Desk source and run `python3 scripts/check-book-length.py deceptatron`. It must report at least 18 numbered chapters, every numbered chapter at least 3,000 words, and at least 65,000 numbered-chapter words total.
2. Run `python3 scripts/check-desk.py` on that same frozen source and resolve any title-local or repository-wide integrity failure that controls publication.
3. Regenerate/inspect canonical Desk catalog surfaces from that same source so the root word count and release-review queue are not relying on the stale pre-remediation 44,716-word catalog snapshot.
4. Verify the required matter, rights files, Reader/direct-route discovery, feedback dropdown, and intended research packet on the frozen source.
5. If and only if those mechanical gates pass with no Drafting/revision/DO NOT RELEASE marker or other controlling blocker, create the matched Desk/Shelf publication transaction from that exact Desk commit. Desk remains the working edition; Shelf receives the `Published` snapshot.

## Release posture

**Release-cleared subject to explicitly enumerated mechanical steps, but not yet cleared to create or merge the Shelf snapshot.**

The substantive factual/readiness review is complete. The next action is mechanical validation on the merged frozen Desk source. If the checker or Desk integrity tooling reports a concrete failure, that failure becomes the precise blocker; do not reopen generalized review language.