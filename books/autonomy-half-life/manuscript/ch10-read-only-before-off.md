# Read-Only Before Off

The worst authorization screen in the world has two buttons.

Allow.

Deny.

The simplicity is seductive. It matches the machinery beneath many systems. Either the request satisfies policy or it does not. Either the user possesses the role or not. Either the token is valid or expired.

Binary decisions are unavoidable at the final point of execution. A database either accepts a write or rejects it. A payment either leaves the account or does not.

But the authority leading up to that point does not have to be binary.

This matters because a weakening mandate does not imply that the actor has become useless.

An agent may no longer have enough authority to send money while remaining perfectly able to reconcile the invoice. A doctor may need new consent for a procedure while continuing to monitor the patient. A project team may lose authority to commit funds while retaining authority to negotiate terms. An incident-response system may lose permission to change production after the incident is contained while continuing to inspect logs and prepare recommendations.

The intelligent response to weaker authority is often weaker consequence.

Not darkness.

This is one of the most practical consequences of autonomy half-life.

When the environment moves beyond the conditions of the grant, the system should have somewhere to go between “continue exactly as before” and “stop functioning.”

Read-only is the simplest example because computing already understands it.

A user can read a file without editing it. A database account can query without writing. A repository can be inspected without accepting a push. An infrastructure system can expose status without allowing configuration changes.

Read-only preserves situational awareness while reducing the danger of stale authority.

It is not always the right degraded state.

A system may need to draft, simulate, stage, reserve, queue, or recommend. The important distinction is between preparation and irreversible effect.

Imagine an autonomous operations agent detects an unusual condition in a production service. Under normal conditions it may restart processes and adjust capacity. The anomaly is outside the operating range described in its mandate. A binary policy has two unattractive choices.

Keep full authority and hope the agent adapts correctly.

Or suspend the agent and lose the fastest source of analysis at the moment it is most needed.

A graduated system can do something better.

Let the agent observe every relevant signal. Let it form a diagnosis. Let it prepare commands. Let it simulate the likely effect. Let it present the smallest irreversible step that needs fresh authority.

The mandate decays at the edge of consequence, not at the edge of cognition.

That principle supports autonomy because it keeps the delegate useful while respecting uncertainty.

It also makes renewal easier.

A human reviewer does not receive a blank request saying “Approve agent access.” The reviewer receives a prepared action: these facts changed, this is what the agent proposes, these are the expected effects, this is what remains reversible, this is the point at which external consequence begins.

The act of pausing generates evidence.

This is better than asking a human to take over from scratch.

Many governance systems accidentally make escalation expensive because the escalated case loses all the work already performed. The principal has to reopen the task, gather context, and reconstruct the decision. Under pressure, people learn to avoid escalation.

A good degraded mode does the opposite.

It uses the delegate’s capability to reduce the cost of fresh judgment.

This is especially important where the principal has less local information than the delegate.

Mission-command doctrine recognizes a version of this problem. A subordinate may encounter conditions the commander cannot see. If every change required remote control, the organization would become slow and brittle. Disciplined initiative depends on the subordinate understanding intent well enough to adapt without waiting.

Autonomy half-life should not turn such initiative into a permission queue.

The answer is to distinguish adaptation within purpose from changes that alter the consequences or premise of the mission.

A subordinate can choose a route. A team can change implementation. An agent can select among suppliers. Those are ordinary exercises of delegated judgment if the mandate anticipated them.

When the facts move outside the expected region, the delegate can continue sensing and preparing even if authority to commit narrows.

The design preserves local expertise.

This has a human analogue in professional work.

A junior lawyer can research and draft a motion but may not file it without approval. A financial analyst can build a transaction model but may not execute the trade. An engineer can prepare a production change but may need a second person to deploy it. A physician-in-training can perform certain steps under supervision while more consequential interventions require a credentialed clinician.

These arrangements are not merely hierarchical control. They decompose consequence.

The person closest to the work can carry much of the cognition. Authority is refreshed at particular boundaries.

Autonomous systems can be designed the same way.

The boundary should not always be human approval.

Sometimes a second machine control is appropriate. A policy engine can verify recipient, amount, data classification, or system state. A cryptographic co-signature can be required. A separate safety monitor can confirm that conditions remain inside validated limits. A short-lived execution credential can be minted only when prerequisites hold.

