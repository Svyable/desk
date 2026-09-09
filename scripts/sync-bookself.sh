#!/bin/sh
# Sync this Desk to Bookself's canonical shared Reader runtime without replacing
# Desk-owned shell, identity, adapters, books, catalog/release state, or authoring UI.
#
# This is the single Bookself update command for humans, agents, and maintainers.
# Usage: scripts/sync-bookself.sh [path-to-bookself]
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname "$0")" && pwd)
ROOT=${DESK_ROOT:-$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)}
PLATFORM=${1:-"$ROOT/../bookself"}
READER="$ROOT/reader"
MANIFEST="$READER/.bookself-runtime-files"
OFFLINE_VERSION="$READER/.bookself-offline-version"
BOUNDARY_CHECK="$SCRIPT_DIR/check-reader-runtime-boundary.py"

require_path() {
  if [ ! -e "$1" ]; then
    echo "Bookself Reader runtime path not found: $1" >&2
    exit 1
  fi
}

require_path "$PLATFORM/reader/sw.js"
require_path "$BOUNDARY_CHECK"

# Build the next effective Reader tree away from the live Reader first. A bad
# upstream checkout must fail verification without partially replacing the
# last-known-good local runtime.
stage=$(mktemp -d "${TMPDIR:-/tmp}/desk-reader-sync.XXXXXX")
trap 'rm -rf "$stage"' EXIT HUP INT TERM
candidate="$stage/reader"
mkdir -p "$candidate"
if [ -d "$READER" ]; then
  cp -R "$READER/." "$candidate/"
fi

