# Appendix C — The Conjecture Reduced

A scientific idea should be simplified until either something new remains or nothing does.

Recursive thermodynamic reachability now faces that test.

The language developed in the previous appendices separates a system state \(x\) from a physical constraint architecture \(c\). The constraint may be a membrane, enzyme allocation, storage pool, regulatory state, catalyst distribution, channel configuration, or another structure that changes which transitions are available and what they cost.

The point of calling the process *recursive* was that the system can spend work to alter \(c\), after which the altered constraint changes what the system can do later.

Written schematically,

\[
\dot{x}=f(x,e,u;c).
\]

But if the system can construct, degrade, maintain, or reconfigure the constraint, then the constraint has dynamics too:

\[
\dot{c}=g(x,e,u;c).
\]

At first glance this looks like a special class of system. The plant changes its own controller. The process changes the boundary conditions of its future process. The transition graph rewrites itself.

Mathematically, however, there is an immediate reduction.

Define an enlarged state

\[
z=(x,c).
\]

Then define

\[
F(z,e,u)=
\begin{pmatrix}
f(x,e,u;c)\\g(x,e,u;c)
\end{pmatrix}.
\]

The coupled system becomes

\[
\dot{z}=F(z,e,u).
\]

That is an ordinary dynamical system on a larger state space.

Every trajectory in which the constraint changes corresponds to a trajectory in the enlarged space. Every reachable pair \((x,c)\) is simply a reachable state \(z\). If the physical budget includes the work used to change \(c\), an ordinary cost functional can include that too.

So there is an important conclusion:

**The fact that a system changes its own constraint architecture does not, by itself, require a new mathematics of reachability.**

This cuts away one possible novelty claim completely.

A self-modifying control graph can be represented by a fixed graph over a sufficiently enlarged state description. A system that builds a transporter can be represented by adding transporter abundance to the state. A cell that changes membrane composition can be represented by adding lipid or channel variables. A bacterium that rewires gene expression can be represented by adding the relevant regulatory state. A machine that changes controller parameters can include those parameters among its states.

The apparent recursion has moved into the coordinates.

That should make us suspicious of grand terminology.

If all *recursive thermodynamic reachability* does is remind us to include omitted state variables, then the term has no claim to be a new theory. At best it is a useful modeling instruction.

But the reduction also clarifies what might remain scientifically interesting.

The problem in biology is not that we lack permission to make the state vector bigger. We can always make it bigger.

The problem is deciding **which variables deserve to be represented as constraints rather than merely as additional microscopic state**.

A membrane consists of molecules like everything else in the cell. An enzyme is a molecular state. A chromatin mark is a chemical modification. A neural synapse is matter. Nothing in physics labels one molecule “constraint” and another “process.”

The distinction is a coarse-graining.

That coarse-graining can still be physically meaningful.

Suppose some variables change quickly while others change slowly. The fast variables may execute metabolic fluxes, transport, electrical activity, or mechanical motion. Slower variables may alter the rates, admissible pathways, boundary conditions, or response repertoire of those fast processes. A channel state changes ionic conductance. Enzyme abundance changes reaction capacity. Membrane composition changes permeability. Stored glycogen changes the future resource budget. Protein aggregates change which molecular machinery remains functional.

In that setting, writing

\[
x=\text{process variables}
\]

and

\[
c=\text{constraint variables}
\]

is not an ontological declaration.

It is a hypothesis about causal organization and timescale.

The hypothesis earns its keep only if the decomposition predicts something better than an undifferentiated state vector does.

This leads to a much stronger research standard.

Imagine two models of a recovering cell.

The first is a conventional dynamical model containing metabolite concentrations, ATP, redox state, protein concentrations, membrane potential, and whatever other variables are needed. It predicts recovery directly.

The second groups some of those variables into a slower constraint architecture and performs the cost–capability accounting developed in this book. It says, for example, that membrane integrity, chaperone availability, regulatory separation, or reserve capacity changes which viable recovery trajectories remain affordable.

If both models make the same predictions and the second merely redescribes terms in the first, the reachability language has added no science.

If the second exposes a reduced-order variable that predicts recovery across perturbations, transfers across systems, or identifies a failure boundary the conventional model misses, then the coarse-graining has earned value.

The word *constraint* should therefore be treated like the word *temperature*.

Temperature is not a new microscopic force. It is a macrovariable that becomes enormously useful when a many-particle system enters a regime where the coarse-graining is stable and predictive.

A useful biological constraint variable would have to earn a similar status at a much more modest scale.

It should summarize many microscopic details while preserving the causal information needed for the prediction at hand.

That gives the conjecture a new form.

