# Learning by Touching the Work

A profession is full of things nobody writes down because the people who know them have stopped noticing that they know them.

That is the secret economy of expertise.

The senior mechanic hears the engine and reaches for the tool before the diagnostic screen finishes. The nurse notices that a patient looks wrong even though the numbers have not yet crossed a threshold. The deal lawyer reads a clause and knows which sentence will become expensive eighteen months later. The editor sees that the problem is not the paragraph being argued over but the promise made thirty pages earlier. The machinist feels vibration through the part. The trader knows that the price is moving for the reason everyone is saying and still understands that the trade is wrong.

Ask each of these people for a complete list of the signals and rules they used and the list will disappoint you.

Some expertise can be codified. Much of it can be demonstrated. A surprising amount is acquired in the uncomfortable region between the two, where a novice tries to do consequential work while an experienced person is close enough to intervene.

That region is apprenticeship.

We tend to remember apprenticeship as an old labor arrangement, a formal period before one became a journeyman or master. More important was its cognitive design. The learner was exposed to the same materials, constraints, failures, and standards as the expert. The novice did not merely receive propositions about the craft. He inhabited the sequence of actions from which those propositions had been extracted.

A painter's apprentice could learn that a particular mixture behaved differently because he had mixed it, spread it, watched it dry, seen it fail, and then watched someone more experienced correct the problem. A sentence in a manual might contain the same information. It would not contain the same memory.

This distinction becomes urgent when machines can supply expert-like output before the human has had expert-like experience.

The customer-support study by Erik Brynjolfsson, Danielle Li, and Lindsey Raymond offers a clean example because the work was measurable. Thousands of agents handled real customer conversations. A generative AI assistant supplied suggestions. Average productivity rose. The effect was much larger for workers with less experience and lower baseline skill than for the most experienced workers.

The tempting conclusion is that AI democratizes expertise.

There is truth in that phrase and danger in it.

The system did not turn a novice into an experienced worker. It allowed the novice to perform more like one on the observed tasks. That difference is not semantic. It tells us where the opportunity is and where the apprenticeship problem begins.

If a new employee can borrow the surface behavior of experience, an organization can improve service immediately. The worker may also learn. The researchers found evidence consistent with learning and with the AI disseminating patterns associated with stronger workers. This is one of the most encouraging findings in the early economics of generative AI because it points beyond substitution. The machine can become a channel through which practical knowledge moves.

But the channel can work two ways.

It can carry knowledge into the worker.

Or it can carry the worker around the knowledge.

Those two outcomes can look identical on this afternoon's dashboard.

Suppose a junior analyst receives an assignment to evaluate a company. Without an agent, she has to decide where to start, which filings matter, how to reconcile conflicting definitions, what to do when the reported segment structure changes, and whether management's preferred metric deserves to be trusted. She will waste time. Some of the waste is merely waste. Some of it is where she discovers the shape of the problem.

Give her a capable research agent and the first hour changes. The filings are collected. Tables are extracted. Competitors appear. A chronology forms. The model proposes questions. Suddenly the junior analyst is standing where an experienced analyst might have reached after a morning.

That can be wonderful.

It can also be cognitively fraudulent if the worker cannot tell which staircase she skipped.

The skill of using agents well will depend partly on knowing the shape of the missing experience.

This is why I dislike the phrase "AI literacy" when it is used to mean familiarity with features. Literacy is too weak a word for the problem. The professional needs a theory of delegated cognition.

What did I ask the system to know for me?

What did I ask it to notice for me?

What did I ask it to decide for me?

Which of those decisions am I still capable of reconstructing?

Where did I lose contact with the work?

These are not moral questions. They are design questions.

A Renaissance master did not need every apprentice to rediscover the chemistry of every pigment independently. The point of a workshop was to prevent civilization from restarting at zero every generation. Knowledge should transfer. Technique should compress experience. The apprentice should benefit from the dead and the living.

But the workshop did not confuse receiving a technique with possessing judgment.

That took repetitions.

The young worker had to see good and bad examples under enough changing conditions that the rule stopped being a sentence and became discrimination. This is why masters assigned work in gradations. The exercise was not merely "practice" in the schoolroom sense. It was exposure to variation.

Variation is where rules become judgment.

A model can accelerate that process if we use it deliberately.

