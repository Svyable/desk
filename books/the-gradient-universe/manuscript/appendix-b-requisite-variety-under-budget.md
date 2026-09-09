# Appendix B — Requisite Variety Under a Physical Budget

The previous appendix treated viability as a reachability problem. This one asks a more primitive question.

What must be true for regulation to work at all?

The question is older than the language of this book. W. Ross Ashby spent much of the 1950s asking how a regulator can keep a system inside acceptable bounds while disturbances try to push it out. His law of requisite variety is often paraphrased as “only variety can destroy variety.” The paraphrase is memorable enough that it is frequently made vague. The useful idea is more exact: a regulator cannot in general suppress a wider variety of relevant disturbances than its effective response structure can distinguish and counter.

That is already dangerously close to any claim that organisms survive because they have “more options.”

So the reachability conjecture has to begin by admitting the ancestry.

Ashby did not need thermodynamics to see that a controller with one response cannot perfectly regulate ten disturbances that require ten incompatible responses. Klyubin, Polani, and Nehaniv later introduced *empowerment*, an information-theoretic channel-capacity measure of how strongly an agent’s actions can influence later sensory states. Modern robust control, viability theory, semantic-information work, and information thermodynamics provide still richer accounts of control, survival, sensing, memory, and feedback.

The contribution of this appendix is not another claim that future control matters.

It is to ask what happens when the regulator itself is physical and expensive.

A cell cannot deploy an arbitrarily large response repertoire merely because the environment contains many disturbances. Every sensor occupies membrane or cytoplasmic space. Every enzyme requires amino acids and translation. Every maintained ion gradient leaks. Every redundant pathway needs genes, proteins, metabolites, cofactors, and repair. Every regulatory state takes time to enter and leave. A nervous system pays for neurons that may be silent most of the time. An immune system maintains lineages against threats that may never arrive.

Control variety is embodied.

Embodiment gives it a budget.

Consider a finite disturbance set

\[
D=\{d_1,d_2,\ldots,d_n\}.
\]

Let a regulator have a finite set of possible actions

\[
U=\{u_1,u_2,\ldots,u_m\}.
\]

For the moment assume the disturbance can be identified perfectly. Let

\[
G_c(d,u)
\]

be the state reached after disturbance \(d\) and response \(u\) under physical architecture \(c\). Let \(K\) be the predeclared viable set.

For each response define its viable disturbance coverage

\[
C_c(u)=\{d\in D:G_c(d,u)\in K\}.
\]

If every disturbance must be controlled successfully, then the affordable response repertoire has to cover the disturbance set:

\[
D\subseteq\bigcup_{u\in U_B(c)}C_c(u),
\]

where

\[
U_B(c)=\{u\in U:J_c(u)\le B\}
\]

contains only actions affordable under the physical budget \(B\).

There is no new theorem hiding in that notation. It is a bookkeeping identity for a finite control problem. Yet it exposes something the phrase “the system has options” obscures.

An action that exists in the abstract but cannot be powered in time is not an effective response.

A gene that could theoretically be expressed after the cell has irreversibly lost ATP is not a rescue pathway.

A backup generator with no fuel at the site is not reserve capacity.

A metabolic reaction with the right stoichiometry but an inaccessible cofactor state is not immediately available control authority.

The distinction between logical possibility and physically affordable possibility is the reason thermodynamics belongs in the problem.

Now add imperfect sensing. Suppose several disturbances produce the same observation. The regulator cannot choose a different action for events it cannot distinguish. A single response must then keep all disturbances in that observational class viable, or the sensor architecture must change.

That brings memory and information into the story without making them mystical.

A sensor can improve control by splitting one observational class into several distinguishable cases. A memory can improve control by using previous observations to disambiguate the present. A model can improve control by inferring a hidden state that determines which response is safe.

But those improvements have physical implementations and costs.

Information thermodynamics has already made this point precise in small stochastic systems: measurement, feedback, memory, and information flow alter thermodynamic bounds but do not evade the second law. The reachability framework should therefore never say that it discovered “information becoming physical.” The narrower question is which **viable transitions** a particular physical information-processing architecture buys under a matched budget.

The same finite formulation reveals four distinct ways a constraint can help regulation.

The first is to **filter disturbances before active control is needed**.

A membrane does not have to identify every external molecule and then command a pump to remove it. Selective permeability prevents many molecules from crossing in the first place. A shell attenuates mechanical shocks. Insulation reduces the heat flux presented to active temperature control. A surge protector clips voltage excursions before downstream electronics need to respond.

