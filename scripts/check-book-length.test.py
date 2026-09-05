#!/usr/bin/env python3
from __future__ import annotations

import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).with_name("check-book-length.py")


class BookLengthCheckTest(unittest.TestCase):
    def make_book(self, root: Path, chapter_words: int = 4000) -> Path:
        manuscript = root / "books" / "test-book" / "manuscript"
        manuscript.mkdir(parents=True)
        for number in range(1, 19):
            (manuscript / f"ch{number:02d}-chapter.md").write_text(
                "# Chapter\n\n" + ("word " * chapter_words),
                encoding="utf-8",
            )
        (manuscript / "front-matter.md").write_text(
            "front " * 10000,
            encoding="utf-8",
        )
        (manuscript / "back-matter.md").write_text(
            "back " * 10000,
            encoding="utf-8",
        )
        return manuscript

    def run_check(self, root: Path) -> subprocess.CompletedProcess[str]:
        return subprocess.run(
            [
                sys.executable,
                str(SCRIPT),
                "test-book",
                "--root",
                str(root),
                "--json",
            ],
            check=False,
            capture_output=True,
            text=True,
        )

    def test_counts_only_chapter_files(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            self.make_book(root)
            result = self.run_check(root)
            self.assertEqual(result.returncode, 0, result.stderr)
            report = json.loads(result.stdout)
            self.assertTrue(report["healthy"])
            self.assertEqual(report["chapter_count"], 18)
            self.assertEqual(report["chapter_only_words"], 72018)
            self.assertEqual(report["target_band"]["chapters_in_band"], 18)

    def test_fails_when_one_chapter_is_under_floor(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            manuscript = self.make_book(root)
            (manuscript / "ch01-chapter.md").write_text(
                "# Chapter\n\n" + ("word " * 2998),
                encoding="utf-8",
            )
            result = self.run_check(root)
            self.assertEqual(result.returncode, 1)
            report = json.loads(result.stdout)
            self.assertFalse(report["healthy"])
            self.assertTrue(
                any("ch01-chapter.md" in error for error in report["errors"])
            )


if __name__ == "__main__":
    unittest.main()
