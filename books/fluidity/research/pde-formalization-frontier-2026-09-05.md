# PDE formalization frontier — September 5, 2026

This memo updates *Fluidity* on a part of the story that moved faster than the first draft assumed: serious partial differential equations are already becoming machine-checkable at research scale.

The correct conclusion is not that Navier–Stokes is close to being solved. It is that the formal infrastructure problem is becoming less hypothetical.

## Executive finding

By September 2026, four developments materially change the book’s estimate of what a formal Navier–Stokes program would look like.

1. Scott Armstrong and Julia Kempe reported a Lean formalization of the core De Giorgi–Nash–Moser interior regularity theory for uniformly elliptic divergence-form equations. Their April 2026 preprint describes it as the first machine-checked formalization of a major theorem in modern PDE theory.
2. Scott Armstrong and Tuomo Kuusi reported a much larger Lean formalization of contemporary quantitative stochastic homogenization. Armstrong says the development contains roughly 449,000 lines of Lean, was written entirely by LLMs under human supervision, and required substantial PDE, probability and multiscale infrastructure beyond what was already in Mathlib.
3. A public 2026 Lean project maintained by `uda-lab` now claims machine-checked Leray–Hopf weak existence for the three-dimensional incompressible Navier–Stokes equations on both the periodic three-torus and whole space. The project explicitly disclaims smoothness, higher regularity and uniqueness. This is exactly the distinction *Fluidity* needs to keep visible: weak global existence is famous known mathematics; global smoothness for the Clay class remains open.
4. Separate public projects now encode the Millennium problem statements themselves in Lean. In particular, `lean-dojo/LeanMillenniumPrizeProblems` includes a Navier–Stokes root declaration modeled on Fefferman’s Clay formulation and explicitly marks it open. The repository is a formal statement project, not a solution project.

Together these developments move the formalization bottleneck from “can modern PDE even be represented at useful scale?” toward a more precise question: “how much of the particular nonlinear, parabolic and harmonic-analysis infrastructure required by a genuine Navier–Stokes proof can be made reusable before the missing idea is known?”

## 1. De Giorgi–Nash–Moser is a landmark for hard analysis in Lean

Scott Armstrong and Julia Kempe’s April 2026 preprint formalizes the core interior De Giorgi–Nash–Moser theory for uniformly elliptic divergence-form equations with bounded measurable coefficients.

The formalized results include:

- local boundedness for weak subsolutions;
- the weak Harnack inequality for positive weak supersolutions;
- Moser’s Harnack inequality for positive weak solutions;
- interior Hölder regularity.

The authors state that the development required substantial new infrastructure for Sobolev spaces on bounded domains, weak solutions of elliptic equations and quantitative regularity estimates.

This matters for *Fluidity* because these are not isolated algebraic identities. They are the kind of measure-theoretic, weak-solution and iterative regularity arguments that make PDE formalization difficult in practice.

Navier–Stokes is a different equation and its central obstruction is not De Giorgi–Nash–Moser regularity. But the project demonstrates that modern PDE arguments involving weak formulations, Sobolev structure and quantitative regularity can be expressed end to end in Lean at serious scale.

The most important inference is infrastructural, not mathematical:

> The gap between human PDE prose and machine-checkable PDE is no longer obviously too large to cross.

That should change Chapter 12 from a chapter about a hypothetical future library into a chapter about a library frontier already moving.

Primary source:
- Scott Armstrong and Julia Kempe, “Formalization of De Giorgi–Nash–Moser Theory in Lean,” arXiv:2604.05984: https://arxiv.org/abs/2604.05984

## 2. Contemporary research PDE can also be formalized at enormous scale

On June 15, Scott Armstrong reported that he and Tuomo Kuusi had formalized some of the main results of their contemporary quantitative stochastic homogenization work in Lean.

Armstrong’s account is unusually informative about scale and workflow:

- approximately 449,000 lines of Lean;
- built on Mathlib;
- code written entirely by LLMs under the mathematicians’ supervision, primarily GPT-5.5 with Claude Opus 4.6–4.8;
- use of Claude Code and Codex agentic coding tools;
- no custom axioms and no `sorry`, according to the project’s axiom audit;
- exact correspondence maintained between numbered statements in a human manuscript and Lean declarations;
- substantial new background formalization because Mathlib did not already contain everything the proof needed.

The underlying mathematics mixes deterministic elliptic PDE, probability, stationary random fields, concentration / independence structure and a renormalization-style passage across scales. That combination is important because it weakens a common objection: perhaps formalization works only for highly discrete mathematics or classical theorem reconstruction.

The evidence is now more complicated.

Large chunks of contemporary analysis can be autoformalized when expert mathematicians supply the conceptual blueprint and supervise the result.

This does not prove that an autonomous system can invent the blueprint.

