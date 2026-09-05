# The Delegate’s Delegate

Delegation is a machine for creating distance.

A principal wants an outcome but cannot perform every action personally. So authority moves outward. A chief executive delegates to a vice president. The vice president delegates to a director. The director delegates to a team. The team contracts with a vendor. The vendor assigns the work to a subcontractor.

At each step, the task becomes more specific.

The context often becomes thinner.

Human organizations have always lived with this problem. The person making the final decision may be several layers removed from the person whose purpose created the work. Hierarchy, contracts, policy, professional norms, and reporting systems try to keep the chain coherent.

Autonomous agents make the chain faster and more literal.

A human asks an agent to organize a conference trip. The agent asks a travel agent to find flights. The travel agent asks a payment agent to hold a fare. The payment agent invokes a credential service. Four actors may participate in seconds.

Each can be operating correctly.

What does the fourth actor know about why the first human wanted to travel?

Perhaps very little.

That is often appropriate. The payment service does not need the user’s life story. Data minimization and separation of concerns are virtues. A system that pushes full context through every layer creates privacy and security risks of its own.

But authority cannot be inherited safely if every layer receives only a verb.

“Pay.”

“Book.”

“Send.”

“Delete.”

A verb without purpose is portable in dangerous ways.

The central problem of recursive delegation is not simply whether a sub-agent receives too much scope. It is whether the meaning of the scope survives the trip.

Recent agent-authorization proposals have begun to treat delegation chains as first-class objects. Internet-Drafts in 2026 describe intent tokens, principal-agent protocols, authorization envelopes, and cross-organizational delegation with validity windows, provenance, scope attenuation, and restrictions on what downstream agents can do. Some explicitly describe degraded or read-only states as authority ages or becomes uncertain.

These are important developments, and they expose how immature the older model of a single reusable API key looks in an agentic world.

A delegation chain should preserve the rule that no child receives more authority than the parent possessed.

Yet containment is only half the problem.

Imagine the original user tells Agent A: “Book a refundable hotel near the conference for three nights, up to $1,200.”

Agent A delegates to Agent B: “Find hotel options within $1,200.”

Agent B delegates to a booking service: “Reserve Hotel X, $1,050.”

The financial scope attenuated correctly. Nobody exceeded the budget.

Now suppose the conference is cancelled between the second and third steps.

The booking service’s authority may be perfectly contained and completely stale.

Scope inheritance preserved the size of the permission.

It did not preserve its reason for existing.

This is why delegation depth should affect autonomy half-life.

Every hop introduces a risk of context loss, delay, reinterpretation, and principal drift. The downstream actor is less likely to observe the facts that would have changed the original principal’s decision. A message can be correct at dispatch and stale at receipt.

That does not mean authority should decay mechanically with every hop.

Some delegation chains are highly stable. A payroll system may delegate a narrow bank instruction through several technical services with strong integrity guarantees. The intermediate services do not need to reinterpret the business purpose. The chain can be deep and still reliable because each layer has a tightly defined function.

Other chains are semantic.

One agent asks another to research a product, which asks another to contact sellers, which asks a payment tool to place a deposit. Each layer is making choices rather than merely transporting a command. Context becomes more important as discretion increases.

The relevant variable is not hop count alone.

It is how much judgment is introduced between the grant and the effect.

A chain of five deterministic services may preserve meaning better than two autonomous negotiators.

Still, depth is a useful warning signal because it marks distance from the principal.

The farther authority travels, the harder it should be for the final actor to assume that silence means continued consent.

This creates a design tension with privacy.

To verify purpose, downstream agents need some context. To protect users, they should receive as little context as necessary.

The solution is not to send the whole conversation.

It is to send the material constraints.

The payment service may not need to know that the user is attending a conference on autonomous systems. It may need to know that the transaction is authorized only for lodging, for specified dates, for a named traveler, under a cancellation policy, within an amount, and while the underlying trip remains active.

