# When Standards Freeze

The standard that saves an industry from fragmentation can later become the thing the industry cannot escape.

This is not a contradiction. It is the same mechanism at two different moments.

Compatibility attracts investment. Investment makes compatibility more valuable. The installed base grows. Complementary tools, skills, suppliers and habits accumulate. Eventually a change that would have been cheap at the beginning becomes expensive because the standard has succeeded.

Standards create paths.

The difficult question is when the path has become a rut.

Economists have argued about this problem for decades, often through the typewriter keyboard. In 1985, Paul David used the persistence of QWERTY as an example of path dependence, emphasizing how early events, learning and compatibility can lock a system into a convention. Stan Liebowitz and Stephen Margolis later challenged important parts of the standard QWERTY story, questioning both the empirical claims about alternatives and the inference that markets had become trapped in a demonstrably inferior equilibrium.

The debate is more valuable than the slogan that survived it.

“QWERTY proves bad standards win forever” is too simple.

The actual lesson is methodological: once network effects, training, complementary assets and switching costs exist, comparing two designs as if they were being adopted from scratch tells us very little about whether switching is worthwhile.

A standard can be technically worse on one dimension and economically better overall because millions of people and machines already know it.

That is not irrationality.

It is the cost of coordination entering the calculation.

Suppose a new keyboard layout lets a trained typist perform somewhat better under controlled conditions. Migration would still require retraining users, relabeling hardware, updating teaching, supporting mixed workplaces and absorbing a period of reduced productivity. The technical performance gap must exceed those transition costs before replacement creates net value.

The larger the ecosystem, the higher that hurdle can become.

Now replace keyboards with electrical systems, railway signaling, medical codes, network protocols or financial messages. The same logic becomes infrastructure policy.

A mature standard should be judged against its replacement path, not against a clean sheet.

This is why reform proposals often sound stronger in diagrams than in deployment.

The new system gets the benefit of architecture without the burden of history. The incumbent appears messy because every compromise, extension and backward-compatible oddity is visible. The proposal appears elegant because none of its future compromises have happened yet.

Elegance is cheap before adoption.

The incumbent has another advantage: unknown failure modes have already been discovered.

A mature standard may contain awkward clauses because somebody once lost data, crashed equipment, misrouted traffic or created a security hole. A replacement design can remove the awkwardness and unknowingly remove the scar tissue.

Standards age like cities.

A new district has straight roads and clean utilities. An old city has alleys, easements, tunnels, strange property lines and pipes that make no sense until you learn what stood there before. Demolishing the old city may produce a cleaner map and destroy a great deal of working social capital.

This is not an argument for preservation at any cost.

Some standards become dangerous.

Cryptographic algorithms are the cleanest case. A cipher or signature scheme can be entirely compatible and no longer secure. The installed base increases the urgency of migration rather than weakening it because every dependent system becomes part of the exposure.

Security standards therefore force institutions to confront a truth other standards can postpone: compatibility has an expiration risk.

NIST's post-quantum cryptography program is a large-scale example of planned migration before a known class of threat fully matures. The agency selected new algorithms and published standards in 2024 while organizations around the world began the much slower work of discovering where vulnerable public-key cryptography exists in products, protocols and long-lived data.

The algorithm is the easy part.

Migration is inventory, procurement, software updates, hardware capability, certificates, protocols, vendors, testing, training and years of coexistence.

A cryptographic standard can change in a document far faster than an economy can change in practice.

The same is true of almost every deep standard.

A governing body can declare version 2 ready. The world contains version 1 in equipment nobody remembered to count.

This gap creates what we might call compatibility debt.

Compatibility debt accumulates when short-term preservation of old interfaces makes future change progressively harder. Each new feature is added around legacy assumptions because breaking them would harm current users. The system remains usable, but the cost of eventually leaving the old foundation rises.

Software provides abundant examples.

File formats carry obsolete fields because documents must continue opening. operating systems preserve application behavior that newer designs would never choose. network protocols keep extensions because middleboxes and old peers expect them. enterprise databases retain schemas tied to business processes whose authors retired years ago.

The debt is often worth carrying.

Backward compatibility is a service to users. It protects investments from arbitrary destruction. A company should not force every customer to rewrite working software merely because its engineers discovered a cleaner abstraction.

