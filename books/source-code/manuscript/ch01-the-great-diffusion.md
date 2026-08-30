# The Great Diffusion

A software company can now spend an astonishing amount of money becoming artificial-intelligence-enabled without becoming much better at understanding its own software.

The purchases are easy to imagine because versions of them are already ordinary. An assistant appears in the office suite. A bot summarizes meetings. Support gets draft replies. Sales gets account research. Finance gets a synthetic analyst. Design gets image generation. Engineering gets completion, chat, code review, ticket drafting, test generation, and an agent that promises to take an issue from sentence to pull request. A year earlier, some of these capabilities looked like frontier research. A year later, they are toggles in admin consoles.

This is mostly good news. Useful intelligence is becoming cheaper and easier to distribute. Tasks that once required a specialist, a long wait, or a blank afternoon increasingly begin with a machine-produced first pass. The strange part is what happens next. The more widely these capabilities spread, the less strategic it becomes merely to possess them.

A clever behavior demonstrated by one model provider is observed by the others. A good interaction pattern migrates from a startup into an IDE, then into an enterprise suite, then into an open-source project. Prices move. Latencies fall. Smaller models inherit abilities that recently required larger ones. Tool calling gets standardized. Context windows grow. Agent loops that were the subject of conference talks become library functions. Procurement catches up. The exceptional becomes available, then expected, then boring.

This is the great diffusion.

It does not mean models are all the same. They are not. Reasoning quality matters. Latency matters. Cost matters. Tool use matters. Coding skill matters. Reliability matters. Different models remain better at different work, sometimes by large margins. But the direction of travel is hard to miss: general model capability diffuses faster than most companies can turn it into a durable organizational advantage.

That changes the question.

For a while, companies could ask, “Do we have AI?” Then, “Which model do we have?” Then, “Which departments have agents?” Those questions will come to sound like asking whether the company has databases or web browsers. The interesting question is what all that intelligence can become situated inside.

For a software company, the most consequential answer is its source code.

The codebase is not the whole company. It does not contain customer trust, unwritten strategy, market timing, a salesperson’s intuition, a regulator’s private concern, or the reason an executive made a compromise three years ago. Production behavior also depends on data, infrastructure, third parties, configuration, clocks, networks, and failures that source alone cannot fully predict. A mature organization is larger than its repository.

Still, the product and tooling code are unusually important because this is where a company has been forced to become precise.

A product promise eventually becomes a branch. A pricing policy becomes arithmetic. A permission becomes a guard. A compatibility commitment becomes an ugly conditional everyone is afraid to remove. A reliability lesson becomes a retry. An incident becomes an assertion, a timeout, a circuit breaker, a metric, or a comment written in a tone that suggests somebody lost a weekend. A workflow that began as three people in a room becomes an internal tool. A business rule moves from a meeting into a schema and, once it does, the machine begins enforcing it thousands or millions of times without remembering the meeting at all.

This is why source code is better thought of as executable institutional memory.

The product code is the visible institution. It determines what customers can actually do. It decides whether a transaction is allowed, when a document expires, which recommendation wins, how a notification is routed, what happens when a user is suspended, which old clients still receive an obsolete field, and what the system does when the happy path stops being happy.

The tooling code is the less visible institution supporting it: migrations, generators, deployment systems, administrative controls, development utilities, test harnesses, repair scripts, data jobs, feature-flag machinery, release automation, observability, evaluation tools, and the odd little programs that exist because somebody once discovered that doing a supposedly rare task by hand was too dangerous.

If you want to know what a software company believes, read its strategy. If you want to know what its machine is permitted to do on Tuesday afternoon, read the code.

And yet this is precisely where many AI deployments remain strangely weak.

The company buys an excellent model. The engineer opens a chat panel. The model can explain consensus algorithms, produce a competent React component, discuss the likely architecture of a billing system, and write a plausible diagnosis of almost any common bug. But ask why this company’s billing system issued the wrong credit for one category of account, and the model is suddenly a bright consultant standing in the parking lot.

It knows software. It does not know the software.

That distinction is going to become one of the defining differences between useful and decorative AI inside technical organizations.

