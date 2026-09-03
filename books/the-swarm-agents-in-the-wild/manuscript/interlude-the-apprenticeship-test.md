# Interlude — The Apprenticeship Test

The apprenticeship argument in the previous chapter has an awkward piece of evidence against it.

In one of the largest early workplace studies of generative AI, newer workers did not merely become faster with assistance. They appeared to move down the learning curve faster too.

That does not make the apprenticeship problem disappear.

It makes it more interesting.

## Six months in two

Erik Brynjolfsson, Danielle Li, and Lindsey Raymond studied the staggered introduction of a generative-AI assistant to 5,172 customer-support agents at a Fortune 500 business-software company. The system listened to customer chats and suggested responses in real time. Human agents remained in control of the conversation and could ignore or rewrite the suggestions.[^11]

Published in the *Quarterly Journal of Economics* in 2025, the study found a fifteen-percent average increase in issues resolved per hour.

The average concealed the more important result.

Less experienced and lower-skilled workers gained much more. The authors found roughly a thirty-percent increase in issues resolved per hour among less-skilled workers, while the most experienced and highest-skilled workers saw much smaller gains in speed and small declines in some measures of quality. Treated workers with about two months of tenure performed about as well as untreated workers with more than six months of tenure.[^11]

For a book worried that automation might eat apprenticeship, this is not a detail to wave away.

The system seems to have done something apprenticeship is supposed to do: transmit practice.

The researchers found evidence consistent with the model disseminating behaviors associated with more productive workers. Newer agents encountered language, tactics, and problem-solving patterns that might otherwise have taken months of repeated calls to absorb. The tool also appeared to help international agents improve English fluency, and the authors found suggestive evidence of learning that persisted beyond immediate copying.[^11]

A junior employee traditionally learns partly because a senior employee is nearby, partly because the organization has accumulated scripts and procedures, and partly because hundreds of small situations eventually become familiar.

An AI system trained on the traces of those situations can alter the geometry.

The novice no longer has to wait until the fiftieth difficult refund case to see how a good worker handles one. A useful pattern can appear on the second case.

This is a genuine benefit.

It is also a clue about where the knowledge came from.

The highest-performing workers generated some of the conversations that helped train the system. Their expertise became part of organizational infrastructure. In the paper's discussion, the authors point out that a worker's economic contribution may therefore include not only the customers they personally serve but also the training data their work creates for future systems.[^11]

That creates a new version of an old distributional question.

If the best employee develops a technique, teaches it to three colleagues, and receives a promotion, the path from expertise to reward is at least visible.

If the best employee's behavior is absorbed into a model that raises the productivity of five thousand colleagues, the value can become detached from the person who generated it.

The organization has converted craft into capital.

The labor question is no longer only whether junior workers still learn.

It is who owns the learning curve after the organization learns how to copy it.

There is another complication. A tool can make a worker effective sooner without making every underlying skill equally deep. The customer-support study provides evidence of learning, but it does not establish that an AI-assisted worker eventually develops every kind of independent judgment an unassisted worker might acquire. The tasks were customer-service conversations in a specific firm. The assistant remained a suggestion system, not an autonomous manager of the whole customer relationship.

That boundary matters.

An apprenticeship has at least two products.

The first is competent output today.

The second is a person capable of handling tomorrow's case when the script fails.

AI may accelerate the first while helping, hurting, or changing the second depending on the work.

We should measure both.

## One person, some of a team

A separate field experiment at Procter & Gamble attacked the labor problem from another direction.

Instead of asking whether AI made one worker faster, the researchers asked whether it could reproduce some of the benefits of collaboration itself.

The preregistered experiment, published in *Organization Science* in 2026, involved 791 P&G professionals working on real new-product-development problems. Participants were assigned to work either individually or in two-person teams, and either with or without generative AI.[^12]

The result is easy to overstate, so it is worth saying narrowly.

On these early-stage innovation tasks, individuals with AI matched the performance of human teams working without AI.

The AI also changed the shape of expertise. Without it, research-and-development professionals tended to produce more technically oriented ideas, while commercial professionals tended toward market-oriented ideas. With AI, both groups produced more balanced proposals. The system appeared to carry some knowledge across a functional boundary that normally justified putting different specialists in the same room.[^12]

That is organizational compression in experimental form.

One reason firms create teams is that no individual possesses every relevant perspective. If a tool can cheaply provide a useful approximation of the missing perspectives, then some work that once required scheduling, translation between specialties, and interpersonal coordination can be done by one person.

But the published paper contains a second result that prevents the finding from collapsing into "one person plus AI equals a team."

When the researchers decomposed the innovation process, AI's strongest contribution was in generating higher-quality ideas. Human judgment still retained value in evaluating and selecting among them.[^12]

Generation and selection are not the same job.

This distinction will become more important as swarms grow.

If a manager can create fifty plausible strategies before lunch, the bottleneck has moved. The scarce skill is no longer producing an option. It is recognizing which option deserves authority, budget, reputation, or irreversible action.

A population of agents can therefore compress one kind of teamwork while increasing the value of another.

The organization may need fewer people to generate material and more reliable institutions for choosing among abundant material.

That is not a semantic distinction. It changes what managers, reviewers, senior professionals, and eventually apprentices need to learn.

## The expert gets slower

Now put those optimistic findings beside a much less flattering experiment.

