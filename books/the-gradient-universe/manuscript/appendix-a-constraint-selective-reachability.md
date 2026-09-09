# Appendix A — Constraint-Selective Reachability

There is a point where a book built from analogy has to stop and ask whether the analogy can survive algebra.

This appendix does that.

The aim is not to manufacture a new law by naming a quantity. The aim is to reduce the reachability conjecture to assumptions that can be checked, equations that can fail, and limiting cases that expose category errors quickly.

The starting point is deliberately small.

A physical system occupies a state. Its environment changes. Some state transitions are possible and others are not. A constraint can change which transitions are allowed, their rates, or their energetic cost. Building and maintaining the constraint also costs something. For a living system, natural selection acts on the reproductive consequences of that entire arrangement over time.

Nothing in those statements requires purpose, maximum entropy production, or a new force.

The difficult question is whether they imply a useful new intermediate description between thermodynamics and biology.

The conjecture developed in Chapter 11 says that some systems spend present free energy to construct or maintain constraints that reshape their later viable possibilities. The strongest version does **not** say that they maximize the number of future states. A membrane, checkpoint, immune response, developmental program, or safety interlock can remove possible transitions. The physical achievement may be selective restriction: keeping recovery routes open while closing routes to failure.

So the object worth formalizing is not raw reachability.

It is **constraint-selective viable reachability under a physical budget**.

## The minimum state description

Let

\[
x(t) \in X
\]

be the state of the system at time \(t\). The coordinates of \(x\) depend on the problem. For a cell they might include membrane potential, ATP/ADP ratio, redox state, concentrations of selected metabolites, osmotic state, and a damage variable. For an engineered controller they could be voltages, temperatures, positions, loads, or stored energy.

Let

\[
e(t) \in E
\]

represent the environment or external forcing.

Let

\[
c(t) \in C
\]

represent a physically instantiated constraint architecture. The word *constraint* is used literally: a membrane changes permeability; an enzyme changes reaction kinetics; a valve changes admissible flow; a regulatory protein changes which reactions are expressed; a stored reserve changes which future expenditures are affordable.

When internal control is meaningful, let

\[
u(t) \in U_c(x,e)
\]

represent an admissible control action under architecture \(c\).

Then write the dynamics abstractly as

\[
\dot{x}=f(x,e,u;c).
\]

For a stochastic system one can replace this with a stochastic differential equation, a Markov jump process, or another model appropriate to the domain. The notation is intentionally agnostic. The conjecture should not depend on pretending that every system is deterministic or continuously differentiable.

A crucial distinction appears already.

The constraint \(c\) is not merely another state variable if changing it changes the **set of admissible dynamics**. Opening an ion channel, expressing a transporter, constructing a membrane compartment, or adding a redundant pathway can alter what controls exist and which transitions are physically available. That is why the framework belongs near control theory and viability theory rather than near a scalar law of dissipation.

## Viability has to be declared before the result

Let

\[
K \subset X
\]

be a viable set.

A trajectory is viable over a horizon \([0,\tau]\) if it remains inside \(K\) for that interval.

This definition is powerful and dangerous. If \(K\) is chosen after the experiment, almost any surviving trajectory can be declared viable. The set therefore has to be specified from independent physiological, physical, or engineering criteria.

For a microbial experiment, a viable set might require membrane potential above a measured threshold, pH inside a tolerated range, ATP charge above a specified value, and damage below a level from which cells have been shown to recover. For a synthetic chemical network, viability may instead mean remaining inside a region where the autocatalytic cycle can restart after forcing is removed.

The word *viability* is not a synonym for whatever outcome we like.

It is a constraint on state space.

Classical viability theory already studies the set of states from which there exists at least one admissible control that can keep a system within prescribed constraints. That machinery is prior art, not an invention of this book. The proposed addition is the explicit coupling of that control problem to the cost of a **self-produced physical constraint** and, in biological applications, to its evolutionary consequences.

## A physical budget

Let

\[
J[u,c;e]
\]

be the physical cost of a trajectory and its control policy. Depending on the system this may be measured in joules, ATP equivalents, moles of fuel, chemical work, exergy destroyed, or another experimentally justified resource.

Let

\[
B
\]