In the notation above, the constraint changes the effective disturbance set itself.

If a barrier maps several external disturbances to the same harmless internal perturbation, the internal regulator faces less variety.

The second route is to **make new responses affordable**.

A catalyst can lower the kinetic cost or timescale of a reaction. A stored ATP or glycogen reserve can keep an emergency response inside the available budget. A redundant metabolic pathway can make a target state reachable after the primary path is blocked. A charged battery can make a black-start sequence possible when an electrical grid has gone dark.

Here the external disturbances need not change. The set \(U_B(c)\) changes because some actions cross from unaffordable to affordable.

The third route is **better response selection**.

A regulator may already possess several actions but apply the wrong one because it cannot distinguish the disturbance or hidden state. Sensors, memory, and predictive models can improve the mapping from condition to response. This is where Ashby, the Good Regulator tradition, empowerment, information theory, predictive control, and modern machine learning already occupy enormous territory.

The fourth route is the one most characteristic of living organization: **reconstruction of the control architecture from inside the controlled process**.

A membrane makes ion regulation possible. Ion regulation and metabolism supply work used to maintain the membrane. Proteins regulate pathways that provide amino acids and ATP used to replace the proteins. DNA repair preserves genomes that encode the repair system. A cell is not merely protected by constraints; many of its constrained processes contribute to rebuilding the constraints.

That recursive loop is close to the biological theory of constraint closure. Again, the phrase is not ours to claim.

What the reachability program can ask is operational: what disturbance classes cease to be recoverable when one link in that self-maintaining constraint network is removed, and what physical work is required to restore them?

This way of posing the problem also corrects a common mistake in “optionality” language.

A successful regulator often has **less** raw outcome variety than an uncontrolled system.

Imagine a machine with a broken steering linkage. Its future trajectory can fan out over a vast region because small disturbances send it unpredictably in many directions. Repairing the linkage contracts that uncontrolled outcome set. The machine becomes more controllable precisely because fewer trajectories occur for a chosen command.

The same point applies to biology.

A permeable membrane can permit many molecular outcomes. A selective membrane permits fewer. A checkpoint can eliminate cell-cycle transitions. An inhibitory interneuron can suppress actions. A proofreading enzyme rejects reactions. Immune tolerance blocks responses that would otherwise be physically possible. Development progressively removes possible cellular fates.

Raw variety is not capability.

Capability is the ability to place the system in the states that matter while avoiding states from which recovery is impossible.

A small finite-state model makes the distinction visible.

Take physiological damage states numbered from zero to six. State zero is recovered. Higher numbers represent more severe disturbance. A separate failure state lies outside the viability set.

The cheap architecture has two controls.

One is ordinary repair. At low damage it reliably reduces damage by one level. At higher damage the same process becomes unstable: an uncontrolled branch can improve the state or make it worse. The second control is an aggressive overdrive response. It can remove two damage levels quickly, but there is also an uncontrolled branch to irreversible failure.

This architecture has a large raw transition graph. From a severely disturbed state it can reach many different states.

The gated architecture is more restrictive. It pays a construction or activation cost. The gate removes the unstable leak branch and disallows the overdrive route. Only regulated repair remains, reducing damage one step at a time.

Its graph is smaller.

Under the default budget used in the research model, the ungated architecture can robustly guarantee recovery only from severities one and two. At severity three and above, every available control leaves at least one uncontrolled branch from which recovery cannot be guaranteed within the horizon.

The gated architecture, despite paying an activation cost and possessing fewer raw transitions, robustly recovers from severities one through four.

That is the entire point in miniature.

The regulator did not gain capability by maximizing the number of reachable states.

It gained capability by deleting bad transitions.

A useful formalism therefore has to distinguish at least three sets.

There is the raw reachable set: every state reachable through any allowed sequence of controls and uncontrolled outcomes.

There is the viable reachable set: states reachable while remaining inside the declared viable region.

And there is the robust recovery set: disturbances for which some policy guarantees return to the target despite every uncontrolled outcome allowed by the model.

Those sets can move in opposite directions.

The finite-state code committed with this book deliberately produces that reversal. From a severity-four disturbance, the ungated architecture has a larger raw set because its leak and overdrive branches lead to many states, including failure. The gated architecture has a smaller raw set because the gate removes branches. Yet only the gated architecture can guarantee recovery under the matched budget.

