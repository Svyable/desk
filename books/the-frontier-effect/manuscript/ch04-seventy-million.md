# Seventy Million

The number that changed prime gaps was ridiculous.

70,000,000.

That was the point.

Nobody had been waiting for seventy million.

The twin prime conjecture asks whether there are infinitely many pairs of primes differing by two. It is one of those perfect mathematical objects: elementary to state, resistant to attack, and dangerous precisely because the statement looks as though it ought to surrender to persistence. Five and seven. Eleven and thirteen. Seventeen and nineteen. The examples are cheap. The theorem is not.

For most of the twentieth century, the real obstruction was not getting the number two. It was getting any fixed number at all.

Let p_n denote the nth prime. The ordinary gap p_(n+1) - p_n tends to become large on average because primes become sparser. The bounded-gaps question asks something different: must there still be infinitely many occasions when consecutive primes land within some fixed finite distance H of each other?

For years the barrier between "finite" and "not known finite" mattered more than the eventual size of H.

Then Yitang Zhang crossed it.

His 2013 paper proved that

lim inf (p_(n+1) - p_n) < 70,000,000.

The theorem did not say twin primes exist infinitely often. It did not say prime gaps are usually small. It said that some finite bound works infinitely often.

The number seventy million looked comically far from two. Mathematically, it was on the correct side of infinity.

That is an excellent example of frontier geometry.

A lay reader can look at 70,000,000 and see failure by a factor of thirty-five million. A number theorist can look at the same number and see that a qualitative obstruction has disappeared.

The breakthrough was not the destination. It was the fact that a continent had become reachable.

This difference between qualitative and quantitative progress recurs throughout mathematics. Suppose nobody knows whether an object exists. The first existence proof may produce an absurdly inefficient object. It may be astronomically large, computationally useless, or quantitatively embarrassing. But once existence is established, optimization becomes a different problem.

You can now ask how bad the first proof is.

You can locate where the waste enters.

You can replace one estimate without rebuilding the whole argument.

You can assign different people to different bottlenecks.

You can compute.

You can race.

Zhang's seventy million turned a wall into a number.

Within days, the number started falling.

Terence Tao opened an online reading seminar in June 2013 to understand Zhang's paper and improve its parameters. What followed became Polymath8. The point was not merely to celebrate the proof or re-explain it. The collaboration treated the argument as machinery that could be disassembled.

There were several places to attack.

Zhang's result drew on the Goldston-Pintz-Yıldırım approach to small gaps between primes, together with new distribution estimates for primes in arithmetic progressions with certain smooth moduli. The details are technical enough that casual summaries often flatten the result into "better sieve theory." That loses the interesting part.

The proof had interfaces.

One component translated distribution information about primes into a weakened prime-tuples statement. Another turned that statement into a bounded-gap conclusion by choosing suitable admissible tuples. Parameters passed from one component into another. Improve an estimate here and the permitted tuple shrinks there. Find a narrower admissible tuple and the final H drops.

That modularity made the proof unusually compatible with distributed optimization.

Polymath participants did not all need to invent one replacement proof. They could squeeze different joints of the same proof.

This is the mathematical analogue of a machine becoming hackable.

On June 4, 2013, Tao's post noted Zhang's H = 70,000,000 and reported that the collaborative record had already fallen to 4,802,222.

By June 30, Tao gave confirmed progress down to 12,006, with a provisional 6,966 under arguments still being checked.

By the time the Polymath8a paper was written, the unconditional bound in Zhang's framework had reached 4,680.

This is not the deepest part of the story, but the speed deserves to be stared at.

A proof that had taken years of private work to produce became, almost immediately after publication, an object of collective surgery.

There is a cheap moral available here about the internet accelerating collaboration. It is true and insufficient.

The internet did not make the mathematics modular. Zhang's proof did.

It did not create the prior work of Goldston, Pintz and Yıldırım, Bombieri, Vinogradov, Motohashi, Pintz, Fouvry, Friedlander, Iwaniec and others. It did not remove the requirement that somebody understand difficult analytic number theory. It did not make all contributions equal. As Gowers had already observed about Polymath, even a small useful contribution may require grasping a large part of the picture.

What the public collaboration changed was latency.

An improvement could be posted, checked, corrected, incorporated and used by somebody else without waiting for a paper to complete the old publishing cycle.

The frontier acquired a faster clock.

That is the first reason bounded gaps belongs in this book.

