#!/usr/bin/env python3
"""Finite-state validation model for constraint-selective reachability.

This is a toy control-game model, not evidence for the biological conjecture.
Its purpose is to replace hand-entered survival probabilities with survival
probabilities derived from an explicit transition graph, viability condition,
finite recovery horizon, and resource budget.

The model also demonstrates a key first-principles point: a useful constraint
can REDUCE raw reachability while INCREASING robust viable recovery by removing
dangerous transition branches.

States
------
0       recovered/healthy target
1..6    increasing disturbance/damage severity
99      irreversible failure (outside the viable set)

Architectures
-------------
base:
  * repair costs 1 energy unit. At low damage (1-2) it deterministically
    reduces damage by one. At higher damage it has an uncontrolled leak branch:
    the next state can improve by one OR worsen by one (severity 6 can fail).
  * overdrive costs 1.6 energy units and can repair two damage levels OR fail.
    This creates additional raw possibilities but is not robustly safe.

gated:
  * pays a separate activation/construction charge against the recovery budget.
  * regulated repair costs 1 energy unit and deterministically reduces damage
    by one.
  * the overdrive action and leak branches are physically excluded.

Robust recovery means: there exists a control action at each controller node
such that EVERY allowed uncontrolled outcome remains viable and can still reach
state 0 before the deadline and within the remaining budget.

The severity distribution is a truncated exponential over integer severities.
The resulting survival probabilities are the probability mass of disturbance
severities for which robust recovery is possible. A separate continuous
maintenance cost can then be inserted into the already-established
geometric-mean-fitness threshold

    lambda* = c / log(s1 / s0).

The scientific research program would replace every toy transition and cost
below with experimentally measured reaction/control dynamics and work costs.
"""

from __future__ import annotations

import argparse
import math
from dataclasses import dataclass
from functools import lru_cache
from typing import Iterable

FAIL = 99
RECOVERED = 0


@dataclass(frozen=True)
class Action:
    name: str
    cost: float
    outcomes: tuple[int, ...]


@dataclass(frozen=True)
class Architecture:
    name: str
    activation_cost: float
    maintenance_log_growth_cost: float


def actions(architecture: str, state: int) -> tuple[Action, ...]:
    """Return controller actions and all uncontrolled outcomes."""
    if state in (RECOVERED, FAIL):
        return ()
    if not 1 <= state <= 6:
        raise ValueError(f"unsupported state {state}")

    if architecture == "base":
        if state <= 2:
            repair_outcomes = (state - 1,)
        elif state == 6:
            repair_outcomes = (5, FAIL)
        else:
            repair_outcomes = (state - 1, state + 1)

        if state == 1:
            overdrive_outcomes = (RECOVERED,)
        else:
            overdrive_outcomes = (max(RECOVERED, state - 2), FAIL)

        return (
            Action("repair", 1.0, repair_outcomes),
            Action("overdrive", 1.6, overdrive_outcomes),
        )

    if architecture == "gated":
        # The physical gate removes the leak/overdrive branches. Raw variety is
        # lower, but the remaining transition is robustly directed toward the
        # recovered state.
        return (Action("regulated_repair", 1.0, (state - 1,)),)

    raise ValueError(f"unknown architecture {architecture!r}")


def _ticks(value: float) -> int:
    """Quarter-energy integer representation for exact cache keys."""
    return round(value * 4)


def robustly_recoverable(
    architecture: Architecture,
    initial_state: int,
    horizon_steps: int,
    total_budget: float,
) -> bool:
    """Solve the finite-horizon controller-versus-disturbance game.

    The activation cost is paid before recovery begins. At each state the
    controller may choose one action. Robust success requires *all* uncontrolled
    outcomes of that chosen action to remain recoverable.
    """
    if horizon_steps < 0:
        raise ValueError("horizon_steps must be nonnegative")
    if total_budget < architecture.activation_cost:
        return False

    initial_ticks = _ticks(total_budget - architecture.activation_cost)

    @lru_cache(maxsize=None)
    def solve(state: int, steps_left: int, budget_ticks: int) -> bool:
        if state == RECOVERED:
            return True
        if state == FAIL or steps_left == 0:
            return False

        for action in actions(architecture.name, state):
            action_ticks = _ticks(action.cost)
            if action_ticks > budget_ticks:
                continue
            remaining = budget_ticks - action_ticks
            if all(solve(outcome, steps_left - 1, remaining) for outcome in action.outcomes):
                return True
        return False

    return solve(initial_state, horizon_steps, initial_ticks)


