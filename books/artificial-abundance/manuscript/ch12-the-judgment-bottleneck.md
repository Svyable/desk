# The Judgment Bottleneck

The most dangerous answer is often not the absurd one.

Absurdity is convenient. A fabricated case with a ridiculous name, code that will not compile, a recommendation that contradicts the question—these failures announce themselves. They waste time, but they do not ask much judgment from the person receiving them.

The expensive failure is plausible.

It arrives in the right format. It uses the right vocabulary. Most of it is correct. It resembles work you have seen before. The mistake sits three paragraphs down, inside an assumption you did not think to inspect.

This is why artificial abundance can make judgment scarcer even while making answers plentiful.

Judgment is not a mystical human faculty that machines can never touch. It is a bundle of practical decisions: what matters, what evidence deserves weight, when an answer is outside the system's competence, which exception changes the case, what level of error is acceptable, and when enough analysis has been done to act.

Parts of this bundle are already automated. More will be.

The bottleneck exists at the moving boundary.

The BCG experiment with consultants is useful because it refuses to give us a simple ranking. On many tasks, people using GPT-4 were faster and better. On a task designed outside the model's capability frontier, AI users were more likely to be wrong.

Imagine the easier result: AI is always worse. Nobody needs sophisticated judgment. Do not use it.

Or imagine the opposite: AI is always better. Again, the judgment problem shrinks. Use it.

The jagged frontier is harder because experience teaches the user to trust the system immediately before the system encounters a case where that trust becomes costly.

A tool that is right 99 times and visibly foolish once is easy to manage. A tool that is extremely useful across one region of work and confidently misleading just beyond an invisible boundary demands calibration.

Calibration is difficult because humans are not passive measuring instruments.

We become impressed. We become impatient. We learn habits. We anchor on the first plausible answer. We stop checking things that have been correct repeatedly. We also overreact to memorable failures and may distrust a useful system after one embarrassing mistake.

The problem is not simply machine reliability. It is the relationship between machine reliability and human attention.

Attention is finite.

That becomes awkward when generation is not.

A person who once considered three options can now request thirty. A manager who once received one analysis can ask for five scenarios, five critiques of each scenario, and a synthesized recommendation. A programmer can generate several implementations. A designer can produce hundreds of variants. A researcher can summarize a literature before breakfast.

The marginal option becomes cheap.

Comparing options does not become equally cheap.

This can create a peculiar form of organizational congestion. The company feels more productive because artifacts are arriving faster. Documents multiply. Proposals improve. Presentations become easier to produce. Yet decisions do not accelerate at the same rate because somebody still has to decide which proposal deserves money, which risk deserves acceptance, which feature deserves engineering time, and which uncertainty matters enough to delay action.

The bottleneck moves from producing material for the meeting to the meeting.

The cross-firm experiment involving 7,137 knowledge workers hints at this separation. Individual access to generative tools reduced time spent on email among adopters, but researchers did not detect a broad transformation in the quantity or composition of work over the study period.

That result should not be treated as a verdict on AI's eventual organizational impact. Six months is short. Tools improve. Adoption deepens. Companies redesign processes.

It does show that individual cognitive acceleration and institutional acceleration are different things.

An organization is not a pile of individual workers whose productivity simply adds together.

It is a network of commitments.

Sales promises something engineering must build. Finance approves a budget operations must live within. Legal accepts a risk the executive team owns. A manager chooses one project and thereby declines another. These are not merely information-processing tasks. They are acts that coordinate people around a shared future.

Generating more information can help. It can also increase the surface area of disagreement.

If every proposal can be made persuasive, persuasion becomes less useful as a sorting mechanism.

If every strategy can arrive with supporting analysis, analysis no longer settles which strategy deserves commitment.

If every side of an argument can summon an articulate advocate, articulation becomes cheap.

The scarce thing is deciding what evidence should change your mind.

This is one reason synthetic competence can feel exhausting. We evolved institutions around the assumption that producing a polished artifact required enough effort to provide a weak signal of seriousness. A detailed memorandum suggested that somebody had spent time on the question. A functioning prototype suggested that an idea had survived contact with implementation. A thick report suggested that resources had been committed to the analysis.

