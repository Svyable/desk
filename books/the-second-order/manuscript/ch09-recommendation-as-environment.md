# Recommendation as Environment

A recommendation looks like an answer to a question.

You watched this, so perhaps you will like that. You bought these books, so here are three more. You listened to this song all week; the next one has a similar pulse. The interface makes the exchange feel almost private. A system has observed something about you and is trying to guess what you might want next.

That description is true for a moment.

Then the recommendation appears.

Now it is no longer merely a guess about preference. It is part of the set of things from which preference will be expressed.

The distinction is easy to miss because modern recommendation systems are unusually good at disappearing into ordinary use. A ranked feed does not announce itself as an intervention. The next video begins. A playlist continues. A product moves to the first row. A restaurant appears above another restaurant. The user experiences a sequence of choices, while the platform experiences impressions, clicks, watch time, skips, purchases, hides, shares, returns, and abandonment.

Those observations become evidence for the next sequence.

The model learns from behavior that the model helped produce.

This is not a defect peculiar to bad recommendation systems. It is the operating condition of successful ones.

A recommender has to show something in order to learn whether a person engages with it. Showing something consumes attention and changes what is available to be chosen. The system cannot observe a user's response to every movie, article, song, product, post, or person at once. It selects a small menu from a much larger world, then learns from what happens inside that menu.

The menu is an environment.

Once recommendation is understood this way, several familiar puzzles become easier to name. Why can a system become more confident while exposing a person to less variety? Why can historical click data make an algorithm look accurate even when the algorithm helped create the clicks? Why do some users seem easy to serve and others remain poorly represented? Why is it so difficult to decide whether an online trajectory reflects a person's prior preference or the sequence the platform placed in front of them?

The usual language of personalization encourages a one-way picture. A user has preferences. The system estimates them. Better estimates produce better recommendations.

In practice, the arrows run both ways.

Preferences influence behavior. Recommendations influence exposure. Exposure influences behavior. Behavior updates the model. The updated model changes exposure again.

By the second cycle, the data are already historical records of an interaction between person and system.

This is the recommendation version of the problem that appeared in medicine and policing. In medicine, treatment changes the outcome used to learn risk. In policing, patrol changes where offenses are discovered. In recommendation, ranking changes what can be clicked, watched, bought, or ignored.

The target does not sit still while it is measured.

One of the clearest demonstrations comes from Allison Chaney, Brandon Stewart, and Barbara Engelhardt. Their 2018 work studied what they called algorithmic confounding in recommendation systems. The phrase is useful because it identifies a problem deeper than ordinary prediction error.

Suppose a recommendation model is trained on behavior produced before the model was deployed. It estimates what users tend to like and begins recommending accordingly. Users are more likely to encounter the recommended items, so those items generate more interactions. Later, the system retrains on the expanded history.

That history now contains two things mixed together: what users might have chosen under some broader opportunity set and what the previous recommender made especially available.

The new model treats both as data.

Chaney and her coauthors used simulation to study repeated cycles of this process across several recommendation approaches. They found that feedback could make user behavior more homogeneous over time and could reduce utility, with the losses distributed unevenly. The point was not that every deployed recommender necessarily produces homogenization. It was that training on behavior already shaped by prior recommendations can make the system increasingly confident in a world partly of its own making.

This is an uncomfortable form of success.

If the model recommends an item, the user sees it, the user chooses it, and the next model learns that the item was a good recommendation, the loop contains real information. The person did choose the item.

What the loop does not reveal by itself is what would have happened under another exposure.

Perhaps the chosen item was genuinely the best available match. Perhaps it was merely good enough and prominently placed. Perhaps an unseen item would have been preferred. Perhaps repeated exposure made the familiar item easier to choose. Perhaps the user's taste itself changed through use.

Observed choice cannot answer all of those questions because choice requires a choice set.

This sounds obvious in a grocery store. Nobody concludes that a shopper's deepest preference is for the brands stocked on one shelf rather than the brands the store does not carry.

Digital systems can hide the shelf.

A feed may contain effectively unlimited content behind the screen, but the visible opportunity set is narrow. Ranking turns abundance into a sequence. The person cannot click what never appears, cannot watch what is buried far below the fold, and cannot meaningfully reject an alternative they never knew existed.