In 2025, METR recruited sixteen experienced open-source developers who had worked for years on large repositories they knew well. The developers supplied 246 real issues—bug fixes, features, and refactors—that were useful to their own projects. Each issue was randomly assigned to a condition in which the developer could use contemporary AI tools or could not.[^13]

The developers averaged roughly five years of experience with the repositories involved. When AI was allowed, they mostly used Cursor Pro with Claude 3.5 or 3.7 Sonnet, frontier tools during the February-to-June 2025 study period.

Before doing the work, the developers predicted that AI would make them about twenty-four percent faster.

It made them nineteen percent slower.[^13]

After the study, they still believed AI had made them roughly twenty percent faster.

The result is valuable partly because it is embarrassing to simple narratives on both sides.

The same broad technology category that helped inexperienced customer-service workers move down a learning curve made a small group of highly experienced developers slower on codebases they knew intimately.

The studies are not contradictory once the work is examined.

The support agent was often receiving organizational knowledge they did not yet possess.

The open-source developer already possessed unusually rich local knowledge. The AI could generate code, but the developer still had to specify the problem, inspect the output, notice repository-specific assumptions, correct mistakes, and integrate the result into a mature system.

In that habitat, assistance created verification work.

The developer's expertise did not disappear. It became the thing required to judge the machine.

METR was careful not to generalize the nineteen-percent slowdown to software development as a whole. The sample was small and unusual: experienced maintainers working on familiar, mature projects. AI might be much more useful to less experienced developers, to people entering unfamiliar codebases, or to different kinds of programming work.[^13]

The date matters too.

By February 2026, METR said its attempt to repeat the productivity experiment with later tools had developed a serious selection problem. Some developers increasingly declined to participate because they did not want to work without AI. The study's pay structure and the use of multiple concurrent agents also complicated measurement. METR said it believed developers were probably receiving more benefit from early-2026 tools than in its early-2025 experiment, but it judged the new data too biased to support a confident estimate of the size of the improvement.[^14]

This is what honest evidence often looks like during a fast-moving technology transition.

The answer changes faster than the experimental design.

A study can be rigorous and still become historically specific.

That does not make it useless. It tells us which mechanisms to watch.

## Passing the test, failing the review

Benchmarks introduce a related problem.

The first-habitats interlude described software as unusually friendly to agents because code offers tests. Tests create feedback. Feedback supports iteration. That remains true.

But a test suite is not the entire institution of software engineering.

In March 2026, METR asked active maintainers of three SWE-bench Verified repositories to review AI-generated patches that had already passed the benchmark's automated grader. Across 296 AI-generated pull requests, maintainer decisions were substantially harsher than the automated test result. METR estimated that maintainer merge rates were about twenty-four percentage points below the benchmark scores after its normalization procedure; in raw terms, maintainer acceptance was often roughly one-third to one-half of the automated-grader pass rate.[^15]

The maintainers objected for ordinary engineering reasons: functionality, effects on other code, and code quality.

METR did not claim that this proved a fundamental inability. The agents in the study were not allowed to respond to review feedback and iterate the way a human contributor normally would. The point was narrower: a passing benchmark can overstate real-world usefulness if the benchmark captures only one layer of acceptance.[^15]

That is precisely the institutional problem the swarm will encounter outside software.

A claims agent can satisfy the policy checklist and still produce a decision an appeals board would reject.

A hiring agent can meet a formal scoring rule and still violate the organization's actual understanding of a good hire.

A research agent can retrieve accurate facts and still produce a synthesis an expert considers shallow.

The closer agents get to consequential work, the more evaluation expands from *did the artifact pass?* to *would the institution accept responsibility for it?*

That second question is harder to automate because institutions carry tacit standards, histories, relationships, and values that no single test fully contains.

## The new apprenticeship

The evidence does not support one clean story about skill.

AI can make a novice look experienced sooner.

It can carry knowledge across professional silos.

It can reproduce part of what a teammate contributes.

It can also slow an expert who must verify output against a context the machine does not fully possess.

And a system can pass the visible test while failing the human institution behind the test.

This suggests that apprenticeship will not simply vanish. It will be rearranged around a different sequence of scarcity.

Some routine exposure may become less necessary because a model can surface patterns that once required hundreds of repetitions.

Some exposure may become more necessary because workers who mostly supervise successful machine output will encounter fewer naturally occurring failures from which to learn.

Some expertise may shift from production to evaluation: knowing not merely how to produce a patch, memo, diagnosis, contract, or plan, but how to recognize when a plausible one is subtly wrong.

And some senior workers will discover that their most scalable output is not the work product itself but the behavioral trace from which everyone else's agent learns.

That creates an institutional obligation the labor market has not yet priced cleanly.

If companies automate the work that used to train novices, they may need to manufacture training deliberately.

If AI can accelerate parts of the learning curve, they should exploit that too.

The sensible response is neither to preserve obsolete busywork as a ritual nor to assume that supervision automatically creates expertise.

Measure whether people are becoming independently capable.

Give them controlled failures.

Expose them to exceptions.

Require them to make decisions before seeing the machine's recommendation sometimes, so the organization can tell whether judgment exists or merely agreement.

Let senior workers contest the patterns the system has learned from them instead of freezing yesterday's best practice into tomorrow's default.

The apprenticeship tax described earlier is therefore not necessarily a tax on productivity.

Done well, AI may make training cheaper.

What cannot be made optional is the production of future judgment.

A firm can borrow expertise from its machines for a quarter.

It cannot safely discover ten years later that nobody remembers how the institution knows when the machines are wrong.
