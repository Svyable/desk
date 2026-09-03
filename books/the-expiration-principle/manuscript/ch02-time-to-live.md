# Time to Live

The internet forgets on purpose.

That is easy to overlook because one of the great practical achievements of computing is memory. Machines remember addresses, names, files, passwords, sessions, routes, preferences, histories, and copies of copies. Storage became cheap enough that forgetting can look like a defect.

Networks learned the opposite lesson early.

Some information is useful because it is remembered. The same information becomes dangerous if it is remembered too long.

The Domain Name System is built around that tension. When you type a domain name into a browser, the name eventually has to be connected to information that helps the network find the relevant service. It would be wasteful for every request from every device to travel all the way back to an authoritative source every time. Resolvers cache answers. If somebody recently asked the same question, the answer can be reused.

Caching is one of those ideas that becomes invisible when it works. The user experiences speed. The network avoids repeated work. The authoritative server is spared a flood of identical questions.

But a cached answer is a copy of the world at a particular moment.

The world can move.

A company migrates a website to a new provider. A service changes addresses. A mail system is reconfigured. A mistake is corrected. A traffic-management system shifts load. An incident requires an emergency change. The answer that was useful five minutes ago can become an obstacle if every resolver insists on remembering it for a week.

DNS records therefore carry a time to live.

The term sounds biological. In practice it is an instruction about memory. The record can be cached for a stated interval. As that interval runs down, the resolver eventually stops treating the old copy as sufficient and asks again.

Time to live is not a prediction that the record will become false at the exact moment the timer reaches zero.

It is a limit on how long a copy may continue to stand in for a fresh answer.

That distinction is the architecture.

Suppose a domain’s address is expected to remain stable for months. A relatively long TTL can reduce repeated queries and make the system more efficient. Suppose the operator is preparing a migration. Lowering the TTL in advance can make the network forget the old address more quickly after the switch.

The phrase “in advance” matters.

If a resolver has already cached the old record with a long TTL, publishing a lower TTL at the authoritative source does not magically reach backward into every existing cache and shorten the promise already made. The old copy may remain until its original lifetime runs out. Operators who want a fast transition have to think about the clock before the change.

This is expiration as transition planning rather than cleanup.

The record does not become unreliable because it aged. The designer decides how long downstream systems are permitted to remain ignorant of a change.

Seen that way, TTL is a compact expression of two costs.

Ask too often and you spend network capacity, processing, latency, and dependence on the source. Ask too rarely and you increase the time stale information can survive.

There is no universal answer because the cost of staleness differs by record and by system. A stable piece of infrastructure can tolerate a different caching policy from a value used for rapid failover. An authoritative service with abundant capacity can tolerate a different query rate from a fragile one. A system that needs to absorb a denial-of-service attack may value cache independence differently from a system making frequent planned changes.

The clock is part of the resilience model.

The same logic appears in a less famous part of everyday networking: the address your device receives when it joins a network.

When a laptop connects to a home router or a phone joins a managed network, it often receives an Internet Protocol address through the Dynamic Host Configuration Protocol. The address is commonly granted as a lease.

That word is wonderfully accurate.

The network does not necessarily tell the device, “This address is yours forever.” It tells the device, in effect, “You may use this address for a period, and there are procedures for renewing the lease.” The device can keep operating while the lease is valid. Before the end, it attempts to renew. If the network still agrees, the relationship continues. If the client disappears, the network does not need a perfect obituary. Eventually the lease ends and the address can return to the pool.

A lease turns absence into information.

That is one of expiration’s most useful tricks.

In a permanent allocation system, silence is ambiguous. Is the holder still using the resource? Did it crash? Move? Lose connectivity? Get replaced? Forget to send a revocation message? The allocator may have to actively discover the truth before reclaiming anything.

In a leasing system, the holder periodically proves continued presence by renewing. Silence eventually has a consequence.

This does not mean the network instantly assumes a missing renewal proves the device is gone. Real protocols have timing, retries, states, and recovery behavior because networks themselves are unreliable. A packet can be lost. A server can be temporarily unreachable. A client can wake from sleep. The design has to distinguish a failed renewal attempt from genuine abandonment.

Expiration without tolerance would make the network brittle.

Still, the lease solves a profound bookkeeping problem. It lets finite resources circulate without requiring every participant to perform a perfect cleanup action when it leaves.