be the available budget over the horizon.

A trajectory is budget-admissible only when

\[
J[u,c;e] \le B.
\]

The cost has to include the constraint itself.

Write, schematically,

\[
J = W_{\mathrm{build}}(c)+W_{\mathrm{maint}}(c;\tau)+W_{\mathrm{control}}[u]+W_{\mathrm{other}}.
\]

The categories will differ by system. Their purpose is to prevent a common cheat: granting the regulated architecture a membrane, reserve pool, sensor, redundant pathway, or memory state for free and then celebrating its greater resilience.

A fair comparison charges both architectures for what they physically require.

## Reachability without the metaphysics

For a fixed initial condition \(x_0\), environment history \(e\), architecture \(c\), horizon \(\tau\), and budget \(B\), define the budgeted viable reachable set

\[
R^{K}_{\tau}(x_0;e,c,B)
\]

as the set of terminal states \(x(\tau)\) for which there exists an admissible control trajectory that begins at \(x_0\), remains in \(K\), respects the physical budget, and ends at that terminal state.

That definition is ordinary control language with thermodynamic bookkeeping attached.

For uncertain environments, a single future is not enough. Let \(d\) denote a disturbance protocol drawn from a predeclared family \(D\) or distribution \(\mu\). Define the **survivable disturbance set**

\[
S_{\tau}(c,B)
=\left\{d \in D:\;\exists u\;\text{such that the trajectory remains in }K\text{ under }d\text{ and }J\le B\right\}.
\]

This object is often more useful than the geometric volume of a reachable state set.

Why? Because state-space volume is coordinate dependent. Rescale one variable and the volume changes. Add an irrelevant coordinate and it changes again. A count of possible futures can also reward nonsense: a damaged system may have many routes to death.

The survivable disturbance set asks a narrower experimental question.

**Which declared perturbations can this architecture handle within budget?**

If the disturbance process has a probability measure \(\mu\), define

\[
s(c)=\mu\!\left(S_{\tau}(c,B)\right).
\]

This is a dimensionless probability between zero and one. It is not a universal measure of biological value. It is the probability, under the declared disturbance model, that the architecture has some budget-admissible viable response.

Change the disturbance distribution and \(s(c)\) can change.

That is not a defect. It is the point.

Adaptation is environment-specific.

## Why there should not be a universal “joules per future” law

The earlier reachability language tempts us toward a quotient such as

\[
\frac{\text{future options gained}}{\text{work spent}}.
\]

That is usually not a lawful physical quantity.

A joule has units. A set inclusion does not. A probability is dimensionless. Reproductive success introduces yet another scale. Without an independently justified mapping among them, a single scalar “reachability leverage” risks becoming pseudo-precision.

The safer primitive is a **cost–capability relation**.

Architecture \(c_1\) may cost more than \(c_0\) while making a larger class of perturbations survivable. Neither dominates in the abstract. The pair

\[
\left(W_c,\;S_{\tau}(c,B)\right)
\]

or a problem-specific summary such as

\[
\left(W_c,\;s(c)\right)
\]

belongs on a Pareto frontier until some higher-level criterion tells us how to trade cost against capability.

Engineering supplies one such criterion when a designer specifies an objective.

Evolution supplies another when costs and survival differences alter long-run reproductive success.

That distinction matters because it prevents thermodynamics from smuggling in the objective function.

Physics supplies costs and possibilities.

Selection supplies a historical filter.

## A theorem-shaped toy model

A minimal model makes the logic visible.

Consider two heritable architectures in a large asexual population.

Architecture 0 is cheap. In benign conditions it grows at continuous log-growth rate \(r\).

Architecture 1 maintains an additional control constraint. The constraint imposes a continuous cost \(c>0\), measured here as a reduction in log-growth rate per unit time. Architecture 1 therefore grows at rate

\[
r-c
\]

between disturbances.

Environmental hazards arrive as a Poisson process with rate

\[
\lambda.
\]

At each hazard, architecture 0 retains a fraction \(s_0\) of its lineage and architecture 1 retains a fraction \(s_1\), with

\[
0<s_0<s_1\le1.
\]

