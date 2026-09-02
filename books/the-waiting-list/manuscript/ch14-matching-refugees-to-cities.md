# Matching Refugees to Cities

A refugee family can survive a war, cross a border, clear years of screening, and arrive in the United States only to encounter a decision that sounds mundane beside everything that came before it.

Where should they live?

The question is easy to underestimate because the map is familiar. New York, Phoenix, Minneapolis, Nashville, Boise, Buffalo. The names look like destinations. In practice, each one represents a bundle of opportunities and constraints: rents, schools, bus routes, employers, caseworkers, interpreters, doctors, relatives, religious communities, weather, licensing rules, and the chance that someone nearby speaks the same language.

The choice is not merely geographic.

It is an allocation decision about a scarce local resource: a place capable of receiving a particular person at a particular moment.

The United States does not simply scatter refugees across a map. Resettlement agencies review information about each case and compare it with what local affiliates can actually provide. Department of State guidance describes the process in practical terms. Agencies consider affordable housing, school capacity, medical care, employment opportunities, community services, and the presence of family or close friends. Family reunification carries special weight.

The list matters because it reveals what the mechanism is already doing.

It is matching people to places.

Not perfectly. Not with a single national objective. Not with a clean spreadsheet in which every need can be scored. But the structure is unmistakable.

One family may need specialized medical care.

Another may have a cousin in Ohio.

Another may include teenagers who need a school district with English-language support.

Another may need an apartment near public transportation because nobody in the household can yet drive.

Another may have skills that line up unusually well with employers in a particular region.

Another may have all of those needs at once.

The local side has constraints too.

An affiliate may have strong employment connections but no available apartments.

A city may have inexpensive housing but little public transit.

A school district may have experience serving children from one language community but not another.

A hospital may provide the right specialty care but sit two hours from the nearest resettlement office.

A small city may offer jobs and low rents but have a caseworker already carrying too many families.

The question, then, is not “Which city is best for refugees?”

There is no such city.

The question is which city is likely to be a good fit for this household, under the constraints that exist now.

That is a market-design problem even though no market price is clearing it.

And once economists saw the problem that way, an obvious next question followed.

Could data help?

In 2018, a group of researchers including Kirk Bansak, Jeremy Ferwerda, Jens Hainmueller, Dominik Hangartner, Duncan Lawrence, and Jeremy Weinstein published a paper in Science with a deliberately practical title: “Improving refugee integration through data-driven algorithmic assignment.”

Their starting point was simple. Refugee outcomes differ across locations, and those differences are not the same for every kind of person.

A city where one group tends to find work quickly may not be equally good for another. Labor markets differ. Social networks differ. Employers differ. The interaction between a person’s background and a place may matter as much as either one alone.

The researchers used historical data from the United States and Switzerland to estimate how refugees with particular characteristics had fared in different destinations. They then combined those predictions with an assignment procedure designed to respect practical placement constraints.

The retrospective results were striking.

In simulations using past data, the authors estimated that employment outcomes could have been substantially higher under data-informed assignments than under the placements that actually occurred. Depending on the setting, the modeled gains were on the order of roughly forty to seventy percent.

That number deserves immediate suspicion.

Not because the researchers hid what it meant. They did not.

Because numbers this large have a way of escaping their qualifiers.

The study did not rerun history with real families placed in different cities and then observe a forty-percent increase in employment. It used historical records to estimate counterfactual assignments. The model asked, in effect: given patterns in the data we already have, where would this person have been predicted to do better?

That is useful evidence.

It is not the same as a realized national intervention.

The distinction matters because prediction and assignment are different acts.

A model can predict that a family is likely to find work faster in one city than another.

The government or a resettlement agency still has to decide whether that prediction should control the placement.

Those are not the same question.

Imagine a family with an aunt in Detroit.

The model predicts a higher probability of employment in Dallas.

What should happen?

If the objective is employment alone, the answer seems easy.

If the objective includes family support, childcare, language help, emotional stability, housing assistance, and the ordinary human value of not arriving alone in a country you have never seen, the answer becomes harder.

A relative is not an inefficiency.

That sentence is important because optimization language can quietly redefine anything the objective function does not measure as a mistake.

Family ties are not noise in the data.

Neither is medical need.

Neither is a child’s education.

Neither is the preference of the person being placed.

A refugee is not a package to be routed through the cheapest warehouse.

The most interesting work in refugee matching therefore begins after the first impressive simulation.

What happens when the people being matched are allowed to have preferences?

This takes us back to the earlier chapters on school choice and the medical Match. In those systems, participants are not merely assigned to whatever location an authority considers efficient. They rank options. The mechanism tries to honor those preferences while satisfying other constraints.

Refugee placement creates a more difficult version of the same problem.

The planner may care about employment or another measurable outcome.

The refugee may care about proximity to relatives, climate, language community, access to a mosque or church, the size of the city, or whether a friend has told them that life there is manageable.

The receiving community has capacity limits.

The resettlement agency has operational constraints.