Human institutions struggle with the same problem.

Think about a locker in a train station, a berth in a marina, a table at a restaurant, a permit to use a public resource, a domain registration, a spectrum license, or a rented apartment. A permanent grant must eventually be undone through sale, surrender, forfeiture, revocation, inheritance, eviction, or some other event. A lease contains a simpler mechanism: time will return the resource unless the right to keep it is renewed.

That structure becomes more valuable as the number of participants grows and the reliability of departure messages falls.

Software systems are full of participants that vanish badly.

A process can crash before releasing a lock. A server can disappear while still listed as healthy. A worker can stop halfway through a task. A network partition can make two parts of a system disagree about who is alive. If exclusive control were granted forever until the holder voluntarily gave it back, a crash could freeze the resource indefinitely.

Distributed systems therefore use leases in a more demanding way. A machine may be allowed to act as the holder of a resource, leader of a group, or owner of a piece of work for a bounded period. To keep the right, it renews. If it cannot renew, the system eventually allows somebody else to take over.

The expiration date becomes a method for recovering from failure.

It also introduces a frightening question: whose clock?

Computers do not experience time as perfectly shared. Clocks drift. Messages take time. Networks partition. A machine may believe its lease remains valid while another part of the system believes enough time has passed to reassign the resource. In financial systems, storage systems, schedulers, and coordination services, that disagreement can be more dangerous than the crash the lease was meant to solve.

Engineers respond with careful protocol design rather than faith in the timer. They add margins. They distinguish local elapsed time from wall-clock time where appropriate. They use fencing mechanisms so that an old holder cannot continue damaging the resource after a new holder has legitimately taken over. They make the expiration part of a larger agreement about authority.

This is a useful warning for the rest of the book.

An expiry date is not governance by itself.

It is one signal inside a transition.

DNS offers another version of the lesson through negative caching. A resolver may learn not only that a record exists, but that a requested name or record does not currently exist. That negative answer can also be cached. Without some limit, a temporary absence could become a long-lived falsehood. A record added moments later might remain invisible to resolvers still remembering yesterday’s “no.”

Even nothing can become stale.

That sounds philosophical until you have spent an afternoon waiting for a newly created DNS record to become visible.

The network is not stubborn. It is honoring the memory policy it was given.

Caching shows why expiration is neither simple deletion nor simple skepticism. The resolver does not distrust every answer immediately. That would defeat the purpose of caching. It trusts for a period. Then it stops letting the old copy answer the question alone.

The deeper pattern is provisional confidence.

Modern systems need enormous amounts of it.

A service-discovery system needs to believe that a machine is healthy without conducting a philosophical investigation before every request. A browser needs to believe a credential for some interval. An authentication server needs to let a token stand in for a recent login. A routing system needs to propagate current paths. A cache needs to reuse a result. A lock manager needs to decide who is allowed to write.

If every claim required fresh proof at every instant, systems would spend most of their effort proving that they were still themselves.

If no claim ever required fresh proof, stale state would accumulate until the system described a world that no longer existed.

Time to live occupies the middle.

It says: this answer is fresh enough for now.

There is an important humility in that phrase.

The answer is not declared eternally true. The system admits the possibility that reality can outrun memory.

Humans are less comfortable making that admission explicit. Institutions often write records as though they describe enduring states: approved, licensed, eligible, authorized, classified, safe, qualified, restricted. The label is clean. The underlying condition can move.

A company that grants an employee access to a sensitive database is making a claim about role, employment, business need, and trust. If the permission remains until somebody actively removes it, the company has chosen a revocation model. That can work if offboarding and role-change processes are excellent. In reality, old permissions often linger because departure and transfer are messier than access-control diagrams suggest.

A lease-like model asks a different question. What if access had to be renewed because the system refused to assume that last year’s business need was still current?

The attractive answer is that stale privilege would decay.

The unattractive answer is that thousands of employees would spend time re-requesting access, managers would click through approval screens, systems would break when somebody missed a deadline, and teams would find ways to grant broader or longer-lasting credentials to escape the hassle.

The clock can improve the security model while degrading human behavior around the model.

This is exactly what happened with routine password expiration in many organizations. A policy borrowed the intuition of TTL without respecting the nature of the object. DNS records do not get annoyed and append “1!” to themselves when asked to change. People do.

