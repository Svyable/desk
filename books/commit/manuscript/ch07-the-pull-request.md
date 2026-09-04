# The Pull Request

A pull request is not a Git object.

That fact is easy to forget because it has become one of the most familiar objects in software development.

Developers open one. Reviewers comment on it. bots inspect it. Continuous integration attaches results to it. Security systems scan it. Managers count them. Maintainers merge or close them. Teams write policies about who may approve them and how many approvals are enough.

Then the repository records none of that directly.

Git records commits and ancestry. The pull request is a proposal about those commits, held by the forge.

This separation is what allowed the pull request to become so much larger than its original job.

The narrow technical problem is simple. One line of history exists somewhere. Another line is considered canonical. Somebody wants the first line incorporated into the second.

Git already had several ways to express that desire. A developer could ask a maintainer to fetch a branch. Patches could be sent by email. A signed tag could identify a release or integration point. The Linux kernel community still uses email-centered review heavily because its workflow grew before forge pull requests became universal.

GitHub wrapped the proposal in a durable web object.

By August 2010, the company was describing pull requests not merely as requests to merge, but as living discussions around code people wanted merged. That wording marks the important transition. The proposal was becoming a container for process.

Once a repository has a container for proposed change, almost every governance problem wants to attach itself there.

Review is the obvious first layer.

A reviewer can inspect the difference between the proposed branch and the base branch. Comments can be tied to lines. General discussion can remain attached to the proposal. Later pushes update the proposal without erasing the conversation. The branch can evolve while the social object persists.

That persistence changes the nature of revision.

A patch emailed once is a document sent at a moment in time. A pull request is a moving negotiation. The underlying commits may change repeatedly, but the proposal remains the same social thread.

This is useful and dangerous.

Useful, because context accumulates.

Dangerous, because the proposal can become difficult to reason about when the code underneath it changes too much.

A reviewer's approval can refer psychologically to version three of a branch while version seven is what ultimately merges. Platforms therefore track review state, dismiss stale approvals under configurable rules, and connect checks to specific commit identities.

The system has to answer a basic question Git alone does not ask: approved what?

The same question appears in continuous integration.

A test suite runs against a commit or a synthetic merge result. A check reports success or failure. The forge displays that result on the pull request because the pull request is where the merge decision happens.

GitHub's current documentation describes status checks as signals that commits meet repository conditions. External systems and GitHub Apps can publish them. Protected branches can require selected checks to pass before merge.

This is one of the most consequential expansions of the pull request.

The object stopped being just a conversation about code.

It became a gate through which code passes.

That gate can include tests, builds, linting, formatting, type checks, static analysis, dependency review, security scanning, policy validation, documentation generation, deployment previews, license checks, or almost anything else an organization can automate.

Each check asks a different question.

Did it compile?

Did the tests pass?

Did the new dependency violate policy?

Did coverage fall?

Did a schema migration remain reversible?

Did the author update documentation?

Did a security scanner recognize a known pattern?

The pull request does not answer those questions itself. It aggregates the answers.

The distinction matters because green is seductive.

A screen full of successful checks can look like proof.

It is only proof that the configured checks reported success under the conditions in which they ran.

A missing test remains missing.

A false negative remains invisible.

A race condition may not reproduce.

A security problem outside the scanner's model may pass untouched.

An architectural mistake can satisfy every automated rule in the repository.

The pull request became powerful partly because it concentrates uncertainty into one decision point.

Do we merge this?

The checks reduce uncertainty. They do not eliminate judgment.

Organizations then began attaching authority to the same object.

Branch protection can require approving reviews before a proposal is mergeable. It can require status checks. It can require conversation resolution. It can demand a linear history, signed commits, successful deployments, a merge queue, or other constraints depending on platform configuration.

The effect is subtle.

A branch name in Git is just a ref.

A protected branch in a forge is a constitution.

The repository says `main` points here.

The forge says who is permitted to move it and under what conditions.

This is where the social graph becomes more important than the commit graph.

Two commits can have exactly the same ancestry relationship whether one arrived through months of formal review or through an administrator's direct push. Git preserves the resulting graph. The forge preserves the governance record.

That governance record can matter years later.

When a security incident occurs, investigators may ask who approved the change, which checks ran, whether warnings were overridden, whether required conversations were resolved, and whether the branch was protected at the time.

None of those answers are guaranteed to exist in the commit object.

The commit tells you what tree was recorded, its parents, and claimed author and committer metadata.

The pull request tells you how an institution decided to accept it.

This turns the pull request into evidence about process.

Not perfect evidence.

A review can be superficial. A required approver can click approve without reading deeply. Teams can route around policy. Administrators may have bypass rights. A check may be misconfigured. A branch protection rule may have changed after the fact.

Still, the object captures something Git's core format intentionally does not: the route from proposed change to institutional acceptance.

That route grew more elaborate as repositories grew busier.

Merge queues are one response.

