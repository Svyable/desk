# The Meter Is Part of the Machine

In 2025, OpenAI released an evaluation meant to look less like an exam and more like work.

GDPval drew tasks from forty-four occupations across nine large sectors of the American economy. The people who wrote the tasks averaged fourteen years of professional experience. The outputs were not just paragraphs of text. Models were asked to produce spreadsheets, slides, diagrams, reports, and other artifacts that working professionals actually hand to other people.

The benchmark was an attempt to escape one of AI evaluation's oldest traps: measuring what is easy to score instead of what anyone is paid to do.

Then the researchers changed the setup.

They let the models reason longer.

They gave them more task context.

They altered the prompt.

They improved the scaffold around the model so it could inspect its own files, render deliverables, make web requests, and choose among multiple attempts.

The score moved.

For o3, additional reasoning effort improved performance by as much as 4.3 percentage points in the reported experiments. For GPT-5, the gain reached 6.1 points. Other changes to the surrounding system improved the quality of the artifacts further. A prompt that told GPT-5 to inspect its deliverables for correctness and layout problems eliminated a particular black-square rendering failure that had been showing up in more than half of generated PDFs. Best-of-four sampling with a judge added another layer of selection.

None of this required pretending that a new model had arrived every time the number changed. The model was part of the experiment, and so was the apparatus.

GDPval's design makes the point unusually hard to dismiss because the apparatus was not a minor formatting layer. Professional deliverables fail in ways that do not show up in a language-model answer box. A spreadsheet can contain a correct calculation and still be unusable because references broke. A deck can contain accurate claims and still fail the job because charts are unreadable. A report can have the right analysis and still look unfinished because the final file was never inspected. The scaffold that opens, renders, checks, and revises those artifacts is performing part of the work.

That does not make the benchmark invalid. It makes the system boundary consequential. A company buying an agent may care intensely about the larger boundary. If the delivered system catches its own formatting failures, the customer receives the benefit regardless of whether the correction came from neural weights, a scripted validator, a judge model, or a retry loop. A researcher comparing base models may want those differences held fixed. The same score cannot silently answer both questions.

This sounds like a technicality until a leaderboard turns the result into a noun.

"GPT-5 scored X."

"Claude scored Y."

"Model A beats Model B."

The grammar places the score inside the model, as if the number were stored among the weights and retrieved by measurement. In an agentic evaluation, the score can depend on far more than the weights: prompt, reasoning budget, verbosity, tool access, network access, memory, search, retries, time limits, file-system permissions, environment, scaffold logic, stopping rules, and grader.

Change enough of those and the experiment changes even when the model name does not.

The obvious reaction is to strip the apparatus away and test the model "itself."

That only works if the thing someone wants to know is the capability of a deliberately stripped-down model.

For a deployed system, the wrapper may be the product.

A coding assistant without a terminal is not the same tool as one that can inspect a repository, run tests, edit files, and retry after failures. A research agent without browsing is not the same system as one that can search the web. A model limited to one attempt is not equivalent to a workflow that can draft, inspect, revise, and choose the best of several candidates.

Removing the apparatus can make an evaluation cleaner while making it less representative.

Adding the apparatus can make an evaluation more representative while making it harder to say what caused the score.

That tradeoff is the center of this chapter.

Metrology has a useful word for the thing being measured: the measurand.

In physical science, defining it precisely is not optional. "Length" is too vague if the real question is the thermal expansion of a particular steel part under particular conditions. NIST's guidance on measurement uncertainty makes a related point: when a measurand is defined by a standard method, uncertainty depends not only on repeatability but also on how well the method itself has been implemented.

AI capability is not a physical quantity, and the analogy should stop before it becomes mystical. There is no laboratory artifact called one unit of reasoning.

The discipline carries over.

What, exactly, is the measurand?

If the answer is "this model's maximum elicitable cyber capability," then giving it a strong prompt, useful tools, long rollouts, and a competent scaffold may be necessary. A weak wrapper would under-measure the capability the evaluator was trying to expose.

If the answer is "the experience a normal customer gets from the default product," the same elaborate setup may overstate what the customer actually receives.

If the answer is "how much useful work can this entire commercial system produce for a dollar," stripping away routing, tools, memory, and selection would measure the wrong object.

A score is interpretable only after the object of measurement stops shifting under the reader's feet.

METR treats this issue explicitly in its capability-elicitation guidance. The organization evaluates frontier models for dangerous and economically significant capabilities. For that purpose, an arbitrary weak scaffold is a bad measurement choice. Its protocol advises evaluators to consider multiple fine-tunes, model versions, or agent scaffolds and use the highest-performing version, or justify why the chosen configuration is likely to reveal the strongest capability.

That is a defensible choice.

It is also a very particular choice.

The result answers something like: how capable can this model-system become under serious elicitation?

It does not automatically answer: how capable is the product in its default settings?

Those two questions can produce different numbers without either number being fraudulent.