That makes absence difficult to interpret.

If a user never watches documentaries, does the user dislike documentaries? Or did the system learn early that comedy produced stronger immediate engagement and gradually stop offering documentaries? If a listener plays mostly familiar artists, is that a stable taste or a result of a playlist optimized for low skip rates? If a shopper repeatedly buys from the same sellers, is that loyalty or visibility?

The platform often has excellent records of action and weak records of unrealized possibility.

Recommendation therefore creates a missing-data problem with agency inside it.

The missingness is not random. The model decides much of what is missing.

This is why offline evaluation can be deceptive. A new recommender is often tested against historical interaction data. If it ranks highly the items that users previously clicked, watched, rated, or bought, it appears accurate.

But those historical interactions may have been generated under an earlier recommender.

The benchmark then rewards the new model for reproducing patterns created by the old one.

There are good reasons to use historical evaluation. Live experiments are costly. Platforms cannot expose users indiscriminately to poor recommendations just to make a clean dataset. Offline tests are fast, reproducible, and useful for eliminating obviously weak models.

The danger begins when replaying yesterday's environment is mistaken for measuring tomorrow's value.

A model can become excellent at predicting behavior inside a narrow exposure regime without knowing much about preferences outside it.

This matters because recommender systems do more than allocate existing demand. At sufficient scale, they allocate discovery.

A musician who appears in a playlist gains listeners who can later become direct fans. A seller shown in a recommendation row receives transactions that create reviews, sales history, and more evidence of relevance. A creator who receives early distribution accumulates engagement signals that can justify later distribution. A video that enters the next-up sequence becomes more likely to be watched, and the resulting watch history becomes evidence about both the viewer and the video.

Exposure can create the record that later rationalizes exposure.

This does not mean popularity is fake.

Popular things are often popular because many people genuinely value them. Recommendation can reduce search costs and help people discover items they would otherwise miss. Collaborative filtering is powerful precisely because other people's behavior contains information. If thousands of listeners who like two obscure records also like a third, showing that third record to a new listener can be a useful act of inference.

The second-order problem is not that the inference exists.

It is that the inference changes the evidence available for the next inference.

Over time, this can create a distinction between preference and path dependence that is difficult to recover from logs alone.

Imagine two identical new users arriving at the same platform. One receives an early sequence heavy in acoustic music because of a small random difference in the first few interactions. The other receives more electronic music. Both like several recommendations. The model updates. The first user's future menu becomes more acoustic; the second user's more electronic.

Months later their histories look like evidence of different tastes.

Perhaps they now do have different tastes.

The system may have helped produce the difference.

There is no contradiction here. Human preferences are not always fixed properties waiting to be measured. People learn what they like by encountering things. They acquire vocabulary. They become bored. They develop habits. They join communities. They learn that a genre they once dismissed contains subgenres. They watch one instructional video because of a practical need and discover a subject that becomes a hobby.

A recommender operates inside this ordinary process of taste formation.

That is why the most ambitious claim—that algorithms simply manipulate passive users—is too strong.

Users are not blank material. They search, resist, skip, unsubscribe, type URLs, follow friends, leave platforms, and arrive with histories formed elsewhere. They can deliberately train a feed or deliberately confuse it. They can choose familiar material because familiarity is what they wanted.

The environment acts on the person, but the person acts inside and outside the environment.

Research on YouTube illustrates why preserving that distinction matters.

The platform has been a natural focus for claims about recommendation and radicalization because its interface can generate long viewing sequences and because its recommender operates at enormous scale. Some audits have found pathways toward ideologically congenial, extreme, or misinformation-promoting content under particular experimental conditions. Those findings make it tempting to describe recommendation as a conveyor belt with a predictable destination.

Other evidence complicates the picture.

Homa Hosseinmardi and colleagues developed a counterfactual-bot approach to separate user choice from recommendation effects. In work published in 2024, they reported that, on average in the period they studied, relying exclusively on YouTube's recommender produced less partisan consumption than the observed consumption patterns of highly partisan users. They also found that recommendation could shift toward more moderate content after users changed what they watched, with different adaptation speeds across recommendation surfaces.

That result does not prove that recommendation is harmless.

It does something more useful: it demonstrates why the counterfactual matters.

