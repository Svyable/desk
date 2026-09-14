#!/usr/bin/env python3
"""
Exact finite-window pressure tests for the Wandering Blocker Conjecture.

The program works with a finite set A contained in [0,U]. For targets n <= U,
this contains every possible summand of an h-term representation of n, so the
representation hypergraphs are exact for the supplied finite model.

No third-party dependencies are required.

Examples
--------
Profile one model:
    python3 wandering_blocker_search.py profile \
        --A 0,1,3,4,7,8,10,12 --h 2 --L 8 --U 12 --anchor-budget 3

Enumerate small hostile models:
    python3 wandering_blocker_search.py search \
        --N 14 --size 8 --h 2 --L 9 --U 14 \
        --anchor-budget 2 --delete-size 3 --top 12 --max-models 50000
"""

from __future__ import annotations

import argparse
import itertools
import math
from dataclasses import dataclass
from typing import FrozenSet, Iterable, List, Optional, Sequence, Tuple

INF = math.inf


def parse_int_set(text: str) -> Tuple[int, ...]:
    if not text.strip():
        return ()
    values = sorted({int(part.strip()) for part in text.split(",") if part.strip()})
    if any(v < 0 for v in values):
        raise ValueError("A must contain only nonnegative integers.")
    return tuple(values)


def representation_supports(A: Sequence[int], h: int, n: int) -> Tuple[FrozenSet[int], ...]:
    """Distinct supports of nondecreasing h-term representations of n."""
    supports = {
        frozenset(tup)
        for tup in itertools.combinations_with_replacement(A, h)
        if sum(tup) == n
    }
    return tuple(sorted(supports, key=lambda s: (len(s), tuple(sorted(s)))))


def anchored_edges(
    A: Sequence[int], h: int, n: int, anchor: Iterable[int] = ()
) -> Tuple[FrozenSet[int], ...]:
    """Free-support hyperedges after contracting/protecting the finite anchor."""
    T = frozenset(anchor)
    return tuple(support - T for support in representation_supports(A, h, n))


def minimum_blocker_from_edges(
    edges: Sequence[FrozenSet[int]],
) -> Tuple[float, Optional[FrozenSet[int]]]:
    """
    Exact transversal number and one optimum blocker.

    Returns (0, emptyset) if there are no representations.
    Returns (inf, None) if an empty free-support edge is present, because no
    blocker outside the anchor can hit a representation supported entirely in
    the anchor.
    """
    if not edges:
        return 0, frozenset()
    if any(not edge for edge in edges):
        return INF, None

    vertices = sorted(set().union(*edges))
    for k in range(1, len(vertices) + 1):
        for candidate in itertools.combinations(vertices, k):
            B = frozenset(candidate)
            if all(B & edge for edge in edges):
                return k, B
    return INF, None


def anchored_blocker(
    A: Sequence[int], h: int, n: int, anchor: Iterable[int] = ()
) -> Tuple[float, Optional[FrozenSet[int]]]:
    return minimum_blocker_from_edges(anchored_edges(A, h, n, anchor))


def covers_window(A: Sequence[int], h: int, L: int, U: int) -> bool:
    return all(representation_supports(A, h, n) for n in range(L, U + 1))


def deletion_kills_target(
    A: Sequence[int], h: int, n: int, deletion: Iterable[int]
) -> bool:
    D = frozenset(deletion)
    supports = representation_supports(A, h, n)
    return bool(supports) and all(D & support for support in supports)


def deletion_fragility_fraction(
    A: Sequence[int], h: int, L: int, U: int, delete_size: int
) -> float:
    """
    Finite surrogate for deletion fragility.

    Among all delete_size-subsets D of A, return the fraction for which at least
    one target n in [L,U] loses every representation after deleting D.
    """
    if delete_size < 0 or delete_size > len(A):
        return 0.0
    total = 0
    fragile = 0
    for D in itertools.combinations(A, delete_size):
        total += 1
        if any(deletion_kills_target(A, h, n, D) for n in range(L, U + 1)):
            fragile += 1
    return fragile / total if total else 0.0


