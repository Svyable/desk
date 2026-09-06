# Release review — Deceptatron: Propaganda in the 2030s

Reviewed: 2026-09-06  
Desk source reviewed: `87d757abcb6351444e3ff546b665cec68bc3ae02`

## Decision

**Remain blocked with precise remediations.**

The manuscript's core factual framing is supportable on the current research packet, and the key contemporary claims checked in this pass remain accurately bounded. The controlling release blocker is substantive manuscript depth, not a missing factual clearance artifact.

## Factual and research review

The central thesis is deliberately narrower than a claim of AI mind control: adaptive, low-cost, repeated persuasion can change the economics of influence even when individual effects are modest and unstable. The current manuscript and research brief preserve that distinction.

Current-source verification in this pass confirmed the principal modern evidence lanes:

- Salvi et al. (Nature Human Behaviour, 2025) report that personalized GPT-4 debate produced 81.2% higher odds of greater post-debate agreement than the human-human baseline; among non-ties, personalized GPT-4 was more persuasive 64.4% of the time. The manuscript correctly treats these as controlled short-debate results rather than an 81.2% conversion rate or evidence of durable voting behavior.
- Bai et al. (Nature Communications, 2025) report three preregistered experiments totaling 4,829 participants. LLM-generated messages shifted policy attitudes relative to neutral controls and were broadly comparable with lay-human persuasive messages. The paper describes the observed effects as small; the manuscript should continue not to generalize them into population-scale political control.
- Lin et al. (Nature, 2025) report significant candidate-preference effects from AI dialogues in U.S., Canadian, and Polish election contexts and describe the models as persuading largely with relevant facts and evidence rather than exotic psychological tactics. This supports the book's evidence-routing argument while remaining experimental capability evidence, not evidence of a deployed end-to-end covert influence system.
- The FTC's January 17, 2025 surveillance-pricing findings confirm that granular signals including location, browsing and shopping history, demographics, and interaction behavior can be operationalized for individualized commercial treatment. The manuscript and research packet correctly mark the political analogy as an analogy rather than evidence of political deployment.
- C2PA Harms Modelling v2.4 explicitly states that valid manifests do not establish truth, that valid manifests can accompany misinformation or disinformation, and that absence of Content Credentials does not mean an asset is untrustworthy. The manuscript's provenance/truth distinction is therefore well grounded.

No reviewed source supports upgrading the thesis to reliable individualized mind control, guaranteed persuasion, population-scale election control, or proof that a complete "Deceptatron" is already operational. Those stronger claims remain excluded.

## Package remediations completed in this review pass

Two straightforward book-local integrity defects were repaired:

1. The README linked rights material that did not exist. `RIGHTS.md` and `rights.json` now use the repository's `bookself-arr-v1` All Rights Reserved profile for this title.
2. `research/source-ledger.csv` used the pre-canonical claim-oriented column layout and repeated source URLs. It has been migrated to the current `id,year,author_or_institution,title,source_type,book_use,url` schema with one stable row per unique source while retaining the material evidentiary cautions in `book_use`.

## Controlling release blocker: manuscript depth

The current Desk catalog reports **44,716 words across all Markdown files in the Deceptatron book directory**. The repository publication gate requires at least **65,000 words across numbered chapters alone**, with every numbered chapter at least 3,000 words.

Because the 44,716-word catalog count includes front matter, back matter, the book README, and research Markdown in addition to numbered chapters, the numbered-chapter corpus is necessarily below 44,716 words. It therefore misses the 65,000-word chapter-only minimum by **at least 20,285 words**, and the true deficit is larger.

This cannot be repaired mechanically or by padding. The manuscript needs substantive deepening across its argument, evidence, countercases, scenes, and institutional consequences. The existing robustness notes already identify appropriate substantive expansion targets.

## Required remediation before Shelf release

1. Substantively deepen the numbered manuscript until `python3 scripts/check-book-length.py deceptatron` reports at least 18 numbered chapters, every numbered chapter at least 3,000 words, and at least 65,000 numbered-chapter words total.
2. Preserve the factual boundaries recorded above during expansion; new current claims require source support and should be added to the canonical source ledger without duplicate IDs or URLs.
3. Run `python3 scripts/check-desk.py` on the same frozen Desk source and resolve any title-local or repository-wide integrity failures that control publication.
4. Verify required matter, rights metadata, Reader/direct-route discovery, feedback dropdown, catalog surfaces, and intended research files on that same source.
5. Only after those gates pass, prepare a matched Desk/Shelf release transaction from one frozen committed Desk source. Keep Desk in a working-edition state; set `Published` only on the Shelf snapshot.

## Release posture

**Not release-cleared. Do not create or merge a Shelf publication snapshot from the reviewed source.**

The next meaningful work on this title is substantive manuscript deepening followed by the exact local length and integrity gates, not another factual-review pass.
