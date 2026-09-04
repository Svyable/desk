# Agency — source registry

Research freeze for this Desk edition: **2026-09-04**.

This registry records the sources used for concrete empirical, historical, and conceptual claims in *Agency*. The manuscript is intentionally written so its core argument does not depend on any one frontier-model score remaining current. Volatile AI measurements are dated and should be refreshed at each future Shelf release.

## S01 — Stanford HAI, 2026 AI Index: Economy

- Publisher: Stanford Institute for Human-Centered Artificial Intelligence
- Work: *The 2026 AI Index Report — Economy*
- URL: https://hai.stanford.edu/ai-index/2026-ai-index-report/economy
- Vintage: 2026 report; accessed 2026-09-04
- Used for: organizational AI adoption; AI-agent deployment remaining early and in single digits across nearly all surveyed business functions; labor-market observations concerning younger workers in exposed occupations.
- Strength: major annual synthesis with transparent source attribution.
- Caveat: adoption surveys and labor-market correlations do not establish that AI alone caused observed employment changes.

## S02 — Stanford HAI, 2026 AI Index: Technical Performance

- Publisher: Stanford Institute for Human-Centered Artificial Intelligence
- Work: *The 2026 AI Index Report — Technical Performance*
- URL: https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance
- Vintage: 2026 report; accessed 2026-09-04
- Used for: jagged capability; benchmark reliability concerns; progress in computer-use agents alongside material failure rates.
- Strength: broad synthesis across benchmarks.
- Caveat: benchmark performance should not be read directly as real-world task automation.

## S03 — METR, Task-Completion Time Horizons

- Publisher: Model Evaluation & Threat Research (METR)
- Work: *Task-Completion Time Horizons of Frontier AI Models*
- URL: https://metr.org/time-horizons/
- Last updated: 2026-05-08; accessed 2026-09-04
- Used for: definition of the 50% and 80% task-completion time horizon; evidence that frontier agents have been succeeding on increasingly long software/ML/cyber tasks.
- Strength: explicit methodology, public task framing, raw-data and code links.
- Caveat: METR stresses that its tasks are cleaner and more software-heavy than most economically valuable jobs; a time horizon is not the literal elapsed time an agent can autonomously work in every domain.

## S04 — Anthropic, agentic coding and expertise

- Publisher: Anthropic
- Work: *Agentic coding and persistent returns to expertise / How Claude Code is used in practice*
- Date: 2026-06-16
- URL: https://www.anthropic.com/research/claude-code-expertise
- Used for: privacy-preserving analysis of roughly 400,000 Claude Code sessions; typical division in which humans made more planning decisions and Claude more execution decisions; association between domain expertise and more work per instruction / higher verified success.
- Strength: large usage dataset with a defined success construct.
- Caveat: provider-authored observational research on users of one product; occupation and expertise are inferred, and causality should not be overstated.

## S05 — Brynjolfsson, Li, Raymond, Generative AI at Work

- Publisher: National Bureau of Economic Research; later *Quarterly Journal of Economics* (2025)
- Work: *Generative AI at Work*
- Working paper: NBER 31161
- URL: https://www.nber.org/papers/w31161
- Original issue date: 2023-04; revision: 2023-11
- Used for: field evidence from 5,179 customer-support agents; approximately 14% average productivity gain and larger gains among novice/low-skill workers in the study.
- Strength: staggered enterprise deployment with worker-level data; subsequently peer-reviewed publication.
- Caveat: one workplace and one class of customer-support work; heterogeneous effects should not be generalized to all occupations.

## S06 — Dell’Acqua et al., jagged technological frontier

- Publisher: Harvard Business School working paper; formally published in *Organization Science* in 2026
- Work: *Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality*
- HBS overview: https://aiinstitute.hbs.edu/navigating-the-jagged-technological-frontier/
- HBS publication PDF: https://www.hbs.edu/ris/Publication%20Files/dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier_5c589c8c-fbb5-458f-b285-c944746cd717.pdf
- Used for: randomized experiment involving 758 BCG consultants; strong gains on tasks deliberately placed inside GPT-4’s frontier and worse performance in a task outside it; centaur/cyborg collaboration patterns.
- Strength: field experiment with real knowledge workers and task-level treatment design.
- Caveat: GPT-4-era findings are historical capability evidence, not a statement about 2026 frontier models.

## S07 — METR, test-passing PRs and maintainer review

