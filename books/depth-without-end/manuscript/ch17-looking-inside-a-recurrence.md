# Chapter 17 — Looking Inside a Recurrence

A conventional deep network gives an interpretability researcher a convenient fiction.

Layer twelve is layer twelve.

The parameters at that depth are different from the parameters at layer eleven and layer thirteen. One can ask whether syntax appears early, whether semantic features become sharper later, whether a circuit spans particular layers, or whether an intervention at layer twenty changes the final prediction. The answers can be messy, but depth has an address.

A looped model ruins the address system.

The same parameters can be visited repeatedly. “Layer twelve” may mean the twelfth physical block on its first visit, the same block after five recurrent passes, or a virtual depth that has no unique parameter set of its own. The state changes while the machinery repeats.

Interpretability has to follow the trajectory instead of the architecture diagram.

This is not a minor methodological adjustment. It changes what counts as a mechanism.

In an untied Transformer, one layer can specialize to a role because it will always occupy roughly the same place in the computation. A particular attention head may consistently copy names, resolve coreference, or move information between positions at a characteristic depth. In a tied recurrent block, the same head can see radically different states on different passes. Its function may be conditional on how far the representation has evolved.

The parameter is fixed.

The operation it participates in is not.

This resembles ordinary software more than a static circuit. The same instruction `x = x + 1` can increment a loop counter, update an index, or participate in an algorithm depending on the state when it executes. Looking only at the instruction does not tell you what the program is doing at iteration forty.

The neural version is harder because the state itself has no named variables.

One of the newest attempts to study this problem appeared in September 2026. Wenlong Wang and Fergal Reid's [*Looped Transformers under the Jacobian Lens: Does the Global Workspace Survive Recurrence?*](https://arxiv.org/abs/2609.01924) examines recurrent-depth models including Ouro and Huginn and compares how representations move across looped depth. The paper is very recent and should be treated as an exploratory mechanistic study, not a settled account of recurrent reasoning.

Its importance for this book lies in the question it asks.

When a Transformer is looped, does a recognizable shared representational workspace survive repeated application, or does recurrence transport information through depth in a fundamentally different way?

The reported answer is not one simple behavior. Different looped models appear to use recurrence differently. In one, information can be written and transported across virtual depth in a way that resembles a persistent workspace. In another, recurrent processing reorganizes representations more substantially.

That diversity is exactly what we should expect if “looping” is an architectural category rather than a cognitive mechanism.

Two models can reuse weights and learn different dynamics.

This complicates claims about RLT before a large implementation even exists. We cannot infer the function of RLT's recurrent state merely from its equation. The previous final decoder output enters the next token's merge, but the trained model may use that channel in ways we do not anticipate.

It may carry a compact algorithmic state.

It may carry a broad working representation of the prompt.

It may become an error-correction signal.

It may mostly reproduce information available through attention.

It may be heavily used in some layers and ignored in others.

It may change function over the course of a sequence.

Only causal analysis can distinguish those possibilities.

The word *causal* matters because probing alone can be deceptive.

Suppose a linear probe can decode the correct parity state from the recurrent vector. That tells us the information is present in some recoverable form. It does not tell us the model uses that information to produce the answer. A representation can contain many correlates that are computationally inert.

Intervention gives a stronger test. Modify the component encoding parity while leaving other state as intact as possible. Does the model's future trajectory change as the hypothesized mechanism predicts? If we swap recurrent states between two examples with identical true parity, does behavior remain stable? If we swap states with opposite parity, does the final answer flip?

These are the neural equivalent of changing a variable in a program and rerunning it.

RLT offers unusually clean intervention points because its architecture explicitly names the recurrent final state and decoder cache as separate components. Researchers can alter one while preserving the other.

Reset `s_t` but keep decoder KV.

Preserve `s_t` but scramble part of the local cache.

Hold global encoder memory fixed and perturb the recurrent merge.

Interrupt recurrence at different sequence positions.

Each experiment asks what the state contributes beyond addressable context.

The same logic can be applied across virtual depth.

If additional recurrent steps improve a reasoning problem, what changes inside the representation? Does an answer-relevant variable become more linearly separable? Does the model move toward a stable fixed point? Do irrelevant features fade? Does attention shift from broad evidence collection toward a narrow unresolved constraint?

A useful visualization would show the state trajectory projected into a low-dimensional space, colored by the true task variable. Perfectly clean clusters are unlikely on natural language. Even messy trajectories can reveal whether recurrence refines, cycles, or drifts.

The danger is making the picture more interpretable than the model.

High-dimensional projections can create apparent structure. Probe accuracy can reflect information available everywhere rather than a special recurrent mechanism. Chosen examples can tell flattering stories. Recurrent models need the same statistical discipline as any interpretability work: held-out data, control tasks, causal interventions, robustness across seeds and model sizes.

There is also a novel temporal confound.

A feature can appear to strengthen with recurrent depth simply because repeated transformations increase norm or confidence. The model may not have performed a new inference. It may be amplifying an existing signal.

To distinguish refinement from amplification, researchers can introduce contradictory evidence partway through the trajectory. A genuinely updating state should reorganize. A confidence amplifier may continue strengthening the original feature.

