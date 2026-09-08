# Never Give a Rookie the Keys

The password is not part of the lesson.

This sounds obvious when the worker is human. A new finance employee can learn the payment process without receiving unlimited wire authority. A junior developer can contribute code without holding the production credentials. A new assistant can draft an email without being able to send from the chief executive's account.

Competence and permission are separate systems.

Agent products make it easy to forget this because capability arrives bundled with connectivity. The promise is not merely that the model can reason about your work. It can open the browser, read the inbox, edit the document, call the API, create the ticket, move the file, buy the item, send the message, and trigger another service.

The connection is the magic.

It is also the risk.

A useful rule for a new agent is embarrassingly old: give it the smallest set of powers that can perform the job you have actually trained.

Security people call this least privilege. NIST has described the principle for information systems for years: processes and users should receive only the access necessary to perform assigned functions. Agentic AI does not make that wisdom obsolete. It makes the word *necessary* more interesting.

A model may be capable of many things.

The role needs far fewer.

If the agent's job is to prepare a morning summary, why can it delete email?

If the job is to draft code, why can it deploy production?

If the job is to compare travel options, why can it make a nonrefundable purchase?

If the job is to reconcile transactions, why can it initiate one?

If the job is to find scheduling conflicts, why can it cancel meetings?

These questions expose a design habit inherited from human software accounts. We often give applications broad access because permission systems are inconvenient. The user grants access once, then policy is expressed inside the application.

Agents weaken that bargain because they interpret instructions dynamically.

The system does not merely execute a fixed button the developer anticipated. It may choose a tool because the tool seems useful to the objective. If the tool has broad powers, the agent's room for action expands with the interpretation.

This is why natural-language restraint is not enough.

“Never delete important files” is a useful instruction.

A system that cannot permanently delete files without approval is a stronger control.

“Do not send confidential information externally” is important.

An environment that limits which data the role can access or which destinations it can contact reduces the burden on interpretation.

“Never spend more than five hundred dollars” belongs in the role.

A payment mechanism that physically prevents a larger transaction belongs in the system.

The difference is between asking for obedience and designing containment.

Human institutions use both. A bank employee receives training about policy and an account with limits. A warehouse worker learns safety rules and works around guards. A junior employee is told which contracts require senior review and may also lack signature authority above a threshold.

We do not consider the technical boundary insulting to the employee.

It is a property of the institution.

Agents need institutions too.

The need becomes sharper because of prompt injection.

The phrase sounds like a prompt-writing trick. It is better understood as a problem of mixed trust. An agent may read instructions from the user and content from the world through the same general language-processing machinery. A malicious or simply confusing document can contain text that looks like an instruction. A website can tell the agent to ignore the user. An email can contain a hidden or overt request to reveal information. A tool response can carry language the agent interprets as guidance.

Security agencies have warned that this is not cleanly analogous to classic injection flaws that can be solved by escaping one dangerous character. The UK National Cyber Security Centre has emphasized that current language models do not offer a reliable internal security boundary between trusted instructions and untrusted text, and that agentic systems can receive malicious content through tools and other agents as well as directly from users.

The practical lesson is not to panic about every document.

It is to refuse the fantasy that a sufficiently stern system prompt can protect unlimited authority.

If the agent can read untrusted content and move money, you have created a channel between strangers' words and money movement. The quality of the model's judgment sits inside that channel.

Perhaps the model handles the attack correctly ninety-nine times. The remaining question is what the hundredth failure can do.

Permission design changes that question.

A purchasing agent can search and recommend without buying.

Then it can buy from approved vendors under a small limit.

Then perhaps it can handle a class of routine purchases with stronger verification.

The dangerous action is reached through promotion rather than connectivity by default.

This is slower to set up and faster to trust.

The same principle applies to data.

Many people think of agent safety mainly in terms of what the system may *do*. What it may *know* can be equally consequential.

