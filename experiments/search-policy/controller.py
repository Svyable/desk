#!/usr/bin/env python3
"""A toy, forward-only (no gradient) benchmark for evidence-search policies.

Standard-library only. Synthetic observations are generated before rollout so
policies receive exactly the same possible evidence in paired comparisons.
This is NOT Q Labs Dust and it does not call a language model.
"""
from __future__ import annotations

import argparse
from dataclasses import dataclass
import json
import math
import random
import statistics
from pathlib import Path

CHANNELS = ("logs", "documents", "tests", "tickets")
COSTS = (1, 1, 2, 2)
VERIFY_COST = 2
BUDGET = 4
HYPOTHESES = ("regression", "misconfiguration", "overload", "dependency")
TOPICS = ("auth", "performance", "deploy", "data")
DOMAINS = ("incident", "research")
# p(observation exists), p(observation matches ground truth) by topic/channel.
# These are simulator design assumptions, not measured reliability of tools.
PROFILE = {
    "incident": (
        ((.90, .86), (.75, .57), (.45, .82), (.55, .70)),
        ((.82, .69), (.45, .68), (.85, .89), (.65, .64)),
        ((.70, .70), (.92, .91), (.65, .68), (.35, .75)),
        ((.72, .60), (.66, .70), (.91, .87), (.80, .80)),
    ),
    "research": (
        ((.40, .65), (.90, .88), (.70, .72), (.75, .70)),
        ((.58, .72), (.84, .84), (.45, .80), (.90, .90)),
        ((.75, .78), (.65, .68), (.50, .82), (.94, .88)),
        ((.42, .68), (.91, .87), (.80, .83), (.60, .72)),
    ),
}


@dataclass(frozen=True)
class Case:
    case_id: str
    domain: str
    topic: int
    truth: int
    observations: tuple[int | None, ...]
    confirmations: tuple[bool, ...]


def generate_cases(domain: str, seed: int, split: str, n: int) -> list[Case]:
    """Split-isolated fixture generation, with balanced truth labels."""
    if domain not in DOMAINS or n <= 0:
        raise ValueError("unknown domain or nonpositive case count")
    rng = random.Random(f"{seed}:{domain}:{split}")
    cases = []
    # Balanced truth per split, but independent topic and evidence per case.
    truths = [i % len(HYPOTHESES) for i in range(n)]
    rng.shuffle(truths)
    for i, truth in enumerate(truths):
        topic = rng.randrange(len(TOPICS))
        observations = []
        for hit, correct in PROFILE[domain][topic]:
            if rng.random() >= hit:
                observations.append(None)
            elif rng.random() < correct:
                observations.append(truth)
            else:
                observations.append(rng.choice([h for h in range(4) if h != truth]))
        confirmations = tuple(rng.random() < (.92 if h == truth else .08) for h in range(4))
        cases.append(Case(f"{domain}:{split}:{seed}:{i}", domain, topic, truth,
                          tuple(observations), confirmations))
    return cases


class Belief:
    """Fixed evidence interpreter shared by every policy (no oracle source reliabilities)."""

    def __init__(self) -> None:
        self.scores = [0.0] * 4
        self.observed: list[int] = []
        self.confirmed: set[int] = set()

    def probabilities(self) -> list[float]:
        values = [math.exp(x - max(self.scores)) for x in self.scores]
        total = sum(values)
        return [v / total for v in values]

    def guess(self) -> tuple[int, float]:
        probs = self.probabilities()
        choice = max(range(4), key=lambda i: probs[i])
        return choice, probs[choice]

    def add_document(self, label: int | None) -> None:
        if label is None:
            return
        self.observed.append(label)
        # Common reliability assumption, deliberately not source-aware.
        for h in range(4):
            self.scores[h] += math.log(.74 if h == label else .26 / 3)

    def add_verification(self, candidate: int, answer: bool) -> None:
        if answer:
            self.confirmed.add(candidate)
        for h in range(4):
            likelihood = (.92 if h == candidate else .08)
            self.scores[h] += math.log(likelihood if answer else (1 - likelihood))


@dataclass
class Outcome:
    correct: bool
    cost: int
    calls: int
    supported: bool
    apparent_false_support: bool
    top_label_brier: float
    guess: int
    confidence: float


def policy_options(spent: int, visited: set[int], verified: bool, belief: Belief) -> list[int]:
    actions = [i for i, cost in enumerate(COSTS)
               if i not in visited and cost + spent <= BUDGET]
    if belief.observed and not verified and spent + VERIFY_COST <= BUDGET:
        actions.append(4)  # verify current guess
    return actions


