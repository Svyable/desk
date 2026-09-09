#!/usr/bin/env python3
import os
import subprocess
import tempfile
from pathlib import Path

SCRIPT = Path(__file__).with_name("sync-bookself.sh")
REMOTE = "https://svyable.github.io/bookself/reader/"


def worker() -> str:
    return """const CACHE = 'fixture-shell-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',
  './vendor/marked.min.js',
  './js/app.js',
  './js/offline-cache.js',
];
"""


with tempfile.TemporaryDirectory() as tmp:
    root = Path(tmp) / "desk"
    platform = Path(tmp) / "bookself"
    for path in (
        root / "reader/js",
        root / "reader/css",
        platform / "reader/js",
        platform / "reader/css",
        platform / "reader/vendor",
    ):
        path.mkdir(parents=True, exist_ok=True)

    (root / "reader/index.html").write_text(
        f'<link rel="stylesheet" href="{REMOTE}css/style.css?v=r11">\n'
        f'<script src="{REMOTE}vendor/marked.min.js"></script>\n',
        encoding="utf-8",
    )
    (root / "reader/manifest.webmanifest").write_text("{}\n", encoding="utf-8")
    (root / "reader/js/app-loader.js").write_text(
        "const canonicalAppUrl = 'https://svyable.github.io/bookself/reader/js/app.js?v=r4';\n",
        encoding="utf-8",
    )
    (root / "reader/js/desk-local.js").write_text("desk js\n", encoding="utf-8")
    (root / "reader/css/desk-local.css").write_text("desk css\n", encoding="utf-8")

    (platform / "reader/js/app.js").write_text("export const fixture = true;\n", encoding="utf-8")
    (platform / "reader/js/offline-cache.js").write_text("// offline helper\n", encoding="utf-8")
    (platform / "reader/css/style.css").write_text("body{}\n", encoding="utf-8")
    (platform / "reader/vendor/marked.min.js").write_text("// marked\n", encoding="utf-8")
    (platform / "reader/sw.js").write_text(worker(), encoding="utf-8")

    # These are valid upstream source files, but they are not part of the
    # deployable Reader shell and therefore must not become instance runtime.
    (platform / "reader/js/upstream-only.test.mjs").write_text("// test only\n", encoding="utf-8")
    (platform / "reader/css/dev-only.css").write_text(".dev-only{}\n", encoding="utf-8")
    (platform / "reader/vendor/dev-only.js").write_text("// dev only\n", encoding="utf-8")

    env = dict(os.environ, DESK_ROOT=str(root))
    subprocess.run(
        ["sh", str(SCRIPT), str(platform)],
        check=True,
        env=env,
        capture_output=True,
        text=True,
    )

    assert (root / "reader/.bookself-runtime-files").read_text(encoding="utf-8").splitlines() == [
        "css/style.css",
        "js/app.js",
        "js/offline-cache.js",
        "vendor/marked.min.js",
        "sw.js",
    ]
    assert not (root / "reader/js/upstream-only.test.mjs").exists()
    assert not (root / "reader/css/dev-only.css").exists()
    assert not (root / "reader/vendor/dev-only.js").exists()
    assert (root / "reader/js/desk-local.js").read_text(encoding="utf-8") == "desk js\n"
    assert (root / "reader/css/desk-local.css").read_text(encoding="utf-8") == "desk css\n"
    assert REMOTE not in (root / "reader/index.html").read_text(encoding="utf-8")
    assert "new URL('./app.js', import.meta.url).href" in (
        root / "reader/js/app-loader.js"
    ).read_text(encoding="utf-8")

print("Bookself sync installs the service-worker-declared runtime, not upstream tests/dev files")
