import Mathlib

/-!
# Generator–Blocker Principle: deterministic kernel

Lean 4 / Mathlib formalization of the finite witness-system spine used in
Sven Hardy Benson's paper `papers/generator-blocker-principle.md`.

The file deliberately formalizes only the deterministic blocker machinery.
The Bernoulli sampling-and-repair theorem in the manuscript is not claimed to
be machine formalized here.
-/

namespace GeneratorBlocker

universe u v

variable {V : Type u} {Y : Type v} [DecidableEq V] [DecidableEq Y]

/-- A finite family of finite witnesses for each output. -/
abbrev WitnessSystem (V : Type u) (Y : Type v) :=
  Y → Finset (Finset V)

/-- `B` realizes `y` when it contains at least one witness for `y`. -/
def Realizes (W : WitnessSystem V Y) (B : Finset V) (y : Y) : Prop :=
  ∃ e ∈ W y, e ⊆ B

/-- `B` realizes every output in `outputs`. -/
def Generates (W : WitnessSystem V Y) (outputs : Finset Y) (B : Finset V) : Prop :=
  ∀ y ∈ outputs, Realizes W B y

/-- `T` meets every witness for `y`. -/
def Blocker (W : WitnessSystem V Y) (y : Y) (T : Finset V) : Prop :=
  ∀ e ∈ W y, ¬ Disjoint e T

/-- Every witness is nonempty and has at most `k` elements. -/
def RankAtMost (W : WitnessSystem V Y) (k : Nat) : Prop :=
  ∀ y e, e ∈ W y → e.Nonempty ∧ e.card ≤ k

/-- A finite family of finite sets is pairwise disjoint. -/
def PairwiseDisjointFamily (M : Finset (Finset V)) : Prop :=
  ∀ ⦃e₁ e₂ : Finset V⦄,
    e₁ ∈ M → e₂ ∈ M → e₁ ≠ e₂ → Disjoint e₁ e₂

/--
A disjoint witness family is saturated when every witness outside the family
meets the union of the selected witnesses. A maximal pairwise-disjoint family
has this property.
-/
def SaturatedDisjointFor
    (W : WitnessSystem V Y) (y : Y) (M : Finset (Finset V)) : Prop :=
  M ⊆ W y ∧
    PairwiseDisjointFamily M ∧
      ∀ e ∈ W y, e ∉ M → ¬ Disjoint e (M.biUnion id)

/-- Realization is monotone under enlarging the ground subset. -/
theorem realizes_mono
    {W : WitnessSystem V Y} {B C : Finset V} {y : Y}
    (hBC : B ⊆ C) (hB : Realizes W B y) : Realizes W C y := by
  rcases hB with ⟨e, heW, heB⟩
  exact ⟨e, heW, heB.trans hBC⟩

/-- Generation is monotone under enlarging the ground subset. -/
theorem generates_mono
    {W : WitnessSystem V Y} {outputs : Finset Y} {B C : Finset V}
    (hBC : B ⊆ C) (hB : Generates W outputs B) : Generates W outputs C := by
  intro y hy
  exact realizes_mono hBC (hB y hy)

/-- The union of a saturated disjoint witness family blocks every witness. -/
theorem saturated_union_isBlocker
    {W : WitnessSystem V Y} {k : Nat} {y : Y}
    {M : Finset (Finset V)}
    (hRank : RankAtMost W k)
    (hSat : SaturatedDisjointFor W y M) :
    Blocker W y (M.biUnion id) := by
  intro e heW
  by_cases heM : e ∈ M
  · intro hDisj
    rcases (hRank y e heW).1 with ⟨v, hv⟩
    have hvUnion : v ∈ M.biUnion id := by
      exact Finset.mem_biUnion.mpr ⟨e, heM, by simpa using hv⟩
    exact Finset.disjoint_left.mp hDisj hv hvUnion
  · exact hSat.2.2 e heW heM

/-- The union of selected rank-`k` witnesses has size at most `k` times their number. -/
theorem witnessUnion_card_le
    {W : WitnessSystem V Y} {k : Nat} {y : Y}
    {M : Finset (Finset V)}
    (hRank : RankAtMost W k)
    (hSub : M ⊆ W y) :
    (M.biUnion id).card ≤ M.card * k := by
  exact Finset.card_biUnion_le_card_mul M id k (by
    intro e heM
    exact (hRank y e (hSub heM)).2)

/--
A saturated disjoint family with at most `q` witnesses yields a blocker of
size at most `k*q`.
-/
theorem exists_small_blocker_of_saturated
    {W : WitnessSystem V Y} {k q : Nat} {y : Y}
    {M : Finset (Finset V)}
    (hRank : RankAtMost W k)
    (hSat : SaturatedDisjointFor W y M)
    (hCard : M.card ≤ q) :
    ∃ T : Finset V, Blocker W y T ∧ T.card ≤ k * q := by
  let T : Finset V := M.biUnion id
  refine ⟨T, ?_, ?_⟩
  · simpa [T] using saturated_union_isBlocker (W := W) (k := k) hRank hSat
  · have hUnion : T.card ≤ M.card * k := by
      simpa [T] using witnessUnion_card_le (W := W) (k := k) hRank hSat.1
    calc
      T.card ≤ M.card * k := hUnion
      _ ≤ q * k := Nat.mul_le_mul_right k hCard
      _ = k * q := Nat.mul_comm q k

/-- A blocker stays a blocker when enlarged. -/
theorem blocker_mono
    {W : WitnessSystem V Y} {y : Y} {S T : Finset V}
    (hST : S ⊆ T) (hS : Blocker W y S) : Blocker W y T := by
  intro e heW hDisjT
  apply hS e heW
  exact Finset.disjoint_left.mpr fun v hvE hvS =>
    Finset.disjoint_left.mp hDisjT hvE (hST hvS)

/--
If `T` blocks `y`, then every set realizing `y` contains a witness that meets
`T`. This records the operational meaning of a representation blocker.
-/
theorem realizes_meets_blocker
    {W : WitnessSystem V Y} {B T : Finset V} {y : Y}
    (hB : Realizes W B y) (hT : Blocker W y T) :
    ∃ v, v ∈ B ∧ v ∈ T := by
  rcases hB with ⟨e, heW, heB⟩
  have hNotDisj : ¬ Disjoint e T := hT e heW
  rw [Finset.not_disjoint_iff] at hNotDisj
  rcases hNotDisj with ⟨v, hvE, hvT⟩
  exact ⟨v, heB hvE, hvT⟩

end GeneratorBlocker
