# Six Billion Tokens Later

Six billion is a dangerous number to put in a book about intelligence.

It invites arithmetic that looks more meaningful than it is.

Anthropic reported that its Fermat formalization used roughly six billion output tokens from an internal research model. One can divide by the number of theorems, estimate dollars at a public API price, compare the total with a shelf of books, or announce that mathematics now has a new unit of industrial consumption.

Most of those calculations would be misleading.

The internal model was not necessarily priced like a public product. Output tokens do not measure all computation. A theorem can require ten tokens of decisive reasoning after a million tokens of failed setup, while another can consume a mountain of boilerplate and contribute little conceptual difficulty. Formalization is not research discovery. Model generations can run in parallel. Some outputs are discarded before anybody sees them. Hardware efficiency and model architecture change faster than any dollar figure printed here would survive.

The number still matters.

It tells us that machine mathematics has crossed into a regime where waste can be a strategy.

Human mathematicians ration thought differently.

A person cannot spend six billion words trying variants of a proof. We prune before we generate. We rely on taste because attention is scarce. We leave many branches unexplored because a day on one branch is a day not spent on another. We learn heuristics precisely so we do not have to calculate everything.

Machines alter the exchange rate between search and judgment.

This does not make judgment obsolete. It makes the boundary movable.

A task that would be absurd to assign to a person can become reasonable for agents: try every sensible exponent choice in this interpolation family; formalize all forty variants of a technical lemma; search a thousand coordinate normalizations; translate a collection of regularity criteria into one notation; run a counterexample optimizer against every generated inequality; ask five hundred reviewers to attack one high-value statement from different angles.

The activity looks wasteful only under the old cost structure.

This is the same pattern that computing has repeatedly imposed on other fields.

When memory was expensive, programmers contorted software to save bytes. When storage became cheap, they kept logs, replicas, caches, indexes, and datasets that would once have been unthinkable. When CPU time became cheap enough, researchers replaced hand-tuned calculations with ensembles and parameter sweeps. When digital photography made another exposure essentially free, people stopped treating each click like a chemical resource.

Cheapness changes style before it changes theory.

AI makes some forms of mathematical labor cheaper. Not all of them.

The cost of a token can fall while the cost of knowing what to do with the token rises.

This is the central economic problem of the Navier–Stokes stack.

If Anthropic can generate a million proof fragments per day, somebody or something must decide which fragments deserve dependency status. If the system can propose ten thousand numerical experiments, it must choose which results warrant expensive high-precision reproduction. If formalization becomes cheap, the library can accumulate faster than humans can understand its abstractions. If reviewer agents produce endless critiques, the project needs a way to distinguish fatal objections from stylistic noise.

Generation is no longer the scarce input.

Trust routing is.

This should influence the architecture from the beginning.

Every layer should have an explicit cost model, not only in dollars but in scarce forms of attention.

Machine inference.

High-performance numerical computation.

Formal build time.

Human expert hours.

External reviewer goodwill.

Library maintenance.

Reproducibility work.

Publication bandwidth.

These resources are not interchangeable.

A project can be compute-rich and reviewer-poor. It can have abundant theorem generation and a bottleneck in formal library design. It can have strong PDE expertise but weak rigorous numerics. It can have brilliant internal work and no external trust because nothing is reproducible.

The coordinator’s job is partly economic: spend the cheap resource to protect the expensive one.

Use machine search to reduce what humans must inspect.

Use formal checking to reduce the amount of line-by-line human verification.

Use adversarial numerics to kill false conjectures before experts debate them.

Use human judgment to choose which expensive formalizations are worth building.

Use public artifacts to recruit external verification without requiring outsiders to trust the internal process.

This is not merely efficiency.

It changes which research programs are possible.

Consider formalizing the known Navier–Stokes literature. A human-only effort might reject the idea because the opportunity cost is enormous. Years of expert formalizer time could be consumed reproducing established mathematics. If agents make ninety percent of the routine work cheap enough, the remaining ten percent—definition design, library architecture, difficult proofs, review—may become worth the investment.

The same applies to negative search.

No research group can manually attack every plausible inequality generated by every seminar. An agent cluster can.

The result is a shift from artisanal to industrial mathematics in selected layers.

The word *industrial* will bother people because mathematics is culturally attached to individual insight. It should bother them enough to ask which parts of mathematical work are actually being industrialized.

Not taste, at least not completely.

Not theorem significance.

Not the social process of acceptance.

Not the final interpretation of why a proof matters.

The layers most amenable to industrialization are search, translation, checking, routine formalization, numerical exploration, and memory.

Those layers already consume enormous human effort.

A mathematician may spend a week verifying that an argument in a paper adapts to slightly different exponents. A graduate student may spend months writing code to test a conjectured profile. A formalizer may spend days locating library lemmas and resolving type mismatches. A researcher may read thirty papers to discover that a candidate criterion is known under different notation.

