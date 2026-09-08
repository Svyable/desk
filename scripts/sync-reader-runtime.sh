#!/bin/sh
# Merge Bookself's canonical Reader runtime into this Desk while preserving
# Desk-owned shell/identity/override files.
set -eu

ROOT=${DESK_ROOT:-$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)}
PLATFORM=${1:-"$ROOT/../bookself"}

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

mkdir -p "$ROOT/reader/js" "$ROOT/reader/css" "$ROOT/reader/vendor"
cp -R "$PLATFORM/reader/js/." "$ROOT/reader/js/"
cp -R "$PLATFORM/reader/css/." "$ROOT/reader/css/"
cp -R "$PLATFORM/reader/vendor/." "$ROOT/reader/vendor/"
cp "$PLATFORM/reader/sw.js" "$ROOT/reader/sw.js"

cat <<EOF
Synced canonical Bookself Reader runtime -> $ROOT/reader/
Preserved Desk-owned reader/index.html, manifest.webmanifest, app-icon.svg,
and Desk-only js/css overlay files.
No books, catalog data, release state, or hosted CI are involved.
EOF