- Publisher: METR
- Work: *Many SWE-bench-Passing PRs Would Not Be Merged into Main*
- Date: 2026-03-10
- URL: https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/
- Used for: evidence that roughly half of test-passing SWE-bench Verified AI pull requests in the evaluated sample would not be merged by maintainers after adjustment for reviewer noise; automated grader pass rates were materially higher than maintainer merge decisions.
- Strength: active maintainers, blinded review, explicit limitations and golden-patch baseline.
- Caveat: subset of one benchmark, three repositories, one-shot patches without normal review iteration; not a general estimate of AI coding quality.

## S08 — MIT Sloan, upstream coding productivity and downstream bottlenecks

- Publisher: MIT Sloan School of Management
- Work: *AI boosts worker productivity — but does that translate to final outputs?*
- Author: Brian Eastwood
- Date: 2026-09-02
- URL: https://mitsloan.mit.edu/ideas-made-to-matter/ai-boosts-worker-productivity-does-translate-to-final-outputs
- Used for: summary of research finding large increases in coding activity from autocomplete, synchronous agents, and asynchronous agents, with gains attenuated at downstream human-led stages such as review and launch.
- Strength: directly relevant recent synthesis of software-development evidence.
- Caveat: secondary institutional summary rather than the primary paper in this registry; manuscript uses the result only for the bottleneck-migration point, not a precise forecast of software employment or total productivity.

## S09 — Ronald H. Coase, The Nature of the Firm

- Publisher: *Economica*
- Work: *The Nature of the Firm*
- Date: 1937-11
- DOI: https://doi.org/10.1111/j.1468-0335.1937.tb00002.x
- Used for: transaction-cost explanation of why firms internalize some coordination and use markets for other transactions.
- Strength: foundational economic theory.
- Caveat: the book extends the transaction-cost intuition to agentic coordination as an interpretation, not as a claim made by Coase about AI.

## S10 — Jensen and Meckling, agency costs

- Publisher: *Journal of Financial Economics*
- Work: *Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure*
- Date: 1976
- DOI: https://doi.org/10.1016/0304-405X(76)90026-X
- Used for: historical grounding for principal-agent relationships, delegated control, and agency costs.
- Strength: foundational agency-theory paper.
- Caveat: machine agents have different incentive structures from human managers; the manuscript uses the framework by analogy and explicitly notes the differences.

## S11 — Herbert A. Simon, scarcity of attention

- Work: *Designing Organizations for an Information-Rich World*
- Date: 1971
- Accessible scan: https://gwern.net/doc/design/1971-simon.pdf
- Used for: the proposition that information abundance consumes a scarce complement — recipient attention — and for the manuscript’s extension from abundant information to abundant candidate action.
- Strength: foundational organizational and information-economics argument.
- Caveat: “actions consume governance” is Sven Hardy Benson’s extension, not a quotation or claim attributed to Simon.

## S12 — Lisanne Bainbridge, Ironies of Automation

- Publisher: *Automatica*, Vol. 19, No. 6
- Work: *Ironies of Automation*
- Date: 1983-11
- DOI: https://doi.org/10.1016/0005-1098(83)90046-8
- Used for: historical human-factors observation that automation can leave people responsible for abnormal conditions while reducing the practice and situation awareness needed to handle them.
- Strength: canonical human-factors paper with direct relevance to supervisory automation.
- Caveat: industrial process automation differs from modern language-model agents; the manuscript uses the continuity carefully rather than treating the systems as identical.

## S13 — NIST AI RMF Generative AI Profile

- Publisher: U.S. National Institute of Standards and Technology
- Work: *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1
- Date: 2024-07-26; NIST page updated 2026-04-08
- DOI: https://doi.org/10.6028/NIST.AI.600-1
- URL: https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- Used for: risk-management framing around lifecycle governance, evaluation, organizational context, legal/regulatory requirements, and trustworthiness.
- Strength: public cross-sector risk-management standard.
- Caveat: voluntary framework; it does not validate every governance mechanism proposed in the manuscript.

## Source discipline

- No invented quotations are used in the manuscript.
- Named historical concepts are paraphrased unless a source supports a quotation; the manuscript generally avoids quotation marks for sourced theory.
- Volatile 2026 AI adoption, capability, and labor-market claims are dated or presented as current observations rather than permanent laws.
- Provider research (especially S04) is treated as useful evidence with provider and observational limitations stated.
- Secondary reporting (S08) is used narrowly and should be replaced with the primary research paper at the next major revision if a stable public version is available.