The right expiry period depends on the renewal mechanism.

That is why automation matters so much.

A DNS resolver can refresh a record without filling out a form. A DHCP client can renew a lease without calling a help desk. A well-designed service can rotate credentials through software. When renewal is automatic and meaningful, short lifetimes become operationally affordable.

Human renewal is expensive in ways that computer protocols are not.

It consumes attention. It requires memory. It can demand travel, fees, documents, identity verification, signatures, photographs, tests, or waiting. It can arrive during illness, caregiving, unstable housing, a job change, or a broken phone. It can be written in a language the holder does not speak well. It can punish the person who is least able to stop everything else and satisfy the clock.

Network protocols conceal none of this because they are explicit about renewal traffic. Every lease renewal is part of the expected load. Every DNS refresh is part of the architecture. Human bureaucracies are more likely to count the administrative request without counting the time of the person completing it.

That difference will matter later.

For now, the machine case teaches a cleaner principle: a lifetime should be chosen together with the method by which the state becomes fresh again.

A short TTL with an unreachable authoritative server is not resilient. A short lease with an unreliable renewal path is not disciplined. It is fragile. A long TTL on rapidly changing data is not efficient if users spend the interval receiving the wrong answer.

The expiration interval and the renewal path form one design.

So do the expiration interval and the warning period.

DNS changes make this visible. An operator preparing a migration can lower TTLs before moving traffic, wait for old cached values to age out, make the change, then raise TTLs again once the new state is stable. The expiration setting becomes part of the choreography.

The same principle appears in certificate rotation, leases, visas, contracts, drug inventories, and regulations. A planned ending is safer when the system begins preparing while the old state still works.

Midnight should not be the first time anyone notices the clock.

There is a second lesson hidden in TTLs.

Expiration can decentralize cleanup.

The authoritative source does not have to contact every resolver in the world and command it to delete an old DNS answer. It publishes a record with a lifetime. Each cache is responsible for honoring the limit. The cleanup work is distributed to the places holding the copies.

This is enormously useful in systems too large for perfect centralized revocation.

It also assumes the caches behave.

A misconfigured or malicious participant can ignore the TTL. A user can have a stale local cache. An intermediary can violate expectations. Expiration works because the ecosystem shares enough agreement about the meaning of the timer.

Human expiration systems have the same dependence on institutional compliance. A law can say a permit expires, but databases, officers, courts, businesses, and citizens still have to recognize what that means. A patent can lapse, but market participants need to know. A revoked credential can remain accepted by a badly designed service. A record-retention schedule can exist on paper while copies persist in backups, exports, inboxes, and personal drives.

The date is only as real as the systems that enforce it.

That enforcement can be too weak. It can also be too literal.

A computer is excellent at noticing that a timestamp has passed. It is much worse at deciding whether the reason for the timestamp remains sensible in the current circumstances. That is why good expiry systems separate the mechanical boundary from the judgment that established it.

DNS does this elegantly because the claim being timed is narrow. The record says what answer may be cached and for how long. It does not claim that the domain owner will disappear, that the server will fail, or that the old address will become morally illegitimate when the timer ends. It merely says the cache must ask again.

Many human systems would improve if they were equally precise.

The end of a document should not be confused with the end of the person’s status. The end of an exclusivity right should not be confused with the immediate arrival of competition. The end of a product’s labeled quality period should not automatically be confused with danger. The end of an emergency authority should not be confused with the end of the underlying emergency.

Expiration is often best understood as a demand for a fresh query.

Ask again.

Is this still the address?

Is this device still present?

Is this permission still needed?

Is this evidence still sufficient?

Does this authority still have political support?

Does this product still meet the required specification?

Does this person still qualify?

Sometimes the answer will be yes.

That does not make the expiration pointless. If the question was worth asking and the renewal process actually answered it, the system has converted an assumption into current information.

Sometimes the answer is known so reliably in advance that asking again is waste.

That is where the clock becomes bureaucracy.

The internet’s time-to-live machinery cannot tell us where that boundary lies in public policy. It can give us a disciplined way to see the problem.

Remembering has a cost.

Forgetting has a cost.

The useful lifetime sits between them, and it belongs not to the calendar but to the rate at which the world can make yesterday’s answer wrong.
