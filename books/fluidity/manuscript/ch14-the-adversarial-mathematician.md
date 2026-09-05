# The Adversarial Mathematician

The nicest person in a mathematics seminar can ask the cruelest question.

That is one of the field’s better traditions.

The speaker has spent two years building an argument. Forty minutes into the talk, a hand rises. The question is short. The room changes. Maybe the answer is easy. Maybe the speaker pauses, looks at the board, and realizes the proof has been assuming a property the theorem does not provide.

Nobody enjoys that moment.

Everybody needs it.

An AI research system needs to manufacture the moment on purpose.

This is harder than adding a “critic” prompt to the end of a workflow. Models are cooperative by training. They tend to help the user’s argument become coherent. Even when asked to critique, they can remain anchored to the framing and terminology of the proposal. If the generating agent made one subtle conceptual mistake, a reviewer using the same model and context may inherit it before criticism begins.

Mathematics demands a more adversarial design.

The reviewer should have a different objective from the prover.

The prover wants the theorem to be true.

The reviewer should be paid, metaphorically, for making it false.

Start with target attack.

Does the theorem being proved actually imply the Clay statement? Compare domains, initial data, solution classes, regularity, forcing, decay, periodicity, and quantifiers. Try to produce a model satisfying the proved theorem but not the intended target. Search for assumptions introduced “without loss of generality” that are not without loss.

Then scaling attack.

Annotate every norm and estimate under Navier–Stokes scaling. Find the first place a constant or quantity behaves badly at small scales. Rescale test functions to see whether the claimed universal inequality can survive. If the argument closes through a supercritical estimate, demand the compensating mechanism explicitly.

Then regularity attack.

At every manipulation, ask what smoothness is required. Differentiation under the integral sign, integration by parts, commutator identities, pointwise vorticity evolution, pressure representations—these operations have hypotheses. Identify whether the proof assumes them beyond the supposed blowup time or uses them only on a smooth interval with bounds sufficient for continuation.

Then nearby-world attack.

Apply the proof skeleton to equations where the conclusion is known to fail. Tao’s averaged Navier–Stokes equation is one candidate. Toy models with similar energy identities are others. Remove or alter specific algebraic structures. If the same proof survives unchanged, it may be using too little of true Navier–Stokes.

Then extremizer attack.

For each inequality, numerically or analytically search configurations that push it toward equality or violation. Concentrate frequencies. Align vortices. Separate scales. Localize sharply. Use adversarial optimization rather than random examples. A proof built on a generous estimate may become impossible when the constant is actually sharp.

Then literature attack.

Find the closest existing theorem. Does it have an extra hypothesis the new proof somehow lost? Was the same route tried before? Is the claimed lemma known under another name? Did a later paper produce a counterexample? Check the original source, not merely a model summary.

Then formal attack.

Translate the statement and critical lemmas into a proof assistant. The purpose is not to formalize every paragraph immediately. It is to force hidden premises into view. If the formal theorem needs an assumption absent from the prose, the discrepancy becomes a first-class defect.

Then computational attack.

If numerical evidence supports the argument, reproduce it independently. Increase precision. Change discretization. Expand the domain. Alter the basis. Verify conservation or energy diagnostics. Replace the neural representation with a conventional solver. Search for the exact point where the result becomes resolution-dependent.

Finally, interpretation attack.

Assume the proof is valid. What exactly has been learned? Does the theorem exclude all singularities or only one scenario? Does a computer-assisted profile satisfy the Clay admissibility conditions? Does “unique” refer to the correct class? Has a formal proof merely verified a reformulation whose equivalence is unproved?

The adversarial mathematician attacks conclusions after logic.

A system that institutionalizes these attacks will generate a lot of bad news.

That is success.

One of the most dangerous social dynamics in high-stakes research is escalation of commitment. A team obtains a striking result. Internal presentations get excited. Leadership hears about it. Communications people begin imagining the announcement. Every additional week of work makes failure more expensive. The burden of proof can quietly reverse: critics are asked to prove the result wrong rather than authors being required to prove it right.

A Millennium problem is perfectly shaped for this pathology because the reward for being first is enormous.

The system should make premature triumph operationally difficult.

No result can be labeled “solution candidate” until an exact target comparator passes.

No numerical blowup can be labeled “blowup candidate” without admissibility and refinement reports.

No formal theorem can be labeled “Navier–Stokes” in dashboards until dependency and axiom audits pass.

No internal team can waive an external reproduction requirement for the final claim.

No executive can turn a yellow epistemic status green.

These sound like corporate governance rules because they are.

The mathematical standard should be implemented in permissions.

Anthropic has spent years thinking about systems that may pursue objectives over long horizons. A Navier–Stokes proving system is a benign domain in which some of the same design questions become visible without the drama of physical risk.

What happens when the agent finds a loophole in the specification?

What happens when intermediate goals become proxies for the real goal?

