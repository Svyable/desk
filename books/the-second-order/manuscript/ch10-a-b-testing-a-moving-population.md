# A/B Testing a Moving Population

The cleanest experiment exists on paper.

Take a population. Randomly divide it in two. Show one group the old design and the other the new one. Measure the difference. If randomization was done properly and the groups are large enough, the difference belongs to the treatment rather than to the accidents of who happened to receive it.

This is one of the great practical achievements of modern statistics. It is also why online experimentation became so powerful. A website can assign millions of users in seconds. A product team can compare two interfaces without relying on intuition. A marketplace can test a pricing rule. A recommendation service can try a new ranking algorithm. The experiment replaces argument with evidence.

But online populations do not sit still while they are being measured.

Users learn. Sellers react. Drivers reposition. Friends influence friends. One treatment changes the inventory another user sees. A new interface is confusing on Monday and ordinary by Friday. A notification increases engagement this week and trains people to ignore notifications next month. A feature that looks harmless at ten percent exposure changes the whole system when everyone has it.

The assignment may be random.

The world receiving the assignment may not remain the same.

That distinction matters because the ordinary mental picture of an A/B test assumes something stronger than randomization. It assumes that the outcome for one person can be understood without knowing what happened to everyone else, and that the treatment being measured is stable enough for a difference observed during the experiment to mean something after the experiment ends.

Often those assumptions are reasonable.

Sometimes they are the experiment.

Consider a simple marketplace. A company wants to know whether lowering the commission charged to sellers will increase transactions. Half the sellers receive the lower commission; half remain on the old rate. If buyers search across the whole marketplace, the treatment does not stop at the treated sellers. Lower commissions may encourage treated sellers to reduce prices, increase supply, or stay available longer. Buyers then redirect demand. Control sellers face a different market because treated sellers exist.

The experiment has changed the competitive environment of its own control group.

The control is no longer a miniature version of the world without the policy. It is the world without the policy for one group while the policy is operating next door.

That is interference.

The term sounds technical, but the underlying problem is ordinary. People share environments. Treatments leak.

Classical causal inference often relies on a condition usually called the Stable Unit Treatment Value Assumption. In practical terms, one part of that assumption says that my outcome should not depend on whether you were assigned treatment. In many online systems this is plausible. If a company changes the color of a settings button for one user, another user may never know.

But many products are built from interaction.

A ride-hailing platform matches riders with drivers. A labor marketplace matches clients with workers. An auction matches bidders against one another. A social network changes what people see based partly on what other people do. A multiplayer game is literally composed of users changing one another's experience. Even a search engine or recommender can create shared effects if it redirects enough attention toward the same sellers, creators, or destinations.

In those systems, the unit assigned to treatment is not necessarily the unit that contains the effect.

That is the first way an A/B test meets the second order.

The experiment changes behavior, and the changed behavior becomes part of other people's experimental environment.

The second way is time.

A product team launches a new interface to half its users. On the first day, the treatment group clicks less. The new design is unfamiliar. Menus moved. Habit no longer helps. A week later, the gap shrinks. A month later, it may reverse.

Which effect is the treatment effect?

All of them.

The first-day response is real. So is the later adaptation. A user facing a new interface is not a fixed measuring instrument. The user learns the interface.

The 2024 review of online controlled experimentation by Nicholas Larsen and colleagues treats novelty and primacy effects as standard methodological concerns. Novelty can temporarily increase engagement because something is new. Primacy can work in the opposite direction: a change performs badly at first because users have not learned it yet, then improves as the unfamiliar becomes routine. The treatment effect can therefore be a function of time rather than a constant.

This sounds obvious once stated.

It is still easy to forget when a dashboard displays one number.

A single reported lift compresses a path into an average. If the first week is strongly positive and the fourth week negative, the mean can hide the mechanism. If early friction disappears with learning, a short experiment can reject a good design. If early curiosity fades, the same short experiment can approve a bad one.

The experiment is not merely observing preference.

