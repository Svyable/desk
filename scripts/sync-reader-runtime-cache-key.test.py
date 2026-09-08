#!/usr/bin/env python3
import os
import subprocess
import tempfile
from pathlib import Path

SCRIPT = Path(__file__).with_name("sync-reader-runtime.sh")
REMOTE = "https://svyable.github.io/bookself/reader/"


def worker() -> str:
    return """const CACHE = 'fixture-shell-v1';
const SHELL = [
  './',
  './index.html',
  './css/style.css',
  './manifest.webmanifest',
  './vendor/marked.min.js',
  './js/app.js',
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
        f'<link rel="stylesheet" href="{REMOTE}css/style.css?v=r123">\n'
        f'<script src="{REMOTE}vendor/marked.min.js"></script>\n',
        encoding="utf-8",
    )
    (root / "reader/manifest.webmanifest").write_text("{}\n", encoding="utf-8")
    (root / "reader/js/app-loader.js").write_text(
        "const canonicalAppUrl = 'https://svyable.github.io/bookself/reader/js/app.js?v=r999';\n"
        "export { canonicalAppUrl };\n",
        encoding="utf-8",
    )
    (platform / "reader/js/app.js").write_text("export const fixture = true;\n", encoding="utf-8")
    (platform / "reader/css/style.css").write_text("body{}\n", encoding="utf-8")
    (platform / "reader/vendor/marked.min.js").write_text("// fixture\n", encoding="utf-8")
    (platform / "reader/sw.js").write_text(worker(), encoding="utf-8")

    env = dict(os.environ, DESK_ROOT=str(root))
    subprocess.run(["sh", str(SCRIPT), str(platform)], check=True, env=env, capture_output=True, text=True)

    loader = (root / "reader/js/app-loader.js").read_text(encoding="utf-8")
    index = (root / "reader/index.html").read_text(encoding="utf-8")
    assert "new URL('./app.js', import.meta.url).href" in loader
    assert "?v=r999" not in loader
    assert REMOTE not in loader
    assert REMOTE not in index

print("Reader sync local cutover ignores upstream app cache-key revisions")
