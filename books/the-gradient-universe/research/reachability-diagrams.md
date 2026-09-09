# Diagram Specifications — Reachability Conjecture

These are scientific figure specifications, not decorative art. They are written so a later SVG/illustration pass can preserve the causal distinctions rather than turning the idea into a generic complexity graphic.

## Figure 1 — Dissipation versus constraint-mediated future control

### Purpose

Show why “everything dissipates” is too weak to explain the proposed distinction.

### Left panel: direct relaxation

Flow:

`free-energy difference -> available pathway -> dissipation -> reduced difference`

Example labels:

- charged capacitor through a resistor;
- unregulated chemical relaxation;
- hot body cooling.

The path is not “bad.” It is simply a direct relaxation route.

### Right panel: constraint-mediated pathway

Flow:

`free-energy difference -> work -> constructed/maintained constraint -> altered admissible transitions -> later controlled work + dissipation`

Examples beneath the constraint box:

- membrane;
- valve;
- reserve pool;
- regulatory separation;
- repair machinery.

### Visual rule

Do **not** imply that the right panel violates or reduces total entropy production universally. The contrast is about transition structure and timing, not a moral ranking of dissipation.

### Caption draft

A free-energy difference can relax directly or part of its available work can be invested in a physical constraint that changes later pathways. The conjecture concerns the measurable cost and future viable-control consequences of the constraint, not a universal reduction or maximization of entropy production.

---

## Figure 2 — Raw reachability can shrink while viable reachability improves

### Purpose

Correct the intuitive but wrong idea that agency or adaptation should maximize the number of reachable states.

### Layout

Two state-transition graphs with the same starting node.

#### Architecture A — unconstrained

Starting state has ten outgoing paths:

- four end in green recoverable states;
- six end in red failure states.

#### Architecture B — gated

A physical constraint blocks five transitions.

Remaining paths:

- three green recoverable states;
- two red failure states.

Display two summaries:

`raw reachable transitions: 10 -> 5`

`viable fraction: 4/10 -> 3/5`

The exact numbers are illustrative, not empirical.

### Visual rule

Make the blocked transitions visibly absent or gated. Do not simply enlarge the green region; the point is that **restriction itself can be functional**.

### Caption draft

A constraint can reduce total reachability while improving the distribution of reachable outcomes around viability. Membranes, checkpoints, inhibition, selective permeability, and safety interlocks often work by closing transitions rather than maximizing optionality.

---

## Figure 3 — The experimental causal chain

### Purpose

Turn the conjecture into a preregisterable sequence rather than an after-the-fact explanation.

### Flow

1. `Measured resource/free-energy budget`
2. `Architecture c0 or c1`
3. `Measured construction + maintenance cost`
4. `Mechanistic transition/control model`
5. `Predicted survivable disturbance set D0 or D1`
6. `Declared disturbance distribution mu`
7. `Predicted survival term s_i = mu(D_i)`
8. `Predicted environmental crossover lambda*`
9. `Competition experiment`
10. `Compare with simpler models`

Place a visible **NO FITTING FROM FINAL COMPETITION OUTCOME** barrier between steps 8 and 9.

### Caption draft

The conjecture earns predictive content only if the physical architecture and resource accounting determine the recovery sets before the evolutionary competition is observed. The final selection result is a test, not an input.

---

## Figure 4 — Recursive constraint production

### Purpose

Show the proposed organizational loop without claiming that recursion defines life.

### Loop

`environmental free energy`

→ `metabolic/chemical work`

→ `constraint construction or maintenance`

→ `changed transport/reaction/control repertoire`

→ `improved access to selected viable recovery/resource pathways`

→ `work and material supporting continued constraint maintenance`

Add a side arrow from every stage to `heat / waste / entropy production` so the figure cannot be read as a loophole in thermodynamics.

### Biological examples around the loop

- membrane ↔ ion gradients ↔ transport;
- regulator ↔ enzyme expression ↔ resource acquisition;
- repair machinery ↔ preserved replication machinery;
- reserve polymer ↔ starvation survival ↔ later regrowth.

### Caption draft

A recursive constraint loop exists when processes enabled or protected by a constraint materially support rebuilding, maintaining, or modifying that constraint. This resembles established closure-of-constraints ideas; the proposed research question is what viable transitions the loop adds or preserves at measurable thermodynamic cost.

---

## Figure 5 — Cost–capability frontier, not “futures per joule”

### Purpose

Prevent a false scalar law.

### Axes

Horizontal: `constraint construction + maintenance cost`

Vertical: a problem-specific declared capability such as `probability of viable recovery under disturbance distribution mu`.

Plot several hypothetical architectures as points.

Draw a Pareto frontier through nondominated architectures.

Do **not** label a universal optimum.

Then show that a particular environmental/engineering criterion can select one point from the frontier.

For the evolutionary toy model, annotate that the selected architecture changes with hazard rate `lambda`.

### Caption draft

Thermodynamic cost and future viable capability are not naturally reducible to one universal scalar. The primitive object is a trade-off frontier. A design objective or evolutionary environment supplies the additional criterion that can favor one architecture over another.

---

## Figure 6 — Predicted crossover in the toy model

### Purpose

Visualize the one proposition that has already passed an algebraic/computational sanity check.

### Axes

Horizontal: environmental hazard rate `lambda`.

Vertical: `Delta g = g1 - g0`, the asymptotic log-growth advantage of the costly control architecture.

Plot the straight line

`Delta g = -c + lambda ln(s1/s0)`.

Mark the zero crossing

`lambda* = c / ln(s1/s0)`.

For the default toy parameters:

- `c = 0.05`;
- `s0 = 0.2591817793`;
- `s1 = 0.6988057881`;
- `lambda* = 0.05041119428`.

Add Monte Carlo points from `reachability-threshold-validation.md` with uncertainty if a rendered figure is later produced.

### Visual rule

Label the graphic **TOY MODEL / NOT EMPIRICAL VALIDATION** prominently.

### Caption draft

In the minimal Poisson-hazard model, the control architecture pays continuously but benefits only when hazards occur. The crossover is exact under the stated assumptions. A real test must predict the survival terms from a thermodynamically budgeted reachability model rather than assign them.

---

## Rendering requirements

When these are turned into final book figures:

- prefer simple black/white or restrained monochrome line work;
- keep equations editable in source form;
- include full alt text;
- avoid anthropomorphic arrows such as “system chooses” unless the system actually contains a controller;
- distinguish measured quantities, model-derived quantities, and evolutionary outcomes visually;
- use dashed borders for conjectural or model-derived objects;
- use solid borders for experimentally measured quantities;
- never use a visual hierarchy that makes the conjecture look as established as the second law.
