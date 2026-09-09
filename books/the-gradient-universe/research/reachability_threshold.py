#!/usr/bin/env python3
"""Toy validation model for Appendix A of The Gradient Universe.

This script does NOT validate the biological conjecture. It validates the
algebra and limiting behavior of a minimal fluctuating-environment model.

Model:
- Architecture 0 has benign log-growth rate r.
- Architecture 1 pays continuous log-growth cost c.
- Hazards arrive as a Poisson process with rate lambda.
- Each hazard multiplies lineage abundance by s0 or s1 respectively.
- s0 and s1 may be derived from a simple disturbance-severity model in which
  a disturbance is survivable when severity a <= h_i.

For exponentially distributed severity with mean `severity_scale`,
    s_i = 1 - exp(-h_i / severity_scale).

The analytic crossover is
    lambda_star = c / log(s1 / s0)
when 0 < s0 < s1 <= 1.

The scientific research program would replace the toy h_i thresholds with a
mechanistic, thermodynamically budgeted viability/reachability calculation.
"""

from __future__ import annotations

import argparse
import csv
import math
import random
import sys
from dataclasses import dataclass
from typing import Iterable


@dataclass(frozen=True)
class Architecture:
    name: str
    benign_log_growth: float
    continuous_cost: float
    recovery_threshold: float


def survival_probability_exponential(threshold: float, scale: float) -> float:
    """P(severity <= threshold) for an exponential severity distribution."""
    if threshold < 0:
        raise ValueError("threshold must be nonnegative")
    if scale <= 0:
        raise ValueError("scale must be positive")
    return 1.0 - math.exp(-threshold / scale)


def analytic_log_growth(r: float, cost: float, hazard_rate: float, survival: float) -> float:
    if not 0.0 < survival <= 1.0:
        raise ValueError("survival must lie in (0, 1]")
    if hazard_rate < 0:
        raise ValueError("hazard_rate must be nonnegative")
    return r - cost + hazard_rate * math.log(survival)


def crossover_hazard_rate(cost_delta: float, s0: float, s1: float) -> float:
    """Return lambda* for equal pre-cost benign growth rates.

    A finite positive crossover exists only when the added architecture costs
    more (cost_delta > 0) and improves per-hazard survival (s1 > s0).
    """
    if cost_delta < 0:
        raise ValueError("cost_delta must be nonnegative")
    if not (0.0 < s0 <= 1.0 and 0.0 < s1 <= 1.0):
        raise ValueError("survival probabilities must lie in (0, 1]")
    if s1 <= s0:
        return math.inf
    if cost_delta == 0:
        return 0.0
    return cost_delta / math.log(s1 / s0)


def poisson_knuth(mean: float, rng: random.Random) -> int:
    """Sample Poisson(mean) using Knuth's algorithm.

    This is intentionally standard-library-only for local reproducibility.
    It is adequate for the modest means used in this toy model.
    """
    if mean < 0:
        raise ValueError("mean must be nonnegative")
    if mean == 0:
        return 0
    if mean > 100:
        raise ValueError("toy sampler is intended for Poisson means <= 100")

    limit = math.exp(-mean)
    k = 0
    product = 1.0
    while product > limit:
        k += 1
        product *= rng.random()
    return k - 1


def simulate_delta_log_growth(
    hazard_rate: float,
    horizon: float,
    cost_delta: float,
    s0: float,
    s1: float,
    replicates: int,
    seed: int,
) -> tuple[float, float, float]:
    """Monte Carlo check of the architecture-1 minus architecture-0 log-growth rate.

    Returns (mean_delta_g, fraction_replicates_arch1_wins, mean_hazard_count).
    """
    if horizon <= 0:
        raise ValueError("horizon must be positive")
    if replicates <= 0:
        raise ValueError("replicates must be positive")

    rng = random.Random(seed)
    log_ratio = math.log(s1 / s0)
    deltas: list[float] = []
    hazard_total = 0

    for _ in range(replicates):
        n = poisson_knuth(hazard_rate * horizon, rng)
        hazard_total += n
        delta = -cost_delta + (n / horizon) * log_ratio
        deltas.append(delta)

    mean_delta = sum(deltas) / replicates
    win_fraction = sum(delta > 0.0 for delta in deltas) / replicates
    mean_hazards = hazard_total / replicates
    return mean_delta, win_fraction, mean_hazards


def default_sweep(lambda_star: float) -> list[float]:
    candidates = [
        0.20 * lambda_star,
        0.60 * lambda_star,
        0.90 * lambda_star,
        lambda_star,
        1.20 * lambda_star,
        1.80 * lambda_star,
    ]
    return [value for value in candidates if value * 500.0 <= 100.0]


