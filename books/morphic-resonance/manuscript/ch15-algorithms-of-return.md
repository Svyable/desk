# Algorithms of Return

For most of human history, the past had to survive before it could influence you.

Someone had to remember. A book had to remain on a shelf. A road had to stay open. A custom had to be taught. A building had to stand. A rumor had to keep moving from person to person.

Digital systems changed the economics of survival.

Behavior can now leave traces by default.

Searches, clicks, purchases, pauses, routes, likes, skips, watch time, follows, ratings, location histories, support tickets, transactions, edits, and countless other actions can be recorded, aggregated, and used to shape what happens next. The trace does not merely wait for a human observer. An algorithm can operationalize it automatically.

The past becomes executable at population scale.

This is the point where resonance infrastructure stops being mostly inherited and becomes intentionally engineered.

A recommender system is a simple example in principle. People interact with items. The system uses those interactions, along with item and user features, to estimate what someone may want next. Similar users, similar items, similar behavior patterns, or representations learned from data can influence the prediction. The specific methods vary enormously.

The central architecture is familiar.

Past cases alter the treatment of a new case.

Similarity becomes causal because code routes historical influence.

That is exactly the sort of process that can feel like morphic resonance from inside the experience. A person encounters a song, video, product, or sentence that seems uncannily appropriate. The system has never met the person in a human sense. The other users whose behavior contributed to the recommendation may be strangers. Some may live on another continent. They may never know their actions helped shape the result.

Like influenced like across distance and time.

But there is a carrier.

Data moved.

Parameters changed.

Ranking changed.

The mystery has a pipeline.

The pipeline does something more important than memory: it creates feedback.

A recommendation changes what a person gets a chance to choose. That choice becomes new data. The new data influences later recommendations. The system is therefore learning from behavior that the system itself partly caused.

This is a closed loop.

Closed loops can improve adaptation. They can also amplify history.

Research on recommender systems has documented popularity bias, in which already popular items can receive disproportionate exposure, and has studied how recommendation feedback loops can reinforce that bias over time. The details vary by algorithm, platform, objective, and user behavior, but the mechanism is easy to see. Visibility produces interactions. Interactions become evidence of relevance. Evidence produces visibility.

The trail gets paved because people use the trail after it was paved.

A 2020 study by Masoud Mansoury and colleagues makes the loop unusually explicit. The researchers did not claim to have measured the inner workings of every commercial recommendation platform. They built an offline simulation in which users interact repeatedly with several recommendation algorithms, the simulated reactions are added back to the data, and the recommenders operate again on a history partly produced by their own earlier choices.

That setup matters because ordinary evaluation often freezes the dataset. A recommender is tested on a historical record as if deployment will leave the record unchanged. The simulation asks the harder question: what happens when prediction becomes intervention and intervention becomes training data?

In their experiments, popularity bias could intensify across repeated cycles. Aggregate diversity declined in the simulated recommendations. The representation of users' tastes shifted over time, and the authors reported stronger effects for users in a minority group in their setup.

Those findings should not be inflated into a universal law of recommendation. They depend on the algorithms, data, behavioral assumptions, and simulation design. A platform can explicitly optimize for exploration, diversity, novelty, fairness, long-term satisfaction, or other goals. A recommender can surface obscure material that a user would never have found unaided. Different feedback mechanisms can produce different trajectories.

The paper is valuable for a narrower reason.

It demonstrates how a closed loop can manufacture stronger evidence for its own prior.

The recommender favors popular items.

Users are exposed to those items.

Their responses are logged.

The next model sees a world in which popular items received more opportunities to produce responses.

The historical imbalance has reproduced itself through measurement.

This is not simply bias in the model.

It is bias in which future becomes observable.

That distinction is crucial.

A system can never collect behavioral evidence about an option nobody was shown. The absence of interaction is then ambiguous. Did the user dislike the item? Or did the system never allow the preference to become visible?

The unshown alternative becomes a missing counterfactual.

This is where algorithmic history becomes more powerful than a passive archive. An archive can overrepresent one category, but a ranking system built from the archive can allocate new opportunities in the same direction. The old distribution begins producing the evidence that will justify its continuation.

A 2024 survey of popularity bias in recommender systems underscores why the phenomenon should be treated as a research problem rather than a single result. The literature contains different definitions, measurements, mitigation strategies, and experimental settings. Much of the work is computational, which means real-world effects depend on how users actually respond to recommendations and on platform-specific design choices.

That limitation is useful, not embarrassing.

It prevents the book from turning “feedback loops exist” into “algorithms inevitably homogenize everyone.”

The more precise claim is stronger: when exposure, response, logging, and retraining form a loop, historical popularity can become a cause of future observability. Whether that cause dominates depends on the system.