It is sometimes observing a learning process.

That creates a difficult practical question: how long should a test run?

There is no universal answer because duration changes what is being estimated. A two-day test may be the right instrument for a latency optimization whose effect should appear immediately. It can be a poor instrument for a feature that changes habit. Extending the experiment is not automatically safer either. The population itself may drift. A holiday arrives. A competitor launches something. New users enter. Old users churn. Seasonality changes traffic. A treatment alters who remains long enough to be measured.

Longer experiments trade one problem for another.

This is why online experimentation becomes less like a laboratory as products become more social, adaptive, and continuous. The infrastructure can randomize perfectly while the target of inference keeps moving.

There is a third complication.

The population can change because of the treatment itself.

Suppose a music service tests a recommendation feature that increases daily use among some listeners but annoys others enough to leave. After several weeks, the treated population is increasingly composed of the people who tolerated or enjoyed the feature. The control population retains a different mix.

Randomization was correct at the start.

Composition diverged after assignment.

The experiment may still estimate an important real-world effect, including the churn caused by treatment. But interpretation gets harder if analysts examine only the users who remain active. Conditioning on survival can quietly turn a randomized comparison into a selected one.

The treatment has edited the population being used to judge the treatment.

This pattern appears in many domains. A pricing experiment can change which customers buy. A moderation policy can change which users stay. A recruiting intervention changes who accepts an offer. A medical treatment changes who survives long enough for later outcomes to be recorded. Randomization protects the original assignment; it does not make every later subset randomized.

The fourth complication is scale.

An A/B test is often a partial deployment used to predict a full deployment.

That extrapolation can fail even when the experiment is internally flawless.

Imagine a food-delivery platform testing a new dispatch algorithm on ten percent of orders. The algorithm is more aggressive about matching the nearest available courier. At ten percent exposure, treated orders may receive faster service because they successfully capture scarce nearby couriers before control orders do. If the algorithm is rolled out to everyone, there is no untouched pool from which to take that advantage.

The treatment's gain was partly positional.

The experiment measured competition against the old system, not the equilibrium of the new system.

This is analogous to the ranking problem from earlier chapters. Relative advantage is not always scalable. A strategy can work for some precisely because others are not using it.

Marketplaces make this especially visible. A treatment that increases the probability one seller wins a buyer can look excellent at the seller level while barely changing total transactions. A driver incentive can shift drivers from nearby areas rather than create more supply. A promotion can move purchases forward in time. A feed algorithm can transfer attention among creators without increasing total attention.

When the units compete for fixed or slowly changing resources, adding up individual treatment effects can count the same gain twice.

The experiment is causal at one level and misleading at another.

This does not make A/B testing weak.

It makes experimental design part of the product architecture.

Researchers and platform teams have developed methods specifically for these cases. One important family uses cluster randomization. Instead of assigning individuals independently, the experiment assigns groups whose members are likely to affect one another. If users interact mainly inside geographic areas, classrooms, firms, households, or network communities, treating the cluster can reduce contamination between treatment and control.

The cost is statistical power.

Ten thousand people divided into ten large clusters do not provide the same independent information as ten thousand independently assigned people. Shared shocks inside a cluster make observations correlated. Better causal isolation can therefore require fewer effective units.

That tradeoff is fundamental.

The design that produces the cleanest separation may be the design with the least precision.

Another family of designs uses time rather than people.

Switchback experiments repeatedly turn a policy on and off for an entire system. A marketplace might use the new matching rule for one interval, the old rule for the next, and continue alternating. Because everyone receives the same treatment at the same time, users cannot contaminate one another across simultaneous treatment arms.

But time creates its own leakage.

A policy switched off at noon may still affect the system at 12:05. Drivers have moved. Inventory has changed. Users have formed expectations. Queues have not cleared. Sellers have altered prices. The state created under treatment survives into control.

This is carryover.

