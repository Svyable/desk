# Discover Weekly

Every Monday, Spotify gives millions of people thirty songs they did not choose.

That is the charming part.

The stranger part is what happens afterward. A listener plays one track all the way through, skips another after twelve seconds, saves a third, ignores a fourth, follows an artist, wanders off to an album, or never opens the playlist at all. By Tuesday, those actions have become evidence. The recommender has not merely predicted taste. It has staged the encounter from which the next prediction will be learned.

The old routes into music made this easier to overlook because they were visibly messy. A friend lent you a record. A clerk put something on in a shop. A radio host slipped an odd track between two familiar ones after midnight. A local band opened for the act you paid to see. You bought an album because the cover was ridiculous. Somebody else's stereo leaked through a wall.

Those systems filtered too. Radio programmers, labels, record stores, critics, distributors, promoters, geography, money, and taste all decided what reached whom. There was never a neutral cultural feed.

Machine recommendation changed something else: the filter became able to watch the consequences of its own filtering and update almost immediately.

That makes music a useful place to study the unobserved world because the stakes of a single trial are usually low enough to permit experimentation, while the feedback loop is fast enough to see.

A track is shown. Behavior follows. Behavior becomes a label. The next track is chosen partly from that label.

What, then, is learned about the track that was never shown?

Very little.

It may be bad. It may be brilliant. It may need three listens. It may belong to a listener the system has not yet identified. It may sit just outside the listener's current habits and become obvious only after some other song makes the genre legible. It may be exactly right for a context the model cannot see.

No exposure, no behavioral label.

Recommender-system engineers have names for pieces of this problem. Cold start. Position bias. Exploration. Counterfactual evaluation. Candidate generation. Long-term value. The technical field is not under the illusion that a system can learn forever by showing only what it already understands.

The interesting question is what kind of uncertainty a successful system can afford to keep alive.

In 2020, Spotify researchers Ashton Anderson, Lucas Maystre, Ian Anderson, Rishabh Mehrotra, and Mounia Lalmas published a study of music-consumption diversity. The paper is useful partly because it contains two different kinds of evidence that are easy to blur together.

The observational part found that algorithmically programmed listening tended to be less diverse than organic listening. Listeners whose consumption became more diverse over time also tended to shift toward more organic listening. More diverse consumption was associated with outcomes Spotify cared about, including conversion and retention.

Those patterns are suggestive. They are not a randomized test of whether recommendation causes narrower taste.

The authors say so.

A person with narrow tastes may simply prefer programmed listening. A person who loves music enough to roam widely may both seek music organically and remain on the service longer. The direction of causality is not supplied by the correlation.

The experiment inside the same paper asked a narrower question.

For one week, 540,000 Spotify Free users who interacted with seven decade playlists—from the 1950s through the 2010s—were randomly assigned among three ranking approaches. One emphasized popularity. One emphasized relevance to the user. A learned ranker combined additional signals. For each playlist, the system selected roughly seventy to one hundred songs from a pool of more than four hundred.

The relevance ranking worked.

Compared with popularity ranking, it increased streams by 10.03 percent for broad-taste listeners and 25.66 percent for narrower-taste listeners. The largest gain appeared among the people whose listening history gave the system the tightest target.

That is a strong causal result. It is also a more interesting result when left within its boundary.

The experiment did not randomly assign people to a diverse musical diet and a narrow one, then follow their tastes for months. It randomized ranking and measured short-run behavior. It showed that relevance ranking can be especially effective for specialists. The longer-run relationship among recommendation, diversity, and retention remained unresolved.

This matters because a recommender can be extremely good at today's task and still leave open what repeated success does to tomorrow's evidence.

Suppose a listener has spent the last month playing a narrow band of electronic music. A relevance model can use that history to choose with impressive precision. Each successful recommendation then gives the model another example from roughly the same neighborhood. Nothing in that sequence proves the listener would reject music farther away. It proves that the nearby choices worked when they were shown.