The survival fractions are **not** free parameters in the final research program. They are placeholders for the output of the physical reachability model. Ideally we predict them from the disturbance distribution and the two architectures before measuring fitness.

Let \(N(t)\) be the number of hazards by time \(t\). Population sizes satisfy

\[
P_0(t)=P_0(0)\exp(rt)s_0^{N(t)}
\]

and

\[
P_1(t)=P_1(0)\exp((r-c)t)s_1^{N(t)}.
\]

Taking logarithms and dividing by time gives

\[
\frac{1}{t}\ln\frac{P_0(t)}{P_0(0)}
=r+\frac{N(t)}{t}\ln s_0
\]

and

\[
\frac{1}{t}\ln\frac{P_1(t)}{P_1(0)}
=r-c+\frac{N(t)}{t}\ln s_1.
\]

For a Poisson process,

\[
\frac{N(t)}{t}\to\lambda
\]

almost surely as \(t\to\infty\). The asymptotic log-growth rates are therefore

\[
g_0=r+\lambda\ln s_0
\]

and

\[
g_1=r-c+\lambda\ln s_1.
\]

Architecture 1 wins when

\[
g_1>g_0,
\]

or

\[
-c+\lambda\ln\left(\frac{s_1}{s_0}\right)>0.
\]

If \(s_1>s_0\), the crossover occurs at

\[
\boxed{\lambda^*=\frac{c}{\ln(s_1/s_0)}}.
\]

Below \(\lambda^*\), the extra control is too expensive for the disturbances actually encountered.

Above \(\lambda^*\), its improvement in survival outweighs its continuous growth cost under the assumptions of this model.

This threshold is not a new law of biology. It is a clean bridge between three already meaningful quantities: a cost, an environmental timescale, and a survival advantage.

The research opportunity lies in deriving the survival advantage from the physical architecture rather than fitting it after the evolutionary outcome is known.

## Connecting survival to reachability

Suppose hazards differ in severity \(a\), drawn from a declared distribution \(\mu(a)\).

For each architecture define the set

\[
D_i=\left\{a:\;\text{a viable budget-admissible recovery trajectory exists under architecture }i\right\}.
\]

Then

\[
s_i=\mu(D_i).
\]

Now the evolutionary threshold becomes

\[
\lambda^*=\frac{c}{\ln\left[\mu(D_1)/\mu(D_0)\right]}.
\]

That is the form worth testing.

The physical model predicts \(D_0\) and \(D_1\). The environmental experiment supplies \(\mu\) and \(\lambda\). Independent metabolic measurements estimate \(c\). The formula then predicts a crossover before the competition assay is run.

If the predicted crossover is wrong, something has failed: the physical reachable-set model, the cost estimate, the disturbance model, or the simple population assumptions.

That is useful failure.

It tells us where to look.

## A concrete numerical sanity check

Take a deliberately simple disturbance model in which hazard severity is exponentially distributed with mean one in arbitrary severity units.

Suppose the cheap architecture can recover from severities up to

\[
h_0=0.3
\]

and the costly architecture up to

\[
h_1=1.2.
\]

Then

\[
s_0=1-e^{-0.3}\approx0.2592
\]

and

\[
s_1=1-e^{-1.2}\approx0.6988.
\]

If maintaining the added constraint costs

\[
c=0.05
\]

units of log-growth rate per unit time, the predicted crossover is

\[
\lambda^*\approx0.05041
\]

hazards per unit time.

A Monte Carlo check committed with the research materials reproduces that crossover within sampling error. That does not validate the biological conjecture. It validates only the algebra and code of the toy model.

The distinction is important enough to repeat.

A simulation of assumptions cannot prove the assumptions.

## The limiting cases are more informative than the pretty equation

The formula should survive attacks that do not require an experiment.

If

\[
s_1=s_0,
\]

then the denominator vanishes. There is no survival benefit. A costly controller cannot be rescued by calling it more organized.

If

\[
c\to0
\]

and \(s_1>s_0\), even rare hazards can favor the safer architecture. That is reasonable: free protection is hard to select against.

If

\[
\lambda\to0,
\]

the cheap architecture wins. A costly unused capability is a burden in a constant environment.

If

\[
s_1<s_0,
\]

