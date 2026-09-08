#!/usr/bin/env python3
import os
import subprocess
import tempfile
from pathlib import Path

SCRIPT = Path(__file__).with_name("sync-reader-runtime.sh")

with tempfile.TemporaryDirectory() as tmp:
    root = Path(tmp) / "desk"
    platform = Path(tmp) / "bookself"

    for path in [
        root / "reader/js",
        root / "reader/css",
        platform / "reader/js",
        platform / "reader/css",
        platform / "reader/vendor",
    ]:
        path.mkdir(parents=True, exist_ok=True)

    (root / "reader/index.html").write_text("desk shell\n")
    (root / "reader/manifest.webmanifest").write_text("desk manifest\n")
    (root / "reader/app-icon.svg").write_text("desk icon\n")
    (root / "reader/js/desk-local.js").write_text("desk js\n")
    (root / "reader/css/desk-local.css").write_text("desk css\n")
    (root / "books").mkdir()
    (root / "books/keep.txt").write_text("manuscript state\n")

    (platform / "reader/js/app.js").write_text("canonical app\n")
    (platform / "reader/js/offline-cache.js").write_text("canonical offline helper\n")
    (platform / "reader/css/style.css").write_text("canonical css\n")
    (platform / "reader/vendor/marked.min.js").write_text("canonical vendor\n")
    (platform / "reader/sw.js").write_text("canonical worker\n")
    (platform / "reader/index.html").write_text("bookself shell must not replace Desk\n")

    env = dict(os.environ, DESK_ROOT=str(root))
    subprocess.run(["sh", str(SCRIPT), str(platform)], check=True, env=env, capture_output=True, text=True)

    assert (root / "reader/js/app.js").read_text() == "canonical app\n"
    assert (root / "reader/js/offline-cache.js").read_text() == "canonical offline helper\n"
    assert (root / "reader/css/style.css").read_text() == "canonical css\n"
    assert (root / "reader/vendor/marked.min.js").read_text() == "canonical vendor\n"
    assert (root / "reader/sw.js").read_text() == "canonical worker\n"

    assert (root / "reader/index.html").read_text() == "desk shell\n"
    assert (root / "reader/manifest.webmanifest").read_text() == "desk manifest\n"
    assert (root / "reader/app-icon.svg").read_text() == "desk icon\n"
    assert (root / "reader/js/desk-local.js").read_text() == "desk js\n"
    assert (root / "reader/css/desk-local.css").read_text() == "desk css\n"
    assert (root / "books/keep.txt").read_text() == "manuscript state\n"

print("Desk Reader runtime sync contract: canonical runtime merged; Desk shell/identity/content preserved")
