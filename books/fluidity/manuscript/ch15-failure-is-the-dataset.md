# Failure Is the Dataset

Mathematics publishes its winners.

This is sensible until you want to train a machine to do research.

A paper tells you the theorem that survived. It may include a remark explaining why an obvious extension fails. It may mention an earlier strategy. It may preserve a counterexample. But the months of abandoned inequalities, impossible decompositions, misleading numerics, and lemmas that turned out to be irrelevant usually disappear.

The public literature is therefore a biased dataset of mathematical search.

It contains far more examples of routes that worked than routes that competent people tried and rejected.

A student compensates by joining a community. Advisors say, “people tried that.” Seminar speakers explain where the first version broke. Collaborators remember a paper whose published theorem conceals three failed conjectures. Older mathematicians carry the graveyard in their heads.

A language model trained mostly on published text does not automatically inherit the graveyard.

It inherits the survivors and the style in which survivors are described.

This may help explain a common experience with AI-generated research ideas: the model can produce plausible routes at impressive speed, but many are ideas an expert would discard almost immediately. The model has learned what successful arguments look like without having equal exposure to the negative curriculum that teaches experts what not to try.

A Navier–Stokes research institution can fix this locally.

Every failure becomes data.

Not a transcript dumped into storage.

A structured failure.

Claim attempted.

Reason attempted.

Tools used.

Counterexample or obstruction found.

Minimal failed hypothesis.

Known theorem explaining the obstruction.

Scaling diagnosis.

Numerical evidence.

Formal error if relevant.

Closest salvageable statement.

Impacted branches.

Confidence in the diagnosis.

This is the negative theorem graph.

The project should be as proud of it as the positive one.

Why?

Because cheap generation without cumulative failure memory creates loops.

An agent proposes an inequality. Another disproves it. Six months later, a differently worded agent rediscovers the same inequality. Semantic search returns a vague prior transcript but not the structural equivalence. The project pays again.

Scale this to billions of tokens and the waste becomes absurd.

Humans also repeat themselves, but our communities have cultural compression. “That route is supercritical.” “Convex integration kills that weak uniqueness claim.” “The self-similar profile violates finite energy.” A short phrase can transmit the verdict of years.

Machines need to learn those phrases as executable constraints.

If “supercritical” killed the estimate, store the scaling relation and make future variants run through it automatically.

If a family of concentrated fields breaks the inequality, preserve the generator for those fields as a regression test.

If an endpoint embedding fails, link the exact counterexample and the corrected range.

If a proof route accidentally applies to Tao’s averaged equation, encode the reason as an architecture warning.

A useful failure should reduce the size of the future search space.

This is how research compounds.

The principle sounds obvious in machine learning because failed examples are ordinary training data. A classifier learns from what is not a cat. A reinforcement-learning agent gets signal from bad actions. A theorem-search system can learn from proof attempts rejected by a checker.

Research failure is harder because the label is not binary.

A proof can fail because the theorem is false.

It can fail because the proof strategy is weak.

It can fail because the formal library is missing a routine result.

It can fail because the numerical method is unstable.

It can fail because the conjecture is true but irrelevant to the root theorem.

It can fail because a human reviewer does not yet understand a valid argument.

Lumping these together would teach the wrong lesson.

The failure dataset needs diagnosis.

That diagnosis is itself mathematics.

Take a candidate regularity inequality. The counterexample agent produces a sequence of divergence-free fields that appears to violate it as frequency increases. Is the theorem false? Perhaps. Or perhaps the fields do not satisfy a hidden condition the theorem intended. Or the numerical evaluation of one norm is under-resolved. Or the constant is larger than expected but finite.

A failure only becomes reusable when the reason is trusted.

This suggests a hierarchy of negative evidence.

At the bottom: heuristic concern.

“This looks supercritical.”

Next: numerical stress failure.

“Optimized examples cause the ratio to grow through all tested scales.”

Next: explicit counterexample with analytic calculation.

Next: formal proof of the counterexample.

Next: general no-go theorem covering a family of strategies.

The system should record the level rather than flattening everything into “bad idea.”

That matters because heuristics can be wrong.

Some of the most important mathematics overcomes what looked like a scaling barrier by exploiting structure invisible to crude counting. A candidate should not be permanently buried because an early reviewer says, “this smells impossible.” The failure memory must preserve reversibility.

If a branch was stopped on heuristic grounds, future evidence can reopen it.

If a theorem is formally disproved under exact hypotheses, reopening requires changing the hypotheses.

This is epistemic version control.

The analogy to software is again useful. A test suite prevents a fixed bug from returning. Version control preserves why a change was made. Issue trackers record rejected approaches. Mature engineering organizations do not rely on the memory of whoever happens to be in the room.

Mathematics research often does.

An AI institution cannot afford to because agents have shallow continuity unless continuity is built explicitly.

The negative dataset should also capture failed *representations*.

Suppose a promising quantity looks nearly monotone in physical space, but formal differentiation always produces an uncontrollable pressure term. Record the obstruction. A future agent may discover that the same quantity plus a nonlocal correction cancels pressure. The old failure then becomes the clue.

Suppose a self-similar ansatz produces no finite-energy profiles under one scaling. Record which integrability condition fails. A different scaling may repair it.