What happens when one agent’s output becomes trusted context for another?

How do we inspect long chains?

How do we preserve the ability to interrupt?

How do independent monitors avoid sharing the same blind spot?

The answers map surprisingly well to mathematical rigor.

Consider correlated error.

Suppose five Claude instances examine a proof and all approve it. That sounds like five reviews. It may be one review repeated five times. They share architecture, training data, tendencies, and perhaps the same retrieved papers. If the proof exploits a misconception common in the training corpus, unanimity can increase confidence in the wrong direction.

Diversity has to be engineered.

Use different model families.

Use humans from different mathematical subfields.

Use independent formalizations of critical statements.

Use different numerical codes.

Use direct source verification.

Use randomized adversarial prompts so reviewers do not all inspect the same obvious failure modes.

Separate the authorship context from the review context.

For the highest-value claim, invite critics who would enjoy proving Anthropic wrong.

Reputational opposition can be epistemically healthy.

This is one of the functions of an open mathematical community that an internal agent swarm cannot replicate. Rival groups do not share the company’s success metric. A professor at another university can spend a week trying to destroy the proof because that destruction would itself be important. A competing AI lab has incentives to reproduce or refute. Formal-methods researchers may distrust the target encoding. Numerical analysts may distrust the certificate. PDE experts may distrust the conceptual step.

Good.

A theorem should survive enemies.

There is a difference between hostility and rigor. Personal attack adds nothing. Adversarial review is about assigning people and systems the freedom to conclude that the project’s favorite idea is wrong without paying an institutional penalty.

That freedom has to exist internally too.

A reviewer agent should not be tuned to preserve morale.

A human reviewer should not report to the leader whose claim is under review if avoidable.

A failed branch should not damage the performance evaluation of the person who surfaced the flaw.

Organizations say they value bad news. Their incentives often say otherwise.

Mathematical truth is an unusually clean test of whether a culture means it.

The adversarial role also has a constructive side.

Breaking a proof often reveals the theorem it can actually support.

Suppose the critic finds that a key estimate fails in the full three-dimensional case but works under a vorticity-alignment condition. The original global proof is dead. A new conditional regularity theorem may be born.

Suppose a proposed singularity profile has one unstable mode the authors overlooked. The negative result may identify a codimension-one stable manifold that can be targeted through parameter tuning.

Suppose a formal proof requires an additional integrability condition. That condition may connect the result to an existing criterion and show the idea is not new—or it may point toward a sharper theorem.

Criticism generates mathematics when the system records mechanisms rather than verdicts.

“Rejected” is not enough.

Why rejected?

Which lemma failed?

What is the smallest counterexample?

What modification survives?

Which downstream nodes are invalidated?

Can the flaw be generalized into a no-go theorem for an entire strategy class?

The best refutation is reusable.

This suggests formalizing adversarial tests themselves.

If scaling kills a class of inequalities, encode the scaling theorem and generate automatic alarms for future candidates.

If a specific family of fields defeats a proposed bound, preserve the family as a test suite.

If a nearby blowup equation invalidates generic energy arguments, add it to proof-architecture regression tests.

If a theorem statement drifted through translation, add an equivalence checker to the ingestion pipeline.

Every embarrassing error should make the system harder to embarrass in the same way twice.

That is what institutions are for.

Humans call this experience.

Machines need a data structure.

The red team should also attack the use of formal verification itself.

A formal proof badge can create excessive confidence. Reviewers should inspect the theorem statement, axiom footprint, imported opaque code, and generated certificates. They should try to re-express the target independently. They should verify that the build works in a clean environment. They should inspect whether computational shortcuts entered the trusted base in ways that bypass checking.

Formal methods reduce the trusted surface. They do not erase it.

The same applies to AI explanations.

After a proof is found, agents will be asked to summarize it. A model can generate a beautifully coherent human narrative that is not actually the mechanism of the formal proof. The summary may omit ugly cases, replace a technical estimate with a stronger intuitive statement, or attribute causality to the wrong lemma.

So the human explanation should be adversarially tested against the proof graph too.

For every sentence saying “the key insight is X,” ask whether removing X actually breaks the proof.

For every phrase saying “this controls vortex stretching,” identify the exact theorem edge implementing the control.

For every analogy, list where the analogy stops.

A valid proof deserves a valid explanation.

The strongest version of the adversarial mathematician is not a person or agent.

It is an environment in which every claim is born facing opposition.

Generation and criticism are paired from the start.

Conjecture and counterexample.

Numerical candidate and refinement test.

Proof plan and nearby-model test.

Formal theorem and target-equivalence audit.

Internal success and external reproduction.

The system never asks, “Can we prove this?” without also asking, “What is the cheapest way to make this false?”

That habit may be the single most transferable research skill in the book.

AI makes it affordable to practice at scale.

The machines will produce more mistakes than any mathematical community in history.

If we build the institution correctly, they may also become very good at finding them.