@dataclass(frozen=True)
class AnchorProfileRow:
    budget: int
    value: float
    anchor: Tuple[int, ...]
    weakest_target: Optional[int]
    blocker: Optional[Tuple[int, ...]]


def anchor_escalation_profile(
    A: Sequence[int], h: int, L: int, U: int, anchor_budget: int
) -> List[AnchorProfileRow]:
    """
    Compute
        E(t) = max_{|T| <= t} min_{n in [L,U], n > h max(T)} tau_{h,T}(n).

    The eligibility condition n > h max(T) rules out targets representable
    entirely inside the protected anchor for purely finite-window reasons.
    """
    A = tuple(sorted(set(A)))
    rows: List[AnchorProfileRow] = []

    for t in range(anchor_budget + 1):
        best_value = -1.0
        best_anchor: Tuple[int, ...] = ()
        best_target: Optional[int] = None
        best_blocker: Optional[Tuple[int, ...]] = None

        for size in range(t + 1):
            for T_tuple in itertools.combinations(A, size):
                T = frozenset(T_tuple)
                max_t = max(T) if T else -1
                eligible = [
                    n for n in range(L, U + 1)
                    if n > h * max_t
                ]
                if not eligible:
                    continue

                weakest_value = INF
                weakest_target = None
                weakest_blocker = None

                for n in eligible:
                    tau, blocker = anchored_blocker(A, h, n, T)
                    if tau < weakest_value:
                        weakest_value = tau
                        weakest_target = n
                        weakest_blocker = blocker

                if weakest_value > best_value:
                    best_value = weakest_value
                    best_anchor = T_tuple
                    best_target = weakest_target
                    best_blocker = (
                        tuple(sorted(weakest_blocker))
                        if weakest_blocker is not None
                        else None
                    )

        rows.append(
            AnchorProfileRow(
                budget=t,
                value=best_value,
                anchor=best_anchor,
                weakest_target=best_target,
                blocker=best_blocker,
            )
        )
    return rows


def format_value(value: float) -> str:
    if value == INF:
        return "inf"
    if value < 0:
        return "NA"
    return str(int(value))


def print_profile(
    A: Sequence[int],
    h: int,
    L: int,
    U: int,
    anchor_budget: int,
    delete_size: Optional[int] = None,
) -> None:
    print(f"A={list(A)}")
    print(f"h={h}, window=[{L},{U}]")
    print(f"covers_window={covers_window(A, h, L, U)}")
    print()
    print("anchor_budget  escalation  witness_anchor  weakest_n  optimum_blocker")
    for row in anchor_escalation_profile(A, h, L, U, anchor_budget):
        print(
            f"{row.budget:13d}  {format_value(row.value):10s}  "
            f"{list(row.anchor)!s:14s}  {str(row.weakest_target):9s}  "
            f"{list(row.blocker) if row.blocker is not None else None}"
        )
    if delete_size is not None:
        frac = deletion_fragility_fraction(A, h, L, U, delete_size)
        print()
        print(f"delete_size={delete_size}, finite_fragility_fraction={frac:.6f}")


@dataclass(frozen=True)
class SearchHit:
    A: Tuple[int, ...]
    fragility: float
    final_escalation: float
    escalation_sum: float
    profile: Tuple[int, ...]


