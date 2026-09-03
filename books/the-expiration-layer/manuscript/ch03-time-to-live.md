# Time to Live

The internet works partly because it does not trust memory forever.

That is easy to miss from the edge of the network. A person types a name into a browser, touches a link, or asks an app for a file. The answer appears. Underneath that smooth event are layers of temporary state: names mapped to addresses, routes discovered, addresses leased, sessions opened, credentials presented, records cached. Machines remember because consulting the original source every time would be slow and expensive. They forget because remembering forever would be worse.

The Domain Name System makes the trade unusually visible. DNS is often described as the internet’s phone book, an analogy useful enough to survive its own imprecision. A name such as example.com can be associated with records that help computers locate services and understand how to handle them. Those records may be copied into caches closer to the people asking for them. Caching makes the system faster and reduces repeated load on authoritative servers.

But a cached answer carries a time-to-live.

RFC 1035, one of the foundational specifications for DNS, defines TTL as the interval a resource record may be cached before it should be discarded. A zero value means the record should be used only for the transaction in progress and not cached. A larger value permits reuse for that period.

The number is operationally modest. Conceptually, it is radical.

DNS does not ask every resolver to determine whether a cached answer has become wrong. The resolver often has no independent way to know. Instead, the authoritative source specifies how long the answer may be trusted without asking again.

If the answer remains the same when the TTL expires, the resolver may fetch it again and start another period of confidence. Nothing was necessarily deleted from history. The system simply refused to convert an old observation into indefinite authority.

Anyone who has changed a website’s DNS records has encountered the practical consequences. Lowering a TTL before a migration can make caches revisit the authoritative source sooner, allowing a change to propagate more quickly. A long TTL reduces query traffic and can improve resilience when authoritative infrastructure is briefly unavailable, but it also means stale information may persist longer after a change. There is no universally correct number. The value encodes a tradeoff among freshness, efficiency, resilience, and control.

That tradeoff is exactly what most institutions leave implicit.

A policy document rarely says, in effect, “You may cache this conclusion for twelve months before consulting reality again.” A hiring criterion does not announce how long its assumptions remain current. A risk model may have a validation schedule, but the score it generates often travels downstream without carrying the age of the model or the data that produced it. An executive forecast is copied into budgets and plans even after the conditions that justified it have changed. A legal permission can be stored indefinitely because the system records the yes but not the horizon of the yes.

Networks learned to attach time because distributed memory without time is dangerous.

The lesson appears elsewhere in the network stack.

The Internet Protocol itself has a field called Time to Live. Its history is slightly awkward, which is useful because it shows how design intent survives implementation change. In the original IPv4 specification, TTL represented a limit on how long a datagram could remain in the internet and had to be decreased as the packet moved through gateways. In practice, routers decrement the field as packets pass, so it functions principally as a hop limit. When the value reaches zero, the packet is discarded rather than being permitted to circulate indefinitely.

The mechanism exists because networks can contain loops.

Routing information is not perfect. Topologies change. Devices fail. configurations disagree. Without a limiting mechanism, a packet caught in a loop could continue consuming network capacity indefinitely. The TTL does not solve the routing mistake. It limits how long the mistake is allowed to persist.

That is a different kind of expiration from DNS caching. One bounds stale knowledge. The other bounds runaway motion. Both acknowledge the same impossibility: a distributed system cannot assume that everything has been designed correctly enough to deserve infinity.

The Dynamic Host Configuration Protocol offers another variation. DHCP allows a machine joining a network to obtain configuration such as an IP address. The assignment is not necessarily a permanent transfer. It is a lease. RFC 2131 describes clients obtaining addresses for a finite period and attempting renewal as the lease progresses. A client that remains on the network can often keep the address by renewing. A client that disappears eventually loses its claim, allowing the address to return to the pool.

The lease solves a mundane scarcity problem beautifully. Networks cannot afford to preserve every historical assignment just in case an old device returns. Nor do they need a human administrator to watch every laptop arrive and leave. Time does the cleanup.

A lease is a form of conditional forgetting. The network remembers enough to provide continuity, but continuity is not ownership.

