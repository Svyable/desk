# Release evidence pass — The Taiwan Threshold, Chapters 6–14

**Pass date:** September 6, 2026  
**Desk source inspected before this focused review:** `1f1b4dcc3e073dc9fe0dc1687b26a23d189cf19b`  
**Scope:** Chapters 6–14 and the stale field-edition note in back matter.

## Result

**Release-cleared on factual, research, rights, matter, and editorial grounds, subject only to the ordinary mechanical repository checks.**

The remaining nine chapters are developed manuscript prose rather than architecture or placeholders. Across the tranche, the text consistently distinguishes observed events from scenarios, capability from intent, access from political permission, and infrastructure or commercial effects from legal conclusions. No factual manuscript correction was required.

The old back-matter statement that the complete trade manuscript remains under development is therefore stale and should be replaced with a neutral Desk/Shelf edition note. This review does not mark the Desk copy `Published`.

## Current evidence rechecked

### Inspections and air/maritime pressure — Chapters 6–7

The chapters analyze inspection regimes and persistent air/maritime pressure as mechanisms rather than claiming that a formal inspection regime is currently in force. Taiwan MND reporting in June and July 2026 continues to document recurring PLA aircraft, PLAN vessels, official ships, and joint-combat-readiness activity around Taiwan. That supports the manuscript's baseline-drift and normalization problem while providing no basis to infer that any specific patrol proves an invasion decision.

The inspection chapter is especially careful about legal classification. It describes customs, coast-guard, commercial, diplomatic, insurance, and military responses as a response ladder whose applicability depends on facts and authority. It does not assert that a hypothetical boarding is automatically lawful, unlawful, a blockade, or an act of war.

### Undersea cables — Chapter 8

Taiwan's Ministry of Digital Affairs reported in its 2025 cable-damage analysis that Taiwan had 15 international and 10 domestic submarine cables designated as critical infrastructure by the end of February 2026; seven coastal cable incidents occurred in 2025, with three attributed to anchor dragging. MODA's January and February 2025 incident notices also document rerouting, microwave and satellite backup, repair coordination, and prioritization of critical services after cable failures.

This strengthens the chapter's central boundary rather than requiring a prose change: cable failure can have immediate operational effects while intent and state attribution remain uncertain. The manuscript explicitly says a cable can fail through accident, negligence, natural causes, commercial activity, equipment failure, or deliberate interference, and treats vessel proximity as evidence of presence rather than proof of intent.

Primary sources:
- Ministry of Digital Affairs, 2025 cable-damage analysis and improvement measures.
- Ministry of Digital Affairs, January 3 and Taiwan-Matsu/Taiwan-Penghu cable disruption notices.

### Cyber activity and attribution — Chapter 9

Taiwan's current National Cybersecurity Development Program for 2025–2028 emphasizes whole-of-society cyber defense, critical-infrastructure resilience, domestic cyber capability, and AI-related cyber defense. That establishes current institutional preparation, not attribution for any particular intrusion.

The chapter preserves exactly that distinction. It separates initial access, persistence, operational capability, activation, effect, discovery time, and political attribution. It explicitly warns that heightened crisis monitoring can discover older intrusions and that correlation across cyber and physical events is not itself proof of coordination. No current source checked here justifies sharpening the prose beyond those boundaries.

Primary source: Executive Yuan, seventh phase of the National Cybersecurity Development Program, May 8, 2025.

### Financial coercion — Chapter 10

Chapter 10 is scenario and mechanism analysis. It does not claim that a Taiwan-specific financial quarantine is presently operating, nor does it present one sanctions package as settled U.S. or allied policy. Its claims concern how banks, insurers, settlement access, compliance behavior, liquidity, cyber risk, and coalition costs can transmit coercive pressure before or alongside formal government measures.

The chapter also preserves the strongest countercase: financial coercion creates reciprocal costs, can encourage alternative payment routes, may erode its own leverage over time, and requires off-ramps if it is meant to influence behavior rather than merely punish. No dated empirical claim in the chapter required remediation in this pass.

### Semiconductors — Chapter 11

