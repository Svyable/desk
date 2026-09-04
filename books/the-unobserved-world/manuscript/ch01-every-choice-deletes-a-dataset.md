# Every Choice Deletes a Dataset

Imagine a company with two hundred applicants for ten jobs. The company keeps careful records. It knows where each applicant studied, what they have done before, what skills they claim, how they performed on assessments, which recruiter reviewed them, who received an interview, who received an offer, who accepted, how long each hire stayed, and how managers eventually rated their work.

After several years, the file is enormous. It looks like an ideal training set.

There is one column the company cannot fill.

How good would the rejected applicants have been if the company had hired them?

The blank is not an accident. It is produced by the decision itself. An applicant who never joins the company cannot generate an internal performance review. No later accounting system can recover that missing outcome exactly. Some rejected applicants will work elsewhere, of course, and fragments of their careers may become visible. But the employer does not observe the clean comparison it most wants: what would this same person have done here, in this role, with this manager, if the earlier decision had gone the other way?

The company learns from its hires. It does not learn symmetrically from the people it refuses to hire.

Now move the same structure into lending. A bank approves a loan and later sees whether it is repaid. If the bank declines the application, it does not get a repayment outcome for that loan because the loan never exists. Move it into medicine. A doctor orders a diagnostic test and receives a result. If a similar patient is not tested, the same diagnostic label may never be produced. Move it into bail. A judge releases a defendant, and the system can observe whether that person returns for court. Detain the defendant, and the system cannot observe whether that person would have returned if released.

These are different domains with different ethics, laws, incentives, and remedies. They share an informational structure: the action determines whether the label appears.

Machine-learning researchers call one version of this the selective labels problem. The phrase is useful because it shifts attention away from the model and toward the process that created the dataset. The missing information is not simply a clerical gap. It reflects an earlier selection rule.

That distinction matters. Ordinary missing data is everywhere. A survey respondent skips a question. A sensor fails. A record is lost. Those problems can be severe, but they are not necessarily caused by the decision we later want to evaluate. Selective labels are more troublesome because the data-generating process and the decision process are entangled. The system is learning from a world that its own earlier choices helped produce.

In a 2017 paper on selective labels, Himabindu Lakkaraju, Jon Kleinberg, Jure Leskovec, Jens Ludwig, and Sendhil Mullainathan used bail decisions to make the problem concrete. Whether a released defendant fails to appear can be observed only when a judge releases that person. For defendants whom judges detain, the relevant release outcome is unavailable. If you want to compare a prediction system with judges, you cannot naively score the model on everyone and call the answer fair. The ground truth exists selectively.

The deeper point is not about bail. It is that a dataset can contain millions of labels and still omit exactly the cases where the historical decision-maker was most skeptical.

This creates a strange asymmetry in institutional memory. Successes are often richly documented because success grants access. Failures of chosen options are also documented because the institution tried them. But the success of an unchosen option is invisible by definition.

That means institutions can learn that they were wrong about what they chose. They have a harder time learning that they were wrong about what they never chose.

The asymmetry changes how we should read almost any administrative dataset.

A table of employee performance is not a table of the people who could have performed. It is a table of the people the hiring process allowed to perform. A table of loan defaults is not a table of everyone who could have borrowed. It is a table of contracts the underwriting process allowed to exist. A table of diagnoses is not a census of disease. It is a record of symptoms that reached care, clinicians who noticed, tests that were ordered, and conditions that were recorded.

The denominator is partly institutional.

This sounds like a technical caveat until a dashboard turns the selected sample into a claim about the world. “People like this succeed.” “Customers like that default.” “Applicants from this background rarely reach senior roles.” “Users do not want this content.” Each statement may be supported by observed data. Each also needs a hidden preface: among the cases our previous system exposed enough to observe.

Sometimes that preface changes nothing.

Sometimes it changes everything.

This is why a blank label should not be treated as zero. No performance review is not poor performance. No repayment record is not a default. No diagnosis is not no disease. No stream is not dislike. No application is not lack of demand.

