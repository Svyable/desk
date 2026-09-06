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

There is a useful way to make the adversarial program less dependent on rhetoric: convert every review class into executable tests wherever possible.

Target attack becomes a theorem-delta report.

Scaling attack becomes automatic dimensional metadata and rescaling tests.

Regularity attack becomes a dependency check on the function spaces required by each manipulation.

Nearby-world attack becomes a library of adversarial equations and known countermodels.

Extremizer attack becomes optimization code stored with the proof branch.

Literature attack becomes source-linked theorem comparison.

Formal attack becomes actual kernel checking.

Computational attack becomes reproducible numerical suites.

Interpretation attack becomes a claims manifest generated from the exact root theorem.

The more criticism can be made executable, the less the project depends on whether a reviewer happens to remember the right objection on the right afternoon.

This is not a proposal to automate peer review out of existence. It is a proposal to automate the repetitive parts of skepticism so human reviewers can spend their attention on the objections that require taste.

A PDE expert should not have to waste a day discovering that a generated proof used the wrong scaling exponent. The machine can catch that.

The expert should spend the day asking whether the new cancellation has genuine leverage.

This division of labor is important because proof spam changes the economics of criticism. If models can generate a thousand plausible approaches, human experts cannot manually refute them one by one. A critic system that merely writes natural-language reviews will drown with the prover system.

Adversarial capacity has to scale with generative capacity.

One way is to make the generator pay a verification deposit.

Every new high-level claim arrives with evidence proportional to its ambition. A local lemma might need a formal proof or a short check. A proposed global strategy needs scaling analysis, literature comparison, and at least one adversarial model test before it enters the expert queue. A claimed numerical singularity needs independent discretization, precision sweeps, admissibility checks, and a stated path to rigorous certification. A Millennium solution candidate needs all of these plus external checkers and independent human review.

The deposit makes cheap claims more expensive to promote.

Generation can remain cheap.

Attention cannot.

This is a governance mechanism for a future in which “write a plausible proof” costs almost nothing.

The red team should also maintain a museum of historical false positives.

Famous open problems attract incorrect proofs from brilliant people as well as amateurs. The mistakes are varied: hidden circularity, unjustified interchange of limits, misuse of compactness, a false inequality at an endpoint, changing the problem during normalization, assuming a minimizer exists, numerical evidence mistaken for exactness.

A machine can learn more from these failures if they are encoded structurally rather than mocked as bad mathematics.

What was the first invalid step?

Why was it persuasive?

Which automated test would have caught it?

Can the failure be generalized into a template?

A good red-team corpus contains sophisticated mistakes, because the dangerous future errors will be sophisticated too.

The hardest category will be valid mathematics with invalid significance.

Suppose a model proves an elegant new regularity theorem under an assumption that appears mild. The proof is flawless. Reviewers praise it. Only later does someone notice the assumption is already stronger than a classical criterion in disguise. Nothing is false, yet the claimed progress was illusory.

This is why novelty review and implication review belong inside adversarial mathematics.

The system should ask not only “is the theorem true?” but “where does it sit in the lattice of known results?”

Does it weaken a hypothesis?

Strengthen a conclusion?

Reach a new critical endpoint?

Remove symmetry?

Make a constant explicit?

Formalize something previously informal?

Or merely rename an old condition?

A theorem can be correct and still fail the research test.

The distinction becomes crucial when agents optimize for publishable output. A system rewarded for “new theorems” will discover endless syntactic novelty unless the institution measures semantic movement.

That lesson transfers from academic incentives directly into agent design.

The adversarial mathematician should therefore be allowed to return three verdicts.

False.

True but not new.

True and materially moves the frontier.

The third verdict should be rare.

There is another social defense worth importing from security engineering: responsible disclosure before celebration. If an internal team believes it has a full solution, the first external contact should not be a publicity campaign. It should be a small number of independent experts given everything needed to attack the result under conditions that do not require loyalty to the lab.

Their incentives should be explicit.

Finding a fatal flaw is a success.

Finding a target mismatch is a success.

Showing that the formal checker was used unsafely is a success.

Reproducing the result is a success.

Ambiguity is not a success.

A lab that truly believes its proof should prefer the harshest competent review it can obtain.

The ultimate red team is then public mathematics. Once the artifacts are released, the number of potential adversaries becomes enormous. Other labs can point their models at the proof. Formal-methods researchers can distrust the kernel boundary. Numerical analysts can rebuild the certificate. Historians of the field can find precedents. Graduate students can ask naive questions that reveal assumptions experts stopped noticing.

This is not a threat to authorship.

It is how a result becomes durable.

The paradox of a famous proof is that the strongest claim of intellectual achievement should trigger the strongest effort to make the authors unnecessary to belief.

If the theorem can only be defended by the people who produced it, it is not ready.

The adversarial mathematician’s final job is to make the original team dispensable.

Anyone should be able to rebuild the conclusion without trusting Anthropic, Claude, the internal cluster, or the personalities involved.

When that happens, opposition has done its work.

The theorem no longer belongs to the argument.

It belongs to mathematics.