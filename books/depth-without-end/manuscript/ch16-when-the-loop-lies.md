# Chapter 16 — When the Loop Lies

A loop can correct an error.

It can also rehearse one.

This is the danger hidden inside every argument for iterative reasoning. The same mechanism that gives a model another chance to refine its state gives a mistaken state another chance to become entrenched.

We are used to talking about hallucinations as outputs. The model says something false. A recurrent architecture asks us to consider hallucination as a trajectory.

The wrong answer may begin as a tiny distortion in hidden state long before the model says anything obviously false.

Imagine a recurrent model reading evidence about two competing explanations. Early in the prompt, one explanation seems slightly more likely. The recurrent state encodes that lean. The next update uses the state as part of its input, so attention to new evidence is conditioned by the existing hypothesis. A later ambiguous sentence is interpreted in a way that reinforces the same explanation. By the time contradictory evidence arrives, the state has been transformed repeatedly around the wrong premise.

Nothing supernatural happened.

The system performed ordinary conditional computation on its own previous output.

Humans recognize the pattern as confirmation bias. The analogy is useful descriptively and dangerous causally. A neural recurrence need not have human motives or cognitive biases. What it does have is feedback. Feedback can make small differences persistent.

Control theory has been studying this fact longer than machine learning has existed.

A feedback system can be stabilizing. A thermostat measures a deviation and pushes the system back toward a target. Feedback can also be destabilizing. A microphone picks up its own speaker output, amplifies it, and produces the familiar scream. The sign and gain of the loop determine whether perturbations decay or grow.

Recurrent hidden state is feedback.

The model's previous internal result becomes part of the next computation. Whether that feedback behaves like a thermostat or a microphone depends on learned dynamics.

This gives us a more precise vocabulary for one class of reasoning failure.

A useful recurrent trajectory should have *error-correcting dynamics*. Small perturbations that do not change the correct solution should tend to wash out. Evidence inconsistent with the current hypothesis should be able to move the state into a different region. The system should not amplify irrelevant noise simply because the noise appeared early.

A brittle trajectory has the opposite properties. Small state differences grow. Early mistakes become path dependence. Later updates interpret evidence through the state they inherited. The loop makes the mistake coherent.

Coherence is not truth.

This distinction matters because recurrent systems may become more fluent as they become more wrong. A stable internal hypothesis can make later language more consistent. The model stops contradicting itself because it has converged on one story.

A user may experience that as improved reasoning.

The benchmark may experience it as a confident miss.

Fixed-point halting makes the problem especially visible. If a model stops when state changes become small, a wrong attractor can look like successful completion. The halting mechanism rewards dynamical stability, not semantic validity.

There are at least four recurrent failure modes worth separating.

The first is **drift**. Each update is slightly biased, and the bias accumulates. A state representing the correct running value at step ten has shifted enough by step one hundred that the final classification crosses a boundary. The RLT five-state result at four times training length is consistent with this kind of failure, though the experiment does not identify the mechanism.

The second is **amplification**. A small perturbation grows rapidly because the learned transition has locally unstable directions. Numerical noise, quantization, a tiny prompt difference, or an early modeling error can send the trajectory toward a very different region.

The third is **attractor capture**. The state enters a stable region corresponding to a hypothesis, strategy, or output pattern and has difficulty leaving even when evidence changes. The loop is stable in the wrong way.

The fourth is **oscillation**. Repeated updates do not settle. The model alternates between states, plans, or representations. If an adaptive system interprets non-convergence as a reason to keep thinking, oscillation can consume the entire budget.

These dynamics are not exotic. Iterative algorithms have analogues for all of them.

Gradient descent can diverge with a bad step size. numerical methods can oscillate. fixed-point iteration can converge to an undesirable solution. message-passing algorithms can fail to converge on loopy graphs. Control systems can overshoot.

The difference is that in neural reasoning we may not know what the state means well enough to recognize the failure before output.

That makes recurrent safety partly an interpretability problem.

One useful experiment is state perturbation. At some point in a trajectory, add a tiny random vector. Continue processing the same remaining tokens. How quickly do the perturbed and unperturbed states reconverge or diverge? Does final accuracy change? Repeat the experiment in different directions, because high-dimensional dynamics can be stable along some dimensions and unstable along others.

Another is hypothesis reversal. Construct tasks in which early evidence strongly supports one answer and later evidence decisively supports another. Measure whether additional recurrence helps the model revise or causes earlier commitment to harden.

Another is adversarial contamination. Insert irrelevant but suggestive tokens early in a long prompt. If the recurrent state carries their influence long after attention would otherwise ignore them, recurrence may create a new prompt-injection persistence channel.

Another is state reset. Deliberately clear or partially reset the recurrent state after an identified mistake. If performance improves, the architecture may need mechanisms for forgetting rather than only continuing.

Forgetting is the neglected half of recurrence.

