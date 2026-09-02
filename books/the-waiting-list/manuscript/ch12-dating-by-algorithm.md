# Dating by Algorithm

The most important match on a dating app happens before two people ever see each other.

One profile is placed in front of another.

That sounds less romantic than a swipe, a message, or a first drink, but it is the allocation decision that makes all the others possible. A person you never see cannot be liked. A person buried behind hundreds of other profiles is not in quite the same market as the person placed at the top of the screen. Before attraction becomes mutual, software has already decided whose existence deserves a chance to be noticed.

This makes dating apps an unusually revealing kind of matching market. They look, at first, like the natural descendants of Gale and Shapley. There are two sides. People have preferences. Matches require some form of mutual acceptance. The word itself—match—is everywhere.

But the resemblance is incomplete.

The marriage problem in the 1962 paper begins with a clean world that no dating app actually has. Every participant has a ranking. Every participant is in the same market. The mechanism can, in principle, compare those rankings and produce a stable assignment. A blocking pair can be defined. The process ends.

A dating app has none of that finality.

Most users do not arrive with a complete ranking of every plausible partner. They learn what they want while looking. They may behave differently at midnight than at noon. They may prefer people who prefer them, or become more selective after receiving attention. They can leave, return, change photographs, move cities, pay for additional exposure, exhaust their daily likes, or stop responding altogether. The app sees fragments of preference expressed through taps, messages, pauses, filters, and follow-through.

The market is not merely matching people whose preferences already exist.

It is helping create the preference data from which future recommendations are made.

That distinction is the chapter.

Hinge, for example, currently describes its “Most Compatible” feature in deliberately modest terms. The company says it tries to present one recommendation per day, using mutual dealbreakers, recent activity, and shared patterns in whom a user and others tend to like. Its “We Met” feature asks whether two people actually went on a date and whether the user would want to see that person again; Hinge says that feedback can inform later recommendations. The company also tells users that its algorithm learns from their activity over time.

There is real matching logic here. Mutual constraints matter. Reciprocal interest matters. Feedback matters.

Yet this is not deferred acceptance.

Nobody submits a final ordered list. Nobody waits for a centralized round to close. Nobody is guaranteed that an apparently better alternative will eventually reject them before the algorithm settles on a stable partner. The app is not solving for a stable marriage among everyone who opened it that week.

It is deciding what to show next.

That is closer to recommendation than assignment.

The difference sounds semantic until we ask what success means.

A school-assignment mechanism can be judged against a fairly legible objective. Did students receive seats under the stated priorities? Was truthful ranking safe? Did the mechanism avoid blocking pairs? The residency Match can be evaluated against similarly explicit rules, however contested its broader labor-market consequences may be.

A dating platform has no single terminal outcome to optimize.

A mutual like is a match in the product interface, but it is not necessarily a conversation. A conversation is not necessarily a date. A date is not necessarily a relationship. A relationship is not necessarily the objective of every user. Even among people seeking long-term partners, the platform can observe only a sequence of proxies.

The farther the outcome is from the screen, the harder it becomes to measure.

This creates a temptation familiar to every system that allocates attention: optimize what is easy to count.

Clicks are easy.

Likes are easy.

Replies are harder but visible.

A second date is much harder.

A durable relationship may disappear from the platform precisely because the product succeeded.

The best customer, in one sense, is the customer who leaves.

That is one reason Hinge’s public slogan—designed to be deleted—is more than branding. It names a genuine objective-function problem. A platform that wants to produce relationships is trying to optimize for an event that removes users from the marketplace.

Commercial incentives do not therefore point in one simple direction. It is too easy to say that dating apps merely want to keep everyone single because single users keep swiping. A platform that consistently fails to create promising encounters will lose users too. Reputation, subscription revenue, network thickness, safety, user satisfaction, and successful offline connections can all matter at once.

The question is which of those goals receives weight when the system decides who appears next.

That decision is consequential because attention in dating markets is extremely uneven.

A 2023 field experiment by Kuan-Ming Chen, Yu-Wei Hsieh, and Ming-Jen Lin studied recommendation inequality on a large dating platform in Taiwan. Their point was simple and uncomfortable: if a recommender primarily tries to predict who will receive a like, it can keep showing the same highly demanded people to everyone. The algorithm may be accurate about individual preferences and still make the market worse.

This is the dating-app version of sending every rider to the same driver.

Prediction is not allocation.

If a thousand users are each predicted to like the same person, showing that person to all thousand may maximize one-sided click probability. It does not follow that it maximizes reciprocal matches. The popular profile has limited attention. Messages pile up. Less exposed users receive almost none. The market becomes congested around a small set of people.

Chen and his coauthors tested a recommender influenced by two-sided matching theory against competing approaches in a randomized field experiment involving hundreds of thousands of accounts. Their matching-based design spread recommendation opportunities more broadly and produced more mutual matches in the setting they studied.

The important result is not that one algorithm should govern romance everywhere.

It is that a recommender can be individually plausible and systemically foolish.

