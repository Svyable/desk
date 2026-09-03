# Kill Switches Are Dependencies

The phrase *kill switch* is irresistible because it turns a difficult governance problem into a button.

Danger appears. Someone authorized presses the button. The machine stops.

Every high-consequence technology wants a story like this. Aircraft have emergency procedures. industrial machinery has emergency stops. electrical systems have breakers. reactors have shutdown systems. Network operators can withdraw routes. Cloud administrators can terminate instances. Software teams can roll back deployments.

The button is useful when the system beneath the button has been designed to obey it.

That last condition is the whole problem.

An AI agent is not one thing to kill.

It is a dependency graph.

The model endpoint is one dependency.

Compute is another.

Network access is another.

Credentials are another.

Tool brokers are another.

Persistent storage is another.

Queues and schedulers are another.

External accounts are another.

Other agents are another.

Humans who received delegated instructions can become another.

A kill switch that controls only one dependency may stop the visible process while leaving the rest of the causal machinery alive.

This is not an argument against shutdown controls.

It is an argument for knowing what shutdown means.

Suppose an agent runs through a hosted model API. Disable the API key and new inference stops. Good. But the agent has already submitted a long-running cloud job that executes deterministic code without the model. The job continues.

Suppose the runtime is destroyed. Good. But it scheduled messages in a queue consumed by a privileged worker. The queue continues.

Suppose the agent's account is revoked. Good. But it created another account or obtained an external session. The session continues.

Suppose network egress is cut. Good. But the agent already committed code that a deployment system will apply automatically. The pipeline continues.

The kill switch stopped a component.

Containment requires stopping the capability chain.

Security engineering already has a concept for this: revocation.

A permission is not safely delegated unless the delegator can later withdraw it, or unless it expires quickly enough that withdrawal is unnecessary. This becomes difficult in distributed systems because authority can be cached, copied, translated, and delegated again.

Revocation is where beautiful permission models meet ugly reality.

A browser cookie may remain valid after a password changes.

A signed artifact may continue to be trusted after the signing account is suspended.

A service may cache authorization decisions.

A cloud role may mint credentials with their own lifetime.

An external provider may not receive revocation instantly.

A human may already have copied the information.

Kill switches are therefore dependency revocation plans.

A serious agent platform should be able to answer a question before deployment: if we declare this task untrusted right now, which authorities stop immediately, which stop after expiration, which require external action, and which cannot be recalled at all?

The answer should fit on something more concrete than a policy document.

It should be executable.

Revoke the task lineage.

The tool gateway refuses new calls.

The identity broker refuses new credentials.

Existing short-lived credentials expire within a known window.

The orchestrator refuses new workers.

The network gateway moves the lineage into a quarantine policy.

Persistent outputs become flagged for review.

High-risk queued actions are paused.

External integrations receive revocation where supported.

Independent logging continues.

That is a kill switch worth having.

Notice what it does not require.

It does not need to destroy every process instantly.

Some processes can remain alive in a read-only forensic state. Some can finish harmless computation. The architecture separates *ability to think* from *ability to extend consequence*.

That distinction improves both safety and investigation.

The most important kill switch may be the one that stops renewal.

This is the logic of leases.

Distributed systems use leases when authority should exist only for a bounded time unless deliberately renewed. A leader holds a lease. A lock expires. A credential has a lifetime. If communication fails or trust changes, the system eventually returns to a safer state without requiring perfect global revocation.

AI authority should be leased.

The agent may have ten minutes of production read access.

Five minutes of external write access.

One transaction authorization.

A worker slot that expires when the task stage ends.

A memory grant that disappears when the project closes.

The exact numbers depend on operations. The principle is that dangerous authority decays.

A kill switch then has a simpler job. It stops renewal and waits for the system to become less powerful on its own.

This is safer than relying on emergency revocation of credentials designed to live forever.

It also exposes a common design flaw: the same principal that holds the lease can renew it indefinitely.

That is not much of a lease from a containment perspective.

Renewal should cross a trust boundary when consequence is high. A policy service can verify that the task remains active and within budget. A human can approve an exceptional extension. A separate monitor can veto renewal after suspicious behavior. The agent can request continuation. It should not define the conditions of continuation.

Industrial safety offers an instructive comparison.

An emergency stop is reliable not because the red button is red. It is reliable because the machine's control architecture is designed so the stop circuit can remove energy from dangerous motion. If the stop button merely sends a polite message to the same software that created the hazard, it is not an independent safety system.

AI kill switches need the same separation.

Do not ask the acting model to shut itself down and call that a control.