A model with general coding knowledge can tell you what usually causes duplicate jobs. A source-grounded model can show you the two producers that construct idempotency keys differently. A general model can list reasons a feature flag might behave inconsistently. A source-grounded model can find the legacy caller that reads the default before the tenant override is loaded. A general model can explain how permissions are commonly layered. A source-grounded model can discover that the export endpoint checks a role enum while the background worker trusts a capability bit written by an older service.

The gap between those answers is not eloquence. It is observation.

Software companies have spent the model era thinking hard about generation because generation is the part that looks magical. The next advantage will come from making observation cheap.

That means the source must be legible not just to engineers but to the whole machine stack around them. I think of that stack in three parts: the IDE, the harness, and the models. None is sufficient alone.

The IDE is the place where a human and a machine first encounter the repository. Most IDEs were designed around a useful fiction: the file currently in front of you is the center of the work. That fiction helped humans because humans have limited attention and usually need a stable surface. It is much less appropriate for an agent trying to answer a behavioral question.

A behavioral question has no obligation to respect the file tree.

“Why does this invoice become overdue?” may cross an API handler, a database model, a scheduled job, a payment-provider adapter, a feature flag, a migration, two tests, a timezone helper, and a configuration default. “What will break if we change this field?” may require finding readers in three languages, generated clients, a warehouse job, a mobile compatibility layer, and a backfill script that runs twice a year. “How does account deletion really work?” may begin in the UI and end in a queue consumer that nobody on the product team has opened in months.

If the AI inside the IDE can see only the open buffer and a few semantically retrieved snippets, it has keyhole vision. It may be extremely intelligent inside the keyhole. The problem is the room.

An IDE suitable for serious agentic work should make repository-scale interrogation cheap. Exact search. Regex search. Symbol lookup. References. Definitions. Git history. Blame when useful. Tests. Build metadata. Configuration. Generated-code boundaries. Fast file slicing. The ability to run a narrow command and inspect the result. The ability to move from a user-visible string to the code that emits it, then to the state transition that enables it, then to the tests that describe the intended edge cases.

The point is not to cram all of this into the model’s context window. That is the instinct to resist.

A repository is not a prompt waiting to become large enough.

The repository is an environment to be investigated.

This is where the harness becomes more important than it first appears. A model can possess tool-calling ability in the abstract and still be poor at repository work because the harness gives it bad tools, expensive tools, shallow tools, or tools that do not preserve what was learned. There is a large difference between adding a “search repository” button to a chatbot and constructing a system that can conduct an investigation.

A good harness lets an agent ask dozens or hundreds of narrow questions without turning each question into ceremony. It can fan work out. It can constrain searches. It can fetch a few relevant lines rather than whole files. It can preserve a ledger of evidence. It can distinguish observation from inference. It can run the nearest test. It can compare sibling implementations. It can revisit the code when a later hypothesis contradicts an earlier one. It can send cheap work to cheap models and reserve expensive reasoning for the places where reasoning actually matters.

This last point is easy to underestimate because the industry has developed a habit of evaluating AI systems as though the central scarce resource were intelligence per call.

Repository understanding is often limited by observations per dollar.

Suppose a bug could be explained by any of eight mechanisms. The expensive move is to give a giant model twenty thousand lines selected in advance and ask it to think hard. The better move is often to dispatch small models to make cheap discriminating observations: search every writer to the state field; find all call sites of the serializer; locate references to the error string; compare the v1 and v2 handlers; search tests for the boundary condition; identify every place the feature flag is read; find whether an old configuration key still exists.

Most of those jobs do not require philosophical depth. They require patience, literalness, and a willingness to keep looking.

This is why small models are so valuable in the source-code loop. They can be field workers.

Give a small model ripgrep, a language server, file listing, narrow file reads, git search, and test discovery, and it can cover an enormous surface area for little cost. It does not need to understand the whole company on each call. It needs to return evidence that changes the probability of the competing explanations.

The large model has a different job. It should not spend its best reasoning capacity rediscovering whether a token appears in eleven files. It should take the evidence gathered by the small models and ask harder questions.

What story explains all of these observations at once? Which observation does not fit? Are we confusing the intended behavior with the behavior that ships? Is the apparent cause downstream of another condition? Is there a second path that produces the same state? Which piece of evidence would falsify the current explanation fastest? What is the smallest change that restores the invariant without breaking the compatibility path we just discovered?

Then the large model should send the searchers back out.