The difference is easiest to see in safety evaluation.

OpenAI's GPT-5 system card describes cyber exercises run under different assistance conditions. In one configuration, the model is given the goal and access credentials. In another, evaluators also provide a rough plan. The point is not to hide the distinction. The point is to expose it. A model that succeeds only after receiving a plan represents a different level of autonomous capability from one that discovers the plan itself.

The same card contains a smaller detail with larger implications for public benchmark reading. OpenAI notes that changing model verbosity can change SWE-bench performance. The company ran preparedness evaluations at a verbosity setting higher than what was then available through the standard API, while its public SWE-bench launch number used a different default setting.

Verbosity sounds cosmetic.

In an agentic coding task, it can alter how much reasoning and action the system emits before stopping. Once that changes task completion, a setting that looks like presentation has become part of measured capability.

Modern systems are full of these hidden levers.

Reasoning effort can change how much inference compute is spent before an answer appears.

A retry policy can turn one uncertain attempt into several chances.

A judge model can select among candidates.

A browser can replace recall with retrieval.

A code interpreter can replace mental arithmetic with execution.

Memory can preserve useful state across steps.

A router can decide which underlying model receives which query.

A safety policy can block behavior the base model could otherwise produce.

The "model" in a product comparison can therefore be a small society of components.

This was already visible when GPT-5 launched in 2025. OpenAI described GPT-5 as a unified system in which a router could direct requests toward a faster model or a deeper reasoning model depending on the task and the user's intent. The product name referred to the orchestration as much as to a single neural network.

The naming was commercially sensible.

The measurement consequence is that product identity and experimental identity can diverge.

A leaderboard may say GPT-5 while the experiment actually means a particular reasoning variant, with a particular effort setting, in a particular tool environment, under a particular prompt, at a particular date.

That sentence is ugly.

The ugliness is useful.

It is closer to the experiment.

The demand for a compact model name pushes in the opposite direction. Buyers cannot evaluate a paragraph-long configuration every time they choose software. Researchers cannot title a chart with the complete run manifest in every row. A benchmark exists partly to compress complexity.

The problem is deciding what can be compressed without destroying the conclusion.

GDPval provides a clean example because the authors did not treat scaffolding sensitivity as an embarrassment. They studied it.

The benchmark asks for professional artifacts. A model can know the right facts and still make a bad slide deck. It can calculate the right number and place it in a broken spreadsheet. It can generate a plausible report and fail to inspect a rendering error that a human professional would catch before sending the file.

A prompt that tells the model to perform those checks changes measured performance.

One interpretation is that the prompt is artificially helping.

Another is that the prompt describes the job.

Professionals use checklists. Editors reread drafts. Engineers run tests. Analysts inspect charts. A model instructed to verify its own work may be closer to a functioning worker than a model forced to answer once without reflection.

That does not mean every extra layer belongs in every benchmark.

Best-of-four sampling raises a different question. If the system produces four outputs and a judge chooses the strongest, the delivered result may improve. The customer's experience may genuinely be better. The inference cost also rises, and the score no longer represents single-attempt reliability.

Both facts matter.

A benchmark that reports only the final percentage can hide the trade.

This is why "same benchmark" does not always mean same measurement.

One system may get one attempt.

Another may get four.

One can browse.

Another cannot.

One receives the hidden unit tests.

Another is denied them.

One uses a specialized prompt written after weeks of evaluator iteration.

Another uses a generic instruction.

One is allowed two hours.

Another stops after fifteen minutes.

The final score can still appear in adjacent cells.

The cells look commensurable because the metric is the same. The experiments may not be.

Resource budgets make the ambiguity worse. Best-of-four is easy to describe as a reliability technique, but it is also four generations plus a selection step. High reasoning effort can improve task performance while consuming more inference. Browsing can improve factual work while adding latency and network dependence. A benchmark that ranks only by task success may be doing exactly what its designers intended. A buyer making a cost-sensitive deployment decision needs another axis.

This is the same reason vehicle testing distinguishes fuel economy, acceleration, payload, and towing instead of asking for one number called car capability. An evaluation can isolate one property. Trouble begins when readers import the number into a decision whose constraints were excluded from the test.

OpenAI's 2026 playbook for third-party evaluations treats setup as part of trustworthy evaluation for this reason. Tool access, task environment, scaffolding, and the permissions that let a system act are no longer peripheral implementation notes. They can determine which actions are available to the system.

This is not unique to AI. Athletic records specify equipment and conditions for similar reasons. Drug trials specify dosage, population, and protocol. Financial backtests become meaningless when one strategy gets information unavailable to another.

AI evaluation adds a complication: the apparatus can contribute intelligence.

A scaffold is not merely a neutral tube carrying inputs and outputs. It can decompose a problem, decide when to call tools, summarize intermediate results, prompt for verification, preserve state, route subtasks, and allocate additional attempts. Some scaffolds move decisions that could have been made by the model into code written by the evaluator.

