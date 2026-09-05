# Chapter–Source Map

This map is an editorial audit trail, not a substitute for reading the sources. Source IDs refer to `source-registry.md`.

| Chapter | Primary sources | Claims to protect | What would make the framing false? |
|---|---|---|---|
| 1 — The Most Useful Unproved Promise | S01, S02, S04, S26 | Navier–Stokes is operationally indispensable while the global 3D smoothness question remains open. Numerical/engineering solution is distinct from Millennium resolution. | Clay closes the problem before publication, or the text conflates numerical approximation with global regularity. |
| 2 — What “Solved” Actually Means | S02, S03 | The target, permissible alternatives, and prize process are precise. | The book states an incomplete theorem target or implies CMI accepts direct submissions. |
| 3 — The Stretching Term | S02, S05, S07 | 3D vortex stretching and supercriticality are central to the difficulty; broad energy control does not close the problem. | A claim attributes the entire open problem to one term without qualification or misstates the vorticity equation. |
| 4 — Ninety Years of Near Misses | S04–S11 | Weak existence, partial regularity, conditional criteria, nonuniqueness in weak classes, and structural barriers define a rich but incomplete theory. | The narrative calls these results “failures” rather than progress or erases important hypotheses. |
| 5 — Claude Enters Mathematics | S12, S13, S17, S18 | Anthropic demonstrated major formalization and a novel related mathematical result in 2026, but did not solve Navier–Stokes. | Anthropic’s reported results are materially corrected, withdrawn, or misrepresented as headline-problem solutions. |
| 6 — A Proof Is Not an Answer | S03, S12, S18, S28 | Plausible prose, checked code, formal proof terms, publication, and community acceptance are different layers of trust. | The book treats formal verification as infallible or ignores target-specification risk. |
| 7 — Many Agents, One Theorem | S12, S14, S15 | Multi-agent coordination, DAG decomposition, reuse, and reviewer roles can change the throughput of formal mathematics. | The FLT workflow is described as novel-proof discovery rather than formalization of known mathematics. |
| 8 — The Compiler in the Room | S12, S18, S28, S29 | Checker-in-the-loop work can turn errors into immediate feedback and make proof search more disciplined. | Lean’s role is described as an oracle rather than a verifier relative to a formal statement and trusted base. |
| 9 — Hunting a Singularity | S20–S24 | AI/high-precision numerics have discovered singular structures in related fluid equations and are being aimed toward Navier–Stokes. | The book says a Navier–Stokes singularity has been found when the cited work does not establish one. |
| 10 — Search Where Humans Cannot | S20, S22, S24, S25 | Parallel machine search expands candidate exploration but remains vulnerable to numerical and modeling failure. | Search breadth is presented as evidence of correctness. |
| 11 — From Numerical Ghost to Rigorous Object | S20, S22, S24, S25 | A credible path from candidate to theorem requires validated numerics/analysis and explicit error control. | Near-machine residual is equated with proof. |
| 12 — Formalize the Frontier | S12, S28, S29, S04–S11 | End-to-end formalization would require substantial PDE, functional-analysis, measure, and inequality infrastructure. | The book claims this infrastructure already exists in sufficient form without verification. |
| 13 — Build the Navier–Stokes Stack | S12–S15, S20, S22, S28, S29 | A proposed Anthropic stack can be assembled conceptually from demonstrated components. | Any speculative component is presented as an existing Anthropic project. |
| 14 — The Adversarial Mathematician | S15, S18, S03 | Independent attack, target checking, counterexample search, and definition audits are necessary because agent errors can correlate. | “Debate” is treated as a substitute for proof checking. |
| 15 — Failure Is the Dataset | S07, S12, S18 | Failed routes can constrain future search when recorded as machine-readable dependencies and counterexamples. | The text implies failed attempts are automatically useful without diagnosis or verification. |
| 16 — Six Billion Tokens Later | S12, S14 | Anthropic reported a very large token budget for FLT formalization; scale changes the economics and organization of math work. | Token figures are repeated without attribution, or cost is invented from token count. |
| 17 — If Smoothness Wins | S05, S07–S11 | A positive result likely needs new control exploiting exact Navier–Stokes structure beyond generic energy estimates. | The chapter presents its candidate mechanisms as established theorems. |
| 18 — If Blowup Wins | S02, S20–S25 | A negative result requires admissible smooth data and rigorous finite-time breakdown under the Clay formulation. | Numerically sharp growth is labeled blowup without rigorous validation. |
| 19 — Who Gets the Million Dollars? | S03, S12, S28 | Prize qualification is institutionally governed; AI involvement complicates credit but does not change the mathematical standard. | The chapter predicts a specific award recipient as fact or ignores Clay’s discretion and rules. |
| 20 — The Day the Equation Becomes a Theorem | S01–S03, S12, S20 | A genuine resolution would close a foundational question but would not eliminate turbulence, CFD approximation, or empirical fluid science. | The ending claims all fluid dynamics becomes “solved.” |

## Cross-chapter red lines

- Never write “Anthropic solved Navier–Stokes” in factual past tense unless the source registry is updated with independent, primary evidence of an accepted solution.
- Never use “solved the equations” without specifying whether the meaning is numerical approximation, a special-case analytic solution, or the Millennium regularity problem.
- Never describe an AI-generated theorem statement as equivalent to the Clay target until a human/formal comparator has checked the statement.
- Never infer proof from low residual, impressive plots, benchmark performance, model confidence, or the number of agents agreeing.
- Never invent dialogue, private Anthropic plans, internal model thoughts, or conversations with named mathematicians.
- Date claims about model versions, product capabilities, and open-problem status.