A newer line of work has begun looking at those dynamics across user groups and repeated recommendation cycles. The point is not that one 2026 study settles the field. It is that researchers increasingly treat recommendation as a longitudinal process rather than a one-shot ranking problem. A system that looks acceptable at the first interaction can produce a different distribution after hundreds of interactions because users and models co-adapt.

That is resonance infrastructure in motion.

The infrastructure is not static data behind a model.

It is the loop connecting exposure to behavior to data to later exposure.

Once that loop is visible, design questions become experimental questions.

What if popularity signals are hidden?

What if some exposure is randomized?

What if old interactions decay faster?

What if the objective includes aggregate diversity?

What if niche-oriented users are evaluated separately rather than averaged into a population metric?

What if success is measured over months instead of clicks in the next minute?

Each intervention changes how much historical repetition is allowed to purchase future repetition.

The result is a practical science of engineered resonance.

Now imagine the same logic operating across millions of decisions every day.

A product ranks because it sold.

It sells because it ranks.

A creator gets recommended because viewers engaged.

Viewers engage partly because the creator was recommended.

A restaurant becomes prominent because it has reviews.

It gets reviews because prominence brings diners.

A candidate profile is surfaced because past profiles with similar features succeeded.

Future success data is then generated disproportionately from the profiles that were surfaced.

History chooses which new evidence gets created.

That sentence captures the danger.

A predictive system does not only observe the world. Once deployed, it can alter the distribution of the world it later observes.

This is familiar in social science under many forms: measurement can change behavior; selection affects samples; policy affects outcomes; expectations affect choices. Machine learning makes the loop fast, granular, and automatic.

The system can become more certain about a pattern partly because it keeps arranging opportunities for the pattern to recur.

This is engineered resonance.

It complicates the idea that more data automatically reduces bias. If the data is generated by a policy, the dataset may contain the policy's history as much as the world's underlying structure. A model trained on past decisions can learn who was previously selected, promoted, lent to, policed, treated, clicked, or shown.

The past has labels.

Those labels may encode real differences.

They may also encode old constraints, measurement practices, unequal exposure, or institutional choices.

A model does not know the moral genealogy of a correlation unless the system is designed to examine it.

This is why “the algorithm found the pattern” is not a complete causal explanation.

The pattern came from somewhere.

Perhaps it reflects stable preference. Perhaps it reflects unequal opportunity. Perhaps it reflects an old rule. Perhaps it reflects the ranking system used to collect the data. Perhaps it reflects a proxy for something the institution did not intend to use. Perhaps several are true at once.

Algorithms make pattern inheritance easy and provenance difficult.

The difficulty is not only ethical. It is epistemic.

Suppose a platform recommends more of a category because users click it. Does the click reveal deep preference? Curiosity? Outrage? Confusion? Placement? Thumbnail quality? The fact that the category was shown more often? The behavior is observed, but its meaning is inferred.

The model operationalizes the inference anyway.

Repeated operation can then make the inferred preference more behaviorally true. A user exposed to more of a genre may learn it, tire of it, identify with it, or simply keep selecting from the menu offered. Preference is not always a fixed object waiting to be discovered. It can be shaped by exposure.

Recommendation becomes cultivation.

This is where algorithmic resonance differs from a passive archive. The system does not simply remember what a person liked. It constructs a future environment out of that memory.

Memory becomes world-building.

A route planner does this physically. It remembers traffic conditions and recommends routes. Drivers follow recommendations, changing traffic. If many drivers receive similar guidance, roads previously quiet can become crowded. The model's prediction changes the target of the prediction.

A credit model can affect access to credit, which affects the financial trajectories later used to evaluate risk. A content model can affect visibility, which affects audience growth, which affects future signals of relevance. A hiring filter can affect who gains experience, which affects the population of experienced candidates later available.

The prediction is an intervention.

This is a profound difference between describing a pattern and making it easier to repeat.

Resonance infrastructure begins when memory acquires routing authority.

We have granted routing authority to algorithms because the scale of modern choice exceeds human attention. There are too many songs, products, documents, applicants, routes, messages, transactions, and risks to inspect manually. Ranking is unavoidable. Some mechanism must decide what becomes visible first.

The question is what kind of memory the ranking system should have.

A system optimized narrowly for immediate engagement may preserve different patterns than one optimized for long-term satisfaction. A system optimized for average performance may treat minority preferences badly. A system optimized for historical accuracy may suppress exploration. A system optimized for novelty may annoy people by ignoring stable taste.

Every objective is a memory policy.

It decides which past outcomes deserve to shape the next exposure.

This connects recommender design to the biological problem of exploration and exploitation. A system that exploits what it already knows can perform well in the short term. A system that explores uncertain options may learn more and discover better possibilities. Too much exploration wastes opportunities. Too little makes the system overconfident inside its existing world.

The problem is not peculiar to algorithms.

People do it too.

Restaurants order more of the dishes that sell. Publishers acquire books resembling prior successes. Studios green-light familiar franchises. Investors back founders resembling founders who previously made money. Scientists pursue questions grant committees already know how to value. Employers hire from institutions that supplied prior employees.

