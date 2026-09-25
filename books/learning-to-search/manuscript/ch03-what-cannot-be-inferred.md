# What Cannot Be Inferred

There is a class of agent failure that looks like weak reasoning until the evidence is drawn on paper.

Two worlds are possible.

In one world, the package is delayed.

In the other, it is lost.

The agent can see the order date, the destination, the promised delivery window, the product, the customer message, and the retailer's internal status. Every one of those fields is identical in both worlds. The carrier scan that would separate them is unavailable.

Ask the agent to reason longer. Nothing changes.

Ask it to critique itself. Nothing changes.

Give it a larger context window filled with the same fields. Nothing changes.

Run three copies of the model and take a vote. The copies may disagree, but the world has supplied no new basis for the disagreement.

This is not a shortage of intelligence.

It is a shortage of observability.

The distinction should be obvious. In practice it is routinely blurred because language models are unusually good at continuing from incomplete evidence. Their talent is to produce a plausible next sequence given what they have seen. That ability can mask the harder question of whether the observations contain enough information to support the decision at all.

An agent can be articulate at the edge of an information boundary.

The articulation does not move the boundary.

A small formal model helps because the underlying fact is almost embarrassingly simple.

Suppose the world is in one hidden state from a finite set. The agent cannot inspect the state directly. It has evidence channels: a search API, a database, a sensor, a test runner, an interview, a log, a private record, a public filing. Each channel produces observations whose distribution depends on the hidden state.

The agent can choose channels adaptively. After one result, it can choose a different channel. After that result, another. Its policy can be as complicated as we like.

Now take two hidden states.

If every available channel produces exactly the same observation law in both states, no adaptive sequence of those channels can tell the states apart.

The proof is less interesting than the consequence.

At the first step, the agent has seen the same history in either world, so its policy chooses the same distribution over actions. Whatever action it chooses produces observations with the same distribution in both worlds. After that, the histories still have the same distribution, so the next action does too. Repeat the argument forever.

The agent can rearrange ignorance.

It cannot create evidence.

There is a converse useful enough for engineering. If at least one available channel produces different observations in the two states, then a policy that uses that channel has some statistical basis for distinguishing them. The distinction may be weak. It may require repeated samples. It may be too expensive to exploit. But the information boundary has changed.

This gives us a first design rule for agents: before optimizing the search policy, verify that the required distinction is visible through the tool set.

The rule is easy to state and surprisingly easy to violate.

Software agents are a clean example. Suppose two configurations produce identical behavior in the local test environment but diverge in production because of an environment variable the agent cannot inspect. The repository can be read perfectly. The tests can be run perfectly. The model can understand every line. The production distinction remains hidden.

A common response is to improve the code agent.

The missing capability is not code intelligence.

It is authorized observability into the environment.

Security systems meet the same wall. Two events may look identical in application logs and differ only in an identity-provider record. Fraud systems may require device or payment-network evidence not present in the transaction table. A research agent may need an experimental measurement that no paper reports. A financial agent may need a contract term inside a document it cannot access. A robot may need force feedback rather than another camera frame.

Each case has the same structure.

The world contains a distinction.

The decision depends on the distinction.

The current channels erase it.

This is why tool count is a poor measure of agent capability.

Ten tools can expose one kind of evidence ten different ways.

One additional channel can change the problem.

The right way to think about the tool set is not as an app drawer. It is as an observation system.

What parts of the world become distinguishable through it?

This question becomes more useful when we stop demanding that the agent identify the hidden state perfectly.

Most decisions do not require perfect diagnosis.

They require enough diagnosis to act correctly.

Suppose five hidden states are possible. In three of them the correct action is “refund.” In two the correct action is “wait.” The agent does not need to distinguish every refund state from every other refund state. Those differences may be interesting and still irrelevant to the decision.

What matters are the pairs of states that change the action.

Call them decision-changing pairs.

If two states lead to the same correct decision, leaving them observationally fused may be perfectly acceptable. If two states require different decisions, the system needs some route by which evidence can separate them to the required level of confidence.

