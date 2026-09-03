# Chapter 15 — The Dead Software Garden

Software does not rot the way wood rots.

That is part of the problem.

A file can sit untouched for twenty years and still contain exactly the same characters. A function does not become visibly brittle. A dependency does not turn brown at the edges. The code remains perfectly preserved while the world around it changes.

Operating systems update. Libraries remove interfaces. Security assumptions fail. Certificates expire. Domains change owners. Regulations change. The employee who understood the design leaves. The business process the software automated is replaced by another one. Data formats drift. Users expect new behavior.

The code remains the same.

Maintenance is the work of keeping static artifacts compatible with moving environments.

Generative AI can produce software faster than organizations have ever produced it before. That is useful. It also means the dead software garden can grow faster.

A coding agent can create a command-line tool for a one-time migration, a dashboard for a team, a prototype service, a test harness, a data-cleaning script or an internal integration before a conventional project would have cleared the first planning meeting. Much of this software will save time. Much of it will never need to live long.

The danger is that temporary code rarely arrives with an expiration date.

A prototype becomes useful. Someone adds a scheduled job. Another team starts depending on its output. The original author moves on. Six months later, the tiny script has credentials, a production database connection and three downstream users.

Machine-generated code can accelerate this familiar path because creation cost collapses while ownership cost remains.

The machine wake is not the code it writes. It is the software that remains after the original task has been forgotten.

This distinction matters because lines of code are a poor measure of productivity.

In software, more is often worse. Every line can contain a defect, require review, depend on an interface, impose a maintenance burden or confuse a future reader. Skilled engineers routinely delete code because a simpler system is easier to operate.

Generative systems invert the old scarcity. Code used to be expensive enough to write that teams hesitated before automating small tasks. Now the hesitation moves to maintenance.

Should this code exist at all?

That becomes an engineering question of first order.

A good coding agent should be able to answer a request by deleting code, using an existing library, changing configuration, writing a query or documenting a manual process when those are cheaper over the life of the system. If the agent's success metric rewards visible patches, it will plant software where restraint would have been better.

The garden fills because every request produces another plant.

Generated code also changes provenance.

Software supply-chain standards such as SLSA emphasize verifiable information about where, when and how software artifacts were produced. NIST's Secure Software Development Framework recommends practices around provenance, secure environments, vulnerability management and development processes. These disciplines became important before AI coding agents because modern software already depends on complex chains of source, dependencies, builds and deployment systems.

Agents make the chain more crowded.

A pull request may be authored by a model that read repository code, documentation, issue text and possibly external examples. It may add a dependency selected automatically. It may generate tests. A second model may review the change. A security scanner may flag a secret or vulnerable library. The agent may revise the patch in response.

The final commit looks ordinary.

Its production process is not.

This is why repository history needs richer receipts rather than a binary label that says “AI-generated.” The useful questions are which task authorized the change, which agent acted, what repository state it saw, which tools it used, what dependencies changed, which tests ran, which security checks passed and who approved merge.

A human developer should be held to many of the same standards. The agent simply makes hidden production more obvious.

Current repository platforms are already moving in this direction. GitHub, for example, has added automatic security validation for code produced by coding agents, including static analysis, dependency checks and secret scanning in supported workflows. The important idea is not one product feature. It is that machine authorship increases the value of automated gates because generation can outpace manual inspection.

Review capacity becomes scarce.

If an agent can open ten pull requests in the time a maintainer used to receive one, the maintainers cannot preserve quality by reading ten times faster. The system has to reject low-value or unsafe changes earlier.

Tests, linters, type systems, dependency policies, static analysis and provenance become filters in the wake.

This can be healthy. Software engineering has always benefited from machines checking machines. Compilers catch syntax. Tests catch regressions. Security scanners catch known patterns. Continuous integration turns review into a repeatable pipeline.

AI-generated code can push organizations toward stronger engineering hygiene because weak repositories are difficult for agents to work in safely.

A repository with clear tests, documented conventions, modular architecture and reproducible builds gives a coding agent external reality to check against. A repository where everything depends on tribal knowledge invites plausible mistakes.

Agent readiness is partly software quality.

The inverse is also true. Agents can make bad software systems appear productive longer than they deserve.

An old tangled codebase normally slows developers because every change requires rediscovering context. A model can absorb large amounts of code and generate patches that locally work. This can postpone architectural cleanup. Instead of simplifying the system, the organization uses machine labor to keep adding around complexity.

Technical debt becomes cheaper to service and therefore easier to accumulate.

That sounds beneficial until the agent makes mistakes the organization can no longer interpret.

A healthy codebase has human legibility even when machines contribute heavily. Someone should be able to explain why major components exist, where critical invariants live and what would happen if a dependency failed. If generated patches become a layer of sediment nobody owns, the organization may depend on software it can modify only by asking another model to guess.

That is not maintainability. It is recursive archaeology.

The problem is not that a human did not type the code. Humans routinely maintain code written by strangers. The problem is absence of intent.

Source code says what the machine will do. It often says little about why that behavior was chosen. Comments can help. Issue history can help. Design documents can help. Commit messages can help. A generated system needs the same context.

The cheaper code becomes, the more valuable intent becomes.

A five-line workaround should say which failure it works around and what condition would allow removal. A dependency should say why it was chosen. A generated migration should say whether it is one-time and when it can be deleted. A feature flag should have an owner and retirement condition.

This is software composting: design temporary material so it can leave the garden.

Expiration is again a powerful tool.

