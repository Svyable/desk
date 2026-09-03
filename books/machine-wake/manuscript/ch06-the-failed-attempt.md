# Chapter 6 — The Failed Attempt

Success has a compression algorithm.

A system tries several things, one works, and the user receives the one that worked.

The failed attempts disappear.

This is ordinary human behavior. A carpenter does not hand the customer a bag containing every screw that was dropped, every cut measured twice and every pencil mark erased. A scientist publishes a result with a methods section rather than a full replay of every mistaken hypothesis. A chef serves dinner, not the burned onion from the first pan.

Useful work involves correction.

Artificial intelligence makes correction unusually cheap to perform and unusually easy to hide. A model can generate another answer in seconds. An agent can call a tool again. A coding system can write a patch, run tests, inspect the failure, rewrite the patch and run the tests once more. A search system can discard poor queries and reformulate them. The visible product can improve while the number of invisible attempts grows.

This creates a new kind of machine wake: work that was done but not kept.

The distinction matters because most measurements are biased toward success. Product dashboards count tasks completed. Users remember the answer that arrived. Demos show the final state. Benchmarks often report whether a system eventually solved a problem within an allowed budget. The failed paths may be present in logs, but they rarely appear in the story people tell about the capability.

A system that succeeds on the first attempt and a system that succeeds after twenty attempts can look identical from the outside.

Operationally they are different systems.

They consume different amounts of computation. They create different loads on external tools. They expose different amounts of data. They generate different numbers of credentials, network calls and log records. They occupy the queue for different lengths of time. They have different failure modes under rate limits and outages. They may have different security risk because each tool call is another interaction with something outside the model.

The failed attempt is where capability turns into cost.

This is especially clear in code generation.

A coding agent can be asked to fix a bug in a repository. It reads files, proposes a change, runs tests and encounters a failure. It inspects the stack trace, modifies another file, runs the tests again, discovers a lint error, fixes formatting, runs the test suite, sees that an unrelated integration test fails intermittently, reruns it, then opens a pull request.

The final diff may be ten lines.

The useful artifact is tiny compared with the search through possibilities that produced it.

Humans work this way too. The difference is that machine attempts can multiply until some budget stops them. A developer gets tired, notices the afternoon ending and decides that a small workaround is good enough. An agent can continue generating, testing and revising as long as tokens, money, permissions and wall-clock time remain.

Persistence is a capability and a risk.

The most naive agent designs confuse persistence with intelligence. If a task fails, try again. If it still fails, try a different wording. If that fails, ask another model. Add a critic. Generate more candidates. Search more pages. Run another test. Some of these strategies work because search really does improve outcomes. The trouble is that search has a frontier where additional attempts produce diminishing information.

Beyond that frontier, persistence becomes residue.

A good system needs a theory of failure.

Was the previous attempt wrong because the model misunderstood the task? Because the tool returned a temporary error? Because the user lacks permission? Because the desired state is impossible? Because the external world changed? Because the evidence is ambiguous? Because the budget is too small? Because the task itself is underspecified?

These failures should not trigger the same response.

A temporary network timeout may justify a retry. A permanent “access denied” should usually stop and surface the missing permission. A test failure after a code change can provide specific information for the next attempt. A search returning no credible evidence may mean the right conclusion is uncertainty, not a hundred more queries. A tool reporting that a reservation is unavailable should not be pressured until the restaurant becomes available by arithmetic.

Failure is information only when the system preserves its meaning.

This is why error semantics matter so much for agentic computing. The web grew up around human users who can read an error page and infer context. APIs added status codes and structured responses so software could react automatically. Agents now sit between the two. They can interpret text flexibly but may also overinterpret it. A vague error invites improvisation.

Improvisation is expensive when repeated at machine speed.

Suppose a service returns “Something went wrong.” A human might wait, refresh once and give up. An agent may not know whether the error is transient. If instructed to accomplish the task, it can try alternate endpoints, modify parameters or search for another route. That flexibility is useful when the first path is brittle. It is alarming when the underlying failure is a security boundary.

A permission denial should be a wall, not a puzzle.

This is one reason modern agent systems need policies outside the model. The model can propose. Deterministic controls decide what it is allowed to attempt. Budgets cap tool calls, spending and elapsed time. Credentials limit scope. Human approval gates irreversible actions. Rate limits prevent loops from expanding without bound.

