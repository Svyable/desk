# Generator–Blocker Principle — Lean formalization

This directory contains the Lean 4 / Mathlib companion to Sven Hardy Benson's paper [`papers/generator-blocker-principle.md`](../../generator-blocker-principle.md).

## Pinned environment

- Lean: `v4.33.0`
- Mathlib: `v4.33.0`

## Formalized scope

`GeneratorBlocker.lean` encodes the finite witness-system language and the deterministic combinatorial spine used in the paper:

- realization and blocker predicates;
- bounded witness rank;
- maximal disjoint witness families;
- the fact that the union of a maximal disjoint family blocks every witness;
- the rank bound on the size of that blocker; and
- the resulting quantitative blocker certificate from a small maximal matching.

The paper's Bernoulli sampling-and-repair theorem and logarithmic inverse bound are proved conventionally in the manuscript but are **not yet encoded** in this Lean file.

The proof source contains no `sorry`, `admit`, or user-declared `axiom`.

## Verify

From this directory:

```bash
lake update
lake exe cache get
lake build
```

The authoring environment used for this draft does not contain Lean/Lake, so the accurate status is **formalized, compiler check pending** until those commands succeed in an independent environment.