This is another reason reversal tasks are so valuable.

They force the model to demonstrate that recurrent state is editable.

The interpretability problem becomes harder when recurrence crosses token time as in RLT. A state has two coordinates: where the model is in the sequence and how much physical depth each token traverses. The current representation reflects both linguistic history and repeated decoder application.

A feature that emerges late may have appeared because the model saw new evidence, because the recurrent state had more time to refine, or both.

Disentangling the causes requires counterfactual executions.

Hold the visible history constant and vary recurrent computation if the architecture permits.

Hold recurrent budget constant while varying history length.

Insert semantically empty tokens that extend temporal depth without adding meaningful evidence.

Compress the prompt while preserving its informational content and see whether the shorter recurrent path changes performance.

These experiments would tell us whether sequence length is purchasing cognition or merely transporting content.

Pause tokens become particularly useful as a diagnostic. If inserting semantically neutral tokens improves RLT because they grant the recurrent state additional updates, then temporal depth itself is doing work. If performance remains unchanged, the architecture may rely more on content-bearing updates than on raw path length.

A model that improves with meaningless extra tokens would raise another question: why not provide explicit latent loops instead of making the language sequence carry the compute clock?

Interpretability can therefore inform architecture design, not merely explain a finished model.

There is a second reason to look inside recurrent trajectories: safety interventions may have to persist through time.

In an untied network, an interpretability method may identify a feature at a particular layer and modify it there. In a recurrent model, the same dangerous feature can reappear when the shared block is visited again. A one-time intervention may be undone by later dynamics.

Imagine suppressing a representation associated with an unsafe plan at recurrent step ten. If the model's transition reconstructs that plan from other context at step eleven, the intervention achieved nothing durable.

Safety mechanisms may need to target the attractor rather than the momentary state.

That could mean modifying weights so the dangerous trajectory is no longer stable, monitoring state repeatedly, or introducing a control signal that persists across recurrent steps. The correct intervention depends on how recurrence transports information.

This is where dynamical-systems analysis becomes more than metaphor.

A feed-forward circuit can often be described as a path from features to output. A recurrent system may be better described by fixed points, basins, transitions, and sensitivity. The unit of explanation shifts from “which neuron fired?” toward “what trajectories does this learned update make possible?”

Deep Equilibrium Models foreshadowed this perspective by defining network output as the fixed point of a learned transformation rather than as the result of a prescribed stack of unique layers. The model's effective depth is whatever iteration is required to reach equilibrium. Interpretability in such systems naturally asks about the geometry of solutions and stability of the solver.

Recurrent language models extend the question into a setting where the state is continually perturbed by new tokens.

There may be no single equilibrium. The target itself moves.

A good recurrent decoder could behave like a tracking system: new input pushes the state away from its current basin, computation settles it into a new useful region, and the process repeats. Difficult inputs produce larger state revisions. Easy tokens barely disturb the trajectory.

If such behavior emerges, it would provide a mechanistic meaning for “ongoing thought” far stronger than the phrase alone.

We could observe how far each token moves the state, how many subsequent steps are required to stabilize, and which kinds of evidence trigger large revisions.

That would also reveal whether the architecture allocates effective computation sensibly even without an explicit halting controller.

Perhaps punctuation tokens barely change the recurrent state. Perhaps a contradiction causes a large transition. Perhaps a new goal restructures several latent variables. The decoder may learn a kind of implicit adaptive computation through state-update magnitude even when it executes the same nominal blocks for every token.

This is testable.

Measure state displacement by token type and task role. Control for token frequency. Compare large revisions with error correction, uncertainty, and final accuracy. Perturb the merge strength and see whether difficult tokens depend more heavily on recurrent inheritance.

If no such structure appears, the architecture may be spending uniform recurrent work without learning a meaningful temporal workspace.

The same investigations can help distinguish recurrence from long context.

A model with vast attention memory can retrieve the same relevant fact repeatedly. A recurrent model might transform the consequence of that fact into a state variable and stop revisiting the source until needed. Mechanistic traces can show whether attention to old evidence decreases after recurrence internalizes its implication.

That would be a beautiful division of labor: memory for evidence, state for consequence.

We should not assume the beauty before seeing the measurements.

The most important interpretability result for recurrent depth may ultimately be negative. Researchers may discover that virtual depth produces dynamics too entangled to summarize in stable concepts, that shared parameters change function too radically across iterations, or that state representations are highly model-specific. A method that works on Ouro may fail on Huginn; the early Jacobian-lens study already cautions against universal narratives.

That outcome would not make recurrence useless.

It would make recurrent systems harder to govern.

A model can be effective and opaque. Society uses many effective opaque systems. The question is whether the additional capability is worth the reduced confidence about what persists inside the loop.

RLT's architecture increases that stake because the state survives across the boundary where the model stops reading and starts acting.

If the recurrent state is genuinely a computational workspace, we will eventually need to know what work is happening there.

Not because every thought must become a sentence.

Because once a hidden trajectory can continue for thousands of steps, understanding the model means understanding the path, not merely the endpoint.
