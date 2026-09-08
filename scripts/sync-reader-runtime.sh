#!/bin/sh
# Merge Bookself's canonical Reader runtime into this Desk while preserving
# Desk-owned shell/identity/override files.
set -eu

ROOT=${DESK_ROOT:-$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)}
PLATFORM=${1:-"$ROOT/../bookself"}
READER="$ROOT/reader"
MANIFEST="$READER/.bookself-runtime-files"

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
(
  cd "$PLATFORM/reader"
  find js css vendor -type f -print | LC_ALL=C sort
  printf '%s\n' sw.js
) > "$manifest_tmp"

while IFS= read -r relative; do
  if ! cmp -s "$PLATFORM/reader/$relative" "$READER/$relative"; then
    echo "Desk Reader runtime verification failed: $relative" >&2
    rm -f "$manifest_tmp"
    exit 1
  fi
done < "$manifest_tmp"

mv "$manifest_tmp" "$MANIFEST"

cat <<EOF
Synced and verified canonical Bookself Reader runtime -> $READER/
Recorded exact Bookself-owned runtime files in reader/.bookself-runtime-files.
Preserved Desk-owned reader/index.html, manifest.webmanifest, app-icon.svg,
and Desk-only js/css overlay files.
No books, catalog data, release state, or hosted CI are involved.
EOF
