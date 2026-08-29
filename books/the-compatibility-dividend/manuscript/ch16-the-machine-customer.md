# The Machine Customer

The website assumes a human is looking.

That assumption is already becoming obsolete.

For three decades, digital commerce has spent enormous effort making information legible to people: product photographs, search boxes, menus, persuasive copy, star ratings, checkout pages, recommendation carousels and carefully designed buttons. Behind the presentation layer sits a more structured world of product identifiers, inventory databases, tax rules, payment messages, shipping codes and order states.

Artificial agents invert the hierarchy.

The presentation layer may become optional.

A shopping agent does not need a hero image of a washing machine if it can retrieve dimensions, energy use, delivery date, warranty terms, verified reviews, repairability information and price in structured form. A travel agent does not need to admire the typography of an airline website. It needs schedules, fare conditions, baggage rules, seat availability, loyalty constraints and authority to purchase.

When the customer is software, legibility changes value.

Businesses that spent years optimizing how humans browse may need to optimize how machines inspect, compare and transact.

This is not the death of brands or design. Humans still care about meaning, aesthetics and identity. Agents act on human preferences, and those preferences are not reducible to a specification sheet. But a significant layer of market interaction can move from persuasion through screens toward negotiation through interfaces.

The machine customer is a standards problem before it is a marketing problem.

A human can repair missing structure with judgment.

Suppose a small hotel writes, “Breakfast is included unless you booked the saver rate, except on festival weekends.” A person can read the sentence, ask a question and notice if the answer conflicts with the booking page. An autonomous travel agent needs a representation of rate plan, date exceptions and entitlements precise enough to affect a purchase.

Natural-language models improve the situation dramatically. They can interpret messy pages and extract meaning. This tempts us to imagine that structured standards are becoming unnecessary.

The opposite may happen.

AI lowers the cost of understanding unstructured information, which increases the volume of actions software can attempt. As more decisions become executable, the cost of misunderstanding rises. Agents can improvise while exploring. Markets need precision when a decision becomes a commitment.

The machine customer therefore creates two layers of commerce.

The first is interpretive.

An agent can search broadly, read reviews, inspect documents, infer preferences and negotiate possibilities through flexible language.

The second is transactional.

The parties eventually need exact objects: this product, this price, this quantity, this delivery address, this cancellation policy, this payment authorization, this tax treatment, this warranty, this moment of acceptance.

Standards crystallize the transaction.

Humans already behave this way. Conversation is loose until the invoice arrives. Negotiation is flexible until the contract is signed. The waiter hears “the fish, please,” but the restaurant's point-of-sale system records a specific menu item. The car salesperson can discuss possibilities for an hour; the financing documents become structured obligations.

Agents will compress the distance between those modes.

A conversation can become an API call in milliseconds.

That speed makes the boundary more important.

An agent should be able to explore creatively without accidentally turning every utterance into a binding instruction. A merchant agent should be able to describe a hypothetical discount without creating an enforceable price for anyone who asks. The systems need recognizable states: inquiry, quote, offer, authorization, order, settlement, fulfillment, cancellation.

Commerce has always contained these states.

Machine commerce needs them to be machine-legible.

Electronic data interchange has done this work for decades in business-to-business transactions. Purchase orders, invoices, advance shipping notices and related documents use structured messages so companies can automate recurring trade. The technology is older than generative AI and proves a useful point: machine-to-machine commerce did not begin with language models.

What changes now is who can participate and how flexible the automation can become.

Traditional EDI integrations were often expensive, planned and concentrated among larger organizations. Partners agreed on message profiles and mappings in advance. Agentic systems promise to negotiate and adapt across a much larger set of counterparties.

That creates demand for lighter shared seams.

A small supplier that cannot afford months of integration work may still expose a standard catalog, credential and order interface. An agent can discover the service, interpret the offering and use common transaction primitives. The supplier joins machine-readable commerce without becoming a software platform.

This is analogous to what the barcode did for retail.

The small mark gave ordinary products a shared machine identity.

Agent standards could give ordinary businesses a shared machine surface.

The word surface matters.

A business should not need to expose its internal ERP system to every agent. It should expose the parts of its commercial state that counterparties need: offers, availability, terms, capabilities, identifiers, supported transaction methods and evidence.

The standard should make the company legible without making it naked.

