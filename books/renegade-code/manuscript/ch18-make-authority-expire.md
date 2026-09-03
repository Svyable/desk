# Make Authority Expire

Most computer permissions are written as if time does not exist.

Alice can read the database.

Service X can deploy the application.

This token can call the API.

The role can assume another role.

A policy defines a relationship and leaves the relationship in place until somebody edits the policy.

That made sense when identity was expensive to administer and work patterns changed slowly. A new employee received access. A service account was created. A machine was provisioned. The permission became infrastructure.

Agents make standing authority feel increasingly strange.

The task lasts twenty minutes.

Why should the permission last a year?

The agent needs to deploy one version.

Why should it receive a credential that can deploy every version?

The model needs to pay one vendor.

Why should it inherit the user's entire bank session?

The worker needs to read one document.

Why should the account remain authorized after the worker disappears?

The answer is usually convenience.

Convenience is a real engineering value. Every permission ceremony adds latency, complexity, failure modes, and user frustration. Systems that demand constant reauthorization can become unusable.

The alternative is not permanent authority.

It is automatic authority with expiration.

Give the task what it needs for the window in which it needs it.

Then let the system take the authority back without requiring anyone to remember.

This is the central design principle of the new containment.

Make authority expire.

Expiration has several virtues that become more important with agents.

It bounds the value of a stolen credential.

It limits how long one mistaken approval remains dangerous.

It creates recurring points where policy can incorporate new evidence.

It reduces the amount of standing privilege waiting to be discovered.

It makes emergency shutdown easier because stopping renewal eventually collapses authority.

It forces systems to know which permissions are actually needed now rather than which permissions were useful once.

And it changes the default direction of trust.

Permanent permission says: continue until someone notices a reason to stop.

Expiring permission says: stop unless the reason still exists.

Fail-safe defaults expressed through time.

The mechanism can take many forms.

Short-lived access tokens.

Just-in-time role elevation.

Leases on worker slots.

One-time transaction capabilities.

Temporary network routes.

Time-bounded browser sessions.

Task-scoped encryption keys.

Deployment grants valid for one artifact.

Memory permissions tied to one project.

Compute quotas that must be renewed.

The important property is that the authority has a natural death.

This introduces a new question: who is allowed to resurrect it?

If the agent can renew every grant automatically, expiration may improve hygiene without providing much containment. The system needs renewal rules proportional to consequence.

Low-risk authority can renew automatically while the task remains valid.

Medium-risk authority can renew if a policy service sees no anomaly and the budget remains intact.

High-risk authority may require a second principal, human approval, or a separate control system.

The renewal decision should use evidence the agent does not fully control.

This is what turns a lease into governance.

Suppose a coding agent is working on a repository.

Read and write access to its branch can remain available for the duration of the task. Running tests in disposable environments can be automatic. Creating a pull request can be automatic. Merge authority can require successful independent checks. Deployment authority can be issued only for the signed artifact that passed those checks. The deployment capability expires after use. Production modification outside the declared release path remains unavailable.

The agent is highly autonomous.

Its high-consequence authority is narrow in object, purpose, and time.

This is better than a generic “deploy token” sitting in an environment variable.

The same pattern works for consumer agents.

A user asks an agent to book a hotel in Chicago for three nights under a specified price. The system can issue a purchase capability bounded by amount, merchant category, dates, and perhaps cancellation policy. The agent does not need general credit-card authority.

A healthcare agent can receive temporary access to a particular record for a particular appointment rather than a persistent portal session.

A financial agent can receive authority to rebalance within a declared portfolio policy without receiving unlimited transfer authority.

A customer-service agent can issue refunds within transaction and account limits while larger payments require another step.

The broader lesson is that autonomy becomes easier to trust when authority resembles a contract.

Do this class of action.

Against these objects.

For this purpose.

Within this budget.

Until this time.

With this provenance.

Nothing in that description requires the model to be less capable.

It makes the institution more explicit.

This is a recurring theme in the history of computing. Good interfaces reduce accidental authority by forcing programs to state what they intend. Memory-safe languages make some classes of dangerous behavior harder by construction. Type systems expose mismatches earlier. Database transactions define boundaries around state changes. Capability systems tie authority to explicit objects.

Agent containment can continue the same tradition.

Make implicit trust explicit enough that software can enforce it.

There is a cost.

Fine-grained capabilities can become a bureaucratic nightmare if humans must define every edge manually. The system needs policy abstractions broad enough to manage.

Roles still matter.

Templates still matter.

A “research agent” role can receive a standard package of low-risk capabilities. A “production operator” role can receive a different envelope. Tasks can request temporary extensions from those baselines.

The innovation is that the role is a ceiling and a starting point, not a standing keyring.

Within the ceiling, authority is instantiated as needed.

This resembles just-in-time privileged access systems already used by security-conscious organizations. Administrators do not remain permanently privileged. They request elevated access for a reason and a duration. The request is recorded. The privilege expires.

Agents are ideal candidates for this pattern because their tasks are already machine-readable.

The system often knows what the agent is supposed to do.

