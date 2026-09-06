# Augmentation research pass — September 6, 2026

This note supports Chapters 21–24 added during the September 6 augmentation pass. It records primary or near-primary sources, exact use, and the limits that must remain visible in the manuscript.

## A01 — Lean 4.32.1 release notes
- URL: https://lean-lang.org/doc/reference/latest/releases/v4.32.1/
- Date: 2026-07-22.
- Use: first of two July kernel-soundness fixes; the issue could allow a malicious metaprogram in the kernel process to induce acceptance of false theorems.
- Important qualification: Lean's documented Comparator validation workflow was not affected by this particular issue.

## A02 — Lean 4.32.2 release notes
- URL: https://lean-lang.org/doc/reference/latest/releases/v4.32.2/
- Date: 2026-07-28.
- Use: second July soundness fix; a nested-inductive-type issue could allow a malicious metaprogram to trick the kernel into accepting `False` or another theorem.
- Important qualification: Lean explicitly states that this bug could be exploited even when using Comparator. The independently implemented external checker `nanoda` did not share this specific kernel bug, although the release notes also emphasize that external checkers can have their own bugs.

## A03 — Lean, “Validating a Lean Proof”
- URL: https://lean-lang.org/doc/reference/latest/ValidatingProofs/
- Use: canonical current guidance for escalating proof validation. For high-risk or potentially malicious AI-generated proofs, Lean describes a gold-standard workflow involving a trusted theorem statement, sandboxed build, Comparator, and external checkers.
- Key implication: proof validity and theorem meaning are separate verification problems. A correctly checked proof can still prove a statement other than the intended informal target.

## A04 — Lean FRO Year 4 Part 1 roadmap
- URL: https://lean-lang.org/fro/roadmap/y4-1/
- Use: evidence that external checking is moving from specialist practice toward normal workflow. Planned `lake check` and `--paranoid` modes emphasize multiple kernels/checkers and explicit separation between build and verification.
- Important qualification: roadmap items are plans, not completed features unless independently confirmed in a released toolchain.

## A05 — Lean Kernel Arena
- URL: https://arena.lean-lang.org/
- Use: evidence of an emerging ecosystem of independent Lean checker implementations tested against shared good/bad proof objects.
- Implication for *Fluidity*: a high-stakes Millennium proof should be expected to survive heterogeneous checker implementations rather than one official binary.

## A06 — OpenAI, “Ten advances in mathematics and theoretical computer science”
- URL: https://openai.com/index/ten-advances-in-mathematics/
- Date: 2026-08-01.
- Use: comparison point for research discovery rather than known-proof formalization. OpenAI reports ten advances produced by an internal Astra system, followed by human manuscript preparation with the model and Lean certificate generation.
- Important qualification: treat OpenAI's own description as a primary source for what its system did; do not generalize all ten results into broad claims about autonomous mathematical discovery without examining the individual papers and community response.

## A07 — Lean project growth timeline
- URL: https://lean-lang.org/
- Research check: 2026-09-06.
- Use: current ecosystem chronology. The September 2026 entry records Anthropic's FLT formalization and an OpenAI GPT-6 Astra contribution to a stronger prime-gap bound of 186 with Lean formalization. August entries also record OpenAI Lean certificates for research-level mathematics and Anthropic's Riemann-related work.
- Important qualification: this is an ecosystem timeline, not an independent mathematical peer review of every underlying claim.

## A08 — Google DeepMind Formal Conjectures
- URL: https://github.com/google-deepmind/formal_conjectures
- Project page: https://google-deepmind.github.io/formal-conjectures/
- Use: evidence that open mathematical targets are increasingly being represented directly in Lean, providing stable interfaces for automated and human proof research.
- Implication: formalizing the target is itself infrastructure and should precede machine-scale proof search.

## A09 — LeanDojo Millennium Prize Problems
- URL: https://github.com/lean-dojo/LeanMillenniumPrizeProblems
- Use: direct evidence that all seven Millennium Prize Problem statements, including Navier–Stokes, are being represented in Lean. The repository explicitly says it formalizes statements and does not claim solutions; its Navier–Stokes root remains open with a placeholder.
- Important qualification: a community formalization of the Clay statement still requires expert audit of semantic equivalence to the canonical informal formulation.