def search_models(
    N: int,
    size: int,
    h: int,
    L: int,
    U: int,
    anchor_budget: int,
    delete_size: int,
    top: int,
    max_models: int,
    require_zero: bool,
) -> List[SearchHit]:
    """
    Exhaustively enumerate a capped collection of finite models and rank models
    that simultaneously cover the target window, look deletion-fragile, and
    exhibit large anchor escalation.

    This is a falsification search. High scores are candidates to inspect, not
    evidence for the infinite conjecture.
    """
    universe = tuple(range(N + 1))
    if U > N:
        raise ValueError("For exact finite models require U <= N.")
    if size > len(universe):
        raise ValueError("size exceeds N+1.")

    hits: List[SearchHit] = []
    seen = 0

    if require_zero:
        if size == 0:
            candidates = ()
        else:
            candidates = (
                (0,) + tail
                for tail in itertools.combinations(range(1, N + 1), size - 1)
            )
    else:
        candidates = itertools.combinations(universe, size)

    for A in candidates:
        seen += 1
        if seen > max_models:
            break
        if not covers_window(A, h, L, U):
            continue

        rows = anchor_escalation_profile(A, h, L, U, anchor_budget)
        finite_values = [
            int(row.value) if row.value not in (INF,) and row.value >= 0 else 10**9
            for row in rows
        ]
        final_value = rows[-1].value
        escalation_sum = sum(
            row.value for row in rows if row.value not in (INF,) and row.value >= 0
        )
        fragility = deletion_fragility_fraction(A, h, L, U, delete_size)

        hits.append(
            SearchHit(
                A=tuple(A),
                fragility=fragility,
                final_escalation=final_value,
                escalation_sum=escalation_sum,
                profile=tuple(finite_values),
            )
        )

    def score(hit: SearchHit):
        final = hit.final_escalation
        final_score = 10**9 if final == INF else final
        return (
            hit.fragility,
            final_score,
            hit.escalation_sum,
            hit.profile,
        )

    hits.sort(key=score, reverse=True)
    return hits[:top]


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Exact finite-window pressure tests for wandering blockers."
    )
    sub = parser.add_subparsers(dest="command", required=True)

    p_profile = sub.add_parser("profile", help="Profile one supplied finite model.")
    p_profile.add_argument("--A", required=True, help="Comma-separated set, e.g. 0,1,3,7")
    p_profile.add_argument("--h", type=int, required=True)
    p_profile.add_argument("--L", type=int, required=True)
    p_profile.add_argument("--U", type=int, required=True)
    p_profile.add_argument("--anchor-budget", type=int, default=3)
    p_profile.add_argument("--delete-size", type=int)

    p_search = sub.add_parser("search", help="Enumerate small hostile finite models.")
    p_search.add_argument("--N", type=int, required=True)
    p_search.add_argument("--size", type=int, required=True)
    p_search.add_argument("--h", type=int, required=True)
    p_search.add_argument("--L", type=int, required=True)
    p_search.add_argument("--U", type=int, required=True)
    p_search.add_argument("--anchor-budget", type=int, default=2)
    p_search.add_argument("--delete-size", type=int, default=2)
    p_search.add_argument("--top", type=int, default=10)
    p_search.add_argument("--max-models", type=int, default=100000)
    p_search.add_argument(
        "--allow-no-zero",
        action="store_true",
        help="Do not force 0 into candidate finite models.",
    )

    return parser


def main() -> None:
    args = build_parser().parse_args()
    if args.h < 1:
        raise SystemExit("h must be positive.")
    if args.L < 0 or args.U < args.L:
        raise SystemExit("Require 0 <= L <= U.")

    if args.command == "profile":
        A = parse_int_set(args.A)
        if not A:
            raise SystemExit("A must be nonempty.")
        if max(A) < args.U:
            print(
                "warning: max(A) < U. This is still exact for the supplied finite set, "
                "but it is not automatically a truncation of an unknown infinite A."
            )
        print_profile(
            A=A,
            h=args.h,
            L=args.L,
            U=args.U,
            anchor_budget=args.anchor_budget,
            delete_size=args.delete_size,
        )
        return

    hits = search_models(
        N=args.N,
        size=args.size,
        h=args.h,
        L=args.L,
        U=args.U,
        anchor_budget=args.anchor_budget,
        delete_size=args.delete_size,
        top=args.top,
        max_models=args.max_models,
        require_zero=not args.allow_no_zero,
    )

    print(
        "rank  fragility  final_E  profile  A\n"
        "----  ---------  -------  -------  -"
    )
    for i, hit in enumerate(hits, start=1):
        final = format_value(hit.final_escalation)
        profile = ",".join("inf" if x == 10**9 else str(x) for x in hit.profile)
        print(
            f"{i:4d}  {hit.fragility:9.6f}  {final:7s}  "
            f"{profile:7s}  {list(hit.A)}"
        )


if __name__ == "__main__":
    main()