Yuchen Hu and Stefan Wager studied switchback experiments in systems with temporal dependence and showed why the problem can be substantial. In their framework, naive switchbacks can suffer persistent bias from carryover; burn-in periods can reduce that bias by discarding observations immediately after a switch, giving the system time to move toward the new regime.

The solution is revealing.

To measure a treatment cleanly, sometimes you must deliberately ignore data.

More observations are not always more information.

A dashboard culture can struggle with that idea because online experimentation makes data look almost free. Millions of events arrive continuously. The instinct is to collect all of them. But observations taken while the system is still carrying yesterday's treatment can be precisely the ones that contaminate the estimate.

The experiment therefore depends on a model of how quickly the world forgets.

That model may be wrong.

A delivery marketplace might reset in minutes. A social norm might persist for months. A recommendation system can alter a user's library or social graph in ways that never fully wash out. A pricing test can teach customers to wait for discounts. Once the treatment changes state, switching the interface back does not restore the counterfactual history.

Some treatments are reversible only in code.

That is a deeper problem than statistical interference.

Suppose a social platform tests whether showing more political content increases engagement. The test runs for four weeks. During that period, treated users follow new accounts, join groups, block other users, and learn what kinds of posts trigger responses. When the experiment ends, the platform can restore the old ranking algorithm. It cannot restore the old social graph.

The treatment has written itself into the state of the user.

The clean before-and-after boundary has disappeared.

This is one reason experiments involving learning systems can have long shadows. A recommendation intervention changes clicks. Those clicks become training data. The training data updates later recommendations. A test intended to compare two ranking policies can therefore change the future model that serves both groups.

The experiment has entered its own data-generating process.

That loop connects this chapter directly to the book's larger argument. The most important systems increasingly do not merely act on users. They learn from the response.

An A/B test in such a system can perform two functions at once.

It can estimate a causal effect.

It can also generate the data that determines what gets built next.

Those are not the same role.

Suppose an experiment finds that a more sensational headline style increases clicks by two percent with no immediate decline in daily active users. The result may be statistically impeccable. Product teams adopt the treatment. Writers learn which headlines perform. The content supply changes. Users become more accustomed to the style. Competitors imitate it. The metric landscape changes.

A year later, rerunning the original test would not mean the same thing.

The population has learned the treatment.

The organization has learned the treatment.

The environment has learned the treatment.

This creates what might be called experimental reflexivity. The act of repeatedly testing and deploying successful interventions changes the distribution of future opportunities.

Early in an experimentation program, many obvious improvements remain. Broken forms can be fixed. Slow pages can be sped up. Confusing steps can be removed. Later, the product is partly the accumulated result of thousands of prior tests. The baseline has been selected by experiment after experiment.

Future tests are conditional on that history.

This is not a flaw. It is progress.

But it means the phrase "what works" is always missing a clause.

What works given the current product, current users, current competitors, current expectations, current inventory, current habits, current measurement, and current treatment history?

Online experimentation is extraordinarily good at answering local causal questions.

Organizations get into trouble when they mistake a local answer for a timeless law.

There is strong counterevidence to any broad claim that moving populations make A/B tests unreliable. They do not. The modern online experimentation literature documents thousands of settings in which randomized tests provide clean, decision-useful estimates. The 2024 methodological review by Larsen and colleagues describes online controlled experiments as an indispensable tool across major technology companies precisely because randomization can isolate causal impact at a scale unavailable to many traditional fields.

The lesson is narrower.

A/B tests are trustworthy when the experimental design matches the causal structure of the system.

If users do not meaningfully affect one another, individual randomization may be excellent. If treatment effects stabilize quickly, a conventional duration may be enough. If the product change is reversible and does not alter later state, ordinary comparisons can be clean. If a company cares about the effect under the current operating regime rather than some hypothetical full-market equilibrium, the local estimate may be exactly the right one.

The problem begins when the convenience of the design is mistaken for evidence that its assumptions hold.

A product experimentation platform makes randomization easy. It cannot make interference disappear.

It can compute a p-value. It cannot decide whether users are competing for the same scarce supply.

