#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_SYNC = ROOT / "scripts" / "sync-bookself.sh"
LEGACY_BOOTSTRAP = ROOT / "scripts" / "bootstrap-ui.sh"
RETIRED_INTERNAL = ROOT / "scripts" / "sync-reader-runtime.sh"
AGENTS = ROOT / "AGENTS.md"

assert PUBLIC_SYNC.is_file(), "Desk should expose one Bookself sync command"
assert not LEGACY_BOOTSTRAP.exists(), "retired bootstrap-ui.sh should not return"
assert not RETIRED_INTERNAL.exists(), "Bookself sync should not hide a second runtime-sync entrypoint"

source = PUBLIC_SYNC.read_text(encoding="utf-8")
agents = AGENTS.read_text(encoding="utf-8")

assert 'const SHELL = [' in source, "Bookself service-worker SHELL should define the installable runtime"
assert 'find js css vendor -type f' not in source, "sync should not mirror upstream source/test directories wholesale"
assert 'cp -R "$PLATFORM/reader/js/."' not in source, "sync should copy declared runtime files, not the whole JS tree"
assert '--require-local-bookself' in source
assert 'sync-reader-runtime.sh' not in source
assert 'scripts/sync-bookself.sh ../bookself' in agents
assert 'scripts/bootstrap-ui.sh' not in agents
assert 'scripts/sync-reader-runtime.sh' not in agents

print("Bookself sync contract: one command, service-worker-declared runtime, transactional promotion")