The system is measuring a response inside a path it helped choose.

This is not an accusation. It is the experiment.

A second Spotify study makes the complication harder to flatten into a filter-bubble story. David Holtz and colleagues ran a randomized field experiment on podcast recommendations. The distinction matters: this was not Discover Weekly, and it was not a music experiment smuggled in under another name. Treatment users received podcast recommendations personalized from their music-listening histories. Control users received podcasts popular among demographically similar listeners.

Personalization increased podcast streams per user by 28.90 percent.

At the same time, average individual-level diversity of podcast consumption fell by 11.51 percent.

Aggregate diversity rose by 5.96 percent.

Three numbers, one awkward result.

Inside each listener's consumption, the personalized recommendations produced more concentration. Across listeners as a whole, consumption spread across a wider set of podcasts.

Was the system making culture more diverse or less diverse?

The question has no answer until the unit is named.

A platform can specialize each person's menu while broadening the population's menu. That may be good for niche creators. It may make individual listening more repetitive. It may improve relevance. It may create stronger subcultures with less overlap among them. The same intervention can move several forms of diversity in opposite directions.

The experiment also found spillover into listening outside the treated recommendation surface. Exposure in one place appeared to affect what people later consumed elsewhere in the app.

That is the more important result for this book.

Preference is not necessarily a fixed object waiting to be measured. Exposure can become part of the cause of later choice.

Anyone who has acquired a taste knows the feeling. A song that seems shapeless on the first play becomes obvious on the fifth. A friend tells you what to listen for in a genre and suddenly the noise separates into structure. One book creates appetite for another kind of book. A film teaches you the grammar needed to enjoy films you previously found slow.

Sometimes recommendation discovers preference. Sometimes it helps manufacture the conditions under which a preference can form.

That makes the usual language of prediction slightly misleading. The system is not only asking, What will this person like? It is also participating in the sequence that determines what this person will have had a chance to learn to like.

There is no reason to make this sinister.

A listener opening a running playlist may want familiar propulsion, not a cultural education. Somebody who has spent years developing a narrow taste may reasonably want the machine to respect it. Relevance is a real benefit. A platform is not obliged to maximize eclecticism, and a listener is not morally improved by sampling more genres.

The useful question is simpler: what objective is the system actually optimizing, and what evidence does that objective cause it to collect?

If success means a stream that survives thirty seconds, one set of recommendations will look good. If success includes long-run satisfaction, discovery, avoidance of fatigue, creator opportunity, return behavior, and user control, another set may look better. Those goals overlap, but not perfectly.

The ranking objective therefore does more than score the present. It determines which future labels become plentiful.

Spotify's own product history gives the easy anti-algorithm story trouble. In 2025, the company said Discover Weekly had generated more than 100 billion track streams and more than 56 million new artist discoveries per week, 77 percent involving emerging artists. Those are Spotify's numbers, not an independent estimate of cultural welfare, but they establish something important about scale: recommendation can be an enormous engine of discovery, not merely a machine for replaying the familiar.

The same anniversary update added genre controls that let listeners steer the thirty-track playlist toward one of several personalized directions.

That is a small product detail with a larger implication. Exploration need not be something an optimizer secretly does to a passive user. The user can help specify what kind of uncertainty is welcome right now.

Monday morning may be for comfort. Saturday afternoon may be for wandering.

This is one reason music is a friendlier laboratory than lending, medicine, or education. A recommendation list has room for a portfolio. One slot can be uncertain without making the whole experience uncertain. A listener can skip. The cost of a bad exploratory choice is often seconds.

The same logic does not transfer cleanly to a mortgage or a cancer treatment. That difference in stakes matters. But music shows what becomes possible when exploration is cheap and reversible.

The platform does not have to choose between perfect exploitation and random chaos.

It can spend uncertainty at the margin.

The word random is misleading here anyway. The most useful exploratory song for a listener who loves quiet piano is probably not a death-metal track selected to prove the recommender has an open mind. It may be an unknown composer whose work sits near the listener's history but has almost no behavioral data. The item is uncertain because the system knows little about it, not because it is maximally strange.