the supposed control architecture is actually worse under the declared perturbations. No amount of rhetoric about future options should make it adaptive in this model.

If hazards are temporally correlated, if costs are paid only when the controller is active, if architecture changes the benign growth rate in nonlinear ways, if population bottlenecks are severe, or if environments feed back on population density, the simple threshold changes.

Good.

A model should tell us the conditions under which it stops being the right model.

## Raw reachability can decrease while viable control improves

One of the strongest corrections to the original conjecture follows from gates.

Imagine a chemical network with ten kinetically accessible reactions. Four lead toward recoverable states. Six lead rapidly to irreversible damage under a particular environment.

Now build a regulatory constraint that blocks five reactions, leaving three recovery routes and two harmful routes.

The total number of accessible reactions has fallen from ten to five.

Raw reachability shrank.

Yet the proportion of trajectories that remain viable can rise sharply.

Biology is full of such selective closures. Membranes exclude. Enzymes discriminate. Checkpoints stop cycles. DNA-binding proteins suppress expression. Immune systems destroy cells. Development eliminates possible fates. Nervous systems inhibit actions as well as generate them.

A theory that equates agency with “more options” misses half the machinery.

The physically interesting operation is **reshaping transition structure around viability under cost**.

That may involve expansion, contraction, or both in different regions of state space.

## Recursive constraint production

The word *recursive* should also be earned.

A constraint is recursively involved when processes enabled or protected by the constraint contribute materially to rebuilding, maintaining, reproducing, or modifying that constraint.

A membrane maintained by metabolism is a simple case. The membrane helps preserve electrochemical conditions used by metabolism; metabolism in turn supplies the work and material needed to maintain membrane composition and repair.

A regulatory protein can participate in a deeper loop. Existing transcriptional machinery produces the regulator. The regulator changes which metabolic enzymes are produced. Those enzymes alter resource acquisition and ATP supply. That altered resource state changes the capacity to synthesize and maintain the regulatory machinery.

This resembles existing work on closure of constraints and should be presented as such. The proposed addition is operational: ask what disturbance-recovery relations the loop makes possible at measurable cost.

## What this can and cannot explain

If the framework works, it may help explain why some forms of organization are worth their energetic cost even when they lower immediate throughput.

It could illuminate storage, dormancy, stress responses, redundant metabolism, repair, selective permeability, adaptive regulation, and physical memory.

It may help distinguish a dead low-dissipation state from a dormant low-dissipation state if the latter retains a measurable recovery repertoire under a declared resource budget.

It may help describe an early origin-of-life transition if chemistry begins to spend energy on constraints that make the continuation or reconstruction of those same constraints more reachable.

But it does not explain every biological function.

It does not derive natural selection from thermodynamics.

It does not define consciousness.

It does not prove that living systems maximize viability, reachability, optionality, or anything else.

It does not turn a set-valued control problem into a new fundamental force.

The conjecture earns scientific value only if a thermodynamic/control model predicts a later recovery or selection boundary that simpler models miss.

## The first decisive experiment

The cleanest experiment would use two engineered microbial or synthetic-chemical architectures whose difference is known.

One architecture should be cheaper but have fewer independently controllable recovery routes. The other should spend measurable resources on a regulator, reserve, compartment, or coupling that changes the physically admissible response set.

Before competition begins, measure or calculate:

- the construction and maintenance cost of the added constraint;
- the viable state region;
- the disturbance family and severity distribution;
- the budgeted recovery set of each architecture;
- the resulting predicted survival probabilities;
- the environmental switching or hazard rate at which the cost should be repaid.

Then run the competition across that predicted boundary.

The hardest control is also the most important: compare the new model with ordinary growth-rate, geometric-mean-fitness, bet-hedging, resilience, minimum-control-energy, and metabolic-control models.

If one of those predicts the same crossover with fewer assumptions, use it instead.

That is how this conjecture should be allowed to die.

And if it survives, the result would be more interesting than another claim that life dissipates energy.

It would show, in one measured system, that present thermodynamic work can be assigned to a self-produced constraint, that the constraint changes future viable control in a predicted way, and that this change explains when the constraint becomes worth carrying.

That is small enough to test.

Small enough, perhaps, to be true.