Imagine teaching a young editor with an agent that can generate twenty plausible versions of a paragraph. The lazy use is to ask for the best version and paste it. The apprenticeship use is different. The learner ranks the versions before seeing the model's critique. She explains why three fail. The agent produces counterarguments. It creates edge cases. It imitates the author's surrounding prose and then intentionally violates one constraint at a time. The editor is not outsourcing discrimination. She is buying more examples to discriminate among.

The same pattern works in code review. Instead of having the agent simply repair a bug, ask it for several patches with different tradeoffs. Make the engineer identify which one fits the codebase and why. Have the agent generate tests that distinguish superficially equivalent implementations. Ask what hidden assumption would make the preferred patch fail.

Now the machine is not a shortcut around apprenticeship.

It is a generator of training situations.

That is one of the most underdeveloped possibilities in human-agent work. We are so excited by answers that we underuse artificial intelligence as a producer of deliberate difficulty.

A chess player improves by facing positions.

A doctor improves by cases.

A lawyer improves by fact patterns.

A security engineer improves by attacks.

A writer improves by sentences that almost work.

A manager improves by decisions whose consequences arrive later.

Agents can manufacture variations of these situations at a scale no human mentor could supply, then adapt them to the learner's weakness. The old workshop had one canvas and a handful of people. The new workshop can generate rehearsal worlds.

But rehearsal only matters if the answer is not shown too early.

This is a general law of assistance that has nothing specifically to do with AI: help can destroy the activity that creates competence.

GPS provides a small example. A person who is always navigated through a city may arrive reliably while building a weaker internal map. Autocomplete can make spelling easier while reducing retrieval. A calculator eliminates arithmetic effort, which is usually an excellent trade once number sense exists and sometimes a poor trade before it does.

Professional agents will create far larger versions of the same choice.

The more capable they become, the more important it will be to decide where assistance enters.

This is where workshop architecture becomes practical. A master can set a "first-touch rule": on certain tasks, the human must frame the problem before the agent sees it. In another class of tasks, the agent goes first because broad search is the bottleneck. In another, human and agent produce independent answers before comparison. In another, the agent is used only after the human commits to a hypothesis. In another, the human never performs the low-level work because preserving that skill has little value.

Different tasks deserve different learning arrangements.

The mistake is treating convenience as the default.

Convenience has no theory of what the person is becoming.

A good apprenticeship does.

This also complicates the usual debate about whether AI will "deskilling" or "upskill" workers. Both can happen inside the same occupation. A tool can remove one skill while increasing the value of another. It can make drafting easier and editing harder. It can make retrieval trivial and source evaluation more important. It can make syntax cheap and architecture expensive. It can make a first answer abundant and a good question scarce.

The question is not whether a job becomes more or less skilled in some aggregate sense.

The question is which muscles atrophy and which are forced to grow.

That is why the workshop needs an anatomy of the work.

Before delegating heavily, separate at least three layers.

There is production: making the artifact.

There is diagnosis: seeing what is wrong with the artifact.

There is direction: deciding what artifact should exist.

Agents can help at all three. But removing the human from production before diagnosis is developed can be dangerous because diagnosis is often trained through production. And removing the human from diagnosis while leaving responsibility behind is worse.

The order matters.

Traditional apprenticeship understood this intuitively. One learned enough production to become a credible judge. A master who could no longer physically execute every operation still knew what good execution looked like because he had lived through it.

Modern organizations are about to create managers of machine work who have never done the underlying work themselves.

Some will be excellent.

Others will be unable to distinguish a surprising insight from a polished hallucination.

The labor market may reward them identically for a while.

That gap will become a source of spectacular failures.

Consider software. A young developer using an advanced coding agent can now build systems that would have required far more experience a few years ago. This is real leverage. It also means the developer can accumulate architectural decisions faster than he accumulates the scars that teach why certain decisions deserve suspicion. The application works. Users arrive. Dependencies multiply. Then the system hits a condition never represented in the happy-path conversation with the agent.

The missing skill is not typing code.

It is anticipating where software becomes reality.

Logs. Latency. Permissions. Data migration. Concurrency. Failure recovery. Human misuse. The employee who leaves. The API that changes. The credential placed where it should never have been.

Those lessons used to arrive slowly because building the system was slow. Agents compress construction time without necessarily compressing consequence time.

The apprentice can build the cathedral before living through a winter.

We need new ways to supply winters.

Simulation will help. Red teams will help. Automated adversaries will help. Better tests will help. But there is also a cultural requirement: organizations must stop treating agent-generated speed as evidence that apprenticeship is complete.

