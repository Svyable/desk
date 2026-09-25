# The Searcher Around the Model

In May 2025, Google DeepMind described a system called AlphaEvolve. The headline was easy to compress into the familiar language of the moment: a Gemini-powered agent had discovered better algorithms. The more interesting part was the machinery surrounding Gemini.

AlphaEvolve did not ask a language model for one brilliant answer and wait for genius to arrive in a text box. It assembled prompts, generated candidate programs, executed them, scored them with automated evaluators, stored the results, selected promising programs, mutated them, and fed the survivors back into another round. Fast models could produce breadth. Stronger models could spend effort on harder proposals. The database remembered what had already been tried. The evaluator made some kinds of failure cheap enough to survive. The next proposal did not begin from the same ignorance as the first.

The model mattered. The searcher around the model mattered too.

DeepMind reported that the system had improved algorithms used in parts of Google's computing infrastructure, found a way to multiply 4-by-4 complex-valued matrices with forty-eight scalar multiplications, and improved the best known result on a fraction of the open mathematical problems the team attempted. Those claims belong to the company and should be read with the ordinary caution given to company reports. But the architecture itself is not promotional language. It exposes something that tends to disappear when people talk about artificial intelligence as if capability lived entirely inside model weights. A model proposes.

A system decides what proposal to ask for, what to test, what to remember, what to reject, what to revisit, and when the result is good enough to keep. That second set of decisions is search.

The distinction is easy to miss because a chat interface hides it. Type a question, receive an answer, judge the answer. The sequence makes intelligence look like a function from prompt to completion. Even when the model reasons internally, the outside world is mostly passive. The user supplies the evidence. The model operates on what it was given. An agent has a different problem.

A software agent opens a repository and does not initially know which file matters. A web agent lands on a page and does not know which link will expose the needed fact. A research agent receives a scientific question and does not know which paper, experiment, database, measurement, or expert will collapse the uncertainty. A procurement agent does not know whether the quoted price is exceptional until it looks somewhere else. A diagnostic system cannot reason its way to a lab value that nobody measured. The decisive move may be the answer. It may also be the next observation. This book is about that move.

The word search has become so broad that it can conceal the problem. Search can mean typing words into Google. It can mean traversing a game tree. It can mean optimizing a function, crawling a website, testing a hypothesis, exploring a codebase, trying a sequence of tools, generating candidates, asking another agent, running an experiment, or opening one more file.

Those activities are not identical. They do share a constraint: the system cannot inspect everything that might matter before it must choose what to inspect next.

The modern agent is therefore a machine for allocating attention under uncertainty. That sounds abstract until the costs are attached.

A browser action can consume seconds and change the page. A model call can consume money and context. A database query can be fast but stale. A simulation can take hours. A laboratory experiment can take weeks. A human escalation may be accurate and expensive. A medical test can be invasive. An API may reveal a field that a web page hides. An authenticated internal system may contain the truth while the public internet contains only guesses. A code agent can run the entire test suite and spend twenty minutes learning what a targeted test would have revealed in six seconds. The agent is not merely asking, “What is true?”

It is asking, whether explicitly or through its policy, “What is worth finding out next?” Humans do this constantly and usually without naming it.

A mechanic hears a sound and decides whether to open the hood, take a short drive, ask when the sound began, read an error code, or ignore the complaint long enough to reproduce it. A physician chooses whether to order a test now or gather more history first. A journalist decides whether a second source would add independence or merely repeat the same rumor. A scientist chooses the experiment that can most sharply separate two explanations. A good programmer reading an unfamiliar codebase does not open files at random. Experience has compressed years of failed searches into an intuition about where bugs like this tend to live.

This is one reason expertise can look magical. The expert often reaches the useful evidence sooner.

Not always because the expert reasons better after seeing it. Because the expert knows where to look.

Language models have made the distinction newly important by changing the relative cost of generation. It is increasingly cheap to produce another paragraph, another program, another plan, another hypothesis, another candidate design. In evaluator-rich environments, a system can generate many of them and let tests decide. AlphaEvolve is an extreme version of this. Program candidates can be executed. Their scores can be recorded. The loop can continue without asking a human to read every idea. The interesting scarcity moves downstream.

