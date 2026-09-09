# When Is a Constraint a Useful State Variable?

Appendix C removes the easiest mathematical novelty claim. If a system state \(x\) and its architecture \(c\) both evolve, then the pair \(z=(x,c)\) is simply a larger state. Standard dynamical systems, reachability, viability, stochastic control, and thermodynamic cost functionals can in principle operate on that extended state.

So the scientifically meaningful question changes.

It is no longer whether a membrane, regulator, store, or repair system can be put into a reachability equation. Of course it can.

The question is whether separating some variables as **constraints** produces a reduced description that is measurably better than treating every variable symmetrically.

This note defines the criteria that such a decomposition should meet.

## 1. Transition-structure intervention

A candidate constraint variable \(c\) must do more than correlate with future state.

Intervening on \(c\), while matching other relevant resources and initial conditions as closely as possible, should change at least one of:

- the transition kernel or vector field of the faster process variables;
- the admissible control set;
- the energetic/time cost of a transition;
- the effective disturbance transmitted to essential variables;
- the location of a viability or recovery boundary.

Formally, for process dynamics

\[
\dot{x}=f(x,e,u;c),
\]

there should exist experimentally relevant \((x,e,u)\) for which

\[
f(x,e,u;c_1)\neq f(x,e,u;c_0)
\]

or, in a stochastic model, the transition law changes under intervention on \(c\).

If changing \(c\) has no causal effect on the transition structure relevant to the prediction, calling it a constraint adds nothing.

## 2. Independent physical cost

The candidate constraint should have a measurable construction, maintenance, switching, or opportunity cost that is not inferred from the outcome it is later used to explain.

Possible measurements include:

- ATP or other metabolic turnover;
- chemical work or free-energy consumption;
- synthesis/degradation flux of the relevant molecules;
- material allocation such as proteome fraction;
- electrical/mechanical work;
- lost benign growth or production measured in a separate condition.

The cost may be small or intermittent. It does not have to dominate the energy budget.

But if the cost is merely a fitted penalty chosen to make the prediction work, the thermodynamic interpretation is circular.

## 3. Persistence or timescale separation

A useful constraint variable should normally persist long enough to shape many faster transitions, or at least change on a distinguishable timescale from the processes it regulates.

One possible formal regime is

\[
\dot{x}=f(x,c,e,u),
\]

\[
\epsilon\dot{c}=g(x,c,e,u),
\qquad \epsilon\ll1,
\]

although strict singular perturbation structure is not required.

The key empirical question is whether \(c\) has enough persistence that treating it as part of the effective architecture compresses the future dynamics.

A catalytic enzyme abundance, membrane composition, reserve pool, or regulatory configuration may satisfy this in one experiment and fail it in another.

“Constraint” is therefore scale-dependent.

## 4. Predictive compression

The decomposition should earn its extra vocabulary by compression.

Let \(M_{\rm full}\) be a high-dimensional domain model and \(M_{\rm coarse}\) a model that represents selected variables as a constraint architecture and predicts a recovery quantity \(Y\).

The coarse model is useful when it preserves out-of-sample predictive performance while substantially reducing the state description, parameter burden, or data requirement—or when it improves prediction using the same information budget.

This can be tested with ordinary model-comparison tools:

- held-out likelihood or prediction error;
- calibration of recovery probabilities;
- information criteria where appropriate;
- cross-validation across disturbance protocols;
- parameter identifiability;
- predictive performance under interventions not used to fit the model.

There is no reason to invent a special “constraint score” if standard statistical measures already answer the question.

## 5. Transfer across disturbances

A mere curve fit to one perturbation is weak evidence for a meaningful constraint variable.

A stronger decomposition predicts recovery across multiple disturbance classes without redefining the state or viability boundary each time.

For example, a membrane-integrity variable would be more compelling if the same measured quantity helps predict recovery after osmotic, redox, nutrient, and temperature perturbations than if it predicts only the experiment from which it was constructed.

Transfer is especially important because the book claims that constraint language can reveal a recurring organizational distinction across systems.

The distinction should therefore survive some change in context.

## 6. Matched-resource causal control

A constraint architecture must be distinguishable from simply having more resource.

Suppose architecture \(c_1\) costs \(\Delta B\) more than \(c_0\). A decisive comparison supplies the cheaper system with the same additional resource \(\Delta B\) without giving it the architecture.

If the added resource alone reproduces the recovery advantage, the special constraint is unnecessary.

If the architecture changes recovery even after resource inventory is matched, the organization of the resource matters.

This is one of the cleanest empirical distinctions between “more fuel” and “different control geometry.”

## 7. Ablation and reconstruction

A proposed constraint should support an intervention sequence stronger than correlation:

1. measure baseline recovery;
2. ablate or disable the constraint;
3. measure the predicted contraction or deformation of the recovery set;
4. restore or reconstruct the constraint;
5. test whether the recovery set returns in the predicted direction.

For a genuinely recursive biological architecture, the reconstruction step is particularly informative because the system's own processes should contribute to rebuilding the constraint.

If a constraint can only be restored externally, the example may still be useful physics but it provides weaker evidence for self-maintained organization.

## 8. Competition against neighboring quantities

The candidate constraint decomposition must compete with the quantities that neighboring fields already use.

Depending on the domain these include:

- total energy or ATP inventory;
- current dissipation rate;
- growth rate and lag time;
- ordinary robustness or resilience metrics;
- viability kernels without the proposed decomposition;
- minimum control energy;
- Ashbian response variety;
- empowerment/channel capacity;
- mutual information or sensory capacity;
- standard resource-allocation models;
- domain-specific biochemical or physiological predictors.

A new decomposition is scientifically interesting only where it adds out-of-sample prediction, compression, transfer, or causal interpretability beyond these alternatives.

## 9. No ontology claim

Calling \(c\) a constraint does not mean nature contains a fundamental category called “constraint matter.”

At a finer scale, every membrane, enzyme, reserve, and regulatory state is ordinary matter following ordinary dynamics.

The decomposition is analogous to choosing pressure, temperature, or an order parameter: useful when the coarse variable captures stable causal regularities at the scale of interest.

The burden is therefore empirical.

## A possible constraint-quality test

For a candidate architecture variable \(c\), the following five questions should all receive a positive answer before the book treats the variable as scientifically useful rather than metaphorical:

1. **Intervention:** does manipulating \(c\) move the relevant transition/recovery boundary?
2. **Cost:** can the physical cost of maintaining/manipulating \(c\) be measured independently?
3. **Compression:** can a reduced model using \(c\) predict held-out recovery with fewer effective degrees of freedom or less data?
4. **Transfer:** does the same decomposition predict more than one disturbance protocol without redefinition?
5. **Competition:** does it add something beyond established domain predictors?

This is not a theorem and should not be branded as one.

It is a research standard.

## Why this may be the real contribution

The original manuscript looked for a universal direction of dissipation.

The reachability revision looked for a universal geometry of future possibilities.

Both became less plausible under scrutiny.

What remains may be more useful: a disciplined way to identify when energy-consuming physical organization should be represented as a causal constraint in a reduced model of recovery.

That is a smaller ambition than a new law of nature.

It is also the first version of the idea that cannot be obtained merely by renaming entropy, control, or optionality.

Whether it survives now depends on data.