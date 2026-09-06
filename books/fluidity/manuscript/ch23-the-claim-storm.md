# The Claim Storm

The first sign that machine mathematics has arrived may not be a correct proof.

It may be the inability of anyone to keep up with the incorrect ones.

Navier–Stokes already lives inside a peculiar information environment. Every year brings preprints, partial results, numerical scenarios, regularity criteria, simplifications, reductions, and occasional manuscripts whose titles claim much more. Some are serious mathematics. Some are serious mistakes. Some prove a different theorem than the title suggests. Some are impossible to evaluate quickly because the argument is long, unfamiliar, computational, or written outside the conventions of the field.

AI can multiply this volume by several orders of magnitude.

That changes the problem from proof discovery to claim triage.

During the research for this book, I found 2026 manuscripts publicly asserting opposite fates for three-dimensional Navier–Stokes. One presented a program claiming stable finite-time singularity formation through a lifted axisymmetric construction and computer-assisted validation. Another line of work claimed reductions or regularity mechanisms pointing in the other direction. There are also preprints carrying straightforward claims of global regularity.

The Clay Mathematics Institute still lists the problem as unsolved.

That sentence is not an appeal to institutional authority over mathematics. A true proof is true before Clay recognizes it.

It is a statement about epistemic status.

A title on arXiv is not a theorem accepted by a field.

A numerical package is not a singularity until the rigorous bridge is closed.

A proof checked by the author's own software is not yet independently reproduced.

A formal theorem is not necessarily the Clay theorem.

The claim storm begins when these distinctions become too expensive for ordinary attention.

Suppose a frontier model can produce a plausible 120-page proof attempt every hour.

Most will fail.

Some will fail obviously.

Some will contain one subtle invalid estimate on page 87.

Some will prove legitimate new lemmas on the way to a false conclusion.

Some will duplicate known results under different notation.

Some will exploit an accidental strengthening of the hypotheses.

Some will produce formal artifacts for the easy half of the argument while leaving the key bridge in prose.

A few may contain ideas worth years of human work.

Who reads them?

The old peer-review model assumes scarcity at the input. Researchers write slowly. Journals receive a manageable number of papers relative to the available community. Specialists can often identify implausible claims from familiar failure modes. Even then, notorious incorrect proofs of famous conjectures can consume enormous expert time.

Machine generation breaks the scarcity assumption.

The field needs a spam filter for mathematics.

“Spam” is too insulting for much of what the filter will reject. A generated proof attempt can be sincere, technically sophisticated, and scientifically useful while still being wrong. The filter's job is not to classify authors. It is to route scarce attention.

The first layer should be mechanical.

Does the manuscript state the exact theorem it claims to prove?

Does that theorem match a trusted formal target?

Are all assumptions explicit?

Does the proof compile if a formal artifact is claimed?

Which axioms are used?

Are there `sorry` placeholders, unchecked computations, or opaque imports in the trusted path?

If a computer-assisted argument is involved, are the certificates present?

Can the verification software run from a clean environment?

Does the claimed numerical precision survive reproduction?

These questions are brutally effective because many claims fail before conceptual review begins.

The second layer should be structural.

Scaling.

Known obstructions.

Comparison with standard criteria.

Nearby equations.

Consistency with classical counterexamples and nonuniqueness results.

Admissibility of the solution class.

Correct relationship between periodic and whole-space settings.

Regularity assumptions used during manipulations.

An AI system can run these checks against every incoming manuscript, but the system should be optimized for false negatives in hype, not false confidence in truth. Passing the filter means “worth expert attention,” not “correct.”

The third layer should be adversarial.

Give the proof to models that did not generate it.

Hide the author's intended route and ask reviewers to derive the critical implication independently.

Search numerically for extremizers against new inequalities.

Translate the most important lemmas into Lean even if the full proof is informal.

Ask a literature agent to find the closest prior theorem and the strongest known obstruction.

Run symbolic checks on identities.

Try to instantiate the claimed argument in a nearby PDE where the conclusion is known to be false.

Only after the claim survives these attacks should senior human attention become the bottleneck.

This reverses a common fear about AI science.

People imagine machines generating results so quickly that humans lose authority because they cannot read everything.

The better response is not to make humans read faster.

It is to make machines compete for the right to consume human time.

A claim should arrive at the mathematician carrying evidence of survival.

Not a confidence score.

A dossier.

Exact target comparison.

Independent formal checks.

Counterexample search reports.

Numerical reproduction.

Closest prior art.

Known failed analogues.

A concise list of the genuinely novel obligations that remain human-judgment dependent.

The best AI research assistant may be the one that can reduce a 200-page proof to three places where an expert has to think.

This is another reason formalization matters even before complete autoformalization becomes routine. A proof assistant can turn ambiguity into a location. It can tell the field that 99.7 percent of a generated argument has been reduced to known formal lemmas and that one new estimate remains. Or it can reveal that the supposedly decisive theorem cannot even be stated without adding a hypothesis absent from the original claim.

The claim storm also changes publishing.

A journal cannot ask volunteer referees to absorb an infinite stream of generated manuscripts. Editors will need provenance requirements and machine-verification tiers. A paper produced with substantial AI assistance may be asked to provide more—not less—machine-readable evidence because the marginal cost of generating prose has collapsed.

