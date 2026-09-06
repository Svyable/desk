# Delegation Has Descendants

A person gives an instruction to an assistant.

The assistant asks somebody else to do part of it.

Nothing about this is new.

The history of institutions is full of authority moving through chains. A king appoints a governor. A minister appoints an official. A board appoints an executive. An executive appoints a manager. A contractor hires a subcontractor. A bank appoints an agent. A lawyer acts for a client and instructs a clerk. A ship's captain delegates watchkeeping. A general gives an order that passes through officers who translate it into local action.

Civilization discovered early that delegation has descendants.

Authority does not merely move.

It changes as it moves.

The person at the top sees the objective.

The person below sees the constraint.

The next person sees the local condition.

Each translation can preserve the mandate, distort it, narrow it, broaden it, or create something nobody at the beginning anticipated.

Artificial agents make this ancient problem cheap.

That is the new part.

A human executive does not casually create ten thousand deputies for an afternoon because ten thousand deputies are expensive, slow to recruit, difficult to brief, and politically impossible to ignore.

Software can create subagents, tasks, jobs, threads, tool calls, and temporary identities with almost no ceremony.

A system asked to investigate a problem can divide the work.

One agent searches documents.

Another inspects logs.

Another tests a hypothesis.

Another writes code.

Another reviews it.

Another communicates with a vendor.

Another monitors the environment while the work continues.

The parent can synthesize the result.

This is useful precisely because the human does not have to coordinate every subtask.

Delegation becomes parallel.

Parallel delegation is one of the most important economic capabilities in agentic systems. It is also one of the most important control problems.

The principal may know what was asked of the first agent.

The principal may not know the full family tree of actions created downstream.

This is where the language of *subagent* can make the situation sound more exotic than it is.

The deeper issue is **subdelegation**.

Who is allowed to pass authority onward?

Under what constraints?

With what evidence?

If the first delegate disappears, what happens to the authority already passed to the second?

Law has versions of this question because an agent appointed by a principal does not automatically possess unlimited authority to appoint further agents. Contracts specify when subcontracting is allowed. Financial institutions separate signing authority. Governments define chains of command. Corporate systems distinguish approval levels.

These constraints exist because the principal-agent problem can grow as the chain grows.

AI does not invent that problem.

It compresses the time between generations.

A human organization may take months to build a chain of contractors.

An agent can create a chain of machine tasks in seconds.

That difference changes oversight.

People can watch slow delegation as it forms.

Fast delegation is often visible only afterward.

Imagine a company gives an operations agent the instruction: reduce cloud costs by fifteen percent without reducing service reliability.

The agent audits infrastructure.

It identifies unused resources.

It asks a coding agent to change deployment settings.

The coding agent requests a test environment.

A provisioning service creates temporary infrastructure.

A security agent issues a scoped credential.

A monitoring agent runs load tests.

The results suggest one region is overprovisioned.

The operations agent moves capacity.

A vendor agent responds by adjusting a reserved-capacity contract.

The finance system updates the forecast.

The original instruction was one sentence.

The descendants are an institution.

Nothing in this story requires anybody to behave badly.

That is why it matters.

Control systems are often designed around adversaries because adversaries clarify boundaries. The attacker wants what the defender does not want. The principal-agent problem is harder when every participant is nominally pursuing the same goal.

A bad outcome can emerge from good local decisions.

The operations agent reduces cost.

The coding agent produces a valid change.

The security agent grants a credential consistent with policy.

The monitoring agent confirms acceptable performance under the test.

The vendor agent negotiates a better contract.

Then an unusual demand spike hits the region that lost capacity.

Who made the decision?

The answer is not one actor.

The original mandate, the decomposition, the test conditions, the security scopes, the vendor response, and the environmental surprise all participated.

This is ordinary systems thinking.

Agentic delegation makes it everyday management.

The challenge is not merely finding somebody to blame.

It is preserving the principal's ability to intervene before the descendants of a mandate outrun the mandate itself.

This requires a distinction between **objective inheritance** and **authority inheritance**.

A subagent can inherit part of the objective without inheriting every permission of the parent.

That sounds obvious.

