# Chapter 8 — The Algorithm Learns to Iterate

A model can answer a question correctly for the wrong reason.

This is not a moral judgment. It is one of the basic facts of machine learning.

Train a system on examples of a rule and it will optimize whatever predictive structure the data makes available. If a shortcut works inside the training distribution, gradient descent has no obligation to discover the procedure a human had in mind. A classifier can use the background instead of the animal. A language model can exploit formatting regularities instead of solving the problem. A network trained on short algorithmic sequences can learn a pattern that happens to agree with the algorithm for thirty-two steps and collapses on step thirty-three.

Length generalization is where many shortcuts go to die.

Suppose a model is trained to evaluate a repeated state transition. It sees programs containing at most thirty-two operations. At test time, it receives sixty-four, then 128. A system that learned the underlying update rule has a chance to continue. A system that learned a fixed-length pattern may fail as soon as the distribution moves beyond the horizon it knows.

This is why the tiny experiments in the RLT report deserve more attention than their parameter count suggests. They are not demonstrations of large-model intelligence. They are probes of whether the architecture encourages a particular kind of algorithmic behavior.

The cleanest example is parity.

Start with a bit. Read a sequence of operations that either flip the bit or leave it alone. After the final operation, report the state. The correct solution does not become conceptually more complicated as the sequence grows. The same transition rule is applied again and again.

A recurrent architecture has an obvious place to put that rule. Maintain the current state. Update it when the next operation arrives. Repeat.

A fixed Transformer can also solve the task. It may aggregate the entire sequence, infer a parity function, or discover another representation. On lengths similar to training, that can work extremely well. The test is whether the learned computation has the right extrapolation structure.

This is the promise behind looped architectures: if the problem repeats an operation, let the model repeat a learned computation.

The promise sounds almost tautological. It is not.

A network with tied parameters does not automatically learn the human algorithm. The same weights can implement a complicated depth-dependent computation because the hidden state changes from loop to loop. The model may encode the iteration number implicitly. It may learn a trajectory that only works for the range of states encountered during training. Once the recurrent state wanders into a region created by longer-than-seen sequences, the transition can behave unpredictably.

This is the neural version of a software routine that works on the test cases and contains no actual invariant.

To see why recurrence can still help, it is useful to distinguish *representing a result* from *representing an update*.

A fixed-depth network trained on sequences up to length thirty-two can, in principle, learn a direct map from whole input to final state. The function family may be powerful enough that no explicit iterative structure is needed. If the training distribution never asks for length sixty-four, the optimizer receives no direct penalty for choosing a solution whose effective horizon is thirty-two.

A recurrent model has a structural pressure in another direction. The same transition is reused. If it learns a local update that is correct, the architecture can apply that update again on a longer sequence without requiring new parameters or new layers. The solution has a route to extrapolation built into the execution graph.

The phrase *inductive bias* is often used here and then left unexplained. It simply means the architecture makes some solutions easier to represent or learn than others before the data has settled the issue.

Convolution assumes locality and translation-related structure. Attention makes content-addressed interaction easy. Recurrence makes repeated state updates natural. None guarantees the world obeys the assumption. Each changes which hypotheses the optimizer reaches readily.

Universal Transformers were early evidence that recurrent depth could improve algorithmic generalization. The architecture repeatedly applies a shared transformation and, with Adaptive Computation Time, can continue until a learned halting mechanism says a position has received enough processing. The work included tasks where systematic generalization beyond training conditions matters more than memorizing a distribution of surface forms.

The looped-Transformer work in 2023 sharpened the connection to in-context learning. If a model is presented with examples of an unknown function and asked to infer that function for a new input, it can be interpreted as performing an optimization procedure inside its forward pass. A looped architecture can reuse the same block as an update rule, approximating the iterative structure of algorithms such as gradient descent.

This is an important inversion of the usual story about large language models.

We often say the network “contains” what it learned during training. In-context learning reveals another possibility. The network can contain a *learning algorithm* that operates on the prompt. The prompt supplies data. The forward pass runs a procedure. The answer is the output of learning performed at inference time.

Once viewed this way, recurrent depth is less exotic. If inference itself includes an algorithm, why should that algorithm be forced into a fixed number of distinct layers?

An optimizer normally iterates until a budget or convergence condition is reached. A shortest-path routine processes a frontier until the relevant nodes settle. A constraint solver propagates implications repeatedly. An iterative decoder refines an estimate. The number of necessary steps depends on the instance.

The fixed stack hard-codes a maximum schedule for all instances.

Recurrence separates the rule from the number of times it is used.

This does not mean all reasoning is iterative in a useful sense. The word becomes meaningless if every sequential computation is called iteration. Some tasks benefit from direct pattern recognition. Some require retrieval. Some require one expensive transformation rather than many small refinements. Some require branching search, where repeating one state update along a single trajectory is exactly the wrong structure.

The architecture has to match the problem's computational shape.

RLT's preliminary tasks are deliberately chosen so the shape is favorable.

Parity is a finite-state process. The five-state transition task is richer but still clean: the system occupies one of five states, operations move it according to a transition rule, and the final state is the target. Both problems have a compact sufficient state and an obvious recurrent solution.

That makes them good sanity checks and weak proxies for general reasoning.

A critic could say the experiment asks a recurrent model to do the sort of thing recurrent models are built to do, then celebrates when it wins. The criticism is fair as far as it goes. An architectural proof of concept should often begin with the mechanism it claims to support. The problem arises only if success on the clean task is advertised as evidence for broad capability.

