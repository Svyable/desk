# The Company Died, the Agent Kept Working

The company was gone on paper before the software noticed.

That is the strange possibility hidden inside autonomous systems.

A corporation can cease to exist through a sequence the law understands. Directors approve something. Accounts are settled or transferred. Employees leave. Contracts terminate or move. Licenses are surrendered. Creditors are addressed. Records are retained. A final filing says that the legal person that owned the business is no longer operating in the same way, or no longer exists at all.

Software has no instinct for this event.

A scheduled process does not know its employer dissolved.

A service account does not know the board resigned.

An automated purchasing rule does not know the subsidiary was sold.

A model with permission to answer customers does not know that the brand has stopped promising service.

An agent connected to tools does not know that the human who delegated its authority is dead, incapacitated, fired, bankrupt, under investigation, or simply no longer authorized to make the decision the agent is still executing.

The machine sees credentials.

The world sees authority.

Those are not the same thing.

For most of software history, the difference was manageable because programs were usually passive. They waited for a user, a request, a job, or a narrow trigger. A forgotten script might waste resources or cause a bug, but the script was not usually maintaining relationships on behalf of a disappearing institution.

Persistent agents change the shape of the problem.

An agent can monitor an inbox, send messages, renew services, move information between systems, schedule work, negotiate within limits, purchase approved items, file routine reports, answer customers, manage advertising, update software, dispatch other agents, or continue a workflow long after the person who created it has stopped paying attention.

None of these capabilities requires science fiction.

The novelty is not intelligence alone.

It is continuity of action.

A thing can keep doing the job after the social arrangement that made the job legitimate has changed.

This is the expiration problem of delegated authority.

Humans have spent centuries developing ways to end authority. Employment ends. Terms of office expire. powers of attorney terminate under specified conditions. Corporate officers can be removed. Bank signatories can change. Licenses lapse. Contracts expire. Fiduciaries are replaced. A dissolved entity loses capacities it once had.

These systems are imperfect, but they share a principle: authority is not supposed to persist merely because the person exercising it still has the technical ability to act.

Digital systems often reverse that principle.

If the credential still works, the action still works.

That is a dangerous definition of legitimacy.

Imagine a small company that has automated much of its back office. An agent has access to customer support, a payment processor, a cloud account, advertising systems, a code repository, and a vendor portal. The founder dies unexpectedly. Employees are unsure who has authority. The estate, investors, creditors, and a potential buyer all have different interests.

The correct response is not necessarily to shut everything down.

Customers may need service. Data may need preservation. Systems may need to remain secure. Bills may need to be paid to prevent irreversible loss. A business may have more value as a going concern than as a pile of assets. Automatic action can help preserve that value.

But every continuing action now has a new question attached to it.

Who authorized this after the founder could no longer do so?

That question is easy to miss because the agent’s behavior may look perfectly normal.

It answers tickets in the same tone.

It renews the same subscription.

It places the same recurring order.

It maintains the same campaign.

It sends the same weekly report.

Operational continuity can conceal legal discontinuity.

The agent becomes a ghost employee of a ghost employer.

This is where the expiration economy reaches one of its strangest edges. A legal person can die faster than its delegated processes.

The same problem appears in less dramatic forms every day.

An employee leaves but a workflow continues under that employee’s token. A consultant’s integration remains active after the engagement ends. A vendor is terminated but an API key survives. A manager changes roles but scheduled actions continue with permissions inherited from the old role. A subsidiary is reorganized but automated approvals still reflect the earlier chain of command.

These are not primarily AI problems.

They are identity-lifecycle problems.

AI makes them more consequential because the old credential can now carry more initiative.

A conventional service account might read from a database every night. An agent with the same account can decide which records matter, contact people about them, create tasks, generate explanations, and trigger other systems. The amount of real-world consequence attached to one surviving permission expands.

The security industry already has a vocabulary for access: authentication, authorization, least privilege, credential rotation, revocation, role-based access, privileged accounts, secrets management.

The agent era requires another layer.

Authority must be contingent on the continued existence of the principal.

Who or what is the agent acting for?

Not which account does it use.

Not which API key authenticates it.

What living institution makes its action legitimate right now?

This question should have an answer that can expire.

An agent acting for a purchasing department should lose purchasing authority when the department is dissolved or reorganized. An agent acting under a specific officer’s delegated authority should not assume that delegation survives a change in office. An automated customer representative should know whether the company still has a duty and capacity to provide the service it is promising. A financial agent should not continue a strategy merely because no one revoked the token after the investment vehicle closed.

Today, many systems treat revocation as an exception.

Something runs until somebody stops it.

That default becomes less safe as autonomous execution becomes cheaper.

The better default is closer to a lease.

Authority should have duration, scope, renewal, and a responsible counterparty.

This does not require that every agent stop every hour to ask permission. That would defeat the purpose of delegation. It means the system should have a credible path from organizational change to technical change.

The chain must be legible.

Human authority changes.

Role ownership changes.

The agent’s authorization changes.

Credentials and tool access change.

Open tasks are handed off, completed, frozen, or cancelled.

Evidence of what happened remains.

This is what a graceful organizational shutdown looks like in software.

