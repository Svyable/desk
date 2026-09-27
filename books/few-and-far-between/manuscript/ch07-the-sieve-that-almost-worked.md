# The Sieve That Almost Worked

A sieve begins with abundance and removes what cannot survive.

The ancient sieve of Eratosthenes removes multiples of 2, then 3, then 5, until the primes remain. Modern sieve theory is more subtle because it usually tries to count survivors without identifying every survivor individually. One assigns weights, estimates sums, subtracts contributions from divisibility, and hopes the remainder is rigid enough to imply primality.

The hope repeatedly runs into parity.

The parity problem is not a single theorem saying “you cannot prove twin primes with sieves.” It is a family resemblance among limitations of classical sieve methods. Roughly, many sieves have difficulty distinguishing integers with an odd number of prime factors from those with an even number in precisely the way needed to isolate primes from almost-primes. A method that efficiently detects “few prime factors” can still fail at the final binary separation.

The history of small prime gaps is therefore full of results that look agonizingly close.

Brun’s sieve proved that the sum of reciprocals of twin primes converges, whether or not there are infinitely many twin primes. That was already remarkable: if twins are infinite, they are sparse enough that their reciprocal sum behaves unlike the divergent sum over all primes.

Bombieri, Davenport, Selberg and others pushed sieve and distribution methods toward smaller normalized gaps. Chen Jingrun proved infinitely many primes p such that p+2 has at most two prime factors. This is the famous “prime plus P2” result. It is not the twin prime theorem. It is evidence that the sieve can stand with its nose pressed against the glass.

For decades, the technical geography became clearer. To get actual bounded gaps, one needed to combine a clever sieve with sufficiently strong information about primes in arithmetic progressions.

This distribution language deserves attention because it is the hinge.

Take primes up to x and sort them by residue modulo q. Dirichlet’s theorem says that, for a fixed modulus q, primes eventually distribute among the reduced residue classes. Quantitative questions ask how uniform this distribution remains when q itself grows with x, and whether one can average errors over many q.

The Bombieri–Vinogradov theorem gives, on average over moduli, a level of distribution often described informally as 1/2. The Elliott–Halberstam conjecture predicts a much stronger level, close to 1. That numerical-looking distinction controlled what GPY could force.

Goldston, Pintz and Yıldırım built a sieve in which the quality of prime distribution determined whether at least two members of a tuple could be made prime. Under stronger-than-known distribution hypotheses, bounded gaps followed. Unconditionally, with Bombieri–Vinogradov, the method stopped just shy of that. It still proved the normalized liminf gap is zero.

This was the sieve that almost worked.

“Almost” can be a dangerous word in mathematics. A proof either closes or it does not. But almost can also mean the method has identified the exact bottleneck. GPY was valuable not because it failed to prove bounded gaps, but because its failure had a shape.

The shape said: improve distribution past the classical barrier in the right way, and the sieve may cross.

That is what Zhang eventually did.

There is an important methodological lesson in this prehistory. Breakthroughs are often easier to recognize in retrospect because earlier failed methods have drawn a map around them. Zhang’s paper looked startling, but it did not appear in a vacuum. The GPY framework had converted a famous conjectural phenomenon into a conditional engineering specification.

Build me enough distribution and I will give you bounded gaps.

The specification was initially phrased in terms of distribution hypotheses stronger than anything known. Zhang’s genius was to notice that the sieve did not require a universal improvement. A strategically restricted improvement—distribution over smooth moduli, numbers whose prime factors are all relatively small—could be enough.

This move is common in deep mathematics. The impossible request is stronger than the application needs. Instead of proving the grand theorem, inspect the proof until you know exactly which fragment would suffice.

A nonmathematical analogy would be misleading if taken too literally, but the engineering flavor is real. If a machine demands a material with impossible performance in every dimension, ask whether the high performance is only needed along one axis under one load case.

Zhang found the load case.

The older sieve work also teaches caution about narratives of obsolescence. Maynard later found a more flexible multidimensional sieve that changed the small-gap landscape again. That does not make GPY a failed ancestor. The modern methods are legible partly because GPY isolated the relevant weighted sums and distributional interfaces.

Mathematics retains its scaffolding.

The parity barrier remains with us too. Bounded gaps do not eliminate it. A theorem that infinitely many intervals of length 246 contain at least two primes does not specify a fixed shift h≤246 for which p and p+h are prime infinitely often? In fact, by pigeonhole among finitely many possible even differences, some gap value at most 246 occurs infinitely often as a difference between primes, but this still does not force h=2, nor necessarily consecutive structure in every formulation. The theorem proves existence inside a finite menu. The twin prime conjecture names one exact item.

Sieve theory is extraordinarily good at abundance statements of this kind.

It is less obliging when asked to name the survivor.

That tension—between forcing a population and identifying a pattern—runs all the way through modern prime-gap work. It is easy to miss because constants attract attention. Seventy million becomes 4,680, then 600, then 246. But the more meaningful distinction is logical.

Before bounded gaps: no fixed finite window was known to contain two primes infinitely often.

After bounded gaps: such a window exists unconditionally.

After Maynard–Tao: bounded windows can contain arbitrarily many primes infinitely often, with the window size depending on how many primes you demand.

Still open: force the window for two primes down to its smallest possible value, two.

The sieve almost worked.

Then it worked at a different question.

The remaining difference is not cosmetic. It is where the next mathematics has to live.