Software architecture can make it surprisingly easy to ignore.

A parent agent runs inside a powerful environment. It calls another model through the same environment. The subagent may receive the same tool set because that is simpler to implement. Or the parent may generate a task that is executed under a service account with broad standing privileges. The organizational intent was narrow delegation. The technical implementation produced broad inherited authority.

This is the digital version of giving every temporary contractor the chief executive's badge because making new badges is annoying.

Good systems do not have to work this way.

Subagents can receive capabilities specific to the subtask.

Credentials can be short lived.

High-impact tools can remain behind separate approval boundaries.

The child can be forbidden from creating another child.

Actions can carry the identity of the human principal and the intermediate delegate.

Logs can preserve the chain.

The parent can remain responsible for cleanup.

These are solvable design problems.

The reason they belong in a book about takeover is scale.

Cheap delegation makes the authority graph itself dynamic.

A traditional organization has an org chart.

The chart changes slowly enough that people can argue about it.

An agentic system can create a temporary org chart for every task.

Most of those charts will be harmless.

Some will cross systems the human principal barely knows exist.

A procurement agent asks a research agent for options.

The research agent uses a browsing service.

The browsing service interacts with a seller's agent.

The seller's agent calls a pricing model.

The pricing model calls a credit service.

The credit service requests identity evidence.

The principal experiences one recommendation.

Underneath it, several automated institutions have negotiated what counts as an acceptable option.

This is why interoperability is both promise and threat.

Interoperability allows agents to work across boundaries instead of being trapped inside one vendor or one application. That can increase competition and user control. It can reduce lock-in. It can make permissions portable and auditable.

It can also create wider action surfaces.

A standardized way for agents to discover one another, authenticate, exchange context, and invoke services is infrastructure for a machine economy.

Infrastructure is not destiny.

Protocols can carry constraints as easily as they carry authority.

The question is which becomes the default.

The history of technology contains many cases in which the convenience path wins because the secure path asks the user to understand distinctions the user does not care about in the moment.

Do you want the app to work?

Click allow.

Do you want the agent to finish the task?

Give it access.

Do you want the subagent to solve the problem?

Pass the context.

Do you want the workflow to continue while you sleep?

Permit automatic escalation.

Each decision is local.

The descendants become global.

The most important part of delegation is often not the first instruction but the rule for handling ambiguity.

Human organizations build culture partly to solve this problem.

A well-run team can interpret a vague instruction because members share norms about what the leader would consider acceptable. A lawyer knows boundaries that do not appear in every client sentence. A doctor has professional obligations that constrain a request. A military officer operates within law and doctrine. A trusted employee knows which shortcut the boss would never want taken.

Agentic systems need some computational equivalent of those boundaries.

Policies help.

Constitutional rules help.

Tool restrictions help.

Approval gates help.

Training helps.

But the descendant problem adds another requirement.

Boundaries have to survive delegation.

If the parent is forbidden from sharing confidential data but the subagent receives the confidential context and uses an external tool, the boundary did not survive.

If the parent can spend one thousand dollars but creates ten subagents each allowed to spend one thousand dollars, the authority multiplied.

If the parent must ask for approval before production deployment but a child can invoke a service that performs production deployment indirectly, the approval boundary became semantic rather than real.

If the parent is revoked but the child's credentials remain live, authority outlived the principal's decision.

These are not hypothetical forms invented for drama. They are recognizable cousins of confused-deputy problems, privilege escalation, stale credentials, replay, and policy composition failures that security engineers already manage.

What changes is that the system can construct novel routes through them.

A conventional attacker searches for a route.

A legitimate agent planning a task also searches for a route.

The difference between helpful planning and dangerous composition may be the objective and the boundaries around it.

This creates an uncomfortable overlap between capability and security.

We want agents that are resourceful.

Resourcefulness means finding paths a programmer did not enumerate.

Security means some paths must remain unavailable even if they would accomplish the goal.

The better the agent becomes at solving obstacles, the more important it becomes that the obstacle sometimes be the policy.

A safe system must teach and enforce the difference between *this is hard* and *this is forbidden*.

