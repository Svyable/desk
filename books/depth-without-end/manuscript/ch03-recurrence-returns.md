# Chapter 3 — Recurrence Returns

Recurrence did not disappear after 2017. It lost the argument over where the center of gravity should be.

That is a different kind of defeat.

The Transformer made a practical case that was hard to argue with. If a sequence could be represented through attention without walking a hidden state through every position, training could become dramatically more parallel. That advantage aligned with the hardware the industry already had and the hardware it would soon buy by the warehouse. A mechanism does not have to be philosophically superior to win an engineering era. It has to fit the bottleneck of the era better than its alternatives.

For several years, recurrence began to sound like a historical stage: useful, important, superseded. Long Short-Term Memory networks were the machinery one mentioned to explain how sequence models worked before attention. Even people who knew the history better could slip into a simplified chronology. RNNs, then LSTMs, then Transformers. A progression. An arrow.

Research did not obey the arrow.

A year after *Attention Is All You Need*, Mostafa Dehghani and colleagues published [Universal Transformers](https://arxiv.org/abs/1807.03819). Their title did not announce a retreat from attention. The architecture kept self-attention and added something the original Transformer had deliberately discarded: recurrence across depth. Instead of assigning a different set of parameters to every layer in a fixed stack, a Universal Transformer could repeatedly apply a shared transition to its representations. With adaptive computation, different positions could halt after different numbers of refinement steps.

This was recurrence without nostalgia.

The useful unit was no longer the old sequence-time hidden state in which one token handed a compressed memory to the next. It was a representational state being iteratively refined. The same learned transformation could be revisited because the input to the transformation had changed. A fixed set of weights could therefore describe a process whose effective depth was not identical to the number of distinct layers stored in the model.

The paper made a claim that deserves more attention now than it received as a historical footnote. The authors argued that a recurrent inductive bias might help on algorithmic tasks because many algorithms themselves are iterative. If the target process repeatedly applies a rule until a condition is met, an architecture that can repeatedly apply a learned transition has a structural resemblance to the problem that a fixed stack lacks.

Structural resemblance is not proof. Neural networks routinely learn functions without copying the form of the generating algorithm. But inductive bias matters when data is finite and generalization leaves the training distribution. A model trained only on short examples may discover a shortcut that correlates with the answer at those lengths. An iterative system has at least the possibility of learning an update rule that can be executed again when the input grows longer.

That possibility became one of the recurring motives in the work that followed.

[Transformer-XL](https://arxiv.org/abs/1901.02860), published in 2019, brought back recurrence for a different reason. The problem was not insufficient depth but fragmented context. Ordinary fixed-length training segments created an awkward boundary: information outside the current segment could disappear even if it remained relevant. Transformer-XL reused hidden states from earlier segments as a form of memory, allowing later segments to attend to representations computed before the current window.

The architecture called the mechanism segment-level recurrence. Yet its recurrence is not the same as Universal Transformer's recurrence, and neither is the same as RLT's.

Transformer-XL carries past representations so the model can reach farther backward. Universal Transformer reapplies a transition so a representation can be refined for more computational steps. RLT carries a final decoder state from one consumed token into the computation of the next while also maintaining explicit attention memories. One mechanism extends accessible history. Another extends effective depth. A third intertwines token time with the depth of a persistent computational path.

The shared word *recurrent* can make all three sound more alike than they are.

A similar confusion appears with weight sharing. [ALBERT](https://arxiv.org/abs/1909.11942) reduced the parameter cost of a deep bidirectional Transformer partly by sharing parameters across layers. If twelve nominal layers reuse the same parameters, the model performs repeated transformations without storing twelve independent copies of the block. That establishes something important: a neural network can revisit the same weights at different depths and still learn useful representations.

But parameter sharing is not automatically a recurrent state machine. A shared block used at layer six is receiving the output of layer five in the same forward pass. Nothing about that alone says that the final hidden state from one token-time step will become an explicit input to the next token-time step. Weight reuse describes *who owns the parameters*. Recurrence describes *how state moves through computation*.

The distinction seems pedantic until two papers use the same parameter count and spend radically different amounts of work.

Imagine a block with one billion parameters. Apply it once and the execution path contains one billion parameters' worth of learned transformation. Apply the same block ten times and the stored model is still one billion parameters. The arithmetic has not remained constant. Nor has the path by which the state was produced. If someone compares that ten-pass model with a one-pass billion-parameter model and calls them “the same size,” the statement is true only under one definition of size.

This is the ambiguity that recurrent depth exploits.

In 2023, Liu Yang, Kangwook Lee, Robert Nowak, and Dimitris Papailiopoulos made the point more directly in [*Looped Transformers are Better at Learning Learning Algorithms*](https://arxiv.org/abs/2311.12424). Their experiments studied in-context learning problems in which a model sees examples of a function and must infer the function well enough to predict a new point. The looped Transformer reuses a block multiple times. The authors' interest was not merely parameter compression. They argued that the looping structure can bias the model toward iterative algorithms that fit the data appearing in context.

The title contains a subtle shift. The model is not only learning a mapping. It is learning a procedure for learning a mapping.

Once the target itself is procedural, fixed architectural depth becomes a questionable prior. Why should a learned optimizer be allowed exactly twelve transformations because the network designer happened to stack twelve blocks? A human-written optimizer is usually expressed as a recurrence: update a parameter estimate, inspect the new state, update again. The number of updates is a computational budget, not a fact about the definition of the algorithm.

This is where recurrent depth begins to look less like a memory trick and more like a model of computation.

The idea gathered force when large language models made test-time computation economically important. In early scaling conversations, most of the meaningful compute had already been spent by the time a user submitted a prompt. Pretraining consumed the expensive cluster. Inference ran the finished network and returned its outputs. The weights embodied the investment.

Reasoning models disturbed that clean division. Additional computation at inference could improve results. A model might generate a longer rationale, sample several candidates, run a verifier, or search. Compute spent after seeing the problem became capable of substituting, at least partially, for compute spent before seeing the problem.

A recurrent-depth language model is an attempt to spend some of that test-time budget *inside* the representation rather than only through visible output or external search.

In 2025, Jonas Geiping and collaborators published [*Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach*](https://arxiv.org/abs/2502.05171). They trained a 3.5-billion-parameter model on roughly 800 billion tokens using a recurrent block that could be unrolled for additional latent depth. The notable result was not that recurrence solved reasoning. It was that performance on several tasks continued to improve when the trained model was given more recurrent computation at test time. The same stored parameters could occupy multiple points on a compute-performance curve.

That changes the meaning of a model checkpoint.

A conventional checkpoint is often treated as an object with a characteristic capability level. Give it a prompt under standard decoding and measure the answer. A recurrent-depth checkpoint is closer to a machine with a throttle. The weights define the transition, but the number of transitions helps determine the result. The deployment configuration becomes part of the capability claim.

The industry already knows this phenomenon from sampling and search. A chess engine is not fully described by the size of its binary; its search budget matters. A SAT solver is not fully described by its source code; time limits matter. A Monte Carlo procedure changes quality as samples accumulate. We are comfortable saying that algorithms have performance curves over compute.

Language models were unusual because the neural network itself was marketed as the unit.

Recurrent depth pushes them toward the older language of algorithms.

The 2026 work has become more explicit about the pieces that must be solved before that idea becomes robust. [Fixed-Point Reasoners](https://arxiv.org/abs/2606.18206) studies looped Transformers whose state can be iterated until a convergence criterion is met. The architecture is interesting not because “fixed point” sounds mathematical, but because it turns halting into an observable property of the evolving state. If later updates barely change the representation, the system may have reached a stable answer to its internal computation. Easy problems can stop. Harder ones can continue.

That is the dream of adaptive computation: do not pay the maximum depth for every example.

It is also a dangerous dream. A wrong answer can converge. A representation can stop changing because the model is stuck, not because it has solved anything. Numerical convergence is not semantic correctness. The halting signal has to correlate with useful completion, and the system has to resist attractors that are stable precisely because the recurrence reinforces its own mistake.

Another 2026 paper, [DeepLoop](https://arxiv.org/abs/2607.13491), attacks a less glamorous problem: what happens to normalization and residual updates when the same parameters are visited again and again. Standard deep networks already depend on carefully balanced residual pathways. Tie the weights and repeatedly pass through them, and the statistical assumptions behind familiar scaling choices can shift. A block that behaves sensibly on its first visit can accumulate activations badly on its twentieth.

This is one reason “just loop the Transformer” is not a serious design specification.

Repeated computation changes the optimization problem. It can change the distribution of inputs seen by the shared block. It can change gradient paths. It can change stability. It can change how much any single update matters because the consequences will be encountered again later in the same virtual depth.

RLT enters this landscape with a different coupling between recurrence and sequence.

The recurrent-depth model from Geiping and colleagues can be thought of as spending extra latent iterations within an inference process. RLT's defining recurrence is carried across every consumed prompt and response token. The sequence itself extends the temporal path. You do not ask only how many times the block loops *before the next token*. You ask what state arrives at the current token after surviving all previous token updates.

That gives RLT an unusual kind of depth budget. It grows naturally with the history.

For a prompt of one thousand tokens, the first generated answer token can inherit a recurrent state that has already been updated through the thousand-token prefill. For the hundredth generated token, the state has accumulated another hundred updates. The system's internal age and the sequence position are linked.

This is both elegant and suspicious.

It is elegant because a longer problem naturally permits a longer path of computation. The model does not need an explicit command to “think more” before the first output if the prompt itself has already driven the recurrent state through many transformations. It is suspicious because prompt length is a terrible universal proxy for problem difficulty. A 5,000-token contract may contain a simple extraction question. A nine-word math problem may be difficult. If temporal depth is tied mechanically to consumed tokens, then the machine spends compute according to length whether length deserves it or not.

RLT's report does not pretend to have solved this allocation problem. Its contribution is a particular architecture and execution semantics. The larger recurrent-depth field is exploring variable loops, halting, parallel supervision, and convergence precisely because the right number of updates remains open.

The breadth of this work also shows why it is premature to declare a single “return of the RNN.”

There is no one recurrence returning. There are several old ideas being repurposed under new constraints.

One recurrence moves memory across segments.

One revisits shared parameters across virtual depth.

One feeds a hidden thought back instead of converting it to a word.

One iterates until a representation converges.

One carries final decoder state through token time while attention memories remain available alongside it.

The differences determine what can be parallelized, what must be recomputed, how gradients flow, what memory is stored, and which failures are possible.

The family resemblance lies somewhere deeper: intelligence may require a useful state to be *changed repeatedly*, and repeated change does not necessarily require a larger inventory of distinct weights.

This idea is older than deep learning. Iteration is how modest rules produce elaborate consequences. Newton's method repeatedly applies an update to approach a root. Dynamic programming moves information through a structure. message-passing algorithms revise local beliefs. cellular automata generate surprising behavior from a tiny transition rule. A computer program is valuable not because it contains a unique instruction for every moment of its execution but because the same instructions can operate on changing state.

Neural networks turned much of learning into the search for a gigantic static function approximator. That was extraordinarily successful. Recurrence asks whether the learned object should sometimes look more like a program whose meaning comes from being run.

There is a philosophical trap hiding in that sentence. Calling a model “program-like” can make us imagine clean symbolic procedures where there may be only high-dimensional dynamics. A recurrent network does not have to discover Newton's method or a neat finite-state machine. It can learn a messy trajectory that works statistically and fails strangely. Repetition does not guarantee modularity. Shared weights do not guarantee an interpretable algorithm.

The claim worth keeping is narrower. A repeated transition gives the model a chance to represent a computation whose *length is not hard-coded into the number of distinct parameter sets*.

That is enough to reopen questions the fixed stack made easy to ignore.

How long should a thought be allowed to run? When should it stop? What exactly should survive from one update to the next? Can the same transition perform different roles at different stages of a computation? Does weight sharing encourage genuine iterative rules or merely force a compromised block to do several unrelated jobs? When a recurrent state becomes wrong, can later iterations recover, or does the loop stabilize the error? If a model gets better when given more loops than it saw during training, what did it actually learn?

These questions are not peripheral to RLT. They are the context in which its claim about temporal depth becomes meaningful.

The Transformer did not kill recurrence. It changed the burden of proof.

Any recurrence that returned had to explain why its sequential dependence was worth paying for.

The newest systems finally have an answer worth testing: because time itself may buy a kind of depth that parameters alone cannot efficiently store.
