# Finite-Evidence Boundary — Lean formalization

This directory is a self-contained Lean 4 project for the formal kernel of Sven Hardy Benson's paper [`papers/finite-evidence-boundary.md`](../../finite-evidence-boundary.md).

## Pinned environment

- Lean: `v4.33.0`
- Mathlib: `v4.33.0` (tag resolves to commit `db584cd6d46c92f209a44c0f1c829460d327499d`)

The pins are deliberate: Lean and Mathlib move together, and a proof should be checked against a reproducible pair rather than whatever versions happen to be current later.

## Verify

From this directory:

```bash
lake update
lake exe cache get
lake build
```

The theorem source is `FiniteEvidenceBoundary.lean`.

The file contains no `axiom`, `sorry`, or `admit` declarations. At the time this project was written, the authoring environment did not have a Lean toolchain available, so the source should be described as **formalized, compiler check pending** until the commands above complete successfully in an independent Lean environment.

The current Lean file formalizes the two-sided finite-extension theorem, deterministic exact-classification impossibility, and simultaneous finite-ensemble indistinguishability. The paper's measure-theoretic almost-sure randomized theorem is proved conventionally in the manuscript but is not yet encoded in Lean.