Those signals were always imperfect. People produced polished nonsense long before language models.

Now the cost collapses.

The polished artifact arrives before seriousness has had time to form.

Judgment has to operate without some of the old proxies.

This is where verification becomes a design problem.

The naive response is to check everything.

That does not scale. If the system saves ten minutes generating an answer and the human spends fifteen minutes reproducing the work to verify it, the workflow has failed economically even if it is epistemically pure.

The opposite response is to check nothing because the model performs well on average.

That fails exactly where averages conceal tail risk.

A better system allocates verification according to consequence, uncertainty, reversibility, and detectability.

A draft birthday invitation can tolerate errors that a securities filing cannot. A code suggestion inside a well-tested module can be checked differently from a database migration that may destroy customer records. A recommendation that can be reversed tomorrow deserves less scrutiny than one that commits capital for ten years. An error that will trigger an obvious test failure is different from an error that will quietly bias decisions for months.

This is judgment expressed as architecture.

The important decisions are made before any particular output appears. Which actions require approval? Which claims require source retrieval? Which changes require tests? Which thresholds trigger escalation? Which records must be preserved? Which model may touch which data? Which decisions may be automated at all?

As these rules become reliable, they too can be automated.

That is not a contradiction. It is the process by which the bottleneck moves.

A century ago, a bank manager exercised judgment over transactions that software now approves automatically. A pilot once continuously performed tasks now handled by autopilot. Industrial control systems make adjustments no human could economically perform one by one. Society routinely converts judgment into rules, instruments, sensors, and automated control.

Artificial intelligence will do the same to many decisions we currently reserve for people.

The mistake would be to conclude that because yesterday's judgment can become tomorrow's routine, judgment itself disappears.

Automation creates new boundaries.

Who sets the objective the automated system pursues?

Who chooses the acceptable false-positive rate?

Who decides whether the cost of a rare failure is worth the average gain?

Who notices when the environment has changed enough that yesterday's rule is now dangerous?

Who decides when a reversible experiment has become an irreversible policy?

Those questions can migrate too. But while they remain unresolved, they are where value collects.

There is a second problem hiding inside option abundance.

The options are not independent.

Ask a system for ten strategies and the ten answers may share the same blind spot because they were produced from the same model, the same context, the same prompt assumptions, and the same missing fact.

Quantity can create the appearance of diversity without the substance of it.

This matters because human decision-makers often use agreement as evidence. If several analysts independently reach the same conclusion, confidence may increase. But ten generated memos from one underlying system are not ten independent analysts simply because the wording differs.

The same problem appears when one model critiques another output from the same family of assumptions.

Self-critique can be useful. A second pass catches obvious mistakes. Separate prompts can expose contradictions. Different models or tools can provide genuinely different checks.

But multiplying generated review is not the same as multiplying independent evidence.

A system can produce an argument, a critique of the argument, a rebuttal to the critique, and a final synthesis while never encountering the missing fact outside its context.

The organization can feel surrounded by analysis and still be epistemically alone.

This is why judgment sometimes begins by asking for a different kind of evidence rather than another opinion.

Open the contract.

Run the test.

Call the customer.

Inspect the machine.

Check the source record.

Look at the raw data.

Ask the person who was there.

Artificial abundance makes textual and analytical transformations cheap. It does not make reality itself infinitely redundant.

The expert decision-maker learns to notice when the next useful step is not another generated argument.

This becomes more important when organizations build chains of agents that can keep a problem in motion. One system proposes. Another evaluates. Another searches. Another executes. The workflow may resolve routine cases with almost no human attention.

That is the point.

But automation can also create momentum.

Once a workflow has spent compute, gathered evidence, and produced a polished recommendation, stopping it can feel like waste. The artifact becomes an anchor. People begin reviewing whether the proposed action is acceptable rather than whether the organization is solving the right problem.

Judgment therefore includes the right to reset the question.

A customer asks for a faster approval process. The organization can optimize the approval workflow and never ask whether the approval is necessary.

A manager asks which applicants should advance. The system can rank them and never ask whether the job description excludes people who could perform the work.

