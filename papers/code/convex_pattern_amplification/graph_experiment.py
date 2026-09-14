#!/usr/bin/env python3
"""Reproducibility harness for Convex Pattern Amplification Under Deletion.

No third-party packages are required.

Checks:
1. Exhaustively enumerate every labeled graph on n <= 6 vertices.
2. Verify the one-vertex deletion barycenter identity for the vector
   (edge density, triangle density).
3. Verify a greedy deletion chain never decreases quadratic energy from
   the baseline (1/2, 1/8).
4. Produce a deterministic 14-vertex example for the full unlabeled
   three-vertex pattern distribution and greedily amplify KL divergence
   from G(3, 1/2).
5. Write CSV and SVG outputs for the example chain.
"""

from __future__ import annotations

import argparse
import csv
import itertools
import math
import random
from pathlib import Path
from typing import Iterable

Edge = tuple[int, int]


def all_edges(n: int) -> list[Edge]:
    return list(itertools.combinations(range(n), 2))


def edge_set_from_mask(n: int, mask: int) -> set[Edge]:
    edges = all_edges(n)
    return {e for i, e in enumerate(edges) if (mask >> i) & 1}


def edge_density(vertices: tuple[int, ...], edges: set[Edge]) -> float:
    n = len(vertices)
    if n < 2:
        return 0.0
    present = sum((a, b) in edges for a, b in itertools.combinations(vertices, 2))
    return present / math.comb(n, 2)


def triangle_density(vertices: tuple[int, ...], edges: set[Edge]) -> float:
    n = len(vertices)
    if n < 3:
        return 0.0
    triangles = 0
    for tri in itertools.combinations(vertices, 3):
        if all((min(a, b), max(a, b)) in edges for a, b in itertools.combinations(tri, 2)):
            triangles += 1
    return triangles / math.comb(n, 3)


def edge_triangle_profile(vertices: tuple[int, ...], edges: set[Edge]) -> tuple[float, float]:
    return edge_density(vertices, edges), triangle_density(vertices, edges)


def deletion_profiles(vertices: tuple[int, ...], edges: set[Edge]) -> list[tuple[float, float]]:
    return [edge_triangle_profile(tuple(x for x in vertices if x != v), edges) for v in vertices]


def barycenter_error(vertices: tuple[int, ...], edges: set[Edge]) -> float:
    parent = edge_triangle_profile(vertices, edges)
    children = deletion_profiles(vertices, edges)
    average = tuple(sum(x[i] for x in children) / len(children) for i in range(2))
    return max(abs(average[i] - parent[i]) for i in range(2))


def quadratic_energy(profile: tuple[float, float], center: tuple[float, float] = (0.5, 0.125)) -> float:
    return sum((profile[i] - center[i]) ** 2 for i in range(2))


def greedy_quadratic_chain(n: int, edges: set[Edge], stop: int = 3) -> list[tuple[int, float]]:
    vertices = tuple(range(n))
    chain: list[tuple[int, float]] = []
    while len(vertices) >= stop:
        profile = edge_triangle_profile(vertices, edges)
        current = quadratic_energy(profile)
        chain.append((len(vertices), current))
        if len(vertices) == stop:
            break
        candidates = []
        for v in vertices:
            child = tuple(x for x in vertices if x != v)
            energy = quadratic_energy(edge_triangle_profile(child, edges))
            candidates.append((energy, v, child))
        best, _, vertices = max(candidates)
        if best + 1e-12 < current:
            raise AssertionError(("quadratic energy decreased", n, current, best))
    return chain


def exhaustive_check(max_n: int = 6, tolerance: float = 1e-12) -> None:
    total = 0
    max_error = 0.0
    for n in range(3, max_n + 1):
        edge_count = math.comb(n, 2)
        for mask in range(1 << edge_count):
            edges = edge_set_from_mask(n, mask)
            vertices = tuple(range(n))
            error = barycenter_error(vertices, edges)
            max_error = max(max_error, error)
            if error > tolerance:
                raise AssertionError(("barycenter identity failed", n, mask, error))
            greedy_quadratic_chain(n, edges)
            total += 1
    print(f"checked {total:,} labeled graphs for n=3..{max_n}")
    print(f"maximum floating-point barycenter error: {max_error:.3e}")


def seeded_graph(n: int = 14, probability: float = 0.42, seed: int = 20260912) -> set[Edge]:
    rng = random.Random(seed)
    return {
        (i, j)
        for i in range(n)
        for j in range(i + 1, n)
        if rng.random() < probability
    }


def triple_profile(vertices: tuple[int, ...], edges: set[Edge]) -> tuple[float, float, float, float]:
    """Unlabeled 3-vertex graph law, classified by edge count 0,1,2,3."""
    counts = [0, 0, 0, 0]
    for tri in itertools.combinations(vertices, 3):
        e = sum((min(a, b), max(a, b)) in edges for a, b in itertools.combinations(tri, 2))
        counts[e] += 1
    denominator = math.comb(len(vertices), 3)
    return tuple(c / denominator for c in counts)