If ten thousand candidates can be produced, which ten thousand should be produced? Which evaluator deserves trust? What happens when the evaluator captures only part of what matters? When should the system deepen one branch rather than widen the population? Which failures deserve to remain in memory because they reveal a boundary, and which are just dead code? When should the search stop because the marginal candidate is unlikely to justify another round of compute?

Generation does not abolish search. It can make search more important.

The same pattern appears in less forgiving environments, where the evaluator is not a clean number.

Consider a software agent given a bug report. Before it edits anything, it faces a chain of uncertainty. Is the report reproducible? Which package owns the behavior? Is the failing path local or the result of a shared abstraction? Which test already describes the intended behavior? Is the issue caused by code, configuration, a dependency version, an interaction across modules, or the test itself? A model can produce excellent code after the relevant slice of the repository is in context and still fail the task because it spent its first thirty actions reading the wrong part of the tree.

Benchmarks such as SWE-bench made this visible by moving language models out of isolated coding exercises and into real repositories. The task is not “write a function from a specification.” The task begins inside someone else's accumulated system. The agent has to orient itself. Orientation is search.

Web agents expose the same difficulty more brutally because the environment answers back. In WebArena and related environments, an agent may need to navigate pages, inspect records, enter forms, compare information, and complete tasks across realistic websites. The action changes what appears next. A click can reveal evidence. It can also commit a state change. A search box can return the right page, a nearly right page, or a list long enough to create a second search problem.

A single model response is no longer the unit that matters. The trajectory is.

This shift from answer quality to trajectory quality changes what “intelligence” means operationally. A system can have excellent local reasoning and poor global behavior. It can explain every step convincingly while choosing a sequence of steps that never encounters the decisive evidence. It can become articulate inside the wrong branch.

That failure has a human analogue. Anyone who has spent an afternoon researching the wrong version of a problem knows the sensation. The work can be careful. The notes can be extensive. The sources can be real. The conclusion can even be internally coherent. None of that repairs the fact that the search was aimed at the wrong uncertainty.

Search errors are dangerous because they often produce well-supported answers to the question the system happened to investigate. The user asked a different one.

The distinction suggests a different way to evaluate agents. Instead of asking only whether the final output is correct, inspect what the system spent its evidence budget on.

Did it open the file that could falsify its leading theory?

Did it seek an independent source or merely another copy of the same claim?

Did it run a test that discriminated between two plausible causes, or a test that would pass under either?

Did it notice that a permission boundary made the answer unknowable from the tools available?

Did it branch because the evidence justified multiple paths, or because the system had no policy for killing weak ones? Did a failure change the next move?

That last question is the beginning of the entire book.

Suppose an agent has five search actions available. One is cheap and weak. Another is expensive and decisive. A third works only when a certain hidden condition is true. A fourth is redundant with the first. The fifth changes the environment while measuring it.

If the agent receives new evidence, the values of those actions may change. Or they may not. That difference separates genuine adaptive search from decorative looping.

There is a simple class of search problems in which adaptation buys nothing. Imagine actions that independently have fixed probabilities of discovering a target. Each failure teaches nothing. The target does not move. The hit rates do not change. One action has the best discovery rate per unit cost. In that world, the clever agent should keep taking the best action. Switching because the last attempt failed does not make the next attempt any better. A long chain of reflection can produce the appearance of responsiveness without changing the mathematics.

This boring case is useful because it forces a question agent designers often skip. What changed?

What fact in the observation should make the next action different?

If nothing changed, the system may be spending intelligence where none is required.

If something did change, then the problem becomes interesting. A failed test can eliminate a hypothesis. A source can reveal a name that opens a new database query. A compiler error can localize a dependency. A medical symptom can change the value of the next test. A browser page can expose a hidden menu. A scientific result can make one experimental branch newly worth funding and another newly irrelevant. Search becomes learning when observation changes the action values.

This is not a new mathematical idea. Sequential experimental design, active hypothesis testing, controlled sensing, active learning, stochastic optimization, bandit problems, and partially observable control have all studied versions of the same difficulty for decades. The agentic moment has given the old problem a new body. The body matters.