Suppose a numerical method cannot resolve a candidate beyond a certain concentration because the condition number explodes. Record the spectral signature. A later interval method may handle it.

Failure data is not merely “do not return.”

It is a contour map of the obstacle.

This idea becomes more powerful when agents can cluster failures across branches.

Imagine the system notices that seventy-four unrelated proof attempts ultimately die at the same endpoint estimate. The papers and notation differ, but the structural failure is identical.

That is a research result.

The project has discovered a bottleneck not by proving a theorem but by mining its own graveyard.

Now resources can move toward the endpoint specifically. Search neighboring fields for techniques that cross similar boundaries. Optimize examples to understand extremal geometry. Ask whether a logarithmic correction is possible. Formalize the exact no-go statement. Invite human experts whose work touches that endpoint.

The failure cluster becomes a program.

This is the opposite of how generative AI is usually marketed.

The sales pitch emphasizes output.

Research value may come from compression of rejection.

The machine can afford to fail at extraordinary scale if it becomes increasingly sophisticated about why.

This gives a new meaning to Anthropic’s billion-token mathematics experiments.

A huge fraction of generated tokens in formal proof work are failed attempts. Compiler errors. Dead ends. Wrong theorem names. Strategies that do not close. If those failures are discarded after the proof succeeds, the system captures only the expensive final artifact.

If they are distilled into training signal and reusable search constraints, the cost buys a better future researcher.

The distinction matters economically.

Imagine spending ten million dollars of compute on Navier–Stokes and producing no new theorem. That sounds like failure.

What if the run formally rules out twelve broad proof architectures, produces a public PDE library, discovers three sharp counterexamples, identifies one previously unnoticed equivalence among regularity criteria, and trains a theorem-search system that becomes dramatically better at nonlinear analysis?

Still no Millennium prize.

Not nothing.

A serious research program needs a portfolio of outputs so the grand problem does not become a casino chip.

This is how human institutes survive famous problems. A group studying Navier–Stokes produces partial regularity, numerical methods, related equations, harmonic analysis, turbulence theory, functional inequalities, and students. The unsolved problem organizes inquiry without being the sole measure of value.

An AI lab should copy that maturity.

The system should publish negative results when they are mathematically meaningful.

If a machine search finds a surprisingly simple counterexample to a plausible inequality used informally in the literature, publish it.

If a formalization reveals that two claimed criteria are not equivalent without an extra hypothesis, publish the correction.

If extensive high-precision search rules out a family of candidate profiles under explicit conditions, turn the computation into a rigorous theorem where possible.

Failed routes become science when their failure is generalizable.

There is also a safety benefit in the ordinary sense of scientific reputation.

A lab that preserves failure internally is less likely to confuse repeated excitement with independent evidence.

Suppose three different teams announce they have found a promising blowup scenario. The failure database reveals that all three rely on variants of a profile class already killed by the same tail integrability condition. Without structured memory, the organization might experience three waves of excitement. With it, the system recognizes one old mistake wearing new clothes.

This matters because humans are vulnerable to narrative reset.

New model version, new team, new plot, new confidence.

The theorem is unimpressed.

The failure dataset anchors the institution to cumulative reality.

I would go further and expose parts of the negative dataset publicly.

This will feel unnatural to companies. Failed internal ideas are usually hidden because they reveal strategy, waste, and embarrassing mistakes. A public Millennium effort has different incentives. If the objective is to advance mathematics and earn trust, publishing meaningful dead ends can prevent the global community from duplicating them and invite outsiders to find weaknesses in the diagnosis.

Not every transcript belongs online. Most are noise and may contain private material. The unit of publication should be distilled failure objects: conjecture, test, counterexample, explanation, status.

A public “graveyard of routes” could become one of the most valuable artifacts in the project.

Researchers would disagree with it.

Excellent.

A mathematician might say the system’s counterexample only defeats a crude version of the idea. Another may recognize a structural modification that escapes. The supposed tombstone becomes a signpost.

Failure should remain contestable.

The machine must also learn not to overfit to its own graveyard.

This is subtle.

If every future agent is aggressively trained to avoid past failure patterns, the system can become conservative. It learns that ambitious inequalities usually fail and stops proposing them. It learns that self-similar blowup routes have many obstructions and abandons them. It optimizes for safe, incremental theorems because they produce fewer negative labels.

Human researchers know that sometimes you revisit a dead idea with a new tool.

The failure database should guide search, not prohibit imagination.

One way is to distinguish exact refutations from strategic discouragement. Another is to allow “reopen with new mechanism” tasks that explicitly ask agents to revisit famous failures under changed assumptions or techniques.

A third is to maintain exploration budgets that ignore expected success.

Spend some compute on unreasonable ideas precisely because reasonable ones have had ninety years.

The filters come afterward.

This balance—wild generation, severe testing, durable memory—is the research culture I think AI makes possible.

It is more interesting than the fantasy of a perfectly rational machine mathematician.

Perfect rationality would be a terrible search strategy in a field where nobody knows which strange idea is worth pursuing.

We need machines willing to be wrong.

We need institutions unwilling to forget why.

Navier–Stokes has already been teaching humans this lesson for almost a century.

The next researcher may simply fail faster.

If it keeps the receipts, that could be progress.
