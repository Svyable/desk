#!/bin/sh
# Bootstrap this Desk with Bookself's canonical shared Reader runtime without
# replacing Desk-owned shell, identity, adapters, books, or authoring UI.
#
# Usage: scripts/bootstrap-ui.sh [path-to-bookself]
set -eu

ROOT=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
PLATFORM=${1:-"$ROOT/../bookself"}
SYNC="$ROOT/scripts/sync-reader-runtime.sh"

if [ ! -f "$SYNC" ]; then
  echo "Desk Reader runtime sync helper not found: $SYNC" >&2
  exit 1
fi

DESK_ROOT="$ROOT" sh "$SYNC" "$PLATFORM"

echo
echo "Desk shared Reader runtime is now copied locally from: $PLATFORM"
echo "Review the reader/ diff, run local checks, then commit it in this Desk."
echo "Desk-owned shell/identity/overrides and authoring UI are preserved."
echo "No GitHub Actions or hosted build is involved."
