#!/bin/sh
# Sync this Desk to Bookself's canonical shared Reader runtime without replacing
# Desk-owned shell, identity, adapters, books, catalog/release state, or authoring UI.
#
# This is the public update command for humans and agents.
# Usage: scripts/sync-bookself.sh [path-to-bookself]
set -eu

ROOT=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
PLATFORM=${1:-"$ROOT/../bookself"}
SYNC="$ROOT/scripts/sync-reader-runtime.sh"

if [ ! -f "$SYNC" ]; then
  echo "Desk Reader runtime sync implementation not found: $SYNC" >&2
  exit 1
fi

DESK_ROOT="$ROOT" sh "$SYNC" "$PLATFORM"

echo
echo "Desk is now synced to Bookself Reader runtime from: $PLATFORM"
echo "Review the reader/ diff, run local checks, then commit it in this Desk."
echo "Desk-owned shell/identity/overrides and authoring UI are preserved."
echo "No GitHub Actions or hosted build is involved."