And the information is incomplete on every side.

A later line of GeoMatch research tried to combine outcome-based prediction with preference-based matching. One proposed mechanism allows a planner to specify a minimum acceptable expected outcome and then gives participants more room to be assigned according to their preferences within that constraint.

That is a subtle change.

The algorithm is no longer asking, “Where can we maximize employment?”

It is asking, “Can we preserve a minimum expected outcome while giving the person being placed more say over where they go?”

This is closer to the logic of a well-designed public institution.

Efficiency matters.

So does agency.

The tension cannot be solved by pretending one of them is irrelevant.

There is another problem with the original optimization idea: capacity is not fixed.

Suppose historical data show that refugees with a certain profile did especially well in one city.

A model begins sending more people there.

Rents rise.

The resettlement office becomes overloaded.

Employers fill the obvious vacancies.

Schools add students faster than they can add support staff.

The very act of following the prediction changes the condition that made the prediction attractive.

The map moves beneath the model.

This is common in allocation systems.

A school becomes oversubscribed because a ranking system identifies it as desirable.

A hospital develops a reputation for excellent outcomes and receives more complex cases.

A neighborhood becomes “up and coming” and loses the low rents that made it accessible.

A labor market that once absorbed workers easily becomes saturated.

Prediction creates pressure.

Pressure changes prediction.

Recent refugee-matching research has therefore studied dynamic assignment and balancing across locations rather than sending everyone toward the places with the highest modeled outcome. The objective is not merely to find the top destination for each case. It is to improve outcomes while avoiding the collapse of local capacity.

That is not a technical footnote.

It is the difference between designing a recommendation and designing a system.

The same distinction appeared in the vaccine line.

An ethical framework could identify priority groups. It could not manufacture appointments.

Here, a model can identify promising locations. It cannot manufacture apartments, caseworkers, teachers, or bus routes.

A matching system is only as good as the capacities it is matching into.

This is where the refugee case becomes more interesting than a generic debate about artificial intelligence.

The strongest question is not whether an algorithm can beat a human caseworker at predicting employment.

It probably can in some settings, especially when the human is relying on memory, intuition, or limited local experience across thousands of possible combinations.

The stronger question is what the algorithm is allowed to optimize.

Employment is attractive because it is measurable.

Employment matters enormously. A job provides income, routine, independence, language exposure, social contact, and often a faster path out of emergency assistance.

But employment is not integration.

A person can be employed and isolated.

A family can find work quickly and still live too far from medical care.

A teenager can have employed parents and still struggle in a school unable to support her language needs.

A refugee can take the first available job and discover that the schedule makes childcare impossible.

A household can achieve a strong short-run employment statistic by accepting work far below the adults’ prior skills, with little chance of moving upward.

A metric can be valuable without being complete.

That is one of the oldest traps in allocation design.

Once a system can measure something, it starts to behave as though the measurement is the purpose.

Hospitals can optimize throughput instead of health.

Schools can optimize test scores instead of education.

Companies can optimize clicks instead of satisfaction.

A refugee-placement system can optimize employment instead of a durable new life.

This does not mean employment should be discarded.

It means the objective needs humility.

The people designing GeoMatch have acknowledged this problem more directly than many commercial recommendation systems do. Their later research includes participant preferences, geographic balancing, and robustness to changing populations and local conditions. The program’s own public description frames future work around evidence of actual gains, not merely modeled potential.

That distinction is healthy.

A simulation can tell you where to look.

Deployment tells you whether the institution actually improves.

There is also a more uncomfortable risk.

Historical data contain history.

Suppose refugees from a particular country have had low employment rates in a certain region because local employers discriminate against them.

A predictive model sees the pattern.

It recommends sending fewer future refugees from that country to that region.

The prediction may be statistically accurate.

The policy may also entrench discrimination.

This is one of the central difficulties of predictive allocation.

The model can learn where people have succeeded.

It can also learn where institutions have failed them.

Those two things look identical in a training dataset.

A low predicted outcome can mean “bad match.”

It can also mean “bad environment.”

If the system responds only by rerouting people, the environment is never forced to improve.

This problem appears far beyond refugee placement.

A hiring model can learn that candidates from one school historically received fewer promotions.

A lending model can learn that people in one neighborhood historically defaulted more often.

A policing model can learn that arrests occurred more frequently on blocks where police were already sent more frequently.

Prediction can turn yesterday’s institutional choices into tomorrow’s apparently neutral probabilities.

Refugee matching makes the moral stakes unusually visible because the person being ranked has little reason to trust the history that produced the ranking.

A family fleeing persecution did not choose the labor market data available to the planner.

They should not be trapped by it without explanation or recourse.

So what would a defensible system look like?

It would start by recognizing that some constraints are hard constraints.

Family reunification should not have to defeat an employment model in a numerical contest every time.

Serious medical needs may rule out locations that otherwise score well.

Housing availability can make a theoretically excellent placement impossible.

Local affiliate capacity has to be real, not assumed.

