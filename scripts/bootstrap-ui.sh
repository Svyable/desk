#!/bin/sh
# Bootstrap this older Desk instance with Bookself's shared Reader and Publishing Desk.
# New Desk instances created with Bookself's stamp-instance.sh already include
# these directories; this helper is for an older instance that predates that rule.
#
# Usage: scripts/bootstrap-ui.sh [path-to-bookself]
set -eu

ROOT=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
PLATFORM=${1:-"$ROOT/../bookself"}
SYNC="$PLATFORM/scripts/sync-ui.sh"

if [ ! -f "$SYNC" ]; then
  echo "Bookself sync script not found: $SYNC" >&2
  echo "usage: scripts/bootstrap-ui.sh [path-to-bookself]" >&2
  exit 1
fi

sh "$SYNC" "$ROOT"

echo
echo "Desk shared UI is now copied locally from: $PLATFORM"
echo "Review the new reader/ and desk/ files, then commit them in this Desk."
echo "No GitHub Actions or hosted build is involved."
