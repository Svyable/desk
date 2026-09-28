# What to Look at Next

A search box creates a comforting fiction. It presents one empty field, so the problem appears to be choosing the right words. Agents do not live in that box for long.

The first search can return a document, a login page, an error, a list of names, a number without provenance, a date that changes the question, or a clue that the premise was wrong. The next useful action may be another query. It may be opening the source behind the result. It may be searching a code repository for the identifier that just appeared. It may be running a test, comparing a second database, asking a person for permission, or stopping because the requested fact cannot be established from the available channels. A query is an action. Search is the policy that chooses the next action.

That distinction sounds small until two agents with the same model and the same tools are given the same task. One searches broadly, finds a plausible page, and begins writing. The other inspects the page, notices that the claim is attributed to a report, opens the report, discovers that the number applies to a different population, changes the query, and returns with a narrower answer. Neither agent became more intelligent between the first and second step. The second agent used evidence to change its behavior. This is the primitive we need.

An agent begins in an information state. It does not know the world in full. It has a task, some context, perhaps a memory of similar tasks, and access to actions that can produce new observations. After each observation, it has another information state. The policy maps that evolving state to a next action. The action might be “search the web.” That description is usually too coarse to be useful.

Search which domain? With which terms? For a current result or a historical one? Should the agent prefer an official document, a database, reporting, a paper, a forum, or a product page? Should it spend another query on recall or use its budget to verify the strongest candidate already found? Should it ask for a page that mentions the exact phrase or search for the underlying entity by a different name? Should it treat the absence of a result as evidence, or merely as a failure of the search engine? The verbs matter because they produce different evidence.

Modern language-agent research made this interaction visible by putting models into environments where actions have consequences. ReAct, published before the current wave of consumer agents, interleaved reasoning traces with actions so a model could use external observations while pursuing a task. WebArena later placed agents inside realistic websites rather than giving them a static packet of text. GAIA asked assistants to solve questions requiring combinations of browsing, tool use, reasoning, and multimodal handling.

The important change was not that the model could now click. The task acquired a history.

Once a history exists, the value of an action can depend on what came before.

Suppose an agent is trying to determine whether a software failure is caused by an application change or by the environment. At the beginning, reading the code and checking the environment can both be reasonable. If the failure reproduces across two commits in the same environment, the relative value of those actions changes. If it disappears in a clean environment, a different branch becomes more valuable. A good search policy spends its next action differently because the last observation moved the uncertainty.

Now consider an agent that simply alternates between reading source files and running tests because its prompt says to “iteratively reason and act.” It is interactive. It is adaptive in the grammatical sense. It may not be adaptive in the decision-theoretic sense.

The relevant question is whether the observation changed the ranking of future actions. This is the test that prevents agentic theater. Loops are easy to build. Useful loops are harder.

A model can be asked to reflect after every step. It can produce a new paragraph of reasoning, restate the goal, and choose another tool. The trace will look dynamic. But if the same action would have been chosen regardless of the observation, the reflection did not control the search. It narrated it. The difference becomes obvious in medicine.

Imagine two tests for a condition. One is cheap and moderately informative. The other is expensive and highly specific, but only useful after the cheap test is positive. Ordering the expensive test first is not irrational because it is expensive. It is irrational because its value is conditional. The first observation changes whether the second observation is worth buying.

The same structure appears in software. A full test suite can be worth running after a local fix passes targeted tests and not before. A database query can be worth issuing after a name has been resolved to an identifier. A human review can be worth requesting after automated checks have narrowed the dispute to a judgment call. An authenticated tool can be worth invoking after public evidence establishes that the private record is actually necessary. Good search has gates.

The gates are not bureaucratic decoration. They are how the policy converts cheap evidence into selective use of expensive evidence.

This makes cost a first-class property of a search action.

Agent discussions often reduce cost to tokens. That is convenient because tokens are easy to count and the meter is visible. Real search budgets are messier.

Latency matters. A slow but informative call can block a time-sensitive decision.

Permission matters. Some evidence can be acquired only after a user authorizes access.

Privacy matters. A query can expose information even if it returns nothing useful.

Irreversibility matters. Clicking “submit” is not the same class of action as opening a page.