def raw_reachable_states(
    architecture: Architecture,
    initial_state: int,
    horizon_steps: int,
    total_budget: float,
) -> set[int]:
    """Enumerate all states reachable under any action/outcome sequence.

    This deliberately ignores viability and robustness. It is included to show
    that the architecture with the larger raw set can have the smaller robust
    viable disturbance set.
    """
    if total_budget < architecture.activation_cost:
        return {initial_state}

    frontier: set[tuple[int, int]] = {(initial_state, _ticks(total_budget - architecture.activation_cost))}
    reached = {initial_state}

    for _ in range(horizon_steps):
        next_frontier: set[tuple[int, int]] = set()
        for state, budget_ticks in frontier:
            if state in (RECOVERED, FAIL):
                continue
            for action in actions(architecture.name, state):
                action_ticks = _ticks(action.cost)
                if action_ticks > budget_ticks:
                    continue
                remaining = budget_ticks - action_ticks
                for outcome in action.outcomes:
                    reached.add(outcome)
                    next_frontier.add((outcome, remaining))
        frontier = next_frontier

    return reached


def severity_probabilities(max_severity: int, scale: float) -> dict[int, float]:
    """Truncated discrete exponential severity distribution."""
    if max_severity < 1:
        raise ValueError("max_severity must be positive")
    if scale <= 0:
        raise ValueError("scale must be positive")

    weights = {k: math.exp(-(k - 1) / scale) for k in range(1, max_severity + 1)}
    normalizer = sum(weights.values())
    return {k: value / normalizer for k, value in weights.items()}


def survivable_disturbance_set(
    architecture: Architecture,
    severities: Iterable[int],
    horizon_steps: int,
    total_budget: float,
) -> set[int]:
    return {
        severity
        for severity in severities
        if robustly_recoverable(architecture, severity, horizon_steps, total_budget)
    }


def survival_probability(survivable: set[int], probabilities: dict[int, float]) -> float:
    return sum(probabilities[severity] for severity in survivable)


def crossover_hazard_rate(cost_delta: float, s0: float, s1: float) -> float:
    if cost_delta < 0:
        raise ValueError("cost_delta must be nonnegative")
    if not (0 < s0 <= 1 and 0 < s1 <= 1):
        raise ValueError("survival probabilities must lie in (0, 1]")
    if s1 <= s0:
        return math.inf
    if cost_delta == 0:
        return 0.0
    return cost_delta / math.log(s1 / s0)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--budget", type=float, default=4.5, help="total per-hazard recovery budget")
    parser.add_argument("--gate-activation-cost", type=float, default=0.5, help="gate construction/activation charge against recovery budget")
    parser.add_argument("--maintenance-cost", type=float, default=0.04, help="continuous log-growth cost of gated architecture")
    parser.add_argument("--horizon-steps", type=int, default=5, help="maximum recovery control steps")
    parser.add_argument("--severity-scale", type=float, default=2.0, help="scale of truncated exponential severity distribution")
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    base = Architecture("base", activation_cost=0.0, maintenance_log_growth_cost=0.0)
    gated = Architecture(
        "gated",
        activation_cost=args.gate_activation_cost,
        maintenance_log_growth_cost=args.maintenance_cost,
    )

    severities = range(1, 7)
    probabilities = severity_probabilities(6, args.severity_scale)

    d0 = survivable_disturbance_set(base, severities, args.horizon_steps, args.budget)
    d1 = survivable_disturbance_set(gated, severities, args.horizon_steps, args.budget)
    s0 = survival_probability(d0, probabilities)
    s1 = survival_probability(d1, probabilities)
    star = crossover_hazard_rate(args.maintenance_cost, s0, s1)

    print("Finite-state constraint-selective reachability toy model")
    print(f"total recovery budget={args.budget:.6g}")
    print(f"gated activation cost={args.gate_activation_cost:.6g}")
    print(f"gated continuous maintenance cost={args.maintenance_cost:.6g}")
    print(f"recovery horizon={args.horizon_steps} steps")
    print()

    print("severity probabilities:")
    for severity, probability in probabilities.items():
        print(f"  {severity}: {probability:.9f}")
    print()

    print(f"base robust survivable severities:  {sorted(d0)}")
    print(f"gated robust survivable severities: {sorted(d1)}")
    print(f"s0={s0:.9f}")
    print(f"s1={s1:.9f}")
    print(f"predicted lambda*={star:.9f} hazards per unit time")
    print()

    for severity in (2, 4):
        raw0 = raw_reachable_states(base, severity, args.horizon_steps, args.budget)
        raw1 = raw_reachable_states(gated, severity, args.horizon_steps, args.budget)
        print(f"severity {severity} raw states, base:  {sorted(raw0)}")
        print(f"severity {severity} raw states, gated: {sorted(raw1)}")

    # First-principles sanity conditions for the default parameterization.
    assert d0 == {1, 2}, f"unexpected base robust set: {d0}"
    assert d1 == {1, 2, 3, 4}, f"unexpected gated robust set: {d1}"
    assert s1 > s0
    assert len(raw_reachable_states(base, 4, args.horizon_steps, args.budget)) > len(
        raw_reachable_states(gated, 4, args.horizon_steps, args.budget)
    )
    assert math.isfinite(star) and star > 0

    print()
    print("PASS: the gated architecture has lower raw reachability but higher robust viable disturbance coverage in this toy model.")
    print("This validates only the stated finite-state assumptions; it is not empirical evidence for biology.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