A user who consumes extreme material and receives extreme recommendations may be experiencing amplification. The same observed pattern can also arise because the user repeatedly seeks extreme material and the system follows. Without a credible comparison to what the person would have consumed under another recommendation regime, the causal story remains uncertain.

The feedback loop makes correlation especially seductive because the algorithm and user continually respond to each other.

A feed can resemble a conversation in which both participants finish each other's sentences. Looking at the transcript later does not tell you which participant introduced the topic.

This has practical consequences for system design.

If a recommender only exploits what it currently believes, it can stop learning. A user classified too quickly may receive increasingly similar material, producing increasingly similar behavior, which appears to validate the classification.

Exploration is one way out.

The system deliberately shows some items whose value is uncertain. This may reduce short-run predictive confidence, but it creates information about alternatives. In the language of decision theory, the platform trades some exploitation of known high-value options for exploration of options that might be better.

That tradeoff is familiar in bandit problems, but recommendation gives it a human meaning.

Exploration can be annoying. A person who has spent months listening to string quartets may not appreciate an experimental block of death metal inserted for statistical hygiene. A shopper looking for a replacement dishwasher does not need an adventurous tour of appliance aesthetics.

The right amount of exploration depends on the cost of being wrong, the durability of preference, the size of the opportunity set, and the purpose of the interaction.

A music service and an emergency-information feed should not explore in the same way.

Nor should all users be explored equally without thought. If a system learns less about people whose tastes differ from the majority, aggressive exploitation can leave those users with persistently worse recommendations. But careless exploration can make them bear a disproportionate share of experimentation.

The feedback problem therefore intersects with fairness.

A recommender trained to maximize average engagement can improve the experience of users whose behavior is well represented while giving weaker service to users with unusual preferences. Chaney and her coauthors found unequal utility losses in their simulated feedback loops. Later work on mainstream bias has likewise examined how collaborative systems can perform better for users whose tastes align with common patterns.

This is a general feature of learning from other people: common behavior creates dense evidence.

Rare behavior creates sparse evidence.

When the model responds by showing mainstream items to uncertain users, it can make the evidence denser still.

The result can be self-reinforcing without anyone deciding that minority tastes should disappear.

The system is solving an uncertainty problem in the cheapest available way.

That phrase matters because recommendation debates often become moralized before the mechanism is understood. A platform may have commercial incentives that deserve scrutiny. Engagement objectives can reward outcomes that conflict with user welfare. But some narrowing can emerge even without a malicious objective, simply because exploiting well-estimated options is easier than learning about poorly estimated ones.

A design can be locally rational and globally narrowing.

The same logic applies to creators and suppliers.

A recommendation system does not only learn users. Creators learn the recommendation system.

They study thumbnails, titles, posting schedules, video length, opening seconds, keywords, product photos, price points, genre labels, and whatever else seems correlated with distribution. Some advice is folklore. Some is measured. Some is provided by the platform itself through analytics dashboards.

The content supply then adapts to the ranking environment.

This creates a second loop layered on the first.

Users respond to recommendations. The recommender responds to users. Creators respond to the recommender. The recommender then learns from content produced under those incentives.

Recommendation becomes environment twice: it shapes demand and supply.

This is where a narrow focus on personalization misses part of the institution being built.

A platform that rewards short viewing sessions may attract one kind of content. A platform that rewards completion may encourage another. A platform that measures comments heavily may favor material that provokes response. A marketplace that rewards conversion may change how sellers price and photograph goods. A music recommender that values repeat listening may affect which songs labels promote.

The model need not issue instructions.

Distribution is instruction enough.

Creators infer the rule from consequences.

That inference is noisy, which can make the adaptation stranger. When people cannot see the exact ranking function, they experiment. They imitate successful competitors. They follow consultants. They attribute normal variance to tiny changes. The ecosystem fills with theories about what the algorithm wants.

Some are wrong.

Wrong theories can still change the supply.

This means a recommendation system can alter its environment even when nobody has reverse-engineered it accurately. People only need to believe that certain behaviors affect distribution strongly enough to act on the belief.

The result resembles the policy problems from earlier chapters. A rule does not have to be perfectly understood to become a target.

There is another complication: objectives are rarely singular.

