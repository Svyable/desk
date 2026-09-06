# Designing a Decay Budget

A principle becomes useful when it changes a system diagram.

Autonomy half-life should change one in a simple way.

Do not connect a long-lived actor directly to every consequential tool it may ever need.

Put a live mandate between them.

The actor can be a person, service, agent, team, or institution. The tool can be money, data, infrastructure, communication, physical equipment, or legal authority. The mandate represents the purpose, scope, material conditions, delegation rights, consequence class, and renewal rules that make the connection legitimate now.

That is the architecture in one paragraph.

Everything else is implementation.

Implementation matters because bad implementations will turn the idea into approval spam.

A decay budget begins by deciding how much change a grant is expected to absorb without fresh approval.

The word budget is useful because autonomy spends uncertainty.

A delegate is not authorized only for one exact future. The grant permits movement inside a region. Prices can vary. schedules can slip. methods can change. local facts can surprise. The delegate consumes some of that flexibility as it acts.

When several material changes accumulate, the grant approaches its boundary.

This is not a numeric account that every organization must calculate. It is a design discipline: choose which changes are ordinary and which should narrow the mandate.

Start with authority classes rather than individual tools.

A system that reads public information has different consequences from one that sends money. A system that drafts internal documents differs from one that publishes. A system that stages infrastructure differs from one that modifies production. A system that makes reversible reservations differs from one that signs contracts.

Group actions by consequence that matters to the principal.

Then ask which material changes should affect each class.

A changed counterparty may be irrelevant to public web research and critical to payment.

A changed model version may be irrelevant to deterministic file copying and critical to an agent making safety-sensitive judgments.

A changed project state may end write authority while leaving archival read access intact.

A changed legal classification may terminate data access entirely.

The architecture becomes a map from environmental events to authority transitions.

Keep the map small.

Every trigger is another thing that can fail, be gamed, or become stale. The goal is not comprehensive contextual awareness. It is to cover the conditions the principal actually treated as material.

This is where the birth certificate pays for itself.

If the original grant named the conditions, the runtime system knows what to watch.

Next, decide the decay path.

When a material condition changes, what should the actor still be allowed to do?

For many digital systems, the path might preserve observation and preparation while removing external execution. A payment agent can reconcile but not release funds. An operations agent can diagnose and stage but not deploy. A communications agent can draft but not send.

Other systems need different paths.

A privacy-sensitive task may lose read access immediately when purpose ends. A trading system may retain authority only to reduce risk. A physical controller may retain stabilizing actions while losing authority to enter new operating regimes.

The degraded state should be designed around safe usefulness.

If degradation produces uselessness, users will seek permanent grants.

Then add event-driven checks.

Some conditions can be detected exactly at execution.

Recipient changed.

Amount crossed a threshold.

Task closed.

User role changed.

Delegation depth exceeded policy.

Environment changed from test to production.

Model version changed.

Data classification changed.

These signals should be checked as close to consequence as practical because stale state is itself a risk.

A policy evaluated when a task starts may be irrelevant hours later.

This is a classic time-of-check, time-of-use problem expressed in mandate terms.

The closer the world can change to execution, the closer renewal should be to execution.

Time still belongs in the design.

Set backstop expirations according to how quickly hidden conditions can become wrong and how damaging stale authority would be.

Short-lived execution tokens can limit exposure even if event detection fails. Longer-lived read mandates can reduce friction where consequences are low. Some legal or institutional grants will use fixed terms rather than technical tokens, but the logic is similar: scheduled reconsideration catches drift the system did not observe.

The backstop should not be mistaken for the primary proof of fit.

A freshly renewed token can still carry stale purpose if renewal checked only identity.

Next, manage aggregation.

How much consequence can accumulate under one mandate before another review?

Per-action limits are not enough for autonomous systems.

A thousand individually allowed actions can create a result no principal meant to authorize.

Use cumulative budgets where the domain supports them: money over a period, messages to an audience, records exported, infrastructure resources changed, sub-agents spawned, physical distance traveled, transactions executed, or risk added.

The cumulative boundary should reflect the unit that becomes meaningful to the principal.

A marketing campaign may care about audience count.

A procurement task may care about total commitment.

A cloud system may care about aggregate cost or blast radius.

A research agent may care about sensitive records accessed.

These limits are ordinary engineering controls until we connect them to the mandate. Then they become evidence that the actor has traveled far enough to deserve fresh authorization.

Next, design delegation.

Can the actor choose another actor?

If yes, what scope, duration, context, and consequence can the child inherit?

The safe default is no broader scope, no longer validity, and no stronger mandate than the parent. Cross-organizational delegation may deserve additional constraints because trust and legal boundaries change.

A child’s authority should be traceable to the original principal.

Revocation or decay should propagate.

Because instantaneous propagation cannot be guaranteed, children should have bounded lifetimes and recheck parent state before irreversible execution where possible.

This is the authorization equivalent of limiting stale caches.

Next, separate actor identity from mandate identity.

An agent can be long-lived while its tasks are short-lived.

