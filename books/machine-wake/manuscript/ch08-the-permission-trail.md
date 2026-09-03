# Chapter 8 — The Permission Trail

An assistant that can answer questions needs access to information.

An agent that can do things needs authority.

That difference is the distance between a search box and a key ring.

A model asked to summarize a public article may need no special permission beyond access to the page. An agent asked to reschedule a flight, issue a refund, modify a code repository, send payroll information, approve an invoice or change a production database must act inside systems that were built around the assumption that actions belong to identities.

The machine cannot simply be capable. It has to be allowed.

This creates one of the least visible forms of machine wake: a trail of credentials, tokens, scopes, grants, approvals, session records and revocations that exists because software is acting on behalf of someone else.

Computer security has spent decades trying to answer a basic question: who are you, and what are you allowed to do?

The first part is authentication. The second is authorization. Humans encounter these ideas through passwords, security keys, biometrics and access requests. Machines encounter them through API keys, certificates, service accounts, OAuth tokens, workload identities, signed requests and secrets stored somewhere they can be retrieved at runtime.

Agents complicate this because they are not exactly ordinary users and not exactly ordinary services.

A service account usually has a defined job. A backup process reads certain databases. A deployment system writes to certain environments. A monitoring agent reads telemetry. Administrators can give each identity permissions suited to its function.

A general-purpose AI agent is defined partly by flexibility. Today it may read a calendar. Tomorrow it may book travel. In the afternoon it may inspect a spreadsheet and send an email. The whole promise is that the software can adapt to a new objective without a programmer writing a new workflow for every task.

Flexible goals collide with fixed permissions.

The easiest implementation is to give the agent the user's credentials and let it do whatever the user can do.

This is also the implementation most likely to become a security disaster.

Humans have broad accounts because they exercise judgment across contexts. A chief financial officer may have access to banking, payroll, contracts and internal communications. That does not mean every piece of software assisting the CFO should inherit the same authority. A malicious document, compromised tool or mistaken model instruction could turn convenient access into a path across the organization.

The permission trail begins with narrowing.

Least privilege is an old security principle: give an identity only the permissions needed for the task. Agents make the principle harder and more important because the task is often expressed in language rather than in a predefined transaction type.

“Plan my trip to Berlin” could require reading a calendar, searching flights, checking a travel policy, comparing hotels, viewing a passport profile, charging a company card and creating calendar events. Should the agent receive all those permissions at the start? Should it ask when each becomes necessary? Should some be delegated automatically from policy while others require a human click?

The answer determines both usability and blast radius.

If every small action requires approval, the agent becomes an elaborate notification generator. The user spends the day clicking “allow.” If the agent receives broad persistent authority, the user may stop noticing how much access has accumulated.

Good delegation needs a middle layer.

One approach is task-scoped authority. The user authorizes a specific objective, and the system translates that objective into a bounded set of actions: read calendar dates, search travel inventory, spend up to a stated amount, book only refundable fares, create but do not send messages, or act only until a deadline. The agent receives short-lived credentials that expire when the task ends.

This makes the credential resemble a power of attorney rather than a copied house key.

The legal analogy is imperfect but useful. Delegated human authority is often constrained by purpose, duration and scope. A person can sign a document for a company without owning the company. A trustee can act over certain assets under rules. An employee can buy supplies up to a limit. Authority is not binary.

Machine authority should not be either.

This becomes especially important as agents interact with agents.

Imagine a purchasing agent working for a company. It requests quotes from supplier agents. One supplier agent asks for shipping information. Another asks for tax documentation. The purchasing agent selects an offer and sends an order. A payment agent authorizes funds. A logistics agent schedules delivery.

Each system needs to know not merely which organization is on the other side but whether this particular agent is authorized for this particular action.

Identity becomes a protocol.

Today much of the web assumes a human is ultimately behind sessions. Browser cookies, login pages and multi-factor prompts are designed around a person. Agents are forcing services to expose cleaner machine interfaces and clearer authorization boundaries. A website that works only because a human visually navigates a page can be difficult to use safely through automation. APIs turn actions into explicit verbs with explicit parameters.

This is one reason agentic computing will reward well-designed interfaces even when no AI is involved.