Now the ownership of capability becomes ambiguous.

Did the model solve the problem?

Did the scaffold solve part of it?

Does the distinction matter if the user only cares that the product worked?

These questions do not have one correct answer because they correspond to different measurement goals.

A model developer trying to understand raw progress may want to hold the scaffold constant.

An agent developer trying to build the best product may want to optimize the scaffold aggressively.

A safety evaluator may want maximum elicitation to discover what the system could do under strong support.

A regulator may care about the actual deployed configuration.

A buyer may care about cost-normalized performance under the tools the organization is willing to permit.

Each should resist borrowing a score from one setting and pretending it answers the others.

OpenAI made this point directly in a May 2026 playbook for third-party evaluations. Earlier evaluations could often treat the model like a chatbot: prompt in, answer out. Frontier systems increasingly use tools, retain information across multiple steps, and act inside workflows. Performance therefore depends on the environment and setup that facilitate those actions.

That is not an argument against independent testing.

It is an argument for describing the test subject honestly.

The history of computing has repeatedly moved capability across boundaries. Early software relied on programmers to manage memory and hardware details that later disappeared into compilers, operating systems, and libraries. A modern application is not judged less real because it depends on an operating system.

Agentic AI will likely follow the same path. Today a clever scaffold can look like a temporary trick. Tomorrow the same behavior may be built into the model or standard runtime. The boundary between model and harness will move.

A benchmark that wants longitudinal continuity has to decide what to hold fixed while that boundary shifts.

Hold the scaffold fixed and newer models may be constrained by an old wrapper.

Update the scaffold and historical comparisons become less clean.

Benchmark the product and vendor-specific engineering becomes part of the score.

Benchmark the bare model and the result may say little about actual use.

Again, there is no free regime.

The cleanest solution is not a universal standard configuration. It is a clearer statement of the claim.

Instead of "Model A is better than Model B," say what was measured.

Under this task set, with these tools, this reasoning budget, this scaffold, this retry policy, this grader, and this cost envelope, the evaluated system completed more tasks.

That sentence will never fit in an advertisement.

It belongs somewhere behind the advertisement.

The cost envelope deserves particular attention because inference-time resources can masquerade as model progress.

If one system is allowed to think longer, sample more candidates, search more sources, or invoke more tools, it may produce better answers. That can be economically rational. A lawyer might happily spend ten dollars of inference to avoid an hour of human review. A casual user may not tolerate the same latency.

A benchmark score without resource information can therefore combine two improvements: better intelligence per unit of compute and simply more compute.

Both are real.

They answer different business questions.

GDPval's researchers understood this well enough to study performance under different reasoning and scaffolding conditions rather than declaring one configuration metaphysically correct. That choice makes the benchmark more interesting, because it exposes the slope rather than only the point.

How much does performance improve when the system gets more context?

How much when it gets more inference?

How much when the wrapper catches obvious failures?

How much when a judge selects among attempts?

Those gradients reveal something a single score cannot: where capability lives.

Sometimes it lives mainly in the model.

Sometimes the model has latent capability that a better prompt unlocks.

Sometimes tools provide the missing function.

Sometimes repeated sampling buys reliability.

Sometimes the wrapper hides a weakness rather than eliminating it.

The practical evaluator should want to know which.

This is also why benchmark comparisons can become unstable across laboratories. Two teams can use the same published task set and implement the surrounding system differently. One reports an apparent leap. Another cannot reproduce it. The dispute may look like a disagreement about the model when the real disagreement is about the apparatus.

Reproducibility requires more than the question file. It requires enough of the evaluation environment to reconstruct the measured system.

This is one reason benchmark papers increasingly read like systems papers. The task set may be fixed, but an agent rollout is an interaction among model, environment, tools, and evaluator policy. A reproduction can use the identical repository and still change the result by changing a timeout, a tool version, the number of permitted attempts, or the rule for deciding that the agent is finished. The benchmark name survives while the effective experiment drifts.

For static multiple-choice evaluation, this problem is comparatively small. For agents, it becomes part of the scientific record. A useful result therefore needs something closer to an execution manifest: enough information to know what the system could see, what it could do, how much it could spend, and what counted as success.

That includes mundane details. Tool versions. Timeouts. Network policy. Seed handling. Retry logic. Judge prompts. Parser behavior. Whether invalid outputs count as failures or get repaired. Whether a file-format error is fatal. Whether the agent can see its own test results.

These decisions look administrative until they change the winner.

The measurement lesson is almost embarrassingly ordinary.

A number belongs to a procedure.

AI makes the procedure harder to see because the product presents itself as a conversational mind. The user types into a box. The answer arrives. The apparent simplicity hides routing, inference allocation, safety layers, tools, retrieval, system prompts, memory, and product logic.

The meter can hide the same complexity.

That means the phrase "model capability" should trigger a follow-up before it triggers a conclusion.

Capability under what conditions?

The right answer may still be a single number.

But the number should have an address.