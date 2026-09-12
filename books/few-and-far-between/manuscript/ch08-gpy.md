# The GPY Door

In 2005, after years of attempts and a withdrawn earlier claim, Daniel Goldston, János Pintz and Cem Yıldırım found a way to prove that prime gaps become arbitrarily small compared with their average spacing.

Formally, if p_n is the nth prime, they proved

liminf (p_{n+1}-p_n)/log p_n = 0.

This is one of those statements whose emotional weight depends on understanding what it does not say.

The average gap near p is about log p. GPY says that infinitely often the next prime arrives in a gap smaller than ε log p for any fixed positive ε. As p grows, ε log p still grows. So the theorem does not give any fixed numerical ceiling on those gaps. It does not say 1,000. It does not say a billion. It says the ratio to the average can be driven arbitrarily close to zero.

Before Zhang, this was the sharp frontier.

The GPY method starts with an admissible k-tuple H={h_1,...,h_k} and looks at translates n+H. Instead of asking directly when two or more of the numbers n+h_i are prime—a brutally discontinuous condition—it assigns a nonnegative weight concentrated on values of n for which the product of the tuple entries has few small prime factors. Then it compares two weighted sums: roughly, the total weight, and the weight multiplied by the number of prime entries in the tuple.

If the average number of prime entries under this special weighting exceeds one, then some n must give at least two primes.

That is the door.

The arithmetic difficulty is controlling the prime-weighted sum. The terms naturally involve primes in arithmetic progressions, and the quality of distribution available determines whether the inequality crosses the threshold.

Under Elliott–Halberstam, GPY could prove bounded gaps. Under the unconditional Bombieri–Vinogradov level, it could not. The numerical inequality landed on the wrong side.

This is an unusually transparent kind of failure. The method had a gauge.

More distribution: bounded gaps.

Known distribution: normalized gaps tending to zero.

That transparency helped create the conditions for Zhang’s attack.

But GPY did more than set up a dependency. It changed the conceptual unit of the problem. Earlier approaches often focused on a specific difference, such as p and p+2. GPY instead worked with larger admissible tuples and tried to prove that at least two positions became prime. This relaxed the demand for a predetermined gap.

That relaxation is central to all modern bounded-gap work.

Imagine a finite set of possible offsets packed into an interval. If you can prove that infinitely many translates contain at least two primes, then some pair of offsets repeatedly captures primes. The precise pair may vary from occurrence to occurrence, but because only finitely many differences are available, at least one difference occurs infinitely often. You have proved a bounded prime-pair gap without choosing the pair in advance.

This move sacrifices identity to gain existence.

It is mathematically powerful and philosophically revealing. The twin prime conjecture asks for a particular correlation. GPY asked whether some correlation inside a designed family must survive. The latter is weaker, but weak enough to be approachable and strong enough to transform the field.

There is an analogy to experimental design. If a specific mechanism is too hard to isolate, broaden the set of detectable outcomes while preserving the property that matters. In GPY the property was two genuine primes at bounded relative distance. Later Zhang would turn relative into absolute.

The story also contains a warning about premature announcements. Goldston and Yıldırım had circulated an earlier claimed proof that the liminf normalized gap was zero, then found a flaw. The eventual correct work with Pintz was stronger in its foundations and became one of the major advances in analytic number theory. The episode is a useful antidote to the idea that error invalidates a research program. What matters is what survives correction.

The published Annals paper, “Primes in tuples I,” makes the conditional landscape explicit. Assuming Elliott–Halberstam, infinitely many primes differ by at most 16. Even a weaker improvement beyond the classical level of distribution would imply some bounded gap. Unconditionally, the ratio result survives.

Sixteen under a conjecture.

No fixed number without it.

Then Zhang arrived with seventy million and no conjecture.

To a casual observer, seventy million is worse than sixteen. To a mathematician tracking assumptions, it is a different species of statement. The larger constant was unconditional.

This distinction between quantitative strength and logical strength is everywhere in frontier mathematics. An elegant conditional theorem can predict the destination. An ugly unconditional theorem can change what is known.

GPY gave both kinds.

It also left a technical inheritance: the Selberg sieve weights, the use of admissible tuples, the optimization of parameters, and the connection between distribution in progressions and small gaps. Zhang’s proof was recognizably built on this architecture even though the distributional estimates required deep new work.

When Maynard entered later, he changed the weights themselves. His multidimensional construction made the ratio of the prime-detecting sum to the total weight more favorable and less dependent on pushing distribution past 1/2. That is another reason to understand GPY: Maynard’s innovation is meaningful partly as an answer to the exact place GPY stalled.

The door GPY opened was not bounded gaps.

It was the realization that bounded gaps had become an engineering problem with identifiable components.

Sieve design.

Tuple geometry.

Distribution in arithmetic progressions.

Optimization.

Once the problem was decomposed that way, several routes became visible.

One of them passed through New Hampshire.