These are not intellectually empty tasks. They train people. They sometimes contain the breakthrough. Automating them has costs to mathematical education that deserve attention.

But from the perspective of a specific open problem, reducing their marginal cost expands the search frontier.

The six-billion-token number also changes how we should think about failed attempts.

At human scale, failure is expensive enough that researchers hide some of it from themselves. We remember the months we invested. We may keep pushing because abandoning the route would turn sunk effort into visible loss.

Machine search can make abandonment cheap.

An agent can spend two million tokens on a branch and throw it away before lunch.

This is psychologically liberating and computationally dangerous.

If failure is too cheap, the system can become careless about learning from it. It simply restarts. That is why the previous chapter insisted on a negative dataset. Abundant waste is useful only when the institution buys information with the waste.

Six billion tokens should leave more than a proof.

They should leave a better searcher.

This creates a compounding curve.

The first formalization is expensive because the library is thin.

The second reuses infrastructure.

The first thousand failed PDE proof attempts teach the system common scaling errors.

The next thousand are filtered earlier.

The first rigorous numerical enclosure requires manual design.

Later agents learn which decompositions control interval blowup.

The first literature ingestion is messy.

Later theorem extraction improves through corrections.

If none of these costs fall with experience, the institution is not learning. It is merely burning tokens.

The economic measure of AI mathematics should therefore include amortization.

What reusable capability did this research run create?

This matters for Navier–Stokes because the problem can absorb arbitrary resources without yielding. Famous open problems have no contractual obligation to fall when compute doubles. A lab could spend a billion dollars and discover only that it had underestimated the difficulty.

The project needs intermediate returns.

Public formal libraries.

New theorems adjacent to the main problem.

Better rigorous-numerics tools.

Counterexamples.

Improved theorem-search methods.

Reusable scientific-agent infrastructure.

Educational formalizations.

Independent research enabled by the artifacts.

These returns make the program rational even when the prize remains untouched.

The million-dollar Clay prize is financially irrelevant at this scale.

This is another reason the treasure-hunt metaphor collapses. If a frontier AI lab pursues Navier–Stokes seriously, it will not be because one million dollars justifies the compute bill. The value lies in capability, reputation, scientific infrastructure, and the possibility of demonstrating a new mode of research.

Solving the problem would be a proof of something larger than the theorem.

It would show that an agentic system can operate across years of open-ended mathematics, integrate tools, generate original structure, reject its own errors, and produce an artifact accepted by a hostile expert community.

That capability would be worth far more than the prize.

This creates an incentive problem.

The company has reasons to want the demonstration to succeed.

The stronger those reasons become, the more independent the verification must be.

A billion-dollar capability claim cannot be reviewed like an internal product metric. The system will sit under enormous pressure to interpret ambiguous evidence favorably. The people involved will know what a success would mean for the lab.

Mathematics provides an unusual defense: the theorem can be externalized.

Publish the formal object.

Publish the human proof.

Publish the numerical certificates.

Let critics rebuild it.

Let competitors attack it.

The company can own the expensive search process without owning truth.

This separation is essential if industrial mathematics is to become legitimate.

The economics also raise an environmental and infrastructure question that should not be waved away.

Billions of model tokens and high-precision PDE computations consume real hardware, electricity, cooling, chips, and engineering time. A proof is immaterial only at the page. Its production can be industrially physical.

This does not make the research unjustified. Human institutions also consume resources. Laboratories, telescopes, particle accelerators, supercomputers, and universities cost money and energy. The relevant question is what knowledge is produced per unit of scarce resource and what alternatives were displaced.

AI labs will need a research portfolio disciplined enough to answer that question internally even if outsiders cannot audit every cost.

The romantic idea that pure mathematics is almost free because it needs only pencil and paper was always incomplete. It needs decades of education, salaries, institutions, libraries, conferences, and time. AI changes the visible part of the bill.

The six-billion-token theorem makes the hidden labor legible as compute.

That may be culturally uncomfortable.

A Wiles proof carries a story about seven years of private human concentration. A machine formalization carries a graph of billions of generated tokens. We instinctively assign depth to the human time and waste to the machine time.

Both interpretations are too simple.

Human effort includes dead ends, routine checking, reading, rewriting, and waiting. Machine effort includes structured search, formal repair, and reusable infrastructure. The meaningful comparison is not hours versus tokens. It is what kind of cognition each resource purchases.

Humans are expensive and selective.

Machines are becoming cheap and expansive.

The hybrid institution should exploit the complement.

Let machines enumerate.

Let humans discriminate.

Then improve the machines’ discrimination until human attention moves to a still narrower layer.

This process may continue until a future model performs much of what I currently reserve for mathematicians. If so, the architecture still matters. A strong model benefits from external verification, independent critics, exact targets, and durable memory. Better intelligence does not make institutional design irrelevant. It raises the stakes of getting it right.

The deeper lesson of six billion tokens is therefore not that brute force won.