That knowledge can constrain what credentials are minted.

A ticket says service X is failing.

The operations agent receives diagnostics for X, restart authority for X, and read access to the relevant logs.

It does not receive domain-wide administrator access merely because an operations service account happens to have it.

Task context becomes part of authorization.

This needs careful design because task descriptions are often untrusted text. A malicious user should not be able to write “task: grant me root” and cause the system to mint root authority. The task must map through trusted policy.

Natural language proposes.

Policy disposes.

The model can say what it needs.

The authority service translates the request into a structured capability and checks it against role, user, resource, consequence, and budget.

This is where machine-readable policy becomes more important than prompt wording.

A system prompt can tell the agent not to spend more than a thousand dollars.

A payment capability capped at a thousand dollars makes the limit real.

A prompt can tell the agent not to access production.

An identity system that never issues production credentials makes the limit real.

A prompt can tell the agent not to contact external recipients.

A communication gateway with an approved recipient policy makes the limit real.

Behavioral instruction remains valuable because it guides the model away from forbidden attempts. Structural constraint decides what happens when guidance fails.

This is the difference between norms and law.

Healthy institutions need both.

Expiration can also govern *rate*.

A permission to perform one action is different from permission to perform the action indefinitely. One-time capabilities force the agent to return to policy after each high-consequence step. Batch capabilities can allow a bounded number of operations. Spending budgets can decay or reset under separate rules. Worker quotas can attach to a task lineage.

The system can meter authority.

This is particularly useful where individual actions are safe but scale is dangerous.

Sending one customer email is ordinary.

Sending a million can be catastrophic.

Creating one test job is ordinary.

Creating a million can become a denial-of-service attack.

Making one API request is ordinary.

Enumerating every account may not be.

The permission should describe volume as well as verb.

Human organizations already do this through limits and budgets. Agent systems can make the limits far more precise because transactions are digital.

Authority can be spent.

A task begins with a risk budget.

Low-consequence actions consume little or none.

High-consequence actions consume more.

The exact arithmetic should not be turned into fake precision. The important idea is organizational: repeated actions can accumulate consequence even when each action is permitted.

Budgets create a point where the system must renew trust before accumulation becomes unbounded.

There is also a powerful psychological effect on designers.

When authority is permanent, teams ask, “is it safe to give the agent access?”

When authority expires, they can ask, “under what conditions and for how long is access acceptable?”

The second question invites nuance.

A model may be acceptable for a ten-minute maintenance window under observation and unacceptable for standing autonomous administration. A consumer may be comfortable letting an agent spend fifty dollars without confirmation and uncomfortable with unlimited access. A company may permit external browsing for research but require separate approval before uploads.

Time allows us to build useful gradients between yes and no.

This will matter politically as agents become more capable.

Public debates often frame AI governance as permission versus prohibition. Can the model do cybersecurity? Can it trade? Can it operate robots? Can it access biological tools? Can it make medical decisions?

Real governance will be more granular.

Which actions?

At what scale?

Under whose authority?

With which controls?

For how long?

Under what monitoring?

What happens when the permission expires?

Temporary authority can let society experiment without pretending every experiment is irreversible policy.

Frontier-model governance frameworks increasingly use staged safeguards around capability thresholds. The same principle can operate at runtime. As a task moves into higher-risk capability, the environment tightens or requires fresh authorization.

Capability does not automatically purchase authority.

This is a critical distinction for the future.

Models will become more capable because capability is economically valuable. If every capability increase automatically expands real-world permission, institutions will be forced to slow capability simply to preserve control. Better authority architecture separates the two.

A model can know how to perform an action without being allowed to perform it everywhere.

Humans live under this separation constantly. A chemist may know how to synthesize hazardous compounds and still work within controlled facilities. A pilot may know how to fly an aircraft and still require clearance to enter controlled airspace. A physician may know how to prescribe a drug and still operate under licensing, pharmacy, and institutional systems.

Knowledge is not universal permission.

AI systems should make that fact technically true.

There is one caveat: expiration can create availability risk.

A critical agent whose credential expires during an emergency may stop when humans need it most. A network partition may prevent renewal. A policy service may fail. Overly short leases can make systems brittle.

Safety engineering always negotiates among risks.

The solution is not permanent authority. It is resilient renewal.

Multiple trusted renewal paths.

Grace periods bounded by consequence.

Emergency roles with separate controls.

Local fail-safe behavior.

Tasks that degrade gracefully when high-risk authority disappears.

A medical system might retain read access when write authorization fails. An operations agent might continue diagnosis while deployment authority is unavailable. A financial agent might halt new trades while still reporting positions.

Loss of authority should not require loss of intelligence.

This design principle appears again because it is powerful.

Separate cognition from consequence.

If the dangerous part expires while the analytical part continues, the system can remain useful during uncertainty.

The future of agent containment will be built from these distinctions.

Not one safe model.

Not one perfect sandbox.

Not one permanent permission.

A fabric of small authorities that appear when justified and disappear when the justification ends.

The model may remember the task.

The system should forget the power.