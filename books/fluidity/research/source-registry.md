# Source Registry

Research cutoff for the first complete draft: **2026-09-05**.

The registry separates the canonical mathematical target, primary mathematical literature, contemporary AI-mathematics evidence, AI-for-fluids evidence, and verification/governance sources. URLs are recorded for auditability; the manuscript should paraphrase rather than lift source language.

## Canonical target and prize process

### S01 — Clay Mathematics Institute, Navier–Stokes Equation
- URL: https://www.claymath.org/millennium/navier-stokes-equation/
- Use: canonical current-status page and public description of the Millennium problem.
- Reliability: primary institutional source.
- Draft implication: as of the research cutoff, the problem remains open.

### S02 — Charles L. Fefferman, “Existence and Smoothness of the Navier–Stokes Equation”
- URL: https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf
- Use: official mathematical formulation, acceptable solution alternatives, hypotheses, notation.
- Reliability: canonical Clay problem description.

### S03 — Clay Mathematics Institute, Rules for the Millennium Prize Problems
- URL: https://www.claymath.org/millennium-problems/rules/
- Use: qualifying publication, two-year interval, general acceptance, CMI evaluation process.
- Reliability: primary institutional source.
- Falsification note: a machine-checked proof does not by itself trigger a prize.

## Mathematical foundations and barriers

### S04 — Jean Leray’s 1934 Navier–Stokes work, modern review
- URL: https://www.cambridge.org/core/books/abs/partial-differential-equations-in-fluid-mechanics/lerays-fundamental-work-on-the-navierstokes-equations-a-modern-review-of-sur-le-mouvement-dun-liquide-visqueux-emplissant-lespace/1E9DD5959AC26A2C1EE10CE5A9200CA7
- Use: global weak existence, local strong solutions, weak–strong uniqueness, historical framing.
- Reliability: scholarly review of foundational work.

### S05 — Caffarelli, Kohn & Nirenberg, “Partial regularity of suitable weak solutions of the Navier–Stokes equations”
- URL: https://doi.org/10.1002/cpa.3160350604
- Use: partial regularity; singular set is highly constrained even though global smoothness is unknown.
- Reliability: landmark peer-reviewed paper.

### S06 — Buckmaster & Vicol, “Nonuniqueness of weak solutions to the Navier–Stokes equation”
- URL: https://annals.math.princeton.edu/2019/189-1/p03
- Use: weak solutions can be nonunique in the class studied; emphasizes that the notion of solution matters.
- Reliability: Annals of Mathematics.

### S07 — Terence Tao, “Finite time blowup for an averaged three-dimensional Navier–Stokes equation”
- URL: https://arxiv.org/abs/1402.0290
- Use: demonstrates that energy identity plus broad harmonic-analysis structure is insufficient for a positive resolution; any regularity proof must exploit finer structure of the true nonlinearity.
- Reliability: research paper by leading analyst; use the paper’s precise averaged-equation scope.

### S08 — Lei & Ren, “Quantitative partial regularity of the Navier–Stokes equations and applications”
- URL: https://doi.org/10.1016/j.aim.2024.109654
- Use: recent quantitative refinements of partial regularity and the continuing technical frontier.
- Reliability: Advances in Mathematics, 2024.

### S09 — Balakrishna & Biswas, “Determining functionals and data assimilation and a novel regularity criterion for the three-dimensional Navier–Stokes equations”
- URL: https://link.springer.com/article/10.1007/s40687-025-00530-w
- Use: recent regularity criterion connected to finitely many observations; useful bridge between analysis, data, and observability.
- Reliability: peer-reviewed open-access paper, 2025.

### S10 — Wu, “Remarks on Navier–Stokes regularity criteria in Vishik-type spaces”
- URL: https://doi.org/10.1016/j.aml.2025.109506
- Use: recent example of active work on extension/regularity criteria.
- Reliability: peer-reviewed, 2025.