The difficulty is that real organizations do not die cleanly.

They enter bankruptcy. They merge. They split. They sell assets. They abandon products while preserving others. They lose employees before formal closure. They fight over control. They remain alive legally while being unable to operate. They keep one service running to support customers while everything else is wound down.

The binary question “Is the company alive?” is therefore not enough.

Agent authority has to attach to specific functions.

A bankrupt company may still need an agent to preserve records but not to launch a new marketing campaign.

A business in receivership may still need customer-service continuity but under a new decision authority.

An acquired company may keep its brand while its purchasing, data, and employment authority move elsewhere.

A discontinued product may require security updates while sales should stop.

The ending is compositional.

Parts of the organization expire at different times.

This resembles decommissioning in physical infrastructure. A plant does not go from full operation to absence in one instant. Fuel is removed. systems are isolated. monitoring continues. records persist. responsibility transfers. hazardous parts may remain under active control while revenue-generating operation has ended.

Agentic organizations will need similar states.

Active.

Restricted.

Read-only.

Handoff pending.

Wind-down.

Preservation.

Revoked.

Archived.

The labels do not matter as much as the principle: an autonomous system should not have only “running” and “off.”

That is because a blunt shutdown can be harmful too.

If a company fails and every agent is immediately killed, customers may lose access to data, backups may stop, security monitoring may cease, subscriptions necessary to preserve assets may lapse, or evidence needed by creditors and courts may disappear. Ending safely often requires temporary continued action.

The expiration-aware design therefore separates operation from preservation.

An agent that was once allowed to make new commitments might be reduced to protecting existing assets. An agent that could once contact customers freely might be limited to factual notices approved for the wind-down. An agent that could purchase inventory might be prohibited from new obligations but allowed to pay a narrow class of already-approved expenses.

This is not merely least privilege.

It is declining privilege.

Authority should be able to contract as an institution approaches its end.

That concept matters because many failures become worse during disorder.

When people are leaving, attention is scarce. Documentation is incomplete. Incentives diverge. The last people with access may be exhausted or uncertain. A system designed only for normal operation becomes hardest to govern exactly when governance matters most.

The best shutdown mechanisms are therefore boring enough to work under stress.

Ownership should not be a mystery.

There should be a named role responsible for the agent, not merely the name of the developer who created it.

The agent’s active permissions should be reviewable without reconstructing the entire application.

Its open commitments should be visible.

Its scheduled future actions should be enumerable.

Its external counterparties should be identifiable.

Its credentials should be revocable without destroying all records of past action.

Its memory should be separable from its ability to act.

Its authority should have a path to another steward.

None of these ideas is exotic.

What changes is their urgency when organizations can create agents faster than they can create governance around them.

The cheapness of agent creation produces a temptation to solve local problems with local automation.

The sales team makes one.

Finance makes another.

The founder has three personal assistants with overlapping access.

An engineer creates a deployment agent.

A consultant leaves behind a monitoring bot.

A vendor adds an “autonomous” feature that begins making decisions inside an existing account.

The organization gains capability one small permission at a time.

Years later, nobody can answer how many actors are still doing things on its behalf.

This is the graveyard in production again, except the graves are moving.

A persistent agent is not simply legacy software. Legacy software often waits. An agent can continue producing new state.

That makes retirement a problem of consequence containment.

Suppose an agent has sent ten thousand messages over three years. When retired, the organization does not merely need to stop future messages. It may need to preserve which messages were sent, under which authority, using which version of instructions, with which access, and with what resulting commitments.

Suppose the agent negotiated routine supplier discounts. Its conversation history may matter when a dispute arises. Suppose it managed appointments. The future appointments still exist after the agent stops. Suppose it created derivative agents or scheduled tasks. Those descendants may continue unless retirement propagates.

This is why agent shutdown has a graph shape.

The thing being retired may have children.

It may have credentials shared with peers.

It may own artifacts used by others.

It may have made commitments whose fulfillment occurs later.

It may be the only process refreshing a token, renewing a certificate, or maintaining a state that another system assumes will continue.

The agent’s body is not the process.

Its body is the network of consequences attached to it.

That is also why “delete the agent” is a dangerously incomplete instruction.

A safe ending begins with a dependency map and ends with evidence that the active authority is actually gone.

This brings us to a concept that will matter far beyond software: verifiable absence.

Organizations are good at proving that something exists.

Here is the account.

Here is the service.

Here is the employee.

Here is the deployed model.

Here is the contract.

Here is the active job.

They are much worse at proving that a capability no longer exists.

Was the token revoked everywhere?

Did the scheduled tasks stop?

Did the agent have a second credential?

Did it create another account?

Is a vendor still running a copy?

Are customer promises still being generated from a cached system?

Did a backup restore an old automation?

Is the old domain still receiving instructions?

The expiration economy will create demand for proofs of ending because confidence in absence has economic value.

A buyer acquiring a company wants to know what autonomous processes it is inheriting.

A creditor wants to know whether a failed company can still create new obligations.

A regulator wants to know whether a prohibited system has actually stopped.

A customer wants to know whether a deleted service can still act on retained information.

