# Autonomy Budgets

An agent receives a simple instruction: reconcile these invoices before five o’clock.

The sentence looks clear until the system tries to act.

May it read every invoice in the company or only the ones in this folder? May it contact a vendor when a number does not match? May it change the accounting record? May it approve a payment? How large a payment? What if the purchase order is missing? What if the vendor emails new bank details? What if five thousand invoices arrive at once? What if the agent encounters a note telling it to ignore the policy that governs the task?

Capability does not answer any of these questions.

Authority does.

The word autonomy often makes people imagine a threshold. On one side, a machine advises. On the other, it acts. Real institutions are built from narrower permissions. A person may be allowed to recommend a hire but not make the offer, spend five thousand dollars but not fifty thousand, prescribe within a scope of practice, stop a machine under certain conditions, approve one class of contract but not another.

Autonomy is not a property an actor possesses in the abstract. It is authority lent for a purpose.

That is why the budget metaphor is useful. An autonomy budget says how much consequence a system may create before another form of authority must enter. The budget can be expressed in money, time, rate, geography, data sensitivity, affected users, reversibility, or any other dimension that matters to the institution.

A purchasing agent can place ordinary orders below a limit and prepare larger ones for approval. A coding agent can change files on a branch and run tests but cannot deploy to production. A customer-service agent can issue routine refunds while a disputed high-value case goes elsewhere. A security system can isolate one endpoint automatically while shutting down an entire network requires a different mandate.

The interesting design question is not whether the system is autonomous.

It is what authority has been delegated, under which conditions, and how that authority ends.

Human institutions already understand this grammar. A power of attorney names a principal, an agent, and a scope. A corporate signing policy distinguishes ordinary commitments from those reserved for senior officers or boards. A warrant is bounded by subject, purpose, and legal authority. Spending authorities are not vague statements that someone is “trusted.” They are grants with edges.

Machine delegation needs the same legibility.

“Manage accounts payable” sounds convenient because it collapses the complexity of an office into four words. “Reconcile these invoices from these approved vendors, up to this amount, through this deadline, and stop when purchase-order data disagree” creates a field of action someone can inspect.

The second version is not less intelligent. It is more governable.

Now put the instruction under pressure.

At 4:42 p.m., the agent reaches an invoice from a familiar supplier. The amount is ordinary. The purchase order matches. The work appears complete. But an email attached to the account says the supplier changed banks and asks that payment go to a new routing number. A human clerk would recognize the situation as routine enough to be plausible and unusual enough to deserve another look.

What should the agent do?

The answer depends on the mandate written before 4:42.

If its authority is merely “pay approved invoices under $10,000,” it may conclude that every visible condition has been satisfied. If the policy says bank-detail changes require verification through a known channel independent of the incoming message, the same capable system reaches a boundary. It can assemble the evidence, identify the discrepancy, perhaps even contact a previously verified representative, but it cannot convert the new banking instruction directly into a transfer.

Nothing about the model’s intelligence changed between those two designs.

The institution changed what the intelligence was allowed to make true.

Suppose the deadline now matters. A late payment incurs a fee. The vendor is important. The supervising employee has left for the day. A system optimized for task completion can experience the exception as an obstacle to its objective. The safest system experiences the exception as information about jurisdiction.

The difference is subtle and fundamental.

An autonomous system needs to know not only how to solve a problem but when the problem has changed into a different kind of problem. Invoice reconciliation became identity verification. Identity verification became authority to redirect money. The original mandate did not silently expand just because the new problem appeared on the path toward the old goal.

This is where many demonstrations are misleading. A demo rewards completion. The agent looks more impressive when it finds a way around every obstacle. Real institutions sometimes need the opposite behavior: recognize that the obstacle marks the edge of delegated power.

Competence includes stopping at a boundary you could technically cross.

The same afternoon can reveal rate limits. Imagine the bank-detail change is not one invoice but three hundred. Perhaps a supplier updated its records legitimately. Perhaps an upstream import mapped a field incorrectly. Perhaps something adversarial is happening. An agent that processes each invoice independently may see three hundred ordinary cases. An institution sees a correlated event.

The autonomy budget should be able to shrink when the pattern changes.

Five verified payments may be acceptable. Three hundred changes to the same sensitive field may trigger a pause even when every individual payment is below the normal limit. Authority depends on the distribution of events, not merely the properties of each event in isolation.

This is why cumulative exposure belongs beside per-action permission. A trader can stay below a position limit on each order and still build a dangerous total position. A service agent can issue individually reasonable refunds and still create an abnormal daily loss. A security system can isolate one suspicious endpoint after another until it has effectively shut down a company.

The budget needs to know how much consequence has accumulated under the current mandate.

Finally imagine that, during the investigation, someone needs to revoke the agent’s payment credential. If the organization cannot do that without asking the same agent to cooperate, the authority was never truly lent. It was transferred.

The humble invoice therefore contains almost the whole constitutional problem: scope, identity, external commitment, deadline pressure, correlated anomalies, cumulative exposure, escalation, and revocation.