The same distinction appeared in the Uber chapter. A locally attractive match can damage the state of the wider market. Dating adds another complication: the scarce resource is not only a person’s availability. It is that person’s capacity to notice and respond.

Human attention has a queue.

A profile receiving three likes can inspect all three. A profile receiving three thousand cannot evaluate each with equal care. The platform can therefore make someone less reachable by making them more visible.

Popularity can become congestion.

This is where the old language of stable matching becomes useful again, not because dating apps secretly run Gale-Shapley, but because matching theory forces the designer to remember that there are two sides.

A recommendation is not successful merely because the recipient likes what they see. The other person has preferences too.

That sounds obvious. Recommender systems were built, historically, in domains where the item did not have an opinion. A movie does not reject the viewer. A song does not become overwhelmed by listeners. A pair of shoes does not receive too many messages.

People do.

The reciprocal nature of dating means that the platform must care about the probability of return interest, not merely initial attraction. It also means the platform can influence what each side learns to regard as available.

Suppose a user repeatedly likes people who are unlikely to like them back. A pure preference predictor may keep supplying more of the same because those profiles reliably earn a positive swipe.

From the user’s point of view, the feed feels excellent right up until nothing happens.

A reciprocal system might instead surface people for whom mutual interest is more plausible. That could create more conversations. It could also feel paternalistic. The user might reasonably ask why the app is narrowing their possibilities based on its guess about who will reciprocate.

The conflict is subtle.

Should a dating app show you the people you most want?

Or the people with whom you are most likely to form a mutual connection?

Those are not necessarily the same list.

Once that distinction is visible, many product features stop looking trivial.

A filter changes the feasible market. A “dealbreaker” removes candidates entirely. A paid boost changes exposure. A limited-use signal such as a rose changes the meaning of attention by making some expressions of interest scarcer than others. A premium tier that places a profile higher in other users’ feeds is not merely a cosmetic subscription benefit. It changes the allocation of visibility.

Price has returned to the waiting list.

The dating market is not pay-to-marry, of course. Money does not compel anyone to reciprocate. But money can purchase more chances to be considered.

That matters because exposure is upstream of consent.

A paid boost cannot buy a yes.

It can buy more opportunities to ask.

The distinction resembles the ticketing chapter in reverse. There, a queue stood between the buyer and a scarce good, and payment could sometimes move a buyer ahead. Here, the scarce good is another person’s attention. The platform can sell position in that attention queue without selling the person at the end of it.

This is not automatically unfair. Advertising works this way. So do promoted job listings, sponsored marketplace results, and many other systems in which participants pay for visibility rather than guaranteed acceptance.

But the design choice should be named accurately.

A platform that sells greater exposure has created a hybrid market: preferences allocate some opportunities, algorithmic ranking allocates others, and money can alter who is seen first or more often.

The user experiences all three as “dating.”

The system experiences them as separate levers.

The hardest lever is learning from behavior.

Dating apps can ask users what they want, but stated preferences and revealed preferences need not agree. Someone may set a broad age range and consistently like people near one edge of it. They may claim distance does not matter and rarely respond to profiles from across town. They may say they value one trait and repeatedly choose another.

Recommendation systems are built to notice those patterns.

This can improve relevance.

It can also freeze yesterday’s behavior into tomorrow’s options.

A machine that learns what you have chosen before can become very good at preventing you from encountering what you have not chosen yet.

In ordinary commerce, that problem is annoying. If a streaming service keeps recommending the same kind of detective series, the cost is boredom.

In dating, the feedback loop touches identity, race, class, education, religion, age, disability, geography, and other traits bound up with social inequality.

The platform does not have to create those preferences to amplify them.

It only has to learn them faithfully.

Research on online dating long predates the swipe era and repeatedly finds structured patterns of racial preference and exclusion. Other work on interface design suggests that the way profiles are presented can itself change how strongly those biases influence choice. In a 2022 experiment using a simulated dating site, Zilin Ma and Krzysztof Gajos found that interface choices could affect racially biased decision-making; showing substantive profile information before names and photographs reduced bias in their experimental setting.

This does not prove that any specific commercial app is producing a particular discriminatory outcome.

It establishes the design problem.

An interface is not a neutral window onto preference.

Ordering information changes attention. Ranking profiles changes exposure. Filters change the feasible set. Feedback changes future recommendations. Once a system learns from behavior, past choices become training data for future opportunities.

The algorithm is therefore doing more than discovering a hidden, fixed “type.”

It is participating in the process by which a type becomes legible.

This is one place where the analogy to Gale-Shapley breaks almost completely.

In the stable-marriage model, preferences are inputs.

On a dating app, preferences are partly outputs.

The system observes them, predicts them, tests them, and can nudge them by deciding what evidence appears next.

A user cannot reveal a preference for a profile that never enters the feed.

The platform then cannot learn from a choice that was never offered.

This is the classic exploration problem in recommender systems, but with unusually personal consequences. A platform that only exploits what it already knows can become narrow. A platform that explores too aggressively can feel irrelevant or disrespectful of explicit constraints.

