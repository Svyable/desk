#!/usr/bin/env python3
from __future__ import annotations

import json
import runpy
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).with_name("release.py")
release = runpy.run_path(str(SCRIPT))
upsert_feedback_option = release["upsert_feedback_option"]
prepare_release_provenance = release["prepare_release_provenance"]
normalize_shelf_reader_links = release["normalize_shelf_reader_links"]
ReleaseError = release["ReleaseError"]


SAMPLE = """name: Chapter feedback
body:
  - type: dropdown
    id: book
    attributes:
      label: Book
      options:
        - commit
        - open-source
        - robust
    validations:
      required: true
  - type: dropdown
    id: kind
    attributes:
      options:
        - Typo
        - Clarity
"""


class FeedbackRegistrationTest(unittest.TestCase):
    def test_adds_slug_in_book_options_only(self) -> None:
        updated, action = upsert_feedback_option(SAMPLE, "neuralase")
        self.assertEqual(action, "added")
        self.assertIn(
            "        - commit\n"
            "        - neuralase\n"
            "        - open-source\n",
            updated,
        )
        self.assertEqual(updated.count("- neuralase"), 1)
        self.assertIn("        - Typo\n        - Clarity\n", updated)

    def test_is_idempotent(self) -> None:
        once, first_action = upsert_feedback_option(SAMPLE, "neuralase")
        twice, second_action = upsert_feedback_option(once, "neuralase")
        self.assertEqual(first_action, "added")
        self.assertEqual(second_action, "unchanged")
        self.assertEqual(twice, once)


class ReleaseProvenanceTest(unittest.TestCase):
    def make_fixture(self, root: Path) -> tuple[Path, Path]:
        desk = root / "desk"
        shelf = root / "shelf"
        for base, role, repo in ((desk, "desk", "desk"), (shelf, "shelf", "shelf")):
            (base / "books" / "example").mkdir(parents=True)
            (base / "imprint.json").write_text(
                json.dumps({
                    "role": role,
                    "github": {"owner": "Svyable", "repo": repo},
                }),
                encoding="utf-8",
            )
        (desk / "books/example/README.md").write_text("# Example\nStatus: Draft\n", encoding="utf-8")
        (shelf / "books/example/README.md").write_text("# Example\nStatus: Published\n", encoding="utf-8")
        payload = "# Chapter\n\nIdentical authored payload.\n"
        (desk / "books/example/chapter.md").write_text(payload, encoding="utf-8")
        (shelf / "books/example/chapter.md").write_text(payload, encoding="utf-8")
        return desk, shelf

    def test_records_source_commit_and_payload_digest(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            desk, shelf = self.make_fixture(Path(temp))
            source_commit = "a" * 40
            relative = prepare_release_provenance(desk, shelf, "example", source_commit)
            self.assertEqual(relative, "books/example/release.json")
            data = json.loads((shelf / relative).read_text(encoding="utf-8"))
            self.assertEqual(data["schema"], "svyable-release-v1")
            self.assertEqual(data["source"]["owner"], "Svyable")
            self.assertEqual(data["source"]["repo"], "desk")
            self.assertEqual(data["source"]["commit"], source_commit)
            self.assertEqual(data["source"]["path"], "books/example")
            self.assertEqual(data["destination"]["repo"], "shelf")
            self.assertEqual(data["payload"]["algorithm"], "sha256-tree-v1")
            self.assertRegex(data["payload"]["digest"], r"^[0-9a-f]{64}$")
            self.assertEqual(data["payload"]["files"], 1)

    def test_refuses_provenance_when_shelf_payload_drifted(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            desk, shelf = self.make_fixture(Path(temp))
            (shelf / "books/example/chapter.md").write_text("drifted\n", encoding="utf-8")
            with self.assertRaisesRegex(ReleaseError, "no longer byte-matches"):
                prepare_release_provenance(desk, shelf, "example", "b" * 40)


class ReaderLinkNormalizationTest(unittest.TestCase):
    def test_invokes_shelf_guard_and_prints_result(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            shelf = Path(temp) / "shelf"
            scripts = shelf / "scripts"
            scripts.mkdir(parents=True)
            (scripts / "sync-reader-links.py").write_text(
                '#!/usr/bin/env python3\nprint("1 publication README updated")\n',
                encoding="utf-8",
            )
            self.assertEqual(normalize_shelf_reader_links(shelf), 0)

    def test_fails_when_shelf_guard_missing(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            shelf = Path(temp) / "shelf"
            shelf.mkdir()
            with self.assertRaisesRegex(ReleaseError, "canonical reader-link guard not found"):
                normalize_shelf_reader_links(shelf)

    def test_fails_when_shelf_guard_rejects(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            shelf = Path(temp) / "shelf"
            scripts = shelf / "scripts"
            scripts.mkdir(parents=True)
            (scripts / "sync-reader-links.py").write_text(
                '#!/usr/bin/env python3\nimport sys\nprint("2 publication READMEs need normalization")\nsys.exit(1)\n',
                encoding="utf-8",
            )
            with self.assertRaisesRegex(ReleaseError, "canonical reader-link sync failed"):
                normalize_shelf_reader_links(shelf)


if __name__ == "__main__":
    unittest.main()