A modern agent can operate across tools with wildly different semantics. Some actions produce text. Others alter files. Some retrieve structured data. Others execute code. Some are reversible. Others send emails, place orders, move money, change permissions, or command physical systems. Some observations are independent. Others all trace back to the same upstream source. Some tools answer quickly but with uncertain provenance. Others are slow because reality is slow. The policy has to know the difference.

Calling every tool a “search tool” flattens the architecture. A calculator is not a search engine. A test runner is not a browser. A database query is not a human witness. A simulation is not the world. A language model asked to critique its own answer is not automatically independent evidence. The agent needs a model, explicit or learned, of what each channel can reveal and what it cannot. That point is more important than it first appears.

If two materially different worlds produce exactly the same observations through every tool the agent can access, no amount of adaptive cleverness can distinguish them. The problem is not weak reasoning. The problem is observability.

A hiring agent cannot infer a work sample that was never collected.

A fraud system cannot use a device signal it is not permitted to see.

A code agent cannot know the production configuration if only the public repository is available.

A research agent cannot resolve a proprietary experimental result from papers that never report it.

A browser agent cannot click through an authentication wall without authorization. The next capability gain may be another reasoning loop. It may also be a new sensor.

Agentic systems are often discussed as if adding tools always makes them more capable. The opposite can happen. Every new channel creates routing work, new failure modes, new latency, new permission questions, and new opportunities to mistake quantity for coverage. An agent with twenty overlapping search APIs may be less observant than an agent with four deliberately complementary evidence sources. The design problem is not maximum tools. It is sufficient discrimination at acceptable cost.

That sentence connects modern agents to a much older idea: experimental design.

Herman Chernoff's 1959 work on sequential design considered settings in which an experimenter chooses which experiment to perform while trying to discriminate among hypotheses. Later work on controlled sensing made the same structure explicit: control can affect what is observed even when it does not directly change the hidden state. The controller is not steering the world toward a target. It is steering the evidence toward a decision.

That is a useful description of many agent tool calls. Search a different database. Run a different test. Ask a different question. Open a different file. Change the resolution. Call a human.

Each action is an attempt to reshape the next observation.

The modern twist is that the policy itself can be learned.

A language agent can accumulate trajectories across many tasks. It can observe which queries exposed decisive facts, which branches wasted time, which tests localized faults, which pages tended to contain authoritative answers, which tool sequences triggered errors, and which stopping points correlated with successful outcomes. In principle, those traces can become training data for a policy that does not merely know more but looks better. The phrase “learning to search” is meant literally. The searcher can improve. That raises harder questions than prompt design.

What is the training target for a good search decision when the final answer is known only at the end of a long trajectory? How should credit be assigned to an early tool call that looked useless until it unlocked the decisive action six steps later? How do we distinguish a genuinely useful search heuristic from a benchmark ritual learned by repetition? How much of a successful trajectory transfers when the interface changes? Can a system learn when to ask for help rather than learning to avoid expensive humans because the reward function penalized latency? Can it recognize that two sources are dependent even when their prose differs?

Most importantly, can it learn what it does not know in a way that changes where it looks?

That phrase is usually treated as a philosophical virtue. In an agent it becomes an engineering requirement. Uncertainty has to route action.

A system that expresses uncertainty but continues taking the same steps has not operationalized it. A system that knows exactly what it is uncertain about can choose evidence that attacks the uncertainty directly. The quality of the internal probability estimate matters less than whether the estimate changes behavior in the right direction.

This is why some of the most interesting agent systems look less like personalities and more like laboratories. They generate, test, compare, store, revise, and stop.

AlphaEvolve is compelling not because it proves that a language model has become a mathematician in the human sense. It is compelling because it makes the loop visible. Creativity is one component. Evaluation is another. Memory is another. Selection is another. The system has a method for spending its next unit of computation based on what happened to the previous ones.

The breakthrough, if the architecture continues to generalize, will not be an agent that searches forever.

That would be easy to build and expensive to tolerate.

The interesting system is one that can tell the difference between a branch that deserves one more look and a branch whose uncertainty no longer matters.

It knows when a new observation can change the decision. It knows when the tools cannot resolve the distinction.

It knows when another candidate will only enlarge the verification queue. It knows when failure has taught it something. And, eventually, it knows when to stop. The model generates possibilities. The searcher decides which reality to meet.
