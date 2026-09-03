# Placement

A placement test does not merely measure where a student belongs.

It helps decide what the student will encounter next.

That distinction is easy to lose because education is full of labels that sound descriptive: remedial, college-ready, advanced, honors, gifted, proficient, below basic. Each label seems to summarize a property the student brought into the room. Then the label becomes an assignment. The student enters a different course, receives different material, meets different peers, spends time on different prerequisites, and accumulates a different transcript.

The measurement becomes an intervention.

Years later, institutions look at outcomes by placement and ask whether the original decision was accurate.

The problem should now feel familiar. Students placed into college-level work generate evidence about success in college-level work. Students placed into remediation do not produce the same counterfactual record because they took a different path. If the institution trains a model on students who historically received a given placement, it may confuse the consequences of placement with evidence about who should have received it.

This is not a theoretical edge case. Peter Bergman, Elizabeth Kopko, and Julio Rodriguez studied algorithmic placement across seven colleges in a randomized experiment. Their work is valuable for several reasons, including a result that refuses to behave like a slogan.

Algorithmic placement substantially increased placement into college-level courses without reducing pass rates in the study. It generally, though not always, narrowed differences in placement and remedial-course taking across demographic groups. The researchers also used the experimental design to study selective labels.

They found that the selective-label problem nearly doubled prediction error for college English performance in their analysis.

For college math, selective labels had almost no impact on prediction error.

That difference may be the most important fact in the chapter.

A weak version of this book would take the English result and declare that selective labels corrupt education data. A stronger version has to explain why the same mechanism can matter dramatically in one subject and little in another.

The answer is not a universal rule. It is an empirical question about a particular decision process, label, student population, and predictive task.

This is what makes unobserved-world problems difficult. Missing outcomes are not equally consequential everywhere. Sometimes the selected sample is different enough from the target population that the model is badly distorted. Sometimes observed features capture most of what matters, the selection boundary creates little additional bias, or the relevant relationships generalize well. The existence of selection does not tell us the size of the problem.

It tells us where to look.

Education provides an especially rich place to look because placement systems can alter both learning and motivation. A student assigned to a remedial course may receive needed foundations and benefit. Another student may be delayed by material they had already mastered. A student placed directly into a college-level course may rise to the challenge, struggle, receive tutoring, withdraw, or discover that the subject is easier in context than on a placement test.

The outcome is produced jointly by prior preparation and the pathway.

This makes the phrase “college-ready” unstable. Ready for which course design? With what tutoring? In what semester? Under which teaching method? A student who is unlikely to pass a traditional gateway course without support may succeed under a co-requisite model that adds support while allowing immediate enrollment. Change the intervention and the meaning of readiness changes.

A model trained on the old pathway can become obsolete when the institution redesigns the pathway.

This is a general warning for predictive systems: policy innovation can invalidate labels.

Suppose a college historically sends students below a test-score threshold into a sequence of remedial courses. It builds a model predicting success in college English from the historical data. Then the college eliminates standalone remediation and introduces co-requisite support. The outcome under the new system is not the same target the old model learned. Students now receive a different treatment.

The model may remain predictive. It may not. The important point is that “student risk” was never independent of institutional design.

Education often discovers this through experiments. A threshold that looks natural in administrative data can reveal a different story when students near the boundary are assigned differently or when a policy changes. Randomized and quasi-experimental studies can estimate the causal effect of placement rather than merely the correlation between placement and outcome.

The distinction is politically charged because labels can become identities.

A student told they need remediation may reasonably hear more than a scheduling decision. Families may treat gifted placement as evidence of fixed intelligence. Teachers may adjust expectations. Peers and resources shift. A label that was designed to predict can create a social environment that helps produce the predicted outcome.

This is why the unobserved world in education is not simply the student who would have passed if placed differently.

It is the person the student might have become under a different expectation.

That claim should not be inflated into motivational mythology. Expectations do not abolish skill gaps. Students can be underprepared. Algebra is not mastered by positive thinking. Good placement systems exist because course sequencing matters.

The point is that observed performance after placement combines preparation with treatment. Causal research is needed to separate them.

The seven-college experiment demonstrates what becomes possible when an institution creates a credible comparison. Instead of arguing from historical outcomes alone, researchers can observe how different placement rules affect actual course taking and performance. The experiment does not reveal every student's individual counterfactual. It estimates effects across groups and provides information historical selection had hidden.

The study also demonstrates a design principle that will become important later: exploration does not always require exposing people to a wholly unknown option.

The colleges were choosing among real placement systems and real courses. The relevant uncertainty concerned which rule better assigned students. A randomized evaluation could compare policies within an institutionally acceptable range.

This is much easier to defend than randomizing students into obviously inappropriate courses.

The action set was bounded.