The mistake is treating backward compatibility as free.

Every promise to preserve behavior constrains future design.

A mature standards institution should know which promises it is making consciously.

This requires separating identity from implementation.

Some things must remain stable because changing them would alter the meaning of stored history. Unicode code point assignments are an example. Reassigning characters would reinterpret existing text. Stability there is close to the product itself.

Other things can evolve behind a stable exterior. The metre changed its scientific realization without changing ordinary practical length. Web servers changed implementation while preserving HTTP semantics. Banks can replace internal systems while maintaining external account and payment interfaces.

The best migration preserves what users rely on while replacing what they do not need to see.

That is abstraction doing institutional work.

Standards freeze most dangerously when they expose too much implementation detail as public contract.

If every internal behavior becomes observable and depended upon, later change becomes breaking change.

This is why good interface design includes deliberate opacity. A caller should know what a service promises, not every step it takes to keep the promise.

Artificial intelligence makes this principle unusually important.

Agents are probabilistic systems. Their internal reasoning, model architecture, memory, tool selection and planning methods will change quickly. If early interoperability standards expose those internals as required semantics, the ecosystem may ossify around today's agent designs.

Imagine a standard requiring every agent to publish a fixed chain-of-thought representation so other agents can coordinate with it. Even apart from privacy and safety problems, the requirement would tie interoperability to one conception of reasoning. New model architectures might not produce such a trace in the same way.

A better standard would define externally meaningful evidence: actions taken, tools called, claims made, authorizations used, outcomes produced and perhaps confidence or provenance where useful.

Standardize what counterparties need to rely on.

Leave internal cognition free to change.

This is the standards version of information hiding.

The risk of freezing applies to business models too.

An industry standard can encode the organizational structure that existed when it was written. Roles are named. workflows are sequenced. responsibilities are assigned. New entrants must conform to those roles even if technology makes them unnecessary.

Financial messaging provides examples because banking standards often reflect distinctions among institutions, accounts, settlement systems and intermediaries established over long periods. Those distinctions carry legal and risk-management value. They can also make radical redesign difficult.

Healthcare standards face the same tension. Clinical systems need stable meanings and patient safety. Yet every field can reflect a model of care, reimbursement or institutional workflow that may change.

The danger is standards that mistake the current market structure for the natural structure of the problem.

A lasting standard should encode invariants where possible.

What must remain true even if the surrounding industry reorganizes?

A payment still has a payer, payee, amount and settlement consequence even if intermediaries change. A credential still has some issuer and claim even if identity providers change. A shipment still has origin, destination and handling requirements even if carriers consolidate. An agent action still has a principal, scope and consequence even if models change.

These invariants make better seams than today's product categories.

Finding them is difficult precisely because standards committees consist of people living inside the present.

The future is represented by an empty chair.

This is why extensibility matters.

A standard can reserve namespaces, define optional fields, support profiles, allow capability negotiation and specify how unknown extensions are handled. These mechanisms create room for future participants who are not yet in the committee.

Extensibility is not automatically good.

Poorly governed extension points can fragment the standard into vendor dialects. If every company adds incompatible private fields, the nominal common format becomes a wrapper around proprietary behavior. Implementers begin asking which “version” of the standard a counterparty really means.

Extension without convergence can recreate the original problem one layer up.

The solution is governed extensibility.

Experiment privately if necessary. Publish successful extensions. Register shared semantics. Promote widely adopted patterns into common profiles when experience justifies it. Retire experiments that fail.

Standards need a pathway from invention to convention.

They also need a pathway from convention to retirement.

Retirement is the neglected half of standards governance because nobody builds a career celebrating a format that disappeared safely.

A retirement plan needs several ingredients: a replacement with demonstrated value, tools for migration, a period of dual operation, measurable adoption thresholds, communication, incentives and a deadline credible enough that laggards eventually move.

Without the deadline, optional migration often becomes permanent coexistence.

Without coexistence, the transition may be too disruptive to begin.

The art is sequencing pressure.

Browsers and web standards have developed variations of this process for insecure features. Cryptographic libraries deprecate algorithms. cloud providers announce API end-of-life dates. operating systems withdraw support over years.

Every retirement transfers cost to someone.