This is the same modularity principle we saw with containers and network protocols.

Hide internals. Stabilize the seam.

Current agent infrastructure is beginning to divide along these lines.

The Model Context Protocol, or MCP, has become one prominent method for connecting model-driven applications to tools, data and services. Its 2026 specification work moved toward a stateless request-response core, formal extensions, routable metadata and stronger authorization integration. The direction is revealing: as the protocol moved from developer novelty into production infrastructure, boring operational concerns—scalability, routing, cache behavior, authorization, deprecation—became central.

That is what happens when a standard begins carrying consequences.

The Agent2Agent protocol, or A2A, tackles a different seam. Its current 1.0 specification describes an open interaction model for independent, potentially opaque agents to discover capabilities, exchange information and manage collaborative tasks without requiring access to each other's internal state, memory or tools.

That wording captures the modular ambition exactly.

Agents should cooperate without becoming one agent.

MCP and A2A are not the final constitution of machine commerce. They are evidence that developers are already discovering distinct seams: model-to-tool and agent-to-agent.

The next seams will be economic.

How does a machine customer discover who is selling?

How does it know the seller is legitimate?

How does the seller know the agent represents a real principal?

How does the buyer's software know the displayed price is a quote rather than a binding offer?

How is stock reserved?

What counts as acceptance?

What payment method is supported?

Which party pays transaction fees?

How is tax calculated?

What evidence exists if the goods never arrive?

How does a return work when the customer that initiated the order is no longer running?

A website answers these questions partly through conventions designed for humans. A button labeled “Place order” communicates a legal and operational state transition because people have learned what checkout means.

Agents need the equivalent without relying on button labels.

This will push commercial standards downward from presentation into semantics.

Today two retailers can describe the same condition differently: “ships in 2–3 business days,” “dispatch within 72 hours,” “usually leaves our warehouse by Wednesday.” A language model can normalize them. But if an agent is choosing inventory for a construction project with contractual penalties, the distinction between estimate and commitment matters.

The machine needs to know which claims are guaranteed.

This is where provenance enters commerce.

A product attribute can be supplied by a manufacturer, inferred by a marketplace, reported by a customer or generated by an AI model. These sources are not equivalent.

Human shoppers often absorb the difference visually. Manufacturer specifications appear in one section, reviews in another, editorial summaries somewhere else. An agent ingesting data from APIs and pages can lose those cues unless provenance travels explicitly.

A machine-readable market needs typed claims.

Who asserted this?

When?

Under what evidence?

Can it be verified?

Does the issuer stand behind it contractually?

Has it been superseded?

These are standards questions because every merchant inventing a private provenance system defeats portability.

Verifiable credential technology offers one building block, though it should not be stretched into a universal solution. W3C's Verifiable Credentials Data Model 2.0, standardized in 2025, defines a way for issuers to make machine-verifiable claims that holders can present to verifiers. The model deliberately separates issuance, holding and verification. It also includes mechanisms around status and extension.

A machine customer could use credentials to establish facts about counterparties: business registration, professional license, sustainability certification, age eligibility, authorized distributor status or other attestations.

The credential does not decide whether the buyer should trust the issuer.

That remains contextual.

This is healthy. Markets contain plural trust systems.

A government may be authoritative for corporate registration. A manufacturer may be authoritative for authorized-dealer status. An independent laboratory may be authoritative for a test result. A customer-review platform may be useful for reputation but not for legal identity.

The standard carries the claim without centralizing all truth.

Machine customers will need this plurality because the alternative is a universal reputation platform with extraordinary power.

Imagine one company issuing a single score that tells every agent which merchants are trustworthy.

The convenience would be enormous.

So would the sovereignty.

An open market should allow different trust providers and different decision policies to coexist while sharing enough credential semantics to be machine-readable.

This is standards as anti-monopoly architecture.

The discovery layer poses a similar problem.

Humans find businesses through search engines, maps, marketplaces, social networks, ads and memory. Agents will use many of the same sources, but structured capability directories may become increasingly valuable.

A directory can say: this entity offers this class of service, in these regions, through these interfaces, under these credential requirements.

A2A's concept of agent capability discovery points in this direction for software services.

Commercial discovery could go farther.

The directory becomes dangerous if inclusion is discretionary.