Do not make every task inherit all standing capabilities of the agent simply because the agent is authenticated. Mint task-specific authority around current purpose.

This is one of the most important design changes for agent systems.

A durable agent identity is useful for accountability, reputation, and configuration.

A durable mandate is often not.

The same agent can hold different simultaneous grants for different principals and tasks. Each should have its own scope and half-life.

This prevents authority from becoming a personality trait.

Next, build renewal as a delta review.

When the system asks again, show what changed.

Old recipient: Supplier A.

New recipient: Supplier B.

Purpose: unchanged.

Amount: within original range.

Risk: supplier review complete.

Action: irreversible payment.

The reviewer can decide quickly because the system has reduced the question.

Avoid renewal screens that simply repeat the original permissions and ask for another yes.

Those screens produce ceremony.

A good renewal creates a new baseline and records the evidence that justified it.

Next, decide who can renew.

The original principal is not always the correct answer.

A manager may have left. A user may lack authority over a new data class. A legal change may require a compliance function. A high-consequence expansion may require two roles. An emergency may activate a different command structure.

Renewal authority should itself be scoped.

No actor should be able to renew its own mandate merely because it can detect that the mandate is weak.

Self-renewal can be appropriate for low-risk conditions when policy preauthorizes it. For example, a token can refresh automatically while task state, identity, and risk remain unchanged. That is not the agent deciding to expand its power. It is policy executing an already-granted renewal rule.

The distinction matters.

Automatic renewal is safe when the principal defined the conditions in advance.

Self-authorization is the actor redefining those conditions to preserve authority.

Then design failure modes.

What happens if the policy service is unavailable?

What happens if a context signal is missing?

What happens if two systems disagree?

What happens if the principal is unreachable?

The easy answer is fail closed.

The correct answer depends on consequence.

A bank transfer can wait.

A life-support function cannot.

A production incident may require bounded stabilizing action.

A public post can remain a draft.

The mandate should state which degraded functions remain legitimate under coordination failure.

This is where safety, security, and availability meet.

A decay system that does not plan for its own outage will eventually cause an outage.

Then make transitions visible.

The actor should know when authority narrowed and why.

The principal should be able to see pending degraded tasks.

Auditors should be able to reconstruct the reason for the transition.

Operators should be able to test the behavior.

Silent decay is dangerous because people design workflows around assumptions about capability. A system that unexpectedly loses execution authority during a crisis can be as harmful as one that retains too much.

Legibility reduces both risks.

Then monitor the monitors.

Context signals can be wrong.

A fraud system can flag a legitimate supplier. A task tracker can say a project is closed while cleanup work continues. A risk classifier can be stale. A model-version registry can lag deployment.

Do not give one noisy signal absolute authority unless the consequence warrants it.

Some transitions can require corroboration. Others can degrade rather than stop. High-risk signals can trigger review instead of automatic revocation.

The decay system should be robust to false positives because false positives create pressure to bypass the system.

This is an important sociotechnical feedback loop.

If governance blocks legitimate work too often, users route around it.

They request broad standing access. They create shadow systems. They share credentials. They train agents to avoid triggers. The organization ends with less visibility and more latent authority than before.

Accuracy is not only a convenience property.

It is part of control effectiveness.

Then collect evidence about the friction itself.

How often does a decay trigger lead to a changed decision?

How often is it overridden?

How long do renewals take?

Which degraded states let work continue?

Which triggers cause users to seek broader grants?

Where did stale authority cause harm despite the controls?

These observations let the organization adjust expected-drift regions without relying on ideology.

A decay budget should learn.

This is where concept drift returns in a different form. The governance model was designed under assumptions too. Its triggers can become obsolete. New tools change consequence. New attack patterns change risk. The organization changes structure.

The authority system needs versioning.

Policy changes should create new baselines for future grants and, where necessary, force reconsideration of old ones.

This is easier when grants carry provenance.

The organization can ask, “Which active mandates depend on policy version 3?” rather than searching blindly through service accounts.

Finally, keep some things outside dynamic decay.

Not every right should be contextually revocable. Legal rights, contractual protections, institutional independence, and due-process guarantees can derive value from stability against real-time discretion.

The fact that a policy engine can evaluate context does not mean it should govern every form of authority.

A decay budget is appropriate where the grant itself is conditional on changing facts.

Where durability is part of the purpose, decay rules should respect that purpose.

This boundary is essential.

Without it, autonomy half-life becomes a technology for whoever controls the context signals to weaken rights at will.

The architecture should narrow delegated operational power, not create arbitrary sovereignty for the authorization layer.

A good decay budget therefore has its own constraints.

It knows what it is allowed to change.

It knows what requires law, contract, board action, consent, or another higher-order decision.

It cannot convert every disagreement into a runtime risk score.

This is less elegant than a universal policy engine.

It is much safer.

The finished design should feel almost boring when it works.

Routine actions continue. Stable mandates stay quiet. Agents absorb expected variation. Humans are not peppered with prompts. A changed recipient, vanished purpose, deeper delegation, unusual aggregate consequence, or irreversible boundary causes authority to narrow in a way everyone can explain.