It can track a metric for twenty-eight days. It cannot decide whether the relevant effect takes six months to emerge.

It can preserve assignment logs. It cannot reconstruct the social graph that would have existed had the experiment never run.

Those are questions about the world, not the instrumentation.

The strongest experimentation cultures understand this distinction. They invest not only in assignment systems and dashboards but in diagnostic checks, guardrail metrics, longer-term holdouts, cluster designs, switchbacks, variance reduction, pre-experiment validation, and methods for detecting sample-ratio mismatches or other implementation failures. The engineering makes experiments faster. The methodological discipline keeps speed from becoming false confidence.

There is also a governance question hiding inside experimentation.

A system that can test almost anything will test what can be measured.

That creates pressure toward short-horizon metrics. Clicks arrive immediately. Revenue arrives soon. Retention takes longer. Trust is hard to define. Habit formation may take months. Effects on suppliers, creators, workers, or local markets may sit outside the user-level dashboard entirely.

The experiment is randomized, but the choice of outcome is not.

This matters because a company can become extremely rigorous about causal identification while remaining narrow about objectives. It can know with high confidence that a feature increases session length while knowing much less about whether the additional time is valuable to users. It can know a promotion increases completed orders while missing that sellers bear most of the cost. It can prove a notification lifts opens while failing to measure annoyance accumulated across months.

Experimental rigor does not rescue a weak objective.

In fact, rigor can make the objective more powerful because the number arrives with scientific authority.

The same warning appeared earlier with metrics and rankings. A precise measure can govern more strongly than a vague one. A randomized estimate can do so more strongly still.

"The experiment says" is a difficult sentence to argue with.

Sometimes it should be.

Randomized evidence is a major improvement over executive intuition, selective anecdotes, or retrospective storytelling. Product teams routinely discover that confident ideas fail. An experimentation culture can protect organizations from hierarchy by giving users' actual behavior more weight than the opinions of senior people.

That is a genuine institutional achievement.

The mature response is therefore not skepticism toward experiments.

It is skepticism inside experimentation.

What population did we actually randomize?

Who could affect whom?

Did treatment change who remained observable?

Did effects evolve with learning?

Would the result survive full deployment?

Did the treatment consume a fixed resource or merely redistribute it?

Did the experiment leave state behind after assignment ended?

Are we measuring the objective or the easiest available proxy?

These are not reasons to avoid the test. They are what make the test interpretable.

The moving-population problem becomes especially important as products become more adaptive. A static website can often treat visitors as independent arrivals. A platform that learns from every action cannot. Its users shape the model. The model shapes users. Experiments run inside that loop.

Even the control group lives in a product whose future is being selected by prior tests.

This is why the word "control" can become misleading. Control does not mean untouched by history. It means assigned to the baseline policy at this moment.

The baseline itself is an artifact of yesterday's interventions.

That is not a statistical technicality. It changes how organizations should think about accumulated experimentation. A product can become locally optimized along a path that was never compared with alternatives not taken years earlier. Each A/B test may be valid while the long-run sequence is path dependent.

No single experiment can solve that.

Some questions require larger interventions, persistent holdouts, structural models, cross-market comparison, or simply judgment under uncertainty. Some require accepting that the counterfactual no longer exists in recoverable form.

The discipline is knowing which kind of question you are asking.

A/B testing is strongest when the treatment is bounded, the units are well defined, spillovers are limited or designed around, the time horizon matches the mechanism, and the outcome reflects what the decision is actually meant to improve.

As those conditions weaken, randomization remains valuable, but interpretation requires more structure.

The experiment does not stop being causal.

The causal object becomes harder to name.

A user exposed to treatment today is not necessarily the same kind of unit tomorrow. The person's neighbors may have changed. The marketplace may have moved. The algorithm may have retrained. The user may have learned. The control group may have reacted. The intervention may have changed the very population that will receive the eventual product.

A/B testing was invented to compare worlds.

In modern adaptive systems, the worlds can start changing each other before the comparison is finished.