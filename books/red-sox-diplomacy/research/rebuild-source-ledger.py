#!/usr/bin/env python3
"""Rebuild Red Sox Diplomacy's canonical source ledger deterministically.

The 185-row source-ledger.csv is the canonical baseline. Historical addenda
02-15 are already absorbed and are therefore provenance only. This script
merges addenda 16 through the highest numbered addendum present, normalizes
stable URLs for duplicate comparison, preserves the earliest source record,
uses a later duplicate's materially fuller book_use description when useful,
and finally reassigns canonical rsd-### IDs in stable corpus order.

Run from the repository root:

    python3 books/red-sox-diplomacy/research/rebuild-source-ledger.py --check
    python3 books/red-sox-diplomacy/research/rebuild-source-ledger.py --write

The --check mode never modifies files. --write also emits a reconciliation
report beside the ledger so duplicate decisions remain auditable.
"""

from __future__ import annotations

import argparse
import csv
import io
import json
import re
import sys
from dataclasses import dataclass, asdict
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

FIELDS = (
    "id",
    "year",
    "author_or_institution",
    "title",
    "source_type",
    "book_use",
    "url",
)
TRACKING_KEYS = {
    "fbclid",
    "gclid",
    "mc_cid",
    "mc_eid",
    "ref",
    "source",
}
TRACKING_PREFIXES = ("utm_",)
BASELINE_ROWS = 185
ADDENDUM_START = 16


@dataclass
class SourceRow:
    id: str
    year: str
    author_or_institution: str
    title: str
    source_type: str
    book_use: str
    url: str
    origin: str
    origin_line: int


@dataclass
class DuplicateDecision:
    normalized_url: str
    kept_origin: str
    kept_original_id: str
    duplicate_origin: str
    duplicate_original_id: str
    book_use_upgraded: bool


def normalize_url(raw: str) -> str:
    """Normalize only features that should not change source identity."""
    value = raw.strip()
    parts = urlsplit(value)
    scheme = "https" if parts.scheme in {"http", "https"} else parts.scheme.lower()
    host = (parts.hostname or "").lower()
    if host.startswith("www."):
        host = host[4:]

    # Twitter's x.com migration changed hostnames, not status identity.
    if host in {"twitter.com", "mobile.twitter.com"}:
        host = "x.com"

    port = parts.port
    if port and not ((scheme == "https" and port == 443) or (scheme == "http" and port == 80)):
        host = f"{host}:{port}"

    path = re.sub(r"/{2,}", "/", parts.path or "/")
    if path != "/":
        path = path.rstrip("/")

    query_pairs = []
    for key, value in parse_qsl(parts.query, keep_blank_values=True):
        lower = key.lower()
        if lower in TRACKING_KEYS or any(lower.startswith(prefix) for prefix in TRACKING_PREFIXES):
            continue
        query_pairs.append((key, value))
    query = urlencode(query_pairs, doseq=True)
    return urlunsplit((scheme, host, path, query, ""))


def load_csv(path: Path) -> list[SourceRow]:
    rows: list[SourceRow] = []
    with path.open(encoding="utf-8", newline="") as handle:
        reader = csv.DictReader(handle)
        if tuple(reader.fieldnames or ()) != FIELDS:
            raise ValueError(f"{path} has unexpected columns: {reader.fieldnames}")
        for line_number, row in enumerate(reader, start=2):
            if None in row:
                raise ValueError(f"{path}:{line_number} has too many CSV fields")
            missing = [field for field in FIELDS if not (row[field] or "").strip()]
            if missing:
                raise ValueError(f"{path}:{line_number} has empty fields: {', '.join(missing)}")
            rows.append(
                SourceRow(
                    id=row["id"].strip(),
                    year=row["year"].strip(),
                    author_or_institution=row["author_or_institution"].strip(),
                    title=row["title"].strip(),
                    source_type=row["source_type"].strip(),
                    book_use=row["book_use"].strip(),
                    url=row["url"].strip(),
                    origin=path.name,
                    origin_line=line_number,
                )
            )
    return rows


def addenda(research: Path) -> list[Path]:
    found: list[tuple[int, Path]] = []
    pattern = re.compile(r"source-ledger-addendum-(\d+)\.csv$")
    for path in research.glob("source-ledger-addendum-*.csv"):
        match = pattern.search(path.name)
        if not match:
            continue
        number = int(match.group(1))
        if number >= ADDENDUM_START:
            found.append((number, path))
    return [path for _number, path in sorted(found)]