The claim is no longer:

> Self-modifying systems require a new reachability theory.

They do not.

The claim worth testing is:

> In some driven biological or chemical systems, separating slower, work-maintained variables that reshape transition structure from faster process variables yields a physically interpretable reduced model whose measured construction and maintenance costs help predict robust recovery across disturbances.

That is an empirical modeling claim.

It is less glamorous than a new law.

It is also much more defensible.

There is another consequence.

The relevant mathematical tools may already exist almost entirely.

Slow–fast dynamical systems can represent timescale separation. Hybrid systems can represent discrete architecture changes. Markov jump processes can represent stochastic reaction networks. Viability theory can represent safe persistence. Robust control can represent adversarial disturbance. Stochastic thermodynamics can price work and dissipation. Control-energy methods can price actuation. Information theory can price distinguishability and channel capacity. Evolutionary models can translate survival and growth into lineage dynamics.

A good research program may consist not of replacing those tools but of coupling them correctly.

That makes novelty harder to claim but easier to test.

A second issue appears when the enlarged-state trick is taken seriously.

If every constraint becomes a state variable, then the phrase “the constraint changes the reachable set” can become tautological. Of course changing a state variable changes future trajectories. That statement is true of ATP concentration, temperature, position, and almost everything else.

To avoid tautology, a proposed constraint variable needs an intervention test.

Hold the relevant external resource budget fixed. Perturb the candidate constraint while matching other state variables as closely as possible. Then ask whether the predicted recovery set changes in the direction the model specified.

Ablation is one version. Remove a regulatory coupling, transporter, chaperone, membrane component, or storage mechanism.

A matched-resource control is another. Give the comparison system the material or energy that the constraint would have cost without giving it the structure itself.

If extra ATP alone reproduces the effect, the special architecture was unnecessary.

If changing the architecture alters recovery after resource inventory is matched, the constraint has a causal role not reducible to “it had more fuel.”

The same logic applies to dormancy.

A dormant cell can contain ATP, membrane structures, chaperones, aggregates, ribosomes, and regulatory states. Modern experiments already show that ATP levels and protein aggregation correlate with dormancy depth and resuscitation time. Merely saying that the dormant cell possesses “latent reachability” would rename those findings.

A stronger result would require a reduced constraint model that predicts which perturbation protocols remain recoverable, or the energetic cost of resuscitation, before the cell is allowed to wake.

If ATP concentration and aggregate state already predict the outcome just as well, use those variables and stop there.

Likewise for microbial preparedness. Proteome-reserve and growth–lag models already predict when unused protein capacity becomes worth carrying in fluctuating environments. Recasting the reserve as “future reachability” does not improve the science unless the new model predicts an additional perturbation or transfer result.

Likewise for information. Empowerment already measures potential action-to-future-sensation influence. Sensory-capacity theory already connects memory, information, and thermodynamic efficiency. A reachability model of cognition has to predict a physical control boundary that those quantities do not already capture.

The reduction therefore gives us a publication test more severe than any earlier appendix.

For every claimed application, ask:

1. Can the phenomenon be represented by ordinary extended-state dynamics?

Almost certainly yes.

2. Does identifying a subset of variables as work-maintained constraints yield a simpler or more transferable prediction?

That is open.

3. Can the cost of those variables be measured independently?

If not, the thermodynamic claim is weak.

4. Does intervention on the candidate constraint change the predicted viable recovery set after resource inventory is matched?

If not, the constraint interpretation is weak.

5. Does the reduced model beat a conventional domain model out of sample?

If not, the new vocabulary is unnecessary.

That is where the scientific burden now lies.

It also changes what would count as a breakthrough.

A universal “law of recursive reachability” is becoming less plausible with every honest reduction. That is good. The neighboring fields already possess too much mathematics for a new noun to deserve law-like status.

A genuinely strong result would look different.

Take a real non-equilibrium system. Identify a small set of slowly maintained physical constraints. Measure what they cost. Derive from them a reduced recovery geometry. Predict, before perturbation, which disturbances the system can survive or which trajectories remain recoverable. Change the constraints experimentally. Show that the recovery boundary moves as predicted. Then show that ordinary energy inventory, dissipation rate, empowerment, viability without the constraint decomposition, or a standard domain model does not predict the boundary as well.

That would not reveal a new force.

It would reveal a new useful state variable or coarse-grained causal organization.

Physics has advanced many times through exactly that kind of compression.

The lesson from the reduction is therefore not that the conjecture vanished.

It is that the conjecture has been forced into a form where naming can no longer save it.

The mathematics can already contain the recursion.

Only prediction can justify the decomposition.