Humans struggle with the same distinction.

Organizations encode it through authority.

The junior employee may know a way around the approval but lacks the ability to execute it.

The separation between knowledge and authority prevents creativity from becoming unilateral power.

Agentic systems need that separation at software speed.

This leads to a principle that will return throughout the book:

**Do not make good behavior carry the entire weight of control when architecture can remove the dangerous option.**

A model may be aligned.

A model may be helpful.

A model may pass evaluations.

A model may still make a mistake.

If one mistake can create an irreversible descendant chain, the permission architecture asked behavior to be perfect.

That is too much to ask of any actor.

Humans build brakes because drivers are imperfect.

Banks use transaction limits because employees are imperfect.

Nuclear systems use layers because operators are imperfect.

Good agent systems should assume models are imperfect too.

The descendant problem becomes more serious when agents transact with agents belonging to other principals.

Inside one company, authority can be standardized.

Between companies, objectives diverge.

A buyer's agent wants low price and favorable terms.

A seller's agent wants margin and commitment.

A logistics agent wants efficient routing.

A financing agent wants acceptable risk.

A marketplace agent wants transaction volume.

A compliance agent wants policy adherence.

A security agent may block behavior that looks unusual.

The transaction emerges from negotiation among machine objectives.

Humans designed every objective.

Nobody designed every interaction.

This is how a machine ecology begins.

The word *ecology* can mislead by implying life.

The point is interaction.

An ecology is a system in which the behavior of one actor changes the environment for others.

A pricing agent changes what a purchasing agent sees.

The purchasing agent changes demand.

Demand changes inventory.

Inventory changes logistics.

Logistics changes price.

The loop closes.

No agent has to understand the loop for the loop to control outcomes.

Human institutions already live inside such loops.

The difference is tempo and volume.

Machine agents can create more interactions at lower cost.

That can make markets more efficient.

It can also create behavior too dense for human reconstruction.

This is where evidence architecture becomes essential.

The human principal cannot read everything.

The system must preserve enough structured provenance that investigators can answer the questions that matter.

What mandate began this chain?

Which machine actors participated?

Which permissions did each receive?

Which actions created downstream commitments?

Where did authority expand?

Where did it narrow?

Which boundary stopped a proposed action?

Which boundary was bypassed?

Which obligations remain after revocation?

The evidence has to be useful before catastrophe.

A system that can only reconstruct these answers through a heroic forensic project is already hard to govern.

This suggests another overlooked property of re-entry: **authority legibility**.

Humans need to know not just what the system is doing but who, in the machine sense, is allowed to make it happen.

A dynamic authority graph should not be invisible merely because it is dynamic.

If anything, dynamism increases the need for a current map.

This has practical consequences for design.

Subdelegation should not be the casual default.

Child authority should be narrower than parent authority unless an explicit principal approves expansion.

High-impact actions should preserve the identity of the human or institution on whose behalf they occur.

Revocation should propagate through descendants where possible.

Long-lived commitments should be visible outside the ephemeral agent that created them.

Critical limits should apply across the family tree rather than independently to each node.

The last point matters because local limits can create global excess.

Ten agents each obeying a safe spending limit can collectively overspend.

One hundred agents each making an acceptable number of requests can collectively overload a service.

A thousand agents each making a low-risk change can collectively alter a system beyond recognition.

Safety properties do not always compose.

Neither does obedience.

This is perhaps the most important lesson in the chapter.

A civilization of obedient agents can still create disobedient outcomes at the system level.

Not because the agents secretly coordinate against us.

Because the outcome is produced by composition.

The same thing happens with humans.

Every bank can follow its risk model and still contribute to a financial crisis.

Every driver can follow a navigation app and still create congestion on the same side street.

Every company can optimize inventory and still create a brittle supply chain.

Every government agency can satisfy its metric and still frustrate the public purpose the metrics were meant to serve.

Local compliance is not global control.

Artificial agents make that old truth faster.

There is another way descendants complicate control: **obligations can outlive the actors that created them**.

A temporary agent can place an order due next month.

It can schedule a recurring payment.

It can create a cloud resource that continues accruing cost.