def play(case: Case, policy: "Policy", rng: random.Random) -> Outcome:
    belief = Belief()
    used: set[int] = set()
    spent = calls = 0
    verified = False
    while True:
        allowed = policy_options(spent, used, verified, belief)
        choice = policy.choose(case.topic, belief, allowed, spent, rng)
        if choice is None:
            break
        if choice not in allowed:
            raise ValueError(f"policy selected illegal action {choice!r}")
        if choice == 4:
            candidate, _ = belief.guess()
            belief.add_verification(candidate, case.confirmations[candidate])
            spent += VERIFY_COST
            verified = True
        else:
            used.add(choice)
            belief.add_document(case.observations[choice])
            spent += COSTS[choice]
        calls += 1
    guess, confidence = belief.guess()
    supported = guess in belief.observed or guess in belief.confirmed
    return Outcome(guess == case.truth, spent, calls, supported,
                   supported and guess != case.truth, (confidence - (guess == case.truth)) ** 2,
                   guess, confidence)


class Policy:
    def choose(self, topic: int, belief: Belief, allowed: list[int], spent: int,
               rng: random.Random) -> int | None:
        raise NotImplementedError


class FixedPolicy(Policy):
    """Pre-registered source sequence, verification and stopping heuristic."""

    def choose(self, topic: int, belief: Belief, allowed: list[int], spent: int,
               rng: random.Random) -> int | None:
        _, certainty = belief.guess()
        if belief.observed and certainty >= .89:
            return None
        if 4 in allowed and certainty >= .63:
            return 4
        return next((i for i in (0, 1, 2, 3) if i in allowed), None)


class RandomPolicy(Policy):
    def choose(self, topic: int, belief: Belief, allowed: list[int], spent: int,
               rng: random.Random) -> int | None:
        options = list(allowed)
        if belief.observed:
            options.append(None)
        return rng.choice(options) if options else None


@dataclass(frozen=True)
class WeightedPolicy(Policy):
    """Search preferences per public topic, verifier preference, stop threshold."""
    weights: tuple[float, ...]  # 16 topic/channel weights + 1 verifier score + stop threshold

    def __post_init__(self) -> None:
        if len(self.weights) != 18 or not all(math.isfinite(v) for v in self.weights):
            raise ValueError("expected 18 finite weights")

    def choose(self, topic: int, belief: Belief, allowed: list[int], spent: int,
               rng: random.Random) -> int | None:
        if not allowed:
            return None
        _, certainty = belief.guess()
        stop_threshold = min(.99, max(.35, self.weights[17]))
        if belief.observed and certainty >= stop_threshold:
            return None
        scores = {}
        for a in allowed:
            if a == 4:
                scores[a] = self.weights[16] + .1 * certainty
            else:
                scores[a] = self.weights[topic * 4 + a] / COSTS[a]
        return max(allowed, key=lambda a: (scores[a], -a))


def fit_bandit(cases: list[Case]) -> tuple[WeightedPolicy, int]:
    """Train a simple contextual arm-value baseline using only observed training probes.

    One rotating channel is probed per training task; truth is revealed *after*
    that probe for feedback. No access to the other unqueried observations.
    """
    counts = [[0] * 4 for _ in TOPICS]
    rewards = [[0.0] * 4 for _ in TOPICS]
    for j, case in enumerate(cases):
        source = j % 4
        label = case.observations[source]
        counts[case.topic][source] += 1
        rewards[case.topic][source] += (1.0 if label == case.truth else
                                        -.33 if label is not None else 0.0)
    weights = []
    for topic in range(4):
        for channel in range(4):
            # Prior prevents an untested channel being treated as useless.
            weights.append((rewards[topic][channel] + 1.0) /
                           (counts[topic][channel] + 4.0))
    return WeightedPolicy(tuple(weights + [.30, .91])), len(cases)


def measure(policy: Policy, cases: list[Case], seed: int) -> tuple[dict[str, float], int]:
    outcomes = [play(case, policy, random.Random(f"{seed}:{case.case_id}:policy"))
                for case in cases]
    n = len(outcomes)
    mean = lambda f: sum(f(o) for o in outcomes) / n
    metrics = dict(accuracy=mean(lambda o: o.correct),
                   mean_cost=mean(lambda o: o.cost),
                   mean_calls=mean(lambda o: o.calls),
                   supported_rate=mean(lambda o: o.supported),
                   false_supported_rate=mean(lambda o: o.apparent_false_support),
                   top_label_brier=mean(lambda o: o.top_label_brier),
                   utility=mean(lambda o: o.correct - .03 * o.cost))
    return metrics, sum(o.calls for o in outcomes)


def perturb(base: WeightedPolicy, rng: random.Random, scale: float) -> WeightedPolicy:
    vals = list(base.weights)
    for _ in range(rng.randint(2, 6)):
        idx = rng.randrange(18)
        vals[idx] += rng.gauss(0, scale if idx != 17 else scale / 3)
    vals[17] = min(.99, max(.45, vals[17]))
    return WeightedPolicy(tuple(vals))