These mechanisms emerged from practical engineering, not philosophy. DNS needed caching without permanent staleness. IP needed a way to prevent loops from consuming resources forever. DHCP needed reusable address allocation. Yet together they amount to a theory of temporal state.

State has a lifetime appropriate to its function.

That sentence is so ordinary in computing that its absence elsewhere becomes striking.

Consider an organizational chart. A person receives authority because she occupies a role. The role changes. The person transfers. The directory updates, but a project-management system, billing portal, shared drive, cloud console, and vendor dashboard may each retain their own copy of the old authority. The enterprise has become a distributed system with inconsistent caches.

Most companies treat this as an identity-governance problem, and it is. But the networking analogy changes the default. Instead of asking how to synchronize every downstream system perfectly, we can ask how long any downstream system should be permitted to cache an authorization without revalidation.

Perfect synchronization is difficult. Bounded staleness is often achievable.

The same reasoning applies to facts.

A hospital receives an address from a patient. A bank obtains an employer. A retailer infers a household composition. A government records a business owner. An AI assistant remembers that a user prefers a certain airline, restaurant, tone, medical provider, shipping address, or meeting time. Some facts are durable. Others are extraordinarily perishable.

A database schema usually stores the value and perhaps the timestamp when it was created or last modified. That is provenance, not necessarily a lifetime. The system knows the answer is old but may have no rule about whether oldness changes its right to act on the answer.

A temporal system would ask two separate questions: when did we learn this, and how long may we rely on it without asking again?

Those are not the same.

A person’s date of birth can be learned once and remain stable. A home address may change repeatedly. A preference for vegetarian food may be durable for one person and temporary for another. A legal authorization to operate a bank account may be valid until revoked, while a one-time permission to upload tax documents should disappear after the task. A forecast of next quarter’s sales may become less useful by the day. A credit-card security code is designed for a narrower purpose than the cardholder’s name.

The right TTL depends on the semantics of the state.

This is where analogies to networking can become too neat. DNS administrators can set TTLs because they control a relatively crisp protocol. Human facts do not arrive with universal expiration intervals. A spouse may remain a spouse for sixty years or six months. A job title can change tomorrow. A disability may be permanent, episodic, or evolving. A political coalition can dissolve overnight. A medical diagnosis can be enduring while its treatment recommendation changes with evidence.

Attaching arbitrary dates to such facts would create false precision.

The lesson is not to force everything into a countdown. It is to make temporal assumptions explicit.

Sometimes the correct lifetime is “until revoked.” Sometimes it is “until the next transaction.” Sometimes it is “review if the underlying condition changes.” Sometimes it is “valid for this session.” Sometimes it is “keep the record forever, but do not let it drive current decisions without revalidation.” Sometimes there should be no expiry at all.

Distributed systems offer a second lesson: expiration changes failure modes.

Suppose a DNS record is configured correctly and then the authoritative server becomes temporarily unreachable. A resolver with a still-valid cached answer may continue serving users. A resolver whose cache has just expired may fail to obtain a fresh answer. Shorter TTLs increase freshness but can increase dependence on the availability of the source. Longer TTLs improve tolerance of some upstream outages while prolonging stale data when the source legitimately changes.

Expiration is therefore not simply safer when shorter.

A five-minute credential can limit an attacker’s use of a stolen token, but a system that cannot reliably reissue credentials every five minutes may create outages. A one-year professional license may force current verification, but a renewal portal that fails can put qualified people out of work. A monthly eligibility check may reduce improper benefits but impose enormous burden on recipients. A rapidly expiring consent may protect autonomy or exhaust it, depending on how renewal is requested.

The reliability of renewal infrastructure determines how aggressively a system can expire state.

The internet’s best expiration mechanisms often became more useful as renewal became more automatic. DHCP would be absurd if a human had to file paperwork every time a laptop renewed an address lease. Short-lived web certificates become practical when software can prove domain control and renew them without a person manually buying and installing a replacement. Cloud identity systems can issue short-lived credentials because applications can obtain them programmatically from trusted identity infrastructure.