Algorithms accelerate a civilizational instinct: use the past to reduce uncertainty.

The cost is that uncertainty is where novelty lives.

A system that always chooses the most probable successful option from historical data systematically under-samples alternatives. Those alternatives then remain data-poor. Their uncertainty becomes a reason not to choose them. The lack of evidence becomes self-preserving.

The unknown stays unknown because the model knows it less well.

This is one of the most consequential forms of resonance infrastructure.

The old pattern has data.

The new pattern has a hypothesis.

Data wins institutional arguments.

Sometimes correctly.

Sometimes because the institution helped create the imbalance.

This is why exploration cannot be treated as an accidental leftover if a system wants genuinely new outcomes. It has to be funded, protected, or randomized deliberately in some domains. A recommender may need diversity mechanisms. A scientific portfolio may need bets outside established citation clusters. A company may need experimental budgets that are not judged by mature-product metrics.

Novelty needs an exception to historical confidence.

The problem becomes more acute as models become better. A weak recommender leaves room for accident because it does not know much. A highly accurate system can remove accident by steering users toward increasingly predictable choices.

Convenience can shrink the unexplored world.

That is not inevitable. Better models can also help people discover obscure items, cross domains, and search spaces too large for unaided exploration. Technology can widen possibility if its objective includes widening possibility.

The issue is not algorithm versus human.

It is recurrence versus exploration.

An algorithm can optimize either.

Most commercial systems have strong reasons to optimize recurrence because recurrence is measurable. If a user clicks another video similar to one already watched, the system receives a clean signal. If the user encounters something unlike anything in the history and develops a new interest over months, attribution is harder.

Metrics favor near-term resemblance.

Measurement becomes resonance infrastructure too.

What can be counted becomes trainable.

What can be trained becomes optimizable.

What is optimized becomes common.

Then its commonness produces more data.

A civilization increasingly mediated by adaptive systems may therefore experience a subtle statistical gravity toward legible patterns.

The gravity does not force identical outcomes. Generative systems create variation. Users surprise themselves. Creators resist trends. Markets shift. Cultures mutate. Yet the baseline environment becomes more historically conditioned because more decisions consult models trained on recorded behavior.

The world looks backward to decide what to show forward.

This gives the phrase *algorithm of return* two meanings.

The first is technical and ordinary: an algorithm returns a result.

The second is historical: the result often returns some transformed probability structure of the past.

Search does this. Recommendation does this. Prediction does this. Ranking does this. Generative modeling does this in a different way.

Not repetition in the crude sense.

Recurrence under variation.

A new song is recommended because it resembles an established taste. A new applicant is scored through patterns from old applicants. A new sentence is generated from statistical structure learned from old sentences. A new route is chosen using traces of old traffic.

The future is novel at the surface and inherited underneath.

This is close to how biological evolution works in a broad, non-identical sense: variation occurs within inherited structure. Again, the mechanisms differ radically. The analogy is about constraint, not equivalence.

The danger of analogy is always overreach, especially in a book already examining a theory built around similarity. So the distinction deserves emphasis.

Algorithms do not prove morphic resonance.

They prove that systems can be built in which previous similar cases influence later cases across distance and time, in ways invisible to the person experiencing the outcome.

That fact changes the burden of intuition.

A twenty-first-century person should be less impressed by the mere experience of uncanny relevance than a person from 1900. We now inhabit machines whose job is to manufacture relevance from distributed historical traces.

The uncanny has an industry.

This makes controlled experiments harder too. Participants live inside personalized information environments. Two people who appear socially unconnected may have been exposed to highly correlated content because algorithms placed them in similar clusters. A supposedly novel idea may already have diffused through model-generated text, recommendations, or search results. Information leakage no longer requires person-to-person contact.

Similarity itself can cause exposure.

That is a remarkable experimental confound for any hypothesis claiming that similarity causes nonlocal influence.

If two similar people receive similar algorithmic worlds, their convergence may be engineered by platforms neither researcher can observe fully.

The modern test of morphic resonance may therefore require digital isolation as well as physical isolation.

It may require synthetic stimuli generated after recruitment, audited exposure windows, and environments in which recommendation systems cannot quietly connect the cases.

This is not because algorithms have replaced mystery.

It is because they have become one of mystery's best impersonators.

They create distributed memory.

They couple similar cases.

They operate across distance.

They alter probabilities rather than issuing commands.

They become stronger as more data accumulates.

They can produce outcomes no individual designer predicted.

If someone described those properties without saying *software*, the language could sound almost metaphysical.

The difference is that we can inspect the servers.

At least in principle.

The larger lesson is not that every invisible influence has a database. It is that civilization has crossed a threshold. We are no longer merely discovering how the past shapes the future.

We are automating the shaping.

The next question is what happens when the machine doing the shaping is trained on nearly everything we have said before.