def fit_perturb(train: list[Case], dev: list[Case], seed: int,
                initial: WeightedPolicy, rounds: int = 5, population: int = 14
                ) -> tuple[WeightedPolicy, dict[str, int]]:
    """Gradient-free, reward-guided random search; dev used for selection, never test."""
    rng = random.Random(f"fit:{seed}")
    incumbent = initial
    winner = initial
    winner_dev = measure(initial, dev, seed)[0]["utility"]
    action_calls = 0
    dev_calls = measure(initial, dev, seed)[1]
    for gen in range(rounds):
        candidates = [incumbent] + [perturb(incumbent, rng, .5 * (.77 ** gen))
                                    for _ in range(population - 1)]
        ranked = []
        for p in candidates:
            metric, cost = measure(p, train, seed)
            ranked.append((metric["utility"], p))
            action_calls += cost
        ranked.sort(key=lambda item: item[0], reverse=True)
        incumbent = ranked[0][1]
        dev_metric, probes = measure(incumbent, dev, seed)
        dev_calls += probes
        if dev_metric["utility"] > winner_dev:
            winner_dev = dev_metric["utility"]
            winner = incumbent
    return winner, {"train_action_calls": action_calls, "dev_action_calls": dev_calls,
                    "candidate_evaluations": rounds * population}


def benchmark(seed: int = 0, n_train: int = 128, n_dev: int = 64,
              n_test: int = 128, rounds: int = 5, population: int = 14,
              domain: str = "incident", test_domain: str | None = None) -> dict:
    if min(n_train, n_dev, n_test, rounds, population) <= 0:
        raise ValueError("counts must be positive")
    train = generate_cases(domain, seed, "train", n_train)
    dev = generate_cases(domain, seed + 10000, "dev", n_dev)
    test = generate_cases(test_domain or domain, seed + 20000, "test", n_test)
    bandit, bandit_calls = fit_bandit(train)
    evolutionary, tuning = fit_perturb(train, dev, seed, bandit, rounds, population)
    policies = {"fixed": FixedPolicy(), "random": RandomPolicy(),
                "bandit": bandit, "perturb_select": evolutionary}
    heldout = {name: measure(p, test, seed)[0] for name, p in policies.items()}
    return {"seed": seed, "training_domain": domain, "test_domain": test_domain or domain,
            "splits": {"train": len(train), "dev": len(dev), "test": len(test)},
            "budget": BUDGET, "costs": dict(zip(CHANNELS, COSTS)),
            "evaluation": heldout,
            "training_effort": {"bandit_action_calls": bandit_calls, **tuning},
            "note": "Synthetic simulator only; training costs differ; not Dust or a real LLM evaluation"}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--seed", type=int, default=0)
    parser.add_argument("--domain", choices=DOMAINS, default="incident")
    parser.add_argument("--test-domain", choices=DOMAINS, help="Optional domain-shift heldout split")
    parser.add_argument("--seeds", type=int, default=1, help="Number of independent repetitions")
    parser.add_argument("--train", type=int, default=128)
    parser.add_argument("--dev", type=int, default=64)
    parser.add_argument("--test", type=int, default=128)
    parser.add_argument("--rounds", type=int, default=5)
    parser.add_argument("--population", type=int, default=14)
    parser.add_argument("--output", type=Path, help="Optional local JSON report path")
    args = parser.parse_args()
    if args.seeds <= 0:
        parser.error("--seeds must be positive")
    reports = [benchmark(args.seed + offset, args.train, args.dev, args.test,
                         args.rounds, args.population, args.domain, args.test_domain)
               for offset in range(args.seeds)]
    if args.seeds == 1:
        report = reports[0]
    else:
        methods = tuple(reports[0]["evaluation"])
        aggregate = {}
        for method in methods:
            fields = reports[0]["evaluation"][method]
            aggregate[method] = {}
            for field in fields:
                values = [r["evaluation"][method][field] for r in reports]
                aggregate[method][field] = {"mean": statistics.mean(values),
                                             "sd": statistics.stdev(values)}
        report = {"seeds": args.seeds, "start_seed": args.seed,
                  "training_domain": args.domain,
                  "test_domain": args.test_domain or args.domain,
                  "aggregate": aggregate,
                  "paired_accuracy_delta_vs_fixed": {
                      name: statistics.mean([r["evaluation"][name]["accuracy"] -
                                              r["evaluation"]["fixed"]["accuracy"]
                                              for r in reports])
                      for name in methods if name != "fixed"},
                  "runs": reports}
    rendered = json.dumps(report, indent=2, sort_keys=True)
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(rendered + "\n", encoding="utf-8")
    print(rendered)


if __name__ == "__main__":
    main()
