#!/usr/bin/env python3
import hashlib
import os
import subprocess
import tempfile
from pathlib import Path

SCRIPT = Path(__file__).with_name("sync-bookself.sh")
REMOTE = "https://svyable.github.io/bookself/reader/"
SHELF_RUNTIME = "https://svyable.github.io/shelf/reader/js/"


def run_sync(root: Path, platform: Path):
    env = dict(os.environ, DESK_ROOT=str(root))
    return subprocess.run(
        ["sh", str(SCRIPT), str(platform)],
        check=True,
        env=env,
        capture_output=True,
        text=True,
    )


def worker(cache: str, *, include_helper: bool = True, missing: str | None = None) -> str:
    entries = [
        "./",
        "./index.html",
        "./css/style.css",
        "./manifest.webmanifest",
        "./vendor/marked.min.js",
        "./js/app.js",
    ]
    if include_helper:
        entries.append("./js/offline-cache.js")
    if missing:
        entries.append(missing)
    shell = "\n".join(f"  '{entry}'," for entry in entries)
    return f"const CACHE = '{cache}';\nconst SHELL = [\n{shell}\n];\n"


def snapshot(root: Path):
    paths = [
        "reader/js/app.js",
        "reader/sw.js",
        "reader/index.html",
        "reader/js/app-loader.js",
        "reader/.bookself-runtime-files",
        "reader/.bookself-offline-version",
        "reader/js/desk-local.js",
        "reader/css/desk-local.css",
        "books/keep.txt",
    ]
    return {path: (root / path).read_bytes() for path in paths}


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
        f'<script src="{REMOTE}vendor/marked.min.js"></script>\n'
        '<a href="https://svyable.github.io/shelf/reader/">Released Shelf</a>\n'
    )
    (root / "reader/manifest.webmanifest").write_text("desk manifest\n")
    (root / "reader/app-icon.svg").write_text("desk icon\n")
    (root / "reader/js/app-loader.js").write_text(
        "const canonicalAppUrl = 'https://svyable.github.io/bookself/reader/js/app.js?v=r4';\n"
    )
    (root / "reader/js/desk-local.js").write_text("desk js\n")
    (root / "reader/css/desk-local.css").write_text("desk css\n")
    (root / "books").mkdir()
    (root / "books/keep.txt").write_text("manuscript state\n")

    (platform / "reader/js/app.js").write_text("canonical app v1\n")
    (platform / "reader/js/offline-cache.js").write_text("canonical offline helper\n")
    (platform / "reader/css/style.css").write_text("canonical css\n")
    (platform / "reader/vendor/marked.min.js").write_text("canonical vendor\n")
    (platform / "reader/sw.js").write_text(worker("bookself-shell-v1"))

    run_sync(root, platform)

    manifest = root / "reader/.bookself-runtime-files"
    version = root / "reader/.bookself-offline-version"
    assert manifest.read_text().splitlines() == [
        "css/style.css",
        "js/app.js",
        "js/offline-cache.js",
        "vendor/marked.min.js",
        "sw.js",
    ]
    assert version.read_text().splitlines() == [
        "cache=bookself-shell-v1",
        f"sw_sha256={hashlib.sha256((root / 'reader/sw.js').read_bytes()).hexdigest()}",
        "shell_entries=7",
    ]
    assert REMOTE not in (root / "reader/index.html").read_text()
    assert REMOTE not in (root / "reader/js/app-loader.js").read_text()
    assert (root / "reader/js/desk-local.js").read_text() == "desk js\n"
    assert (root / "reader/css/desk-local.css").read_text() == "desk css\n"
    assert (root / "books/keep.txt").read_text() == "manuscript state\n"

    # Upstream deletion/update removes stale Bookself ownership while Desk state survives.
    (platform / "reader/js/offline-cache.js").unlink()
    (platform / "reader/js/app.js").write_text("canonical app v2\n")
    (platform / "reader/sw.js").write_text(worker("bookself-shell-v2", include_helper=False))
    run_sync(root, platform)
    assert not (root / "reader/js/offline-cache.js").exists()
    assert "js/offline-cache.js" not in manifest.read_text().splitlines()
    assert version.read_text().splitlines()[0] == "cache=bookself-shell-v2"

    good = snapshot(root)

    (platform / "reader/js/app.js").write_text(
        f"import '{REMOTE}js/remote-again.js';\ncanonical app v3 must not land\n"
    )
    (platform / "reader/sw.js").write_text(worker("bookself-shell-v3", include_helper=False))
    try:
        run_sync(root, platform)
    except subprocess.CalledProcessError as exc:
        assert "depends on remote Bookself runtime" in exc.stdout
    else:
        raise AssertionError("sync accepted remote Bookself runtime")
    assert snapshot(root) == good

    (platform / "reader/js/app.js").write_text(
        f"import '{SHELF_RUNTIME}bad-runtime.js';\ncanonical app v4 must not land\n"
    )
    (platform / "reader/sw.js").write_text(worker("bookself-shell-v4", include_helper=False))
    try:
        run_sync(root, platform)
    except subprocess.CalledProcessError as exc:
        assert "depends on personal Shelf runtime" in exc.stdout
    else:
        raise AssertionError("sync accepted personal Shelf runtime")
    assert snapshot(root) == good

    (platform / "reader/js/app.js").write_text("canonical app v5 must not land\n")
    (platform / "reader/sw.js").write_text(
        worker("bookself-shell-v5", include_helper=False, missing="./js/missing-shell.js")
    )
    try:
        run_sync(root, platform)
    except subprocess.CalledProcessError as exc:
        assert "offline shell asset missing after sync: ./js/missing-shell.js" in exc.stderr
    else:
        raise AssertionError("sync accepted incomplete offline shell")
    assert snapshot(root) == good

print(
    "Bookself sync contract: exact runtime, local cutover, transactional guards, "
    "offline version, Desk state preserved"
)