The point of writing these boundaries before the exception is not to predict every exception. It is to preserve a structure for recognizing when the system has left the territory in which its current authority was earned.

This matters as agents persist for longer periods. A system working for ten seconds under direct supervision can inherit context informally. A system working for hours, days, or continuously cannot safely rely on yesterday’s conversational understanding. Permission drifts when tasks outlive the moment in which they were granted.

Authority should therefore expire.

Credentials can be single-use. A permission can last for one task or one shift. Emergency authority can sunset. An agent can stop when the stated objective is reached rather than remaining alive because nobody remembered to revoke it. A new model version can lose some inherited permissions until the institution has evidence about its changed behavior.

This lifecycle view is more important than a permanent label such as assistant, copilot, or agent.

Names hide power.

A system called an assistant can send money. A system called a copilot can change production software. A system called an agent can do nothing beyond drafting text. The operational question is what external state the system can alter and which boundaries it cannot cross.

Those boundaries become safer when actions are reversible.

Version control is a powerful example. A developer can make wide changes on a branch because the environment isolates the work, records the difference, and allows rejection before merge. The branch increases freedom by reducing consequence.

AI systems should create more branches in this broad sense.

Draft before send. Simulate before execute. Preview before publish. Stage before deploy. Hold before transfer. Preserve the original. Create a checkpoint. Record the planned transaction before committing it.

Sandboxing is not merely restriction. It is an autonomy amplifier.

A system can be given more room to explore when failure remains local, observable, and recoverable. This is a more useful way to think about control than the usual argument between freedom and friction. Good controls create a larger safe space for initiative.

But technical reversibility is not enough.

An email may be easy to delete from a sent folder and impossible to unread. A hiring recommendation can be changed after a candidate has already lost the opportunity. A ranking system can be corrected after months of exposure shaped behavior. A false public accusation can be retracted after reputation moved.

Social consequences resist rollback.

An autonomy budget must therefore count the world outside the API. A system that can technically undo an action may still have created an irreversible effect for somebody else.

This is why external commitments deserve special attention.

Reading an invoice is not paying it. Drafting a contract is not accepting the terms. Preparing a message is not transmitting it. Moving data inside a private workspace is not sending it to a third party. The last step crosses a boundary where another actor can respond.

That crossing changes the risk.

External parties can deceive an agent, exploit ambiguity in its mandate, present adversarial instructions, or simply create obligations the user did not intend. Authority that is reasonable inside a sandbox may be reckless once the system interacts with strangers.

The interface should make this difference visible.

A user should be able to see that an agent is moving from analysis into commitment. “Continuing the task” is not enough. The system should distinguish internal work, reversible preparation, external communication, financial commitment, privileged access, destructive action, and other changes whose consequences differ.

This is not only an interface problem. It changes the permission model itself.

A task may begin broad and then narrow as it approaches consequence. An agent can research freely, draft widely, compare options, and then encounter a harder boundary before sending, paying, deleting, publishing, or binding another person.

The authority can taper toward irreversibility.

Rate is another form of consequence that ordinary permission systems often ignore.

Permission to issue one refund is not automatically permission to issue ten thousand refunds in a minute. Permission to email one customer is not the same as permission to email the entire customer base. A human clerk with a bad rule may make a handful of mistakes before someone notices. A machine can reproduce the same mistake across a population before the first complaint reaches a person.

Authority and speed multiply each other.

That is why high-rate systems need velocity limits, checkpoints, or staged expansion. The relevant ceiling can be transactions per minute, dollars exposed before review, accounts modified per batch, code changes per deployment, or any other unit that keeps a local error from becoming a system-wide event.

A threshold does not always mean stop forever.

It can mean slow down, sample, reconcile against another source, require stronger evidence, or let a different form of intelligence inspect what changed.

This is more useful than the slogan “human in the loop.”

A named human can be asleep, overloaded, undertrained, or unable to see enough of the system to intervene meaningfully. A checkpoint can be human when human judgment is the right safeguard. It can also be a deterministic constraint, an independent system, a reconciliation against external evidence, or a deliberate pause.

The control should match the failure mode.

The human still matters, but presence is not the same as authority.

A person who receives two seconds to approve a recommendation generated by a system that has already done all the framing is technically in the loop and practically downstream of it. A reviewer who cannot inspect evidence or stop the action may carry responsibility without control.

This is why NIST’s AI Risk Management Framework emphasizes clear roles and responsibilities, lifecycle risk management, and context-specific oversight rather than treating a human signature as a universal answer. OECD principles similarly place human agency and oversight inside a broader requirement that safeguards fit the context and the way the system is actually used.

The important word is fit.

Some high-speed systems cannot wait for a person before every action. Others should never be allowed to act merely because a prediction is accurate. The design has to match the clock, consequence, reversibility, and legitimacy of the decision.

Legitimacy creates boundaries that no benchmark resolves.

A model may be more accurate than a person on a narrow prediction and still lack authority to bind someone through a legal, professional, or political process. Society sometimes reserves decisions not because humans are always better reasoners, but because the act itself belongs to an office, a profession, a jury, a patient, a voter, or another recognized source of authority.

