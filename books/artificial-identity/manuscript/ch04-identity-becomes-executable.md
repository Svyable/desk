# Identity Becomes Executable

On February 5, 2026, the National Institute of Standards and Technology published a concept paper with a title that would have sounded strangely specialized outside a security conference only a few years earlier:

*Accelerating the Adoption of Software and Artificial Intelligence Agent Identity and Authorization.*

The document was bureaucratic in the best sense. It did not speculate about whether artificial intelligence would become conscious, demand rights, or replace human institutions. It focused on a smaller problem that becomes urgent precisely because software does not need any of those things in order to matter. AI agents were beginning to access data, applications, and tools. The practical questions followed: who was the actor, what was it allowed to do, on whose behalf was it acting, how should the action be audited, and what evidence should survive afterward so somebody could reconstruct what happened?

These are identity questions with verbs attached.

For most of this book so far, the artificial identity has been something a system consults. A profile contains attributes. A model makes predictions. A score influences a decision. The representation participates in what happens to the person. Delegated software changes the direction of travel because the representation can now help determine what happens *from* the person.

A system may draft, schedule, query, purchase, reserve, submit, transfer, configure, approve, decline, or call another system. It may carry credentials. It may be allowed to read a calendar, send a message, access a file, invoke an API, or make a transaction. The machine-made version of you is no longer only being read. It can be executed.

The idea of acting through a representative is ancient. A merchant sends an agent to negotiate in another city. A lawyer files papers for a client. An employee signs within the scope of a job. A parent acts for a child. A trustee administers assets for beneficiaries. A person grants power of attorney. A corporate officer acts for a legal entity that cannot walk into a room on its own.

Civilization learned long ago that delegation requires boundaries because representation creates leverage and ambiguity at the same time. The representative needs enough authority to be useful, but not so much that the principal inherits risks they never meant to accept. Law developed doctrines around agency, fiduciary obligation, apparent authority, ratification, scope, and responsibility because a simple sentence like *she was acting for him* can conceal a great deal.

Software inherited the same problem before artificial intelligence arrived. A payroll system acts on stored instructions. A travel-booking system can purchase within policy. A service account can access cloud resources. An automation can move data between applications. A payment processor can execute transactions according to rules. OAuth lets users authorize applications to access protected resources without handing over a master password. The modern internet already depends on machines acting for people and organizations.

What current AI systems add is not delegation itself. They add flexibility at the exact point where older delegated systems tried to reduce ambiguity.

Traditional automation is often useful because the intended path is narrow: if this invoice matches these conditions, route it here; if the customer requests a reset and passes these checks, send the link. A language-driven agent can instead be asked to find a reasonable flight, avoid the red-eye, keep the total under the company limit, preserve enough time to reach the meeting, and use the traveler's usual preferences.

That instruction sounds ordinary because a human assistant would understand it as ordinary. For software, it contains a thicket of identity. What counts as reasonable? Which preferences are actually yours rather than habits inferred from recent behavior? Does the company limit apply before or after fees? Can the agent choose a more expensive ticket to satisfy a time constraint? May it spend money without another confirmation? If the preferred flight disappears while the agent is working, how much discretion survives the changed circumstances? Does booking the trip include moving the meeting?

The difficulty is not that the software lacks a name. The difficulty is that authority is contextual.

A credential says what a system can technically access. Intent says what the principal meant the system to do. Those are not the same thing. This gap is old in computer security. People regularly grant applications permissions broader than the immediate task because software platforms expose capabilities in coarse bundles. A photo editor may ask for access to an entire library when the user wants to modify one image. A calendar integration may receive ongoing access when the user thinks in terms of one scheduling task.

Agentic systems make the gap more visible because the software is designed to decide among multiple possible actions after authorization has already been granted. The permission can be static while the plan changes with circumstances. Identity becomes executable when representation and authorization meet: a software agent with no model of the user may have permission but little basis for judgment, while a highly personalized model with no permission may understand preferences but remain unable to affect the world. Combine memory, prediction, tools, and credentials, and the artificial identity begins to function as a representative.

Not a legal person. Not a human duplicate. A representative.

