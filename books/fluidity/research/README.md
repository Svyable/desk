# Research Brief

## Thesis under test

*Fluidity* asks a deliberately premature question: if a frontier AI laboratory eventually helps resolve the three-dimensional incompressible Navier–Stokes existence-and-smoothness problem, what would the actual path look like?

The book uses Anthropic as the concrete case because, by September 2026, Anthropic had assembled several ingredients that matter for a serious attempt at research mathematics: long-running coding agents, multi-agent collaboration, formal theorem proving in Lean, a scientific workbench with auditable artifacts, and published evidence that Claude can contribute to nontrivial mathematics. On September 4, 2026 Anthropic reported a complete computer-checked formalization of Fermat’s Last Theorem produced largely autonomously by Claude agents. In August 2026 it reported a validated improvement on a longstanding bound related to the Riemann hypothesis. Neither achievement is a solution of Navier–Stokes, and formalizing a known theorem is categorically different from discovering a new proof of an open problem.

The strong version of the book’s thesis is therefore **not** “Anthropic has solved Navier–Stokes.” As of September 5, 2026, the Clay Mathematics Institute still lists the Millennium problem as open.

The thesis worth testing is this:

> The first credible AI-assisted resolution of Navier–Stokes is more likely to emerge from a coupled discovery-and-verification system — numerical search, conjecture generation, adversarial critique, literature retrieval, symbolic analysis, formal proof, and human mathematical judgment — than from a language model simply being asked to produce a proof in prose.

Anthropic is useful as the protagonist because its 2026 research program makes that pipeline unusually concrete. Google DeepMind and academic collaborators are equally important to the story because their work on machine-learning-assisted discovery of unstable singularities in related fluid equations demonstrates a complementary path: use AI not only to manipulate symbols but to search spaces of solutions humans could not efficiently explore by hand.

The book’s original wager is that the decisive object may not be “an AI mathematician.” It may be an **AI mathematical institution**: many specialized agents, formal checkers, high-precision numerical tools, theorem libraries, adversarial reviewers, and human experts coordinated around one stubborn gap.

## Factual boundary

Every chapter must preserve four distinctions.

1. **Numerically solving Navier–Stokes is not solving the Millennium problem.** Engineers solve discretized Navier–Stokes systems every day. The Clay problem concerns global existence and smoothness, or an admissible finite-time breakdown, for the three-dimensional incompressible equations under the stated hypotheses.
2. **A candidate singularity is not a proof of singularity.** Machine learning and high-precision numerics can identify structures worth proving. A Millennium solution requires rigorous mathematics.
3. **A machine-checked formalization is not automatically a novel proof.** Formalizing Fermat’s Last Theorem is a major verification and engineering achievement, but Wiles’s mathematical proof was already known. Discovering a Navier–Stokes argument would require new mathematics unless the open problem yields to a previously overlooked implication of existing work.
4. **A plausible manuscript is not accepted mathematics.** Clay does not accept direct submissions. Its published rules require publication in a qualifying outlet, the passage of at least two years, and general acceptance in the global mathematics community before the Institute considers a proposed solution.

These distinctions are not disclaimers pasted onto an exciting story. They are the story. AI changes the economics of search, formalization, and criticism; it does not repeal the standard of proof.

## Core questions

1. What exactly does the Clay Navier–Stokes problem ask, and why is it different from computational fluid dynamics?
2. Why does three-dimensional vortex stretching create a difficulty absent in the corresponding two-dimensional regularity theory?
3. Which parts of the problem are already understood — weak existence, partial regularity, conditional regularity criteria, small-data regimes — and where is the gap?
4. What did Tao’s averaged Navier–Stokes blowup result teach about which structural properties a positive regularity proof must exploit?
5. What do convex-integration and weak-solution nonuniqueness results teach about the danger of proving the wrong notion of solution?
6. Can modern AI systems discover candidate singular structures or hidden coercive quantities that human analysts have not recognized?
7. Which numerical claims could be upgraded into computer-assisted proofs using interval arithmetic, validated numerics, or other rigorous methods?
8. How much of three-dimensional Navier–Stokes analysis can be formalized in Lean today, and which missing libraries would dominate the effort?
9. Does multi-agent theorem proving materially change the search frontier, or mostly accelerate work after the key human idea is known?
10. What failure modes arise when agents share errors, over-trust generated lemmas, mis-formalize the target, or optimize for a theorem that is subtly weaker than the Clay statement?
11. What role should human mathematicians play when the volume of machine-generated intermediate mathematics exceeds unaided human verification capacity?
12. If an AI-assisted proof survives formal checking, peer review, and community scrutiny, how should credit, authorship, prizes, and scientific responsibility be handled?

## Falsification and counter-evidence

The manuscript should actively look for reasons its forecast could be wrong.

- The key Navier–Stokes insight may require geometric intuition, a new analytical concept, or a representation not readily found by present machine-learning systems.
- Formal theorem proving can verify a proof once a viable route exists without materially helping discover that route.
- Lean formalization of the required PDE, harmonic-analysis, measure-theoretic, and functional-analytic infrastructure may be so expensive that it becomes a bottleneck rather than an accelerator.
- Multi-agent systems can create correlated mistakes. More agents do not create independent evidence if they share the same model, training distribution, prompts, or hidden assumptions.
- Physics-informed neural networks can fit residuals impressively while missing the rigorous estimates needed to establish a theorem.
- A numerically compelling singularity may disappear under higher precision, a wider computational domain, a different gauge, a corrected boundary condition, or rigorous error bounds.
- The eventual solution may come from a human mathematician with little or no AI assistance, making Anthropic historically incidental.
- Another laboratory, an open-source community, or a mathematics institute may develop a better proving stack first.
- The problem may remain open for decades despite rapid progress in AI mathematics.

