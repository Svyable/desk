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


REMOTE = "https://svyable.github.io/bookself/reader/"
SHELF_RUNTIME = "https://svyable.github.io/shelf/reader/js/"

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

    (root / "reader/index.html").write_text(
        f'<link rel="stylesheet" href="{REMOTE}css/style.css?v=r11">\n'
        f'<script src="{REMOTE}vendor/marked.min.js"></script>\n'
        f'<script type="module" src="{REMOTE}js/app.js?v=r4"></script>\n'
        '<a href="https://svyable.github.io/shelf/reader/">Released Shelf</a>\n'
    )
    (root / "reader/manifest.webmanifest").write_text("desk manifest\n")
    (root / "reader/app-icon.svg").write_text("desk icon\n")
    (root / "reader/js/app-loader.js").write_text(
        "const canonicalAppUrl = 'https://svyable.github.io/bookself/reader/js/app.js?v=r4';\n"
        "export { canonicalAppUrl };\n"
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

    index = (root / "reader/index.html").read_text()
    loader = (root / "reader/js/app-loader.js").read_text()
    assert 'href="css/style.css?v=r11"' in index
    assert 'src="vendor/marked.min.js"' in index
    assert 'src="js/app.js?v=r4"' in index
    assert REMOTE not in index
    assert "new URL('./app.js', import.meta.url).href" in loader
    assert REMOTE not in loader
    assert 'href="https://svyable.github.io/shelf/reader/"' in index

    # Simulate an upstream removal/change. The next sync removes the stale
    # Bookself-owned helper, updates app.js and the cache generation together,
    # keeps the shell local-only, and preserves Desk-only overlays.
    (platform / "reader/js/offline-cache.js").unlink()
    (platform / "reader/js/app.js").write_text("canonical app v2\n")
    (platform / "reader/sw.js").write_text(worker("bookself-shell-v2", include_offline_helper=False))
    run_sync(root, platform)

    assert not (root / "reader/js/offline-cache.js").exists()
    assert (root / "reader/js/app.js").read_text() == "canonical app v2\n"
    assert "js/offline-cache.js" not in manifest.read_text().splitlines()
    assert offline_version.read_text().splitlines()[0] == "cache=bookself-shell-v2"
    assert offline_version.read_text().splitlines()[2] == "shell_entries=6"

    assert REMOTE not in (root / "reader/index.html").read_text()
    assert REMOTE not in (root / "reader/js/app-loader.js").read_text()
    assert (root / "reader/manifest.webmanifest").read_text() == "desk manifest\n"
    assert (root / "reader/app-icon.svg").read_text() == "desk icon\n"
    assert (root / "reader/js/desk-local.js").read_text() == "desk js\n"
    assert (root / "reader/css/desk-local.css").read_text() == "desk css\n"
    assert (root / "books/keep.txt").read_text() == "manuscript state\n"

    # Capture the last-known-good state. Both a personal-Shelf runtime regression
    # and a broken offline shell must be rejected before any live Reader files or
    # ownership/version metadata are replaced.
    good_app = (root / "reader/js/app.js").read_text()
    good_worker = (root / "reader/sw.js").read_text()
    good_index = (root / "reader/index.html").read_text()
    good_loader = (root / "reader/js/app-loader.js").read_text()
    good_manifest = manifest.read_text()
    good_version = offline_version.read_text()
    good_desk_js = (root / "reader/js/desk-local.js").read_text()
    good_desk_css = (root / "reader/css/desk-local.css").read_text()

    # Canonical Bookself is the only shared runtime source. A future upstream
    # regression that points executable Reader code at the personal Shelf must
    # fail transactionally while ordinary navigation to the released Shelf stays allowed.
    (platform / "reader/js/app.js").write_text(
        f"import '{SHELF_RUNTIME}bad-runtime.js';\ncanonical app v3 must not land\n"
    )
    (platform / "reader/sw.js").write_text(worker("bookself-shell-v3", include_offline_helper=False))
    try:
        run_sync(root, platform)
    except subprocess.CalledProcessError as exc:
        assert "depends on personal Shelf runtime" in exc.stdout
    else:
        raise AssertionError("sync accepted executable Reader code from personal Shelf")

    assert (root / "reader/js/app.js").read_text() == good_app
    assert (root / "reader/sw.js").read_text() == good_worker
    assert (root / "reader/index.html").read_text() == good_index
    assert (root / "reader/js/app-loader.js").read_text() == good_loader
    assert manifest.read_text() == good_manifest
    assert offline_version.read_text() == good_version
    assert (root / "reader/js/desk-local.js").read_text() == good_desk_js
    assert (root / "reader/css/desk-local.css").read_text() == good_desk_css
    assert (root / "books/keep.txt").read_text() == "manuscript state\n"

    # A service-worker shell entry without a local file is also a broken sync,
    # even when every copied Bookself file itself compares byte-for-byte.
    (platform / "reader/js/app.js").write_text("canonical app v4 must not land\n")
    (platform / "reader/sw.js").write_text(
        worker("bookself-shell-v4", include_offline_helper=False, missing="./js/missing-shell.js")
    )
    try:
        run_sync(root, platform)
    except subprocess.CalledProcessError as exc:
        assert "offline shell asset missing after sync: ./js/missing-shell.js" in exc.stderr
    else:
        raise AssertionError("sync accepted a service-worker shell with a missing local asset")

    assert (root / "reader/js/app.js").read_text() == good_app
    assert (root / "reader/sw.js").read_text() == good_worker
    assert (root / "reader/index.html").read_text() == good_index
    assert (root / "reader/js/app-loader.js").read_text() == good_loader
    assert manifest.read_text() == good_manifest
    assert offline_version.read_text() == good_version
    assert (root / "reader/js/desk-local.js").read_text() == good_desk_js
    assert (root / "reader/css/desk-local.css").read_text() == good_desk_css
    assert (root / "books/keep.txt").read_text() == "manuscript state\n"

print("Desk Reader runtime sync contract: staged local-only verification, no Shelf runtime, exact files, complete/versioned offline shell, Desk state preserved")