Good exploration can be adjacent.

This is where new creators enter the story.

A popular song arrives with a thick dossier: millions of impressions, skips, completions, saves, playlist additions, repeat plays, and audience clusters. A new song arrives with almost none of that. If the ranking system treats uncertainty as danger, the popular song receives another impression and another label while the new song remains data-poor.

Popularity then becomes both evidence and a mechanism for producing evidence.

This does not mean popular things are fake. Often they are popular because many people genuinely like them. Nor would a sane platform suppress a beloved song merely to level the statistical playing field.

The problem is subtler. Once exposure is selective, later behavioral evidence carries the history of that selection.

A million streams after a million prominent impressions tells us something different from a hundred streams after a hundred obscure impressions. A track buried at position twenty-five has not received the same test as the first track in the list. If the next model update reads plays as pure preference and forgets presentation, visibility can masquerade as quality.

Physical stores knew this problem before computers did. Shelf placement changes sales. Radio rotation changes familiarity. Book tables change browsing. Newspaper fronts change attention.

Digital recommendation closes the loop faster.

The high-ranked item gets seen. Being seen generates evidence. The evidence supports the high rank. The next round begins with more confidence than the first.

Randomized exposure, propensity methods, and presentation experiments exist partly to separate the effect of the item from the effect of where and how it was shown. The mathematics can be elaborate. The underlying question is not:

Did the person click?

It is:

What did the click mean, given how the opportunity to click was created?

This makes engagement data less natural than the phrase suggests.

Every play comes with a hidden prehistory. The platform chose the candidate set. It chose the ranking. It chose whether the track autoplayed. It chose the surface and the neighboring songs. It chose how often the listener had previously encountered the artist. Only then did the listener act.

The action is real. The label is interpreted.

The distinction matters most when evidence is sparse.

A new creator can have a bad first draw: a small audience, the wrong context, a few skips. If the system quickly concludes that the song is weak, exposure collapses before the estimate has had much chance to improve. A popular song can survive a bad pocket of users because it has evidence elsewhere.

An exploration policy treats those two uncertainties differently. It asks not only which option has the highest predicted response, but which promising option remains poorly known enough that another observation is valuable.

That observation has value even when the experimental song loses.

This is easy to forget because exploitation and exploration are charged differently in the accounting. The familiar track displaced from a slot has a known expected response. The uncertain track has an immediate opportunity cost. If it is skipped, the cost appears instantly. The benefit may arrive later as reduced uncertainty, a newly discovered audience, a correction to an overly narrow user model, or a better recommendation next week.

The dashboard sees the skip before it sees the knowledge.

A system that wants exploration to survive therefore has to record what the experiment learned, not only what the experimental item earned.

Did the test discover that an artist appealed to a listener cluster the model had missed? Did it establish that a supposedly adjacent genre really was a poor fit? Did it improve later recommendations? Did it reveal that a user was in discovery mode rather than background-listening mode?

Otherwise exploration will always look locally inferior. Its best outcomes are partly information, and information is useful in later decisions.

The problem gets harder when the listener's context is hidden.

A person's account can contain funeral music, children's songs, sleep tracks, gym playlists, party music, a spouse's favorites, and three weeks of obsessive listening to one new artist. Treating every action as a stable statement of identity can turn situational demand into personality.

Sometimes the cleanest way to improve observability is not a better inference model.

It is to ask.

A genre control, a discovery mode, a familiar mode, an instruction not to use a particular session for personalization, or an explicit request for more novelty gives the system information behavior alone may not contain. User agency can be an instrumentation layer.

The system learns with the listener instead of only about the listener.

Long horizons produce a different blind spot. A recommendation that feels slightly less relevant today may create a preference that pays off months later. A song may become a favorite only after repeated exposure. An artist discovered in one playlist may lead to albums, concerts, friends, or entirely different genres.