### S11 — localized Ladyzhenskaya–Prodi–Serrin-type regularity criterion
- URL: https://doi.org/10.1016/j.jde.2024.09.028
- Use: representative modern work on localizing classical regularity criteria.
- Reliability: Journal of Differential Equations, 2025.

## Anthropic and AI mathematics

### S12 — Anthropic, “Formalizing Fermat’s Last Theorem”
- URL: https://www.anthropic.com/research/formalizing-fermats-last-theorem
- Date: 2026-09-04.
- Use: first complete computer-checked formalization reported by Anthropic; multi-agent Claude/Lean workflow; Prove2Me DAG; scale of the formalization; distinction between formalizing known mathematics and novel discovery.
- Reliability: primary source for Anthropic’s own project. Technical claims should be attributed to Anthropic unless independently verified.

### S13 — Anthropic, “Learning more about Claude’s mathematical capabilities”
- URL: https://www.anthropic.com/research/riemann-zeta
- Date: 2026-08-10.
- Use: Claude attempt at the Riemann hypothesis led to a validated improvement on a related lower bound; evidence that exploratory model work can produce novel mathematics without solving the headline problem.
- Reliability: primary Anthropic source; note in-text validation by mathematicians and avoid inflating it into a Riemann-hypothesis solution.

### S14 — Anthropic, Claude Science
- URL: https://www.anthropic.com/news/claude-science-ai-workbench
- Date: 2026-06-30.
- Use: auditable scientific artifacts, access to scientific tools and computing, coordinating/reviewer agents.
- Reliability: primary product/research announcement.

### S15 — Anthropic, “Trustworthy agents in practice”
- URL: https://www.anthropic.com/research/trustworthy-agents
- Date: 2026-04-09.
- Use: governance and failure modes of autonomous agents; why scientific agents need inspectability and bounded actions.
- Reliability: primary Anthropic research source.

### S16 — Anthropic, “A global workspace in language models”
- URL: https://www.anthropic.com/research/global-workspace
- Date: 2026-07-06.
- Use: background on internal model organization only where relevant; not evidence of mathematical truth.
- Reliability: primary research report; avoid anthropomorphic overreach.

### S17 — Anthropic Science index
- URL: https://www.anthropic.com/science
- Use: chronology of Anthropic’s science program and related publications.
- Reliability: primary index, volatile.

### S18 — Sosso, Arora & Spitters, “Agentic Proving for Program Verification”
- URL: https://arxiv.org/abs/2605.23772
- Date: 2026-05.
- Use: external evidence about Claude Code in an agentic proving framework and tight checker-in-the-loop workflows.
- Reliability: preprint; useful independent evidence with benchmark limitations stated.

### S19 — Google DeepMind, AlphaProof / IMO silver-medal result
- URL: https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/
- Use: comparison point for formal-language theorem proving and reinforcement-learning-guided search.
- Reliability: primary lab source for its system; benchmark context only.

## AI, numerics, and fluid singularities

### S20 — Google DeepMind, “Discovering new solutions to century-old problems in fluid dynamics”
- URL: https://deepmind.google/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/
- Date: 2025-09-18.
- Use: discovery of new unstable singularities in related fluid equations using specialized PINNs and high-precision optimization; motivation for AI-assisted candidate discovery.
- Reliability: primary lab account; pair with academic presentations/paper when making technical claims.

### S21 — Brown University, “How Javier Gómez-Serrano is using AI to solve the most elusive question in math”
- URL: https://www.brown.edu/news/2026-08-26/javier-gomez-serrano-lab
- Date: 2026-08-26.
- Use: current description of ongoing attempt to use AI methods in the neighborhood of Navier–Stokes; explicit statement that the Millennium problem is not yet solved.
- Reliability: university profile/interview; quote sparingly or paraphrase.

