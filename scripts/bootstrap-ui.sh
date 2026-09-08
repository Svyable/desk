#!/bin/sh
# Bootstrap this Desk with Bookself's canonical shared Reader runtime without
# replacing Desk-owned shell, identity, adapters, books, or authoring UI.
#
# Usage: scripts/bootstrap-ui.sh [path-to-bookself]
set -eu

ROOT=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
PLATFORM=${1:-"$ROOT/../bookself"}
SYNC="$ROOT/scripts/sync-reader-runtime.sh"
BOUNDARY_CHECK="$ROOT/scripts/check-reader-runtime-boundary.py"

if [ ! -f "$SYNC" ]; then
  echo "Desk Reader runtime sync helper not found: $SYNC" >&2
  exit 1
fi
if [ ! -f "$BOUNDARY_CHECK" ]; then
  echo "Desk Reader runtime boundary checker not found: $BOUNDARY_CHECK" >&2
  exit 1
fi

DESK_ROOT="$ROOT" sh "$SYNC" "$PLATFORM"
python3 "$BOUNDARY_CHECK" "$ROOT"

echo
echo "Desk shared Reader runtime is now copied locally from: $PLATFORM"
echo "Review the reader/ diff, run local checks, then commit it in this Desk."
echo "Desk-owned shell/identity/overrides and authoring UI are preserved."
echo "Verified that Desk does not execute Reader runtime assets from personal Shelf."
echo "No GitHub Actions or hosted build is involved."