This is not merely a convenience. Automation changes the optimal lifetime.

When renewal is expensive, systems compensate with long validity periods. A credential good for three years may be less secure than one good for three hours, but if issuing the credential involves weeks of paperwork, three hours is impossible. Once renewal becomes cheap, designers can shorten the lifetime and reduce the amount of authority carried by any single issuance.

That relationship suggests a route for institutions that currently cling to permanence because review is costly: improve renewal before shortening the clock.

A benefit program should not require people to repeatedly prove facts the government can already verify reliably. A business license should not demand the same documents every year if the relevant conditions can be checked automatically. A software permission should not send managers quarterly spreadsheets containing thousands of rows if the system can rederive most access from current roles and tasks. A scientific recommendation should not wait five years for a heroic committee if evidence surveillance can continuously identify studies likely to change the conclusion.

The expiration layer is as much about renewal infrastructure as it is about expiration dates.

There is another engineering principle hiding in TTLs: local copies should know that they are copies.

A DNS cache does not become authoritative merely because it has an answer. Its authority is derivative and time-bounded. Human institutions are less disciplined about this. A number leaves a source system, enters a presentation, is copied into a memo, quoted in a strategy document, included in a model, and repeated at a meeting. Along the way, the timestamp and origin fall off. A derivative claim becomes socially authoritative because it is familiar.

The same happens with personal data. A customer updates an address in one system, but a marketing database preserves an old export. An employee’s role changes in the identity directory while a vendor portal retains a copied role mapping. A corrected court record does not automatically repair every data broker’s copy. A medical record is amended, but a derived risk score remains.

We tend to describe these as synchronization failures. In network terms they are also cache-validity failures.

If the downstream copy carried a maximum age, the system would at least know when ignorance had become mandatory. It would not need to know that the fact had changed. It would need to know that it no longer had the right to assume otherwise.

That is a more tractable requirement.

It is also more honest.

One reason stale information survives is that certainty travels better than time. “The customer lives at this address” is a convenient field. “As of June 14, the customer told us this was the address, and we should not use it for a high-consequence decision after ninety days without reconfirmation” is a better description of what the system actually knows. The second sentence is cumbersome for humans and trivial for software.

Machines are unusually good at carrying metadata. We should use that capacity.

An AI system makes the need especially obvious because its outputs often combine information from many temporal layers. A model may contain training knowledge current through one period, retrieve a document last updated another day, read a user profile written months ago, consult a live tool, and reason from a conversation that began an hour earlier. When it produces a single fluent sentence, those vintages collapse into one present-tense voice.

The answer can sound timeless even when its evidence is temporal patchwork.

A better architecture would treat freshness as part of provenance. Not every claim needs a visible expiration badge, but the system deciding whether to act should know whether the facts it relies on are fresh enough for the consequence at hand. Recommending a restaurant can tolerate more staleness than wiring money. Drafting a birthday message can use an old preference more safely than making a medical appointment. The same remembered fact can have different permissible lifetimes for different actions.

Networking again provides the humbling analogy. There is no such thing as “fresh” in the abstract. There is a TTL set for a use.

The internet survived explosive growth not because its designers found permanent answers to change, but because many protocols assume change will happen and bound the consequences of old state. A packet can die. A lease can end. A cache can expire. A connection can time out. A route can be relearned. The system is durable partly because its components are allowed to stop believing.

Human institutions often pursue durability by doing the opposite. We accumulate. We preserve every exception. We fear losing context, so we keep state. We fear disruption, so we let authority continue. We fear redeciding, so we convert old decisions into defaults.

That strategy worked better when execution was slow and human discretion could smooth over stale rules.

It becomes dangerous when software is asked to remember and act at scale.

Time to live is not a command to forget the past. It is a reminder that memory and trust are different operations.

A system can keep the old answer forever for audit and still refuse to treat it as current.

It can remember the lease after the address returns to the pool.

It can preserve the old certificate after the browser stops trusting it.

It can archive the packet trace after the packet itself is discarded.

It can keep history without letting history impersonate the present.

That is what a TTL really buys: not forgetting, but an end to unearned confidence.