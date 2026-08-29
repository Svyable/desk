# Standards Before Steel

A standard is a decision that hides inside other people's decisions.

Choose the width of a rail gauge, the shape of a plug, the syntax of a file, the voltage on a line, the numbering scheme in a protocol, or the side of the road on which traffic moves, and thousands of later choices begin arranging themselves around the first one. Factories produce compatible parts. Training follows. Tooling follows. Regulation follows. Customers buy equipment that assumes the standard will persist. Eventually the original choice can become difficult to see because the world built on top of it looks natural.

This is path dependence with a practical face.

A standard can win because it is technically superior. It can also win because it arrived at the right time, recruited the right complementors, became mandatory, happened to be installed in a large market, or simply avoided being incompatible with what already existed. Once adoption grows, technical merit and installed base become entangled. The question is no longer, "Which design is best?" It becomes, "Which design is best given that millions of things already expect this one?"

The option to choose disappears gradually.

That gradual disappearance makes standards a useful study in commitment. A company designing an internal data format may feel it is making a small technical choice. The first ten users can migrate later. At one thousand users, migration becomes a project. At one million records and twenty dependent systems, the format becomes infrastructure. The initial decision was reversible; the ecosystem made it less so.

The cost was not paid at the moment of choice. It accrued through adoption.

This is different from pouring concrete but just as binding.

Standards also reveal why waiting can be strategic. A firm deciding whether to support a new interface may hesitate because early standards are unstable. Implement too early and engineers chase revisions. Commit to the wrong camp and the market may strand the investment. Wait too long and competitors may capture developers, suppliers, or customers whose habits later become difficult to dislodge.

The choice has the shape of an option with network effects attached.

Network effects complicate the simple case because the value of the underlying asset is partly created by other people's exercise decisions. A telephone network with one user is useless. A payment standard becomes more valuable as merchants and customers both adopt it. A software platform attracts developers because users exist and users because developers exist. The option to join later may become more attractive as adoption grows—but only until the costs of joining late, such as lost position or accumulated incompatibility, overtake the benefit of waiting.

In these systems, everyone watches everyone else.

That can produce long periods of hesitation followed by rapid convergence. Early actors do not know whether a standard will gather support. Each new commitment becomes evidence for others. A large manufacturer announces compatibility. A government specifies the standard in procurement. A major developer ships an implementation. The future begins to coordinate around visible commitments.

Commitment here is informational.

The announcement may matter even before the product exists because it changes beliefs about what others will do. This is why standards battles are full of press releases, alliances, road maps, reference designs, and demonstrations. Participants are not only building technology. They are manufacturing expectations.

Expectations can become self-fulfilling within limits.

If enough firms believe a format will dominate, they may invest in supporting it, increasing the probability that it dominates. But belief cannot rescue every design. Physical constraints, cost, regulation, security problems, and customer frustration can still break the loop. The distinction matters because business history is full of stories told backward, as if winners were destined to win once an early network effect appeared.

Destiny is usually an after-market product.

The useful question is how managers should behave before convergence.

One answer is multihoming: support more than one standard for a time. Payment terminals accept multiple cards. Software exports several file types. Devices include adapters. Firms join rival consortia. This preserves optionality but imposes cost. Engineers maintain duplicate code. Manufacturers carry extra components. User interfaces grow cluttered. Strategic clarity suffers.

Compatibility is a tax paid to avoid premature exclusion.

Sometimes the tax is worth it. Sometimes a focused commitment creates a better product because the team can optimize around one architecture. The problem returns in a new costume: flexibility versus capability.

The same tradeoff appears inside firms. Modular architecture is often praised because modules can be changed independently. That is true only if interfaces remain genuinely stable and responsibilities remain separable. Excessive modularity can freeze poor boundaries. Every interface is itself a commitment about what should remain independent from what. A company can preserve the option to replace a component while losing the option to redesign the system as a whole.

Flexibility has topology.

You can be flexible locally and rigid globally.

Consider a company that divides a product into services with carefully specified interfaces. Teams can deploy independently. That is valuable. But if the interfaces encode an early misunderstanding of the customer problem, dozens of teams may build around the wrong decomposition. The architecture then makes local change easy and conceptual change hard.

This is why standards should be delayed when uncertainty concerns the boundary itself.

A stable interface is helpful only after you know what deserves to be stable.

Engineers sometimes call this avoiding premature abstraction. Business strategists have an equivalent problem when they formalize categories too early. A young market may be described using segments borrowed from an older market. Once budgets, sales territories, product lines, and reporting metrics follow those categories, the company becomes efficient at serving a map that may have been provisional.

An organizational standard can lock in a theory of the world.

The more useful standardization becomes, the more dangerous the original assumptions become.

This is not an argument against standards. Civilization is a standards machine. Shared measures, time zones, shipping containers, accounting conventions, screws, paper sizes, character encodings, safety rules, and network protocols allow strangers to coordinate at scales that bespoke arrangements could never support. Standardization converts repeated negotiation into infrastructure.

Every standard removes decisions from the future.

That is its gift.

If every appliance required a unique negotiation with the electrical grid, domestic life would be absurd. If every cargo box required custom cranes, global shipping would slow to a crawl. If every software program invented its own character encoding without translation, text would fracture across systems. The value comes from closing options deliberately.