def kl_divergence(p: Iterable[float], q: Iterable[float]) -> float:
    return sum(pi * math.log(pi / qi) for pi, qi in zip(p, q) if pi > 0.0)


def greedy_kl_chain(
    n: int = 14,
    probability: float = 0.42,
    seed: int = 20260912,
    stop: int = 5,
) -> list[dict[str, object]]:
    edges = seeded_graph(n, probability, seed)
    q = (1 / 8, 3 / 8, 3 / 8, 1 / 8)  # G(3, 1/2)
    vertices = tuple(range(n))
    rows: list[dict[str, object]] = []

    while len(vertices) >= stop:
        profile = triple_profile(vertices, edges)
        divergence = kl_divergence(profile, q)
        rows.append({
            "vertices": len(vertices),
            "remaining": vertices,
            "p0": profile[0],
            "p1": profile[1],
            "p2": profile[2],
            "p3": profile[3],
            "kl": divergence,
        })
        if len(vertices) == stop:
            break

        candidates = []
        for v in vertices:
            child = tuple(x for x in vertices if x != v)
            profile_child = triple_profile(child, edges)
            divergence_child = kl_divergence(profile_child, q)
            candidates.append((divergence_child, v, child))
        best, _, vertices = max(candidates)
        if best + 1e-12 < divergence:
            raise AssertionError(("KL divergence decreased", divergence, best))

    return rows


def write_csv(rows: list[dict[str, object]], path: Path) -> None:
    fieldnames = ["vertices", "remaining", "p0", "p1", "p2", "p3", "kl"]
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        for row in rows:
            writer.writerow(row)


def write_svg(rows: list[dict[str, object]], path: Path) -> None:
    width, height = 900, 480
    left, right, top, bottom = 85, 35, 45, 70
    xs = [int(row["vertices"]) for row in rows]
    ys = [float(row["kl"]) for row in rows]
    x_min, x_max = min(xs), max(xs)
    y_min, y_max = 0.0, max(ys) * 1.08

    def sx(x: float) -> float:
        return left + (x - x_min) / (x_max - x_min) * (width - left - right)

    def sy(y: float) -> float:
        return height - bottom - (y - y_min) / (y_max - y_min) * (height - top - bottom)

    points = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in zip(xs, ys))
    circles = "\n".join(
        f'<circle cx="{sx(x):.1f}" cy="{sy(y):.1f}" r="4.5" fill="white" stroke="black" stroke-width="1.5"/>'
        for x, y in zip(xs, ys)
    )
    labels = "\n".join(
        f'<text x="{sx(x):.1f}" y="{sy(y)-10:.1f}" text-anchor="middle" font-family="sans-serif" font-size="12">{y:.3f}</text>'
        for x, y in zip(xs, ys)
    )

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
<rect width="100%" height="100%" fill="white"/>
<text x="{width/2}" y="25" text-anchor="middle" font-family="sans-serif" font-size="18">Greedy KL-amplifying deletion chain</text>
<line x1="{left}" y1="{height-bottom}" x2="{width-right}" y2="{height-bottom}" stroke="black"/>
<line x1="{left}" y1="{top}" x2="{left}" y2="{height-bottom}" stroke="black"/>
<polyline points="{points}" fill="none" stroke="black" stroke-width="2"/>
{circles}
{labels}
<text x="{width/2}" y="{height-20}" text-anchor="middle" font-family="sans-serif" font-size="14">remaining vertices (chain runs right to left)</text>
<text x="20" y="{height/2}" text-anchor="middle" font-family="sans-serif" font-size="14" transform="rotate(-90 20 {height/2})">KL divergence from G(3, 1/2)</text>
</svg>'''
    path.write_text(svg, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--max-n", type=int, default=6, help="largest n for exhaustive graph check")
    parser.add_argument("--output-dir", type=Path, default=Path("."))
    args = parser.parse_args()

    exhaustive_check(args.max_n)
    rows = greedy_kl_chain()
    args.output_dir.mkdir(parents=True, exist_ok=True)
    csv_path = args.output_dir / "example_chain.csv"
    svg_path = args.output_dir / "example_chain.svg"
    write_csv(rows, csv_path)
    write_svg(rows, svg_path)
    print(f"wrote {csv_path}")
    print(f"wrote {svg_path}")
    for row in rows:
        print(f"n={row['vertices']:2d}  KL={float(row['kl']):.5f}  profile=({float(row['p0']):.3f}, {float(row['p1']):.3f}, {float(row['p2']):.3f}, {float(row['p3']):.3f})")


if __name__ == "__main__":
    main()
