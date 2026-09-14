import Mathlib

/-!
# The Finite-Evidence Boundary

Lean 4 / Mathlib formalization of the combinatorial core of
Sven Hardy Benson's paper `papers/finite-evidence-boundary.md`.

The formalized statements use no `axiom`, `sorry`, or `admit` declarations.
They establish:

* finite-change equivalence via a finite exceptional set;
* preservation of a finite-change-invariant predicate under finite patching;
* the two-sided finite extension theorem;
* impossibility of an exact locally finitary Boolean classifier; and
* simultaneous indistinguishability for every finite ensemble of locally
  finitary Boolean observers.

The topological and measure-theoretic corollaries in the paper are derived from
this kernel but are not encoded here.
-/

namespace FiniteEvidenceBoundary

universe u v

variable {ι : Type u} {α : Type v} [DecidableEq ι]

/-- `x` and `y` differ on at most finitely many coordinates. -/
def FiniteEq (x y : ι → α) : Prop :=
  ∃ s : Finset ι, ∀ i, i ∉ s → x i = y i

/-- A predicate is unchanged by finite modification of its input. -/
def FiniteInvariant (P : (ι → α) → Prop) : Prop :=
  ∀ ⦃x y : ι → α⦄, FiniteEq x y → (P x ↔ P y)

/-- The predicate has at least one positive and one negative instance. -/
def PredicateNontrivial (P : (ι → α) → Prop) : Prop :=
  (∃ x, P x) ∧ (∃ y, ¬ P y)

/-- Replace the coordinates in `s` by `data`, leaving `base` elsewhere. -/
def patch (s : Finset ι) (data base : ι → α) : ι → α :=
  fun i => if i ∈ s then data i else base i

theorem finiteEq_refl (x : ι → α) : FiniteEq x x := by
  refine ⟨∅, ?_⟩
  intro i hi
  rfl

theorem finiteEq_symm {x y : ι → α} (h : FiniteEq x y) : FiniteEq y x := by
  rcases h with ⟨s, hs⟩
  refine ⟨s, ?_⟩
  intro i hi
  exact (hs i hi).symm

theorem finiteEq_trans {x y z : ι → α}
    (hxy : FiniteEq x y) (hyz : FiniteEq y z) : FiniteEq x z := by
  rcases hxy with ⟨s, hs⟩
  rcases hyz with ⟨t, ht⟩
  refine ⟨s ∪ t, ?_⟩
  intro i hi
  have his : i ∉ s := by
    intro his
    exact hi (Finset.mem_union_left t his)
  have hit : i ∉ t := by
    intro hit
    exact hi (Finset.mem_union_right s hit)
  exact (hs i his).trans (ht i hit)

theorem patch_agrees_on (s : Finset ι) (data base : ι → α) :
    ∀ i ∈ s, patch s data base i = data i := by
  intro i hi
  simp [patch, hi]

theorem patch_finiteEq (s : Finset ι) (data base : ι → α) :
    FiniteEq (patch s data base) base := by
  refine ⟨s, ?_⟩
  intro i hi
  simp [patch, hi]

/--
The combinatorial kernel: every finite observation is compatible with both
truth values of a nontrivial finite-change-invariant predicate.
-/
theorem two_sided_finite_extension
    (P : (ι → α) → Prop)
    (hinv : FiniteInvariant P)
    (hnt : PredicateNontrivial P)
    (s : Finset ι)
    (data : ι → α) :
    (∃ x, (∀ i ∈ s, x i = data i) ∧ P x) ∧
      (∃ y, (∀ i ∈ s, y i = data i) ∧ ¬ P y) := by
  rcases hnt with ⟨⟨x₀, hx₀⟩, ⟨y₀, hy₀⟩⟩
  let x := patch s data x₀
  let y := patch s data y₀
  have hxEq : FiniteEq x x₀ := by
    simpa [x] using patch_finiteEq s data x₀
  have hyEq : FiniteEq y y₀ := by
    simpa [y] using patch_finiteEq s data y₀
  have hxP : P x := (hinv hxEq).2 hx₀
  have hyNotP : ¬ P y := by
    intro hyP
    exact hy₀ ((hinv hyEq).1 hyP)
  constructor
  · refine ⟨x, ?_, hxP⟩
    intro i hi
    simp [x, patch, hi]
  · refine ⟨y, ?_, hyNotP⟩
    intro i hi
    simp [y, patch, hi]

/--
An observer is locally finitary if, at every input, some finite set of
coordinates already fixes its output throughout the corresponding cylinder.
This permits adaptive finite inspection: the witnessing finite set may depend
on the input.
-/
def LocallyFinitary (observer : (ι → α) → Bool) : Prop :=
  ∀ x, ∃ s : Finset ι, ∀ y,
    (∀ i ∈ s, y i = x i) → observer y = observer x

/--
No locally finitary Boolean observer can exactly classify a nontrivial
finite-change-invariant predicate on every input.
-/
theorem no_exact_locally_finitary_classifier
    (P : (ι → α) → Prop)
    (hinv : FiniteInvariant P)
    (hnt : PredicateNontrivial P) :
    ¬ ∃ observer : (ι → α) → Bool,
      LocallyFinitary observer ∧
        (∀ x, observer x = true ↔ P x) := by
  rintro ⟨observer, hlocal, hexact⟩
  rcases hnt.1 with ⟨x, hxP⟩
  rcases hlocal x with ⟨s, hs⟩
  have htwo := two_sided_finite_extension P hinv hnt s x
  rcases htwo.2 with ⟨y, hyAgree, hyNotP⟩
  have hsame : observer y = observer x := hs y hyAgree
  have hxTrue : observer x = true := (hexact x).2 hxP
  have hyTrue : observer y = true := hsame.trans hxTrue
  exact hyNotP ((hexact y).1 hyTrue)

/--
Every finite ensemble of locally finitary observers has a positive/negative
pair on which all observers produce exactly the same output.
-/
theorem finite_ensemble_indistinguishable
    (P : (ι → α) → Prop)
    (hinv : FiniteInvariant P)
    (hnt : PredicateNontrivial P)
    {n : Nat}
    (observer : Fin n → ((ι → α) → Bool))
    (hlocal : ∀ j, LocallyFinitary (observer j)) :
    ∃ x y, P x ∧ ¬ P y ∧ ∀ j, observer j x = observer j y := by
  classical
  rcases hnt.1 with ⟨x, hxP⟩
  let support : Fin n → Finset ι := fun j => Classical.choose (hlocal j x)
  have hsupport : ∀ j, ∀ y,
      (∀ i ∈ support j, y i = x i) → observer j y = observer j x := by
    intro j
    exact Classical.choose_spec (hlocal j x)
  let s : Finset ι := Finset.univ.biUnion support
  have htwo := two_sided_finite_extension P hinv hnt s x
  rcases htwo.2 with ⟨y, hyAgree, hyNotP⟩
  refine ⟨x, y, hxP, hyNotP, ?_⟩
  intro j
  have hsub : ∀ i ∈ support j, y i = x i := by
    intro i hi
    apply hyAgree i
    show i ∈ Finset.univ.biUnion support
    exact Finset.mem_biUnion.mpr ⟨j, Finset.mem_univ j, hi⟩
  exact (hsupport j y hsub).symm

end FiniteEvidenceBoundary