Then the system can use prediction inside the remaining feasible set.

This is a much less glamorous description of artificial intelligence.

It is also more plausible.

The algorithm is not king.

It is a decision aid inside an institution.

That framing matters because the existing process already contains prediction.

Human beings look at a case and form expectations.

They know which local office has strong employers.

They know which city has apartments this month.

They remember that a particular community has interpreters for a given language.

They know which affiliate is stretched thin.

They may also rely on incomplete anecdotes, stale assumptions, or personal bias.

There is no neutral baseline called “human judgment.”

The current system is already a model.

It is simply a model distributed across meetings, memories, spreadsheets, phone calls, and professional intuition.

That is why the most useful comparison is not human versus machine.

It is informal prediction versus explicit prediction.

An explicit model has advantages.

Its variables can be inspected.

Its errors can be measured.

Its recommendations can be compared with outcomes.

Its performance can be tested across groups.

Its objective can be argued over in public.

It can be turned off.

Human judgment has advantages too.

A caseworker can notice a circumstance the dataset does not contain.

A local affiliate can report that three landlords just withdrew apartments.

A family can say that the place ranked first by the system is unacceptable to them.

A human can recognize when a formally valid recommendation is obviously wrong for a reason no one anticipated when the model was built.

The best design does not need to choose between these strengths.

It needs to decide when each one governs.

That requires auditability.

If a model recommends a location, someone should be able to explain the main reasons.

If a human overrides the recommendation, the override should be visible rather than disappearing into intuition.

If one demographic group is consistently routed away from high-opportunity places, the pattern should trigger review.

If outcomes change after a city receives more arrivals, the model should not continue treating old capacity as current capacity.

If refugees consistently reject or regret a certain class of placements, their preferences should become evidence too.

This is not merely good AI governance.

It is good mechanism design.

The system should reveal its tradeoffs.

Every allocation mechanism has them.

First-come-first-served favors those who can arrive first.

A lottery favors equal chance over targeted need.

A priority score favors whatever variables the score can see.

A matching algorithm favors the objective and constraints written into it.

Human discretion favors the judgment of the people holding discretion.

There is no escape from choice.

There is only the possibility of making the choice more deliberate.

Refugee placement also complicates the meaning of “success.”

The first ninety days matter because resettlement agencies are responsible for immediate reception and support during a compressed period. Housing has to be secured. Children have to enter school. Adults need documents, transportation, health appointments, English classes, employment help, and some way to understand a new city before it becomes merely the place where they are stranded.

But the consequences of placement last much longer.

A first job can become a career path.

A cousin nearby can become childcare.

A bus line can determine which jobs are reachable.

A school can shape a child’s language acquisition and social world.

A community organization can provide the first network outside the household.

A cheap apartment in the wrong location can isolate a family from every service they need.

Geography compounds.

That is what makes the assignment worth designing carefully.

The place is not just where the person sleeps after arrival.

It changes the set of future choices available to them.

The irony is that the refugee-placement problem looks, at first glance, like the kind of problem computers should solve easily.

There are people.

There are locations.

There are attributes on both sides.

There are constraints.

There is an outcome to improve.

Run the match.

But every line in that formulation contains a political decision.

Which attributes?

Whose constraints?

Which outcome?

Over what time horizon?

Who gets to express preferences?

Who gets to veto a placement?

How much inequality across receiving communities is acceptable?

How much predicted improvement is enough to justify overriding someone’s stated choice?

When does a model become stale?

Who is responsible when it is wrong?

The mathematics can clarify those questions.

It cannot answer them for us.

This is the deeper lesson of market design.

The algorithm is often the easy part.

The hard part is deciding what the institution owes the people inside it.

A refugee resettlement system owes more than efficiency.

It owes safety.

It owes a serious attempt at family connection.

It owes attention to health and education.

It owes respect for the receiving community’s actual capacity.

It owes the person being placed some meaningful role in the decision when that is possible.

And if it uses prediction, it owes a way to know whether the prediction helped.

That standard is higher than “the model is accurate.”

It should be.

The people being matched have already had enough decisions made for them.

The best version of data-driven placement therefore does not look like a machine discovering the one correct city for each refugee.

It looks more like a careful narrowing of possibility.

First remove the places that cannot meet essential needs.

Then account for family and other hard ties.

Then respect local capacity.

Then use evidence to distinguish among the feasible options.

Then give preferences weight.

Then observe what happens and revise the model when the world changes.

The point is not to make judgment disappear.

It is to make judgment better informed and easier to inspect.

That is a much quieter ambition than “AI solves refugee resettlement.”

It is also a more useful one.

The waiting list, in this case, is not a line at all.

It is a map covered with constraints.

The people moving across it are not interchangeable, and neither are the places receiving them.

The mechanism succeeds only when it remembers both facts.

The next scarcity problem will make that balancing act even more explicit.

Instead of matching people to cities, it asks who gets access to a machine almost everyone suddenly wants and almost nobody can build quickly enough.

The line is for computing power.