TSMC filed its 2025 Form 20-F on April 16, 2026. The filing and related annual-report material continue to support the chapter's systems framing: semiconductor production depends on power, water, cyber resilience, suppliers, logistics, equipment support, skilled labor, and geographically concentrated operating ecosystems. The manuscript does not claim a fab can operate independently of those complements.

The January 15, 2026 U.S.-Taiwan trade and investment agreement announced at least $250 billion in new direct Taiwanese semiconductor/technology investment in the United States plus at least $250 billion in Taiwanese credit guarantees. The chapter correctly treats those figures as announced diversification commitments, not as already-completed substitute capacity.

Primary sources:
- TSMC, 2025 Form 20-F / annual-report filing.
- U.S. Department of Commerce, January 15, 2026 U.S.-Taiwan semiconductor trade and investment fact sheet.

### Japan — Chapter 12

Current Japanese official material continues to describe peace and stability across the Taiwan Strait as important to regional and international security. Japan and Australia reiterated that position on April 18, 2026 while opposing unilateral attempts to change the status quo by coercion or force.

The chapter does not convert that policy relevance into an automatic Japanese commitment to a Taiwan contingency. It repeatedly separates classification, sovereign permission, alliance consultation, geography, base use, civil continuity, and direct defense of Japanese territory or forces. That is the appropriate publication boundary.

Primary sources:
- Japan Ministry of Foreign Affairs, 2026 Taiwan / Diplomatic Bluebook framing.
- Japan Ministry of Defense, *Defense of Japan 2026* portal.
- Japan Ministry of Defense, Australia-Japan Defence Ministers' Joint Statement, April 18, 2026.

### Philippines — Chapter 13

The U.S.-Philippines alliance documents support the manuscript's factual foundation without supporting automatic-access claims. The March 28, 2025 bilateral statement reaffirmed the Mutual Defense Treaty, Visiting Forces Agreement, and EDCA as foundations for alliance coordination and interoperability. Earlier EDCA announcements identify northern Luzon agreed locations, while 2025 U.S. statements document high-end bilateral training and deployment of advanced systems during exercises.

The manuscript correctly treats those arrangements as expanding options subject to Philippine sovereignty and mission-specific permission. It explicitly rejects the idea that geography, an alliance treaty, an exercise deployment, or an agreed location preauthorizes every Taiwan-related use.

Primary sources:
- U.S. Department of Defense, U.S.-Philippines Joint Statement, March 28, 2025.
- U.S. Department of Defense, EDCA agreed-location announcements.
- U.S. Department of Defense, 2025 alliance exercise/readiness statements.

### Washington's classification problem — Chapter 14

Chapter 14 is an institutional argument about how labels, effects, authorities, agencies, allies, and private-sector reactions interact in gray-zone scenarios. It does not purport to settle the international-law status of a hypothetical quarantine, inspection, cyber action, or infrastructure incident.

The text repeatedly separates analytic classification from political action and recommends effect-based questions precisely because different governments may reach different legal characterizations. It also states that partners need not share one legal label to recognize a common operational problem. No legal conclusion needed correction in this pass.

## Rights and matter

`RIGHTS.md` and `rights.json` remain present and internally consistent: Sven Hardy Benson is the author and copyright owner; the policy is `bookself-arr-v1`; public reading is permitted; no open-content or AI-reuse license is implied.

Front matter, prologue, all 18 numbered chapters, and back matter are present and checked in the canonical README.

## Full substantive decision

The September 6 opening/late-book pass and this Chapters 6–14 pass together cover the complete manuscript. No unresolved factual, research, rights, matter, novelty, or editorial blocker remains.

The remaining gates are mechanical only:

1. run the repository-conventional book-length validation applicable to `the-taiwan-threshold` on one frozen Desk source;
2. run `python3 scripts/check-desk.py` and current catalog/discovery checks;
3. if those pass, freeze that committed Desk source and prepare the linked Desk/Shelf publication pair from exactly that snapshot.

If either mechanical check fails, do not release until the concrete failure is remediated. No additional human-review gate is imposed by this review.