The vendor saves maintenance. The user pays migration. The broader ecosystem may gain security or simplification. Fair governance makes those costs visible instead of hiding them behind “technical necessity.”

This is where competition enters.

An incumbent can use standards migration strategically. A platform may deprecate an interface that competitors depend on. A vendor may introduce a new “standard” that works best with its products. An old format may be abandoned in a way that forces customers toward a subscription service.

Not every compatibility break is technical progress.

The governing question is who can credibly challenge the rationale.

Open processes help. Independent implementations help. Regulatory oversight may help when the platform has gatekeeper power. Contractual commitments help in enterprise markets. Archival requirements help when public records are at stake.

Standards are promises, and promises need enforcement mechanisms proportional to their consequences.

The opposite strategic behavior also exists: an incumbent can weaponize compatibility to slow entrants.

A new competitor may build a cleaner product but be required to support decades of legacy formats, interfaces and edge cases before customers can switch. The incumbent already paid those costs over time. The entrant pays them on day one.

Backward compatibility becomes an entry barrier.

Open-source libraries and shared translation infrastructure can reduce this barrier by pooling the cost of legacy support. Government can sometimes require incumbent platforms to provide interoperability rather than making entrants reverse-engineer it. Standardized export formats can let new products import history without reimplementing the old system entirely.

Migration tooling is therefore competition infrastructure.

A standard is healthier when users can leave it or move among implementations without losing accumulated value.

This sounds strange: why should a standard help users leave the standard?

It should not necessarily help them abandon the shared interface. It should help them avoid dependence on one implementation.

The whole promise of an open standard is that the seam belongs to the ecosystem.

If users cannot switch suppliers despite nominal standardization, the standard has failed one of its economic purposes.

This brings us to standards wars.

Markets sometimes face competing ecosystems before convergence. Consumers choose hardware based partly on which content or complements will exist. Producers decide which format to support based partly on which consumers will buy it. Each side watches the other. Expectations become self-fulfilling.

The temptation is to declare every standards war wasteful and demand early coordination.

That would remove experimentation.

Competing standards can reveal information. One design may prove easier to manufacture, safer, cheaper or more attractive to users. A premature committee compromise can produce a mediocre system that no one had a chance to challenge in practice.

Competition among standards is useful while the uncertainty about architecture is larger than the cost of fragmentation.

Convergence becomes useful when the cost of fragmentation becomes larger than the expected learning from continued competition.

That is not a formula anybody can calculate precisely.

It is a way to see the trade.

Artificial intelligence is currently in the awkward middle.

Tool protocols, agent communication systems, model APIs, identity schemes and automation frameworks are proliferating. Some convergence is already occurring because developers hate writing custom integrations. At the same time, the field is changing fast enough that declaring a comprehensive permanent standard would be reckless.

The right move is to freeze the mature seams and keep the uncertain layers warm.

MCP's recent evolution offers a live example. Its July 2026 specification moved toward a stateless core, formalized extensions, hardened authorization and established a deprecation policy after production experience exposed limitations in earlier designs. Some experimental features moved out of the core rather than becoming permanent obligations.

That is what learning looks like in a young standard.

A standard should be allowed to admit that yesterday's core was too broad.

A2A has evolved through versions as implementations and use cases mature. Verifiable Credentials has moved through major revisions while preserving a stable conceptual model of issuers, holders, verifiers and claims. OAuth security guidance has been revised as deployment experience exposed unsafe patterns that were once permitted.

Living standards are not evidence of indecision.

They are evidence that reality participated.

The institutional challenge is to revise without destroying confidence.

Users need to know that a specification can improve and that their investment will not be casually invalidated.

This requires predictable deprecation, clear versioning, migration support and a culture that distinguishes mistakes worth correcting from tastes worth leaving alone.

The deeper danger is not that standards freeze.

Some freezing is exactly what users purchase when they adopt a standard.

The danger is freezing the wrong layer.

Freeze the spelling of an identifier so records remain addressable.

Do not freeze the business that owns the record.

Freeze the semantics of authorization so counterparties can rely on scope.

Do not freeze the user interface through which authorization is granted.

Freeze enough network behavior that packets can travel.

Do not freeze the applications packets can carry.

Freeze the seam.

Keep the world around it alive.