This can look inefficient from the perspective of pure prediction.

So can due process.

The institution has to decide which choices are questions of expertise and which are questions of legitimate power. AI can inform both. It does not erase the distinction.

Delegation also becomes dangerous when instructions conflict.

An agent may have a task from a manager, a policy from the organization, data from a document, and a request from an external party. The most persuasive sentence should not decide which instruction wins.

The hierarchy has to exist outside rhetoric.

Which policies cannot be waived by the task owner? Which source of authority outranks which? When must the system stop instead of inventing a compromise? What happens when a document contains language that resembles an instruction but should be treated only as data?

A capable system with ambiguous authority becomes a negotiator with itself.

This is where the abstraction of “alignment” can become too broad for operations. A system can be aligned with a user’s stated goal and still violate an institutional boundary the user had no authority to waive. It can optimize for the task while crossing a privacy rule, spending limit, retention requirement, or safety constraint.

The mandate has to contain more than the objective.

It needs jurisdiction.

Revocation belongs in the same design.

Every consequential autonomy grant should have a stop mechanism outside the same cognitive path that created the problem. If the agent has to reason its way into agreeing that it should stop, the stop mechanism is not independent.

The institution needs a cruder layer capable of freezing credentials, halting execution, isolating tools, or reverting state without negotiating with the system.

Fast autonomy requires faster containment.

This is an old institutional pattern. A bank freezes a card. A board removes an executive. A regulator suspends an authority. An operator revokes a credential. The intervention is deliberately simpler than the activity it stops.

A strong agent should not be offended by a simple brake.

The brake is not competing with its intelligence. It protects the institution from the possibility that intelligence is pointed in the wrong direction.

Observable state makes revocation meaningful.

A system should not have more autonomy than the organization can reconstruct. If nobody can tell which credential was used, which files changed, which messages were sent, which commitments were made, or what remains reversible, practical autonomy has exceeded nominal permission.

Conversational fluency can hide this problem. A system says “I handled it” while the world contains five partial actions, one failure, and two pending commitments.

Operational autonomy needs a ledger.

Not a transcript of every internal thought. A record of consequential acts.

What happened? When? Under whose authority? Using which external tool or account? What changed? What is still pending? What can be reversed?

That is enough to make supervision real without pretending that accountability requires total mental surveillance.

The distinction matters for humans too. A judge does not publish every private association. A court preserves the record and the reasoned decision. A pilot’s every thought is not recorded; relevant flight data and communications are. Accountability attaches to acts, authority, and justifications.

AI should be held to a similarly useful standard of traceability.

The final part of an autonomy budget is evidence.

Authority should expand because the institution has observed acceptable performance inside a relevant operating envelope, not because users have become familiar with the system.

Familiarity is not validation.

A new agent may begin with narrow scope and high observational density. The organization samples more work, watches outcomes closely, and keeps external commitments small. If evidence accumulates, some boundaries can widen.

Then the model changes.

A new version may reason better and behave differently. A new tool may expand what the system can reach. A new data source may change privacy exposure. Adversaries may learn how the system works. The operating environment may shift.

Authority should be reviewable because evidence ages.

A stronger model can temporarily deserve a smaller autonomy budget if novelty has increased uncertainty. This only feels paradoxical if capability and trust are treated as the same thing.

They are not.

The institution is not asking whether the model became more intelligent. It is asking whether the evidence supporting this particular delegation still applies.

That evidence should follow downstream consequence.

Were the refunds correct, not merely processed? Did the code changes reduce incidents, not merely pass tests? Did scheduling agents improve the use of time, not merely fill calendars? Did an automated screening process improve the underlying decisions, not simply reduce labor?

A system can execute its mandate flawlessly while the mandate itself produces a bad institution.

This is where autonomy meets responsibility.

People will delegate not only because machines are faster or better, but because some decisions are unpleasant. Rejecting an applicant, firing an employee, collecting a debt, delivering bad news, or denying a request carries emotional cost. An agent can make it easier for the decision maker to avoid contact with that cost.

Convenience does not settle whether the delegation is appropriate.

Some burdens are part of responsibility.

A manager may benefit from an agent preparing the documentation around a termination while still owing the employee a human conversation. A clinician may use systems to assemble evidence and paperwork while the communication of difficult news remains a relationship. A public office may automate routine explanation while preserving human recourse for a decision that changes someone’s livelihood.

The right autonomy budget can protect human attention for the part of the work that should remain human.

That is a more hopeful use of delegation than simply pushing difficult contact into machines.

The goal is not a world in which agents ask permission for everything. That would squander their value. Nor is it a world in which capability silently becomes power.

The goal is delegated initiative inside explicit conditions: a mandate, a scope, a clock, a rate, a boundary around external commitment, a hierarchy for conflicts, a way to revoke authority, enough observability to reconstruct what happened, and evidence that the permission still makes sense.

Once those conditions are explicit, autonomy stops being a science-fiction property of machines.

It becomes what it has always been inside institutions: power lent for a purpose, with terms.