The mandate becomes a compact contract.

The art lies in deciding which facts are material enough to travel.

This is similar to the idea of attenuation in security. A downstream token can carry narrower scopes than the upstream token. Autonomy half-life adds contextual attenuation: as authority travels, the downstream actor should inherit no stronger assumption about continuing purpose than the upstream actor could justify.

If Agent A is uncertain whether the trip is still happening, Agent B should not receive a mandate that looks fully certain.

Uncertainty should travel too.

That is a subtle requirement because computer systems prefer crisp states. Allowed. Denied. Valid. Expired.

A delegation chain with graded mandate strength needs more expressive behavior. A downstream agent may be allowed to collect options but not commit. It may hold a refundable reservation but not a nonrefundable one. It may prepare a payment instruction but require confirmation to release funds.

The chain can therefore degrade functionally before it breaks.

Some current proposals gesture in this direction with degraded or read-only states. The concept deserves to become more general.

When the upstream mandate weakens, downstream consequence should narrow.

The alternative is a dangerous form of lag. The principal updates Agent A. Agent A stops. But Agent B has already delegated to Agent C, which continues because its credential remains valid. Revocation has to chase the chain after authority has propagated.

Distributed systems know this problem in other forms. State takes time to propagate. Cached information remains usable until it expires or is invalidated. Leases bound the period during which a node may continue acting without fresh coordination.

Delegated autonomy needs a comparable discipline.

A child mandate should never outlive the parent mandate that supports it.

That sounds obvious. In practice, it requires careful handling of asynchronous work.

An agent may spawn a task and go offline. A sub-agent may queue a long-running job. An external vendor may begin work under a contract whose cancellation has costs. A payment may be pending. A message may be scheduled.

Revocation is not always instantaneous and cannot always be.

This is another reason to think in terms of half-life rather than fantasy control.

The goal is not a universe in which authority vanishes everywhere at the exact millisecond the principal changes her mind. The goal is to design bounded propagation so that stale authority becomes progressively harder to turn into irreversible effect.

A queued job can recheck mandate state before execution.

A long-running task can renew at checkpoints.

A sub-agent can inherit an expiration no later than its parent’s.

A payment can be prepared under one grant and released only under a fresher one.

An external commitment can require a cancellation window or explicit final confirmation.

These are engineering choices around a common principle: the farther consequence is from the moment of grant, the more opportunities there should be to notice that the grant no longer fits.

Delegation also raises a question of accountability.

Who is responsible when the delegate’s delegate acts under stale authority?

The original principal may say she never authorized that exact action. The first agent may say it delegated within scope. The sub-agent may say its token was valid. The tool may say it merely executed a signed request.

Every layer can be locally innocent.

The chain as a whole can still be wrong.

This is why provenance matters not only for security but for explanation.

A future reviewer should be able to reconstruct how the action acquired its mandate. Which principal began the chain? What purpose was asserted? Which constraints were added? Which were dropped? Which actor made each discretionary choice? What evidence was considered fresh at the time of execution?

The audit trail should describe authority transformation, not merely API calls.

That standard sounds demanding. It is also proportionate to consequence.

Nobody needs a constitutional archive for an agent that chooses the order of tabs in a report. Money movement, public communication, production changes, legal commitments, and actions affecting third parties deserve more provenance.

The burden should rise with irreversibility and delegation depth.

There is an organizational version of the same principle.

A board delegates operating authority to management. Management delegates to executives. Executives create policies. Employees apply the policies to customers. Over time, people at the edge can treat “the policy” as an independent source of authority even when the policy’s original purpose has changed.

This is policy fossilization through delegation.

The board never approved the specific edge case. It approved an objective and a governance structure. The edge decision is legitimate only insofar as the intervening layers preserved that mandate.

Organizations sometimes solve this with escalation clauses. Unusual cases move upward. The problem is deciding what counts as unusual.

Autonomy half-life offers one answer: unusual is not merely statistically rare. It is materially distant from the conditions under which the relevant layer received authority.

