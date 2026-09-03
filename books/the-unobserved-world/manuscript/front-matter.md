# The Data We Never Get

There is a familiar ritual at the end of a consequential decision. The meeting finishes. The applicant hears yes or no. The patient gets a test or does not. The loan is approved or declined. The school makes a placement. The grant committee draws a line through a ranked list. A recommendation system chooses what appears at the top of a screen. Then time passes, outcomes arrive, and somebody opens a spreadsheet.

The approved borrower repaid. The person who was hired became a strong employee. The patient who was tested had no heart attack. The student who entered the advanced course passed. The song that was recommended was played again. The funded laboratory published a useful result. These observations become evidence. They are discussed in meetings, fed into dashboards, summarized in research, and eventually used to improve the next round of decisions.

The spreadsheet looks like a record of reality.

It is also a record of what the institution allowed to happen.

The borrower who was declined usually does not produce a repayment history for that lender. The applicant who was never interviewed cannot become a successful hire there. The patient who was not tested will not generate the same diagnostic evidence as the patient who was. The proposal that was not funded cannot produce the project the committee might later have judged. The song that was never surfaced cannot reveal how a large audience would have responded if it had been given a chance.

This sounds obvious when stated plainly. It becomes much harder to see once the observations have accumulated into a large dataset. Rows confer authority. A million records feel like a million pieces of the world. But size does not repair the particular absence this book is about. You can collect exquisite detail about the roads you took and still know very little about the roads you repeatedly refused to enter.

Statistics has dealt with versions of this problem for a long time. To ask whether an action caused an outcome is to confront a simple impossibility: the same person cannot, at the same moment and under exactly the same circumstances, both receive an intervention and not receive it. We observe one path. The alternative becomes a counterfactual. Experiments, natural experiments, careful models, and other methods are ways of learning about that missing comparison without pretending we can watch both histories unfold for the same individual.

Modern decision systems add another layer. A prediction no longer sits harmlessly beside the world. It often determines access to the world that will later be measured.

A model ranks applicants, so some receive interviews and some do not. A risk score influences testing, so some illnesses become visible and some remain initially hidden. A recommender selects media, so some cultural objects receive enough exposure to develop a measurable audience. A funding process selects research, so some hypotheses get the equipment, staff, and time required to become evidence. The prediction helps make the sample from which the next prediction will learn.

This creates a peculiar kind of competence. A system can become very good at estimating outcomes among the cases it continues to choose while becoming steadily less informed about the cases it rarely chooses. It can improve its answers inside a shrinking world.

The danger is easy to misdescribe. It is not that algorithms are always conservative. They can find neglected patterns, widen access, and make decisions that are less biased than human judgment. Nor is the problem unique to machine learning. A human institution that hires only from familiar schools, treats only familiar symptoms, funds only familiar methods, or pilots only familiar policies can create the same blindness. Computers make the issue more important because they can make selection consistent, fast, and pervasive. They can turn yesterday's boundary into tomorrow's training data with very little friction in between.

That is why the subject of this book is not artificial intelligence in the narrow sense. It is the architecture of learning in a world where decisions increasingly determine what becomes observable.

Every institution has two outputs, although only one usually appears on the dashboard. The first is the immediate result of its decision: the hire, the loan, the treatment, the ranking, the recommendation, the funded proposal. The second is the evidence environment it leaves behind. A decision changes what can be learned later.

Sometimes this second output does not matter much. If an option is clearly unsafe, illegal, dominated, or absurdly expensive, there is no obligation to try it merely to make the dataset more complete. We do not need to sample every cliff edge to learn that falling is dangerous. The world contains real constraints, and good judgment often consists of refusing bad experiments.

But many important decisions occur far from those clear edges. They involve several plausible candidates, treatments, policies, ideas, products, or strategies under uncertainty. In those settings, the habit of always choosing the option with the best current estimate has a hidden cost. It converts uncertainty into exclusion before the uncertainty has had a chance to teach us anything.

Engineers and computer scientists have a clean name for one version of the tension: exploration versus exploitation. Exploitation uses what we currently believe to be best. Exploration chooses, within bounds, actions that can teach us more. A restaurant exploits when it keeps ordering the dish it already knows it likes. It explores when it tries another dish that might be worse and might be better. The example is harmless enough to make the logic feel trivial. The stakes change when the action is an interview, a diagnostic test, a credit decision, a classroom placement, a scientific grant, or the allocation of public money.

Then exploration acquires a moral weight. Information is not free. Somebody lives inside the experiment.

This is where simple celebrations of experimentation fail. A patient is not a slot machine arm. A job applicant is not an interchangeable data point. A borrower can be harmed by both reckless credit and unjustified denial. Randomness can distribute opportunity fairly in one setting and distribute danger irresponsibly in another. The fact that an action would reduce uncertainty does not make the action legitimate.

The right question is narrower and harder: after safety, rights, consent, law, and basic competence have bounded what may be tried, how much variation must a system preserve in order to keep learning?

That question turns out to reach surprisingly far.