The non-event is ambiguous.

Operational systems hate ambiguity because they must compress it into action. A blank becomes a low score, an exclusion rule, a default assumption, or a missing value handled by the model. That may be necessary. What is dangerous is forgetting that the compression happened.

The blank has a history.

Suppose a recruiter has a bias, explicit or subtle, against applicants from an unfamiliar college. Those applicants rarely get interviewed. Because they rarely get hired, the firm accumulates little internal evidence about how people from that college perform. Years later, an analyst builds a model from historical company data. The model sees abundant examples from familiar schools and sparse evidence from the unfamiliar one. If the model is optimized to predict performance from the observed history, uncertainty about the unfamiliar group can easily be interpreted as lack of proof rather than proof of possibility.

Nothing requires the model to reproduce the old bias. Good modeling, careful design, outside data, fairness constraints, exploration, or different objectives can change the outcome. But the history has not arrived neutral. The old boundary is embedded in what was allowed to become known.

This is one reason the phrase “data-driven” deserves more scrutiny than it usually receives. Data is always driven by something too.

A hospital's records are driven by who arrives, who can access care, which symptoms patients report, what clinicians notice, which tests are ordered, which billing codes are used, which patients return, and which outcomes the system is able to track. A platform's behavioral data is driven by what the interface displayed, in what order, under what defaults, after which previous recommendations. A scientific literature is driven by which projects were proposed, funded, completed, submitted, accepted, and preserved. A labor dataset is driven by hiring, retention, promotion, and measurement practices.

The more consequential the selection, the less sensible it is to imagine the resulting data as a passive photograph.

It is closer to a garden than a camera. The institution sees what grew after a long sequence of planting, pruning, watering, and removal. A beautiful inventory of the garden can still tell you very little about seeds that were never planted.

The metaphor has limits. People are not seeds, and institutions are not omnipotent gardeners. Applicants build careers elsewhere. Borrowers find other lenders. Patients recover or deteriorate outside the health system's view. Cultural work travels through informal networks. Outcomes leak across institutional boundaries. That leakage is useful. It means the unobserved world is not universally unobserved.

But from the perspective of any one decision system, the missingness is real enough to shape what it can learn.

The leakage itself can be designed for.

An employer may be able to observe whether rejected applicants later thrive elsewhere, imperfect though the comparison is. A lender can use bureau information generated by other institutions. A hospital can link later outcomes across settings under appropriate legal and privacy safeguards. A school can observe transfer or later-course performance. A platform can ask users what they discovered outside its recommendations.

External outcomes do not recreate the lost counterfactual. The applicant who succeeds elsewhere did not work under the original manager. The borrower may receive a different product. The patient may enter a different care system. The user may encounter the item in a different context.

Still, external evidence can keep the institution from treating its own field of view as complete.

That distinction—between recovering the exact counterfactual and widening the evidence base—will matter throughout the book. We rarely get the first. We can often do more of the second.

Consider the temptation that arrives after a model is deployed. The new system is more accurate on held-out historical data. It produces a score for each applicant. Managers like its consistency. They use it to concentrate interviews among the highest-ranked people. This may improve immediate hiring efficiency. Fewer recruiter hours are spent on candidates with weak predicted odds.

The following year, the company has even more performance data from high-scoring candidates and even less from low-scoring ones.

If the score is mostly right, this feels excellent. If it has a blind spot, the blind spot can become harder to detect because the system reduces the number of cases that could have contradicted it.

The model's prediction is no longer only a description. It is part of the mechanism that chooses the next training set.

That sentence is the hinge for the whole book.

Traditional predictive evaluation often imagines a fixed distribution: learn from some historical examples, test on other examples drawn from the same underlying world, then deploy. Real institutions are less polite. Deployment changes behavior. Behavior changes exposure. Exposure changes outcomes. Outcomes become labels. Labels become new training data. The arrow comes back around.

Sometimes the loop is beneficial. A fraud detector catches more fraud, investigators learn new patterns, and the detector improves. A spam filter identifies new attacks and adapts. A recommendation system learns a user's changing preferences. Feedback is why adaptive systems are powerful.

