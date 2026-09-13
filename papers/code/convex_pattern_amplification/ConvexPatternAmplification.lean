import Mathlib

/-!
# Convex Pattern Amplification: formal spine

Lean 4 / Mathlib companion to
`papers/convex-pattern-amplification.md` by Sven Hardy Benson.

This file formalizes the deterministic convex-selection step and the scalar
quadratic barycenter identity. It deliberately does not claim to formalize the
full graph-pattern encoding or the combinatorial deletion-counting theorem.
-/

namespace ConvexPatternAmplification

open Finset Set
open scoped BigOperators

universe u v

/--
A convex function cannot take a strict maximum at a point that lies in the
convex hull of a family without taking at least that value somewhere in the
family itself.

This is the abstract selection step used after the deletion barycenter identity.
-/
theorem convex_barycenter_select
    {E : Type u} [AddCommGroup E] [Module ℝ E]
    (children : Set E) (parent : E) (phi : E → ℝ)
    (hconv : ConvexOn ℝ Set.univ phi)
    (hparent : parent ∈ convexHull ℝ children) :
    ∃ child ∈ children, phi parent ≤ phi child := by
  exact hconv.exists_ge_of_mem_convexHull (by simp) hparent

/-- Function-indexed form of `convex_barycenter_select`. -/
theorem convex_range_barycenter_select
    {ι : Type v} {E : Type u} [AddCommGroup E] [Module ℝ E]
    (child : ι → E) (parent : E) (phi : E → ℝ)
    (hconv : ConvexOn ℝ Set.univ phi)
    (hparent : parent ∈ convexHull ℝ (Set.range child)) :
    ∃ i : ι, phi parent ≤ phi (child i) := by
  rcases convex_barycenter_select (Set.range child) parent phi hconv hparent with
    ⟨y, ⟨i, rfl⟩, hi⟩
  exact ⟨i, hi⟩

/-- Pointwise three-term square decomposition underlying the quadratic gain identity. -/
theorem square_decomposition (y x c : ℝ) :
    (y - c) ^ 2 = (y - x) ^ 2 + (x - c) ^ 2 + 2 * (y - x) * (x - c) := by
  ring

/--
If deviations from `x` sum to zero, then the total squared distance from `c`
splits into within-family variance plus the squared displacement of the
barycenter from `c`.
-/
theorem quadratic_sum_identity
    {ι : Type u} [DecidableEq ι]
    (s : Finset ι) (y : ι → ℝ) (x c : ℝ)
    (hcenter : ∑ i ∈ s, (y i - x) = 0) :
    ∑ i ∈ s, (y i - c) ^ 2 =
      (∑ i ∈ s, (y i - x) ^ 2) + (s.card : ℝ) * (x - c) ^ 2 := by
  have hcross : ∑ i ∈ s, 2 * (y i - x) * (x - c) = 0 := by
    calc
      ∑ i ∈ s, 2 * (y i - x) * (x - c)
          = ∑ i ∈ s, (2 * (x - c)) * (y i - x) := by
              apply Finset.sum_congr rfl
              intro i hi
              ring
      _ = (2 * (x - c)) * ∑ i ∈ s, (y i - x) := by
              rw [Finset.mul_sum]
      _ = 0 := by rw [hcenter]; ring
  calc
    ∑ i ∈ s, (y i - c) ^ 2
        = ∑ i ∈ s, ((y i - x) ^ 2 + (x - c) ^ 2 + 2 * (y i - x) * (x - c)) := by
            apply Finset.sum_congr rfl
            intro i hi
            exact square_decomposition (y i) x c
    _ = (∑ i ∈ s, (y i - x) ^ 2)
          + (∑ _i ∈ s, (x - c) ^ 2)
          + (∑ i ∈ s, 2 * (y i - x) * (x - c)) := by
            simp only [Finset.sum_add_distrib]
    _ = (∑ i ∈ s, (y i - x) ^ 2) + (s.card : ℝ) * (x - c) ^ 2 := by
            rw [hcross]
            simp [nsmul_eq_mul]

/--
A more directly usable version: if the sum of the observations is `card * x`,
then the centered-sum hypothesis of `quadratic_sum_identity` follows.
-/
theorem quadratic_sum_identity_of_mean
    {ι : Type u} [DecidableEq ι]
    (s : Finset ι) (y : ι → ℝ) (x c : ℝ)
    (hmean : ∑ i ∈ s, y i = (s.card : ℝ) * x) :
    ∑ i ∈ s, (y i - c) ^ 2 =
      (∑ i ∈ s, (y i - x) ^ 2) + (s.card : ℝ) * (x - c) ^ 2 := by
  apply quadratic_sum_identity s y x c
  calc
    ∑ i ∈ s, (y i - x)
        = (∑ i ∈ s, y i) - ∑ _i ∈ s, x := by
            rw [Finset.sum_sub_distrib]
    _ = (s.card : ℝ) * x - (s.card : ℝ) * x := by
            rw [hmean]
            simp [nsmul_eq_mul]
    _ = 0 := by ring

end ConvexPatternAmplification