Rate limits matter. A policy can spend scarce future capacity on a low-value call.

Human attention matters. Escalation can be the most accurate channel and the one most expensive to abuse.

Physical risk matters. A robot probing an uncertain environment is not browsing a document.

Reputation matters. A sales agent can ask a customer one clarifying question too many.

Opportunity cost matters. Search that continues after the decision is good enough can be a failure even when every individual query was reasonable.

A policy that optimizes only one of these costs will eventually learn the wrong habit.

The phrase value of information is useful here, though it can become a way of making common sense sound more mathematical than it is. The basic idea is plain: an observation is valuable when it can change a decision enough to justify what it costs to acquire. The definition has two parts that agents routinely blur. The observation must be capable of changing something. And the change must matter.

A second source that repeats the first source's upstream data can increase confidence without adding much independent information. A test that produces the same outcome under both leading hypotheses can be perfectly accurate and nearly useless. A web search that returns twenty additional articles may improve recall and do nothing for the decision because all twenty cite the same press release.

More evidence is not the same thing as more discrimination.

This is one reason provenance belongs inside search policy rather than as a footnote added at the end. The agent needs to know where observations come from well enough to estimate whether they are genuinely distinct.

Consider three news articles making the same factual claim. If each independently interviewed a different witness, the repetition can matter. If all three summarize the same wire report, the count of articles exaggerates the count of observations. A system that treats textual diversity as evidentiary independence will search badly even if its summarization is flawless.

The same problem appears in model ensembles. Ask five instances of the same model the same question and receive four matching answers. That can be useful. It is not equivalent to four independent measurements of the world. Correlated priors can produce consensus without contact with additional evidence. Search policy therefore needs a concept of channel.

A channel is not merely a tool name. It is a route by which the world can affect the agent's information state.

A browser can expose many channels because different pages originate from different institutions, databases, people, and measurement systems. A single enterprise API can expose several independent operational records. Conversely, five interfaces can all be wrappers around the same underlying dataset. The engineering diagram should follow provenance, not branding. This is where agent observability begins.

Before asking which action to take next, ask what distinctions the available channels can make at all.

Suppose a customer-support agent must decide whether a shipment was lost or merely delayed. Its tools show the order date and the promised delivery date but no carrier scan. The two states can produce the same observations. The agent can reason for another thousand tokens. It can ask itself to be critical. It can search the product catalog. None of those actions exposes the missing distinction. The useful next action is not “think harder.” It is “obtain tracking evidence,” if authorized and available.

If that channel does not exist, the correct behavior may be to say the state is unresolved and route the case differently.

This is a subtle form of competence because benchmarks often reward an answer even when the environment does not supply enough evidence to justify one. An agent trained under that pressure can learn to convert under-observation into confident completion. A production system needs the opposite reflex.

It should recognize when the search space is not the problem. The observation space is.

The difference can save enormous amounts of compute. It can also prevent a category error in product design. Teams frequently respond to agent failures by switching models, adding longer context, or building another reflection loop. Those changes can help when the agent has the evidence and handles it badly. They are irrelevant when the evidence channel is absent. The first diagnostic question should be embarrassingly concrete.

What did the agent need to see that it could not see? The second is harder.

Why did it not choose to see the evidence it could have seen? That is a policy failure.

A useful search policy needs at least a rough representation of four things: what uncertainty remains, what actions are available, what each action is likely to reveal, and what each action costs.

The representation does not have to be explicit symbolic state. Human experts rarely carry full Bayesian tables in their heads. They learn approximations. A mechanic knows that one symptom makes another test more informative. A lawyer knows which document is likely to contain the controlling language. A scientist knows that one experiment is worth doing because either outcome would kill a large family of explanations. The policy can be learned in similarly compressed form. But learning from successful traces creates its own trap.

A trajectory records what happened after one sequence of choices. It does not show what would have happened if the agent had searched differently. This is the counterfactual problem of search training.

Suppose an agent opened seven files and found the bug in the eighth. The trace tells us that the eighth file contained the answer. It does not tell us whether a different first query would have revealed that file immediately. If the system imitates successful traces naively, it can learn the wandering that happened to precede success.