The issue is whether the feedback includes enough information about the alternatives the system is suppressing.

If a spam filter quarantines a message, a user may still retrieve it and mark it safe. The system can get corrective feedback. If a recruiter never interviews an applicant, there may be no equivalent event that says, with confidence, this person would have become exceptional here. Some domains provide easy labels for rejected actions. Others do not.

The distinction changes how much confidence we should place in self-improvement.

A system cannot learn from feedback it has engineered out of existence.

There is a second reason this matters for machine learning: historical test sets can preserve the old selection policy even when the new model looks independent of it.

Suppose the training data and the held-out evaluation data are randomly split from the same archive. This is good practice for measuring predictive performance on that archive. It does not automatically tell us how the model will behave on people the historical policy rarely admitted into the archive's labeled portion.

The evaluation can be statistically clean and institutionally selected.

This is not a criticism of train-test splits. It is a reminder that validation answers a question defined by the data-generating process. If the labeled population excludes difficult regions, held-out accuracy may say little about those regions because they are scarcely represented in both halves.

The model can pass the test it was given.

The institution may still be asking the wrong test.

That is why distribution support matters before deployment. Where does the new population resemble the observed one? Which applicant types, patient presentations, borrowers, creators, or policy contexts sit near the edge? Which scores are based on dense histories and which on extrapolation? Where does the model appear precise because the evaluation contains few contradicting cases?

These are questions about the shape of evidence, not only its quantity.

A billion rows can have a narrow shape.

This is not a new discovery. Causal inference has always been built around missing alternatives. Paul Holland's influential 1986 paper, “Statistics and Causal Inference,” formalized a tradition in which causal questions are defined by potential outcomes: what would happen under one treatment and what would happen under another. The difficulty is immediate. For a particular unit at a particular time, only one potential outcome can be observed. Holland called this the fundamental problem of causal inference.

The word fundamental is earned. It is not a data-quality problem that goes away when storage becomes cheap.

Suppose we want to know whether a training program increases wages. For each person, we can imagine a wage after participating and a wage after not participating. We never observe both versions of the same person's life under perfectly identical conditions. We see one. The causal effect for that individual is defined by a difference that reality refuses to display directly.

Randomized experiments help because, across many people, assignment can make the treated and untreated groups comparable in expectation. We can estimate an average effect without observing both outcomes for one person. Other research designs exploit natural experiments, discontinuities, instrumental variables, matching assumptions, and structural models. Each method has conditions. None opens a portal to the alternative timeline.

Selective labels add an institutional twist to this old problem. The treatment is not merely assigned somehow; it may be assigned by the very decision rule we want to improve. The observed sample therefore contains the judgment of the past.

That can produce a dangerous confusion between “we have not observed this working” and “we have observed this not working.”

The two statements look similar in a meeting. They are opposites in a dataset.

A treatment repeatedly tried and repeatedly unsuccessful produces negative evidence. A treatment never tried produces uncertainty. A candidate repeatedly failing assessments produces evidence. A class of candidates rarely assessed produces missing evidence. A product recommendation shown often and ignored produces evidence. A product never shown produces very little. An urban intervention piloted in several contexts and failing has a different status from an intervention dismissed before a pilot.

Institutions often collapse uncertainty into a low score because operational systems need rankings. A queue cannot sort on philosophical nuance. A hiring team needs a slate. A lender needs an approval threshold. A doctor must decide whether to order the test. An app needs to show something in the next slot.

The necessity of decision does not remove the difference between bad evidence and absent evidence.

It makes the difference more important.

There are at least three ways a system can respond to an uncertain option. It can reject it. It can accept it as though uncertainty were optimism. Or it can treat uncertainty itself as information relevant to the choice, sometimes giving a plausible but underexplored option a chance precisely because learning has value.

The third response is familiar in bandit algorithms, clinical trials, A/B testing, and parts of science. It is less familiar in the everyday rhetoric of prediction, where the goal is usually framed as picking the best option according to current estimates.