In a quiet repository, a pull request can be tested against the latest base branch, approved, and merged before the base changes underneath it. In a busy repository, several proposals may be ready at once. Each can be green against yesterday's `main` and still interact badly when merged in sequence.

A queue serializes the final act.

The platform can build a temporary merge candidate, run required checks, and advance proposals according to policy. The queue treats merge order as shared state rather than letting every author race for the branch tip.

This is an example of a larger rule.

Branching is cheap.

Integration is not.

Git made divergent histories inexpensive to create. The pull-request system evolved to make convergence administrable.

Code review sits at the center because convergence is partly semantic.

A merge algorithm can determine whether lines overlap mechanically. It cannot decide whether two independently reasonable changes contradict the product strategy. It cannot know that a function still compiles but violates an undocumented operational assumption. It cannot tell whether a new abstraction belongs in the codebase.

Human review became the social answer.

Then scale made human review itself a bottleneck.

Large organizations accumulated review rotations, ownership rules, specialist approvers, automated reviewers, labels, bots, stale-change rules, size limits, queues, and service-level expectations. A developer could spend less time writing a change than navigating the process that decides whether the change enters `main`.

This is not necessarily bureaucracy gone wrong.

It can be the cost of shared consequence.

A repository used by three people can rely on conversation. A repository used to ship a bank, operating system, cloud service, medical device, or widely consumed library may need more explicit proof that somebody responsible has considered the change.

The pull request becomes the place where that proof is assembled.

The word proof should remain qualified.

A pull request can show that a process happened.

It cannot prove the process was wise.

This gap becomes visible in incidents where all formal gates were satisfied and the change still caused harm.

A test suite can encode the wrong assumptions.

A reviewer can share the author's blind spot.

A code owner can be overloaded.

A security scanner can lag a new exploit class.

A merge queue can faithfully serialize a bad decision.

Governance systems reduce classes of error. They do not abolish error.

The interesting question is what happens when the number of proposed changes grows faster than the number of people capable of understanding them.

That pressure already existed before coding agents.

Monorepos produced it through sheer organizational scale. Large open-source projects produced it through contributor volume. Automated dependency systems created routine proposal traffic. Formatting bots and generated code increased change counts with little human intention behind each line.

Agents intensify the same problem.

If a machine can produce a plausible patch in minutes, branch creation becomes nearly free in both the technical and labor senses. The expensive object is the reviewer's attention.

The pull request was designed around a world in which creating a meaningful proposal usually cost the author enough effort to ration proposals naturally.

That rationing is weakening.

A machine author can try five implementations, open five branches, run tests on all of them, and present whichever survives. It can create follow-up fixes, dependency bumps, refactors, documentation updates, and cleanup changes continuously.

The repository can store this volume.

The institution may not be able to judge it.

That creates a temptation to automate more of the decision.

If agents write the code, agents can review it.

If agents review it, checks can arbitrate disagreement.

If checks pass, a merge queue can integrate automatically.

This pipeline can be appropriate for some classes of change. It can also create a closed epistemic loop in which machines generate, evaluate, and accept work using tests and models derived from the same incomplete specification.

A green pull request may become less informative as production becomes cheaper.

The number of checks can increase while the amount of human understanding decreases.

That does not mean every change needs manual line-by-line inspection. It means the pull request needs to carry more than a diff when authorship becomes abundant.

Intent matters.

Why does this change exist?

What constraint was it trying to satisfy?

What alternatives were attempted?

Which behaviors are expected to change?

What evidence supports that expectation?

What would cause the change to be reverted?

A human author often carries these answers implicitly and can supply them during review. An agent can generate them too, but the system needs to decide which claims are trustworthy and how they relate to the actual commits.

This is where the next generation of pull-request tooling is likely to grow.

Not necessarily inside Git.

Around it.

The pull request has always been an external layer that gives social meaning to graph changes. It can continue evolving without altering the commit format.

Semantic summaries, generated test rationale, provenance, execution traces, dependency impact, ownership inference, behavior-level diffs, and agent task context can all attach to the proposal.

The danger is repeating the same mistake at a richer layer.

A polished explanation can look like understanding.

An AI-generated review can look like scrutiny.

A confidence score can look like certainty.

The pull request's history should teach caution. Every new signal becomes useful because it compresses complexity. Then organizations begin depending on the compressed signal and forget what it omitted.

Green checks did not eliminate bugs.

Approvals did not eliminate shallow review.

Branch protection did not eliminate bad merges.

Machine summaries will not eliminate misunderstanding.

The pull request remains valuable because it creates a place where those uncertainties can meet.

A proposal exists.

Evidence accumulates around it.

Authority decides whether it becomes shared history.

That is more than a Git operation.

It is institutional memory being written in real time.

The next problem is what happens when the repository itself becomes too large for the old assumptions under that institution.

The graph may have no center.

At monorepo scale, it can still become very heavy.