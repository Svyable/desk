# The Other Direction

Small gaps attract romance because they suggest hidden companionship.

Large gaps are colder.

They ask how empty the integers can become.

Euclid already gives enough raw material to construct arbitrarily long stretches without primes. For any n, consider

(n+1)!+2, (n+1)!+3, ..., (n+1)!+(n+1).

Each term is composite because (n+1)!+k is divisible by k. So there are prime-free runs of any prescribed finite length.

This elementary construction proves that prime gaps are unbounded.

It says almost nothing about how large the largest gaps are near a given scale.

The factorial numbers are absurdly huge relative to the gap they create. If one wants to understand maximal gaps below x, efficiency matters. How long a desert can arithmetic force before reaching x?

This is where the subject becomes a mirror image of small-gap sieving.

For small gaps, we choose candidate positions and try to keep several of them free from small prime divisors.

For large gaps, we try to cover every position in an interval with at least one small prime divisor.

A covering system of congruences becomes a machine for manufacturing composite runs.

The classical lineage passes through Jacobsthal, Westzynthius, Erdős and Rankin. The results progressively showed that the maximal prime gap grows faster than the average spacing log x by increasingly large factors.

Westzynthius proved in 1931 that

limsup g_n/log p_n = infinity.

This is the large-gap counterpart to later small normalized-gap results. Prime gaps are not merely fluctuating by a fixed multiple around their average. Some become arbitrarily many times larger than log p.

The average is being attacked from both sides.

Decades later, Rankin developed a construction yielding a famous lower bound involving several iterated logarithms. Modern work by Ford, Green, Konyagin, Maynard and Tao dramatically strengthened this line, and Maynard independently obtained a related breakthrough. Their 2016 Annals papers showed that large gaps can exceed the old Rankin scale by factors that tend to infinity, resolving a question of Erdős.

The formulas are ugly.

The phenomenon is clean.

Arithmetic can coordinate divisibility so effectively that prime deserts become much larger than simplistic random-density reasoning first suggests.

This does not disprove Cramér’s log-squared conjectural scale. The proven lower bounds remain far below log^2 x. But they show that the structure of large gaps is not captured by thinking only about average spacing.

The construction strategy is worth seeing conceptually.

Choose a collection of small primes.

For each prime, choose a residue class.

Arrange these residue classes so that together they cover a long interval of offsets.

Then use the Chinese remainder theorem to find an integer N that simultaneously satisfies the chosen congruences.

For every offset h in the covered interval, N+h is divisible by at least one selected prime.

Therefore the interval contains no primes.

This is deterministic desert-making.

The difficulty is optimizing the covering. A small set of congruences must eliminate a long interval while leaving the global size of N under control. Modern arguments use probabilistic constructions and sophisticated sieve estimates inside this deterministic framework.

The boundary between random and arithmetic gets strange here. Random choices can help design a deterministic covering that proves an exact existence theorem.

This is another reason the phrase “primes are random” fails. Randomness appears in the proof as a method, not in the object as a source.

Large gaps also offer a corrective to visual intuition. If one plots primes along the number line, increasing sparsity is obvious. It is tempting to say large gaps are merely the inevitable result of lower density. But the extremal problem asks whether the emptiest regions are as empty as a random set of the same density would be.

That is a different question.

Extreme values amplify small modeling errors.

A distribution can match average density, variance and many local statistics while getting its maximum completely wrong. This is familiar in risk analysis: tails care about dependence. Prime gaps are mathematical tail risk.

The congruence structure supplies dependence.

This insight links large gaps back to Hardy–Littlewood. Both theories insist that local modular information survives aggregation. In close constellations, singular series corrects the naive frequency. In deserts, carefully chosen modular coverings create long exclusion zones.

Small primes govern enormous-scale behavior.

That is one of the most beautiful reversals in the subject.

The number 2 influences every large prime because parity never goes away. So do 3, 5, 7, and the rest. At astronomical magnitudes, the local residue rules are exactly the same as they were near zero.

Scale changes density.

It does not change divisibility.

The large-gap constructions exploit this permanence.

There is also an aesthetic asymmetry between proving close pairs and empty stretches. To prove emptiness, it is enough to exhibit a divisor for every candidate. Composite numbers carry certificates. To prove a cluster of primes, every candidate has to escape all possible divisors up to its square root. Exclusion can be engineered with local causes. Primality is what remains after all local causes fail.

Large-gap work therefore feels more constructive.

Choose the traps.

Cover the interval.

Move it with congruences.

The primes disappear.

Yet the best asymptotic bounds remain extremely deep. Simple constructions waste too much. Efficiency forces analytic and probabilistic sophistication.

The deserts can always be made.

The hard part is making them arrive soon enough to matter.
