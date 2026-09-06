# Robustness Pass — Chapters 14, 18, 19, and 20

This note records the second September 4, 2026 robustness pass for *I’m Not a Robot*. The purpose is not to make every conceptual paragraph empirical. It is to mark where the manuscript now makes stronger normative or design claims, identify the evidence traditions supporting them, and state what would weaken those claims.

## Chapter 14 — I Am in Control

The revision expands control beyond the presence of an override button. It now distinguishes local veto from broader authority over dependency, exit, rollback, model changes, and the goals a system is optimizing.

Primary research anchors remain Raja Parasuraman and Victor Riley, “Humans and Automation: Use, Misuse, Disuse, Abuse,” *Human Factors* 39(2), 230–253 (1997), DOI: https://doi.org/10.1518/001872097778543886, and Raja Parasuraman and Dietrich H. Manzey, “Complacency and Bias in Human Use of Automation,” *Human Factors* 52(3), 381–410 (2010), DOI: https://doi.org/10.1177/0018720810376055. These sources support the narrower claim that human presence and nominal override authority do not guarantee well-calibrated control.

The new discussion of lock-in, exit, rollback, and version-aware authorization is a governance argument rather than a claim that one empirical literature establishes a universal checklist. The manuscript therefore avoids saying every system must be manually reversible or that every update requires renewed individual consent. The claim is proportional: where organizations describe humans as retaining meaningful control, that description should survive changes in dependency, system behavior, and the practical ability to refuse or recover.

Falsification pressure: this section should be weakened if evidence showed that nominal human veto reliably produces substantive independence even under severe throughput pressure, opaque upstream filtering, strong switching costs, or material system changes without corresponding governance changes. The argument also should not be used to oppose useful infrastructure merely because leaving it is costly; dependence can be rational and beneficial.

## Chapter 18 — I Am Original

The revision adds three distinctions: selection is a real contribution without automatically becoming authorship; originality under abundance can be tested by asking what changed because a particular person was present; and cheaper production can coexist with more concentrated competition for attention and distribution.

The U.S. Copyright Office’s 2025 *Copyright and Artificial Intelligence, Part 2: Copyrightability* remains the legal anchor for the narrow U.S. claim that assistive AI use does not automatically defeat copyright while prompting alone does not automatically make generated expressive details human-authored: https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf

Margaret A. Boden, *The Creative Mind: Myths and Mechanisms*, 2nd ed. (2004), remains conceptual background for separating novelty from richer accounts of creativity. The manuscript does not equate copyright authorship with cultural originality and does not claim that the proposed “what changed because this person was here?” test is a legal standard.

The distribution section is intentionally framed as an economic possibility rather than a measured universal effect. Lower production costs can broaden participation. They can also increase the number of competing artifacts faster than human attention grows. Whether this ultimately decentralizes or concentrates cultural reach is an empirical question that can vary by platform, genre, and market.

Falsification pressure: the distribution argument should be weakened if cheaper generative production systematically broadens not only creation but durable discovery and audience reach across previously excluded creators. The selection/authorship distinction should also remain flexible: in some domains, one high-leverage act of selection can be the decisive creative contribution.

## Chapter 19 — I Am Rational

The revision expands bounded rationality into higher-order triage: deciding which decisions deserve deeper analysis. It also makes explicit that error thresholds distribute uncertainty across people, that some commitments function as constraints rather than tradable preferences, and that generated explanations can become post-hoc rationalization rather than evidence of deliberation.

Research anchors remain Herbert A. Simon, “A Behavioral Model of Rational Choice,” *Quarterly Journal of Economics* 69(1), 99–118 (1955), DOI: https://doi.org/10.2307/1884852; Amos Tversky and Daniel Kahneman, “Judgment under Uncertainty: Heuristics and Biases,” *Science* 185(4157), 1124–1131 (1974), DOI: https://doi.org/10.1126/science.185.4157.1124; and Gerd Gigerenzer and Peter M. Todd, *Simple Heuristics That Make Us Smart* (1999), which provides useful counter-pressure against treating heuristics only as defects.

The chapter’s threshold argument is normative: equal aggregate accuracy can coexist with different false-positive and false-negative patterns, and institutions still have to decide which errors are tolerable. The manuscript does not claim that all thresholds are arbitrary or that statistical optimization has no legitimate role in choosing them.

The discussion of generated reasons extends Chapter 6’s caution about introspective explanation. It does not claim that model-assisted explanations are inherently dishonest. They can improve clarity and help surface genuine considerations. The stronger warning is that linguistic quality is weak evidence that a reason actually influenced the decision it now justifies.

Falsification pressure: this section should be weakened if generated explanations are shown, in a given domain, to reliably track the actual causal basis of decisions and to improve counterfactual responsiveness rather than merely produce plausible narratives after the fact.

## Chapter 20 — I Am the Same Person

The revision sharpens the book’s distinction between continuity and authorization. A historical fact about a person can remain true while losing operational authority. A current preference can change without erasing earlier obligations. Multiple personal agents can represent legitimate contexts without any one becoming the canonical person. A posthumous replica can preserve style and records without thereby inheriting the deceased person’s present authority.

The Stanford Encyclopedia of Philosophy entry “Personal Identity,” revised June 30, 2023, remains a scholarly map rather than a resolution of the metaphysical debate: https://plato.stanford.edu/entries/identity-personal/. Derek Parfit, *Reasons and Persons* (1984), remains intellectual background for psychological-continuity and reductionist approaches.

The new material about changing decision capacity, delegated authority, and posthumous replicas is intentionally structural. It does not state a universal legal rule about guardianship, advance directives, estates, agency, or digital replicas. Those rules vary by jurisdiction and context. The manuscript’s narrower design claim is that a system representing a person should distinguish historical identity from current authorization and should make clear whose authority governs the system when the represented person cannot provide new instructions.

Falsification pressure: the chapter’s architecture should be revised if a unified predictive model of a person proves sufficient for safe, legitimate delegation across contexts without explicit distinctions among history, present preferences, commitments, authority, and domain boundaries. The current argument assumes those distinctions will continue to matter because human obligations and permissions do not all decay at the same rate.

## Editorial guardrail

These additions should not turn the book into a universal governance framework. They are pressure tests for four self-stories: control, originality, rationality, and continuity. The central claim remains narrower: human lives contain automation, inheritance, prediction, and inconsistency, but people and institutions still need ways to revise scripts while preserving appropriate responsibility for what those scripts do.