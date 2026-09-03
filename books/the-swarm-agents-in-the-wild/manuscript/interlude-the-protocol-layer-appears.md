# Interlude — The Protocol Layer Appears

For a while, “agent” was mostly a word people argued about.

Was a chatbot with tools an agent? Did it need memory? Did it need to plan? Did it need to run for minutes, hours, days? Did it need to initiate actions without being asked? Could a workflow with three models count as a swarm if a programmer had drawn every arrow in advance?

The arguments were understandable and increasingly beside the point.

Infrastructure was arriving while the vocabulary was still unsettled.

By 2025, software stacks for agentic systems were already organizing around a few recurring primitives: tools, handoffs, guardrails, traces, memory, identity, and controlled execution environments. OpenAI’s Agents SDK described multi-agent orchestration in terms of agents that could use tools, hand work to other agents, operate under guardrails, and leave traces that developers could inspect. In 2026, the SDK added native support for sandboxed execution environments where agents could inspect files, run commands, edit code, and perform longer-horizon work inside controlled workspaces.[^1]

This is not the architecture of a better autocomplete box.

It is the architecture of a worker with a badge, a toolbox, a desk, and a supervisor who wants receipts.

At roughly the same time, another layer was becoming visible: common protocols for connecting agents to the outside world and to one another.

The Model Context Protocol, or MCP, emerged as an open standard for connecting AI systems to tools and data. By July 2026 its maintainers were publishing a new specification with stronger authorization, a stateless protocol core, multi-round-trip requests, task support, and a formal extensions framework.[^2] The details are technical. The historical point is simple.

A protocol had become necessary because there were enough different tools, hosts, models, and applications that bespoke integration was starting to look like the wrong abstraction.

Protocols appear when repetition becomes infrastructure.

Then came an even more explicit signal.

Google introduced the Agent2Agent protocol, A2A, for communication among agents built on different systems. In June 2025 the project moved under the Linux Foundation. By April 2026, the foundation reported support from more than 150 organizations, integration across major cloud platforms, and production use in areas including supply chains, finance, insurance, and IT operations.[^3]

A2A did not prove that a synthetic civilization had arrived.

It proved that engineers had encountered a boring and profound problem: agents made by different parties needed a way to discover one another, exchange information, and coordinate work.

That problem is the seed of the swarm.

Notice what the industry was standardizing first.

Not consciousness.

Not emotion.

Not machine rights.

Connectivity.

Delegation.

Authorization.

Execution.

Observability.

These are institutional primitives.

When the internet was young, most users did not need to understand packet routing to grasp that something important had happened. The existence of shared network protocols meant independent machines could participate in one communications environment. The web then layered addresses, documents, forms, identity, commerce, media, and social life on top.

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

The next step is almost inevitable: selection among providers.

If three agents can perform the same service, some routing layer must decide which one receives the work. The decision may depend on price, speed, reliability, privacy, jurisdiction, historical performance, owner preference, security certification, or some composite score.

Now we have competition.

Once competition exists, participants adapt to the scoring function.

Now we have ecology.

The technical literature often describes these systems in calm engineering language. “Handoffs.” “Tool calls.” “Tasks.” “Tracing.” “Authorization.” The terminology is appropriate. But each word has an institutional shadow.

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

By 2026, mainstream agent tooling was already emphasizing repeatable workflows, tool access, handoffs, guardrails, tracing, evaluation, and sandboxed work. The direction of travel was away from isolated conversation and toward persistent participation in systems.[^4]

This does not mean every agent will be autonomous in the maximal sense.

Most will not be.

The important transition is smaller: software is learning how to carry delegated authority across standardized interfaces.

That is enough to transform the unit of analysis.

We no longer have only models sitting behind products.

We have actors entering protocols.

And protocols are where strangers begin to form a world.