It reaches into hiring because an employer learns about worker quality principally from people it employs. It reaches into credit because repayment is observed after lending. It reaches into medicine because diagnostic evidence is shaped by who gets tested. It reaches into education because placement changes both what students experience and what performance later means. It reaches into recommendation systems because exposure creates the behavior used to train the next recommendation. It reaches into science because funding determines which hypotheses acquire the resources required to generate results. It reaches into government because policy creates its own constituencies, routines, and evidence, while untried alternatives remain easier to dismiss precisely because they have not been tried.

It also reaches into ordinary organizational life. A company can become so efficient at choosing the kind of project that has succeeded before that it stops discovering other kinds of success. A newsroom can learn what its existing audience clicks while losing the audience that might have existed for work it stopped publishing. A school can optimize for metrics produced by its current placements. A city can perfect a procurement process around vendors whose capabilities are visible because they already win procurement.

The more carefully these systems measure themselves, the more confident they can become. Measurement is not the antidote if the measurement process inherits the selection process.

There is no conspiracy in this. Usually there is no villain. In fact, the pattern is most dangerous when every local decision is defensible. The recruiter selects the candidate with the strongest predicted odds. The lender protects capital. The doctor avoids an unnecessary test. The editor commissions what readers have historically liked. The funder backs the proposal with the strongest score. The product team serves the recommendation most likely to be clicked. Each decision can make sense on its own.

The cumulative result can still be an institution that knows more and more about less and less.

James March, writing about organizational learning in 1991, described the tension between exploiting old certainties and exploring new possibilities. His concern predated modern machine-learning systems, but the warning travels well. Adaptive processes can become very good at refinement. The returns to refinement are immediate and visible. The returns to exploration are delayed, uneven, and often look like failure because many experiments fail. Organizations therefore have a structural temptation to consume the variation that made earlier learning possible.

A world of prediction engines intensifies that temptation because exploitation can now be automated at scale. The best current estimate can be computed for every transaction, every applicant, every patient, every user, every moment. That capability is valuable. It is also new enough that we have not fully adjusted our institutions around its side effects.

One side effect is that the future can become less observable.

Not literally. Tomorrow will still happen. People will keep living lives outside any one model. New firms will form. Illness will appear. Songs will spread through friends. Scientists will pursue ideas after rejection. Rejected borrowers may obtain credit elsewhere. No institution owns the whole future.

But institutions can reduce their own access to disconfirming evidence. When selection becomes consistent across many institutions—because they share similar data, vendors, rankings, incentives, benchmarks, and professional assumptions—the missing territory can grow. The same candidate can look unconventional everywhere. The same research proposal can appear too risky to every committee. The same neighborhood can fail every investment screen. The same unfamiliar style can be downgraded by every recommender trained on similar behavior. What was once one firm's blind spot can become a system's blind spot.

The pages ahead are an attempt to see that blind spot while it is still forming.

The first chapters stay close to the statistical problem. Later chapters move through domains where the stakes and remedies differ. Some of the most interesting evidence does not show algorithms making things worse. It shows that algorithms designed with exploration in mind can sometimes outperform both human practice and purely exploitative models. Other evidence shows the limits of the book's thesis: variation alone does not guarantee learning; randomized evidence can be ignored; recommendation diversity is difficult to interpret causally; and a policy that works in a trial may not survive scale.

Those complications matter because the goal is not to win an argument against optimization. Optimization is one of civilization's great habits. We learn a better way to make something, then we repeat it. We reduce error. We standardize. We build memory into institutions so each generation does not have to rediscover what the previous one learned. A society that explored everything and exploited nothing would be a society of permanent prototypes.

The question is how to keep the prototype room from disappearing.

For most of modern history, inefficiency supplied accidental exploration. Human inconsistency, local discretion, geography, fragmented information, and plain ignorance caused different people to try different things. Much of that variation was unfair or wasteful. We should not become nostalgic for it. Yet as prediction makes systems more consistent, we need to notice that inconsistency was sometimes doing epistemic work. It was producing comparisons. It was letting unexpected people through. It was exposing organizations to outcomes their best rules would have filtered out.

The challenge is to replace accidental exploration with deliberate, bounded, ethical exploration rather than simply removing variation and congratulating ourselves on consistency.

That may mean running pilots before national policies harden. It may mean reserving a small share of an interview slate for candidates whose upside is uncertain rather than low. It may mean using natural variation in clinical practice to learn where testing errors occur. It may mean giving recommendation systems an explicit long-term discovery objective instead of assuming short-term engagement will produce a healthy cultural ecosystem. It may mean drawing lots among grant proposals that expert review cannot reliably distinguish. It may mean recording uncertainty rather than converting every score into false rank precision.

None of these techniques is universal. All of them share a modest idea: ignorance should sometimes change the decision.

Our systems are increasingly skilled at acting on what they know. The next discipline is learning how to act on what they do not know without pretending uncertainty is either wisdom or failure.

The world we observe is not the whole world. It is the residue of choices.

The rest of this book is about keeping enough doors open that reality can still surprise us.