A one-week experiment is excellent at measuring one-week outcomes.

It cannot, by itself, tell us what a year of the policy does to taste.

That sounds obvious, but product systems naturally prefer fast labels. Immediate skips arrive by the millions. Long-term satisfaction is slower, noisier, and contaminated by everything else that happens to the listener. Creators release new work. Competitors intervene. People move, marry, age, tire of genres, discover scenes, and lose interest.

The answer is not to wait ten years before changing a playlist.

It is to stop pretending one metric has the whole horizon covered.

Immediate engagement can guard relevance. Return behavior can reveal fatigue. Surveys can capture satisfaction the clickstream misses. Individual diversity can show concentration inside a person's consumption. Aggregate diversity can show whether attention is spreading across the catalog. Creator measures can show whether new work receives a meaningful test.

The Holtz podcast experiment is a warning against collapsing those views into one number. Individual and aggregate diversity moved in opposite directions under the same treatment.

That is what a useful metric portfolio is for: not to produce a ceremonial dashboard, but to prevent one successful objective from explaining away every other consequence.

The loop extends upstream to creators.

Artists watch platforms. They learn which lengths, hooks, tempos, thumbnails, release cadences, genres, and collaborations travel. Labels watch even harder. If a distribution system rewards certain forms reliably enough, production drifts toward those forms.

The recommender is then learning from a cultural supply that has already begun learning the recommender.

This is the most consequential unobserved world in the chapter because the missing item may disappear before ranking.

The song that receives no exposure leaves little evidence.

The song that is never recorded leaves none.

Again, this is not unprecedented. Patronage shaped art. Radio formats shaped songs. Physical media imposed lengths. Touring economics, censorship, critics, distributors, and fashion all pushed creation in particular directions.

The novelty is the speed of the return signal. Distribution can now measure response continuously and send incentives back toward production while the next work is still being made.

A recommendation policy can become a production policy without anyone issuing a memo.

That is why the familiar argument over filter bubbles is too small for the problem. Recommendation need not imprison anyone in an aesthetic cage. It can expose listeners to millions of artists they would never meet otherwise. It can increase aggregate diversity while narrowing individual consumption. It can give niche work a market and simultaneously make creators chase whatever the ranking system currently rewards.

The interesting object is not the bubble.

It is the feedback system.

Does the system distinguish "nobody liked this" from "almost nobody saw this"?

Does it know when a user's narrow behavior reflects enduring taste and when it reflects today's task?

Can a new creator receive enough well-targeted exposure to become measurable?

Can a listener ask for surprise without sacrificing relevance everywhere else?

Does the company evaluate what an experiment taught, or only what it earned during the test window?

And when a ranking rule works spectacularly in the short run, does the platform keep any machinery capable of discovering that the rule is slowly changing the population it is predicting?

Music does not supply one answer. That is what makes it a better example than a morality tale about algorithms.

The 2020 ranking experiment says relevance can work extremely well, especially for listeners with narrower histories. The diversity findings in that study do not prove that recommendation caused narrowing. The separate podcast experiment shows that personalized exposure can change subsequent consumption, but even there diversity moves in opposite directions depending on whether we look at the individual or the population. Spotify's own current product design mixes algorithmic prediction with explicit user steering and describes Discover Weekly as a large discovery engine.

The evidence is untidy in exactly the right way.

A recommendation system can be useful, enjoyable, commercially successful, and genuinely good at discovery while still shaping the evidence from which it learns.

Those claims can all be true at once.

The design problem begins after admitting them.

A system that only exploits what it already knows eventually becomes dependent on a world it has helped make familiar. A system that explores indiscriminately becomes annoying and wasteful. The craft lies in preserving small, purposeful chances for the unknown to earn a label.

That is cheap in music compared with most domains in this book.

Which makes the final question harder, not easier.

When exploration costs only one slot in a thirty-song playlist, what excuse is there for letting uncertainty disappear without ever testing it?