The important feature is separation.

The system deciding what to do should not automatically possess every means required to do it under all conditions.

This is an old security principle expressed through autonomy.

Separation of duties, least privilege, two-person rules, and staged deployment all recognize that cognition and consequence can be divided.

Autonomy half-life makes the division dynamic.

When mandate strength is high, the system may cross more boundaries on its own. As the world drifts, the system retains cognition but loses the right to cross selected consequence boundaries without fresh evidence.

Think of a trading agent.

Under normal conditions, it can rebalance a portfolio within a narrow risk envelope. Volatility spikes. Liquidity thins. A position becomes difficult to exit. The mandate need not go from full trading to zero awareness.

The agent can continue pricing, measuring exposure, proposing hedges, and preparing orders. It may be allowed to reduce risk but not increase it. It may cancel existing orders but not place new speculative ones. It may trade only more liquid instruments. It may require a human or second control for larger notional exposure.

Decay can have direction.

This is more useful than simply lowering a generic permission score.

The question is not “How much authority remains?” in the abstract.

It is “Which kinds of consequence remain justified under the changed world?”

A system under uncertainty may deserve more authority to retreat than to advance.

That asymmetry is familiar in safety engineering. Fail-safe design tries to move systems toward states that reduce hazard when control is lost. Autonomous governance can borrow the intuition without pretending every domain has a single safe state.

In finance, reducing exposure may be safer than adding it.

In data systems, preserving a copy may be safer than deleting.

In communication, drafting may be safer than publishing.

In procurement, requesting a quote may be safer than placing a nonrefundable order.

In infrastructure, staging a rollback may be safer than executing a novel change.

The decay path should reflect the domain’s asymmetries.

This is why “read-only” is a metaphor as much as a literal mode.

The principle is to retain low-consequence actions that improve knowledge while narrowing actions that irreversibly change the world.

There are cases where even observation must decay.

Access to sensitive data can itself create harm. A departing employee should not retain read-only access to customer records merely because writes are disabled. An agent whose purpose has ended may no longer have a legitimate reason to inspect private information. A government authority to collect or view data can be as consequential as an authority to act on it.

So the correct degraded state depends on what consequence means in the domain.

Privacy reminds us that reading can be an effect.

The design principle is therefore not “always preserve read.”

It is “preserve only those actions whose consequences remain justified, especially actions that help establish whether stronger authority should be renewed.”

That is a mouthful because the world refuses a universal ladder.

Still, several boundaries recur often enough to be useful.

Observing a public or already-authorized state is usually less consequential than changing it.

Drafting is usually less consequential than publishing.

Simulating is usually less consequential than executing.

Staging is usually less consequential than committing.

Reversible commitments are usually less consequential than irreversible ones.

Reducing exposure is often less consequential than increasing it.

Actions contained inside the principal’s environment are often less consequential than actions affecting outsiders.

Each “usually” matters.

A malicious draft can leak secrets. A simulation can consume scarce resources. A supposedly reversible transaction may impose costs. A private decision can affect employees. Governance becomes dangerous when a heuristic is mistaken for a law.

The value of graduated authority is flexibility, not false certainty.

A well-designed grant can name the important boundaries in advance.

“Research freely; ask before contacting anyone.”

“Draft changes; require approval before production.”

“Rebalance inside this risk envelope; escalate if volatility or concentration crosses these conditions.”

“Monitor the patient continuously; a new procedure requires fresh consent.”

“Prepare the filing; only a licensed attorney may submit it.”

These are familiar human instructions. Agent systems should be able to carry the same semantics.

The tool architecture should make the boundary real.

If the same credential can research, contact, purchase, publish, and delete, the instruction relies on the actor’s self-restraint. That may be acceptable for some trusted human relationships. It is a weak default for scalable autonomous systems.

A stronger design gives different consequence classes different capabilities or requires different forms of authorization at the boundary.

This creates an important product implication.

The user interface should show what the agent can still do when it cannot execute.

A system that simply says “Permission expired” trains users to lengthen permissions. People will choose convenience. They will grant a twelve-hour token because a one-hour token interrupted the workflow yesterday.

A system that says “I can continue preparing the work, but the recipient changed and I need you before I send funds” creates a different experience.