Temporary credentials expire. Temporary branches are deleted. Temporary infrastructure can carry automatic destruction dates. Temporary code can be marked with an owner and review date. Scheduled jobs can fail loudly if their ownership metadata expires.

Organizations rarely do this consistently because keeping something is easier than deleting it. AI makes the imbalance more costly.

A coding agent can also be instructed to search for dead code, stale feature flags, unused dependencies and abandoned scripts. The same capability that plants can prune.

This may become one of the highest-value uses of automated software agents.

Maintenance work is often neglected because it competes poorly with new features. An agent can continuously propose safe deletions, update dependencies, refresh tests, modernize interfaces and document obscure areas. If checks are strong, machines can spend their cheap effort reducing the residue left by earlier machines and humans.

The danger is automated churn.

A bot that constantly updates dependencies can create a stream of pull requests whose review cost exceeds the benefit. A modernization agent can rewrite code for style without improving behavior. A documentation agent can produce vast explanations nobody reads.

Pruning needs a value function too.

The best maintenance agent reduces future work. It should lower complexity, eliminate vulnerabilities, improve test coverage where it matters, remove unsupported dependencies and make ownership clearer. Activity is not the goal.

This is another reason to measure repository health in outcomes rather than machine output.

How many critical dependencies are unsupported? How long do security patches take? How often do changes break production? How much code has no owner? How many temporary flags remain after their intended life? How quickly can a new engineer understand a subsystem? How reproducible are builds?

An agent that improves those measures is useful even if it writes little new code.

Generated code also creates licensing and intellectual-property questions.

A model may produce code similar to material in its training data. Providers, courts and organizations continue to navigate how copyright and licensing apply. From a maintainer's perspective, uncertainty itself is residue. A company may need policies about which tools are permitted, how suggestions are reviewed and what provenance evidence is kept.

Software bills of materials and source provenance can help with dependencies the system explicitly includes. They are less able to answer abstract questions about influences inside a model.

This is another reason to prefer agents that use known repository context and documented dependencies over systems that silently import mysterious snippets from the open web.

The cleaner the inputs, the cleaner the provenance trail.

Security creates a more immediate issue.

Generated code is not inherently insecure. Human code is not inherently secure. Both make mistakes. The risk comes from scale and confidence. A model can produce syntactically polished code that a hurried reviewer assumes is correct. It may use outdated APIs, mishandle authorization, construct unsafe queries or include secrets from context.

Automated validation should therefore be treated as part of generation, not an optional step after it.

A coding agent that cannot run tests and security checks is like a machine shop without gauges. It can create shapes. It cannot reliably establish that they fit.

NIST's secure-development guidance is useful here because it places AI development inside familiar software practices rather than treating generated code as a magical exception. Secure environments, version control, review, provenance, vulnerability handling and protected build processes still matter.

The arrival of AI should make basic software engineering more important, not less.

There is a social effect on open-source projects.

Maintainers already face issues, pull requests, security reports and dependency updates with limited time. Cheap coding agents can increase contributions from people who could not previously implement an idea. This can broaden participation and help projects.

They can also produce floods of superficially plausible contributions whose authors do not understand the project and cannot support the change.

The cost lands on maintainers.

A project may respond by tightening contribution requirements, requiring tests, limiting automated submissions or demanding disclosure of agent use. This is another case where cheap production causes the recipient to add friction.

The software commons develops an immune system.

That immune system should target low-quality behavior rather than machine identity alone. A carefully tested agent-assisted contribution from a responsible maintainer can be better than a careless human patch. Rules should focus on accountability: who stands behind the change, who will respond to review and whether the contribution meets project standards.

Authorship matters less than stewardship.

This may be the central software lesson of the machine wake.

Code is easy to create and expensive to own.

Ownership means someone will patch it when a vulnerability appears, update it when a dependency breaks, explain it when an auditor asks, delete it when its purpose ends and answer the pager when it fails at two in the morning.

An agent can perform many of those tasks. But the organization still needs to decide that they must be performed.

Responsibility cannot be generated merely by generating another agent.

The dead software garden grows when creation is decentralized and responsibility is diffuse. A team asks an agent for a tool. The tool works. Nobody registers it as a production dependency. Another team begins using it. The original requester leaves. Months later, a cloud credential expires and an important process stops.

The failure reveals that the software had become infrastructure without acquiring an owner.

This is preventable.

Generated software should enter through a lifecycle. Classify it: experiment, temporary utility, maintained internal service, customer product, safety-critical component. The class determines review, ownership, security, documentation and retirement expectations.

Most code does not need maximum process. A one-time script can remain lightweight if it truly disappears after use. A service used by thousands of customers should not inherit the same informality.

The bureaucracy should follow durability.

This returns us to the book's recurring question: how long will the residue last?

A model answer may vanish after reading. A generated code file can quietly run for a decade.

The longer the life, the more important provenance, tests, documentation and ownership become.

Software is a strange material because keeping it costs almost nothing until suddenly it costs a lot. Storage is cheap. Maintenance arrives unpredictably. A dormant script can become a security incident years after anyone last thought about it.

Physical scrap announces itself by taking up space.

Software scrap hides inside the system that still works.

The mature AI organization will therefore need deletion as a competency. Not just deleting data, but deleting code, services, agents, integrations, accounts and dependencies whose work is finished.

A successful coding agent should sometimes close the issue with a patch.

Sometimes it should close the issue with fewer files than it found.

The garden will be healthier when machines learn to leave empty ground.