This alternation matters. Search without synthesis becomes archaeology. Synthesis without search becomes fiction. The useful machine moves between them until the explanation survives contact with the repository.

There is a temptation here to reach immediately for a grander retrieval system. Vector databases, embeddings, code graphs, repository summaries, generated architecture maps, persistent memory, dependency indexes, and specialized code-search engines can all be useful. Some become necessary at sufficient scale. But they should not obscure how powerful recursive textual search becomes once a model is allowed to issue it repeatedly.

Grep has an unfair advantage: software leaves names everywhere.

The UI has strings. APIs have paths. Schemas have fields. States have enums. Jobs have topics. Logs have messages. Metrics have labels. Flags have keys. Tests have descriptions. Migrations have old names. Errors have codes. Configuration has environment variables. Adapters mention providers. Compatibility branches mention versions. A user reports a sentence; that sentence can lead to a component; the component leads to an event; the event leads to a handler; the handler leads to a state write; the state write leads to an old migration; the migration explains why only accounts created before a certain date are broken.

No single search is impressive. The chain is.

That is why the most effective general technique for grokking unfamiliar feature functionality is not “read the repository” and not “ask the model.” It is to turn the repository into a sequence of questions whose answers determine the next questions.

Start with the traces. Search the visible string. Search the endpoint. Search the state. Search the metric. Search the flag. Search the failing assertion. Search the queue name. Search the exact field from the payload. When you find a symbol, search its readers and writers. When you find an implementation, search its siblings. When you find the likely path, search for the path that contradicts it. When a test appears to prove the behavior, search whether that test actually runs in the relevant configuration.

The machine should become suspicious by default.

This does not mean trusting textual search over every other source of truth. Runtime traces can reveal paths the repository makes difficult to predict. Database inspection can show corrupted or historical state. Production configuration can differ from defaults. Distributed systems produce timing behavior that static inspection will miss. A disciplined source-code agent should know when the repository has reached the edge of what it can prove and ask for runtime evidence.

But source search is the best universal starting medium because it connects so many layers cheaply. It is the ordinary tool that becomes extraordinary when the cost of asking the next question approaches zero.

The strategic consequence for companies is larger than developer productivity.

A company with a grokkable codebase can make many kinds of intelligence more situated.

Support can move from a customer symptom toward the implementation that governs it. Security can enumerate producers and consumers of a sensitive state rather than reasoning from an architecture diagram alone. Product can ask what a feature actually does across old accounts, flags, mobile clients, and edge-case tests before redesigning it. Reliability work can connect an alert string to the fallback branch that emits it and then to the configuration that makes the branch common in one region. New engineers can ask bounded questions and receive evidence-backed tours instead of memorizing the organization chart before they can change a line.

Management gains something too, though the benefit is less theatrical. Mature companies accumulate invisible complexity faster than they accumulate people who understand it. Every acquisition, migration, rewrite, pricing change, compatibility promise, and incident leaves another layer. Institutional memory becomes uneven. Some crucial system is “understood” because two people still remember why it works that way. Another is understood only at the level of its service boundary. A third is surrounded by documentation that describes what everyone wishes were still true.

Repository-grounded agents can lower the cost of reconstructing local truth.

That is not the same as replacing expertise. In fact, it can make expertise more obvious.

When the machine can find every writer to a field, the human no longer earns status by remembering where three of them are. The valuable judgment is noticing that there should only be one writer. When the agent can reconstruct the feature flag’s history, expertise lies in deciding whether the flag should exist at all. When a model can trace the retry path, the engineer contributes the business judgment that duplicate execution is tolerable for one operation and catastrophic for another.

Search commoditizes some memory. It does not commoditize judgment. It gives judgment a larger field of evidence to work with.

This is also why companies should be cautious about measuring their AI maturity by seat count. It is possible to have thousands of employees using AI every day while the models remain mostly detached from the organization’s executable memory. The system drafts more text, summarizes more meetings, writes more boilerplate, and perhaps even generates more code. Yet the hardest questions about the product still require finding the one person who knows the old service.

That company has AI everywhere and comprehension nowhere.

The more dangerous version occurs when generated code increases faster than understanding. AI makes it cheaper to add another path, another adapter, another configuration option, another test, another abstraction. If retrieval and comprehension do not improve at the same time, the organization can accelerate into opacity. The codebase grows partly because the machine is productive; the humans become less certain about what the larger machine now does.

