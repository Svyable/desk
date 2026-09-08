#!/usr/bin/env python3
import hashlib
import os
import subprocess
import tempfile
from pathlib import Path

SCRIPT = Path(__file__).with_name("sync-reader-runtime.sh")


def run_sync(root: Path, platform: Path) -> subprocess.CompletedProcess[str]:
    env = dict(os.environ, DESK_ROOT=str(root))
    return subprocess.run(
        ["sh", str(SCRIPT), str(platform)],
        check=True,
        env=env,
        capture_output=True,
        text=True,
    )


def worker(cache: str, *, include_offline_helper: bool = True, missing: str | None = None) -> str:
    entries = [
        "./",
        "./index.html",
        "./css/style.css",
        "./manifest.webmanifest",
        "./vendor/marked.min.js",
        "./js/app.js",
    ]
    if include_offline_helper:
        entries.append("./js/offline-cache.js")
    if missing:
        entries.append(missing)
    shell = "\n".join(f"  '{entry}'," for entry in entries)
    return f"const CACHE = '{cache}';\nconst SHELL = [\n{shell}\n];\n"


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

    (platform / "reader/js/app.js").write_text("canonical app v1\n")
    (platform / "reader/js/offline-cache.js").write_text("canonical offline helper\n")
    (platform / "reader/css/style.css").write_text("canonical css\n")
    (platform / "reader/vendor/marked.min.js").write_text("canonical vendor\n")
    (platform / "reader/sw.js").write_text(worker("bookself-shell-v1"))
    (platform / "reader/index.html").write_text("bookself shell must not replace Desk\n")

    run_sync(root, platform)

    manifest = root / "reader/.bookself-runtime-files"
    offline_version = root / "reader/.bookself-offline-version"
    assert manifest.read_text().splitlines() == [
        "css/style.css",
        "js/app.js",
        "js/offline-cache.js",
        "vendor/marked.min.js",
        "sw.js",
    ]
    assert (root / "reader/js/app.js").read_text() == "canonical app v1\n"
    assert (root / "reader/js/offline-cache.js").read_text() == "canonical offline helper\n"
    assert (root / "reader/css/style.css").read_text() == "canonical css\n"
    assert (root / "reader/vendor/marked.min.js").read_text() == "canonical vendor\n"
    assert (root / "reader/sw.js").read_text() == worker("bookself-shell-v1")
    assert offline_version.read_text().splitlines() == [
        "cache=bookself-shell-v1",
        f"sw_sha256={hashlib.sha256((root / 'reader/sw.js').read_bytes()).hexdigest()}",
        "shell_entries=7",
    ]

    # Simulate an upstream removal/change. The next sync removes the stale
    # Bookself-owned helper, updates app.js and the cache generation together,
    # and preserves Desk-only overlays.
    (platform / "reader/js/offline-cache.js").unlink()
    (platform / "reader/js/app.js").write_text("canonical app v2\n")
    (platform / "reader/sw.js").write_text(worker("bookself-shell-v2", include_offline_helper=False))
    run_sync(root, platform)

    assert not (root / "reader/js/offline-cache.js").exists()
    assert (root / "reader/js/app.js").read_text() == "canonical app v2\n"
    assert "js/offline-cache.js" not in manifest.read_text().splitlines()
    assert offline_version.read_text().splitlines()[0] == "cache=bookself-shell-v2"
    assert offline_version.read_text().splitlines()[2] == "shell_entries=6"

    assert (root / "reader/index.html").read_text() == "desk shell\n"
    assert (root / "reader/manifest.webmanifest").read_text() == "desk manifest\n"
    assert (root / "reader/app-icon.svg").read_text() == "desk icon\n"
    assert (root / "reader/js/desk-local.js").read_text() == "desk js\n"
    assert (root / "reader/css/desk-local.css").read_text() == "desk css\n"
    assert (root / "books/keep.txt").read_text() == "manuscript state\n"

    # A service-worker shell entry without a local file is a broken sync, even
    # when every copied Bookself file itself compares byte-for-byte.
    good_version = offline_version.read_text()
    (platform / "reader/sw.js").write_text(
        worker("bookself-shell-v3", include_offline_helper=False, missing="./js/missing-shell.js")
    )
    try:
        run_sync(root, platform)
    except subprocess.CalledProcessError as exc:
        assert "offline shell asset missing after sync: ./js/missing-shell.js" in exc.stderr
    else:
        raise AssertionError("sync accepted a service-worker shell with a missing local asset")
    assert offline_version.read_text() == good_version

print("Desk Reader runtime sync contract: exact files, complete/versioned offline shell, Desk state preserved")