This gives us a more generous view of lock-in. Lock-in is not always a pathology. Sometimes it is the accumulated benefit of not reopening solved questions.

A mature organization should not debate payroll arithmetic every Monday. A country should not reconsider which side of the road to drive on each election cycle. A hospital should not improvise the meaning of dosage units at the bedside. Some decisions become valuable precisely because their permanence lets attention move elsewhere.

The hard part is knowing which decisions deserve that privilege.

The answer depends partly on the cost of being wrong and partly on the rate at which the environment changes.

A standard for a fire-hose coupling values reliability and interoperability under stress; stability matters enormously. A social-media content format may evolve quickly because the surrounding technology and behavior evolve quickly. A scientific data standard may need a stable core plus extensible fields because future instruments will generate measurements not yet imagined.

Good standards often separate what must be fixed from what should remain open.

This is one of the deepest design patterns in the book.

Do not preserve every option. Preserve the options around the uncertain parts.

Fix what coordination requires. Leave expansion points where knowledge is likely to change.

The pattern appears in constitutions, APIs, contracts, cities, and careers. Some commitments create the stable surface on which experimentation becomes cheaper elsewhere. A musician commits to a key and tempo so improvisation can happen inside them. A company fixes an accounting calendar so managers can debate business questions instead of date definitions. A scientific community fixes units so researchers can disagree about theories.

Constraint can manufacture optionality.

This sounds contradictory until we distinguish levels. A stable base can make higher-level experimentation easier. The Internet's layered architecture, for example, became powerful in part because different kinds of innovation could occur without renegotiating every layer simultaneously. The exact history is more complicated than any single architectural slogan, but the general design principle holds: stable interfaces can reduce the number of things that must change together.

Reducing coupled change is a way of buying reversibility.

The opposite is a tightly integrated decision in which altering one component requires altering everything around it. Integration can produce speed, performance, or simplicity. It can also make future migration brutal.

Organizations rarely know in advance which cost will dominate.

This is where staged commitment helps. Internal standard first. Limited ecosystem. Versioning. Translation layers. Sunset dates. Compatibility periods. Reference implementations. Each mechanism turns a single irreversible choice into a sequence of smaller choices.

But staged commitment has political costs. Supporting an old and new standard simultaneously can postpone migration indefinitely. Users rationally remain on the old version because somebody else is paying the compatibility cost. The organization accumulates two systems, then three. Optionality becomes technical debt.

Every exit needs an exit from the exit.

A transition plan that preserves reversibility forever is not a transition plan. Eventually the old interface must be deprecated, the adapter removed, the dual inventory ended, the old process retired. The organization has to close a door on purpose.

This is emotionally harder than technical teams often admit. Old standards have people attached to them. A deprecated system may be somebody's expertise, a customer's workflow, a supplier's tooling, a department's reason for existing. Migration reallocates status along with bits and bolts.

Technical debates are often coalition debates with diagrams.

That does not make the diagrams fake. It means the decision has more than one ledger.

The standards case also exposes distribution. The party that sets the standard may enjoy option value while others absorb adaptation costs. A dominant platform can revise an interface and force complementors to update. A government can change a reporting requirement and move compliance costs onto firms. A large buyer can demand a new packaging standard and make suppliers invest.

The ability to keep one's own architecture flexible may depend on making somebody else's architecture less flexible.

This is why power matters to optionality.

A small supplier facing one dominant customer may not have the option to wait. A large customer can preserve multiple suppliers while demanding each remain ready. A platform can experiment with several features while developers must respond to each change. The most optional actor in the system can export uncertainty.

That insight will recur when we look at labor, finance, and geopolitics.

Flexibility is not a neutral substance. It is often transferred.

The gig platform is flexible because workers absorb demand variation. The just-in-time buyer is flexible because suppliers hold readiness. The cancelable booking is flexible because the hotel manages empty-room risk. The callable loan is flexible for the lender because the borrower bears a refinancing risk.

When a strategy promises flexibility, ask where the rigidity went.

Standards provide the same clue. A universal interface makes users flexible among compatible products, but manufacturers must conform to the interface. That rigidity can be socially productive. The question is whether the allocation is fair, efficient, and robust enough to justify it.

There is no civilization without some people agreeing not to reinvent the plug.

There is also no progress if every old plug becomes sacred.

The art is to build standards with an awareness of their expiration logic. Some should be nearly permanent. Some should version. Some should carry review dates. Some should be designed from the start with migration paths. Some should be abandoned before the installed base becomes a prison.

This is governance through time.

A decision today creates a constituency tomorrow. A constituency tomorrow changes the cost of revision the day after. That means the original decision-maker is not choosing only a technical rule. They are choosing the future politics of changing the rule.

The most dangerous standards are often not the obviously bad ones. Obviously bad standards attract resistance. The dangerous ones are good enough to spread before their hidden assumptions become visible.

By then, the world may have become fluent in them.

Fluency feels like truth.

That is why the moment before standardization deserves more imagination than organizations usually give it. Once steel, software, contracts, training, and habits accumulate, the choice will no longer look like a choice.

It will look like how things are done.