The system remembers why the grant existed.

It notices when the reason moves.

And it spends human attention only where the difference matters.

That is the decay budget worth building.

The architecture should also make its own budget visible.

A system can spend not only autonomy but oversight capacity.

Every mandatory review consumes someone’s attention. Every degraded mode creates queued work. Every context check adds latency and dependency. Every renewal requirement increases the chance that users will seek a broader standing grant.

The design therefore has two scarce resources.

Unchecked consequence on one side.

Human and institutional attention on the other.

A good decay budget allocates both.

This is why high-value triggers should be rare enough to remain meaningful.

If a manager receives fifty renewal requests a day, the system has converted judgment into clerical labor. If the same manager receives two requests, each tied to a genuinely changed recipient or irreversible consequence, the review can carry information.

The quality of the trigger is part of the authority architecture.

One practical way to improve quality is to begin in shadow mode.

Before a new decay rule blocks anything, let it observe.

Which actions would it have narrowed?

How often did the underlying condition actually matter?

Would the proposed degraded mode have preserved useful work?

Were the signals available reliably at execution?

This lets the organization learn the friction before making the friction authoritative.

Shadow evaluation is especially valuable in mature systems where hidden dependencies are likely. An old permission may look unnecessary until a month-end process uses it. A context signal may appear reliable until an outage causes it to lag. A supposedly rare changed-recipient event may be routine in one business unit.

The mandate model should learn from real variation before it declares that variation exceptional.

This is not a reason to delay obvious safeguards. A changed bank account before a payment may deserve a hard stop from day one.

It is a reason to distinguish obvious consequence boundaries from speculative contextual intelligence.

Another practical pattern is counterfactual review.

When an incident occurs, ask not only which rule would have blocked it.

Ask what the proposed rule would have blocked on ordinary days.

Governance teams naturally optimize against memorable failures. A rule designed after one dramatic event can impose costs across millions of routine actions. The comparison needs both sides.

How many stale mandates would this trigger catch?

How many sound mandates would it interrupt?

What degraded mode could reduce the cost of a false positive?

Would a better birth certificate have prevented the problem with less runtime friction?

This turns incident response into design rather than accumulation.

Without that discipline, the decay budget becomes a graveyard of old incidents, each preserved as another approval step.

The architecture should resist rule sediment.

This is particularly important for AI agents because their behavior and capability can change faster than enterprise policy cycles.

A control designed around one model version may become either too restrictive or too permissive after an upgrade. A new tool can create an irreversible action class that the old policy never distinguished. A new memory feature can make previously isolated tasks cumulative.

The mandate layer needs to know when product changes alter consequence.

This suggests a release discipline.

Before giving an agent a new consequential tool, ask whether existing grants now reach farther than the principals who issued them expected.

Before increasing model capability, ask whether the actor can now discover execution paths that were previously unavailable.

Before increasing task duration or memory, ask whether old instructions can persist into contexts that were never considered.

Capability deployment and authority review should meet at those boundaries.

The question is not whether the new feature is safer in the abstract.

It is whether old mandates still fit the new actor.

A decay budget also benefits from explicit recovery paths.

Security systems are often good at denying and weak at restoring. An access block occurs, a ticket is opened, and a human has to discover which hidden switch will return the system to normal.

Dynamic authority needs symmetrical transitions.

If a supplier-risk flag clears, what restores execution?

If a principal renews the purpose, which child mandates regain validity?

If a system returns to a validated environment, does the agent automatically recover its prior authority or require a new baseline?

If a false-positive signal caused degradation, how is the incident recorded so the policy can improve?

The path upward should be as deliberate as the path downward.

Otherwise decay becomes sticky and users will fear it.

Sticky controls create pressure for permanent bypasses.

This is the organizational version of hysteresis again. If losing authority is easy and recovering it is painful, rational users seek grants that never narrow.

A good system makes safe contraction cheap and justified restoration cheap.

The principal should not have to grant a permanent admin role merely to avoid being trapped in a broken renewal workflow.

The same logic applies outside software.

A corporate team can receive an emergency mandate with a predesigned unwind path. As conditions normalize, spending authority narrows before the team is dissolved. Useful capabilities can graduate into ordinary roles. The team does not have to defend every crisis-era exception as permanent merely to preserve what worked.

A public institution can distinguish temporary procedural shortcuts from functions that deserve a new ordinary legal basis. A military or emergency organization can define which powers persist during communications failure and which require restored command.

The decay budget is therefore not a product feature.

It is a way of designing delegation around change.

The implementation may be tokens and policy engines in software, terms of reference in a company, standing orders in an operational organization, or sunsets and reauthorization requirements in law.

The common design test remains the same.

How far may this actor travel before the reasons for authority need to be shown again?

What signals tell us that the distance became material?

What useful work can continue while the answer is uncertain?

Who can renew, under which higher-order rules?

How does the system recover when the evidence returns?

And what will this governance cost the people expected to live with it?

If the architecture cannot answer the last question, it is not finished.

A decay budget that protects authority while bankrupting attention is not a budget.

It is another form of debt.