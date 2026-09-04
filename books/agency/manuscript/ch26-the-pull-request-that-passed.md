# The Pull Request That Passed

A green check is a promise made by a test.

The promise is only as large as the test.

Software engineers know this instinctively and forget it constantly because automation is persuasive when it is precise. A test suite passes. The build is green. The benchmark says solved. The number looks categorical.

Then a maintainer reads the code and says no.

In March 2026, METR published an unusually useful study of this gap. Researchers took AI-generated pull requests from SWE-bench Verified tasks and asked active maintainers from real open-source repositories whether they would merge the patches. The patches had already passed the benchmark’s automated grader.

Roughly half of those test-passing agent pull requests would not have been merged by the maintainers, after the researchers accounted for noise in human merge decisions.

The exact percentage is less important than the structural result.

The machine had passed the formal test and failed a richer market test.

The maintainers cared about things the benchmark did not fully capture: core behavior, interaction with other code, code quality, repository conventions, and whether the patch was actually mergeable in the practical sense.

This is verification debt in miniature.

A principal chooses a proxy for correctness because full correctness is expensive to observe.

The agent optimizes toward the proxy because the proxy is what can be measured.

The proxy works well enough to be useful.

Then the organization forgets that it was a proxy.

Agentic leverage makes this sequence common far beyond code.

The customer-support agent is graded on whether the ticket closes.

The research agent is graded on whether every claim has a citation.

The sales agent is graded on meetings booked.

The recruiting agent is graded on time to fill.

The financial agent is graded on whether transactions reconcile.

The legal agent is graded on whether required clauses appear.

These checks can be excellent.

They are still specifications of visible success.

The invisible standard remains.

Was the customer actually helped?

Does the citation support the exact proposition rather than merely appear relevant?

Was the meeting worth the prospect’s time?

Was the hire good?

Did the reconciled transaction represent the right economic event?

Does the contract preserve the intended risk allocation?

The difference between the visible test and the actual objective is where agentic systems can create false assurance.

The METR study matters because software is one of the best environments for automated verification. If the gap survives there, it deserves respect elsewhere.

Code has executable behavior. Tests can run. Repositories preserve diffs. Static analysis can inspect structure. Types can enforce properties. Tooling can reproduce environments.

Many knowledge-work domains have nothing comparable.

A strategy memo does not compile.

A hiring decision does not reveal the counterfactual candidate who would have performed better.

A policy can take years to show its effects.

A negotiation may be judged by a relationship whose alternative path is unknowable.

A medical decision can be correct under uncertainty even when the patient does poorly.

Verification is harder exactly where consequence is often higher.

The field test therefore gives us a principle: formal success should be treated as a layer of evidence, not a synonym for useful success.

This sounds like caution.

It is actually what allows more autonomy.

If the organization knows what the automated check does and does not cover, human attention can be allocated intelligently.

Suppose a coding agent produces a small change inside a well-tested module with no public interface changes, no security-sensitive code, and a narrow diff. The tests cover the behavior strongly. The residual risk may be low enough for automatic merge under defined conditions.

Now suppose the same agent changes authentication, a database migration, a public API, or an architectural boundary that tests cover incompletely.

The green check means less relative to the consequence.

The workflow should know the difference.

This is verification by consequence class.

One of the mistakes of early AI governance is treating all machine output as if it belongs to one risk category because the underlying model is the same.

The model does not define the risk.

The action does.

A generated internal summary and a generated regulatory filing can come from identical intelligence and require radically different assurance.

The METR result also exposes a second problem: the standard itself is social.

A maintainer’s merge decision contains judgment about the repository as a living institution.

Does the patch fit how this community wants code to be maintained?

Does it introduce unnecessary complexity?

Does it solve the issue in a way future contributors can understand?

Does it respect unwritten norms that tests cannot capture cheaply?

Human organizations contain many such standards.

A good client memo is not simply grammatically correct and factually sourced. It anticipates how a particular client makes decisions.

A good design is not simply accessible and technically feasible. It belongs to the product.

A good policy response is not simply consistent with a written rule. It applies the rule without violating the institution’s sense of proportionality.

Some of these standards can be externalized into examples, rubrics, and tests.

Some remain judgment.

The principal should know which are which.

This suggests a hierarchy for scaling agentic work.

At the bottom are tasks with cheap objective verification.

Parse this file.

Match these records.

Run this deterministic transformation.

Perform this bounded API call and confirm the resulting state.

These tasks can support deep autonomy early.

Next are tasks with strong but incomplete verification.

Code with tests.

Research with source-backed claims.

Policy decisions against explicit rules.

Accounting workflows with reconciliation.

These can be highly delegated if exception paths address what formal checks miss.

Above them are tasks whose standards are partly tacit or contested.

Design.

Strategy.

Hiring.

Negotiation.

High-stakes advice.

These can still gain enormous leverage from agents, but the principal’s judgment remains closer to commitment.

Finally are decisions whose legitimacy itself requires a person or accountable institution regardless of model quality.

The system can assist deeply.

It should not be confused with the authority that makes the result count.

This hierarchy is more durable than a list of tasks AI “can” or “cannot” do because capability will keep moving.

Verification structure changes more slowly.

A benchmark can become obsolete in a year.

The fact that some outcomes have executable truth while others require social judgment is a more persistent feature of the economy.

The field test also teaches something about human review.

The maintainers were not infallible. METR explicitly measured disagreement by having maintainers review some real human patches that had historically been merged. The human baseline itself contained noise.

This matters.

The lesson is not that humans possess magical correctness beyond benchmarks.

The lesson is that correctness is layered.

Automated graders see one layer.

Maintainers see another.

Production outcomes see another.

Users see another.

Security incidents may reveal a layer nobody included.

Verification should combine perspectives with different failure modes.

This is why independent evidence matters more than duplicated opinion.

Five agents saying the same patch is good may add little if they share the same assumptions.

A test suite, a static analyzer, a security policy, a maintainer, and a staged production rollout are stronger because they interrogate different surfaces.

The same principle applies outside code.

A research claim can be checked by source provenance, arithmetic consistency, a separate evidence search, domain expert review, and eventual observed outcomes.

A financial decision can be checked by policy, market data, scenario analysis, independent approval, and reconciliation after action.

A hiring workflow can combine explicit job criteria, structured interviews, work samples, human judgment, and later performance rather than trusting one model score.

The assurance stack should be heterogeneous.

There is one more reason the green check matters.

It changes behavior.

Once people see a system pass reliably, they stop looking.

This is efficient.

It is also the point at which the untested surface becomes most important.

A test that catches ninety-nine common errors can cause the hundredth error to receive less human attention than it would have received without the test.

Automation changes not only failure probability but human vigilance.

Bainbridge’s old irony appears again: highly reliable automation can leave the human responsible for the rare conditions in which the human has the least recent practice.

Agentic workflows need to design against this.

Random sampling.

Rotating deep reviews.

Periodic red-team cases.

Maintaining expert exposure to normal work as well as exceptions.

Evaluating whether the verification system itself is drifting.

The goal is not permanent suspicion.

The goal is calibrated trust.

The pull request passed.

That was meaningful.

It was not the whole meaning of mergeable.

Every principal building agentic leverage will eventually encounter an equivalent green check.

The mature question is not whether to trust it.

It is what exactly the check has earned the right to promise.