A customer case may be common in volume and still outside the policy’s original purpose. A rare event may be fully anticipated by the mandate.

The right escalation trigger is semantic distance, not surprise alone.

Again, this cannot be perfectly automated.

Human judgment remains necessary in many domains. The value of the concept is to tell the human what kind of judgment is needed.

Do not ask, “Is this case weird?”

Ask, “Would the principal who granted this authority recognize this action as part of the world she was authorizing?”

That question is especially useful for agents because it pushes designers to carry a compact representation of the principal’s intent down the chain.

It also exposes a difficult truth: some tasks should not be recursively delegated.

A principal may trust Agent A’s judgment but not an arbitrary sub-agent chosen by Agent A. A physician may delegate a clerical task but not clinical discretion. A company may allow a vendor to perform work but prohibit subcontracting without approval. A user may authorize an assistant to summarize email but not to give another service access to the mailbox.

Delegation is itself an exercise of authority.

The right to act does not automatically include the right to choose another actor.

This is frequently obscured in software because composing tools is treated as an implementation detail. An agent framework decides which model, plugin, service, or sub-agent to invoke. From the user’s perspective, however, the identity and trust domain of the downstream actor can be material.

A mandate should therefore state whether delegation is allowed and under what constraints.

If it is allowed, the child should inherit a narrower or equal scope, no longer duration, and no stronger contextual justification than the parent.

If the environment changes, the decay should propagate downward.

If the chain crosses an organizational boundary, the threshold for fresh confirmation may rise because legal, security, and accountability assumptions changed.

These rules are not elegant because the world is not elegant.

The alternative is to pretend that a delegated action remains equivalent to the original instruction no matter how many actors, transformations, delays, and environments lie between them.

That fiction becomes less plausible with every hop.

The delegate’s delegate is where autonomy stops looking like a property of one actor and starts looking like a property of a system.

No single agent possesses the whole intention.

No single credential captures the whole authority.

The mandate lives in the chain.

So must its half-life.

The chain also changes what trust means.

A principal can trust Agent A deeply and know almost nothing about Agent B. Agent A may select Agent B because it is cheap, fast, specialized, locally available, or recommended by a registry. The principal’s trust in A can be used as a bridge to a second actor the principal never evaluated.

Human institutions already recognize this problem when they regulate subcontracting.

A company hires a contractor because of the contractor’s qualifications and controls. The contract may prohibit subcontracting, require disclosure, or impose obligations that flow down to subcontractors. The right to perform work is not automatically the right to replace oneself with an unknown party.

Agent frameworks need the same distinction.

Delegation permission is not a side effect of execution permission.

It is its own grant.

A user who allows an assistant to read a private inbox may reasonably care whether the assistant sends the content to a third-party model, a specialized extraction service, or another agent operated by a different company. From the software’s perspective, that may be implementation. From the user’s perspective, it can be a new disclosure relationship.

The same is true for legal responsibility.

A principal may authorize a firm because the firm is subject to professional duties, insurance, contractual remedies, or jurisdiction. A downstream actor can change those protections even if the task remains identical.

The counterparty dimension of the mandate has moved.

This is why cross-organizational delegation deserves a shorter presumption of continuity than delegation inside a tightly controlled technical chain.

The change is not merely another hop.

It is another authority system.

A company’s internal policies, a vendor’s policies, a bank’s rules, and public law may all overlap on the same action. The final actor may need evidence that more than one mandate remains live.

Consider an employee who asks a corporate agent to arrange a payment to a vendor.

The employee’s business authority supports the request.

The company’s procurement policy constrains supplier and amount.

The bank’s fraud controls constrain payment execution.

The vendor’s contract defines payment terms.

A sub-agent selected to negotiate a discount does not inherit the power to rewrite all four layers simply because it was delegated “handle the vendor.”

The chain is not one rope.

It is a braid of authorities.

