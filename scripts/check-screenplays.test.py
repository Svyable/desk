#!/usr/bin/env python3
from __future__ import annotations

import json
import shutil
import subprocess
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).with_name("check-screenplays.py")


class ScreenplayCheckTests(unittest.TestCase):
    def make_root(self) -> Path:
        root = Path(tempfile.mkdtemp())
        self.addCleanup(lambda: shutil.rmtree(root, ignore_errors=True))
        template = root / "screenplays" / "_TEMPLATE"
        (template / "script").mkdir(parents=True)
        (template / "episodes").mkdir()
        for rel in ("README.md", "treatment.md", "bible.md", "continuity.md"):
            (template / rel).write_text("template\n", encoding="utf-8")
        (template / "script" / "main.fountain").write_text("Title: TEMPLATE\nAuthor: Sven Hardy Benson\n\nINT. ROOM - DAY\n", encoding="utf-8")
        (template / "episodes" / "_EPISODE_TEMPLATE.fountain").write_text("Title: TEMPLATE\nAuthor: Sven Hardy Benson\n\nINT. ROOM - DAY\n", encoding="utf-8")
        (root / "books").mkdir()
        return root

    def run_check(self, root: Path) -> tuple[subprocess.CompletedProcess[str], dict]:
        proc = subprocess.run(
            ["python3", str(SCRIPT), "--root", str(root), "--json"],
            check=False,
            capture_output=True,
            text=True,
        )
        return proc, json.loads(proc.stdout)

    def write_project(self, root: Path, slug: str, fmt: str, status: str, source: str = "original") -> Path:
        project = root / "screenplays" / slug
        project.mkdir(parents=True)
        (project / "README.md").write_text(
            f"# Test Project\n\n"
            f"- **Slug:** {slug}\n"
            f"- **Title:** Test Project\n"
            f"- **Format:** {fmt}\n"
            f"- **Status:** {status}\n"
            f"- **Source:** {source}\n"
            f"- **Logline:** Someone wants something and meets resistance.\n",
            encoding="utf-8",
        )
        return project

    def test_valid_feature(self) -> None:
        root = self.make_root()
        project = self.write_project(root, "test-project", "feature", "drafting")
        (project / "script").mkdir()
        (project / "script" / "main.fountain").write_text(
            "Title: Test Project\nCredit: Written by\nAuthor: Sven Hardy Benson\n\n"
            "INT. KITCHEN - NIGHT\n\nA glass vibrates on the counter.\n\nMARA\nDon't answer it.\n",
            encoding="utf-8",
        )
        proc, report = self.run_check(root)
        self.assertEqual(proc.returncode, 0, proc.stdout + proc.stderr)
        self.assertEqual(report["errors"], 0)

    def test_drafting_series_requires_episode(self) -> None:
        root = self.make_root()
        self.write_project(root, "test-series", "series", "drafting")
        proc, report = self.run_check(root)
        self.assertNotEqual(proc.returncode, 0)
        self.assertTrue(any("require at least one" in item["message"] for item in report["findings"]))

    def test_adaptation_source_must_exist(self) -> None:
        root = self.make_root()
        self.write_project(root, "adaptation", "feature", "development", "books/missing-book/")
        proc, report = self.run_check(root)
        self.assertNotEqual(proc.returncode, 0)
        self.assertTrue(any("missing book" in item["message"] for item in report["findings"]))

    def test_episode_filename_contract(self) -> None:
        root = self.make_root()
        project = self.write_project(root, "test-series", "limited-series", "revision")
        episodes = project / "episodes"
        episodes.mkdir()
        (episodes / "pilot.fountain").write_text(
            "Title: Pilot\nAuthor: Sven Hardy Benson\n\nEXT. ROAD - DAWN\n\nA bus idles.\n\nDRIVER\nLast stop.\n",
            encoding="utf-8",
        )
        proc, report = self.run_check(root)
        self.assertNotEqual(proc.returncode, 0)
        self.assertTrue(any("episode filename" in item["message"] for item in report["findings"]))


if __name__ == "__main__":
    unittest.main()