The line between useful discovery and unwanted exposure is partly a policy choice.

Hinge’s current public materials make this visible in miniature. The company distinguishes ordinary preferences from “Dealbreakers.” With a dealbreaker turned on, Hinge says it will only show profiles that satisfy that criterion. Without one, the system may prioritize the preference but sometimes show others.

That is a small mechanism-design decision with a large philosophical difference.

Is a preference a hard constraint or a soft signal?

The answer determines who is allowed into the market presented to the user.

The same issue arises in nearly every allocation system in this book. A kidney exchange has hard biological incompatibilities and softer priorities. A school system has eligibility rules and ranked preferences. A refugee-placement system has constraints and predicted outcomes. A dating platform has dealbreakers and recommendations.

The vocabulary changes.

The architecture does not.

There is a feasible set, a ranking process, a set of priorities, and an objective.

What makes dating unusual is that almost all four are partly hidden from the participant and partly learned from the participant.

That hiddenness can create folk theories.

Users invent explanations for why a feed changed, why matches disappeared, why a week produced no likes, or why certain kinds of profiles recur. Some of those explanations may be right. Many are impossible to verify from outside because commercial ranking systems evolve and are only partially disclosed.

This is fertile ground for myths about secret desirability scores.

Tinder’s history illustrates the problem. Public discussion for years revolved around the idea that every user carried a single attractiveness rating, often described as an Elo score borrowed from chess. Tinder itself later said it had moved away from relying on Elo as a central ranking method. The broader lesson is not about one discontinued score. It is about how easily a complicated recommendation system gets compressed into a single imagined number.

People want to know where they stand in the queue.

The product rarely gives them a queue number.

That uncertainty changes behavior. A person may swipe more, broaden filters, pay for visibility, revise a profile, or leave. The system then learns from those responses too.

There is another loop.

No centralized matching mechanism in the earlier chapters had this degree of behavioral reflexivity. A medical applicant can game a ranking list in limited ways, but the mechanism does not continuously alter the menu in response to micro-behaviors while the applicant is still choosing.

Dating platforms do.

That makes claims of algorithmic objectivity especially weak.

The system is not standing outside the market and measuring it.

It is inside the market, shaping the traffic it later interprets as evidence.

This does not make algorithmic dating uniquely sinister. Human dating markets were never neutral before smartphones. Geography decided who met. Churches, schools, workplaces, families, neighborhoods, class boundaries, race, nightlife, newspaper personals, friends, and sheer chance filtered the feasible set. Gatekeepers and social norms did enormous allocation work without publishing an objective function.

The phone did not invent sorting.

It made sorting programmable.

That can be an improvement.

A person in a thin local market can find people they would never have encountered offline. Sexual minorities can search across a much wider pool. Someone with unusual preferences can reach others who share them. Search costs fall. Market thickness increases.

Economic research on online dating increasingly suggests that these changes can alter whom people meet and, at scale, the composition of relationships. A January 2026 NBER working paper by Daniel Ershov, Jessica Fong, and Pinar Yildirim, using county-level measures across desktop and mobile eras, reports associations and causal estimates suggesting that online dating adoption affected marriage, divorce, and assortative matching differently across technological periods. The precise estimates depend on their empirical design and should not be inflated into a universal story about apps transforming society.

But the basic point is difficult to dispute.

Change the meeting technology and you can change the matching market.

This is why “the algorithm found my partner” is both too grand and too modest.

Too grand, because no recommender can manufacture reciprocal desire, trust, timing, or compatibility after two people meet.

Too modest, because deciding that two people should enter each other’s consideration set is not nothing.

It is the gate through which everything else must pass.

A good dating mechanism therefore cannot be judged only by whether its predictions are accurate.

It must also ask whether the market remains thick enough to function, whether attention is catastrophically concentrated, whether users can understand and control hard constraints, whether paid exposure overwhelms ordinary participation, whether feedback loops amplify social bias, and whether the platform’s success metric has any relationship to the outcome users actually value.

These goals conflict.

More exploration can reduce immediate click-through.

More reciprocal targeting can hide highly desired profiles from users unlikely to receive interest back.

More equality of exposure can reduce short-run prediction accuracy.

More transparency can make a system easier to game.

More personalization can make the feed narrower.

There is no neutral setting for any of them.

This returns us to a lesson from Chapter 6. In stable matching, who proposes matters. The mechanism’s formal symmetry can conceal distributional consequences.

Dating apps replace that clean proposer advantage with something messier: who is shown, who can signal, whose signals are scarce, whose profile receives privileged placement, and whose behavior trains the recommender fastest.

The platform does not assign spouses.

It assigns opportunities.

That may be the more important power.

A match requires two people to choose one another. But before either person chooses, somebody—or some system—has chosen the menu.

The next chapter moves from an intimate market to a public emergency, from recommendations that can be ignored to priorities that could determine who received protection first.

During the pandemic, the waiting list became visible again.

This time, nobody could pretend the ranking rule was merely a suggestion.