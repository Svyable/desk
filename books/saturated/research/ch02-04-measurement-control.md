# Part I research controls — Chapters 2–4

This note fixes the evidence boundaries for the remainder of Part I before prose expansion. The three chapters should not collapse into one generic argument that benchmarks are imperfect.

## Chapter 2 — 100 Percent Means Nothing

### Mechanism

The chapter is about **information loss at the top of a scale**, not gaming, contamination, or scaffolding.

Frederic Lord's early ETS work on test theory provides the historical spine. His 1951 research bulletin argued that score distributions depend sharply on the peculiarities and difficulty of the items that compose the test. Later item-response theory made the point more operational: a test does not provide equal information across every ability level. Its information function depends on where its items discriminate.

Samuel Livingston's 2020 ETS introduction to IRT is particularly useful because it states the practical design implication cleanly. A pass/fail test should concentrate information near its cut point. A test intended to distinguish people across a wide ability range needs informative items spread across that range. There is no requirement that every test separate the best performers indefinitely.

That is the counterweight Chapter 2 needs. A ceiling effect is a defect **relative to the decision being made**. If the only decision is whether a minimum competence threshold has been crossed, a test can remain useful after high performers bunch at the top. If the decision is which frontier system is better, the same ceiling can destroy the ranking information buyers and researchers want.

The 2022 *Nature Communications* benchmark study gives the AI-scale context. Ott et al. curated 3,765 benchmarks across computer vision and NLP and found that a large fraction quickly trended toward near-saturation. The authors explicitly warn that near-saturated benchmarks can continue to be used while becoming misleading because real capability progress is no longer reflected well and small remaining differences are harder to establish statistically.

A 2026 preprint, *When AI Benchmarks Plateau*, analyzes 60 LLM benchmarks selected from major developer technical reports and reports that nearly half met its saturation definition, with saturation more common as benchmarks aged. Treat this as current preprint evidence, not a settled population estimate.

OpenAI's GPT-5 system card adds an uncertainty control useful for the final third of the chapter: the authors warn that their bootstrap confidence intervals can be too tight on very small evaluation sets, particularly when per-problem success rates lie near zero or one. This is a reminder that a visually precise leaderboard difference near a ceiling can combine instrument-range loss with ordinary sampling uncertainty.

### Claims to avoid

- Do not say a 100% score is meaningless in every context.
- Do not equate ceiling saturation with generalized mastery.
- Do not imply item-response theory supplies a one-dimensional scientific unit of intelligence.
- Do not treat a current LLM benchmark saturation estimate as representative of all AI evaluation.
- Do not imply that adding harder items automatically preserves construct validity.

## Chapter 3 — The Meter Is Part of the Machine

### Mechanism

The chapter is about **evaluation configuration changing measured performance**.

GDPval is the cleanest contemporary case. The benchmark was built from professional work across 44 occupations and was accepted at ICLR 2026. In its controlled experiments, the authors report that increasing reasoning effort improved performance by up to 4.3 percentage points for o3 and 6.1 percentage points for GPT-5. They also changed the prompt and agent setup: the improved scaffold encouraged explicit deliverable checks, rendered files for inspection, enabled GET requests, and used best-of-four sampling with a GPT-5 judge. These changes improved output quality without requiring the public reader to imagine that the underlying weights had suddenly become a different model.

The GPT-5 system card gives a smaller but unusually concrete configuration sensitivity: OpenAI notes that changing model verbosity can change SWE-bench evaluation performance. The same card describes different cyber evaluation conditions, including a normal condition and a condition that provides a rough plan. Those conditions are intentionally separate because they measure not only whether a model can complete a task but how much assistance is required.

METR's capability-elicitation protocol makes the measurement philosophy explicit. For maximum-capability evaluations, evaluators are advised to test or select the highest-performing model/scaffold versions rather than treating an arbitrary wrapper as the model's capability ceiling. That is appropriate when the measurand is "capability under strong elicitation." It would be inappropriate if a purchaser believed the resulting number represented default product behavior under an ordinary budget.

OpenAI's May 2026 playbook for third-party evaluations states the underlying problem directly: frontier models increasingly use tools and operate in workflows, so measured performance depends on the environment and setup facilitating their actions, not only on the model.

NIST metrology literature supplies a careful analogy. NIST Technical Note 1297 notes that for a measurand defined by a standard measurement method, uncertainty depends partly on how well the method itself has been implemented. Do not stretch this into a claim that AI capability is a physical quantity. Use it to establish the less dramatic point that measurement results belong to procedures.

### Claims to avoid

- Do not call scaffolding "cheating."
- Do not assume a bare-model score is more truthful than a system score.
- Do not compare scores across different harnesses as though only the model changed.
- Do not treat best-of-N or high reasoning effort as representative of ordinary cost or latency.
- Do not imply the model/harness distinction is always clean; product systems increasingly integrate routing, tools, memory, and policies.

## Chapter 4 — Goodhart Gets a GPU

### Mechanism

The chapter is about **control pressure changing the relationship between a metric and its target**.

