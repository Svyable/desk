# The Agent Changes Its Teacher

A driving policy trained only on expert demonstrations has an oddly sheltered education. During training, it sees the road from the expert's position. The car is centered in the lane. The approach to the turn is sensible. The speed reflects what a competent driver would have chosen a few seconds earlier. Then the learned policy is put behind the wheel.

Its first small mistake changes the next lesson.

The car drifts a little left. Now the camera sees a view that was rare in the demonstrations. The policy has to act from a state created by its own previous action. If it corrects too sharply, the following state is stranger still. A predictor that looked accurate on expert data can become a poor driver because prediction was never the whole task. Once the policy acts, it helps choose the inputs on which its next prediction will be made.

This was one of the central problems behind an influential line of work in imitation learning. In 2011, Stéphane Ross, Geoffrey Gordon, and Drew Bagnell described a method called DAgger, short for Dataset Aggregation. The important idea was less the acronym than the loop. Instead of training once on a fixed collection of expert behavior, the learner is allowed to run. The states it actually visits are collected. An expert supplies the actions that should have been taken in those states. Those new examples are added to the training set, and the policy is trained again.

The learner, in other words, changes its teacher's syllabus.

That is a useful place to begin thinking about agents because it separates two ideas that are easy to blur. One is ordinary distribution shift: tomorrow's data differ from yesterday's data for reasons outside the model. The other is endogenous shift: the model's own decisions help produce tomorrow's data. An agent lives especially close to the second problem. It does not merely classify a world that moves around it. It clicks, searches, buys, routes, writes, asks, delegates, retries, and stops. Each action changes what can be observed next.

The distinction becomes more important as systems are given longer horizons. A spam classifier may influence what reaches an inbox, but an agent operating a mailbox can decide which threads to open, which messages to answer, which senders to prioritize, and which tasks to convert into calendar events. Its future context is partly the result of those choices. A coding agent can choose which files to inspect, which tests to run, and which implementation to attempt. A research agent can decide which search result deserves a click and therefore which evidence enters its working set. The environment still constrains all of these systems. Yet the path through the environment is increasingly policy-shaped.

That creates a second-order problem for learning. The examples generated during deployment are not neutral samples from a fixed world. They are records of a world encountered through a particular policy.

Consider a customer-service agent that decides whether to answer a complaint itself or escalate it to a human. Suppose the system is retrained from resolved conversations. Cases it answers confidently produce one kind of record. Difficult cases sent to specialists produce another. If the eventual training label is simply whether the customer issue was resolved, the dataset braids together case difficulty, agent judgment, escalation policy, and human skill. A future model can easily learn that cases with certain features tend to end well without learning which intervention made them end well.

The problem should sound familiar by now. Chapter 7 encountered it in medicine, where treatment changes the outcome a risk model is trying to predict. Chapter 8 encountered it in policing, where patrol changes what is observed. Chapter 9 encountered it in recommendation, where exposure changes preference and behavior. Agents combine these loops and add another: they choose sequences of observations for themselves.

A passive model can be wrong about the world. An agent can be wrong and then walk deeper into the part of the world where its mistake makes sense.

This is not necessarily a pathology. DAgger itself is evidence of the opposite. Letting a learner generate the states on which it needs instruction can be a powerful way to improve it. The fixed demonstration set is deficient precisely because it does not contain enough examples of recovery from the learner's own errors. Deployment reveals the missing curriculum.

The crucial question is what kind of teacher remains in the loop.

In DAgger, the learner visits new states, but an expert labels the appropriate action. The learner determines where the question is asked; it does not get to manufacture the answer. That separation is expensive. It is also epistemically valuable. The policy can expose its weaknesses without automatically certifying its own behavior as correct.

Many contemporary learning loops weaken that separation. Systems generate synthetic examples, critique model outputs with other models, use model-assisted labeling, distill stronger systems into weaker ones, or train on traces produced by agents solving tasks. These techniques can be useful and sometimes indispensable. They also change the provenance of the teacher.

A simple synthetic-data pipeline illustrates the difference. Imagine a model that generates a thousand algebra problems, solves them, and then uses those problem-solution pairs to train its successor. If the generator covers useful parts of the problem space and the solutions are independently checked, the pipeline can create cheap, targeted practice. If the same family of models generates the questions, supplies the answers, filters the examples, and grades the results, then several roles that used to provide independent error signals have collapsed into one lineage.

The danger is not that synthetic data are fake in some moral sense. Simulators have trained pilots for decades. Self-play has produced extraordinary game-playing systems because the rules of games provide a hard external score. A generated chess position is not suspect merely because software produced it. The question is whether the loop retains an anchor that can disagree with the generator.