# Remove only files that the previous Bookself runtime sync explicitly owned.
# Desk-only adapters and overrides are intentionally absent from this manifest.
if [ -f "$MANIFEST" ]; then
  while IFS= read -r relative; do
    case "$relative" in
      js/*|css/*|vendor/*|sw.js) rm -f "$candidate/$relative" ;;
      '') ;;
      *)
        echo "Refusing unsafe Reader runtime manifest entry: $relative" >&2
        exit 1
        ;;
    esac
  done < "$MANIFEST"
fi

manifest_tmp="$stage/bookself-runtime-files"
offline_version_tmp="$stage/bookself-offline-version"

# Bookself's service-worker SHELL is the deployable Reader contract. Sync the
# runtime files it declares instead of mirroring whole source directories, so
# upstream tests/dev-only files never become part of a Desk installation.
python3 - "$PLATFORM/reader/sw.js" "$manifest_tmp" <<'PY'
from pathlib import Path
import sys

worker_path = Path(sys.argv[1])
manifest_path = Path(sys.argv[2])
source = worker_path.read_text(encoding="utf-8")
shell = []
in_shell = False

for raw in source.splitlines():
    line = raw.strip()
    if line == "const SHELL = [":
        in_shell = True
        continue
    if in_shell and line == "];":
        break
    if not in_shell or not line.startswith("'./"):
        continue
    entry = line.rstrip(",")
    if len(entry) >= 2 and entry[0] == entry[-1] == "'":
        shell.append(entry[1:-1])

runtime = []
for entry in shell:
    relative = entry[2:]
    if relative.startswith(("js/", "css/", "vendor/")):
        runtime.append(relative)

if "js/app.js" not in runtime:
    raise SystemExit("Desk Reader sync failed: Bookself service-worker SHELL does not declare js/app.js")
if len(runtime) != len(set(runtime)):
    raise SystemExit("Desk Reader sync failed: duplicate runtime entries in Bookself service-worker SHELL")

manifest_path.write_text(
    "\n".join(sorted(runtime) + ["sw.js"]) + "\n",
    encoding="utf-8",
)
PY

while IFS= read -r relative; do
  source="$PLATFORM/reader/$relative"
  target="$candidate/$relative"
  require_path "$source"
  mkdir -p "$(dirname "$target")"
  cp "$source" "$target"
  if ! cmp -s "$source" "$target"; then
    echo "Desk Reader runtime verification failed: $relative" >&2
    exit 1
  fi
done < "$manifest_tmp"

# A successful sync must also make the Desk-owned shell use the local runtime it
# just verified. Keep this deliberately narrow: rewrite only HTML href/src
# attributes under the canonical Bookself Reader runtime prefix and the one
# canonicalAppUrl assignment. No module bodies or import specifiers are rewritten.
python3 - "$candidate" <<'PY'
from pathlib import Path
import sys

reader = Path(sys.argv[1])
prefix = "https://svyable.github.io/bookself/reader/"
index_path = reader / "index.html"
loader_path = reader / "js/app-loader.js"

if not index_path.exists():
    raise SystemExit("Desk Reader local cutover failed: reader/index.html not found")
if not loader_path.exists():
    raise SystemExit("Desk Reader local cutover failed: reader/js/app-loader.js not found")

index = index_path.read_text(encoding="utf-8")
for attribute in ('href="', 'src="'):
    index = index.replace(attribute + prefix, attribute)
index_path.write_text(index, encoding="utf-8")

loader = loader_path.read_text(encoding="utf-8")
remote_prefix = "const canonicalAppUrl = 'https://svyable.github.io/bookself/reader/js/app.js"
local_app = "const canonicalAppUrl = new URL('./app.js', import.meta.url).href;"
lines = loader.splitlines()
matches = [i for i, line in enumerate(lines) if line.startswith(remote_prefix) and line.endswith("';")]
if len(matches) > 1:
    raise SystemExit("Desk Reader local cutover failed: multiple canonicalAppUrl assignments found")
if matches:
    lines[matches[0]] = local_app
    loader = "\n".join(lines) + ("\n" if loader.endswith("\n") else "")
loader_path.write_text(loader, encoding="utf-8")
PY

# Offline/PWA correctness is part of the sync contract, not a later browser
# surprise. Verify every service-worker shell entry against the complete
# candidate Reader (canonical runtime plus preserved Desk shell) and stamp the
# exact cache generation plus worker digest for reviewable diffs.
python3 - "$candidate/sw.js" "$candidate" "$offline_version_tmp" <<'PY'
from hashlib import sha256
from pathlib import Path
import sys

worker_path = Path(sys.argv[1])
reader = Path(sys.argv[2])
version_path = Path(sys.argv[3])
source = worker_path.read_text(encoding="utf-8")
cache = None
shell = []
in_shell = False

for raw in source.splitlines():
    line = raw.strip()
    if line.startswith("const CACHE = '") and line.endswith("';"):
        cache = line[len("const CACHE = '"):-2]
        continue
    if line == "const SHELL = [":
        in_shell = True
        continue
    if in_shell and line == "];":
        in_shell = False
        continue
    if not in_shell or not line.startswith("'./"):
        continue
    entry = line.rstrip(",")
    if len(entry) >= 2 and entry[0] == entry[-1] == "'":
        shell.append(entry[1:-1])

if not cache:
    raise SystemExit("Desk Reader offline verification failed: service worker CACHE generation not found")
if not shell:
    raise SystemExit("Desk Reader offline verification failed: service worker SHELL entries not found")

missing = []
for entry in shell:
    relative = entry[2:]
    target = reader if not relative else reader / relative
    if not target.exists():
        missing.append(entry)

if missing:
    for entry in missing:
        print(f"Desk Reader offline shell asset missing after sync: {entry}", file=sys.stderr)
    raise SystemExit(1)

version_path.write_text(
    f"cache={cache}\n"
    f"sw_sha256={sha256(worker_path.read_bytes()).hexdigest()}\n"
    f"shell_entries={len(shell)}\n",
    encoding="utf-8",
)
PY

# A completed sync is fully local: Bookself is the source checkout, not a
# network runtime provider, and personal Shelf remains only a publication
# destination/navigation target. Validate the complete staged Reader before
# promotion so any remote runtime bridge leaves the live Reader untouched.
python3 "$BOUNDARY_CHECK" "$stage" --require-local-bookself

# Candidate verification succeeded. Replace only the runtime-bearing trees and
# worker, then publish ownership/version metadata last. reader/index.html remains
# Desk-owned, but its verified local-runtime cutover is promoted atomically with
# the runtime so the shell can never point at files that failed verification.
rm -rf "$READER/js" "$READER/css" "$READER/vendor"
mkdir -p "$READER"
cp -R "$candidate/js" "$READER/js"
cp -R "$candidate/css" "$READER/css"
cp -R "$candidate/vendor" "$READER/vendor"
cp "$candidate/sw.js" "$READER/sw.js"
cp "$candidate/index.html" "$READER/index.html"
cp "$manifest_tmp" "$MANIFEST"
cp "$offline_version_tmp" "$OFFLINE_VERSION"

cat <<EOF
Synced and verified canonical Bookself Reader runtime -> $READER/
Recorded the exact service-worker-declared Bookself runtime in
reader/.bookself-runtime-files; upstream tests/dev-only files are not installed.
Cut Desk-owned reader/index.html and app-loader.js over to the verified local
Bookself runtime.
Verified the local offline shell and recorded its cache generation in
reader/.bookself-offline-version.
Verified before promotion that every Bookself Reader runtime dependency is local
and Desk does not execute Reader runtime assets from personal Shelf.
Preserved Desk-owned manifest.webmanifest, app-icon.svg, and Desk-only js/css
overlay files.
A failed upstream verification leaves the live Reader runtime unchanged.
No books, catalog data, release state, or hosted CI are involved.
EOF
