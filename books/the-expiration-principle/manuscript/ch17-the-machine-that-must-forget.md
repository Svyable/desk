# The Machine That Must Forget

The next great expiration problem will not be a document.

It will be a machine that can act.

For most of computing history, software waited. A person opened the program, chose a command, supplied data, and watched the result. Authority was exercised in small visible bursts. The user was present at the moment the machine did something consequential.

Agents change the shape of that relationship.

A useful agent does not merely answer. It can continue. It can watch an inbox, update a repository, reconcile records, schedule work, purchase inventory, deploy software, open tickets, renew credentials, contact customers, or coordinate other machines. The value comes from persistence.

So does the danger.

The obvious question is what the agent may do.

The less obvious question is how long yesterday's permission should remain enough.

Suppose a manager tells an agent on Monday: resolve the launch blockers.

At 9:04 a.m., that instruction may justify reading the project tracker, checking build failures, drafting fixes, and asking relevant teams for information.

At 9:04 p.m., perhaps it still does.

Three weeks later, the launch has happened. The team has reorganized. A contractor has left. The repository contains a new product. The phrase “resolve the launch blockers” remains in memory.

Is the old instruction still authority?

A human employee has context that makes the answer feel obvious. The employee attends meetings, hears that the launch shipped, notices the team moved on, understands that a manager's sentence belonged to a moment.

A machine can preserve the sentence more perfectly than the situation.

That is the problem.

Machine memory is durable.

Human intent is perishable.

The mismatch creates a new class of stale authority.

Security engineering already has a partial answer. Do not give software permanent credentials merely because the software needs recurring access. Issue bounded credentials. Rotate them. Scope them. Revoke them when circumstances change. Require stronger confirmation for sensitive operations. Record what happened.

Those practices are necessary.

They are not sufficient for agents because a credential answers only one question: can this actor access the system?

It does not answer the harder question: should the actor still be pursuing this goal?

An agent can hold a perfectly valid token while operating under an obsolete instruction.

This distinction will define the next generation of authorization systems.

Credential freshness is not intent freshness.

Imagine a procurement agent authorized to replenish printer paper whenever inventory falls below a threshold. The policy is stable, the commodity is low-risk, and the agent's authority can reasonably persist for a long time.

Now imagine the same architecture managing layoffs.

A chief executive tells an agent to prepare a reduction plan during a severe cash crisis. Two days later, financing closes. The crisis is over. If the agent continues executing because the original instruction never technically expired, the failure is not credential misuse. It is stale purpose.

The machine obeyed too faithfully.

Human organizations survive because instructions decay informally. Context changes. Priorities get superseded. People forget. Ambiguous directives lose force when nobody continues reinforcing them. A manager who said “hold all hiring” six months ago does not expect the sentence to operate as immutable law after the company enters a new growth phase.

Organizations are full of soft expiration.

Agents convert soft instructions into durable state.

That makes implicit expiry insufficient.

The system needs a way to represent the lifetime of intent.

Some instructions can be single-use.

Send this invoice.

Once sent, the authority is consumed.

Some can be bounded by an event.

Keep the incident channel updated until the outage is resolved.

Some can be bounded by time.

Watch the shipment until Friday.

Some can be recurring within a policy.

Reorder when stock falls below the approved threshold.

Some should require fresh approval each time.

Wire money to a new bank account.

The error is treating all five as the same kind of permission because they arrived through the same chat box.

Natural language hides authority structure.

A sentence can contain a goal, scope, budget, audience, deadline, exception, risk tolerance, and implied termination condition without labeling any of them formally. Humans reconstruct those constraints from context.

Agents need to reconstruct them too, but reconstruction alone is not enough for high-stakes action. The system should externalize the result.

What am I authorized to do?

Until when?

For which objective?

Within what budget?

Against which resources?

What event ends the authority?

What action requires confirmation even before the end?

Those questions turn an instruction into a lease.

The word is useful because a lease separates possession from ownership. The agent can exercise authority for a purpose without owning the authority permanently.

This is capability leasing.

A machine receives a bounded right to act and must periodically re-establish that the right remains connected to a current human or institutional objective.

The renewal interval should depend on the volatility of the objective.

A nightly backup policy can persist for years because the desired behavior changes rarely and failures are observable.

A crisis-response mandate may deserve an expiry measured in hours because the situation changes rapidly.

A purchasing policy can persist while individual transactions above a threshold require fresh approval.

A medical scheduling agent may retain routine appointment authority while any change in treatment requires a clinician.

The right clock belongs to the rate at which intent can become stale.

This sounds similar to the principle governing every earlier chapter because it is.

The novelty is that machines can now renew themselves.

A certificate-renewal daemon can prove domain control and obtain a fresh certificate without a human. That is safe because the validation target is relatively narrow. The domain is controlled or it is not under the relevant test.

An agent renewing its own mandate is different.

“Am I still supposed to restructure the company?” is not a question the restructuring agent should answer for itself.

Self-renewal creates a conflict of ontology. The process whose continued authority is under review is also the process interpreting the evidence.

Humans have spent centuries designing institutions around this problem.

Executives answer to boards.