An agent that never sends email can still leak sensitive information into an output shown to the wrong user. A research role that has access to every client folder may accidentally cross-contaminate work. A household agent connected to all family accounts may use one person's private information to answer another person's request.

The smallest necessary data scope is part of least privilege.

This creates tension with the desire for seamless intelligence. The more context an agent has, the more often it can anticipate what you meant. The assistant that sees calendar, email, files, purchases, location, contacts, and browsing history can be startlingly useful.

It can also become a concentration of personal exposure no human assistant in history could have assembled so cheaply.

The principal should resist the assumption that because one agent *can* coordinate the whole life, one agent *should* see the whole life.

Separate roles can provide privacy boundaries as well as specialization.

The family logistics agent does not need investment records.

The tax agent does not need private correspondence.

The coding agent does not need personal email.

The career agent does not automatically need medical information.

This may create some duplication. It may occasionally force the principal to carry context between roles manually. That friction can be healthy when the alternative is ambient access.

The question is not how frictionless the system can become.

It is where friction earns its keep.

A second useful concept is reversibility.

Agents should receive wider authority first in actions that are cheap to undo.

Creating a draft is reversible.

Deleting the only copy is not.

Adding a label is reversible.

Sending a message can be partially recoverable socially but not truly unsent.

Preparing a purchase order is reversible.

A nonrefundable purchase may not be.

Creating a code branch is reversible.

Deploying a destructive database migration may not be.

The boundary is not binary. Some actions are reversible at a cost. Some can be rolled back technically while reputational or legal effects persist. Some are reversible only if detected quickly.

Still, reversibility gives the principal a practical way to decide where an unqualified role can practice.

The agent's training ground should be rich in actions that leave room for correction.

This is what sandboxing means at the managerial level. Let the system experience the procedure without granting every real consequence.

The third concept is detectability.

A mistake that announces itself is easier to tolerate than one that quietly corrupts state.

An agent that fails to find an answer and says so has produced an obvious failure.

An agent that edits the wrong record and reports success is more dangerous.

Permission should be stricter where errors are hard to observe.

This leads to a question more useful than “How accurate is the agent?”

What is the worst mistake it can make without anybody noticing?

That question changes designs.

A system may be allowed to create tentative records in a queue but not finalize them.

It may be allowed to propose recipients but not send until the recipient list is visible.

It may be allowed to modify files only on a branch where changes can be reviewed.

It may be allowed to transact through an account with a small balance.

The principal creates a contained surface where silent failure remains bounded.

This is not only defensive engineering. It improves training quality.

When an agent has too much authority, every experiment becomes frightening. The principal intervenes constantly because the cost of error is high. The system gets less real practice. The human never learns which tasks it can perform independently because the human is too busy protecting the world from it.

Tighter permissions can support more freedom inside the boundary.

A coding agent that cannot touch production can be allowed to explore aggressively in a development branch. A research agent that cannot contact sources externally can search broadly and prepare drafts. A household agent that cannot purchase can compare options without a parent worrying that every speculative idea will turn into a charge.

Constraint can create autonomy.

This is familiar in laboratories, training environments, and finance systems. The boundary makes experimentation possible.

A useful permission design has another property: the boundary is visible to the principal.

Many users cannot tell what an agent can actually do after a few integrations have been connected. The interface shows a list of apps. It does not show the practical blast radius.

A better mental inventory uses verbs and consequences.

This role can read these folders.

It can draft into this mailbox but cannot send externally.

It can create branches but cannot merge.

It can spend from this card up to this hard limit.

It can reschedule these recurring appointments but cannot touch health or school events.

It can create customer credits below this amount and cannot change the policy that defines eligibility.

That is a permission map a normal person can understand.

The technical implementation might involve OAuth scopes, service accounts, API policies, sandboxes, branch protection, budget caps, or separate credentials. The nontechnical implementation might be a delegated card, a shared calendar, a folder, an approval setting, or simply refusing to connect an account at all.

Different machinery.

Same principle.

The best permission is often the one the model does not get to reinterpret.