The interruption is narrow and intelligible.

The user sees the drift that caused it.

This makes meaningful renewal psychologically easier than blanket reauthorization.

The same lesson applies inside organizations. A control that stops an employee cold will be treated as an obstacle. A control that preserves preparation and identifies the exact consequence boundary is more likely to be accepted as part of professional judgment.

Selective friction earns legitimacy by being selective.

There is a risk of overengineering.

Once designers embrace graduated authority, they can produce elaborate state machines with dozens of modes. Each mode becomes another policy to test, another transition to audit, another failure case. Complexity can create hidden privilege just as easily as simplicity can.

The goal is not to model every shade of authority.

Use the fewest modes that correspond to genuinely different consequences.

For many systems, three may be enough: observe, prepare, execute. Others need more. The right number is the number the organization can explain under pressure.

Legibility is a safety property.

If operators cannot predict what the agent may do after a mandate weakens, the decay system becomes another source of surprise.

This matters during emergencies. Imagine an incident commander assumes an agent can still roll back a deployment, only to discover that a drift rule silently moved it into recommendation mode. The control meant to reduce risk can increase it.

Transitions therefore need to be visible, logged, and preferably testable before the crisis.

A mandate should not die in secret.

It should announce what changed and what remains possible.

This is another way autonomy half-life differs from ordinary expiration. Expiration is a cliff. Decay can be a path.

Paths can be designed around continuity of useful work.

The path can also run upward.

When evidence improves, authority can be restored in stages. A degraded supplier is cleared. A system returns to a validated state. A user confirms a changed recipient. A new legal authority is issued. The agent does not need a permanent promotion; it receives the consequence appropriate to the renewed conditions.

Autonomy becomes elastic.

That elasticity can support wider initial delegation because the principal knows the system will not treat every future condition as equally permissive.

The design resembles good human management.

A manager does not necessarily revoke responsibility when an employee encounters a novel problem. She may say, “Keep working it. Bring me the decision before you sign.”

The employee remains autonomous in analysis and preparation.

The manager refreshes authority at the point where the organization becomes committed.

We already know how to do this socially.

The challenge is to stop reducing it to Allow and Deny when we encode autonomy in machines.

The design becomes more interesting when the system has to choose which way to degrade.

A generic “lower authority” state can hide meaningful differences.

An agent facing uncertainty about a payment recipient should probably retain authority to investigate the invoice and perhaps to hold the transaction. An agent facing uncertainty about data consent may need to lose even read access. An agent facing a volatile market may be allowed to reduce an existing exposure while being forbidden to create a new one. An incident agent may retain rollback authority while losing authority to deploy novel fixes.

The degraded state should be directional.

That means a mandate should understand something about the topology of consequence.

Which actions move toward safety?

Which preserve options?

Which increase exposure?

Which create new obligations?

Which reveal new information without imposing material cost?

The answers vary by domain, but the question is general.

A scalar permission level cannot express it well.

Imagine a portfolio system with a generic authority score of 40 percent after a volatility shock. What does forty percent mean? Forty percent of position size? Forty percent of instruments? Forty percent of order frequency?

The useful policy is semantic: close risk, do not add risk; cancel resting orders, do not open new speculative positions; continue measurement, require review for new exposure.

Direction is more legible than a score.

The same is true in infrastructure. “Half authority” is meaningless. “May inspect, may roll back known releases, may not alter identity or persistent data” is understandable.

A second design question is whether degradation should preserve optionality.

Sometimes the safest useful action is to keep future choices open while fresh authority is obtained.

Reserve a refundable seat rather than purchase a nonrefundable one.

Stage a deployment without routing traffic to it.

Prepare a contract without sending it.

Place inventory on a short hold rather than complete purchase.

Draft a public response while legal review catches up.

These are not merely weaker actions. They are option-preserving actions.

They buy time.

This can make autonomy half-life economically attractive because the cost of asking again no longer includes losing every opportunity while the principal thinks.

The agent can move the task to the edge of commitment and stop there.

The principal receives a smaller decision at a better moment.

Optionality is not free, as the previous chapter argued. Holds consume inventory. Staging consumes resources. Other parties can bear costs. But an explicit option-preserving mode is often superior to either premature commitment or total inactivity.