A former employee wants to know whether an agent still speaks using their delegated identity.

A board wants to know whether a retired model still sits behind some unexamined workflow.

The answer cannot always be perfect.

Complex systems rarely permit mathematical certainty about absence.

But they can provide better evidence than silence.

Logs of revocation. Inventory reconciliation. Credential invalidation. ownership transfer. task cancellation. dependency closure. retained audit records. tests that confirm the old authority no longer succeeds.

Ending becomes an observable operation.

That is a profound change from the old habit in which decommissioning meant that somebody stopped looking at the system.

The company-agent problem also exposes a deeper legal and moral issue.

Can an artificial agent hold an obligation after the institution that created it disappears?

The practical answer should usually be no.

The obligation belongs somewhere else.

To an estate. A successor entity. A trustee. A buyer. A regulator. A guarantor. A human counterparty. Or nowhere, if the obligation was lawfully extinguished.

The agent may help execute the transition, but the agent should not become a floating island of authority simply because it is still capable of acting.

Capability is not continuity of legitimacy.

This distinction will become increasingly important as agents become better at appearing socially continuous.

A customer may not know the company is in distress if the support agent still responds instantly. A supplier may not know a founder has died if the purchasing agent keeps negotiating in the usual style. An employee may not know a manager’s authority changed if an automated approval process keeps sending the same messages.

Automation can preserve the appearance of institutional life after the institution has changed underneath it.

That appearance can be useful during a planned transition.

It can also become deception.

The ethical boundary is not whether the agent sounds human.

It is whether the counterparty is being led to rely on authority that no longer exists.

A wind-down system should therefore become more explicit as certainty falls, not more persuasive.

When ownership is disputed, the agent should not improvise reassurance.

When service cannot be guaranteed, the agent should not preserve conversion metrics by pretending normality.

When a commitment requires a human fiduciary, the agent should not continue merely because it has learned the language of confidence.

The closer an institution gets to its ending, the more valuable honest limitation becomes.

This is the opposite of the usual growth logic.

Growth systems expand capability. Wind-down systems narrow it.

Growth asks: what else can this agent do?

Expiration asks: what should this agent stop being allowed to do now?

That may become one of the central operational disciplines of autonomous organizations.

The agents do not merely need onboarding.

They need offboarding.

Not just when the software is replaced.

When the person leaves.

When the role changes.

When the department closes.

When the contract ends.

When the product sunsets.

When the company is acquired.

When the license is suspended.

When the board changes control.

When the legal entity dissolves.

When the authority that made the action legitimate is no longer there.

The strange future is not one in which machines become immortal corporations.

The more plausible danger is more mundane.

Our systems will continue doing yesterday’s authorized work because nobody taught them that authority itself has an expiration date.

The company will end.

The token will still be valid.

And somewhere, quietly, the agent will keep working.

The underlying security standards already contain a smaller version of this logic. NIST SP 800-53 treats account management as a lifecycle: organizations define account types, assign account managers, specify authorized users and privileges, monitor use, and disable accounts that have expired or are no longer associated with a user. The standard also calls for audit records around account creation, modification, enabling, disabling, and removal.

That matters because it proves revocation is not an exotic property invented for autonomous agents. Mature identity systems already assume that technical access must change when the relationship behind the account changes.

NIST’s newer digital-identity guidance makes the ending even more explicit. Subscriber accounts can be suspended or terminated after compromise, inactivity, a legal instruction, the death of the subscriber, or the identity provider itself ceasing operations. Authenticators are not meant to float forever after the account or person they represent has ceased to exist.

Agents expose the limit of that model.

Disabling an account can stop a credential. It cannot automatically unwind a promise the agent already made, cancel a downstream task it scheduled in another system, recover a file it sent to a counterparty, or identify a child agent created under different credentials. Identity revocation is necessary, but the agent’s operational footprint can extend beyond identity.

This is the distinction between access lifecycle and consequence lifecycle.

The first asks whether the actor can still authenticate.

The second asks what continues to happen because the actor once could.

A robust offboarding system needs both.

That is why the strongest form of agent retirement is not a kill switch. It is a reconciliation.

Which authorities were revoked? Which tasks remain scheduled? Which commitments remain open? Which counterparties were told the transition occurred? Which records must stay? Which descendants were found? Which external services still recognize the old identity? Which actions can still succeed if the retired agent’s last known instructions are replayed?

The answer can be imperfect. The point is to make the imperfection visible.

This also sharpens the counterargument to the chapter. Traditional account lifecycle controls may absorb much of the risk if agents remain tightly bound to short-lived credentials, narrow scopes, and observable tool calls. If every autonomous process is ephemeral, least-privileged, and easy to enumerate, the dramatic “ghost company” scenario becomes less likely.

That would be a success, not a failure of the thesis.

It would mean the agent era inherited a mature ending discipline from identity and security engineering.

The dangerous case is the opposite: long-lived autonomy built on credentials whose technical validity is mistaken for continuing institutional authority.

The company does not have to teach software what death means in the abstract.

It has to make sure every delegated capability has a principal, every principal has a lifecycle, and every lifecycle can propagate into the systems that still know how to act.