def materially_better_book_use(current: str, candidate: str) -> bool:
    """Conservative deterministic proxy for a materially fuller duplicate note."""
    current_words = current.split()
    candidate_words = candidate.split()
    return len(candidate_words) >= len(current_words) + 5 and len(candidate) >= len(current) + 30


def merge(rows: list[SourceRow]) -> tuple[list[SourceRow], list[DuplicateDecision]]:
    canonical: list[SourceRow] = []
    by_url: dict[str, SourceRow] = {}
    decisions: list[DuplicateDecision] = []

    for row in rows:
        key = normalize_url(row.url)
        existing = by_url.get(key)
        if existing is None:
            canonical.append(row)
            by_url[key] = row
            continue

        upgraded = materially_better_book_use(existing.book_use, row.book_use)
        if upgraded:
            existing.book_use = row.book_use

        decisions.append(
            DuplicateDecision(
                normalized_url=key,
                kept_origin=existing.origin,
                kept_original_id=existing.id,
                duplicate_origin=row.origin,
                duplicate_original_id=row.id,
                book_use_upgraded=upgraded,
            )
        )

    return canonical, decisions


def render_csv(rows: list[SourceRow]) -> str:
    buffer = io.StringIO(newline="")
    writer = csv.DictWriter(buffer, fieldnames=FIELDS, lineterminator="\n")
    writer.writeheader()
    for index, row in enumerate(rows, start=1):
        writer.writerow(
            {
                "id": f"rsd-{index:03d}",
                "year": row.year,
                "author_or_institution": row.author_or_institution,
                "title": row.title,
                "source_type": row.source_type,
                "book_use": row.book_use,
                # Preserve the earliest encountered display URL. Normalization is
                # for identity comparison only, not silent rewriting of citations.
                "url": row.url,
            }
        )
    return buffer.getvalue()


def validate(rows: list[SourceRow]) -> None:
    normalized: set[str] = set()
    for row in rows:
        key = normalize_url(row.url)
        if key in normalized:
            raise ValueError(f"duplicate normalized URL survived merge: {row.url}")
        normalized.add(key)
        for field in FIELDS[1:]:
            if not str(getattr(row, field)).strip():
                raise ValueError(f"empty {field} in {row.origin}:{row.origin_line}")


def main() -> int:
    parser = argparse.ArgumentParser()
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--check", action="store_true", help="report the deterministic rebuild without writing")
    mode.add_argument("--write", action="store_true", help="rewrite source-ledger.csv and reconciliation report")
    args = parser.parse_args()

    research = Path(__file__).resolve().parent
    ledger = research / "source-ledger.csv"
    baseline = load_csv(ledger)
    if len(baseline) != BASELINE_ROWS:
        raise SystemExit(
            f"Refusing rebuild: expected {BASELINE_ROWS} canonical baseline rows, found {len(baseline)}. "
            "If the canonical baseline has already changed, update this script deliberately."
        )

    staged_paths = addenda(research)
    if not staged_paths:
        raise SystemExit("No addenda 16+ found; refusing an empty staged rebuild.")

    staged: list[SourceRow] = []
    for path in staged_paths:
        staged.extend(load_csv(path))

    merged, duplicates = merge(baseline + staged)
    validate(merged)

    report = {
        "baseline_rows": len(baseline),
        "addendum_files": [path.name for path in staged_paths],
        "staged_rows": len(staged),
        "duplicate_rows_removed": len(duplicates),
        "canonical_rows": len(merged),
        "highest_addendum": staged_paths[-1].name,
        "book_use_upgrades": sum(d.book_use_upgraded for d in duplicates),
        "duplicates": [asdict(decision) for decision in duplicates],
    }

    print(json.dumps({key: value for key, value in report.items() if key != "duplicates"}, indent=2))

    if args.write:
        ledger.write_text(render_csv(merged), encoding="utf-8")
        (research / "source-ledger-rebuild-report.json").write_text(
            json.dumps(report, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
        print(f"Wrote {ledger} with {len(merged)} canonical rows.")

    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (OSError, ValueError, csv.Error) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