A company asks which customers are likely to churn. The model can improve prediction and never ask why the product is making them leave.

A government asks which applications are suspicious. The system can improve classification and never ask whether the rule generating the applications is too complex.

Abundant intelligence is excellent at accepting a problem statement.

Judgment sometimes earns its value by refusing the problem statement.

This is not uniquely human either. Systems can be designed to challenge objectives, search for alternative framings, or identify inconsistencies between a requested task and a higher-level goal.

The same recursion appears again.

Once reframing becomes reliable, it becomes another capability that can scale.

Then scarcity moves toward whoever chooses among the reframings, or toward the institutional rule that chooses automatically.

The important point is not where the recursion ends.

It is that every layer of automation should make us look for the next decision that has become comparatively expensive.

The Stanford AI Index's 2026 work on responsible AI is useful here mainly as a warning against false confidence. Evaluations continue to show wide variation in model reliability, including hallucination behavior, and results depend heavily on how tasks and benchmarks are framed. A benchmark percentage is not an ordinary-user error rate. It cannot tell a hospital, bank, school, or software company exactly how often its own system will fail.

That uncertainty is itself part of the judgment problem.

Institutions need local evidence.

They need to know how a system behaves on their tasks, with their data, under their incentives, at their failure thresholds. They need to discover which errors users catch and which errors users amplify. They need to measure not only whether the model is correct but what happens when it is wrong.

A model error in a brainstorming session may cost nothing. The same statistical tendency inside an automated claims process can become policy at scale.

Scale magnifies both competence and mistake.

This is why judgment may become more valuable before it becomes less scarce.

The person who can reliably identify the consequential uncertainty becomes a force multiplier for abundant generation. So does the organization that can turn judgment into good tests, escalation rules, permissions, warranties, and decision rights.

The future expert may spend less time producing the answer and more time designing the conditions under which an answer is allowed to matter.

That is not glamorous work. It looks like thresholds, checklists, audits, simulations, red teams, exception queues, contracts, and occasionally the unpopular decision to wait.

Exception queues are especially revealing.

Automation is often sold through the average case. Most transactions are routine. Most messages are ordinary. Most claims fall within familiar patterns. Handle those automatically and send the unusual cases to people.

The economics can work beautifully until the queue becomes the job.

Every case remaining in the human queue is there precisely because it was difficult to automate. The average difficulty of human work rises as easy cases leave.

The worker may handle fewer cases and experience more strain.

The manager may see automation rates climbing and assume the remaining team has spare capacity, even though the residual work is more ambiguous, adversarial, emotionally charged, or consequential than the work that disappeared.

Artificial abundance can therefore create a hidden intensity effect.

The quantity of human work falls while the judgment density rises.

This matters for staffing and training. You cannot infer human capacity from the number of cases after automation if the composition of the cases changed.

A support team that once solved password resets and angry billing disputes may automate the resets and retain the disputes. A fraud team may automate obvious cases and receive a smaller stream of sophisticated anomalies. A clinician may automate routine documentation and spend a greater share of the day on patients whose situations resist standardization.

This is not an argument against automation.

It is an argument for measuring the work that remains.

The scarce human hour may become more expensive because every minute contains a higher concentration of unresolved uncertainty.

That is exactly what a bottleneck does.

But abundance changes glamour too.

When polished possibility is everywhere, commitment becomes visible.

A company can generate a hundred strategies. It can execute only a few. A person can receive unlimited advice. She still has one life in which to follow it. A government can model many futures. It still has to enact one policy. A reader can summon endless arguments. He still has to decide what he believes.

Generation expands the menu.

Judgment closes it.

That closing can feel like loss because every decision kills alternatives. Artificial abundance makes the alternatives more vivid, more numerous, and more persuasive. It can therefore make commitment psychologically harder even when analysis becomes easier.

The bottleneck is no longer getting another intelligent answer.

It is reaching the point where another answer is worth less than a decision.

That is the strange economy emerging around cheap cognition. We spent centuries building machines that could produce more. We are now building machines that can propose more.

The next scarcity is the capacity to say: this one, for these reasons, with these consequences—and then stop generating alternatives long enough to act.