This is a much cheaper target than omniscience.

It also gives agent designers something concrete to build.

List the decision-changing pairs the current system cannot distinguish.

Then list candidate evidence channels and mark which pairs each channel can separate.

A new log field may distinguish some.

A carrier API may distinguish others.

A targeted test may separate a family of code paths.

A human review may distinguish several difficult cases at high cost.

A private database may resolve a narrow class that public search never can.

Now the vague request for “better context” has become a coverage problem.

Which smallest useful set of new channels breaks every unresolved distinction that can change the decision?

In the simplest finite version, this is a weighted set-cover problem, or the equivalent weighted hitting-set view.

The terminology matters less than the shift in thought.

We are no longer asking how much information an agent has.

We are asking whether its information portfolio covers the distinctions the job requires.

This is a more serious way to think about observability.

An organization can have petabytes of data and still be blind to the variable that matters.

A model can have an enormous context window and still be blind because every document in the window inherits the same upstream error.

An agent can make hundreds of tool calls and still be blind because none of the tools touch the relevant state.

Volume is not coverage.

This becomes especially important as agent platforms advertise expanding catalogs of tools. The natural instinct is additive. If tools are capability, more tools must mean more capability.

Sometimes.

Every channel has a cost.

It may require authentication, maintenance, schema mapping, rights management, retrieval logic, evaluation, monitoring, and a policy for deciding when to use it. A channel can be noisy enough to confuse the system. It can overlap heavily with existing channels. It can be accurate but too slow for the decision. It can expose sensitive data that the agent should rarely touch.

The design problem is therefore not “connect everything.”

It is “cover the decision-relevant uncertainty with a defensible portfolio of evidence.”

The phrase decision-relevant matters.

A tool can produce fascinating information that never changes what the agent should do.

One of the easiest ways to make an agent look diligent is to let it accumulate such information.

The search trace grows.

The decision does not improve.

A procurement agent comparing suppliers can spend time collecting the history of each company, leadership biographies, marketing claims, office locations, press mentions, and product announcements. Some of that may matter. If the decision turns on current unit economics, delivery reliability, switching cost, and contract terms, the rest can become expensive atmosphere.

Good search is partly the art of refusing irrelevant observability.

The problem gets harder when channels are noisy rather than perfectly separating.

The clean model says a channel differs between two states or it does not. Real tools live on a spectrum.

A test can have false positives. A web source can be stale. A witness can be mistaken. A sensor can drift. A language model can extract the wrong field from the right document. A code test can pass despite a latent failure because it never exercises the relevant path.

In those settings, one observation may not be enough. The agent must reason about how much the channel shifts belief, whether another sample is worth the cost, and whether a different channel would add more independent evidence.

The observability problem becomes statistical.

The principle survives.

No policy can extract a distinction from a channel family that does not encode the distinction.

This sounds tautological until the system begins to hallucinate around it.

Language systems have a special temptation to smooth missing variables with prior knowledge. That is often useful. Priors are information. A model may know that most late packages arrive rather than vanish. It may know that a particular error pattern is usually caused by a dependency. It may know that one interpretation of a regulation is more common than another.

A prior can rationally support a decision when direct evidence is absent.

It should not be confused with having observed the case.

Imagine the delayed-versus-lost package again. If historical data make delay much more likely, “wait” may be the economically correct action even without a carrier scan. The agent can make that decision from a prior and the cost of the alternatives.

But it should know what kind of decision it is making.

It is not reporting that the package is delayed.

It is acting under uncertainty because “wait” has the lowest expected loss given the information available.

That is a mature agent behavior.

The system has moved from epistemic certainty to decision sufficiency without pretending the hidden state was resolved.

Many real agent tasks need exactly this distinction.

Medicine does not always require knowing the disease before deciding the next safe action. Operations do not always require locating the exact root cause before applying a reversible mitigation. Security does not always require proving intent before isolating a suspicious process. Customer support does not always require determining blame before making a low-cost accommodation.