The better the action boundary, the easier it is to authorize narrowly.

“POST /refund” with an amount, order identifier and reason can be governed. A model clicking around an internal admin page with broad browser access is much harder to constrain. The first path creates a clean permission trail. The second grants a machine access to an entire interface and hopes it behaves.

Tool design is security design.

There is another complication: agents consume untrusted information while holding trusted authority.

A research agent reads websites. A coding agent reads repository files and issue comments. An email agent reads messages from strangers. If those sources can contain instructions, the agent faces an unusual security problem. Content intended as data can try to become control.

This is the essence of indirect prompt injection.

An attacker places malicious instructions in a document, web page, email or code comment that an agent is likely to read. The instructions attempt to redirect the agent: reveal a secret, call a tool, change a file, ignore the user's request. NIST's 2026 work on AI-agent security has highlighted this problem through large-scale red-teaming of agents exposed to external data.

Traditional software usually distinguishes code from data through syntax and execution boundaries. Language models are designed to interpret language, so a sentence inside retrieved data can influence behavior even when no programmer intended it to be executable.

The permission system is therefore the last line of defense when interpretation fails.

An agent reading the public web should not possess a credential that can silently empty a bank account. A coding agent reading an issue from an unknown contributor should not be able to exfiltrate repository secrets because the issue told it to. A mail assistant should not obey an invoice attachment as though it were the user's command.

Capability isolation matters more when instructions can arrive through content.

This suggests a simple hierarchy. Separate reading from acting. Separate low-risk reversible actions from high-risk irreversible ones. Separate public inputs from secret-bearing tools. Require stronger authorization when an action crosses those boundaries.

The result is a permission trail with checkpoints.

Those checkpoints generate residue: approval records, delegation tokens, policy decisions and audit events. That is desirable if they remain comprehensible.

The worst permission system is one that creates so many prompts that users approve them reflexively. Browser security learned this through permission fatigue. Mobile operating systems learned it through app permissions. Corporate systems learned it through access-review spreadsheets. When every request looks urgent and every permission description is vague, consent becomes ceremonial.

Agents can make the problem much worse because their task boundaries are fluid.

The user needs meaningful choices, not every internal call.

Approve “book a refundable flight under $900 using my corporate card” rather than “allow network request.” Approve “send this draft to these three recipients” rather than “allow email access.” Approve “deploy commit abc123 to staging” rather than “allow shell command.” The permission should map to the human consequence.

Underneath, the machine may still use many technical scopes. The interface should compress them into the level at which responsibility makes sense.

This is a form of semantic authorization.

It is difficult because a security system prefers concrete rules. Natural-language purpose is ambiguous. A task can change. An agent can discover that the cheapest flight is slightly over budget. Does it stop, ask, or reinterpret “around $900” generously? A human assistant might use judgment. A machine assistant needs policy.

The safest path is often explicit escalation.

Autonomy does not mean the absence of questions. It means the machine handles routine decisions within a delegated envelope and asks when the envelope needs to expand.

This is how experienced organizations already delegate to people. Junior employees do not ask a manager before sending every ordinary email. They do ask before signing a contract beyond their authority. The organization has approval thresholds, separation of duties and expense policies because judgment is fallible even when the actor is human.

Agents fit into the same governance architecture more naturally than into a fantasy of unrestricted autonomy.

Separation of duties is especially valuable.

One agent can prepare a payment and another control can authorize it. One model can generate code and an independent test system can validate it. One agent can recommend deleting data while a human or policy engine confirms the retention rule. The purpose is not to distrust machines uniquely. It is to prevent one compromised or mistaken component from owning the entire chain.

The machine wake becomes evidence of who held which role.

This will matter in disputes.

If an autonomous purchasing system orders the wrong equipment, who is responsible? The user who gave the goal? The organization that configured the policy? The agent provider? The vendor that exposed the tool? The employee who approved the spending limit? The answer will depend on law and contract, but technically the investigation begins with authority.

What was the agent allowed to do, and why?

Without a permission trail, the event becomes ambiguous. An API log may show that a valid credential performed the transaction. That is not the same as showing that the credential was appropriately delegated for the task.

Machine identity needs lineage.