This should not become an anti-AI tax.

Human proofs of major claims should face similar standards when the tools are available.

The principle is proportional verification.

The cheaper it becomes to make a claim, the more valuable cheap pre-screening becomes.

The more consequential the claim, the more independence the verification needs.

The history of famous open problems already contains a warning. Mathematicians receive purported solutions constantly. Most are ignored because experts can see enough familiar pathologies to protect their time. That informal defense system depends on a relatively stable rate of incoming claims and on recognizable human patterns of error.

AI can search beyond those patterns.

It can generate mistakes no human novice would make because the mistakes are embedded in sophisticated machinery.

It can also generate convincing local correctness around a global conceptual error.

A theorem prover can make this better and worse.

Better, because local correctness becomes mechanically checkable.

Worse, because a green formal badge can cause readers to stop asking whether the theorem statement is the intended one.

The claim storm therefore has a hierarchy of labels that should be enforced almost bureaucratically.

Numerical observation.

Candidate profile.

Conjecture.

Informal derivation.

Proof sketch.

Complete informal proof.

Computer-assisted proof with validated numerics.

Machine-checked formal theorem.

Independent checker reproduction.

Independent human validation.

Published result.

Broad community acceptance.

Clay-eligible solution candidate.

Clay-recognized solution.

The labels sound tedious until billions of generated tokens begin crossing them without permission.

Language is part of the verification system.

The phrase “AI solves Navier–Stokes” is itself a lossy compression. It can refer to at least five completely different events.

A model produces useful numerical CFD output.

A model discovers a new regularity criterion.

A model finds a candidate singularity in a related equation.

A model writes a plausible proof of the Clay problem.

A model participates in a proof eventually accepted as resolving the Clay problem.

Only the last deserves the headline this book borrows.

The other four can still be important.

A mature information system has to preserve the distinction as stories travel from paper to lab blog to social media to news coverage. Every compression should retain a machine-readable status tag. Every high-profile result should expose the unresolved delta to the grand target.

This could become a standard scientific interface.

Open the result page and see two columns.

What was proved.

What remains open.

The first column contains formal statements and evidence.

The second contains missing implications, extra assumptions, unverified numerical steps, and publication status.

The product should make it difficult to screenshot the first column without the second.

This is not pessimism.

It is what allows optimism to scale.

If AI produces one good research idea for every thousand wrong ones, the system can still be revolutionary if the thousand are cheap to kill.

If every wrong idea requires a professor's afternoon, the revolution becomes denial of service.

The economics of mathematical progress will depend on that ratio.

Generation cost is falling.

Verification cost has to fall faster.

The claim storm also creates an opportunity for new reputations.

Today, mathematical prestige attaches heavily to proving theorems. In a machine-abundant environment, refutation becomes more valuable. Researchers who build benchmark counterexamples, checker infrastructure, formal target libraries, reproducibility systems, and automated failure detectors may contribute as much to progress as the systems generating conjectures.

A person who kills ten thousand seductive false routes has changed the search space.

The contribution should be visible.

This matters for younger mathematicians too. The fear that AI will remove the entry-level work of proving routine lemmas is plausible. A healthier research ecosystem can create new apprenticeship roles around verification: formalizing statements, reproducing computer-assisted results, curating counterexamples, inspecting generated abstractions, and learning where sophisticated systems fail.

Students may become fluent not only in proving things but in auditing proof-producing machines.

That is a real mathematical skill.

The Navier–Stokes problem is an ideal training ground because its failure modes are unforgiving. An estimate that loses the wrong power under scaling does not care how persuasive the prose is. A finite-energy condition is not negotiable. A candidate singularity either satisfies the equations and admissibility requirements rigorously or it does not. A weak solution is not a smooth one because a dashboard calls both “global.”

Reality supplies the rubric.

There will still be moments when the field is genuinely confused.

A long proof can survive automated checks and divide experts. A computer-assisted argument can depend on a novel numerical method no one has audited deeply. Two independent formalizations can disagree because they formalized different interpretations of the target. A revolutionary idea can initially look like an error because it violates the field's habits rather than its theorems.

No filter eliminates judgment.

The objective is to reserve judgment for the cases that deserve it.

This is why Clay's slow acceptance process may turn out to be surprisingly modern. The requirement that a proposed Millennium solution be published, survive time, and achieve general acceptance can look ceremonial in an era of machine-checked proofs. It is actually a diversity mechanism.

Time invites independent attack.

Publication exposes the work.

General acceptance distributes authority across a community.

A kernel can certify syntax and logic far faster than a field can understand consequence.

Both tempos matter.

The day an AI system produces a genuine Navier–Stokes solution, the claim storm will become violent.

Hundreds of derivative explanations will appear within hours.

Other models will generate alternative proofs.

Critics will publish counterexamples to intermediate lemmas.

Companies will benchmark their systems against the new theorem.

People will claim priority for earlier preprints.

Social media will compress “proposed proof” into “solved” before the formal repository finishes cloning.

The system built in advance will determine whether that day produces knowledge or spectacle.

The answer is not to stop the storm.

It is to give every claim a pressure gauge.