Source-code understanding is therefore not a convenience layer around generation. It is one of the controls that makes generation sustainable.

A code-producing agent should leave behind a system that future agents can interrogate. Names should remain searchable. Tests should encode behavior clearly enough to be found by behavior. Build and ownership metadata should be queryable. Generated files should be identifiable. Tooling should expose narrow reads and deterministic searches. Repository permissions should allow useful investigation without casually handing every agent every secret. Search latency should be low enough that the model does not learn to guess because retrieval feels expensive.

These sound like small engineering details. Together they determine whether the company’s machine can explain itself.

There is a useful analogy to observability. Serious teams do not operate production systems by saying that a smart engineer can probably infer what the servers are doing. They instrument the system. They keep logs, traces, metrics, profiles, dashboards, and histories because operating an unobservable system eventually becomes indistinguishable from superstition.

We need the same attitude toward comprehension.

The control plane changes the system. The data plane carries the work. Software companies increasingly need what might be called a grok plane: the search, navigation, evidence, and reasoning infrastructure that makes the system intelligible to humans and machines.

This grok plane is not one product. It is a property of the environment.

Can an IDE expose the whole repository rather than a curated handful of files? Can the harness make a hundred small observations cheaply? Can models distinguish what they know from the code from what they merely know about programming? Can an explanation point back to the evidence that produced it? Can an agent test the thing it thinks is true? Can it notice when a runtime question has escaped the repository and needs a different instrument? Can it do all this quickly enough that searching becomes the default reflex rather than the step people skip when they are in a hurry?

Those questions will matter more as model brands matter less.

Your competitor can increasingly buy the same class of reasoning model you can. It can buy similar coding assistants. It can reproduce common agent loops. It can read the same papers, use the same protocols, install the same open-source frameworks, and hire engineers who have used the same tools.

It cannot purchase, in an afternoon, a truthful operational model of your particular software.

Neither can you.

You have to build the ability to recover that truth continuously.

There is another reason this architecture matters: bugs and features ask almost the same question of the repository. A bug asks, “Which actual path produced an outcome we did not want?” A feature asks, “Which actual paths would have to change to produce an outcome we do want?” In both cases the dangerous mistake is to substitute the conceptual architecture for the executable one.

A feature called “exports” may not live in an exports folder. Its behavior may be scattered through permission checks, job creation, storage policies, notification templates, retention cleanup, audit records, and compatibility code for an older client. The feature is the trace connecting those pieces. A defect inside it is usually a deformation of that trace: one missing guard, one stale mirror of state, one unexpected producer, one fallback reached under a condition nobody included in the diagram.

This is where repeated search has an advantage over the seductive idea that an agent should simply “know the codebase.” Knowing a codebase is too large and too static a goal. The code changes. The question changes. The relevant slice changes with it. What we need is the ability to reconstruct the slice quickly enough that fresh understanding is cheaper than stale memory.

The resulting object is less like a summary and more like an evidence graph. This handler calls that adapter. This field is written here and read there. This flag selects the old path for these accounts. This test asserts the boundary. This migration explains the historical state. This log line proves the fallback can be reached. Some edges are direct. Some are inferred. A capable large model can keep those distinctions intact while deciding what to search next.

That gives the organization a better answer than “the agent knows our repository.” The agent can show its work. It can tell you what it found, what it concluded, what remains uncertain, and what observation would change its mind. For code, that is a far more useful form of intelligence than familiarity. Familiarity feels fast right up to the moment the system does something surprising. Evidence remains useful precisely when it does.

This is the part of the AI transition that I think many companies will discover late. The obvious race is to distribute intelligence. The deeper race is to connect intelligence to the places where the organization has already encoded its hard-won specificity.

For software companies, source code is the largest such place.

The winning IDE will not merely complete the next line. It will help the machine traverse the behavioral question. The winning harness will not merely expose a tool schema. It will make investigation cheap, recursive, stateful, and falsifiable. The winning model stack will not be one enormous mind asked to swallow the repository. It will be an ecology: small models searching relentlessly, larger models compressing the evidence into explanations, and both returning to the source whenever confidence outruns proof.

That architecture does something more valuable than generate code quickly. It gives a company a way to ask its machinery what it has become.

The great diffusion makes intelligence abundant.

Understanding your own source is still work.