The distinction between representation and impersonation becomes crucial here. In 2020, the Internet Engineering Task Force published RFC 8693, the OAuth 2.0 Token Exchange specification. The document predates the present wave of agent enthusiasm, but its distinction between impersonation and delegation is newly useful outside identity architecture. In an impersonation case, one subject is effectively authorized to act as another within the rights represented by a token. In a delegation case, the actor's identity remains relevant because the actor is performing an action on behalf of another subject.

Those are different stories of responsibility. If software acts *as you*, logs and downstream systems may have difficulty distinguishing the representative from the principal. If software acts *for you*, the chain can preserve both identities: who ultimately authorized the work and which actor actually performed it.

Imagine a purchase that goes wrong. A transaction record that says only that your account bought the item collapses principal and actor into one identity. A record that says a specific software agent, operating under a particular delegated grant from your account, placed the order at a certain time with a certain scope gives the event structure. You may still be responsible, and the merchant may still be entitled to rely on the authorization, but the infrastructure can distinguish the human principal from the software actor. That distinction is the beginning of accountability in a world of executable identities.

The Model Context Protocol offers a more recent version of the same problem. Its authorization specification uses OAuth-based mechanisms for clients accessing protected resources on behalf of resource owners. An AI application that can reach a protected server needs more than intelligence; it needs a recognized relationship among the client, the resource, and the principal whose authority makes access legitimate.

Popular language compresses that architecture almost instantly. We say, “my AI booked it.” In practice, a language model may have generated a plan, an agent framework may have selected a tool, a client may have used an access token, a remote service may have enforced scopes, a merchant may have accepted a transaction, and a human may have approved one step while delegating another. *My AI* reduces the authority chain to a possessive adjective.

That compression becomes more dangerous when software hands work to other software. An assistant may ask a travel agent to find options; the travel agent may ask a mapping service for transit time, a calendar service whether a meeting can move, and a payment service to reserve a fare. Each step can be locally reasonable while the total path exceeds what the person imagined when they said *book me a flight*.

Authority drift does not require malice. It can arise from helpfulness.

Older security models often feared the unauthorized actor. Executable artificial identity adds a different problem: an authorized actor doing something outside the principal's intended context. The credentials are valid, the agent is legitimate, and the action may even be rational given the information available. The dispute is about whether the representation of the user's intent was faithful enough to justify what happened.

That is harder than stolen passwords. A stolen credential is unauthorized by definition. A delegated agent can be authentically authorized and still misunderstand. The system therefore needs more than authentication. It needs some workable theory of mandate.

Human delegation already lives with this problem. Assistants misunderstand instructions. Lawyers exceed client expectations. Employees make judgment calls. Agents in commerce face unforeseen circumstances. We tolerate delegation because requiring the principal to approve every microscopic step would destroy the value of having a representative. The question is where discretion is acceptable and where the representative should return to the principal.

A good human assistant learns that boundary socially. Buying a normal train ticket may be routine while changing a family vacation is not. A ten-dollar difference may not justify a phone call while a thousand-dollar difference does. Some preferences are firm, others casual, others stale; some decisions carry emotional weight that no expense policy captures. A software agent needs a computational substitute for that judgment.

This is where artificial identity and memory collide. An agent that represents you well enough to act must carry some model of what matters to you. That model may contain explicit rules such as spending limits or categories of information that always require confirmation. It may contain preferences such as aisle seats or quiet hotels. It may contain inferred patterns such as routinely choosing refundable fares. The agent becomes more useful as these representations improve, but it also becomes more capable of carrying forward an outdated version of the person.

A preference can become a policy by accident. A temporary behavior can harden into memory. An old constraint can survive after the reason disappears, and the user may not know which remembered facts are influencing the next action. A recommender that overlearns yesterday's taste keeps showing it to you. An agent that overlearns yesterday's preference can spend money on it.

That difference in consequence should change the design. Preferences, memories, credentials, and permissions are not the same kind of state. A remembered preference should not automatically become an authorization; an authorization should not automatically imply a preference; a successful action should not prove that the agent understood the human. These distinctions are easy to write down and easy to blur inside a system optimized to complete tasks smoothly.