Fast work deserves more curiosity, not less.

How did you know?

What did you check?

What would change your mind?

Where is the weak joint?

What part of this system do you understand least?

Those questions turn output back into learning.

They also change the relationship between senior and junior workers. There is a plausible future in which the senior's main value is no longer supplying answers but constructing the conditions under which a junior and an agent can discover reliable answers together.

That is a different managerial craft.

The expert becomes an environment designer.

This can sound like a demotion until one remembers what great masters actually did. They created a field around the work. They selected commissions. They maintained standards. They demonstrated. They corrected. They decided which apprentice was ready for which surface. They cultivated a visual language recognizable enough to create demand and flexible enough for talented people to grow inside it.

Most importantly, they noticed.

The next generation of master has to notice at machine speed.

That means learning to inspect traces rather than just deliverables. If an agent presents a conclusion, the human may need the sources, the rejected alternatives, the test results, the uncertainty, and the chain of decisions. The work product must contain enough evidence to train judgment.

Opaque excellence is useful in low-stakes tasks.

In apprenticeship, opaque excellence is a nutritional deficiency.

The learner needs to see the joints.

This requirement may push agent systems toward a surprising design principle: the best assistant is not always the one that minimizes human effort. Sometimes the best assistant exposes the right amount of work.

A good teacher does not solve every step.

A good spotter does not lift the whole bar.

A good workshop does not hide every correction.

This is not an argument for artificial inefficiency. There is no virtue in making people manually transcribe data, reformat citations, or repeat clerical operations that teach nothing. The point is to identify the cognitive work that produces durable capability and protect it from accidental automation.

That will be different by profession and by person.

An experienced tax lawyer does not need to prove competence by manually searching every statute. A first-year associate may need to learn how the code is structured before allowing an agent to collapse the search into an answer. A senior engineer may delegate implementation while remaining deeply capable of review. A student engineer who never implements may never know what to review for.

The workshop can personalize the boundary.

That is another advantage over industrial education. The old apprenticeship was individualized because the master saw the apprentice work. AI can make that observation continuous, but only if the system is designed to remember errors, not just correct them.

Imagine an agent that knows the kinds of mistakes you repeatedly make.

Not your preferences for bullet points.

Your mistakes.

It notices that you accept causal explanations too quickly when the chart is clean. It knows that you underweight base rates. It knows you write around the hardest paragraph. It knows you fail to test timezone boundaries. It knows you are seduced by elegant architectures. It knows you stop researching once the argument feels coherent.

That agent could become an extraordinary teacher.

It could also become an extraordinary crutch.

The difference would depend on whether it quietly compensates for the weakness or repeatedly turns the weakness back into a task the human must learn to perform.

That is why "personalization" is too small a frame. What matters is formation.

What kind of practitioner is this system forming?

The Renaissance workshop had an answer embedded in its social structure: ideally, another master.

Our systems need one too.

If the end state of human-agent collaboration is a person who can do less, judge less, remember less, and take responsibility for more, we will have built a very efficient failure machine.

If the end state is a person who can reach farther because the machine increases the number of high-quality encounters with the work, then we may have rediscovered something old in a form no workshop ever had.

There is another problem hidden inside the dream of perfectly personalized assistance.

The better the assistant becomes at meeting the learner exactly where the learner is, the easier it becomes to confuse comfort with development.

A human teacher has limits. The explanation is not always tuned perfectly. The student sometimes has to cross a gap. A supervisor gives an example from a different context. A client explains the problem badly. A primary source uses unfamiliar language. The learner has to adapt.

Some of that friction is needless.

Some of it is transfer.

If an AI tutor always reformulates difficulty into the learner's preferred style, the learner may become highly competent inside an environment that bends toward him. The world will not.

The customer will be unclear.

The regulator will write badly.

The patient will describe symptoms out of order.

The codebase will contain someone else's mental model.

The opposing lawyer will not scaffold the argument.

Expertise includes the ability to enter foreign structure.

The apprentice has to adapt too.

This complicates personalization. The ideal agent should know when to meet the learner and when to make the learner travel.

That is not a feature setting. It is a theory of formation.

One recent field experiment makes the tension unusually concrete. In 2026, researchers studied more than six thousand middle-school students using a computer-assisted math platform. AI support did not simply make students move faster. Students with the AI progressed more slowly through questions but were more accurate on the attempts they reached, and after mistakes the AI helped them return to correct answers with fewer additional tries. The useful part was structured support around error, not effortless completion.