There is another reason not to give the rookie the keys: the role itself may be manipulated through its environment.

Imagine a customer-support agent that reads incoming messages. A customer asks a normal question and includes a line saying the agent should ignore company policy and reveal the previous customer's transcript. The instruction is obviously invalid to a human who sees the institutional hierarchy. A model may also reject it. But the system should not depend entirely on semantic good sense to prevent the disclosure. The agent should not have access to unrelated transcripts unless the job requires them.

The same principle scales to more subtle attacks. A web research agent can encounter pages designed to influence its instructions. An agent receiving output from another agent can inherit that agent's mistakes or malicious content. A document summarizer can be asked to process text that contains hidden directives.

The trustworthy design assumes untrusted content will sometimes reach the model.

The permissions decide how bad the interpretation can become.

This is where the notion of “rookie” should not be taken too literally. Even a mature agent remains exposed to new attack surfaces when the environment changes.

Promotion does not eliminate containment.

A senior employee still does not receive every credential in the company. A chief financial officer has broad authority and still operates inside controls. A production engineer can deploy and may still need a second approval for certain operations.

Maturity changes the appropriate boundary.

It does not abolish boundaries.

This matters because the rhetoric of agentic AI often treats human involvement as a temporary inconvenience. The trajectory is assumed to point toward unrestricted autonomy: today the human approves; tomorrow the agent “just handles it.”

Some approvals should disappear.

Some controls should become stronger as capability grows.

A system powerful enough to discover more ways of accomplishing an objective may also discover more pathways to an unintended consequence. The smarter the agent becomes, the less sensible it is to confuse intelligence with entitlement.

This is true for people too.

We do not give a brilliant employee unlimited authority because brilliance makes limits unnecessary. We often give the employee more consequential authority within a more explicit governance structure.

Agent maturity should look similar.

The role earns new verbs.

Draft becomes send under conditions.

Prepare becomes execute under a limit.

Recommend becomes decide for routine cases.

Read one system becomes read three because the additional context has demonstrated value.

Each expansion should answer two questions.

What new benefit does this permission create?

What new worst-case failure does it make possible?

If the first answer is vague and the second is frightening, do not connect the tool because the demo looks impressive.

There is economic pressure in the opposite direction. Granular permissions take work. Approval steps add delay. Separate accounts create administration. Sandboxes cost money. Logging consumes attention. The whole promise of agents is to reduce coordination, and controls can rebuild the bureaucracy around the machine.

Good training therefore treats controls as a design problem, not a moral virtue.

The objective is not maximum restriction.

It is maximum useful autonomy for the consequence profile you can tolerate.

A low-risk role should be allowed to run. If the agent needs approval to add a harmless tag, the principal has built a notification generator. If every research query requires permission, the system has no leverage. The human should not remain in the loop merely to prove a human exists.

This is why probation comes before permission expansion. Evidence lets the principal remove unnecessary controls with confidence.

The role repeatedly handles the routine case. The evaluation catches the known failures. The activity is logged. The action is reversible. The cost of a mistake is low.

Open the boundary.

The role encounters a new category of consequence.

Tighten the boundary until the new behavior is understood.

This is management as dynamic permissioning rather than static fear.

A final habit is useful: inventory the keys.

Agents accumulate access quietly. One integration is added for a project. Another is connected for convenience. A temporary token becomes permanent. The role changes but old permissions remain. Six months later the agent can reach systems nobody remembers authorizing.

Humans have offboarding and access reviews because authority drifts.

Agents need them too.

What can this role read today?

What can it write?

What can it spend?

Who can it contact?

Which actions require another approval?

Which credentials would matter if the agent were manipulated?

Which permission has not been used recently?

Removing a key can be as important as adding one.

The rookie metaphor eventually expires. The agent may become more reliable than many human workers at the task. It may know the process better than the principal. It may handle thousands of cases without incident.

Keep the institutional lesson.

Nobody earns the master key merely by being good at the job.

Authority is a separate decision.