The book should become more convincing when these possibilities are taken seriously, not less.

## Evidence lanes

### I. The mathematical object

Use the Clay problem statement as the canonical target. Distinguish the whole-space and periodic formulations, smooth divergence-free initial data, pressure, viscosity, and the alternatives of global smoothness or finite-time breakdown. Use modern surveys and original landmark papers to explain Leray weak solutions, Caffarelli–Kohn–Nirenberg partial regularity, Ladyzhenskaya–Prodi–Serrin-type criteria, convex integration, and the supercritical scaling barrier.

### II. What AI has already changed in mathematics

Track Anthropic’s 2026 mathematics work, including the Riemann-zeta bound and the formalization of Fermat’s Last Theorem. Compare it with formal and agentic theorem-proving systems elsewhere. Separate benchmark performance from research contributions and formalization from discovery.

### III. AI in fluid dynamics

Use the DeepMind/Brown/NYU/Stanford collaboration on unstable singularities as the main case. Explain what physics-informed neural networks did, why self-similar coordinates help, what “near machine precision” means, and why the authors still distinguish numerical discovery from rigorous computer-assisted proof. Include the limitations of PINNs and evidence that they can struggle even on standard high-Reynolds-number test problems.

### IV. A credible Anthropic pipeline

Build the speculative part only from demonstrated components: long-running agents, tool use, code execution, multi-agent coordination, reviewer agents, formal verification, retrieval, high-performance computing access, and auditable artifacts. Any proposed “Navier–Stokes stack” should be presented as an engineering and research design, not as an existing Anthropic project unless independently documented.

### V. Scientific acceptance

Use Clay’s rules, peer-review norms, proof-assistant trust models, reproducibility, authorship practice, and the history of failed Millennium-problem claims to explain why the last mile is social as well as formal.

## Chapter-to-evidence map

| Chapter | Primary research question |
|---|---|
| 1 — The Most Useful Unproved Promise | How can equations be indispensable in engineering while their global 3D regularity remains unproved? |
| 2 — What “Solved” Actually Means | What exactly would qualify as a solution to the Clay problem? |
| 3 — The Stretching Term | Why does three-dimensional vorticity create the central analytical danger? |
| 4 — Ninety Years of Near Misses | What has the field proved, and what do failed routes teach? |
| 5 — Claude Enters Mathematics | What changed in 2026 about Anthropic’s demonstrated mathematical capabilities? |
| 6 — A Proof Is Not an Answer | Why must plausible reasoning be separated from formal and social verification? |
| 7 — Many Agents, One Theorem | What did Anthropic’s FLT formalization reveal about multi-agent mathematical work? |
| 8 — The Compiler in the Room | How can Lean change both proof checking and proof search? |
| 9 — Hunting a Singularity | What has machine learning already discovered in related fluid equations? |
| 10 — Search Where Humans Cannot | Which parts of solution space become tractable when machine search is cheap and parallel? |
| 11 — From Numerical Ghost to Rigorous Object | How can a candidate produced by numerics become a theorem? |
| 12 — Formalize the Frontier | What mathematical infrastructure must be made machine-checkable before a full proof can be trusted end to end? |
| 13 — Build the Navier–Stokes Stack | What would a serious Anthropic research system for the problem contain? |
| 14 — The Adversarial Mathematician | How should agents attack each other’s lemmas, definitions, and hidden assumptions? |
| 15 — Failure Is the Dataset | Can failed proof attempts become reusable negative knowledge rather than discarded transcripts? |
| 16 — Six Billion Tokens Later | What does token-intensive formal mathematics imply about scale, cost, and coordination? |
| 17 — If Smoothness Wins | What kinds of new inequalities or structures could plausibly close the regularity gap? |
| 18 — If Blowup Wins | What would a rigorous finite-time singularity route require? |
| 19 — Who Gets the Million Dollars? | How do Clay rules, authorship, and responsibility interact with AI-assisted mathematics? |
| 20 — The Day the Equation Becomes a Theorem | What would change — and what would not — after a genuine resolution? |

## Source discipline

- Prefer the Clay Mathematics Institute for the formal target and prize rules.
- Prefer original papers or publisher pages for mathematical results.
- Prefer Anthropic’s own research posts for claims about Anthropic systems, while treating promotional framing as non-independent evidence.
- Prefer the underlying paper and academic collaborators for fluid-singularity claims, using lab blog posts only for accessible context.
- Date every volatile claim about model capability or open-problem status.
- Never write that Anthropic has solved Navier–Stokes unless and until there is a publicly documented, independently scrutinized solution that satisfies the relevant mathematical standard.
- Never call a small-residual numerical solution a proof.
- Distinguish an informal proof, a proof sketch, a formalization, a computer-assisted proof, and a fully machine-checked proof.
- Preserve counterexamples and negative results that limit a proposed route.
- For every chapter, keep a live question: **What would make this chapter’s strongest claim false?**