Education has many places where the same principle can apply. Schools can compare tutoring approaches. Colleges can test outreach messages. Districts can pilot scheduling changes. Advising systems can vary how information is presented. Admissions offices can evaluate whether removing a requirement changes who applies and who succeeds. Support can be randomized among eligible interventions when capacity is constrained and genuine uncertainty exists.

The goal is not to turn school into an endless experiment. It is to use the natural cadence of educational decisions to learn before one path hardens into tradition.

Tradition is particularly powerful in education because cohorts move on. A policy can survive for decades without generating an obvious counterfactual. Every year produces new students but the same rule. The institution accumulates an impressive time series of outcomes under one regime.

More years do not substitute for variation.

A school can know twenty years of graduation rates under its placement policy and still know surprisingly little about what a different policy would have done.

This is an uncomfortable fact for institutional memory. Longevity feels like evidence. It is evidence about stability under a chosen system. It is not necessarily evidence that the chosen system dominates alternatives.

The same problem appears in admissions. A college can describe the students it admitted in exquisite detail and track them for years. It cannot directly observe how rejected applicants would have performed at the same institution. Research can use policy changes, thresholds, matching, and natural experiments to learn parts of the counterfactual, but the admissions file itself does not contain the answer.

Selective institutions are therefore vulnerable to circular validation.

“We admit people with these characteristics because they succeed here.”

“They succeed here because we admitted people with these characteristics.”

The first statement may be true. It is not established by the second.

This circularity becomes important when admissions criteria change. Test-optional policies, affirmative-action rules, automatic-admission plans, scholarships, recruitment outreach, and application platforms all alter who applies and who is admitted. The applicant pool itself responds to policy. A model trained before the change may misread the new population.

Again, prediction changes the world upstream.

A student who believes admission is impossible may not apply. An outreach program changes that belief. The college then observes an application it would otherwise never have seen. Information policy can create candidates.

Recent work on college applications in Chile offers a different but related example. Researchers partnered with the Ministry of Education on a large-scale intervention giving applicants personalized information about admission probabilities and program characteristics. The intervention changed application behavior and improved matching outcomes for previously unmatched students. The lesson for this book is not the exact effect size. It is that what appears in the application data depends on what students know about their own chances.

A system that predicts from observed applications is downstream of self-selection.

This matters for almost every gate in education. Advanced courses do not contain all students who could succeed in advanced courses; they contain students who were identified, recommended, allowed, informed, and willing to enroll. Extracurricular programs do not reveal the talent of people who never heard about them. Scholarship applicant pools reflect who believed the application was worth the effort.

Opportunity has a discovery function.

When a school opens a pathway, it learns who uses it and what they can do. When it closes a pathway, some of that evidence disappears.

The difficult policy question is how much experimentation a school owes its students. Unlike a streaming platform, a school cannot cheaply show ten alternative curricula to one student and observe clicks. Educational decisions consume time that cannot be replaced. A semester spent in the wrong course can delay graduation. A child has only one fourth grade.

Irreversibility makes exploration more expensive.

That argues for careful design, not for surrender. Lower-stakes experimentation can occur in supplemental support, short modules, summer programs, scheduling, advising, or reversible placement windows. Schools can allow movement between levels rather than treating an initial placement as destiny. They can track near-threshold students. They can use external exams or later outcomes to audit earlier predictions. They can examine teacher disagreement as information.

Reversibility is itself a learning technology.

A placement system that permits correction creates more information than one that locks students into a path. If a student placed into a harder course can move without catastrophic penalty, the institution can afford to be more exploratory at the boundary. If switching is costly or stigmatized, the threshold must bear more weight.

This applies beyond education. Credit lines can begin small and expand. Employment can include structured trials. Policies can be piloted before scaling. Recommendation systems can diversify a few slots instead of the whole feed. The cost of exploration depends on how easily a decision can be revised.

Education makes the human stakes vivid because placement affects identity as well as outcome.

A learning institution must therefore collect evidence without turning students into instruments. That means consent where appropriate, independent review, transparent goals, protections against arbitrary disadvantage, and attention to distributional effects. An average improvement can hide a subgroup harmed by the change.

The seven-college study's English-versus-math result is a useful reminder. The same data problem had different empirical consequences across subjects.

That should make us suspicious of universal remedies.

Maybe a placement model needs exploration in one domain and not another. Maybe a threshold can be trusted where evidence is dense but audited where the model extrapolates. Maybe selective labels are a first-order problem for one outcome and a rounding error for another.

The institution cannot know by assuming.

It has to design a comparison.

This is what education, at its best, already teaches: knowledge is not possession. It is a process by which confidence becomes vulnerable to evidence.

Placement systems should be held to the same standard.

A school that sorts students is not only reading their past.

It is writing part of the dataset from which it will later claim to have understood them.