A third design question is who controls the degradation transition.

If the same agent that benefits from finishing the task decides when it has become uncertain enough to lose execution authority, the system relies on self-restraint. That can work for trusted human professionals and may be appropriate in some agent designs.

High-consequence systems should often separate detection from enforcement.

The agent can detect a changed recipient.

A policy layer can narrow payment authority.

A safety monitor can detect an out-of-range operating condition.

The controller can switch to a safe action set.

A user can withdraw the underlying task.

The mandate then contracts independent of the actor’s preference to continue.

This is not because the actor is presumed malicious. It is because the control should survive the same error that created the uncertainty.

If the agent’s own interpretation is wrong, asking the agent alone whether its interpretation remains safe is circular.

A fourth question is what happens to work already in flight.

Graduated authority is easy to describe before action begins. Real systems contain pending payments, queued messages, half-completed deployments, negotiations, reservations, and sub-agent tasks when the mandate changes.

Does degradation cancel them?

Pause them?

Let them complete?

Convert them into reversible states?

The answer should follow the consequence already incurred.

A message still in an internal queue can be held. A bank transfer already settled cannot. A contract accepted by the other side may require legal termination, not a permission flip. A software deployment halfway through a migration may be safer to finish a bounded step than to stop mid-state.

Authority decay cannot repeal causality.

The system needs an unwind policy, not only a stop policy.

This is particularly important for autonomous agents because they will often have multiple concurrent actions under one mandate. A changed condition may affect some but not all.

The user cancels the conference. Cancel lodging and travel work. The expense report for a completed earlier trip may remain valid. The same agent identity is involved; the mandates differ.

Task granularity becomes governance granularity.

This is another reason standing actor permissions are too coarse for consequential autonomy.

A fifth question is whether the degraded mode can itself become permanent.

An organization can congratulate itself for reducing an agent from execute to prepare and then leave the agent in that ambiguous state for months. Human reviewers repeatedly approve the last step. Nobody asks whether the underlying grant should be renewed, redesigned, or retired.

Degradation can become a holding pattern that hides governance debt.

The system still needs resolution.

Restore the mandate because evidence returned.

Redesign it because the new conditions are ordinary now.

Retire it because the purpose ended.

A read-only purgatory is safer than full stale authority, but it is not necessarily good institutional design.

This suggests a half-life for degraded states too.

If a task remains degraded beyond a reasonable interval, force a higher-level question: is this still a live mandate, or are we keeping it around because nobody wants to decide?

The same pattern appears in human organizations. Temporary supervision becomes permanent co-signature. A provisional committee becomes standing review. A pilot never graduates and never ends.

The control accumulates without resolving the underlying authority.

A sixth question is how the system explains degradation to affected people.

A user sees an agent stop before payment. An employee loses production write access. A customer workflow is delayed. A team’s emergency authority contracts.

If the reason is opaque, the transition feels arbitrary.

“Policy denied” is not enough when the system previously allowed the same class of action.

The explanation should name the material change at the level the recipient can understand.

The payee changed.

The project closed.

The model version changed and has not yet been approved for autonomous execution.

The incident is contained, so emergency write authority ended.

The data purpose no longer covers this use.

Explanation is part of legitimacy because elastic authority otherwise looks like capricious authority.

The holder should know which world the permission belongs to.

Finally, graduated authority changes how we should think about “human in the loop.”

The phrase is often treated as a binary property. A human either approves actions or does not.

A more mature design asks where the human sits in the consequence path.

The agent may be fully autonomous in observation, research, planning, simulation, and drafting. The human may enter only at a changed-recipient payment or a novel production action. In another system, independent machine policy may handle most renewals while a human sees only ambiguous legal or strategic changes.

Human involvement becomes a consequence boundary, not a blanket supervision mode.

This can produce more meaningful human control with less human labor.

A human who sees fewer, better-prepared decisions can actually decide.

A human who sees every minor action becomes part of the furniture.

The goal of read-only-before-off is therefore larger than graceful failure.

It is to design authority so that uncertainty reduces the ability to impose consequences without throwing away the intelligence closest to the problem.

Keep the eyes open.

Keep useful thought moving.

Keep options alive where they are cheap enough.

And refresh the mandate at the point where thinking becomes commitment.