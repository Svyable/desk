#!/bin/sh
# Bootstrap this legacy Binder with Bookself's shared Reader and Publishing Desk.
# New Binder instances created with Bookself's stamp-instance.sh already include
# these directories; this helper is for an older Binder that predates that rule.
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
echo "Binder shared UI is now copied locally from: $PLATFORM"
echo "Review the new reader/ and desk/ files, then commit them in this Binder."
echo "No GitHub Actions or hosted build is involved."