That matters because the valuable intervention came after the learner had done something wrong.

The mistake existed.

The system had something to teach against.

Remove the attempt and the signal disappears.

This gives us a design principle for apprenticeship with agents: protect the diagnostic value of error.

Not every error. Nobody needs to misspell a command fifty times to become a professional. But the errors that reveal a model of the problem deserve to surface before they are silently corrected.

A novice analyst who confuses revenue with cash flow has exposed a conceptual gap.

A programmer who reaches for a global variable has exposed an architectural instinct.

A writer who resolves uncertainty too quickly has exposed a narrative habit.

A physician-in-training who anchors on the first diagnosis has exposed a reasoning pattern.

If the agent corrects the artifact without making the pattern visible, output improves and the learner stays the same.

The workshop should sometimes preserve the bad move long enough to inspect it.

That can be uncomfortable. Good. Apprenticeship has always contained controlled embarrassment: not humiliation, but the moment when the gap between intention and result becomes undeniable.

The role of the master is to keep that moment useful.

Agents can make this safer than historical apprenticeship because the learner can fail privately before failing publicly. A student can rehearse. A junior employee can confront ten synthetic edge cases before meeting the real one. The agent can increase the density of mistakes while reducing the social cost of each.

This is a remarkable opportunity.

It also creates the risk of human overfitting.

A person can become excellent at working with one assistant, one style of hint, one interface, one model's habits. Then the system changes.

The next model asks different questions.

The tool disappears.

The organization moves to another provider.

A crisis removes access.

Suddenly the competence turns out to have been partly environmental.

Civilization has always contained environmental competence. Nobody expects a modern accountant to operate without arithmetic tools, databases, tax software, and legal references. The goal is not self-sufficiency.

The goal is knowing where capability lives.

Some skill is internal.

Some lives in the tool.

Some lives in the team.

Some lives in the archive.

A master understands the dependency.

This suggests another apprenticeship test: tool removal should be occasional and purposeful.

Can the person still frame the problem without the agent?

Can the person explain the core reasoning after the assistant is gone?

Can the person move to a different system without losing the craft?

Can the person identify what the original tool was doing on their behalf?

These are not purity tests. They are resilience tests.

The distinction becomes especially important in professional settings because employers may accidentally train employees into vendor dependence. A worker becomes productive inside one proprietary assistant and is then evaluated as if the productivity belongs entirely to the person.

The company may not know which capability it has hired.

The worker may not know either.

A healthy workshop is explicit about this.

We do not need every skill to reside in the person.

We do need the person to understand the system well enough to carry responsibility for the part assigned to them.

That is the mature version of apprenticeship.

The apprentice touches the work so that some judgment becomes portable.

The agent carries other capability so that the apprentice can reach farther.

The workshop decides which is which.

The apprentice touches more work.

The master can generate more lessons.

The same pattern is beginning to appear in professional software work.

A 2025 study pooling randomized field experiments at Microsoft, Accenture, and another large company found that developers with access to an AI coding assistant completed more tasks on average, with larger adoption and gains among less experienced developers.

Again, this is evidence about productivity under specific conditions, not proof that coding assistants make people better engineers.

That distinction is the chapter.

A novice can move faster because the system supplies syntax, patterns, and possible solutions.

The organization should welcome the gain.

Then measure whether the novice is learning the parts that matter later.

Can the developer debug unfamiliar code?

Can the developer identify a security flaw the assistant missed?

Can the developer explain why the generated solution fits this system rather than merely compiling?

Can the developer respond when the agent produces a plausible patch against a wrong model of the architecture?

The tool can compress the low-level search.

The apprenticeship has to move up one level.

This is a recurring pattern whenever technology absorbs routine cognition.

The profession does not become skill-less.

The skill gradient moves.

The mistake is leaving the training gradient where it was.

If agents write more code, train more architecture.

If agents retrieve more cases, train more interpretation.

If agents draft more prose, train more judgment about structure and evidence.

The apprenticeship should chase the moving bottleneck.

This gives us a constructive answer to the deskilling fear.

Do not preserve obsolete difficulty.

Move difficulty toward the responsibility that remains.

That is how assistance becomes agency.

And experience, instead of being bypassed, can be accelerated.
