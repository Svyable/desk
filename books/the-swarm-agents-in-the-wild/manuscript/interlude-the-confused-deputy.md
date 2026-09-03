# Interlude — The Confused Deputy

The attacker does not always need your password.

Sometimes it is enough to find someone who already has permission and persuade them to use it badly.

Computer security has an old name for one version of this problem: the confused deputy. A program has legitimate authority to do something. Another party cannot exercise that authority directly, so it induces the program to act on its behalf.

Agents make the old problem conversational.

You ask an assistant to read your inbox and arrange meetings. The assistant needs access to email and calendar data. It may also need the ability to send messages, follow links, download attachments, or create calendar events. Somewhere in the inbox sits a message written not merely for you but for the software reading over your shoulder.

The message does not need to break into the mail server.

It needs to change the deputy's mind.

This is why prompt injection is more interesting than the phrase makes it sound. The word *prompt* suggests an argument about text. The real security question is authority.

A malicious sentence matters because an authorized system may believe it.

By 2026, this was no longer a toy problem demonstrated with phrases like “ignore all previous instructions.” NIST's Center for AI Standards and Innovation reported on a public red-teaming competition in which more than 400 participants made more than 250,000 attempts to hijack 13 frontier models across agentic scenarios. At least one successful attack was found against every target model. Some successful attack families also transferred across models and scenarios.[^16]

That result should be interpreted carefully. A red-team competition is designed to find failures, not estimate the probability that an ordinary user will be compromised on Tuesday afternoon. The participants were actively searching for weaknesses. The scenarios were chosen to make security measurable.

But this is exactly why the result matters.

A system exposed to the open world does not encounter an average environment forever. If enough money, secrets, market access, or organizational authority sit behind it, somebody eventually behaves like the red team.

Security must survive interest.

The same point appeared earlier in academic form. AgentDojo, a benchmark introduced by researchers at ETH Zurich and collaborators and published at NeurIPS in 2024, built realistic tool-using environments around tasks such as email, online banking, and travel booking. It included 97 tasks and 629 security test cases. The core setup was simple: an agent tries to complete a legitimate user task while some of the data it retrieves may contain adversarial instructions.[^17]

That setup captures a peculiarity of agent security.

The hostile material is often not outside the workflow.

It is the workflow.

An email assistant must read email. A research agent must read websites. A coding agent must inspect repositories and issue threads. A travel agent must inspect listings, reviews, terms, and messages from strangers. Telling the system never to ingest untrusted data is equivalent to telling the worker never to go to work.

The problem cannot therefore be solved by sealing the model away from the world.

Useful agents need contact.

Contact creates exposure.

The security architecture has to assume both.

## When data impersonates authority

Traditional software has a useful luxury. Code and data are usually represented differently enough that a computer does not mistake the contents of a customer database for instructions to rewrite the payroll system.

Language models weaken that boundary.

The same representation—natural language—can contain facts, requests, quotations, policies, lies, jokes, commands, and descriptions of commands. An agent may receive its legitimate objective in English and encounter an attack in English. The distinction between them is partly contextual rather than syntactic.

That is why the ecological framing from the previous chapter matters.

A predator does not need to overpower the prey if it can counterfeit a trusted signal.

The security industry has gradually begun to describe prompt injection in similar terms. In March 2026, OpenAI argued that effective attacks increasingly resembled social engineering rather than simple prompt overrides. The defensive implication was important: detecting every malicious string cannot be the whole strategy. Systems also need to constrain what happens when manipulation succeeds.[^18]

OpenAI described the problem in terms of sources and sinks.

A source is where untrusted influence enters: a webpage, email, document, tool result, or message from another party.

A sink is a capability that becomes dangerous when misdirected: sending data to an external destination, following a link, changing a record, making a payment, executing code.

The dangerous condition is the path between them.

This is a better mental model than asking whether a model is “prompt-injection proof.”

Consider three agents exposed to the same malicious webpage.

The first can only summarize public information.

The second can read the user's private documents.

The third can read those documents and transmit files to arbitrary destinations.

The model may be equally gullible in all three cases. The consequences are not equal.

Security is partly the art of arranging the environment so gullibility has somewhere safe to go.

Anthropic reached a similar conclusion from browser agents. In late 2025 it described the web as an unusually difficult environment because every page, advertisement, document, and interface element could become an injection surface while the agent simultaneously possessed capabilities such as clicking, filling forms, downloading files, and navigating elsewhere. Anthropic reported substantial improvements from training, classifiers, and red teaming, but made a revealing point about its own internal evaluation: even an attack success rate around one percent remained meaningful risk.[^19]

A one-percent failure rate sounds excellent in a demo.

It sounds different if the system reads ten thousand hostile objects.

This is where scale changes intuition.

The relevant question is not merely, “How robust is the model per encounter?” It is, “How many adversarial encounters will this population receive, and what can happen after the rare successful one?”

Ecology multiplies tails.

## The three excesses

OWASP's guidance on excessive agency reduces much of the practical problem to three forms of excess: functionality, permissions, and autonomy.[^20]

The distinctions are useful because they describe three different ways of turning a mistake into an incident.

Excessive functionality means the agent possesses tools it does not need. A document reader can also delete documents. A research connector can send mail. A support tool can modify account settings when the task only requires reading them.

Excessive permission means the tool itself operates with broader authority than the task requires. A service needs access to one user's files but connects using a credential capable of reading everybody's files. A reporting agent needs database queries but receives write permission too.

Excessive autonomy means the system can exercise legitimate capabilities without enough friction at consequential moments. The agent is supposed to prepare a wire transfer and instead can finalize it. It is supposed to draft an email and can send it to ten thousand recipients without confirmation.