The public shorthand says platforms maximize engagement. Real production systems generally operate with multiple signals, constraints, and stages. A large-scale recommender may first generate candidates and then rank them. Different surfaces can use different objectives. Systems may incorporate satisfaction surveys, quality signals, diversity constraints, safety rules, freshness, business requirements, or penalties for particular outcomes.

YouTube's 2016 engineering paper by Paul Covington, Jay Adams, and Emre Sargin described a two-stage recommendation architecture with candidate generation followed by ranking. That paper is useful less because it reveals a timeless platform objective—it does not—than because it shows how far the actual machinery is from the cartoon of a single score sorting every video in existence.

Complexity does not remove feedback.

It makes attribution harder.

When a recommendation changes, the cause may lie in a user's recent action, a new candidate-generation model, a ranking update, inventory changes, policy enforcement, creator behavior, seasonality, or a global shift in what other users are doing.

The person sees a row of videos.

The row is the surface of a moving system.

This is why platform claims and platform criticism should both be careful with before-and-after data. If a company changes a recommender and harmful-content consumption falls, the change may have helped. If creators simultaneously alter behavior, users migrate, moderation rules change, and the content supply shifts, the causal decomposition becomes harder.

The same is true when harm rises.

Second-order systems punish simple stories.

They also create opportunities for better measurement.

Randomization can break parts of the loop. Platforms can vary ranking or exposure for a subset of traffic and estimate how behavior changes. Researchers can use audits, sock-puppet accounts, natural experiments, or counterfactual designs. Systems can log propensities—the probabilities with which items were exposed—so later analysts have more information about the policy that generated the data. They can preserve exploration traffic instead of optimizing every impression with the same objective.

None of these methods is free.

Randomization can impose costs on users. Audits may not reproduce the behavior of real people. Sock puppets can isolate algorithmic effects while missing social context. Logged propensities are only useful if the logging is accurate and the assumptions behind later estimation hold. A live experiment that measures clicks may still miss slower changes in satisfaction, knowledge, habit, or creator supply.

The measurement problem stretches with the time horizon.

Immediate engagement is easy to observe.

Preference formation is slower.

A user can click an item and regret the time spent. A sensational video can produce long watch time and lower trust in the platform. A recommendation can be skipped today and still introduce an artist the listener searches for next month. A marketplace suggestion can produce a purchase while crowding out a better seller who then leaves the platform.

The outcome depends on when you stop the clock.

This is why long-term recommendation quality cannot be reduced to next-click accuracy.

A model can be excellent at predicting the next action and poor at cultivating an environment a person values over time.

The phrase "user value" does not solve the problem. It moves the argument into measurement. Which user? Value measured how? Over what horizon? Does a platform count satisfaction after the session, return behavior next week, diversity of discovery, informed choice, money spent, time saved, or the absence of regret?

Different answers produce different environments.

A recommender is therefore partly a theory of what the platform believes should be made easy.

Even when the objective is entirely commercial, that theory has consequences beyond the score. A ranking system decides which alternatives are visible enough to compete. It decides where uncertainty will be tolerated. It decides how quickly yesterday's behavior should fade. It decides how much novelty a user must endure to discover something new.

These are design choices about the environment in which preference becomes observable.

The most robust systems make that environment legible enough to inspect.

They retain information about exposure, not only action. They distinguish organic search from algorithmic suggestion when possible. They measure outcomes on more than one horizon. They preserve some exploration. They test whether improvements survive outside the policy that generated the training data. They examine whether gains are concentrated among already well-served users. They watch the supplier side for adaptation.

Most importantly, they resist a category error.

A click is an event.

It is not a pure sample of desire.

It occurred at a position, at a time, inside a menu, after a history, under a ranking policy, in competition with whatever else was visible. The event is real. Its meaning depends on the environment that produced it.

Recommendation systems make this unusually clear because the environment can be rebuilt for every person, every session, every scroll.

The system asks what you want by changing what you can see.

Then it learns from your answer.

The next question is built from the answer to the last one.

After enough rounds, there may be no clean boundary between the preference the system discovered and the preference the system helped develop.

That is not necessarily manipulation.

It is interaction.

But once a model participates in the formation of the behavior it predicts, accuracy on the resulting behavior is no longer the whole achievement.

The harder question is whether the environment created by the predictions remains worth inhabiting.