The second reason is James Maynard.

Optimization has a peculiar psychological effect. Once a community has begun lowering a number, the activity can create the impression that the next major advance will be more lowering. The frontier looks one-dimensional. Seventy million becomes twelve thousand becomes six thousand becomes 4,680. The natural next move seems to be 4,000.

Then somebody changes the mechanism.

In late 2013, Maynard introduced a different refinement of the Selberg sieve. His argument produced H_1 <= 600 unconditionally. More important, it handled bounded intervals containing not merely two primes but arbitrarily many primes: for each m, a finite bound H_m exists.

Tao independently developed a related multidimensional-sieve idea around the same time. The method became known as the Maynard-Tao sieve.

This was not just a better coefficient in Zhang's proof.

The shape of the attack changed.

That distinction is essential to the Frontier Effect. There are at least two ways a frontier can move. One is parameter compression: keep the architecture, improve the constants, sharpen the estimates, remove waste. The other is architectural substitution: find a different mechanism that makes the old bottleneck less important.

Polymath8a was spectacular parameter compression.

Maynard changed the architecture.

Then Polymath8b absorbed the new architecture and optimized again.

The unconditional H_1 bound eventually reached 246.

Seventy million to 246 is visually irresistible, but the more interesting trajectory is conceptual:

unknown finite bound;
finite bound through Zhang's distributional advance;
rapid optimization within Zhang's architecture;
new multidimensional sieve;
rapid optimization within the new architecture.

That is how a frontier actually moves.

It does not advance at a constant speed. It jerks.

Long periods of resistance are followed by discontinuities. A new method opens a region. Many people rush into the region and harvest improvements. Diminishing returns arrive. Attention begins waiting for another conceptual break.

Tao said almost exactly this in 2014 when Polymath8b neared completion. The group had reached H_1 <= 246. Further modest improvements looked possible, but extracting them would require substantial effort. Better to wait for a new breakthrough.

That sentence is frontier economics in miniature.

Not because mathematicians are maximizing money. Because effort has opportunity cost.

Suppose another six months of expert work could move 246 to 244 while a new idea elsewhere might change the nature of the problem. At some point a community stops polishing the current frontier and reallocates attention.

The stopping point is not mathematically ordained.

It is social judgment about marginal returns.

This is where the number 246 becomes as revealing as seventy million.

A bound can stop moving while the problem remains open.

The twin prime conjecture still asks for two.

There is a canyon between 246 and 2 that is not well measured by subtraction.

The existing sieve methods encounter the parity problem, a deep obstruction that prevents them from simply being optimized all the way to twin primes. Under stronger distribution assumptions, Polymath8b could get much smaller bounds; under a generalized Elliott-Halberstam conjecture it obtained H_1 <= 6. But within the unconditional machinery, the remaining distance to two is qualitatively different from the earlier distance between seventy million and 246.

This is another reason raw progress metrics can mislead.

A frontier can move rapidly across easy kilometers after a conceptual breakthrough and then stop at a one-meter wall.

The kilometer count does not tell you the wall's height.

In August 2026, Julia Stadlmann posted a preprint claiming an improvement from the Polymath8b bound H_1 <= 246 to H_1 <= 240 by combining Bombieri-Vinogradov with newer equidistribution estimates for smooth moduli.

As I write, that result is recent enough to deserve careful labeling. A preprint is evidence that a claim has been made and an argument exposed to scrutiny. It is not the same thing as long-settled community acceptance.

But whether the final number remains 240 is less important for this book than what the episode shows.

A frontier can appear locally exhausted for twelve years and then move six units because neighboring mathematics improved.

The bounded-gaps community did not need to spend twelve years staring continuously at 246. New equidistribution estimates could mature elsewhere and later be imported.

This is attention moving through time.

A famous problem stores optionality.

Researchers can leave and return.

Methods developed for another purpose can come back and change the best known bound.

The problem functions as a standing interface to future mathematics.

That is why the phrase "unsolved problem" is too static.

A live problem has state.

It has a best bound.

It has known barriers.

It has active methods.

It has abandoned methods that may become active again.

It has computational records.

It has conditional versions.

It has a population of researchers with different beliefs about which bottleneck matters.

It has a memory of failed attacks.

It has a frontier velocity.

The last term is mine, and it should not be mistaken for a standard mathematical quantity. But bounded gaps suggests how one might begin making it less metaphorical.

