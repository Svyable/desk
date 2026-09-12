# Cramér’s Coin

Harald Cramér’s 1936 paper on the difference between consecutive primes gave number theory one of its most durable imaginary machines.

The machine is a sequence of biased coin tosses.

For each integer n, flip a coin that lands “prime” with probability roughly 1/log n. Ignore, for a moment, the fact that divisibility makes this fiction impossible in detail. The resulting random set has about the right density to imitate the primes. Ask how far apart successive successes are. Ask how large the largest run of failures becomes.

This is the Cramér model in its simplest form.

Its great virtue is not that it is true. It is that it turns vague intuition into a quantitative forecast. Around x, if success probability is about 1/log x, then typical gaps have scale log x. Extreme-value heuristics suggest the largest gaps up to x should have scale about log^2 x. This became the famous Cramér conjectural order for maximal prime gaps.

Then arithmetic began objecting.

The true primes do not toss independent coins. They have already agreed never to occupy most residue classes modulo small primes. Once you condition on avoiding divisibility by 2, 3, 5, and so on, candidate prime locations are more structured than Cramér’s independent model allows. Andrew Granville later emphasized that these small-prime correlations can alter the constant one expects in extreme-gap behavior. The model may have the right scale while missing the fine architecture.

This is a recurring pattern in analytic number theory. A probabilistic model captures the first order, then arithmetic corrects the tails.

Why keep the model at all?

Because it gives us something to fight with.

A conjecture without a heuristic can become a naked guess. Cramér’s model supplies an argument for why log^2 x is natural. Large gaps become longest failure runs in a thinning Bernoulli process. Small gaps become unusually close successes. Counts in intervals acquire familiar fluctuation scales. One can then compare the actual primes against the imagined process and ask where the analogy breaks.

Those breaks are often more interesting than the agreements.

Jacobsthal-type phenomena, covering congruences, Maier’s matrix method, and modern large-gap constructions all reveal arithmetic mechanisms invisible to independent tossing. The primes can produce deserts not merely because random failures occasionally cluster, but because residue classes can be coordinated so that every integer in a long interval is forced composite.

That is not chance. It is engineering.

Cramér’s coin therefore has two lives. In one, it is a predictive model. In the other, it is a foil for the fact that primes remember arithmetic.

There is a philosophical trap nearby. When a deterministic sequence agrees with a random model, people sometimes conclude that the sequence “is random.” That statement is too coarse to be useful. Randomness has many meanings: algorithmic incompressibility, statistical independence, equidistribution, unpredictability under a chosen test, lack of correlation with structured sequences. The primes satisfy some random-like properties and violate others spectacularly.

A better question is always: random with respect to what statistic?

For average density, the prime number theorem gives a remarkably smooth law.

For primes in arithmetic progressions, Dirichlet and later quantitative theorems tell us how density is distributed across reduced residue classes.

For short intervals, the picture becomes harder.

For linear patterns, Hardy–Littlewood predicts local corrections.

For maximal gaps, Cramér offers an extreme-value benchmark that arithmetic may modify.

For consecutive residue classes, subtle biases appear.

The same primes can look random in one projection and highly structured in another.

This is why gap research is so good at exposing bad metaphors. “Primes are random” is too blunt. “Primes are patterned” is equally blunt. The subject lives in the qualifiers.

Cramér’s original paper belongs to a period when probabilistic thinking was becoming a powerful language for number theory. Later probabilistic number theory would formalize distributions of arithmetic functions in ways far beyond this model. Yet the coin remains irresistible because anybody can understand it.

Suppose the chance of a prime near x is about 1/log x. Then waiting time about log x makes sense. To get an empty interval much longer than average, one needs a streak of failures. Among roughly x opportunities, the longest streak in an independent model naturally grows by another logarithmic factor. Hence log^2 x.

The argument fits on a napkin.

Proving anything comparable for the actual primes does not.

There is an important asymmetry between upper and lower bounds for maximal gaps. To prove a large lower bound for G(x), we need construct or guarantee at least one very long prime-free interval. To prove an upper bound, we must guarantee that every sufficiently long interval contains a prime. The latter problem brushes against some of the deepest questions about primes in short intervals.

Under the Riemann Hypothesis one obtains much stronger control than unconditionally, but even RH by itself does not hand us Cramér’s conjecture. The extreme local distribution of primes is a finer problem.

This is another lesson from the coin. A model can suggest an answer more precise than our strongest global theory can reach.

And sometimes the model deserves correction before the proof arrives.

If we sieve out small prime factors first, then model the remaining candidates probabilistically, we get a different random object. Granville’s refinements show how this changes extreme-gap constants and helps explain why raw Cramér independence is too naive. The local congruence structure acts before the random approximation, not after it.

One can tell two stories about this.

In the first, Cramér was wrong.

In the second, Cramér gave us exactly the right wrong model: simple enough to calculate, accurate enough to illuminate, and flawed enough to reveal what arithmetic contributes.

The second story is more useful.

A good model does not need to survive contact with reality intact. It needs to make the point of failure informative.

The prime gaps have been doing that to Cramér’s coin for ninety years.
