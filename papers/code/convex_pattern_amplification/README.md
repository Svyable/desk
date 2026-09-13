# Convex Pattern Amplification — reproducibility bundle

Companion material for Sven Hardy Benson's paper [`papers/convex-pattern-amplification.md`](../../convex-pattern-amplification.md).

## Contents

- `ConvexPatternAmplification.lean` — deterministic convex-selection spine and scalar quadratic barycenter identity.
- `graph_experiment.py` — pure-Python exhaustive and example checks.
- `example_chain.csv` — deterministic 14-to-5 vertex KL-amplifying chain used in the paper.
- `lean-toolchain` / `lakefile.toml` — pinned Lean 4.33.0 / Mathlib 4.33.0 environment.
- `../../figures/convex-pattern-barycenter.svg` — conceptual deletion-barycenter diagram.
- `../../figures/convex-pattern-example-chain.svg` — deterministic example trajectory.
- `../../latex/convex-pattern-amplification.tex` — standalone LaTeX source.

## Python verification

No third-party Python packages are required.

```bash
cd papers/code/convex_pattern_amplification
python3 graph_experiment.py --max-n 6 --output-dir .
```

The exhaustive mode enumerates every labeled graph on 3, 4, 5, and 6 vertices. In particular it checks all `2^15 = 32768` labeled six-vertex graphs. For each graph it verifies the one-vertex deletion barycenter identity for edge/triangle density and confirms that the greedy quadratic-energy deletion chain does not decrease the chosen convex potential.

The same command regenerates `example_chain.csv` and `example_chain.svg` for the deterministic 14-vertex KL-divergence example.

## Lean verification

```bash
cd papers/code/convex_pattern_amplification
lake update
lake exe cache get
lake build
```

The Lean proof file contains no `sorry`, `admit`, or user-declared `axiom`.

The authoring environment used for this draft does not provide a Lean/Lake executable, so the current status is **formalized, compiler check pending**. The full graph-pattern encoding and the combinatorial deletion-counting identity are proved conventionally in the paper but are not yet translated into Lean; the README and manuscript intentionally keep that boundary explicit.

## LaTeX

From the repository root, a typical build is:

```bash
pdflatex papers/latex/convex-pattern-amplification.tex
pdflatex papers/latex/convex-pattern-amplification.tex
```

The LaTeX file uses standard AMS packages, `booktabs`, `hyperref`, and `tikz`.