Zhang's report does not make that leap. It labels the results synthetic and preliminary. The more useful question is what these tasks can reveal about the learned transition.

The parity results suggest RLT retains useful behavior substantially beyond the thirty-two-operation training length. At sixty-four operations, the reported accuracy remains around 82 percent; at 128, it is 60.8 percent, above the 50 percent chance level but far from robust. The five-state task is harsher. RLT is near perfect at thirty-two operations, around 49 percent at sixty-four, and 20.7 percent at 128—essentially chance.

If recurrence had simply taught a perfect transition table, the five-state task should not collapse merely because the sequence is longer. Apply the same correct transition 128 times and the final answer remains exact.

The collapse therefore tells us something important: whatever the model learned, it is not behaving like a flawless symbolic state machine under long unrolling.

Why not?

Several explanations are possible.

The state representation may be approximate. Each update could introduce a small error. Thirty-two updates leave the state close enough to the intended attractor; 128 allow the error to compound.

The learned transition may depend on hidden statistics associated with training-length position. Longer sequences move into positional or activation regimes the model has not seen.

The recurrence may not be carrying a clean five-way state at all. It could rely partly on attention, sequence patterns, or distributed features that generalize poorly.

Optimization may favor a solution that is easier to learn at the training horizon than the exact finite-state algorithm.

The model may contain the right update but suffer numerical instability as the state is transformed repeatedly.

These explanations make the experiment more interesting, not less. They turn “recurrence generalizes” into a mechanistic question: under what conditions does a learned continuous dynamical system become equivalent enough to a discrete algorithm that it can be iterated safely?

That problem connects modern language modeling to an older tradition in neural computation.

A recurrent network defines dynamics. Feed it a state and an input; it produces a new state. Repeated application traces a trajectory through state space. Stable computation often requires useful regions of that space to behave like attractors or robust manifolds. Small perturbations should not throw the system into nonsense. If the task has discrete states, the learned continuous representation ideally keeps those states separated while making transitions reliable.

The longer the recurrence runs, the more those properties matter.

A feed-forward network can tolerate an imperfect intermediate representation if the next unique layer has learned how to correct it. A tied recurrent block must often correct errors using the same transformation that helped create them. This can be a strength: one general correction rule is reusable. It can also be a trap: a systematic bias repeats.

The difference resembles compound interest.

A tiny positive return repeated many times becomes large. So does a tiny recurring fee.

The same multiplication applies to error.

This is why length extrapolation should be plotted as a curve rather than summarized by one heroic out-of-distribution point. A model that stays perfect to 2× training length and then falls off a cliff is different from one that degrades smoothly. A model that recovers after a dip suggests different dynamics again. The shape tells us about stability.

We also need comparison against baselines that are allowed fair alternatives.

A Transformer can be given more depth. It can be trained on longer sequences. It can receive explicit scratchpad tokens. It can use relative position schemes designed for extrapolation. It can be augmented with recurrence of a different kind. If RLT's advantage disappears whenever the baseline gets equivalent compute, then the result is primarily a compute-allocation story rather than an architectural one.

That would still matter. The question would become whether RLT buys better performance per parameter, per byte of memory, or per unit of latency. Different applications care about different denominators.

The broader importance of iterative inductive bias appears when we leave synthetic state machines and enter tasks where the algorithm is not supplied.

Take code debugging. A model can inspect a failing test, hypothesize a cause, modify its mental model, trace the consequences, and revise. There is an iterative structure, but the state is far richer than five discrete values. The update rule may need to change depending on what kind of evidence arrives.

Take theorem proving. A proof state evolves as lemmas are established and goals are transformed. Some steps are local rewrites; others require search over distant ideas. A simple recurrence may help maintain proof state but will not replace branching exploration.

Take scientific reasoning. A hypothesis is updated by evidence, but the appropriate update is not a fixed Bayes formula available to the model in clean symbolic form. New concepts may have to be invented. Tools may be required. External data can overturn the internal trajectory.

In these domains, iteration is necessary but insufficient.

The interesting architectural question is whether a persistent latent state can serve as the substrate on which these richer procedures operate.

If it can, the recurrent state may learn something more general than a finite-state machine: a compact representation of *where the work is*.

That phrase is intentionally vague because the representation might include many things at once. Which subproblem remains unresolved. Which constraint was violated. Which hypothesis currently dominates. What the model tried last. What evidence should alter the plan. How certain it is that the current route is worth continuing.

This would make recurrence less like memory and more like process control.

But before granting it that role, we should remember the five-state collapse.

The hardest part of an iterative algorithm is often not applying the rule once. It is preserving the invariant across every application.

Human-written algorithms come with proofs or at least specifications. We can say what must remain true after each iteration. Learned recurrent networks rarely come with such guarantees. Their invariants, if they have them, are discovered statistically.

One promising research direction is therefore to test learned recurrences the way we test algorithms: perturb state, extend horizon, vary input distribution, inspect convergence, search for cycles, and identify quantities that remain stable. Do not merely measure final accuracy.

If a model claims to have learned parity, find the latent variable corresponding to parity and flip it. If it claims to track five states, decode the state at every step and watch where trajectories begin to merge. If additional loops improve reasoning, ask whether the improvement corresponds to measurable refinement or just increased confidence.

These experiments would tell us whether the algorithm actually learned to iterate.

RLT's title invites us to imagine depth that can keep going. The more demanding standard is not whether the architecture permits continuation.

It is whether the computation remains itself when it does.
