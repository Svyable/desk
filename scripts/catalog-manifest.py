#!/usr/bin/env python3
"""Maintain Desk discovery inventory and refresh the human dashboard together."""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

SAFE_SLUG = re.compile(r"^[a-z0-9][a-z0-9-]*$")


def book_slugs(root: Path) -> list[str]:
    books = root / "books"
    return sorted(
        path.name
        for path in books.iterdir()
        if path.is_dir() and not path.name.startswith("_")
    )


def manifest_slugs(path: Path) -> list[str]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if data.get("version") != 1 or not isinstance(data.get("books"), list):
        raise ValueError("catalog.json must be version 1 with a books array")
    result: list[str] = []
    for raw in data["books"]:
        if not isinstance(raw, str):
            raise ValueError("catalog.json books entries must be strings")
        slug = raw.strip()
        if slug == "_TEMPLATE" or not SAFE_SLUG.fullmatch(slug):
            raise ValueError(f"catalog.json has invalid book slug: {raw!r}")
        if slug in result:
            raise ValueError(f"catalog.json repeats book slug: {slug}")
        result.append(slug)
    return result


def render(slugs: list[str]) -> str:
    return json.dumps({"version": 1, "books": slugs}, indent=2, ensure_ascii=False) + "\n"


def refresh_dashboard(root: Path) -> int:
    command = [sys.executable, str(root / "scripts" / "catalog.py"), "--root", str(root), "--write"]
    result = subprocess.run(command, check=False)
    if result.returncode:
        print("catalog manifest not written because catalog.py --write failed")
    return result.returncode


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", default=".", help="Desk repository root")
    parser.add_argument(
        "--write",
        action="store_true",
        help="Refresh the README dashboard and catalog.json from local book folders",
    )
    args = parser.parse_args(argv)

    root = Path(args.root).resolve()
    path = root / "catalog.json"
    expected = book_slugs(root)

    if args.write:
        if refresh_dashboard(root):
            return 1
        path.write_text(render(expected), encoding="utf-8")

    try:
        actual = manifest_slugs(path)
    except (OSError, json.JSONDecodeError, ValueError) as exc:
        print(f"catalog manifest check failed: {exc}")
        return 1

    if actual != expected:
        missing = sorted(set(expected) - set(actual))
        extra = sorted(set(actual) - set(expected))
        if missing:
            print(f"catalog manifest missing: {', '.join(missing)}")
        if extra:
            print(f"catalog manifest has unexpected entries: {', '.join(extra)}")
        if not missing and not extra:
            print("catalog manifest order differs from local book folders")
        print("run: python3 scripts/catalog-manifest.py --write")
        return 1

    print(f"catalog manifest ok: {len(actual)} books")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
