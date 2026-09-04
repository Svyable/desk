#!/usr/bin/env python3
"""Deterministic tests for the local Desk catalog refresh command."""
from __future__ import annotations

import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).with_name("catalog-manifest.py")


class CatalogManifestRefreshTest(unittest.TestCase):
    def test_write_refreshes_dashboard_before_manifest(self) -> None:
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            (root / "books" / "alpha").mkdir(parents=True)
            (root / "books" / "beta").mkdir(parents=True)
            scripts = root / "scripts"
            scripts.mkdir()
            (scripts / "catalog.py").write_text(
                "from pathlib import Path\n"
                "Path(__file__).parents[1].joinpath('dashboard-refreshed').write_text('yes')\n",
                encoding="utf-8",
            )

            result = subprocess.run(
                [sys.executable, str(SCRIPT), "--root", str(root), "--write"],
                check=False,
                capture_output=True,
                text=True,
            )

            self.assertEqual(result.returncode, 0, result.stderr or result.stdout)
            self.assertTrue((root / "dashboard-refreshed").is_file())
            self.assertEqual(
                json.loads((root / "catalog.json").read_text(encoding="utf-8")),
                {"version": 1, "books": ["alpha", "beta"]},
            )

    def test_dashboard_failure_does_not_rewrite_manifest(self) -> None:
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            (root / "books" / "alpha").mkdir(parents=True)
            scripts = root / "scripts"
            scripts.mkdir()
            (scripts / "catalog.py").write_text("raise SystemExit(7)\n", encoding="utf-8")
            original = '{"version": 1, "books": []}\n'
            (root / "catalog.json").write_text(original, encoding="utf-8")

            result = subprocess.run(
                [sys.executable, str(SCRIPT), "--root", str(root), "--write"],
                check=False,
                capture_output=True,
                text=True,
            )

            self.assertEqual(result.returncode, 1)
            self.assertEqual((root / "catalog.json").read_text(encoding="utf-8"), original)
            self.assertIn("not written because catalog.py --write failed", result.stdout)


if __name__ == "__main__":
    unittest.main()