That distinction should remain central to *Fluidity*.

The formalization system is proving increasingly capable of turning a known research argument into a machine-checkable object. Navier–Stokes still requires either a new global-control argument, an admissible singularity construction, or an unexpected reduction to something already known.

Source:
- Scott Armstrong, “Formalizing Stochastic Homogenization in Lean,” June 15, 2026: https://www.scottnarmstrong.com/2026/06/formalizing-stochastic-homogenization-in-lean/
- Armstrong and Kuusi’s underlying 2025 Inventiones paper: https://doi.org/10.1007/s00222-025-01370-9

## 3. Leray–Hopf weak existence has a public Lean implementation

A particularly relevant public project is `uda-lab/leray-hopf`.

Its README states that the project formalizes Leray–Hopf weak solution existence for the three-dimensional incompressible Navier–Stokes equations on the unit periodic three-torus and on whole space `R^3`. It provides finite-horizon and global-in-time capstone theorems and reports that the release surface is free of project axioms and `sorry` placeholders, relying only on Lean’s standard foundational axioms.

The project is extremely careful about scope.

It explicitly says it does **not** claim:

- smoothness;
- higher regularity beyond the energy-class properties it encodes;
- uniqueness or non-uniqueness.

That is almost a perfect teaching artifact for Chapter 2 of *Fluidity*.

Leray’s weak existence theorem is one of the foundational successes of twentieth-century Navier–Stokes analysis. Formalizing it does not resolve the Millennium problem because the unresolved issue is whether appropriate smooth solutions persist globally—or, on the negative side, whether admissible smooth data can develop finite-time breakdown in the precise Clay sense.

The value of the project is that it begins to formalize the exact weak-solution landscape from which the regularity problem emerges.

It supplies or requires machine-checked versions of ingredients such as:

- divergence-free `L^2` spaces;
- Galerkin approximation structure;
- weak formulations;
- energy inequalities;
- weak compactness / passage to limits;
- time measurability;
- global-in-time coherence of the weak solution curve.

Those are not the missing Millennium theorem. They are part of the road leading to it.

### Reliability note

This is a public GitHub formalization project, not a peer-reviewed journal result located in this research pass. The manuscript should describe it as a public formalization project and should not use its existence as independent evidence that every theorem encoded there has received the same kind of mathematical community scrutiny as a published research paper.

The project is nonetheless directly inspectable and unusually explicit about its claims, axioms, build surface and limitations.

Source:
- `uda-lab/leray-hopf`: https://github.com/uda-lab/leray-hopf

## 4. The target itself is becoming formal

The `lean-dojo/LeanMillenniumPrizeProblems` repository formalizes the official Clay problem statements in Lean 4 and explicitly says it focuses on statements, not solutions.

Its README lists a Navier–Stokes declaration named `MillenniumNavierStokes.clay_prize_navier_stokes` and marks the problem open. The repository follows the Clay PDFs and includes supporting definitions. It keeps a `sorry` at each problem’s final proof placeholder: the point is to make the target precise and machine-checkable, not to pretend the proof exists.

Google DeepMind’s `formal-conjectures` project also contains a Navier–Stokes Millennium statement, providing another independent attempt to encode the target in Lean.

For *Fluidity*, this changes an important piece of the proposed architecture.

The book originally imagined that a future Anthropic program would have to begin by formalizing the Clay target.

A better 2026 description is:

> Multiple communities are already experimenting with formal target encodings. A serious Navier–Stokes program should not invent its own statement in isolation; it should compare independently produced formalizations and prove equivalence where their modeling choices differ.

That becomes an anti-specification-gaming measure.

Sources:
- `lean-dojo/LeanMillenniumPrizeProblems`: https://github.com/lean-dojo/LeanMillenniumPrizeProblems
- Google DeepMind Formal Conjectures: https://github.com/google-deepmind/formal-conjectures

## 5. What remains missing for the regularity frontier

These developments should not be turned into a fake progress bar.

A formal statement plus formal weak existence does not mean the Clay theorem is “half proved.” The missing logical edge may still contain nearly all the conceptual difficulty.

A positive regularity route could demand deep formal infrastructure in areas such as:

- parabolic regularity in the exact classes used by the proof;
- Calderón–Zygmund / singular-integral theory for pressure;
- Littlewood–Paley decompositions and Besov / critical-space machinery;
- product and commutator estimates;
- local energy inequalities and suitable weak solutions;
- partial regularity theory;
- continuation criteria;
- vorticity and vortex-stretching identities at the right regularity level;
- compactness and concentration arguments;
- profile decompositions or minimal-blowup machinery if the final route needs them;
- exact equivalence between any novel transformed formulation and the canonical Clay target.

A negative blowup route would create a different library burden:

