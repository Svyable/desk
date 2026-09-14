#!/bin/sh
# Update this Desk from Bookself without duplicating Bookself's sync policy here.
# Usage: scripts/sync-bookself.sh [path-to-bookself]
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname "$0")" && pwd)
ROOT=${DESK_ROOT:-$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)}
PLATFORM=${1:-"$ROOT/../bookself"}
SYNC="$PLATFORM/scripts/sync-ui.py"

if [ ! -f "$SYNC" ]; then
  echo "Bookself sync tool not found at $SYNC" >&2
  exit 1
fi

exec python3 "$SYNC" --desk-safe "$ROOT"
