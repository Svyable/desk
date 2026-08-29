# Research Brief

## Thesis under test

*Scaling Laws* asks what changes when systems become larger, more connected, more capable or more heavily used.

The strong claim — that large systems obey one universal family of power laws that can be extrapolated indefinitely — is false. Exponents vary by domain, measurement choice, time period and regime. Mechanisms matter. Institutions adapt. Technologies substitute. Bottlenecks move. Curves break.

The narrower claim worth testing is this:

> Many important systems change nonlinearly with scale, and the practical skill is not merely estimating a curve but identifying the mechanism that sustains it, the regime in which it holds, and the boundary conditions that will bend or break it.

A second claim follows:

> Scaling creates predictable transfers of importance: variables that are negligible at small scale can dominate at large scale, while fixed costs and local frictions can become less important per unit.

The manuscript uses that transfer to connect apparently distant subjects: biological allometry, urban infrastructure, network effects, experience curves, semiconductor economics, machine-learning loss curves, organizational coordination, reliability engineering, markets and governance.

The AI chapters make a narrower forward-looking argument. Empirical scaling laws in machine learning can be strategically useful because smooth loss curves allow resource planning, but the relevant law is always conditional on architecture, data distribution, optimization, hardware, energy, inference economics and evaluation. Scaling should be treated as an engineering regime, not a metaphysical theory of intelligence.

## What would weaken the argument?

Evidence that should materially change the book includes:

- broad domains where linear models predict outcomes as well as nonlinear models across several orders of magnitude;
- scaling relationships that disappear once measurement error, hidden covariates or selection effects are controlled;
- supposedly universal exponents that vary enough across datasets or eras to make the exponent practically meaningless;
- cases where system redesign removes the expected coordination, congestion or reliability penalties of scale without introducing compensating costs elsewhere;
- evidence that modern AI progress is better predicted by algorithmic discontinuities than by resource scaling over the relevant planning horizon;
- evidence that commonly cited urban, biological or network scaling relationships are artifacts of aggregation rather than mechanisms with predictive value;
- markets where economies of scale do not meaningfully affect concentration because switching, entry or modular production offsets the cost advantage;
- examples where rare-event burden does not increase operationally with volume because dependencies, exposure or sampling assumptions were wrong.

Counterexamples should remain in the manuscript rather than being explained away.

## Evidence lanes

### Biological allometry

Start with Max Kleiber's 1932 *Body Size and Metabolism* and later reviews that test the famous three-quarter-power relationship. Distinguish empirical fit from proposed mechanisms. Do not present one exponent as a settled biological constant across taxa, activity states and measurement methods.

### Geometry and dimensional scaling

Use basic geometric derivations for length, area and volume. Be precise about when simple Euclidean scaling is relevant and when branching networks, shape changes or material constraints invalidate naive geometric arguments.

### Cities

Use Geoffrey West, Luís Bettencourt and collaborators as an entry point, then pair with critical literature on definitions of city boundaries, urban indicators and exponent sensitivity. Separate sublinear infrastructure claims from superlinear socioeconomic claims.

### Networks

Treat Metcalfe's Law and related formulas as heuristics, not immutable laws. Distinguish potential connections from realized valuable interactions. Test for saturation, heterogeneous node value, congestion, clustering and multi-homing.

### Experience and learning curves

Use Wright's law, Henderson/Boston Consulting Group material and modern empirical work on cost decline. Keep cumulative production, time, R&D investment and exogenous technical change conceptually separate.

### Semiconductors

Treat Moore's Law as both an empirical cadence and an industry coordination mechanism. Distinguish transistor density, cost per transistor, performance, energy efficiency and manufacturing economics. Do not collapse Dennard scaling into Moore's Law.

### Machine-learning scaling

Anchor the historical section in Kaplan et al. (2020) and Hoffmann et al. (2022), with later work that tests the sensitivity of fitted exponents and compute-optimal prescriptions. Record whether parameter counts include embeddings, how compute is estimated, which loss is fitted and the model/data range used.

### Reliability and rare events

Use reliability engineering and probability carefully. The manuscript may illustrate how low-probability events become routine at high transaction volume, but independence assumptions must be stated or avoided. Common-mode failures can scale very differently from independent failures.

### Organizations

Use organizational theory, information-processing views of firms and empirical management research to test claims about communication load, hierarchy, modularity and coordination costs. Avoid presenting the `n(n-1)/2` count of possible pairs as a model of actual communication volume.

### Infrastructure and energy

For data centers, grids and transport systems, distinguish economies of scale from economies of density and utilization. Re-verify contemporary power, cooling and semiconductor constraints before release.

### Governance

Test the claim that scale creates qualitatively new governance obligations. Use primary law and regulator material where possible rather than anecdotal platform narratives.

## Source discipline

- Always distinguish an empirical regularity from a causal explanation.
- Record the range over which a fitted scaling law was measured.
- Never extend a log-log line beyond the evidence without labeling the extrapolation.
- Treat fitted exponents as estimates with uncertainty, not magical constants.
- Check whether the axes use totals, per-capita measures, averages, medians or rates.
- Be explicit about boundary definitions, especially for cities, firms and networks.
- Separate economies of scale from network effects, learning effects and economies of scope.
- When discussing AI, state the architecture, dataset regime, compute definition and evaluation target when they materially affect the claim.
- Preserve disputes over the universality of biological and urban scaling exponents.
- Do not equate lower training loss with proportional gains in every downstream capability.
- Re-check contemporary AI scaling results, compute costs and infrastructure constraints immediately before a Shelf release.

## What would make the whole book false?

The book's strongest conclusion would weaken substantially if apparent nonlinearities across biology, cities, firms, networks and machine learning turned out to be mostly artifacts of aggregation, measurement or temporary technological conditions — or if modern engineered systems could routinely scale by simple duplication without new bottlenecks, coordination structures or regime changes.

The manuscript should remain open to that possibility. Its claim is not that everything follows a power law. It is that size changes systems in structured ways, and that understanding those changes before the next doubling is one of the core strategic skills of a high-scale civilization.
