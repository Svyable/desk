# Interlude — The Protocol Layer Appears

For a while, “agent” was mostly a word people argued about.

Was a chatbot with tools an agent? Did it need memory? Did it need to plan? Did it need to run for minutes, hours, days? Did it need to initiate actions without being asked? Could a workflow with three models count as a swarm if a programmer had drawn every arrow in advance?

The arguments were understandable and increasingly beside the point.

Infrastructure was arriving while the vocabulary was still unsettled.

By 2025, software stacks for agentic systems were already organizing around a few recurring primitives: tools, handoffs, guardrails, traces, memory, identity, and controlled execution environments. OpenAI’s Agents SDK described multi-agent orchestration in terms of agents that could use tools, hand work to other agents, operate under guardrails, and leave traces that developers could inspect.[^1]

A year later, the same SDK added native support for sandboxed execution environments where agents could inspect files, run commands, edit code, and perform longer-horizon work inside controlled workspaces. The engineering documentation made a security assumption explicit: systems should be designed expecting prompt-injection and exfiltration attempts. It separated the agent harness—the layer carrying instructions, orchestration, credentials, and state—from the environment where model-generated code executes. Subagents could be routed into isolated sandboxes, and work could be parallelized across containers.[^1]

This is not the architecture of a better autocomplete box.

It is the architecture of a worker with a badge, a toolbox, a desk, and a supervisor who wants receipts.

At roughly the same time, another layer was becoming visible: common protocols for connecting agents to the outside world and to one another.

The distinction between those two connections matters.

An agent reaching a database is not the same relationship as an agent hiring another agent.

The emerging protocol ecosystem began to build separate seams for each.

## The tool boundary

The Model Context Protocol, or MCP, emerged as an open standard for connecting AI systems to tools and data. By July 2026 its maintainers had shipped a major specification revision with a stateless protocol core, Multi Round-Trip Requests, header-based routing, cacheable lists of tools and resources, authorization hardening, a formal extensions framework, and a task extension for longer-running work.[^2]

Those details sound like plumbing because they are plumbing.

Plumbing is where a surprising amount of civilization lives.

Consider two HTTP headers in the 2026 specification: `Mcp-Method` and `Mcp-Name`. They allow infrastructure sitting in front of an MCP server to see, without digging into the body of every request, what kind of operation is being attempted and which named tool or resource is involved.[^2]

That makes mundane controls easier.

A gateway can route requests differently by tool.

A rate limiter can meter an expensive or dangerous capability separately from a cheap read operation.

A security appliance can apply different rules to a tool that sends money than to one that retrieves a weather report.

An operator can build logs around the actual capability being exercised rather than treating every agent request as an undifferentiated blob of model traffic.

This is what it means for governance to move downward into infrastructure.

The authorization changes tell the same story. The 2026 MCP revision tightened issuer validation, bound credentials to the authorization server that minted them, and continued moving client identity toward more explicit metadata rather than casual dynamic registration.[^2]

The protocol maintainers were not writing a political theory of agents.

They were dealing with the practical fact that a model connected to useful systems needs credentials, and credentials create security boundaries.

Once an agent can reach the payroll database, a cloud console, a customer record, or a payment rail, the important question is no longer whether the model “understands” authority philosophically.

The question is whether the authority has been represented precisely enough that infrastructure can enforce it.

MCP also illustrates a recurring design choice in agent systems: make state visible rather than magical.

The 2026 specification removed hidden protocol-level sessions from the core. When an application needs state across calls, a server can issue an explicit handle that the model carries into later requests. Long-running work can be represented through task handles and explicit updates rather than relying on an invisible persistent connection.[^2]

This is technically convenient for scaling.

It is also institutionally legible.

A handle can be logged.

A task can have a lifecycle.

A capability can be revoked.

A request can be traced back to something that initiated it.

Hidden continuity is difficult to govern. Named continuity can acquire rules.

## The agent boundary

Tool access solves only half of the problem.

Once different organizations build specialized agents, one agent needs a way to discover another, learn what it claims to do, give it work, receive a result, and sometimes cancel the job before completion.

Google introduced the Agent2Agent protocol, A2A, in 2025 for communication among agents built on different systems. In June of that year the project moved under the Linux Foundation, which described the goal as vendor-neutral interoperability across platforms and frameworks. By April 2026, the foundation reported support from more than 150 organizations, integration across Google, Microsoft, and AWS platforms, and production deployments in supply chain, financial services, insurance, and IT operations.[^3]

Those adoption numbers are foundation-reported rather than an independent census. A logo on a standards page does not prove deep production use. The significant fact is narrower: enough firms were encountering cross-agent coordination as a real engineering problem that a vendor-neutral protocol project had become worth governing, implementing, and standardizing.

The A2A specification makes the institutional analogy almost embarrassingly literal.

An agent exposes an **Agent Card** describing where it can be reached, what capabilities it offers, and what forms of interaction and security it supports. Work can be represented as a **Task** with an identifier and lifecycle. Agents exchange **Messages**. Completed work can arrive as **Artifacts**. Tasks can be queried, streamed, and canceled. Long-running jobs can provide asynchronous updates.[^4]

These are not metaphors invented for this book.

They are data structures.

A capability directory is the seed of a labor market.

A task identifier is the seed of a case number.

A cancellation method is the seed of revocation.

An artifact is the seed of a deliverable that can be inspected, stored, signed, disputed, or paid for.

A2A also does not require collaborating agents to expose their internal reasoning or implementation details. They can coordinate through declared capabilities, messages, task state, and outputs.[^4]

That design has a useful governance implication.

Cooperation does not require telepathy.

