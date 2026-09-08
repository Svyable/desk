#!/bin/sh
# Merge Bookself's canonical Reader runtime into this Desk while preserving
# Desk-owned shell/identity/override files.
set -eu

ROOT=${DESK_ROOT:-$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)}
PLATFORM=${1:-"$ROOT/../bookself"}
READER="$ROOT/reader"
MANIFEST="$READER/.bookself-runtime-files"
OFFLINE_VERSION="$READER/.bookself-offline-version"

require_path() {
  if [ ! -e "$1" ]; then
    echo "Bookself Reader runtime path not found: $1" >&2
    exit 1
  fi
}

require_path "$PLATFORM/reader/js"
require_path "$PLATFORM/reader/css"
require_path "$PLATFORM/reader/vendor"
require_path "$PLATFORM/reader/sw.js"

# Remove only files that the previous Bookself runtime sync explicitly owned.
# Desk-only adapters and overrides are intentionally absent from this manifest.
if [ -f "$MANIFEST" ]; then
  while IFS= read -r relative; do
    case "$relative" in
      js/*|css/*|vendor/*|sw.js) rm -f "$READER/$relative" ;;
      '') ;;
      *)
        echo "Refusing unsafe Reader runtime manifest entry: $relative" >&2
        exit 1
        ;;
    esac
  done < "$MANIFEST"
fi

mkdir -p "$READER/js" "$READER/css" "$READER/vendor"
cp -R "$PLATFORM/reader/js/." "$READER/js/"
cp -R "$PLATFORM/reader/css/." "$READER/css/"
cp -R "$PLATFORM/reader/vendor/." "$READER/vendor/"
cp "$PLATFORM/reader/sw.js" "$READER/sw.js"

manifest_tmp="$MANIFEST.tmp"
offline_version_tmp="$OFFLINE_VERSION.tmp"
(
  cd "$PLATFORM/reader"
  find js css vendor -type f -print | LC_ALL=C sort
  printf '%s\n' sw.js
) > "$manifest_tmp"

while IFS= read -r relative; do
  if ! cmp -s "$PLATFORM/reader/$relative" "$READER/$relative"; then
    echo "Desk Reader runtime verification failed: $relative" >&2
    rm -f "$manifest_tmp" "$offline_version_tmp"
    exit 1
  fi
done < "$manifest_tmp"

# Offline/PWA correctness is part of the sync contract, not a later browser
# surprise. Verify every local service-worker shell entry exists after the copy
# and stamp the exact cache generation plus worker digest for reviewable diffs.
python3 - "$READER/sw.js" "$READER" "$offline_version_tmp" <<'PY'
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

mv "$manifest_tmp" "$MANIFEST"
mv "$offline_version_tmp" "$OFFLINE_VERSION"

cat <<EOF
Synced and verified canonical Bookself Reader runtime -> $READER/
Recorded exact Bookself-owned runtime files in reader/.bookself-runtime-files.
Verified the local offline shell and recorded its cache generation in
reader/.bookself-offline-version.
Preserved Desk-owned reader/index.html, manifest.webmanifest, app-icon.svg,
and Desk-only js/css overlay files.
No books, catalog data, release state, or hosted CI are involved.
EOF
