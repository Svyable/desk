# Chapter 7 — Continuous Thought

A language model has a habit that would be absurd in almost any other computer program: it forgets an internal result unless that result is somehow made available to the next computation.

The model can solve half a problem inside a hidden state, but the hidden state produced at the end of one forward pass is not ordinarily treated as a durable scratchpad for the next generated token. What survives in a standard autoregressive decoder is largely the token history and the key-value representations cached from prior positions. If the model wants a particular intermediate conclusion to become easy to reuse, one reliable option is to say it.

That fact made chain of thought powerful. It also created the opening for continuous latent reasoning.

The name sounds grander than the mechanism. The core move is small: instead of forcing every useful intermediate state through the vocabulary, allow a hidden representation to become input to later computation directly.

In late 2024, Shibo Hao and collaborators introduced a method they called [Coconut](https://arxiv.org/abs/2412.06769), short for Chain of Continuous Thought. The project was later presented at COLM 2025. During ordinary language generation, a Transformer produces a final hidden state, projects it through a vocabulary head, samples or selects a token, and embeds that token again when the next position is processed. Coconut can bypass the discrete middleman during designated latent reasoning steps. The hidden state itself is fed back as the next input embedding.

The difference is only one skipped projection if you draw it as boxes.

Conceptually, it is a refusal to collapse thought into a word before thought is finished.

Suppose the hidden state contains a mixture of possible next moves. Vocabulary decoding asks the model to choose one token distribution and eventually one token. That choice is useful for communication but can narrow the representational space early. Feeding the continuous state back preserves a richer object. The next computation can transform the mixture before any commitment to ordinary language.

The Coconut paper reports gains on several reasoning tasks, particularly those that benefit from search-like behavior and backtracking. One of its most discussed observations is that continuous thoughts can appear to maintain multiple alternatives before later computation resolves them. The authors describe this as a potential advantage over language-space reasoning, where generation is forced into a single sequential path.

The finding is suggestive, not a general law about latent space. A hidden vector is not literally a tree search. A visualization that appears to contain multiple alternatives does not establish that the network has implemented a clean branching algorithm. Still, Coconut demonstrates an important possibility: a language model can be trained to treat one of its own continuous internal states as a future input and obtain useful behavior from the loop.

That puts it in the same intellectual neighborhood as RLT without making it the same house.

Coconut creates explicit latent reasoning positions. The model enters a continuous-thought mode, feeds hidden state back for a number of steps, then returns to language. RLT's recurrence is woven through ordinary token processing. Every consumed token can pass the previous decoder final state into the current decoder computation. One architecture inserts latent steps between linguistic commitments. The other gives linguistic steps a recurrent inheritance.

This distinction determines the compute schedule.

Coconut can, in principle, devote several latent updates to a short prompt before answering. RLT's baseline temporal depth grows with the number of consumed tokens. A short but hard prompt does not automatically receive a hundred extra recurrent updates merely because it is hard. Conversely, a long prompt necessarily drives the recurrent state through many decoder applications before output.

A third line of work makes the allocation more explicit.

In [*Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach*](https://arxiv.org/abs/2502.05171), Geiping and collaborators train a language model with a recurrent block whose number of iterations can be varied. The model has about 3.5 billion parameters and was trained on roughly 800 billion tokens. Instead of adding an ever taller stack of distinct layers, it can revisit a shared block multiple times, creating virtual depth.

The important empirical curve asks what happens when the model is allowed to run the recurrent block more times at inference.

On several reported reasoning benchmarks, performance improves with additional latent depth beyond the nominal computation used at one operating point. The paper frames this as scaling test-time compute inside the model. The weights do not change. The recurrent budget does.

This is the neural-network equivalent of turning a dial after training.

The same checkpoint can be cheap and shallow for one request, more expensive and deeper for another. The idea resembles an ordinary iterative algorithm much more than a conventional fixed-depth neural network. You own one procedure and choose how long to run it.

There is an obvious catch: a dial is useful only if turning it generally moves quality in the right direction.

Many computations do not improve indefinitely. A recurrent model can overthink. It can drift away from a good representation. It can oscillate. It can settle into an incorrect attractor. It can encounter states at depth twenty that training never prepared it to handle. An unrolled recurrent block has no guarantee that iteration forty is better than iteration twenty.

The remarkable result in recurrent-depth work is therefore not merely that more FLOPs can help. We already knew more inference compute can help through search, sampling, and explicit reasoning. The stronger result is when the *same learned transition remains useful when executed longer than the schedule that shaped it*.

That is a form of length generalization in computational depth.

It says the model may have learned an update rule rather than only memorized a fixed cascade of transformations.

The word *may* is doing work. A model could interpolate across familiar loop counts without acquiring a clean algorithm. Improvements could arise from regularization, effective ensembling across depth, or other mechanisms. Establishing genuine iterative algorithm learning requires interventions and out-of-distribution tests, not just a smooth benchmark curve.

Still, the possibility is powerful enough to change architecture research.

By 2026, Ying Fan, Anej Svete, and Kangwook Lee were trying to close one of latent reasoning's most practical gaps. If explicit chain of thought gives a model useful supervision at each reasoning step, how do you teach a latent loop what should happen at intermediate depths when those depths do not correspond to words?

Their method, [LOTUS](https://arxiv.org/abs/2606.31779), trains a looped Transformer so latent iterations can be aligned with progress represented in explicit reasoning traces. The aim is not to make the hidden state become a sentence. It is to use available reasoning supervision without requiring the final system to generate the entire verbal chain serially.

The paper reports results at the three-billion-parameter scale and substantial reductions in thought-phase latency under the studied settings, roughly 2.5 to 6.9 times compared with explicit reasoning baselines reported by the authors. Those numbers should not be converted into a universal “latent reasoning is six times faster” claim. Latency depends on hardware, implementation, sequence lengths, task, batch size, and baseline. The important point is that the field is beginning to measure the systems consequence of moving computation out of the token stream.

A language token has an awkward cost structure.

To produce it autoregressively, the model must run a forward pass, choose the token, add it to the history, and then process the next position. A long chain of thought is therefore serial at the token level. Even if each forward pass is efficient, thousands of reasoning tokens create thousands of dependent generation steps.

Latent recurrence can spend repeated computation without paying exactly the same vocabulary-generation and context-growth costs. Depending on the design, some latent work may be structured to use shared parameters or parallel supervision more efficiently.

Again, hidden FLOPs do not disappear. The advantage has to be demonstrated end to end.

This is a recurring theme because the word *latent* invites magical thinking. If a model stops printing its work, the work can feel free. It is not. A hidden-state iteration still consumes accelerator time, memory bandwidth, synchronization, and energy. Its potential advantage lies in representing and scheduling computation differently, not in escaping physics.

The best reason to take continuous thought seriously is therefore not efficiency alone.

It is that latent recurrence creates a new computational primitive.

A token is a discrete commitment chosen from a finite vocabulary. A recurrent state is a point in a high-dimensional continuous space. Repeatedly transforming such a state can implement dynamics that are awkward to express as token sequences. The system can, in principle, refine a representation without inventing a sentence for every refinement.

This matters for problems whose useful intermediate objects are not linguistic.

Consider spatial reasoning. A model may need to maintain an internal relation among objects, rotate a configuration, or update relative positions. Language can describe those operations, but the natural internal representation may be geometric rather than propositional.

Consider code. A system may need to carry a data-flow hypothesis, a set of type constraints, and uncertainty about which function owns a side effect. Writing all of that into a scratchpad can help, but an internal state can also encode distributed relationships that would require many sentences to serialize.

Consider planning. Several partially viable plans may remain alive until a later constraint eliminates all but one. Autoregressive chain of thought tends to commit to a narrative order. A continuous state can, at least in principle, preserve graded alternatives.

This is why the most interesting latent-reasoning claims are about *representation*, not secrecy.

The point is not that a smart machine should hide its thinking from us. The point is that the internal format optimized for transformation need not be identical to the format optimized for human inspection.

Human institutions already make this distinction in other domains. A numerical simulation runs in binary floating-point arrays, then produces plots and reports. A database stores rows in structures chosen for performance, then serves a query result in a human-readable table. A CAD system manipulates geometry and later exports a drawing. We do not demand that the internal representation resemble the final explanation.

Machine reasoning may end up with a similar division of labor.

But language models create an unusual risk because the human-readable output can create a false sense that the internal process is understood. With a simulation, nobody imagines the plot contains every floating-point operation. With a fluent model, a convincing rationale can be mistaken for the computation itself.

Continuous-thought architectures make that mistake harder to sustain.

They also create a supervision problem.

Visible chains of thought are easy to score in pieces. A teacher can show an intermediate algebraic step. A verifier can check a line of code. A formal proof assistant can reject a malformed inference. If the model's useful computation lives in a continuous state with no agreed semantics, what target should training provide at step seven?

One answer is end-to-end learning: reward only the final result and let gradients discover the intermediate dynamics. That can work when signals are dense enough and trajectories short enough. It becomes difficult when the useful computation requires long credit assignment.

Another answer is distillation from explicit reasoning. Train a model with verbal traces, then encourage latent states to reproduce the progress those traces represent without reproducing the text itself. LOTUS belongs to this family of ideas.

Another is self-supervision over prediction: an internal thought is useful if it helps predict future tokens better, as in Quiet-STaR's broad motivation.

Another is to introduce auxiliary objectives on latent states: consistency, convergence, reconstructability, or task-specific variables.

Each choice influences what the loop learns to be.

RLT adds a particularly severe version of the supervision question because its recurrence spans prompt and response tokens continuously. The recurrent state is not confined to a neat “thinking phase” with an obvious beginning and end. It evolves while reading ordinary language and while generating ordinary language. A useful state at token 2,000 may contain consequences of transformations that began far earlier.

Backpropagation can in principle connect later losses to those earlier states. In practice, the path can be long, memory-hungry, and numerically difficult. The model must learn not only what to compute but what deserves to persist through many updates.

The reward for solving that problem is different from Coconut's reward and different from recurrent depth before a token.

RLT could turn the entire sequence into a continuous computational trajectory.

The prompt is not simply loaded. It is metabolized. The response does not simply consult the prompt. It continues from the state produced by metabolizing it.

This is an appealing picture, perhaps too appealing. The language of metabolism makes the architecture sound organic and inevitable. Nothing guarantees that a decoder trained by next-token prediction will discover a clean, useful ongoing state. It may use recurrence opportunistically, redundantly, or not at all. It may learn brittle shortcuts that work at training lengths and collapse later.

The preliminary RLT experiments are interesting precisely because they ask a minimal version of the question. On state-tracking tasks, does recurrence help the model carry an algorithmic state farther than a standard Transformer under similar parameter and data budgets?

For a while, yes.

Then the accuracy falls.

That pattern is more informative than a perfect result would be. It suggests that recurrence can create the right bias without automatically solving the extrapolation problem. The loop gives the model somewhere to continue the computation. It does not guarantee that the learned transition remains correct indefinitely.

This is the line that continuous-thought research now has to cross.

A latent state that can be revisited is not yet a reasoning algorithm.

A loop that can run longer is not yet a loop that should.

A hidden computation that saves tokens is not yet a cheaper computation.

A converged representation is not yet a true answer.

The research program becomes compelling when those distinctions are treated as measurements rather than marketing problems.

The goal is no longer merely to make the model “think without words.”

It is to learn transformations that remain useful as thought continues.