The machine's failed attempts need a container.

The container can be literal. Sandboxed environments let a coding agent run commands without giving it unrestricted access to production. Temporary branches let it experiment without altering the main codebase. Simulators let autonomous systems test plans against a model of the world before acting in the world.

The container can also be economic. A task may have a maximum dollar budget. Once exceeded, the agent stops and explains what remains unresolved. This sounds primitive compared with visions of autonomous intelligence, but budgets are one of civilization's most reliable technologies for ending unproductive search.

The container can be temporal. Give the agent ten minutes, not forever.

And it can be epistemic. Require the system to state what new evidence another attempt is expected to produce. If there is no answer, stopping may be more intelligent than trying again.

The interesting part of failure is that it can be valuable even when the task never succeeds.

A failed trajectory can show developers that a tool description is confusing. Repeated malformed calls can reveal a bad schema. A set of coding attempts that fail the same test can reveal a hidden architectural dependency. An agent that repeatedly requests a permission it should not need can expose overcoupling. A user question that causes many uncertain searches can reveal a knowledge gap.

This is the beginning of a science of machine mistakes.

Traditional software failures are often reproducible. Given the same code, state and input, the program can fail in the same way. AI systems introduce more variability. Sampling can change outputs. External retrieval changes over time. Tool state changes. Model versions change. Agent planners may choose different paths.

The failed attempt therefore becomes evidence that may not be easy to recreate.

This increases the value of recording enough trajectory information to understand what happened. But it also increases the volume of records. A long-running agent can produce a detailed transcript of intermediate reasoning, tool calls, responses, edits, test outputs and exceptions. Keeping everything can be useful for debugging and dangerous for privacy. Discarding everything can make failures impossible to investigate.

The wake immediately encounters the memory problem we will examine later.

Before retention, however, there is a more basic product question: should the user see the failure?

Interfaces often hide intermediate errors because exposing every wobble makes a system feel unreliable. That instinct is reasonable. A person asking for a trip plan does not need a notification each time one hotel page times out. The agent should absorb routine turbulence.

But hiding all turbulence can create false confidence.

If an agent tried six sources and five failed, the surviving result may be less robust than it appears. If a coding agent ran only a subset of tests because another environment could not be reached, the green result needs qualification. If a research assistant could not access an important paper, the final summary should not imply comprehensive review. If a purchasing agent failed to compare one major supplier, the recommendation should reveal the missing route.

The interface needs to distinguish irrelevant implementation noise from uncertainty that changes the meaning of success.

Humans do this through professional norms. A mechanic does not list every wrench used, but should disclose that a diagnostic test could not be completed. A doctor does not narrate every rejected hypothesis, but should communicate meaningful uncertainty. A lawyer does not show every abandoned sentence, but should not conceal that controlling authority points the other way.

Agents need equivalent norms.

A useful rule is that a failure should surface when it changes confidence, coverage, authority, cost or reversibility.

That is not a perfect rule, but it moves the design away from cosmetic success.

Failed attempts also complicate productivity measurement.

Imagine that an AI system allows an employee to produce five times as many first drafts. If four out of five require major correction, the gross production metric looks extraordinary while net useful output barely changes. Or a coding agent opens ten pull requests, eight fail review and two ship. Counting generated lines celebrates the wake rather than the product.

Machine output is cheap enough that rejection rate becomes a first-class variable.

This is already visible in content systems. When text, images or music become cheap to generate, the scarce resource shifts toward selection. A person can ask for one hundred logo concepts, but somebody still has to decide which one is good. Generating more candidates can improve the chance of finding an excellent one while also increasing review cost.

At some point, the evaluator becomes the bottleneck.

That is the human version of a queue behind failed attempts.

Agents can evaluate their own candidates, but self-evaluation has limits. A model can rank answers by criteria it understands. It can run tests. It can use a separate critic. Yet the evaluator may share blind spots with the generator. If all candidates are wrong in the same way, ranking does not recover truth.

External checks are valuable because they introduce different information.

A compiler can reject syntactically invalid code. A test suite can expose behavioral regressions. A type checker can catch inconsistencies. A database can confirm whether a reservation exists. A cryptographic signature can establish provenance. A human can notice that a technically correct answer violates the purpose of the task.

The best agent systems therefore alternate generation with contact with reality.