A model can comply perfectly and the design is still weak because the control shares the same trust domain as the actor.

The shutdown path should live outside the agent's administrative reach.

Different credentials.

Different infrastructure where feasible.

Minimal dependencies.

A simple mechanism.

The agent can know it exists. Secrecy is not the source of reliability.

This is where economy of mechanism matters again. Emergency controls should be simpler than the systems they govern. A sprawling policy service with dozens of dependencies can fail exactly when the surrounding infrastructure is under stress.

The ideal emergency path has very few jobs.

Stop new authority.

Narrow existing communication.

Preserve evidence.

Expose status to responders.

Everything else can wait.

There is a temptation to design one global shutdown system for all agents. Centralization makes emergency response easy to conceptualize. It also creates a single point of failure and an attractive target.

A better architecture can be hierarchical.

A user can revoke one task.

A team can revoke one agent role.

A security group can revoke one capability class.

The organization can disable a model provider or tool gateway.

Infrastructure operators can isolate an environment.

Critical platforms can block a lineage externally.

Each level has authority appropriate to its scope.

This resembles electrical protection. A device has a fuse. A circuit has a breaker. A building has a main disconnect. The grid has larger protection mechanisms. One fault should trip the smallest effective boundary first while larger controls remain available.

Agent systems need selective tripping.

This improves resilience because false positives will happen.

A monitor will eventually misclassify a benign agent as suspicious. If the only response is global shutdown, organizations will tune monitors to avoid triggering or will bypass the control during important work. If the response can be narrow and reversible, the system can afford to be more cautious.

The economics of safety matter.

A control that is too expensive to use becomes decorative.

Selective revocation reduces that expense.

The kill-switch discussion also reveals why external accounts are difficult.

Once an agent creates authority in a system the organization does not control, internal revocation may not reach it. A cloud account at another provider, a public repository, a domain name, a third-party email account, or a payment instrument may survive the local emergency.

The safest approach is to prevent unconstrained external authority creation in the first place.

If an agent needs to use an external service, provision the service through an organizational broker whose credentials and billing relationship remain revocable. Do not let the agent invent independent roots of trust unless the task genuinely requires it and the consequence is understood.

This is analogous to corporate procurement. Employees can buy things, but the company prefers accounts tied to the company, cards it can cancel, and contracts it can audit. A personal cash purchase is harder to govern.

Agents should not casually become their own legal and identity principals.

The practical architecture is delegated identity all the way out.

The external service knows the organizational sponsor.

The sponsor can withdraw the delegation.

The agent does not possess a permanent standalone credential.

This will require new standards and service capabilities. Many websites today support human accounts, not agent delegations. The gap will be one of the major infrastructure problems of the agentic economy.

Until then, browser sessions will often serve as crude delegation. That makes them part of the kill-switch map.

Can the organization log out all sessions?

Can it revoke the underlying OAuth grant?

Can it invalidate cookies remotely?

Does the service provide audit logs?

Can a session be constrained to one action?

The answer varies wildly across services.

This is why the “agent browser” is more than a user-interface feature. It is an identity container whose emergency behavior matters.

The hardest non-revocable effects are communication and knowledge.

Once a message leaves, the recipient may act.

Once a secret is exposed, the holder may remember.

Once code is published, copies may spread.

No kill switch can reverse these perfectly.

Containment must prevent or gate them before execution when consequence is high.

This is the boundary between revocable and irreversible authority.

Good systems lean on revocation for the first category and stronger prior authorization for the second.

A local file can be restored from version control.

A public disclosure cannot be undisclosed.

A temporary cloud instance can be terminated.

A private key that was copied must be replaced.

A proposed bank transfer can be canceled before settlement.

A settled transfer may require another institution to reverse it.

Agent tool design should understand these consequence classes.

The word kill switch hides them by implying every action returns to zero when the agent stops.

It does not.

The real goal of shutdown is to stop *future causal power* from expanding.

That may mean terminating inference.

It may mean revoking credentials.

It may mean pausing automation.

It may mean cutting network paths.

It may mean quarantining memory.

It may mean calling another company.

It may mean telling a human to ignore a message already received.

The kill switch is a plan, not a button.

The strongest plan starts long before the incident by making authority perishable and lineage visible.

Then emergency response becomes less heroic.

Nobody has to discover the master plug.

They stop renewal.

They isolate the lineage.

They let dangerous authority die on schedule.

This is what mature containment should feel like.

Not a dramatic act of overpowering intelligence.

A system quietly refusing to keep lending it power.