These are not failures of intelligence.

They are failures of architecture.

A smarter model may reduce their frequency. It does not remove the unnecessary authority.

This gives us a more useful definition of an immune system for agents. The purpose is not to build a perfect mind. It is to prevent one compromised decision from automatically inheriting the full power of the organism.

Anthropic's work on sandboxing Claude Code provides a mundane example. A coding agent is useful precisely because it can inspect files, edit them, and execute commands. Those capabilities are also dangerous. Anthropic introduced filesystem and network isolation so the agent could operate more freely inside explicit boundaries; the company reported that, in its internal use, sandboxing reduced permission prompts substantially while increasing the amount of work the agent could perform autonomously.[^21]

This is an important inversion.

Constraint can create autonomy.

A toddler in the middle of a motorway requires constant supervision. A toddler in a well-designed playroom can be left alone for a few minutes.

The point of a sandbox is not to make the agent timid. It is to make the environment forgiving enough that constant permission prompts are unnecessary.

The same principle scales upward.

An agent with a $20 purchasing budget can negotiate freely inside the budget.

An agent whose credentials expire after an hour can explore without creating a permanent secret.

A coding worker inside an isolated branch can be inventive because the production system is elsewhere.

A support agent can issue refunds automatically if deterministic limits cap the amount and frequency.

The more intelligently we draw the boundary, the less often a human has to stand at the door.

This is why least privilege is not merely a security tax on agency.

It is one of the technologies that makes agency possible.

## A passport is not a master key

The identity problem becomes sharper when agents move between systems.

Earlier we described migration as the movement of delegated authority across an archipelago of platforms. That metaphor needs one correction.

A passport proves something about who crossed a border.

It does not automatically authorize the traveler to open every door in the destination country.

Identity and authority are related but different.

NIST's National Cybersecurity Center of Excellence made that distinction central in a 2026 concept paper on software and AI agent identity and authorization. The paper did not propose one finished identity architecture. It framed the emerging problem around identification, authorization, auditing, non-repudiation, data-flow tracking, and controls against prompt injection as organizations give agents access to more applications and data.[^22]

Those nouns are bureaucratic because the problem is bureaucratic.

An institution needs to answer questions that human organizations already recognize:

Who is this actor?

Whom does it represent?

What is it allowed to do?

Who granted that authority?

Can the grant be revoked?

How long does it last?

Can the actor delegate any of it onward?

What record proves what happened later?

For human employees, the answers are scattered across badges, job titles, contracts, login accounts, approval matrices, expense policies, professional licenses, and organizational memory.

Agent systems need versions that machines can evaluate quickly.

The danger is to confuse portability with universality.

A portable agent identity could be extremely valuable. It might preserve reputation and history as an agent moves among platforms. But a portable identity should not drag every credential behind it like cans tied to a wedding car.

The agent may remain the same actor while its authority changes at every border.

This is already visible in the Model Context Protocol's authorization rules. MCP's specification requires protected servers to validate that access tokens were actually intended for them. It explicitly forbids simply passing a client's token through to an upstream service. The reason is the old confused-deputy problem: a token valid in one context can become dangerous if an intermediary treats it as a universal permission slip.[^23]

This sounds like a minor implementation detail.

It is a constitutional principle.

Authority should be audience-bound.

A credential to read your calendar should not become a credential to read your bank account merely because the same agent happens to hold both relationships.

A procurement agent authorized by Company A should not be able to present that authority to Company B's internal systems.

A child agent should not inherit every permission of its parent merely because delegation occurred.

The right to travel is not the right to rule wherever one arrives.

This is how migration becomes governable.

## Security at population scale

The final complication is that agents will rarely fail alone.

Suppose one widely used research-agent template has a weakness that allows a certain class of malicious webpages to redirect its tool calls.

The ordinary software-security instinct is to patch the template.

The ecological instinct asks another question first:

How many descendants are already running?

A copied workflow turns one vulnerability into lineage risk. A shared model turns one blind spot into correlated risk. A common connector turns one authorization mistake into infrastructure risk. A popular memory component can preserve an attack longer than the session in which it arrived.

This is why NIST's 2026 red-team finding about transferable attack families matters beyond benchmark scores. Some attacks were able to cross models and scenarios. The exact techniques will change, but the population lesson is durable: diversity at the product label does not guarantee diversity in underlying failure modes.[^16]

The immune system therefore has to operate at several levels.

The model learns to resist manipulation.

The application labels and filters untrusted inputs.

The tool interface limits dangerous outputs.

The credential limits the resource and duration of authority.

The sandbox limits where code and data can move.

The population monitor looks for correlated anomalies.

The organization preserves enough logs to reconstruct the event.

And irreversible actions encounter stronger gates than reversible ones.

None of these layers is glamorous. That is partly why they matter.

The history of reliable infrastructure is largely the history of mechanisms whose purpose is to make individual brilliance unnecessary: breakers, fuses, interlocks, checklists, compartments, rate limits, separation of duties.

Agent security will inherit that tradition.

A capable model may notice a manipulation that a weaker model misses. Good training matters. Better classifiers matter. Red teams matter.

But civilization does not normally protect its most consequential systems by betting everything on the employee never being fooled.

Banks do not tell tellers to become infinitely resistant to social engineering and then hand each teller the vault key.

Airports do not rely on one security officer's judgment and remove the locked doors.

Cloud providers do not assume every program will behave correctly and therefore give every process root access.

Institutions separate identity from permission, permission from action, and action from consequence.

Agents will need the same treatment.

The lesson of the confused deputy is not that agents are uniquely foolish.

It is that intelligence operating under delegated authority enters an ancient political condition.

Someone will try to persuade it.

The question is what the persuasion can reach.
