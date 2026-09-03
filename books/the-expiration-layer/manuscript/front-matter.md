# The Expiration Layer

*Why the Future Needs an Expiration Date*

Sven Hardy Benson

Draft edition — September 2026

There is a class of problems that looks unrelated until you notice the clock.

A web browser trusts a certificate until a date arrives. A computer borrows an address for a lease period and then has to ask again. A cached answer in the Domain Name System carries a time-to-live telling other machines how long they may keep believing it without consulting the source. An option contract stops existing on a known date. A medicine is labeled with the period during which its manufacturer has evidence that it remains stable under specified conditions. Some laws contain sunset clauses. Some criminal records can eventually be sealed. Some personal data is supposed to be erased once the purpose for keeping it disappears.

These systems do not all expire things for the same reason. Some clocks protect security. Some force review. Some price uncertainty. Some protect people from old information. Some acknowledge chemical decay. Some merely define a bargain. But they share an insight that modern institutions use far less often than they could: a fact that was true, a permission that was justified, a rule that was useful, or a promise that was sensible at one moment does not automatically deserve indefinite authority.

We have built an age of cheap persistence. Storage is cheap. copying is effortless. software remembers. databases accumulate. organizations inherit. subscriptions renew. credentials linger. regulations accrete. machine-learning systems preserve statistical relationships long after the world that produced them has begun to move. Artificial intelligence intensifies the problem because it can act on stale state at a speed no bureaucracy ever managed.

The obvious response is to get better at updating things. That is necessary, but it misses the asymmetry. Updating requires somebody to notice that an old thing is wrong. Expiration reverses the burden. It says: if this thing wants to keep its power, somebody must renew it.

That is the subject of this book.

The argument is not that everything should vanish. A society without durable rights, archives, evidence, contracts, institutions, memory, or inheritance would be arbitrary and cruel. Nor is expiration automatically wise. Renewal requirements can become tollbooths. A person can lose a benefit because a form was missed, a license because a notice went to the wrong address, a legal status because an office was closed, or access to something essential because an automated clock fired without context. Sometimes permanence protects the weak better than review does.

So the useful question is not whether expiration is good. It is where expiration belongs.

The chapters that follow treat expiry as a design primitive. They look at the places where engineers already use it, the places where institutions imitate it imperfectly, the places where permanence has become an unexamined default, and the cases where a clock would make things worse. The aim is to arrive at a practical distinction: which forms of power should persist until revoked, which should persist only while continuously monitored, which should require periodic renewal, and which should disappear automatically unless someone can still justify them.

There is a phrase in networking for how long a piece of state may live before it must be reconsidered: time to live.

Civilization needs more of it.