### S22 — NASA Advanced Modeling and Simulation seminar, “Discovery of Unstable Singularities”
- URL: https://www.nas.nasa.gov/pubs/ams/2026/03-05-26.html
- Date: 2026-03-05.
- Use: technical abstract on PINNs, Gauss–Newton optimization, near double-precision residuals, and potential computer-assisted proof pathway.
- Reliability: academic seminar abstract.

### S23 — Princeton analysis seminar, “Discovery of unstable singularities”
- URL: https://www.math.princeton.edu/events/discovery-unstable-singularities-2025-11-10t200000
- Date: 2025-11-10.
- Use: independent academic venue confirming scope and collaborator list.
- Reliability: university seminar record.

### S24 — Tom Hou, “Recent progress on potential singularity of the 3D Navier–Stokes equation and related models”
- URL: https://berkeleyams.lbl.gov/spring25/hou.html
- Date: 2025-04-02.
- Use: numerical evidence around potentially singular 3D Navier–Stokes behavior and relationship to rigorous computer-assisted Euler work; evidence that non-ML numerical singularity hunting is already sophisticated.
- Reliability: university/lab seminar abstract; not a proof of Navier–Stokes blowup.

### S25 — “Reliable physics-informed neural networks for Navier–Stokes simulations. Can we trust AI-generated numerical simulations?”
- URL: https://doi.org/10.1016/j.jocs.2026.102817
- Date: 2026-04.
- Use: counter-evidence; PINNs can struggle on the standard lid-driven cavity problem, especially at high Reynolds number.
- Reliability: peer-reviewed Journal of Computational Science.

### S26 — “Using Physics-Informed neural networks for solving Navier–Stokes equations in fluid dynamic complex scenarios”
- URL: https://doi.org/10.1016/j.engappai.2025.110347
- Date: 2025.
- Use: representative positive evidence for PINNs as approximate engineering solvers; contrast with the much higher bar of the Clay problem.
- Reliability: peer-reviewed, open access.

### S27 — “Can foundation language models predict fluid dynamics?”
- URL: https://doi.org/10.1016/j.engappai.2025.111427
- Date: 2025.
- Use: evidence that general foundation-model representations can be adapted to fluid-dynamics benchmarks; do not confuse prediction with theorem proving.
- Reliability: peer-reviewed.

## Formal proof, verification, and scientific acceptance

### S28 — Lean theorem prover
- URL: https://lean-lang.org/
- Use: background on proof checking and the trusted kernel model.
- Reliability: official project site.

### S29 — Mathlib
- URL: https://mathlib.org/
- Use: community mathematical library on which formalizations depend; useful for discussing missing PDE/analysis infrastructure.
- Reliability: official project site.

### S30 — National Academies workshop, “Artificial Intelligence to Assist Mathematical Reasoning”
- URL: https://www.nationalacademies.org/read/27241/chapter/6
- Use: broader institutional context on AI, computer-assisted proofs, and Gómez-Serrano’s fluid-mechanics work.
- Reliability: National Academies workshop proceedings.

## Watch list — do not treat as established resolution

### W01 — public claims of AI-assisted Navier–Stokes proofs
- Example: https://github.com/vporton/navier-stokes
- Use: only as an example of why plausible-looking AI-assisted proof claims require independent scrutiny, formal target checking, publication, and community acceptance.
- Reliability: self-published claim; **not evidence that the Millennium problem is solved**.

### W02 — navier-stokes.org status/progress tracker
- URL: https://navier-stokes.org/progress/
- Use: orientation and recent bibliography discovery only; verify substantive mathematical claims against primary literature.
- Reliability: secondary.

## What would change the book immediately?

The first edition must be re-researched before publication if any of the following occurs after the cutoff:

- Clay changes the official problem status.
- Anthropic, DeepMind, an academic team, or another lab publishes a proposed full solution.
- a claimed solution receives substantial independent expert validation or a decisive refutation.
- a major new computer-assisted singularity result materially narrows the 3D Navier–Stokes target.
- Anthropic releases a dedicated mathematics or PDE system that changes the speculative architecture described in the book.