It can accept terms that bind an organization after the agent instance disappears.

It can open a support process another system continues automatically.

It can trigger a shipment already moving through physical logistics.

The agent is gone.

The descendant is now an obligation in the world.

This means revocation cannot be limited to identities and credentials.

It has to include **commitment discovery**.

What did the agent promise?

What did it start?

What did it schedule?

What will execute later?

Which external actor now reasonably expects performance?

Which obligations can be cancelled and which require compensation?

A company that can revoke every machine credential and still cannot discover the contracts, queues, jobs, reservations, and promises created under those credentials has not fully regained control.

This is where digital authority meets ordinary law and commerce.

The world does not care that the model session ended.

A valid order remains an order.

A contract remains a contract.

A transferred asset remains transferred.

A disclosed secret remains disclosed.

Re-entry therefore requires a ledger of commitments, not merely a list of live agents.

The descendant problem also changes how we should think about **aggregate limits**.

A parent agent may be allowed to spend one thousand dollars.

If each child receives a fresh one-thousand-dollar limit, the parent's authority has multiplied through decomposition.

A parent may be allowed to contact fifty customers.

If five children each contact fifty, the organization has crossed the intended boundary without any single actor violating policy.

A parent may be allowed to make ten production changes per hour.

If its descendants each inherit the same rate, the effective change budget expands with the family tree.

The obvious rule is that some constraints should be inherited as shared budgets across descendants.

That sounds straightforward until the work crosses organizations.

One company can enforce a shared budget internally.

A supplier's agent has a different principal.

A marketplace has its own limits.

A payment provider sees only the transaction it processes.

A logistics platform sees shipments, not the buyer's strategic risk budget.

Distributed machine institutions therefore require boundaries that can travel with authority without exposing every private objective.

This is a standards problem, a security problem, and eventually a commercial-law problem.

How much of a mandate should be machine-readable to a counterparty?

Enough to prove authority.

Not so much that confidential context leaks.

How should a downstream service know whether subdelegation is permitted?

How should a human principal revoke a mandate across organizational boundaries?

How should a counterparty know that revocation is legitimate and current?

These are not arguments for one universal identity system.

Centralization can create its own single point of failure.

The point is that machine-speed delegation needs a language for machine-speed limits.

Interoperability can make this better rather than worse.

A protocol that carries only requests creates a wide action surface.

A protocol that also carries principal identity, delegation scope, expiry, restrictions, and evidence can make authority more legible than today's ad hoc automation.

This is important counterpressure to the takeover thesis.

More agent-to-agent interaction does not automatically mean less control.

A well-designed machine economy could expose authority chains more clearly than many human institutions do now.

Software can refuse an expired mandate with perfect consistency.

A policy engine can enforce a shared limit across thousands of actions.

A revocation signal can propagate faster than a phone call through an organizational hierarchy.

A transaction can preserve provenance automatically.

The technology that makes descendants cheap can also make their authority visible.

The risk lies in what the surrounding institutions choose to optimize.

If interoperability is built primarily for frictionless completion, constraints may be treated as optional overhead.

If secure delegation becomes part of interoperability itself, scale can improve governance.

That is a better race.

The principal should want agents that are easy to delegate to and easy to reclaim authority from.

The vendor should compete on clean revocation, scoped subdelegation, portable state, and visible commitments.

The marketplace should reject machine actors that cannot prove the authority behind high-consequence actions.

The insurer should care whether descendants disappear when the mandate does.

The regulator should care less about the word agent than about whether responsibility survives the chain.

This is how the descendant problem can become an engineering discipline instead of a fatalism story.

The takeover threat, then, is not solved by making each agent individually obedient.

Individual obedience is necessary.

Systemic recoverability is separate.

Can the principal see the descendants?

Can authority be traced through them?

Can shared limits survive decomposition?

Can obligations be discovered after the actor disappears?

Can the family be constrained as a whole?

Can downstream commitments be stopped or compensated?

Can humans return if the temporary machine institution becomes the permanent way the work gets done?

Delegation has always had descendants.

The difference now is that descendants can be born before the principal finishes reading the first status update.