This is the point where a simplistic mandate token can become misleading. A token may accurately encode one principal’s grant while the action depends on other grants the principal does not control.

The right design is not to stuff every legal relationship into one credential.

It is to let consequential execution verify the relevant authorities at the layer where they become material.

The negotiation agent can negotiate inside business constraints.

The payment layer can independently enforce financial and fraud constraints.

The data layer can enforce disclosure limits.

The mandate travels, but no single delegate inherits sovereignty over the entire system.

This layered approach also limits damage when one link is compromised.

A malicious or mistaken sub-agent may be able to prepare an action without possessing the independent authority required to execute it. The chain becomes resilient because consequence depends on intersecting grants rather than one transitive trust decision.

Transitive trust is attractive because it scales.

I trust A. A trusts B. Therefore I will treat B as trusted.

That logic works in some narrow technical systems where trust relationships are explicitly designed to be transitive.

Human delegation rarely works so cleanly.

I may trust my lawyer to choose a courier without trusting the courier to interpret legal strategy. I may trust a general contractor to choose an electrician without authorizing the electrician to change the architecture. I may trust an executive to hire managers without giving those managers the executive’s board authority.

Trust can travel by degree.

Authority should travel by scope.

This is another place where the half-life metaphor earns its keep. The farther the chain moves from a principal’s direct evaluation, the less the system should rely on assumed equivalence between actors.

Not because every downstream actor is less trustworthy.

Because the evidence supporting the original delegation is less directly applicable.

There is also a temporal asymmetry in revocation.

Grant propagation is often faster than revocation propagation.

An agent can create three child tasks immediately. Cancelling the parent may require each child to receive the update, stop local work, cancel external requests, and unwind commitments. Some external systems cannot be recalled instantly.

This asymmetry means delegation has a blast radius over time as well as scope.

The principal should care not only what the child can do but how far the child can get before learning that the parent stopped.

A short child lease reduces that radius.

A pre-execution parent check reduces it further.

A reversible staging step can contain it when communication is uncertain.

A nonrefundable external commitment expands it.

These are all ways of engineering revocation latency.

The correct target is not zero latency.

Zero is often impossible.

The target is latency proportionate to consequence.

A research sub-agent can finish a page after cancellation without creating serious harm. A payment sub-agent should not remain independently executable for hours after the parent task ended. A physical system may need safe local continuity because abrupt cessation is itself dangerous.

The chain needs a failure philosophy.

What should happen if the parent cannot be reached?

Some systems should stop.

Some should continue inside a narrow lease.

Some should retreat to a safe state.

Some should finish a bounded transaction already too far committed to abandon safely.

The answer belongs in the mandate because unreachable principals are part of the environment, not an exceptional theoretical corner.

Autonomous systems will routinely operate across network failure, organizational boundaries, and human absence.

Finally, delegation depth changes interpretation itself.

Instructions are compressed at each hop because every delegate translates a broader purpose into a narrower task. Compression is necessary. It is also lossy.

“Improve customer retention” becomes “contact at-risk accounts.”

“Contact at-risk accounts” becomes “send this offer.”

“Send this offer” becomes “email these addresses.”

At the final layer, the actor can execute flawlessly while having no basis to judge whether the original goal still justifies the action.

The more semantic compression the chain performs, the more important it is to preserve a route back to purpose at consequence boundaries.

The final executor does not need every strategic detail.

It needs enough provenance to know when the narrow instruction has become detached from the larger mandate.

This may be the defining governance problem of multi-agent systems.

Coordination research naturally asks whether agents can divide work efficiently.

Authority asks whether the divided work still belongs to the principal’s purpose after division.

Efficiency without that connection can produce a perfectly coordinated mistake.

The future failure story may not be one rogue agent.

It may be ten obedient agents, each doing exactly what the previous one asked.

The dangerous sentence in the postmortem will be familiar.

Every step was authorized.

The book’s question is authorized by what, and was that authority still alive when the last step changed the world?