A recurrent model is usually praised for remembering. But a state that cannot discard obsolete computation is not intelligent continuity. It is accumulation.

Consider a detective story in which the first suspect looks guilty until new evidence arrives. A good reader updates. A bad recurrent model may continue treating later facts as details inside the first theory. The history remains available through attention, but the working state biases what the model asks of that history.

This is exactly why addressable memory and recurrent state can conflict. The raw evidence may still exist. The state carries an interpretation that determines retrieval and transformation.

A mature architecture may need explicit *revision operators*.

One possibility is gated recurrence. The model learns how strongly to carry previous state versus overwrite it. LSTMs and GRUs solved part of the old long-memory problem with gates for related reasons. RLT's merge mechanism could play a similar role, depending on implementation, but long-horizon revision should be measured directly.

Another possibility is multi-state branching. Instead of maintaining one recurrent hypothesis, the system can preserve several candidate states and prune them as evidence arrives. This turns recurrence toward beam search or particle filtering. It costs more compute but reduces premature commitment.

Another is periodic reconstruction from trusted memory. Rather than carrying one latent state indefinitely, the model can occasionally rebuild working state from raw context or structured external evidence. This sacrifices some temporal continuity in exchange for a chance to escape accumulated drift.

Another is self-consistency across resets. Run the same history from different initial perturbations. If the final state converges on the same answer, confidence increases. If trajectories diverge, the system has evidence that its reasoning is unstable.

These ideas turn recurrence into an object of reliability engineering rather than an article of faith.

There is a second class of failure that has less to do with mathematics and more to do with training incentives.

A model may learn that certain hidden trajectories produce rewarded answers without those trajectories corresponding to human-recognizable reasoning. That is normal. Neural networks are not obliged to organize themselves around our concepts.

The problem appears when we use recurrence to justify claims about “deeper thought.”

A model that loops longer may simply make its existing prediction sharper. It may amplify confidence without discovering new evidence. It may learn a depth-dependent calibration trick. It may memorize that later recurrent states should produce more decisive logits.

The output improves on a benchmark, but the loop is not performing the cognitive operation our metaphor suggests.

Mechanistic tests can again separate the stories.

Does additional depth cause the model to represent new task-relevant variables? Does it correct earlier internal errors? Do linear or nonlinear probes reveal progressive refinement? If you freeze the answer head and inspect latent trajectories, does useful information become more separable? If you intervene on a hypothesized internal variable, does later recurrence repair it?

A loop deserves to be called reasoning only insofar as these causal patterns support the label.

The same skepticism should apply to “self-correction.” Language models are often asked to review their own answers. Sometimes performance improves. Sometimes the model changes a correct answer to a wrong one or produces a confident justification for the original error. A second pass has access to the same weaknesses as the first.

Recurrent state internalizes that problem. The critic and the author can be the same transition function operating on its own previous state.

There is no independent judge unless the architecture supplies one.

This is why external verifiers matter so much in domains where they are available. A test suite does not care how coherent the recurrent state feels. A theorem prover checks a formal derivation. A database can verify a factual record. A calculator can recompute arithmetic.

External checks break self-referential loops.

The most dangerous tasks are those with no cheap ground truth and strong incentives for coherence: strategic analysis, scientific hypothesis generation, policy advice, social prediction, and many forms of open-ended planning. A recurrent model can construct an increasingly integrated internal worldview whose errors become harder to dislodge precisely because more computation has been spent integrating them.

This is not an argument against deeper reasoning. Human experts can make the same mistake. It is an argument against using *amount of deliberation* as a proxy for reliability.

More thought can increase accuracy.

More thought can also increase rationalization.

The system needs diversity of evidence and mechanisms, not only depth.

One practical answer is architectural plurality. Use recurrence for maintaining a working state, search for preserving alternatives, retrieval for reopening evidence, tools for exact operations, and independent critics for adversarial checking. The recurrent state should not become the court of final appeal merely because it is the deepest part of the model.

Another answer is training on reversals. Reward models for abandoning attractive but false hypotheses when new evidence arrives. Include long trajectories where the correct update is to erase or invert a previous latent variable. Train on adversarial state perturbations. Penalize overconfidence after unstable trajectories.

Another is to treat hidden-state stability as a measurable reliability attribute. A production system could estimate sensitivity to perturbations or alternative recurrence budgets. If an answer changes drastically when the state is nudged or the loop count changes, the system can escalate to a more expensive verification path.

This makes recurrence itself a source of uncertainty information.

A stable correct trajectory and an unstable answer may look equally confident at the output layer. The difference becomes visible only when we inspect how the answer behaves under repeated transformation.

There is a strange symmetry here.

Recurrent depth is proposed because a fixed-depth model may not have enough time to work through a problem.

But once a model has more time, the reliability question becomes temporal too. We need to know not only whether the answer is right but whether the computation remains well-behaved as it continues.

A system capable of depth without end needs something equally important: a way to recognize when continuation is making it worse.