Goodhart's original setting was monetary policy, not machine learning. His 1975 paper, *Problems of Monetary Management: The U.K. Experience*, observed that statistical relationships used for control tend to break down under the pressure created by that use. The familiar wording "when a measure becomes a target..." is a later popular paraphrase and should not be passed off as Goodhart's original sentence.

Donald Campbell reached a related result from program evaluation and social indicators. His 1976 work is an appropriate primary historical source for the broader problem: consequential quantitative indicators attract pressures that can corrupt the indicator and distort the process it was intended to monitor.

The clean machine-learning bridge is Blum and Hardt's 2015 ICML paper, *The Ladder*. They formalized how repeated adaptive submissions to a public leaderboard can overfit the holdout data that supports the leaderboard. Their proposed leaderboard algorithm deliberately limits what information is released, showing that evaluation design can reduce the control pressure rather than simply lament it.

Education supplies an important real-world pair of cases.

Glewwe, Ilias, and Kremer's randomized teacher-incentive study in Kenya found gains concentrated on exams linked to the reward system, not unrelated exams. Teacher attendance and homework assignment did not improve, while test-preparation sessions increased. That is a strong example of rational effort moving toward the measured target without requiring fraud.

Victor Lavy's 2009 *American Economic Review* study in Israel is necessary counterevidence. Teacher performance pay improved exam participation, pass rates, and scores through changes including teaching methods, after-school teaching, and responsiveness to student needs, and the paper found no evidence of score manipulation. Metrics under pressure do not mechanically become corrupt. Incentives can improve the underlying process when the measure and objective are sufficiently aligned.

The 2022 *Nature Communications* benchmark-saturation paper gives the direct AI connection: benchmarks do not merely observe AI progress; they steer research by conferring recognition on state-of-the-art results. Near saturation can make remaining gains increasingly dependent on optimization for benchmark-specific characteristics that need not generalize.

The conceptual line for the chapter should therefore be precise. Optimization toward a benchmark can represent genuine improvement, narrow teaching-to-the-test behavior, exploitation of quirks, or outright cheating. Those mechanisms have different moral and scientific meanings. Goodhart's lesson is about pressure on the relationship between measure and goal, not a presumption of bad faith.

## Part I continuity

Chapter 1 established that an instrument can age faster than the institution using it.

Chapter 2 asks whether the instrument still has enough **information** in the region where the subject now operates.

Chapter 3 asks what **system configuration** the reported number actually belongs to.

Chapter 4 asks how the number changes behavior once institutions make it consequential.

Only after those distinctions are earned should Part II turn to contamination, online answer keys, grader defects, and evaluation awareness.

## Sources added for this pass

- Frederic M. Lord, *A Theory of Test Scores and Their Relation to the Trait Measured* (ETS, 1951): https://www.ets.org/research/policy_research_reports/publications/report/1951/hnwb.html
- Samuel A. Livingston, *Basic Concepts of Item Response Theory* (ETS, 2020): https://www.ets.org/Media/Research/pdf/RM-20-06.pdf
- Simon Ott et al., *Mapping global dynamics of benchmark creation and saturation in artificial intelligence* (*Nature Communications*, 2022): https://www.nature.com/articles/s41467-022-34591-0
- Mubashara Akhtar et al., *When AI Benchmarks Plateau: A Systematic Study of Benchmark Saturation* (preprint, 2026): https://arxiv.org/abs/2602.16763
- OpenAI, GPT-5 System Card: https://deploymentsafety.openai.com/gpt-5
- Tejal Patwardhan et al., *GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks* (ICLR 2026): https://proceedings.iclr.cc/paper_files/paper/2026/hash/290c2430f91912204f30bbcc990fff1d-Abstract-Conference.html
- GDPval paper, reasoning/scaffolding analysis: https://openreview.net/pdf/7a3fc2da331137539ba9049904aa741270e321ee.pdf
- METR, capability elicitation protocol: https://evaluations.metr.org/elicitation-protocol/
- OpenAI, *A shared playbook for trustworthy third party evaluations* (2026): https://openai.com/index/trustworthy-third-party-evaluations-foundations/
- NIST Technical Note 1297, Appendix D4: https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d4-measurand-defined-measurement-method
- Charles A. E. Goodhart, *Problems of Monetary Management: The U.K. Experience* (1975; later reprinted): https://doi.org/10.1007/978-1-349-17295-5_4
- Donald T. Campbell, *Focal local indicators for social program evaluation* (1976): https://doi.org/10.1007/BF00286305
- Avrim Blum and Moritz Hardt, *The Ladder: A Reliable Leaderboard for Machine Learning Competitions* (ICML 2015): https://proceedings.mlr.press/v37/blum15.html
- Paul Glewwe, Nauman Ilias, and Michael Kremer, *Teacher Incentives* (*AEJ: Applied Economics*, 2010): https://doi.org/10.1257/app.2.3.205
- Victor Lavy, *Performance Pay and Teachers' Effort, Productivity, and Grading Ethics* (*American Economic Review*, 2009): https://doi.org/10.1257/aer.99.5.1979
