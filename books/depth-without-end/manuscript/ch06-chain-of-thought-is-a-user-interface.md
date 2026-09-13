# Chapter 6 — Chain of Thought Is a User Interface

For most of the history of computing, nobody expected an internal calculation to arrive one English sentence at a time.

A spreadsheet does not narrate every intermediate multiplication. A compiler does not print a paragraph explaining why it allocated a register. A database query planner can expose an execution plan when an engineer asks, but it does not have to turn every internal decision into prose before it can return a row.

Large language models acquired this peculiar habit because their native action is a token.

When researchers discovered that asking a sufficiently capable model to produce intermediate reasoning could improve performance on multi-step problems, the result was enormously useful. [Chain-of-thought prompting](https://arxiv.org/abs/2201.11903) made difficult computation visible in the same medium the model already knew how to produce. A problem that could not be solved reliably in one jump might become tractable if the model wrote down intermediate arithmetic, decomposed a question, or carried a logical dependency from one sentence to the next.

The technique did more than improve benchmarks. It changed our intuition about machine reasoning.

Reasoning began to look like text between the prompt and the answer.

That identification was never quite right.

A chain of thought is an interface between hidden computation and future hidden computation. The model turns an internal representation into discrete tokens, places those tokens into the context, and later attends to them. The words become an external scratchpad. They are useful precisely because they persist outside the ephemeral activation that produced them.

This is an ingenious hack.

It is also a lossy one.

Suppose a model's hidden state represents several possibilities at once: two candidate algebraic substitutions, a rough geometric relation, a confidence gradient among hypotheses, and an unresolved dependency that does not have a neat linguistic label. To put that state into a chain of thought, the model has to choose tokens. The continuous representation is projected through the output vocabulary. Ambiguity is compressed into a sequence of discrete choices. Whatever survives becomes visible and reusable. Whatever does not fit the verbal channel is gone from the scratchpad.

That does not mean hidden states are magically richer in every useful sense. A continuous vector can be confused, entangled, or meaningless. Language has the opposite advantage: it forces structure into a communicable form. Once a model writes “the denominator cannot be zero,” that constraint is explicit. It can be inspected, quoted, checked, challenged, or handed to another system. Hidden state has no comparable guarantee of legibility.

The trade is between communicability and representational freedom.

The field's recent interest in latent reasoning is partly an attempt to stop pretending those are the same thing.

Consider a simple arithmetic problem. A model that writes each intermediate calculation into the context spends tokens to gain extra compute. Those tokens are doing several jobs at once. They buy another forward pass. They store intermediate results. They constrain the next step through visible language. They provide a trace that can sometimes be evaluated. They also consume context and generation time.

Now imagine giving the model additional computation without requiring it to emit a meaningful word.

That is the motivation behind [pause-token](https://arxiv.org/abs/2310.02226) work. Insert special tokens that carry little semantic content but still force the network to execute additional forward passes before producing an answer. The model gets more computation simply because more token positions exist.

This is revealing. If a meaningless pause can improve some tasks, then part of chain-of-thought's benefit cannot come from the semantic content of the visible rationale. Some benefit comes from allowing the network to run longer.

That result should not be generalized beyond the experiments that support it. Pause tokens do not prove that verbal reasoning is unnecessary. They do isolate a variable that ordinary chain of thought confounds: language and compute arrive together.

[Quiet-STaR](https://arxiv.org/abs/2403.09629) approaches the problem from another direction, training language models to generate internal rationales that help predict subsequent text. The ambition is broader than solving math word problems. It asks whether a model can learn to perform useful reasoning before ordinary tokens throughout a corpus.

The same conceptual fracture appears again. There is the token the user sees, and there may be computation whose purpose is to prepare for that token.

Once that fracture is visible, the phrase *next-token predictor* becomes less informative than it first sounds.

The training objective may ask for the next token. The mechanism used to produce that prediction can contain arbitrary internal transformations. A chess program can be trained on game outcomes without “thinking in wins.” A vision system can be trained on labels without representing the world in label-shaped concepts at every layer. Likewise, a language model's objective can be expressed in tokens while its useful internal computation occupies a continuous space that does not resemble prose.

This seems obvious when stated abstractly. The interface fooled us because the output medium is so fluent.

Human readers see coherent language and naturally treat it as a transcript of cognition. Sometimes that is even useful. A model's written derivation can reveal the exact arithmetic error that caused the answer to fail. A cited premise can be checked. A proof can be validated line by line. A plan can be compared with execution.

But a generated rationale is also an output produced under incentives. It can be incomplete, post hoc, strategically convenient, or simply unrelated to the causal mechanism that produced the answer. The interpretability value of chain of thought cannot be assumed from its grammar.

This matters because latent-reasoning research is often described as choosing efficiency over transparency. That is only partly true. Visible reasoning is not a transparent window into a network in the first place. It is a useful artifact whose faithfulness has to be tested.

The right comparison is therefore not “transparent words versus opaque vectors.” It is between different computational artifacts, each with different observability.

Words can be audited semantically.

Hidden states can be probed mechanistically.

Tool calls can be verified against external results.

Search trees expose alternatives the final answer did not choose.

Formal proofs can be checked by a proof assistant.

A good reasoning system may use several of these at once rather than insisting that every useful operation become prose.

This is where Recurrent Looped Transformer enters the story in an unusual way. RLT does not introduce a separate block of hidden “thinking tokens” before each answer. Its recurrence continues as normal prompt and response tokens are consumed. The extra temporal path is carried through the decoder state. The architecture can therefore accumulate hidden computation without requiring every intermediate state to be decoded into language.

That is not the same as Coconut or a recurrent-depth model that explicitly iterates latent states before emitting the next ordinary token. RLT's basic recurrence is tied to token progression. Still, the philosophical implication is related: a useful computation can survive in a continuous state and be transformed again later without first being rendered into a sentence.

The distinction between *reasoning token* and *reasoning step* begins to break.

A token is observable. A step is architectural.

One token can involve many learned transformations. One internal recurrent update may be part of a reasoning process without corresponding to any standalone proposition. A model can spend substantial computation maintaining state while emitting a mundane connective word. Conversely, a single visible sentence can summarize a large amount of hidden work.

Once the two are separated, output length stops being a reliable measure of cognitive effort.

This creates a measurement problem for the industry. Many current systems are priced and benchmarked in tokens because tokens are easy to count. A model that “thinks longer” often emits more reasoning tokens, so token count serves as a crude proxy for compute. Latent recurrence weakens that proxy. A system might perform fifty hidden iterations and emit a five-word answer. Another might write two pages of chain of thought with less arithmetic underneath. The user sees the reverse of the computational expense.

There is no inherent problem with hidden work. Cloud databases do not itemize each CPU instruction. But scientific claims about efficiency require the hidden work to be accounted for somewhere. A model that reduces visible tokens while increasing latent FLOPs has compressed the interface, not necessarily the cost.

This is one reason the most interesting latent-reasoning papers report compute curves rather than only output length.

The safety implications are less tidy.

Visible chain of thought can sometimes provide early evidence that a model is pursuing a bad plan. If a coding agent writes that it intends to disable a security check, a supervisor can intervene. If an answer includes fabricated arithmetic, the error may be visible. If a model's hidden state carries the plan instead, the external trace may become cleaner while the internal process becomes harder to supervise.

On the other hand, demanding verbalized reasoning does not guarantee honesty. A system optimized to satisfy a monitor may learn to produce acceptable rationales while its causal computation follows another route. The more we reward the appearance of good reasoning, the more reason there is to distinguish appearance from mechanism.

This tension has led to a peculiar debate in AI safety: whether exposing chain of thought helps oversight enough that models should be designed to preserve it, or whether relying on chain of thought risks mistaking a generated explanation for the model's actual computation.

Recurrent latent state sharpens the issue because it creates a durable internal channel with no necessary linguistic representation.

If such systems become important, oversight will need tools that interrogate state trajectories directly. Does a hidden representation encode a forbidden target? When did a plan emerge? Which prompt tokens changed the recurrent state in a lasting way? Does the state converge toward a solution before the model can verbalize it? Can an intervention alter the trajectory without destroying unrelated capability?

These are mechanistic questions, not conversational ones.

There is an irony here. Language models became attractive partly because language is an interface humans already understand. We did not need a special protocol to ask a question. We could type. The model answered in the same medium. The alignment between computational substrate and human interface felt almost magical.

Latent reasoning reminds us that the alignment was never complete.

The model's internal representations are not words. They are high-dimensional activations shaped by training. The vocabulary appears at the edges and at intermediate scratchpad positions when we force thought back through the edge.

This gives visible reasoning a new role. Instead of treating chain of thought as the reasoning itself, we can treat it as one possible *serialization* of reasoning.

Serialization is a word from computing that deserves to be borrowed here. An in-memory data structure can be rich, interconnected, and optimized for computation. To store or transmit it, a program serializes it into a format with an agreed syntax. JSON is not the object; it is a representation of the object suitable for crossing a boundary.

Chain of thought may often behave similarly. The model serializes enough of its intermediate state into language that later computation, other agents, tools, or humans can use it.

Seen this way, the right question is no longer whether a model should think in language or in vectors. It is when reasoning should be serialized.

Serialize when a result needs verification.

Serialize when another system must consume it.

Serialize when a human is responsible for the decision.

Keep work latent when the representation is intermediate, high-bandwidth, or cheaper to transform without passing through vocabulary.

That sounds sensible as an engineering principle, but it hides hard governance choices. Who decides what deserves serialization? A model may not know which intermediate assumption a human would consider decisive. An opaque state may carry a subtle policy violation that never becomes visible until the final action. A system optimized for minimal latency may suppress useful intermediate artifacts because they cost tokens.

The obvious answer—serialize everything—returns us to the original problem. Everything may be enormous, uninterpretable, or not naturally expressible as propositions. Even human reasoning is not fully available to introspection in sentence form. We often know that something feels inconsistent before we can explain why. We perceive relationships before naming them. The comparison is suggestive but not evidentiary; machine hidden states need not work like human nonverbal cognition.

The practical lesson is simpler. There is no reason to require all machine computation to pass through a human language bottleneck merely because the system's inputs and outputs are language.

Coconut makes that lesson concrete. Instead of decoding a hidden state into a token and then embedding that token as input for the next reasoning step, Coconut can feed a continuous hidden state back as the next input embedding. The model's “thought” remains in latent space. In the reported experiments, this can help on tasks that benefit from exploring alternatives and backtracking.

Recurrent-depth models make a related move by applying learned transformations again to latent state before committing to output. LOTUS then asks whether latent states can be supervised to align with useful reasoning progress without paying the full serial cost of generating each verbal step.

RLT approaches the same border from sequence time. Its previous final decoder state is merged into the next token's computation, so computation can remain continuous between emissions.

The mechanisms differ. The pressure is shared.

The pressure comes from a simple inefficiency: language is an extraordinary communication system and a strange machine instruction format.

A model trained on language can use prose to calculate because prose is available. That does not mean prose is always the cheapest or most faithful substrate for intermediate computation.

There are also tasks for which verbalization actively gets in the way. A continuous representation can keep several candidate directions alive; a token sequence must choose an ordering. A geometric transformation may be easy to represent in activation space and cumbersome to narrate. A subtle pattern across thousands of dimensions may have no compact phrase. Forcing every update through vocabulary can create premature commitment.

Yet language has one feature latent space lacks: accountability.

A written claim can be cited. A number can be recomputed. A premise can be rejected. A plan can be prohibited. We know how to build institutions around statements because human society is made of statements, records, signatures, contracts, testimony, and explanations.

A recurrent state has no signature line.

That may become one of the central design tensions of advanced AI. We want models to use whatever internal representation makes difficult computation possible. We also want consequential systems to externalize enough of that computation that humans and other machines can verify what matters.

The solution is unlikely to be a permanent choice between hidden and visible thought. It is more likely to be an architecture of selective revelation: latent computation where latent computation is useful, explicit artifacts where verification is necessary, tools where exactness matters, and logs that record actions even when they cannot record every internal state.

In that world, chain of thought does not disappear.

It becomes what it always was: an interface.

And once we stop confusing the interface with the computation behind it, the question of recurrent depth becomes much easier to see.