Calling the first system “more empowered” or “more optional” without specifying the information-theoretic or control definition would therefore be misleading. Different measures answer different questions.

The book’s question is survival/recovery under physical cost.

Now put the disturbance severities under a probability distribution. The model uses a simple truncated exponential distribution over severities one through six. Under the declared parameters, the probability mass of disturbances robustly recoverable by the cheap architecture is approximately

\[
s_0\approx0.66524.
\]

The gated architecture covers

\[
s_1\approx0.90997.
\]

Those numbers are no longer hand-entered survival advantages. They are derived from the transition graph, viability criterion, energy budget, recovery deadline, and disturbance distribution.

They are still toy numbers.

The graph itself was invented to test logic, not measured from a cell.

That distinction matters because simulations are exceptionally good at making assumptions look like discoveries. If I program a gate to remove lethal branches, the computer has not discovered that biological gates remove lethal branches. It has verified what follows if they do.

Still, the improvement over the first toy model is real. The causal chain is now visible:

\[
\text{constraint cost}
\rightarrow
\text{changed transition graph}
\rightarrow
\text{changed robust disturbance set}
\rightarrow
\text{predicted survival probability}
\rightarrow
\text{selection threshold}.
\]

Only the last arrow uses the population model from Appendix A.

If the gated architecture also carries a continuous growth cost \(c\), then the previously derived crossover

\[
\lambda^*=\frac{c}{\ln(s_1/s_0)}
\]

can be evaluated using survival probabilities produced by the control model rather than fitted after observing competition.

With the toy graph’s default maintenance cost, the crossover occurs near

\[
\lambda^*\approx0.12769
\]

hazards per unit time.

Again: this is not a biological prediction.

It is a template for one.

A real experiment would have to identify the transition graph independently. The states would need measurable physiological meaning. Edge costs would need energetic or material measurements. Uncontrolled branches would need experimentally estimated bounds or probabilities. The viability boundary would need independent justification. The disturbance distribution would have to be declared before competition. The growth cost of the additional constraint would have to be measured rather than inferred from who wins.

Then the model would have nowhere to hide.

There is another reason to keep Ashby visible here.

Suppose the gated architecture survives more disturbance classes because it reduces the effective variety that reaches its interior. Ashby already tells us that reducing relevant disturbance variety can make regulation easier. Suppose a richer regulatory architecture distinguishes more environmental states and selects more responses. Cybernetics and information theory already tell us why that can help.

The scientifically interesting residue is therefore not “variety matters.”

It is the physical accounting of **how much work a system invests to alter the disturbance–response geometry it will face later**, especially when the processes protected by that geometry help reconstruct the constraint.

That is a narrow claim.

It is also much harder to fake.

The benchmark literature makes it harder still. Bacterial proteome reserves already demonstrate quantitatively that maintaining apparently unused proteins can reduce present growth while improving recovery from future nutrient shifts. Growth–lag trade-offs are measured. Anticipatory regulation has been evolved in the laboratory. Recent models show microbial populations encoding environmental transition statistics through proteome pre-allocation.

Those studies are not evidence that this book discovered a new principle.

They are tests the framework ought to reproduce.

If our mathematics cannot recover a familiar preparedness trade-off, the framework is probably wrong.

If it can, we have passed a consistency check and nothing more.

A genuine contribution has to occur where the neighboring models stop.

One promising place is the thermodynamic coupling among metabolic currencies. Recent work shows that independently controlling coupled currencies can have a thermodynamic cost. The reachability extension would ask which *time-dependent demand vectors* become recoverable because that cost is paid, then predict the environmental regime in which the added control authority becomes worth carrying.

Another is dormancy. A dormant viable cell and a dead cell can have similarly tiny present metabolic rates. If a state-space and energy-budget model can predict, before reactivation, which perturbations still possess a viable path back to active metabolism, then latent capacity has been operationalized rather than named after the fact.

A third is a fuel-maintained synthetic barrier. If a driven chemical system spends part of its fuel constructing a compartment that removes destructive transitions, and the resulting recovery set can be predicted before the next forcing protocol arrives, the full causal chain becomes experimentally visible without the historical complexity of evolution.

Those are better targets than another metaphor about nature seeking possibilities.

The first-principles lesson of this appendix is almost the opposite.

Good regulation often consists of making most possibilities impossible.

The question is which ones remain, what it cost to shape them, and whether the resulting system can pay that cost again tomorrow.