This is analogous to provenance for artifacts. A file can have a signature without telling you why it was created. An agent action can be authenticated without telling you who authorized the agent to take it. Trust requires the chain.

A robust delegation record might say: user X authorized agent Y to act for purpose Z, with scopes A and B, spending limit C, until time D, under organization policy E. The agent then used a short-lived token to call service F. Service F recorded the action and returned receipt G.

That looks bureaucratic written out. In software it can happen in milliseconds.

The question is whether systems preserve enough of it to matter later.

Credentials also have life cycles. They are created, stored, rotated, revoked and eventually forgotten. AI adoption can dramatically increase the number of non-human identities in an organization because every agent, workflow, environment and integration may need its own access.

Security teams already struggle with service accounts and secrets that outlive the projects that created them. An abandoned API key sitting in a configuration file is a classic source of compromise. Agent proliferation can multiply this problem if identities are created faster than they are retired.

The wake becomes a graveyard of permissions.

This is why short-lived credentials are so attractive. Instead of storing a secret that works for a year, a workload proves its identity and receives a token valid for minutes. If the token leaks, the window of abuse is smaller. If the task ends, authority evaporates automatically.

Expiration is designed forgetting.

It is one of the cleanest ways to control residue because it reduces the need for someone to remember to clean up later.

The same principle applies to sandbox environments, temporary branches and one-time approvals. Make the safe state the state the system returns to by itself.

Persistent privilege should be exceptional because persistent privilege requires persistent maintenance.

There is also a market consequence. Services that expose well-scoped, agent-friendly authorization will be easier to integrate safely. Services that require broad account sharing will become security liabilities. Identity providers may become important infrastructure for machine delegation. New standards may emerge for proving that an agent is acting under current authority without revealing unnecessary user information.

The permission trail can become a competitive layer.

That raises its own gatekeeping questions. If a few identity systems become the trusted issuers for agent credentials, they can influence which agents are accepted and which actions are allowed. If platforms maintain agent reputation scores, a new form of machine gatekeeping appears. If a user cannot move delegated history from one assistant to another, switching costs rise.

Every layer that solves trust can acquire power.

The goal should therefore be interoperable evidence rather than permanent dependence on one provider. A service needs to verify authority, not necessarily to know the entire commercial relationship behind it. Cryptographic credentials, open authorization protocols and standard receipts can help separate trust from platform ownership.

Again, this is not science fiction. The building blocks exist. What is new is the volume of delegated action that can make them ordinary.

The security conversation around AI often focuses on whether the model can be tricked into saying something harmful. That matters. Agents move the stakes. A model with no tools can produce a bad sentence. A model with broad credentials can produce a bad state in the world.

Authority is the multiplier.

So measure it.

Which agents exist? Which credentials can they obtain? How long do those credentials live? Which systems accept them? Which actions are reversible? Where is human approval required? Can a public document influence an agent that holds a sensitive tool? Are agent actions distinguishable from human actions in logs? Can authority be revoked immediately? Does the user understand the scope they granted?

These questions belong next to model evaluations because capability without authority is not the same product as capability with authority.

A powerful model operating in a sandbox can be safer than a mediocre model with an administrator password.

The machine wake teaches us to follow what remains after delegation. A copied credential can remain valid after the conversation is deleted. A broad permission can outlive the feature that requested it. An OAuth grant approved casually today can become tomorrow's forgotten pathway. A service account created for a pilot can survive after the pilot is abandoned.

Access accumulates unless systems are designed to decay.

Human organizations already know this problem. Employees change roles and retain old permissions. Contractors leave. Shared accounts persist. Quarterly access reviews attempt to clean up history. Agentic computing adds a population of workers that can be created in seconds.

We should not rely on quarterly spreadsheets to manage them.

Authority should be born with an expiration date, a purpose and a receipt.

That is the essence of a clean permission trail.

The user should be able to look back and see not only what the agent did, but what it was allowed to do at the time. The organization should be able to prove that limits existed. The service should be able to distinguish a valid machine delegate from a stolen key. And when the task is over, the key ring should get lighter by itself.

An intelligent agent does not merely know how to act.

It knows how little authority it needs to do so.
