#!/usr/bin/env python3
from __future__ import annotations

import subprocess
import tempfile
from pathlib import Path

CHECK = Path(__file__).with_name("check-reader-runtime-boundary.py")


def run(root: Path, *args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["python3", str(CHECK), str(root), *args],
        text=True,
        capture_output=True,
    )


with tempfile.TemporaryDirectory() as tmp:
    root = Path(tmp)
    (root / "reader/js").mkdir(parents=True)
    (root / "reader/css").mkdir(parents=True)

    # Ordinary product navigation to the released Shelf is valid.
    (root / "reader/index.html").write_text(
        '<a href="https://svyable.github.io/shelf/reader/">Released editions</a>\n',
        encoding="utf-8",
    )
    allowed = run(root)
    assert allowed.returncode == 0, allowed.stderr + allowed.stdout

    # During the checked-in migration state, canonical Bookself Pages runtime is
    # still permitted. A completed sync opts into the stricter local-only mode.
    adapter = root / "reader/css/adapter.css"
    adapter.write_text(
        '@import url("https://svyable.github.io/bookself/reader/css/style.css");\n',
        encoding="utf-8",
    )
    migration_allowed = run(root)
    assert migration_allowed.returncode == 0, migration_allowed.stderr + migration_allowed.stdout

    local_required = run(root, "--require-local-bookself")
    assert local_required.returncode == 1
    assert "reader/css/adapter.css depends on remote Bookself runtime" in local_required.stdout

    adapter.unlink()

    # Executable/style/vendor ownership must never point at Sven's Shelf, in
    # either migration or fully-local mode.
    bad = root / "reader/js/adapter.js"
    bad.write_text(
        "await import('https://svyable.github.io/shelf/reader/js/app.js');\n",
        encoding="utf-8",
    )
    rejected = run(root)
    assert rejected.returncode == 1
    assert "reader/js/adapter.js depends on personal Shelf runtime" in rejected.stdout

    rejected_strict = run(root, "--require-local-bookself")
    assert rejected_strict.returncode == 1
    assert "reader/js/adapter.js depends on personal Shelf runtime" in rejected_strict.stdout

    bad.unlink()
    (root / "reader/css/adapter.css").write_text(
        '@import url("https://svyable.github.io/shelf/reader/css/style.css");\n',
        encoding="utf-8",
    )
    rejected = run(root)
    assert rejected.returncode == 1
    assert "reader/css/adapter.css depends on personal Shelf runtime" in rejected.stdout

print("Desk Reader boundary checker supports migration while requiring fully local Bookself runtime after sync")