Chess has checkmate. A compiler can reject invalid code. A theorem prover can verify a proof in a formal system. A robot may receive force, position, and collision measurements from hardware. In these domains, generated experience can be paired with feedback whose truth is not simply whatever the current model tends to say.

Open-ended language is harder. The web has historically provided models with an enormous residue of human activity: arguments, manuals, stories, mistakes, corrections, niche obsessions, bureaucratic forms, scientific papers, fan pages, recipes, source code, transcripts, and countless other artifacts produced for purposes other than training a language model. That data was never clean, representative, or uniformly reliable. Its value included precisely the fact that it came from many processes the model did not control.

As generative systems contribute more of the material that future systems encounter, that independence can erode.

Ilia Shumailov and colleagues gave one version of this concern a precise name: model collapse. In experiments and theoretical analysis published in Nature in 2024, they studied generational training in which model-generated samples entered the data used by later models. Indiscriminate recursive training caused the learned distribution to lose information, with low-probability parts of the original distribution disappearing early. Their examples included Gaussian mixture models, variational autoencoders, and language models.

The result is easy to turn into a slogan that is broader than the evidence. "AI trained on AI becomes stupid" is memorable and not what the paper establishes as a universal law. The setup matters. Data mixture matters. Filtering matters. Access to original data matters. The authors themselves showed that preserving some original data could reduce degradation in their experiments. Other work on synthetic data has found regimes in which generated examples improve learning, particularly when the synthetic data are selected, verified, or combined with real data rather than recursively substituted for it.

The narrower lesson is more durable: a learning system cannot treat the provenance of its observations as irrelevant once its own outputs are entering the source.

This matters even when no model is literally retrained on its own prose. An agent can change its teacher through selection.

Suppose a research agent has learned that short, confident pages are more likely to yield an answer it can use. It begins favoring them in search. Its completed reports are then rated partly on whether they contain decisive answers. Over time, successful trajectories in the training set contain more short, confident sources because the policy selected them. A later version trained on those trajectories may become still more likely to select such sources. Nothing in this loop requires fabricated webpages or synthetic labels. The policy has altered the composition of evidence that survives into training.

A similar effect can appear in tool use. If an agent rarely invokes a slow diagnostic tool, the dataset will contain relatively few examples in which that tool catches a subtle problem. A learner trained from successful traces may infer that the tool is rarely useful. The inference can become self-confirming because the new policy invokes it even less often. Absence of evidence is converted into evidence of uselessness, though the absence was partly produced by the policy.

This is the agent version of the street that receives no patrol because the model has little recorded crime there. What is not sampled cannot easily argue for itself.

There is a further complication. Agents do not only select observations; they can make the environment easier to predict.

A warehouse-routing system may standardize where goods are placed because predictable layouts simplify later routing. A software agent may introduce conventions that make a codebase easier for subsequent automated edits. A scheduling agent may steer meetings toward a narrow set of formats it handles reliably. These changes can be beneficial. Coordination often depends on reducing unnecessary variety.

But the performance record can become ambiguous. Did the agent get better at handling the environment, or did the environment become more like the agent's preferred training distribution?

The answer may be both. That is why benchmark-style evaluation is insufficient once an agent has authority to reshape its workspace. A fixed test asks how well the policy performs on a frozen sample. Deployment asks how the policy and environment co-evolve.

Humans do this too. A new manager creates reporting routines that make the organization legible to the manager. A scientist chooses instruments that make certain phenomena measurable. A bureaucracy creates forms, then learns about citizens through the fields on those forms. We rarely call these processes training-data feedback, but structurally they are close. The observer builds a channel and then mistakes what travels through the channel for the whole world.

Agents make the loop faster because selection, action, recording, and retraining can all be automated.

Speed changes the cost of a mistaken assumption. If a human workflow is revised quarterly, an odd incentive may be noticed before it dominates the records. If an automated agent generates thousands of trajectories a day and those trajectories feed evaluation or training, a policy-shaped blind spot can become statistically impressive very quickly. More data do not rescue the learner when the mechanism producing the data is the thing that needs examination.

This is why independent exploration has value even when exploitation looks efficient. In reinforcement learning, exploration is usually introduced as a way to discover actions with uncertain rewards. In deployed institutions, it has a second role: preserving the possibility that the current policy is wrong about what deserves observation.

Random audits are one example. A fraud system can inspect a small sample of transactions it would otherwise clear. A moderation system can review some content outside its highest-risk bucket. A medical workflow can follow outcomes for patients below an intervention threshold. The purpose is not to behave randomly for its own sake. It is to maintain information about the counterfactual regions the policy would otherwise stop seeing.

For agents, the same principle can be applied to trajectories. Some tasks can be routed through alternative tools or policies. Some apparently easy cases can receive independent verification. Some generated training examples can be checked against external sources or formal constraints. Some old evaluation sets can be held outside the self-improvement loop. The details vary, but the design objective is consistent: do not let the acting policy become the sole author of the evidence used to judge the acting policy.