Two firms can transact without sharing every internal meeting. Two people can sign a contract without revealing every thought that preceded the signature. An agent ecosystem can similarly demand evidence about authority, requests, actions, and outputs without requiring a permanent transcript of private internal reasoning.

That is the technical version of a principle developed later in this book: receipts, not telepathy.

## Two seams, one ecology

MCP and A2A address different relationships.

MCP primarily gives an AI system a standardized way to reach tools, resources, and data exposed by servers.

A2A gives one agentic system a standardized way to discover and communicate with another agentic system around messages, tasks, and artifacts.

A useful agent may use both.

Imagine a purchasing agent at a small manufacturer.

It uses MCP to inspect inventory, query approved-vendor records, and retrieve current freight contracts.

It discovers through A2A that an external customs specialist advertises the ability to classify a difficult component for a particular jurisdiction.

The purchasing agent creates a bounded task for that specialist.

The specialist uses its own tools, perhaps through its own MCP servers, and returns a classification artifact.

The purchasing agent verifies the output against an independent source, records the evidence, and then uses another tool to update the purchase order.

No universal super-agent was required.

A temporary organization formed across protocols.

This is why the protocol layer matters more than the branding of any particular agent product.

Protocols lower the cost of specialization.

They also lower the cost of composing authority.

The second effect is the dangerous one.

A tool permission that is safe in isolation may become unsafe when delegated through a chain of agents. An agent that can spend one thousand dollars may call a specialist that can itself recruit three other providers. A harmless research tool may retrieve hostile instructions that influence an agent carrying stronger credentials elsewhere. A remote agent may return an artifact that looks like data but contains content designed to manipulate the next model that reads it.

Interoperability expands both usefulness and attack surface.

The response cannot be to abandon protocols and return to one giant trusted application. Closed systems concentrate different risks.

The response is to make delegation boundaries first-class.

Which credential traveled with the task?

Which did not?

Can the recipient delegate again?

What is the maximum spend?

When does the authority expire?

Can the principal cancel the task after handoff?

Does the returned artifact carry provenance?

Which side keeps the durable record if the transaction becomes disputed?

These questions sound legal because they are legal in shape, even when the first implementation is an API field.

## Protocols are policy before they are politics

Notice what the industry standardized early.

Not consciousness.

Not emotion.

Not machine rights.

Connectivity.

Delegation.

Authorization.

Execution.

Observability.

These are institutional primitives.

When the internet was young, most users did not need to understand packet routing to grasp that something important had happened. Shared network protocols meant independent machines could participate in one communications environment. The web then layered addresses, documents, forms, identity, commerce, media, and social life on top.

Agent protocols are earlier and messier, but the rhyme is worth hearing.

An agent that can use a tool is one thing.

An agent that can discover a tool through a standard interface is another.

An agent that can discover another agent, determine what it claims to do, assign it work, receive a result, verify some portion of that result, and continue the task is the beginning of a networked labor system.

This matters because networks lower the cost of specialization.

A small company does not need one universal agent if it can assemble capabilities on demand. Its accounting agent can call a tax specialist. Its logistics agent can request a customs specialist. Its software agent can recruit a security reviewer. Its customer-support agent can hand a refund dispute to a policy agent with a narrower authority set.

The architecture begins to resemble a market even when no money changes hands.

Capabilities are advertised.

Tasks are routed.

Results return.

Reputation accumulates.

Failures become visible in traces.

The next step is selection among providers.

If three agents can perform the same service, some routing layer must decide which one receives the work. The decision may depend on price, speed, reliability, privacy, jurisdiction, historical performance, owner preference, security certification, or some composite score.

Now competition has entered the protocol.

Once participants care about the scoring function, they adapt to it.

Now ecology has entered too.

The technical literature describes these systems in calm engineering language. “Handoffs.” “Tool calls.” “Tasks.” “Tracing.” “Authorization.” The terminology is appropriate. But each word has an institutional shadow.

A handoff is delegation.

A tool call is an exercise of capability.

A task is a claim on resources.

A trace is a record that can support accountability.

Authorization is law in miniature.

This is why the protocol layer deserves attention from people who do not care about software protocols.

It is where values become defaults.

If an agent’s identity is portable, markets may remain open.

If identity is platform-bound, power may concentrate.

If delegation automatically carries all parent permissions, privilege can expand catastrophically.

If delegation is attenuated by default, agent organizations become safer but sometimes less convenient.

If traces are rich and durable, disputes can be reconstructed.

If traces are proprietary or incomplete, the owner of the infrastructure becomes the historian of every incident.

If tool interfaces expose prices and consequences clearly, agents can make informed trade-offs.

If side effects are hidden behind cheerful verbs like `submit` and `confirm`, software can produce real-world commitments without understanding their weight.

This is constitutional design happening inside developer documentation.

Most of the people doing the design are not trying to become constitutional framers. They are trying to ship reliable software.

That is normal.

The people who standardized shipping containers were not writing a philosophy of globalization. The engineers who developed internet protocols were not drafting the future etiquette of social media. Infrastructure acquires political meaning after enough life depends on it.

The opportunity with agents is to notice earlier.

By 2026, production agent tooling and open protocols were converging on a recognizable set of concerns: repeatable workflows, bounded tool access, task state, handoffs, authorization, traces, evaluations, cancellation, and isolated execution.[^1][^2][^3][^4]

This does not mean every agent will be autonomous in the maximal sense.

Most will not be.

It does not mean MCP or A2A will necessarily become the final standards either. Protocols fork, compete, consolidate, and sometimes disappear.

The important transition is smaller and already visible: software is learning how to carry delegated authority across standardized interfaces.

That is enough to transform the unit of analysis.

We no longer have only models sitting behind products.

We have actors entering protocols.

And protocols are where strangers begin to form a world.
