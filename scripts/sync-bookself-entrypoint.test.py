#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_SYNC = ROOT / "scripts" / "sync-bookself.sh"
LEGACY_BOOTSTRAP = ROOT / "scripts" / "bootstrap-ui.sh"
INTERNAL_SYNC = ROOT / "scripts" / "sync-reader-runtime.sh"
AGENTS = ROOT / "AGENTS.md"

assert PUBLIC_SYNC.is_file(), "Desk should expose one public Bookself sync command"
assert not LEGACY_BOOTSTRAP.exists(), "retired bootstrap-ui.sh should not return"
assert INTERNAL_SYNC.is_file(), "transactional Reader sync implementation should remain available internally"

public_source = PUBLIC_SYNC.read_text(encoding="utf-8")
agents = AGENTS.read_text(encoding="utf-8")

assert "sync-reader-runtime.sh" in public_source, "public sync command should delegate to the proven transactional implementation"
assert "scripts/sync-bookself.sh ../bookself" in agents, "agent instructions should teach the public sync command"
assert "scripts/bootstrap-ui.sh" not in agents, "agent instructions should not teach the retired bootstrap verb"

print("Bookself sync entrypoint contract: one public command, transactional implementation retained")