That objective conflicts with a seductive idea about automation. If an agent can generate work, evaluate work, identify its weaknesses, create new exercises, and retrain itself, why preserve expensive outside supervision? Why not close the loop?

Sometimes closing the loop is exactly right. AlphaZero-style self-play does not need a human to label every chess move because the game supplies rules and outcomes. Program synthesis can benefit from generated tasks when tests provide reliable feedback. Mathematical systems can generate conjectures whose consequences are checked by formal tools. The more trustworthy the external verifier, the more autonomy the learning loop can tolerate.

Where verification is weak, closing the loop changes the meaning of improvement.

Imagine two writing agents. The first drafts an answer and receives feedback from readers who use it in the world. The second drafts an answer, has a sibling model score it for clarity and completeness, revises until the sibling is satisfied, and is then trained on the highest-scoring revisions. The second system may improve dramatically against its evaluator. It may genuinely become clearer. It may also learn the evaluator's preferences, blind spots, and favorite forms of evidence. Without an outside measure, those possibilities are difficult to separate.

The teacher has become part of the student.

This is not a reason to romanticize human feedback. Humans reward style over truth, disagree with one another, tire, miss errors, and carry their own incentives. Human-generated data are not an oracle. Nor is "real-world feedback" automatically clean: clicks can reward outrage, sales can reward manipulation, and task completion can conceal downstream damage.

The relevant distinction is not human versus machine. It is independent signal versus circular signal.

A human rater following text generated by the same model for a rubric may provide less independence than a machine verifier checking a cryptographic signature. A simulator built from measured physics may provide a stronger constraint than a casual human preference. A customer complaint arriving weeks later may reveal something no immediate automated score could see. What matters is whether the feedback channel can produce information the current policy did not already imply.

This suggests a different way to think about data quality for agents. The usual checklist asks whether examples are accurate, diverse, representative, and sufficiently numerous. Those properties still matter. But an agentic system also needs a genealogy of evidence. Which observations were available because the policy chose to look there? Which labels were produced by a model related to the learner? Which outcomes were changed by an intervention? Which examples survived because an automated filter liked them? Which measurements come from a source that can contradict the system?

Provenance is not paperwork around the dataset. It is part of the causal model.

The same is true of memory. An agent that writes summaries of its own work and later relies on those summaries is creating a small recursive training process inside a single deployment. Compression is necessary; no system can retain every token and observation forever. Yet each summary decides what the future agent will be allowed to remember. If uncertainty, failed attempts, minority hypotheses, or awkward exceptions are consistently compressed away, the agent's later confidence can increase as its evidentiary base narrows.

The tail disappears from memory before it disappears from the model.

Again, the remedy is not perfect retention. That would merely exchange epistemic problems for storage and attention problems. The remedy is to recognize summarization as an intervention. Important claims can retain links to primary evidence. Uncertainty can survive compression. Samples of raw history can be preserved. A later process can occasionally reconstruct a decision from source material rather than from the agent's previous conclusion about that material.

These practices look inefficient compared with a frictionless self-improvement loop. They are inefficient in the same sense that replication, audits, holdouts, and control groups are inefficient. They spend resources to preserve disagreement between a system and the evidence used to evaluate it.

That disagreement is an asset.

The strongest version of the agent dream imagines a system that continually learns from experience: each deployment produces data, each batch of data improves the policy, and the improved policy produces better data. There is nothing incoherent about this. DAgger is itself a disciplined version of iterative improvement. Online learning exists because new experience can be valuable. Synthetic data can target rare cases that natural data collection would scarcely encounter. Self-play can move beyond the distribution of human examples.

The mistake is to draw the loop as though every arrow means "more truth."

Deployment produces selected experience. Selection reflects the current policy. Outcomes reflect both the world and the intervention. Labels may reflect evaluators that share the policy's assumptions. Generated examples reflect the generator's support. Memory reflects previous compression. Retraining then converts this mixture into the next policy, which chooses the next mixture.

A system can improve inside that loop. It can also become exquisitely adapted to a world of its own making.

The difference often appears only when something arrives from outside: a strange user, a new adversary, a broken tool, an unusual dialect, a rare failure mode, a regulation, a market shock, a fact that the preferred sources omitted. Then the preserved breadth of the teacher matters.

The driving student drifting toward the edge of the lane did not need more examples of perfect expert driving. It needed instruction in the states its own imperfection created. DAgger's answer was not to prevent the learner from changing the data. That was impossible once the learner drove. The answer was to make the feedback loop explicit and to keep an expert signal attached to the new states.

Agents force the same choice at a larger scale. Once they act, they will change their lessons. The design question is whether the system notices who wrote them.