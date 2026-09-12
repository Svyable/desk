#!/usr/bin/env python3
"""Exact finite-window search for anchored representation matchings.

This is companion code for:
  papers/anchored-representation-matchings.md

It uses only the Python standard library.  The intended regime is finite,
adversarial experimentation: compute exact matching and blocker numbers, search
small anchor sets, and enumerate small finite basis models looking for unusually
small anchored matching width.

Examples
--------
Score a supplied finite set:

    python3 papers/code/anchored_matching_search.py score \
        --set 0,1,2,4,7,9,12 --order 3 --window 8:18 --anchor-budget 1

Enumerate finite order-2 models in [0,12] covering 8..18, then rank them by
small order-3 anchored width on 8..18:

    python3 papers/code/anchored_matching_search.py enumerate \
        --N 12 --size 7 --basis-order 2 --basis-window 8:18 \
        --order 3 --window 8:18 --anchor-budget 1 --top 10

The program is exponential by design.  It is a falsification tool for small
models, not a claim that finite computation resolves the infinitary conjecture.
"""

from __future__ import annotations

import argparse
import json
from functools import lru_cache
from itertools import combinations
from typing import Iterable, Sequence


def parse_set(text: str) -> tuple[int, ...]:
    values = sorted({int(x.strip()) for x in text.split(",") if x.strip()})
    if any(x < 0 for x in values):
        raise argparse.ArgumentTypeError("set elements must be nonnegative")
    return tuple(values)


def parse_window(text: str) -> tuple[int, int]:
    try:
        left, right = (int(x) for x in text.split(":", 1))
    except Exception as exc:  # pragma: no cover - CLI guard
        raise argparse.ArgumentTypeError("window must have the form L:U") from exc
    if left < 0 or right < left:
        raise argparse.ArgumentTypeError("require 0 <= L <= U")
    return left, right


def representations(A: Sequence[int], r: int, n: int) -> tuple[tuple[int, ...], ...]:
    """All nondecreasing r-term representations of n from finite A."""
    A = tuple(sorted(set(A)))
    position = {a: i for i, a in enumerate(A)}
    out: list[tuple[int, ...]] = []

    def rec(start: int, k: int, remainder: int, current: list[int]) -> None:
        if k == 0:
            if remainder == 0:
                out.append(tuple(current))
            return
        if start >= len(A):
            return
        if k * A[start] > remainder or k * A[-1] < remainder:
            return
        if k == 1:
            idx = position.get(remainder)
            if idx is not None and idx >= start:
                out.append(tuple(current + [remainder]))
            return
        for idx in range(start, len(A)):
            a = A[idx]
            if k * a > remainder:
                break
            rec(idx, k - 1, remainder - a, current + [a])

    rec(0, r, n, [])
    return tuple(out)


def free_support_edges(
    A: Sequence[int], r: int, n: int, anchors: Iterable[int]
) -> tuple[tuple[frozenset[int], ...], bool]:
    """Distinct nonempty free supports; bool says an anchor-only rep exists."""
    T = set(anchors)
    edges: set[frozenset[int]] = set()
    anchor_only = False
    for rep in representations(A, r, n):
        edge = frozenset(a for a in rep if a not in T)
        if edge:
            edges.add(edge)
        else:
            anchor_only = True
    return tuple(sorted(edges, key=lambda e: (len(e), tuple(sorted(e))))), anchor_only


def encode_edges(edges: Sequence[frozenset[int]]) -> tuple[tuple[int, ...], tuple[int, ...]]:
    vertices = tuple(sorted(set().union(*edges))) if edges else tuple()
    index = {v: i for i, v in enumerate(vertices)}
    masks = tuple(
        sorted(
            {
                sum(1 << index[v] for v in edge)
                for edge in edges
            }
        )
    )
    return vertices, masks


def exact_matching(masks: Sequence[int]) -> tuple[int, tuple[int, ...]]:
    """Maximum pairwise-disjoint edge family, returned as bitmasks."""
    initial = tuple(sorted(set(masks)))

    @lru_cache(maxsize=None)
    def solve(state: tuple[int, ...]) -> tuple[int, tuple[int, ...]]:
        if not state:
            return 0, tuple()

        # Branch on a highly conflicting edge.  This is exact; the heuristic
        # only changes search order.
        edge = max(state, key=lambda e: sum(bool(e & f) for f in state))
        rest = tuple(f for f in state if f != edge)

        skip_count, skip_family = solve(rest)
        compatible = tuple(f for f in rest if not (f & edge))
        take_count, take_family = solve(compatible)
        take_count += 1
        take_family = (edge,) + take_family

        if take_count >= skip_count:
            return take_count, take_family
        return skip_count, skip_family

    return solve(initial)


def exact_blocker(masks: Sequence[int], vertex_count: int) -> tuple[int, int]:
    """Minimum hitting set; returns (size, vertex-bitmask)."""
    initial = tuple(sorted(set(masks)))

    @lru_cache(maxsize=None)
    def solve(state: tuple[int, ...]) -> tuple[int, int]:
        if not state:
            return 0, 0

        edge = min(state, key=int.bit_count)
        choices = [i for i in range(vertex_count) if edge & (1 << i)]
        choices.sort(
            key=lambda i: -sum(bool(f & (1 << i)) for f in state)
        )

        best_size = 10**9
        best_mask = 0
        for i in choices:
            bit = 1 << i
            remainder = tuple(f for f in state if not (f & bit))
            size, mask = solve(remainder)
            size += 1
            if size < best_size:
                best_size = size
                best_mask = mask | bit
        return best_size, best_mask

    return solve(initial)


