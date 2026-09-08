#!/usr/bin/env python3
from __future__ import annotations

import subprocess
import tempfile
from pathlib import Path

CHECK = Path(__file__).with_name("check-reader-runtime-boundary.py")


def run(root: Path) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["python3", str(CHECK), str(root)],
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

    # Executable/style/vendor ownership must never point at Sven's Shelf.
    bad = root / "reader/js/adapter.js"
    bad.write_text(
        "await import('https://svyable.github.io/shelf/reader/js/app.js');\n",
        encoding="utf-8",
    )
    rejected = run(root)
    assert rejected.returncode == 1
    assert "reader/js/adapter.js depends on personal Shelf runtime" in rejected.stdout

    bad.unlink()
    (root / "reader/css/adapter.css").write_text(
        '@import url("https://svyable.github.io/shelf/reader/css/style.css");\n',
        encoding="utf-8",
    )
    rejected = run(root)
    assert rejected.returncode == 1
    assert "reader/css/adapter.css depends on personal Shelf runtime" in rejected.stdout

print("Desk Reader boundary checker allows Shelf navigation and rejects Shelf runtime assets")