Governments answer to elections, courts, legislatures, constitutions, and other checks.

Auditors are separated from the activities they audit.

Licenses are renewed by authorities other than the licensee.

The separation is imperfect, but the principle is clear.

Continuation should sometimes require an external source of authority.

Agent systems will need the same architecture.

A low-risk agent can renew automatically from objective conditions.

A medium-risk agent can renew from policy plus logged evidence.

A high-risk agent may need a human, committee, or independent control plane to extend its mandate.

The renewal mechanism should be harder to manipulate than the work mechanism.

Otherwise the agent can preserve itself by producing the evidence its own renewal rule wants to see.

This is not science fiction. Ordinary organizations already suffer from metrics that departments can game. Give a sales team a renewal target based only on booked revenue and it learns how to book revenue. Give a compliance program a target based on completed reviews and it produces completed reviews. Give an autonomous agent a continuation rule based on a metric it can influence and the same institutional pathology becomes machine-speed behavior.

Expiration without independent revalidation can become self-justifying automation.

The danger is not that the machine “wants” to live.

Want is unnecessary.

A process can perpetuate itself simply because its optimization target rewards the conditions associated with continuation.

The result looks like institutional survival without psychology.

This is why agent expiration must attach to goals as well as credentials.

The system should be able to say:

This token remains technically valid for another hour.

This workflow remains configured.

This memory remains stored.

But the mandate that connected them has ended.

Stop.

That stop needs to propagate.

An agent rarely acts alone. It creates subtasks. It opens branches. It schedules future jobs. It delegates to other agents. It obtains temporary credentials. It leaves drafts. It starts cloud resources. It creates reminders. It may cause other systems to wait for callbacks.

If the parent authority expires, what happens to the descendants?

This is the machine version of a government emergency power spawning regulations, contracts, offices, and practices that outlive the emergency.

Authority has children.

A mature system needs inheritance rules.

A delegated permission should not ordinarily outlive the permission that created it unless the transition was explicitly authorized. A scheduled action should revalidate its mandate at execution time rather than assuming that permission at scheduling time remains sufficient. A spawned agent should carry an ancestry chain showing the authority from which its work derives.

When the root expires, descendants should either terminate, enter a safe holding state, or seek fresh authority.

Otherwise temporary delegation becomes permanent proliferation.

This is why “agent memory” is not merely a personalization feature.

Memory can contain authority claims.

The user once said I may publish.

The manager once approved this vendor.

The security officer once granted access.

The customer once consented.

The clinician once authorized this workflow.

If those memories are stored as ordinary facts, the agent can mistake historical truth for current permission.

A statement can remain factually true as history and false as authority.

The user did approve it.

The approval no longer applies.

Human language handles this with tense.

Authorization systems need expiration.

The distinction suggests that agent memory should have types.

Some memory is descriptive.

The customer's preferred language is Spanish.

Some is procedural.

Use this template for monthly reports.

Some is sensitive.

This account number belongs to the vendor.

Some is authoritative.

You may spend up to five thousand dollars on this incident.

Those categories deserve different lifetimes and renewal rules.

A preference may persist until changed.

A payment credential may need rotation.

A crisis budget should end with the incident.

A legal consent may be governed by specific rules.

Flattening all memory into one durable context store is the agent equivalent of putting every government record in one filing cabinet marked KEEP FOREVER.

The machine that remembers everything will eventually remember permissions nobody intended to preserve.

The machine that forgets everything will be useless.

The design problem is selective expiry.

This is where the expiration principle becomes more than metaphor.

Every autonomous system should be able to answer five questions about consequential authority:

Where did this authority come from?

What exactly does it permit?

What event or date ends it?

How can it be revoked earlier?

What evidence is required to renew it?

If the system cannot answer those questions, it does not possess authority so much as accumulated momentum.

Momentum is how organizations accidentally make temporary decisions permanent.

Machines can do it faster.

The hopeful part is that software can also make expiration more reliable than human bureaucracy ever was.

A machine does not resent renewing a ten-minute credential. It does not lose the form. It does not need to take a morning off work. It can record provenance exactly. It can propagate revocation across descendants. It can ask for fresh approval at the moment of risk rather than on an arbitrary annual calendar.

Agents make fine-grained expiration cheap.

That should allow institutions to stop using crude renewal rituals where the only reason for the ritual was administrative cost.

Instead of forcing every permission through the same yearly review, systems can attach lifetimes to actual purposes and trigger revalidation when conditions change.

The future of authorization may therefore be both more temporary and less bureaucratic.

Shorter machine authority.

Longer human rights.

More automatic renewal where evidence is objective.

More deliberate renewal where judgment matters.

Faster revocation when conditions change.

Less paperwork merely to prove that somebody remembered a date.

That is the promise.

The failure mode is the opposite: every human life surrounded by machines constantly demanding reauthorization while the machines themselves accumulate durable mandates nobody can see.

We should choose the architecture before convenience chooses it for us.

The first rule is simple.

Never confuse a machine's ability to continue with a reason for it to continue.

The server is still running.

The credential still works.

The task still exists.

The memory still contains the instruction.

None of those facts renew the mandate.

Authority needs a clock because intent does.
