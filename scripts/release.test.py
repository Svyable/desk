#!/usr/bin/env python3
from __future__ import annotations

import runpy
import unittest
from pathlib import Path

SCRIPT = Path(__file__).with_name("release.py")
release = runpy.run_path(str(SCRIPT))
upsert_feedback_option = release["upsert_feedback_option"]


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


if __name__ == "__main__":
    unittest.main()