The agent's job is not always to name the world perfectly.

It is to act well given what can be known.

This changes how observability should be designed.

The target is not maximum state reconstruction. The target is enough discrimination to keep decision loss acceptable.

That can save cost.

It can also protect privacy.

If a system can make a safe decision without retrieving a sensitive attribute, then collecting the attribute because it might improve prediction is not automatically justified. The observability map can reveal not only what the agent lacks but what it does not need.

Better agents may sometimes require fewer observations.

The reason is precision about which uncertainties matter.

There is another complication.

Tools do not merely observe.

Some act.

A browser click can change account state. A code edit changes the repository. A market order changes the order book. A robot probe can move the object. A customer question can alter the conversation. An investigator's inquiry can alert the subject.

Once an action changes the world, the clean hidden-state model begins to break.

The agent is no longer selecting cameras pointed at a fixed scene.

It is participating in the scene.

This is where partially observable control enters. The action can serve two roles at once: it changes the environment and reveals something about it. A robot can push gently both to move an object and to learn its resistance. A software agent can apply a small patch not only as a fix but as a diagnostic intervention: if the test behavior changes, the result localizes the fault. A network operator can reroute traffic and learn whether the failure follows the route.

Observation and intervention become entangled.

That makes search more powerful and more dangerous.

A passive query that fails wastes time.

An intervention that fails can destroy the evidence it was meant to reveal.

The right search policy must therefore understand reversibility.

Cheap reversible actions can be used aggressively for information.

Irreversible actions need a higher threshold.

This is obvious in physical systems and less obvious in software. An agent with write access can make changes that alter the future evidence trail. If it edits before reproducing the bug, it may destroy the baseline. If it rewrites a configuration before recording the old state, it can make the cause harder to establish. If it sends the email before verifying the recipient, the search problem ends for the wrong reason.

“Act and observe” is powerful.

Order matters.

The observability map should therefore include temporal structure.

Which evidence disappears after an action?

Which channels become available only after another action?

Which measurements should be taken before intervention?

Which state changes are reversible?

Which observations are contaminated by the agent's own behavior?

These questions are standard in serious experimental work. Agents will have to learn them too.

The scientific analogy is useful because a good experiment is not merely a source of data. It is an engineered discrimination.

A scientist with two competing hypotheses does not ask for “more measurements” in the abstract. The useful experiment is the one whose possible outcomes differ meaningfully under the hypotheses.

That logic should migrate directly into agent design.

Do not ask the agent to gather more information.

Ask what observation would separate the live explanations.

Do not ask it to search more sources.

Ask which source has a genuinely different route to the fact.

Do not ask it to run more tests.

Ask which test produces different expected outcomes under the leading causes.

Do not ask it to reflect again.

Ask what unresolved distinction the reflection is supposed to change.

Once the question is phrased that way, many agent loops become easier to diagnose.

Some are under-instrumented.

Some are over-instrumented.

Some have plenty of channels and no policy for choosing among them.

Some confuse duplicated channels with corroboration.

Some retrieve evidence after the decision has effectively been made and use the search only to decorate the answer.

Some are asked for certainty in worlds where the required distinction is not observable.

The last failure may be the most important.

An agent should be able to say: these two states remain indistinguishable given the tools and permissions I have.

That sentence is not a refusal to think.

It is a statement about the information structure of the task.

From there, the system has options.

Acquire a new channel.

Ask the user.

Escalate.

Choose a decision robust to either state.

Delay.

Take a reversible action.

Or accept the residual risk.

What it should not do is replace missing evidence with the emotional texture of confidence.

The next generation of agents will be judged partly by what they know.

They will also be judged by whether they know when the world has not given them enough to know.

That boundary is not philosophical decoration.

It can be drawn.

And once it is drawn, the search problem changes.

The question is no longer how to reason across every possible branch.

It is which new observation can make two decision-changing worlds stop looking the same.