A central directory of machine-readable merchants can become the new search engine. Whoever controls ranking and admission can direct machine demand.

The web teaches us to distinguish addressability from discovery.

Domain names and URLs let resources be addressed independently. Search engines help users discover them but do not own the addressing system.

Machine commerce should preserve a similar separation where possible.

A business should have portable identifiers and public capability descriptions that multiple directories can index.

Discovery services can compete on ranking and trust.

The identity of the business should not disappear if it leaves one directory.

That is how standards preserve contestability.

Payments present another layer.

Humans currently tolerate an absurd number of payment experiences because screens mediate the differences. A checkout page can show cards, wallets, bank transfer, financing, cash on delivery and region-specific methods. An agent can parse the options, but safe automation needs more than a list.

The agent must know what method it may use, what amount is authorized, which merchant is the intended recipient, whether additional authentication is required, when settlement is final and what dispute mechanism exists.

Payment Request work at W3C and decades of banking and card standards show how much infrastructure sits behind a simple “pay” action.

Machine commerce will not replace those rails overnight.

It will standardize ways for agents to choose and invoke them.

This suggests that the agent economy will be compositional rather than monolithic.

An A2A interaction can discover a merchant agent.

A credential system can establish identity or qualification.

An authorization system can prove the buyer agent's limited authority.

A payment protocol can settle value.

A logistics standard can describe delivery.

An audit envelope can record what happened.

No single protocol needs to become all of these.

This is good architecture and good politics.

The machine customer also changes pricing.

Retail pricing evolved in a world where customers have limited attention. Search costs allow price dispersion. Complex tariffs can reduce comparability. Bundles can hide individual margins. Personalized offers can exploit information asymmetry.

Agents lower search cost.

If software can compare thousands of offers continuously, sellers may respond by making products less comparable, bundling services, changing prices dynamically, restricting access or negotiating privately with agents.

Standards policy could become a battle over comparability.

A common machine-readable price format seems trivial until businesses use pricing complexity strategically.

What is the total price including required fees?

What conditions change it?

Is the price guaranteed for a period?

Does it depend on identity or membership?

Are taxes included?

Is there a cancellation charge?

A human can discover these details late in checkout. An agent can demand them upfront if standards make the questions common.

The machine customer may therefore force markets to reveal structure they previously buried in user experience.

This could increase competition.

It could also produce a new arms race in opacity.

Sellers may create terms that are technically machine-readable and economically difficult to compare. Agents may learn to optimize across them. Regulators may standardize all-in price disclosures. The game moves from visual dark patterns toward semantic ones.

Every interface creates a new place to manipulate interpretation.

This is why agents do not remove the need for consumer protection.

They shift its implementation layer.

A human consumer protection rule might say a cancellation fee must be displayed prominently.

For agent commerce, “prominently” has little meaning.

The machine version may require the fee to be supplied in a mandatory field before authorization, with a standardized category and amount.

The right becomes data.

This is another example of law becoming executable through standards.

The machine customer also raises responsibility questions.

If an agent purchases the wrong product after correctly interpreting the merchant's structured data, the buyer's agent may be at fault. If the merchant published incorrect data, the seller may be at fault. If a standards ambiguity caused both systems to interpret a field differently, the ecosystem has a standards defect. If the buyer's principal gave vague instructions, responsibility may be shared.

Human commerce already contains these disputes.

Autonomy makes the evidence trail more important.

A useful transaction record should preserve what the agent saw, which credentials it relied on, what authority it possessed, which version of the interface was used, what offer was accepted and what side effects occurred.

Audit is not merely for compliance.

It is the memory required for machine accountability.

This creates a market for standardized receipts richer than today's payment receipt.

The receipt could contain the commercial commitment: participants, identifiers, terms, authorization reference, settlement reference, applicable policies and provenance of material claims.

Such a record would allow another agent—or a human dispute resolver—to reconstruct what happened without replaying every model thought.

That distinction matters.

We do not need to preserve all internal reasoning to preserve accountability.

We need the external facts that changed the world.

This is good privacy and good systems design.

The machine customer makes a general point visible: intelligence can reduce the need to standardize how people describe opportunities, while increasing the need to standardize how systems commit to consequences.

Marketing can remain messy.

Commitments cannot.

The merchant may use poetry to sell a hotel room.

The agent still needs to know whether breakfast is included.