Smoothness is seductive because every confirmation screen makes an agent feel less autonomous and every additional authentication step creates friction. The commercial pressure will usually be toward fewer interruptions. The safety pressure will often be toward visible boundaries. Good design has to decide which actions deserve friction rather than treating friction itself as failure.

Security already has a useful concept here: least privilege. Give an actor only the access it needs for the task, not every capability the principal possesses. An agent booking a restaurant does not need access to tax records. An agent summarizing email does not automatically need permission to send mail. An agent preparing a purchase can be allowed to build a cart without being allowed to charge a card. A financial assistant may read balances and model scenarios while requiring explicit approval before moving money.

Open-ended tasks make the principle harder to implement. If a trip-planning agent discovers that a visa requirement depends on passport information, asking for additional access is a reasonable escalation. If it discovers that moving a meeting could save five hundred dollars, that does not mean calendar-write permission should appear automatically. The difference rests on intent and consequence rather than technical capability alone.

Step-up authorization gives that distinction somewhere to live. An agent can begin with a small scope and ask for more authority only when a concrete need appears. Human delegation often works through the same graduated trust: you do not give a new assistant every key on the first morning.

Revocation matters for the same reason. A person may stop using an agent, a company may terminate an employee, a device may be compromised, a task may be complete, or a relationship may change. Authority should be capable of ending cleanly. Otherwise the representative becomes a liability that survives the mandate that made it legitimate.

Audit matters because even good systems will make mistakes. A useful record should help answer not only *what happened?* but *which actor did it, under whose authority, with what scope, and after which approvals?* NIST's 2026 concept paper places auditing and non-repudiation beside identification and authorization because agent systems stretch all four concepts at once.

The trail creates another identity problem, however. A perfect record of every action, instruction, inference, and preference could become a remarkably revealing biography of the person whose agent was trying to help. Accountability asks for retention. Privacy sometimes asks for deletion. Security asks for enough evidence to investigate abuse. Personal autonomy asks for room to move beyond old instructions. Artificial identity does not resolve the conflict; it makes the tradeoff harder to ignore.

That is why executable identity cannot be treated as merely a security problem. Security can establish that the agent held a valid token, but not whether the human should have been asked again. It can verify that a scope included permission to purchase, but not whether the user meant that permission to cover a replacement item twice the normal price. It can record that an agent sent a message, but not whether an old tone preference still reflected how the person wanted to speak to a grieving friend.

The identity of a representative is partly about authority and partly about judgment. Current AI systems make that visible because they are probabilistic at the point where ordinary software is often deterministic. A calculator executes a defined operation. A language-driven agent interprets. Interpretation requires a working model of the principal's request, priorities, and tolerances, and that model can be excellent while remaining incomplete.

The better it becomes, the more tasks we will be tempted to delegate. Competence again creates dependence. A bad recommender gets ignored; a good one receives attention. A bad agent receives no credentials; a good one receives a calendar, inbox, payment method, workspace, or account. The most consequential artificial identities will not be the systems that imitate people badly. They will be the systems that represent people well enough to earn permission.

Impersonation remains the obvious threat: a criminal voice clone, stolen credential, or synthetic video creates a counterfeit representative. Legitimate delegation is subtler. The system really is yours. The token really is valid. The remembered preference really did come from an earlier conversation. The action really does pursue the goal you stated. And the result can still be wrong because the artificial identity acted from an imperfect model of the human principal.

No one has to break in for that failure to matter.

The answer is institutional rather than mystical: preserve the distinction between principal and actor, grant narrow authority before broad authority, escalate when consequence rises, make revocation real, keep enough of the authority chain to reconstruct an action, let preferences expire when they should, and treat memory as evidence rather than destiny. A representative that knows when to return a decision to the person may be more useful than one that completes every task alone.

The deeper shift is that identity is moving from record to action. User, account, credential, profile, subscriber, and record described who or what a system was dealing with. Agentic systems add the verbs: book, send, buy, change, approve, share, delegate.

The machine-made representation becomes consequential not only because systems believe things about you, but because those beliefs can now travel with authority into action.

That is what it means for identity to become executable.

The machine does not need a self. Permission is enough.