def run_sanity_checks(cost_delta: float, s0: float, s1: float) -> None:
    """Adversarial limiting cases from the proof audit."""
    if s1 > s0 and cost_delta > 0:
        star = crossover_hazard_rate(cost_delta, s0, s1)
        eps = max(star * 1e-6, 1e-9)
        below = -cost_delta + (star - eps) * math.log(s1 / s0)
        above = -cost_delta + (star + eps) * math.log(s1 / s0)
        assert below < 0 < above

    assert math.isinf(crossover_hazard_rate(max(cost_delta, 1e-9), s0, s0))

    if s1 > s0:
        assert crossover_hazard_rate(0.0, s0, s1) == 0.0

    # With no hazards, a positive continuous cost is disadvantageous.
    if cost_delta > 0:
        assert -cost_delta < 0


def write_csv(rows: Iterable[dict[str, float]], path: str) -> None:
    fieldnames = [
        "hazard_rate",
        "theory_delta_log_growth",
        "simulation_mean_delta_log_growth",
        "fraction_replicates_arch1_wins",
        "mean_hazard_count",
    ]
    with open(path, "w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--r", type=float, default=1.0, help="benign log-growth rate")
    parser.add_argument("--cost", type=float, default=0.05, help="continuous log-growth cost of architecture 1")
    parser.add_argument("--h0", type=float, default=0.3, help="recovery severity threshold for architecture 0")
    parser.add_argument("--h1", type=float, default=1.2, help="recovery severity threshold for architecture 1")
    parser.add_argument("--severity-scale", type=float, default=1.0, help="mean severity of exponential disturbances")
    parser.add_argument("--horizon", type=float, default=500.0, help="simulation time horizon")
    parser.add_argument("--replicates", type=int, default=5000, help="Monte Carlo replicates per hazard rate")
    parser.add_argument("--seed", type=int, default=42, help="random seed")
    parser.add_argument("--csv", type=str, default="", help="optional CSV output path")
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    if args.cost < 0:
        raise ValueError("cost must be nonnegative")
    if args.h1 <= args.h0:
        raise ValueError("default comparison expects h1 > h0")

    s0 = survival_probability_exponential(args.h0, args.severity_scale)
    s1 = survival_probability_exponential(args.h1, args.severity_scale)
    star = crossover_hazard_rate(args.cost, s0, s1)

    run_sanity_checks(args.cost, s0, s1)

    print("Toy model: constraint-selective reachability threshold")
    print(f"h0={args.h0:.6g}, h1={args.h1:.6g}, severity_scale={args.severity_scale:.6g}")
    print(f"s0={s0:.9f}, s1={s1:.9f}")
    print(f"continuous cost c={args.cost:.9f} per unit time")
    print(f"predicted lambda*={star:.9f} hazards per unit time")
    print()

    rows: list[dict[str, float]] = []
    for index, hazard_rate in enumerate(default_sweep(star)):
        theory_delta = -args.cost + hazard_rate * math.log(s1 / s0)
        sim_delta, win_fraction, mean_hazards = simulate_delta_log_growth(
            hazard_rate=hazard_rate,
            horizon=args.horizon,
            cost_delta=args.cost,
            s0=s0,
            s1=s1,
            replicates=args.replicates,
            seed=args.seed + index,
        )
        row = {
            "hazard_rate": hazard_rate,
            "theory_delta_log_growth": theory_delta,
            "simulation_mean_delta_log_growth": sim_delta,
            "fraction_replicates_arch1_wins": win_fraction,
            "mean_hazard_count": mean_hazards,
        }
        rows.append(row)
        print(
            f"lambda={hazard_rate:.9f}  "
            f"theory Δg={theory_delta:+.9f}  "
            f"sim Δg={sim_delta:+.9f}  "
            f"P(arch1 wins finite run)={win_fraction:.4f}"
        )

    tolerance = 0.003
    max_error = max(abs(row["theory_delta_log_growth"] - row["simulation_mean_delta_log_growth"]) for row in rows)
    print()
    print(f"maximum |simulation - theory| = {max_error:.9f}")
    if max_error > tolerance:
        print(f"FAIL: Monte Carlo error exceeds tolerance {tolerance}", file=sys.stderr)
        return 1

    if args.csv:
        write_csv(rows, args.csv)
        print(f"wrote {args.csv}")

    print("PASS: toy simulation agrees with the analytic threshold within tolerance.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