Fermat’s Last Theorem was already proved. The machine was asked to reconstruct enough of a giant mathematical edifice in formal language and, according to Anthropic, it did so at a scale humans had not achieved before.

Navier–Stokes will not yield merely because we multiply that number.

The open problem contains an unknown concept, an unknown counterexample, or an unknown route whose search complexity we cannot estimate.

The token budget buys attempts.

The institution has to turn attempts into learning.

There is no reason the number must stop at six billion.

There is also no reason the theorem must care.

That tension is what makes the next era of mathematics interesting.

We are about to become rich in effort.

We have not yet proved that we know how to spend it.

The publication version of this argument needs one more accounting category: *verification debt*.

Every time the system produces an artifact faster than it can be checked, it borrows against future trust.

A thousand conjectures with no triage create verification debt.

A million-line formal development that only one internal environment can build creates verification debt.

A numerical candidate dependent on one private solver creates verification debt.

A literature graph filled by unreviewed theorem extraction creates verification debt.

The debt can grow even while the dashboard looks productive.

This is the mathematical analogue of technical debt in software. Fast local progress accumulates hidden obligations that eventually slow the whole project. The difference is that unpayable verification debt does not merely make maintenance expensive. It makes the research unusable.

The coordinator should therefore price new work partly by the debt it creates.

A speculative numerical experiment is cheap because its epistemic status is low and nobody downstream treats it as fact. A formal library theorem is expensive to admit because hundreds of branches may depend on it. A root-level claim is extremely expensive because the institution must pay for independent checking, statement audits, reproducible builds, and external review.

Trust should become more costly as claims move upward.

That sounds obvious, yet generative systems naturally invert the pressure. The most exciting claims receive the most attention and therefore the greatest incentive to promote quickly. A good institution slows down precisely where the excitement rises.

This suggests a research budget with two ledgers.

Search capital buys attempts.

Trust capital buys belief.

Tokens, GPUs, and automated agents mostly expand search capital. Independent experts, checker diversity, source verification, rigorous numerics, and time build trust capital. A project can be rich in one and bankrupt in the other.

The ratio matters more than the absolute amount.

A six-billion-token proof accompanied by thin external verification may be less valuable than a smaller artifact that five independent groups can rebuild.

This is where open-source formal infrastructure becomes economically important. A theorem formalized in a widely used library has more reusable trust capital than one trapped in a proprietary environment. The definitions have been exercised by strangers. The abstractions have encountered uses the original authors did not anticipate. The build process is visible. Bugs are discovered by a larger population.

A private lab can still contribute proprietary search. It simply should not expect proprietary search to substitute for public verification.

This distinction also changes how to evaluate progress before the Millennium theorem closes.

Suppose a year of work produces no decisive proof but adds machine-checked Leray–Hopf theory, formalized regularity criteria, a rigorous numerical toolkit for unstable profiles, and a library of counterexamples to common generated inequalities. The headline target is untouched.

The project may nevertheless have earned an excellent return because future research—inside and outside the lab—now begins with better infrastructure.

Suppose instead the year produces ten million plausible proof sketches and a leaderboard showing improving internal “promisingness” scores. The target may appear closer in a presentation while the scientific asset is negligible.

Output volume is the wrong denominator.

Reusable reduction in uncertainty is better.

The economics of machine mathematics therefore reward a strange form of restraint. Spend enormous compute where verification is cheap and compounding. Spend human attention only after automated filters have done their work. Refuse to scale branches that create more verification debt than knowledge. Publish infrastructure that allows outsiders to turn your sunk search cost into their lower future cost.

This resembles the economics of platform engineering more than the economics of a lone genius.

A theorem library is infrastructure.

A rigorous-numerics framework is infrastructure.

A corpus of formal counterexamples is infrastructure.

A target-comparison schema is infrastructure.

An independence graph is infrastructure.

The final proof may be one application running on top.

There is a further implication for scientific credit. If a lab spends industrial resources building the platform and a university mathematician uses the public infrastructure to discover the decisive lemma, who “solved” Navier–Stokes? The question becomes less meaningful as labor decomposes.

The answer should probably look like modern experimental science: credit the conceptual authorship of the theorem, the builders of indispensable infrastructure, the computational teams, the formalization contributors, and the institutions that made the work possible without pretending every contribution is the same.

This is not dilution. It is accurate accounting.

The romantic single-name theorem will survive culturally because humans like stories. The underlying production system may look increasingly collective.

Six billion tokens makes that visible because no one wants to personify the tokens themselves.

The meaningful unit is the organized system that turns them into reusable mathematical state.

The final economic question is therefore not “how expensive was the proof?”

It is “what became cheaper after the proof?”

Did formal PDE become easier?

Did rigorous numerical certification improve?

Did future models learn to reject common dead ends sooner?

Did the community gain a trustworthy theorem graph?

Can another open problem reuse the architecture?

A proof that answers only one famous question is already valuable.

A proving institution that lowers the cost of answering the next hundred is the larger prize.