## A10 — Tau Ceti
- URL: https://github.com/TauCetiProject/TauCeti
- Use: example of an AI-welcome Lean library with human-owned roadmaps/review rubrics and AI implementation/review.
- Implication: the institutional structure of machine mathematics is expanding beyond one-lab, one-model proving systems.

## A11 — `unsorry`
- URL: https://github.com/agenticsnz/unsorry
- Use: example of a distributed autonomous-agent proof swarm using Git as a work queue and Lean's kernel as a merge gate.
- Important qualification: this is evidence for an emerging workflow, not evidence that distributed proof swarms can solve frontier research problems.

## A12 — Clay Mathematics Institute, Navier–Stokes Equation
- URL: https://www.claymath.org/millennium/navier-stokes-equation/
- Research check: 2026-09-06.
- Use: current-status authority. The problem remains listed as unsolved during this augmentation pass.

## A13 — Shahmurov, “Stable Finite-Time Singularity Formation for 3D Navier–Stokes via 5D-Lifted Axisymmetric Reductions”
- URL: https://arxiv.org/abs/2604.09949
- Date: 2026-04.
- Use: claim-watch example of a 2026 preprint presenting a computer-assisted singularity program for the 3D incompressible Navier–Stokes equations.
- Critical qualification: do not describe this as accepted finite-time blowup. Clay still lists the problem as unsolved, and this research pass did not establish broad independent community acceptance of the claimed result.

## A14 — Shahmurov, “Hypothetical Singularity of 3D Navier-Stokes in Clay Institute set up Reduces to Axisymmetric with Swirl class”
- URL: https://arxiv.org/abs/2606.07875
- Date: 2026-06.
- Use: representative current claim/reduction in the live open-problem stream.
- Critical qualification: a reduction or preprint title does not change the accepted status of the Millennium problem.

## Chapter implications

### Chapter 21 — The Second Checker
Primary support: A01–A05, A09.

The strongest claim is that a high-stakes AI-generated proof should be validated using a trusted target plus heterogeneous independent checking rather than relying on a single Lean compilation. This is directly supported by Lean's own 2026 security and validation guidance.

What would make the chapter wrong: a future proof environment could become formally verified down to hardware in a way that makes N-version checking less useful, though independent target validation would still remain necessary.

### Chapter 22 — The Mathematics Race
Primary support: A06–A11 plus Anthropic sources already recorded as S12–S18.

The strongest claim is that machine mathematics is already becoming a multi-lab, multi-tool ecosystem that combines discovery, formalization, target registries and distributed proving.

What would make the chapter wrong: if the 2026 projects remain isolated demonstrations and do not compound into reusable mathematical infrastructure or credible research workflows.

### Chapter 23 — The Claim Storm
Primary support: A12–A14 plus existing Clay rules S01–S03 and open-claim watch.

The strongest claim is not that any particular 2026 preprint is wrong. It is that high-profile open problems already attract mutually incompatible public claims while accepted status remains unchanged, and machine generation can make triage an increasingly serious scientific bottleneck.

What would make the chapter wrong: if automated verification becomes so strong and universally adopted that low-quality frontier claims are rejected at negligible cost before reaching human attention.

### Chapter 24 — The Fluid Institution
Primary support: synthesis of the entire research registry, with particular reliance on S12–S18, S20–S30 and A01–A11.

This chapter is explicitly interpretive. Its claim is institutional: the durable scientific innovation may be the coupling of machine-scale discovery with public formal targets, adversarial search, independent validation and reusable mathematical infrastructure.

What would make the chapter wrong: if major AI-assisted mathematical breakthroughs consistently emerge from single-model, single-pass reasoning without meaningful benefit from tool ecosystems, formal verification, institutional memory or independent reproduction.

## Freshness rule

Re-run the frontier search before any release decision if:

- Clay changes Navier–Stokes status;
- Anthropic, OpenAI, Google DeepMind or an academic group announces a full proposed resolution;
- one of the 2026 regularity/blowup claims gains substantial independent validation or decisive refutation;
- Lean materially changes its recommended verification stack;
- a formal Navier–Stokes project moves from weak existence/statement formalization into a machine-checked global smoothness or blowup theorem.