Human apprenticeship contains the same risk. Juniors copy the visible process of experts without seeing which steps are habit, which are context-specific, and which are vestiges of an earlier toolchain.

A good learning-to-search system needs negative evidence about its own behavior. Which actions were redundant? Which observation arrived too late to affect the answer? Which branch was opened and never used? Which tool call changed no posterior worth changing? Which source was duplicated?

Which expensive step could have been gated by a cheaper one?

Which early observation had high leverage because it removed entire regions of the search space?

This is where trajectory instrumentation becomes more interesting than transcript logging. A transcript preserves what the agent said and did. Instrumentation tries to preserve why each action was useful. The distinction matters for memory too.

Agent memory is often treated as a storage problem: save prior messages, retrieve relevant snippets, keep a vector database of earlier work. Storage is necessary. It does not automatically improve search.

Memory becomes strategically useful when it changes the next action. A remembered identifier eliminates a resolution step.

A remembered failure prevents retesting a dead branch under unchanged conditions.

A remembered source relationship tells the agent that two articles are not independent.

A remembered interface quirk makes the agent use a different path.

A remembered benchmark trick, by contrast, can improve a score while making the policy less transferable. The question is not whether the agent remembers. It is whether memory changes where it looks.

This also clarifies why long context windows do not solve search by themselves. A larger window can hold more evidence. It does not decide which evidence deserves to enter the window. If the agent retrieves indiscriminately, abundance can increase distraction. If it searches poorly, a million-token context can become a beautifully indexed record of the wrong neighborhood. The search policy sits upstream from context. It determines the context's diet.

There is a commercial consequence hiding in that architecture. Model capability is increasingly purchasable. Tools are increasingly composable. What remains difficult is the task-specific policy that knows which evidence channels matter, how they relate, when to use them, and what counts as enough. That policy can be a form of organizational knowledge.

A due-diligence firm knows which filings tend to reveal what management presentations omit. A security team knows which logs distinguish benign misconfiguration from intrusion. A claims operation knows which combinations of records justify escalation. A laboratory knows which assay should follow which pattern. A software company knows which tests are diagnostic rather than ceremonial.

An agent that learns those search policies is not merely automating answers. It is encoding judgment about where reality leaves traces.

This is why the strongest agent systems may become deeply vertical even when they use general models. The model supplies language, reasoning, and broad priors. The search policy supplies contact with the domain. The general model knows many things. The useful agent knows what to look at next.

There is no guarantee those capabilities will improve at the same rate.

A stronger model may need fewer observations because its priors are better. It may infer the relevant file from naming conventions. It may recognize a likely diagnosis from history. It may formulate a sharper query on the first attempt. That does not make search obsolete.

It changes the point at which another observation becomes worthwhile.

The best policy for one model is not necessarily the best policy for another. A cheap model may benefit from aggressive retrieval. A stronger model may be slowed by redundant context. A specialized verifier may make wide branching economical. An expensive verifier may favor narrow search. A fast browsing tool may justify repeated checks. A slow human review may need a high threshold. Search policy is coupled to the whole system. This is another reason static agent recipes age quickly. “Always search first.” “Always reflect.” “Always use three sources.” “Always branch into five candidates.” “Always ask a critic.”

Each rule can be right in a particular cost structure. None is a theory.

A theory asks what property of the task makes the action valuable. Three sources matter when they add independent evidence.

Reflection matters when it changes the next action or catches a detectable class of error.

Branching matters when candidate diversity can be evaluated cheaply enough to justify the extra branches.

Search-first matters when the initial context is likely to omit decision-changing evidence.

A human critic matters when the remaining uncertainty requires human judgment and the expected consequence justifies interruption. The rule follows the structure. That is the discipline agent design needs. Not another universal prompt. A map of uncertainty, channels, costs, and decisions.

Once those are visible, “what should the agent do next?” becomes a real engineering question rather than a stylistic preference.

Sometimes the answer will be sophisticated: run a targeted experiment whose result changes the entire policy. Sometimes it will be mundane: open the authoritative file.

Sometimes it will be expensive: ask the human who has the missing context.

Sometimes it will be negative: no available action can resolve this. And sometimes the best next search action is none. The agent already knows enough to decide.