- self-similar or dynamically rescaled equations;
- spectral / linearized operator theory;
- stable and unstable manifolds;
- rigorous numerical enclosures;
- interval arithmetic bridges;
- reconstruction of admissible physical-space initial data;
- proof that the exact Navier–Stokes trajectory reaches the singular regime in finite time.

Formalizing the known spine is therefore a strategic hedge. It prepares the environment for either direction without pretending to know which direction is true.

## 6. LLM autoformalization changes the economics of preparatory work

The Armstrong–Kempe and Armstrong–Kuusi projects support a stronger economic argument than the first draft used.

Historically, a serious PDE formalization program could be rejected simply because the human labor cost was enormous. If LLM agents can generate the bulk of routine Lean code under expert supervision, then pre-formalizing the Navier–Stokes ecosystem becomes much more plausible.

That does not eliminate expert labor. It changes where expert labor sits.

Humans become disproportionately responsible for:

- selecting definitions;
- designing reusable abstractions;
- deciding the right theorem statements;
- catching semantic drift between prose and formal code;
- identifying the actual conceptual bottleneck;
- reviewing imported assumptions and axioms;
- assessing mathematical significance;
- deciding which speculative branches deserve further work.

Machine labor expands the amount of exact mathematical infrastructure that a small expert team can supervise.

This is precisely the complementarity *Fluidity* should emphasize.

## 7. The formalization program should be staged

The research pass suggests a concrete staged program for Chapter 12.

### Stage 0 — Trusted target

Compare at least two formal encodings of Fefferman’s Clay statement. Resolve modeling differences with outside PDE experts. Freeze a canonical challenge statement that proof-generating agents cannot edit.

### Stage 1 — Weak baseline

Reproduce or independently rebuild the Leray–Hopf weak-existence spine in the target library. This creates a green baseline for weak solutions, energy bounds, Galerkin approximation and compactness.

### Stage 2 — Regularity bridge

Formalize local strong existence, weak–strong uniqueness where needed, continuation criteria and selected classical regularity criteria.

### Stage 3 — Modern frontier

Choose the analytical machinery most likely to be reused across candidate strategies: pressure estimates, critical spaces, localization, partial regularity, harmonic-analysis tools and vorticity structure.

### Stage 4 — Negative knowledge

Formalize known no-go results and counterexamples: ruled-out self-similar classes, weak nonuniqueness statements in their exact regimes, averaged-model blowup lessons, scaling obstructions and false endpoint estimates.

### Stage 5 — Candidate-specific bridge

Only after a genuinely new route exists should the project spend heavily formalizing bespoke abstractions needed solely by that route.

This prevents the formalization program from becoming an infinite encyclopedia while still making the known terrain executable.

## 8. A new research metric: distance to a green boundary

The book should avoid “percentage solved.”

A better metric is the shape of the boundary between checked and conjectural mathematics.

Imagine the target theorem as a graph. Large regions underneath it can be green because they are known and formalized. Some nodes are yellow because they are numerical or informal. One or two red nodes may contain the actual unknown.

Progress means making the boundary sharper:

- converting ambient mathematical folklore into reusable lemmas;
- proving equivalence between competing formulations;
- isolating the minimum new lemma that would close a branch;
- killing branches whose decisive lemma is false;
- reducing the amount of unformalized routine mathematics surrounding a candidate breakthrough.

The final unknown may remain just as hard.

But the system becomes less capable of fooling itself about where the difficulty lies.

## 9. Updated Chapter 12 thesis

The first draft treated formal PDE infrastructure as something a future AI lab would need to build.

The 2026 evidence supports a more immediate thesis:

> The formalization of serious PDE has already crossed from isolated experiments into large, LLM-assisted developments. Navier–Stokes weak existence itself now has a public Lean implementation, while the Clay target has multiple formal encodings. The remaining challenge is not whether the language can express fluid analysis. It is whether the research community can formalize enough of the relevant nonlinear and critical regularity theory that a genuinely new idea reaches a narrow, trustworthy boundary instead of disappearing inside thousands of routine formal gaps.

That is a stronger story because it is already underway.

## Falsification and caution

This memo would become misleading if any of the following were shown:

- the cited formal developments rely on hidden project axioms or unchecked gaps inconsistent with their published scope;
- their theorem statements materially misrepresent the human results they claim to formalize;
- the automation techniques fail to transfer from elliptic / homogenization work to the parabolic, vector-valued, nonlinear infrastructure required for Navier–Stokes;
- maintaining hundreds of thousands of generated Lean lines proves more expensive than generating them;
- the eventual Navier–Stokes solution uses concepts so unlike the existing formalized terrain that the preparatory library has little reuse value.

The strongest responsible claim remains architectural, not predictive.

Formal PDE is advancing fast enough that a machine-checkable Navier–Stokes research environment is now a concrete engineering project. A solution is still a mathematics problem.