That framing is incomplete whenever today's choice changes tomorrow's evidence.

Think about a restaurant that has eaten the same excellent dish every Friday for ten years. If the only goal is tonight's expected satisfaction, ordering the familiar dish is sensible. If the menu has changed repeatedly and the restaurant would like to know whether something better now exists, perpetual repetition has a cost. The customer is not only consuming dinner. The customer is deciding whether to buy information about the menu.

Institutions do the same thing with much higher stakes. Every allocation is partly consumption and partly measurement.

An interview consumes recruiter time and also measures a candidate more deeply. A diagnostic test consumes money and patient attention and also produces information. A small policy pilot consumes administrative capacity and also measures a mechanism. A research grant consumes public or philanthropic resources and also creates a chance for a hypothesis to become evidence. A recommendation consumes a moment of audience attention and also reveals a response.

The cost-benefit calculation changes when both outputs are acknowledged.

This does not mean “try more things” is always the answer. Exploration can be expensive. It can expose people to inferior choices. It can be manipulated by actors who demand endless chances after strong negative evidence. It can become an excuse for arbitrariness. It can conflict with equality, consent, or safety. Some uncertainty is irreducible or not worth reducing.

The point is not to maximize experiments. It is to stop pretending that refusing to experiment is informationally free.

An institution that always chooses the current winner can gradually lose the ability to recognize a new winner.

That loss rarely appears on a quarterly dashboard. The chosen options may continue performing well. Accuracy on the observed distribution may improve. Decision times may fall. Variance may shrink. Managers may see fewer embarrassing outliers.

The missing evidence does not file a complaint.

That is what makes the problem interesting. We are accustomed to looking for failures that produce visible damage. A bridge collapses. A model generates false positives. A policy costs more than promised. The unobserved-world problem is quieter. The system can work exactly as designed while reducing the conditions under which it could learn that the design should change.

The failure is not an error inside the prediction.

It is an error in what the institution allows itself to find out.

One useful way to detect this error is to ask for the lost denominator.

How many plausible candidates never received the measurement stage? How many borrowers near the boundary generated no direct outcome? How many items were eligible but received essentially no exposure? How many proposals were judged worth discussing but never received enough resources to test the question? How many people began an application and left before entering the official dataset?

The denominator will rarely tell us who should have been chosen.

It tells us where the institution's confidence rests on a small observed fraction of a larger possible population.

That can be enough to change the next research question.

Instead of “is the model accurate?” ask “where is accuracy actually identified?” Instead of “do rejected applicants perform worse?” ask “which rejected applicants ever generate comparable outcomes?” Instead of “users do not engage with this category” ask “how much exposure did the category receive, and under what rank positions?”

The questions become less convenient and more causal.

That is progress.

Later chapters will move into concrete systems where researchers have measured pieces of this effect. In hiring, a 2026 study treats interviewing explicitly as an exploration problem. In education, a randomized study across seven colleges shows that selectively observed labels can materially distort prediction in one subject while mattering much less in another. In medicine, natural variation in testing helps researchers study patients physicians leave untested. In recommendation systems, platform researchers have tried to balance immediate relevance against longer-term diversity and discovery. In science funding, some institutions have begun using partial lotteries when expert review cannot reliably separate proposals above a quality threshold.

The details differ enough that they resist one policy prescription. That is useful. A book that found the same answer everywhere would probably be hiding the difficult parts.

The common starting point is enough: before asking what the data says, ask which decisions had to occur for the data to exist.

That question changes the meaning of evidence.

It turns the rejected applicant, the declined borrower, the untested patient, the unplayed song, and the unfunded proposal from empty spaces into epistemic facts. We do not know what would have happened. That ignorance has a cause. Sometimes the cause is unavoidable. Sometimes it is a reasonable trade. Sometimes it is a boundary inherited from the past and mistaken for knowledge.

A dataset is not only a collection of answers.

It is a map of the questions an institution gave reality a chance to answer.