Each contact can prune the search.

This is why tests are so powerful in coding. They transform an open-ended language problem into a loop with a concrete signal. The agent does not need to philosophize about whether the software works. It can run something. The quality of the loop then depends on the quality of the test. A weak test can certify a wrong patch. An overfitted agent can change the test instead of fixing the bug. A flaky test can send the system down unnecessary paths.

Verification has a wake too.

Every test run consumes time and compute. Large suites can dominate the cost of an automated coding task. Security scans generate findings. Static analysis produces warnings. Evaluation harnesses create datasets and reports. The system becomes safer by producing more intermediate material that somebody or something must process.

The answer to residue is not always less residue.

Sometimes we intentionally create evidence because ignorance is more expensive.

The key is to make the evidence discriminating. Ten thousand logs that cannot answer why a transaction happened are worse than ten structured events that can. One reliable integration test can be worth a thousand generated critiques. A well-defined error code can prevent a hundred blind retries.

Information quality controls wake volume.

This suggests a useful design objective for agents: maximize learning per failed attempt.

A retry that changes nothing and expects nothing new has almost zero learning value. A retry after a transient timeout can be sensible because time itself changes the condition. A second implementation after a precise test failure can be sensible because the error narrows the search. A different search query can be useful if it targets missing evidence. A new tool call is justified when it reduces uncertainty relevant to the task.

The agent should be able to explain, internally if not to the user, what changed between attempts.

This sounds like a requirement for sophisticated reasoning. Often it is simpler. Track error classes. Track repeated tool arguments. Detect loops. Count unchanged states. Stop when the same failure occurs three times. Ask for help when a permanent permission error appears. Record whether a new attempt used new evidence.

Boring controls rescue intelligent systems from stupid persistence.

The most expensive failed attempts may occur not inside one task but across organizations.

Companies run pilots that never reach production. Teams build duplicate internal assistants. Vendors train specialized models that are abandoned. Data centers reserve equipment for demand that fails to materialize. Regulators create reporting processes that collect information nobody uses. The machine wake includes institutional experiments too.

Failure at that scale can still be valuable if it changes the next decision.

A pilot that discovers a task is not suitable for automation has produced knowledge. A project that quietly dies without preserving why simply resets the organization's ignorance. The next team may repeat it.

This is why postmortems matter beyond outages. Organizations need records of unsuccessful AI deployments: what was attempted, what failed, what users rejected, where costs appeared, which data was missing, which risks could not be controlled. The glamorous artifact is the product that ships. The more valuable artifact may be the reason something did not.

There is a cultural obstacle here. Success is rewarded. Failed attempts are embarrassing. Vendors want to present reliable systems. Teams want to justify investment. Researchers publish positive results more readily than dead ends. Users prefer seamless interfaces.

The wake becomes systematically underreported.

That creates bad forecasts. If we count only successful automation, we overestimate how easily the next task will automate. If we count only final outputs, we underestimate compute and tool demand. If we hide every agent recovery, we make reliability look intrinsic rather than engineered. If we discard failed trajectories, we lose the data needed to improve tools and policies.

A mature AI economy will need better accounting for attempts.

Not every attempt needs to be kept forever. Not every user should see every one. But system owners should know their amplification factor: how much invisible work is performed per unit of visible success.

For a simple model call, the factor may be close to one. For an agentic workflow, it may be ten, a hundred or highly variable. The number can be measured in model calls, tool calls, wall time, joules, dollars or human interventions. The right denominator is a useful completed outcome.

Once measured, the failed attempt becomes optimizable.

A tool description can be improved. A model can be routed better. A permanent error can stop sooner. A common search can be cached. An approval can be requested at the beginning instead of after twenty minutes of work. A test suite can be ordered so cheap informative checks run before expensive ones. A smaller model can handle early filtering and reserve expensive reasoning for the difficult cases.

The wake shrinks not because the machine tries less, but because each try knows more.

This is a richer idea of efficiency than raw speed.

Fast failure is useful when failure is inevitable. Slow persistence is useful when the search space contains a valuable solution and each attempt learns. The intelligence lies partly in knowing which situation you are in.

A machine that never fails is probably doing nothing difficult.

A machine that fails invisibly may be doing far more than anyone realizes.

The goal is not to remove failure from the wake. It is to make failure pay rent.