Track the best unconditional H over time.

Track the number of independent groups improving it.

Track how often improvements use the same proof architecture versus a new one.

Track the lag between a major theorem and follow-on results.

Track citations migrating into neighboring areas.

Track which methods survive after the original numerical race slows.

Now the Frontier Effect becomes something we could test rather than admire.

Did Zhang's breakthrough merely produce a flurry of bound improvements, or did it redirect longer-term research?

Did researchers enter sieve theory who otherwise would not have?

Did methods developed for bounded gaps migrate into Chebotarev sets, primes with prescribed properties, or other configurations?

Did the public Polymath process change how quickly improvements were found relative to comparable problems?

Did Maynard's method create a second wave with a measurably different collaboration network?

These questions have answers in principle. Some require bibliometrics. Some require interviews. Some require reconstructing dates and dependencies carefully enough not to confuse correlation with influence.

The book should do that work.

It should also preserve an uncomfortable possibility: maybe famous breakthroughs do not release attention as much as they attract more of it.

Zhang's proof is evidence for both mechanisms.

Once bounded gaps became finite, the problem became hotter.

People did not say, good, that is settled enough, and leave.

They arrived.

The frontier moved and attention moved toward it.

This sounds like a contradiction only if we assume attention must flow away from solved territory.

That assumption is wrong.

The Frontier Effect is not a law saying proof ejects mathematicians.

It is a claim that proof changes the expected value of nearby work.

Sometimes the expected value rises.

A breakthrough can make a previously hopeless problem look attackable. That recruits talent. The result is an attention surge, not an attention release.

Later, when marginal improvements become expensive, the flow can reverse.

Frontier motion can therefore have phases.

Before Zhang: high prestige, enormous difficulty, uncertain tractability.

After Zhang: the qualitative barrier falls; the problem becomes experimentally alive.

During Polymath8a: optimization rush.

After Maynard: architectural reset and second rush.

At 246: diminishing returns.

In 2026: a possible new incremental move imported from later distribution estimates.

This looks less like a queue of problems being solved and more like a market in changing expected returns.

That phrasing is dangerous if taken too literally. Mathematicians are not hedge funds and intellectual beauty does not reduce to payoff. But the analogy helps explain why a field can experience sudden migrations of effort without central direction.

Researchers update.

A theorem changes what seems possible.

A new technique changes what seems reusable.

A public collaboration changes how quickly partial improvements can compound.

A formal proof library changes the cost of verification.

An AI system may change the cost of searching a parameter space.

The result is a redistribution of attention.

This is the bridge to the era now arriving.

Machine-assisted mathematics will probably not first announce itself by waking up one morning and proving every famous conjecture.

It will enter through seams like the ones Polymath exploited.

Parameter search.

Counterexample search.

Formal verification.

Optimization of constructions.

Exploration of families too large for a person to inspect.

Translation between informal and formal statements.

Suggestion of lemmas whose truth can be mechanically tested.

If those tools improve, a Zhang-style breakthrough could encounter a very different downstream environment.

Imagine the 2013 paper landing into a mathematical ecosystem with agents capable of reading the argument, formalizing its modular components, reproducing parameter calculations, testing admissible tuples, searching numerical choices, checking local lemmas and posting candidate improvements.

The first seventy million might still require a human conceptual leap.

The fall from seventy million might happen much faster.

That is not a prediction that the machines will be correct. In fact, faster generation makes verification more important. A thousand plausible improvements are worse than one proof if the community cannot cheaply distinguish them.

But bounded gaps gives us a historical control.

We already know what rapid collective optimization looks like when the agents are human.

We know the dates.

We know the sequence of bounds.

We know when a new architecture entered.

We know where diminishing returns were declared.

That makes this one of the best places to ask what changes when machine search joins the collaboration.

There is a useful irony in writing this chapter now. A bound that looked settled enough to serve as history moved again while the book was being drafted. That does not make 240 sacred. It makes the timeline alive.

The right response is not to chase every preprint number as if this were a sports score. It is to preserve the state of evidence. Zhang's 70,000,000 is established. Polymath8b's 246 is established in the literature. The 2026 claim of 240 is a recent preprint and belongs in a different evidentiary box until it has been digested.

Even in pure mathematics, frontier reporting needs epistemology.

The arithmetic distance was enormous. The strategic distance had changed sign.

Seventy million was not close to two.

It was close to everything that happened next.