def decode_mask(mask: int, vertices: Sequence[int]) -> tuple[int, ...]:
    return tuple(v for i, v in enumerate(vertices) if mask & (1 << i))


def target_stats(A: Sequence[int], r: int, n: int, anchors: Sequence[int]) -> dict:
    edges, anchor_only = free_support_edges(A, r, n, anchors)
    vertices, masks = encode_edges(edges)

    # If n already has an anchor-only representation, no deletion outside T can
    # destroy all representations.  We expose this explicitly rather than
    # assigning an artificial finite blocker number.
    matching_size, matching_masks = exact_matching(masks)
    blocker_size, blocker_mask = exact_blocker(masks, len(vertices)) if masks else (0, 0)

    return {
        "n": n,
        "representation_count": len(representations(A, r, n)),
        "free_edge_count": len(edges),
        "anchor_only_representation": anchor_only,
        "matching_number": matching_size,
        "matching": [decode_mask(mask, vertices) for mask in matching_masks],
        "blocker_number": None if anchor_only else blocker_size,
        "blocker": None if anchor_only else decode_mask(blocker_mask, vertices),
    }


def anchor_sets(A: Sequence[int], budget: int) -> Iterable[tuple[int, ...]]:
    for size in range(budget + 1):
        yield from combinations(A, size)


def score_model(
    A: Sequence[int], r: int, window: tuple[int, int], anchor_budget: int
) -> dict:
    L, U = window
    best = None
    for anchors in anchor_sets(A, anchor_budget):
        stats = [target_stats(A, r, n, anchors) for n in range(L, U + 1)]
        # Anchor-only targets are immune to free deletion and therefore should
        # not be selected as weak targets.  Treat them as +infinity here.
        finite_scores = [
            (10**9 if s["anchor_only_representation"] else s["matching_number"])
            for s in stats
        ]
        gamma = min(finite_scores) if finite_scores else 0
        weak = [
            s for s, value in zip(stats, finite_scores)
            if value == gamma
        ]
        candidate = {
            "anchors": anchors,
            "gamma": gamma,
            "weak_targets": weak,
            "all_targets": stats,
        }
        if best is None or candidate["gamma"] > best["gamma"]:
            best = candidate
    assert best is not None
    return {
        "A": tuple(A),
        "order": r,
        "window": window,
        "anchor_budget": anchor_budget,
        **best,
    }


def covers_window(A: Sequence[int], h: int, window: tuple[int, int]) -> bool:
    L, U = window
    return all(representations(A, h, n) for n in range(L, U + 1))


def enumerate_models(args: argparse.Namespace) -> list[dict]:
    universe = tuple(range(args.N + 1))
    results: list[dict] = []
    checked = 0
    covered = 0

    for A in combinations(universe, args.size):
        checked += 1
        if not covers_window(A, args.basis_order, args.basis_window):
            continue
        covered += 1
        score = score_model(A, args.order, args.window, args.anchor_budget)
        results.append(score)
        # Small gamma is hostile to the conjectured divergence, so rank upward.
        results.sort(key=lambda item: (item["gamma"], item["A"]))
        if len(results) > args.top:
            results.pop()

    return [
        {
            "models_checked": checked,
            "models_covering_basis_window": covered,
            "parameters": {
                "N": args.N,
                "size": args.size,
                "basis_order": args.basis_order,
                "basis_window": args.basis_window,
                "tested_order": args.order,
                "tested_window": args.window,
                "anchor_budget": args.anchor_budget,
            },
        },
        *results,
    ]


def json_default(value):
    if isinstance(value, tuple):
        return list(value)
    raise TypeError(type(value).__name__)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)

    score = sub.add_parser("score", help="score one finite model exactly")
    score.add_argument("--set", dest="A", required=True, type=parse_set)
    score.add_argument("--order", type=int, required=True)
    score.add_argument("--window", type=parse_window, required=True)
    score.add_argument("--anchor-budget", type=int, default=0)

    enum = sub.add_parser("enumerate", help="enumerate small finite basis models")
    enum.add_argument("--N", type=int, required=True, help="universe is [0,N]")
    enum.add_argument("--size", type=int, required=True)
    enum.add_argument("--basis-order", type=int, required=True)
    enum.add_argument("--basis-window", type=parse_window, required=True)
    enum.add_argument("--order", type=int, required=True, help="order to pressure-test")
    enum.add_argument("--window", type=parse_window, required=True)
    enum.add_argument("--anchor-budget", type=int, default=0)
    enum.add_argument("--top", type=int, default=10)
    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()

    if args.order < 1 or args.anchor_budget < 0:
        parser.error("order must be positive and anchor budget nonnegative")

    if args.command == "score":
        result = score_model(args.A, args.order, args.window, args.anchor_budget)
    else:
        if args.basis_order < 1:
            parser.error("basis order must be positive")
        if not (0 <= args.size <= args.N + 1):
            parser.error("size must lie between 0 and N+1")
        result = enumerate_models(args)

    print(json.dumps(result, indent=2, default=json_default))


if __name__ == "__main__":
    main()
