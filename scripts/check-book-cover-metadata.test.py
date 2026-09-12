#!/usr/bin/env python3
"""Exercise real book fixtures, including defects that previously escaped audit."""
import importlib.util
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).with_name('check-book-cover-metadata.py')
spec = importlib.util.spec_from_file_location('covers', SCRIPT)
covers = importlib.util.module_from_spec(spec)
spec.loader.exec_module(covers)


class CoverAuditTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.book = self.root / 'books/example'
        (self.book / 'manuscript').mkdir(parents=True)
        (self.root / 'catalog.json').write_text(json.dumps({'version': 1, 'books': ['example']}))
        self.readme = '# Example\n\n*An Established Subtitle*\n\n| **Authors** | Sven Hardy Benson |\n\n- [x] [Front Matter](manuscript/front-matter.md)\n'
        self.front = '# Example\n\n*An Established Subtitle*\n\n**Sven Hardy Benson**\n\n---\n\nBody prose.\n'
        self.write()

    def write(self):
        (self.book / 'README.md').write_text(self.readme)
        (self.book / 'manuscript/front-matter.md').write_text(self.front)

    def test_valid_opening_with_or_without_subtitle(self):
        self.assertTrue(covers.audit(self.root)['ok'])
        self.readme = self.readme.replace('*An Established Subtitle*\n\n', '')
        self.front = self.front.replace('*An Established Subtitle*\n\n', '')
        self.write()
        self.assertTrue(covers.audit(self.root)['ok'])

    def test_unregistered_book_cannot_escape_audit(self):
        (self.root / 'catalog.json').write_text('{"version":1,"books":[]}')
        report = covers.audit(self.root)
        self.assertEqual(report['books_checked'], 1)
        self.assertIn('example: book missing from catalog.json', report['errors'])

    def test_front_title_mismatch_and_late_author_are_rejected(self):
        self.front = self.front.replace('# Example', '# Old Name').replace('**Sven Hardy Benson**\n\n---', '---\n\n**Sven Hardy Benson**')
        self.write()
        report = covers.audit(self.root)
        self.assertTrue(any('differ' in e for e in report['errors']))
        self.assertTrue(any('byline' in e for e in report['errors']))

    def test_missing_files_and_malformed_catalog_are_diagnostics(self):
        (self.root / 'catalog.json').write_text('[')
        (self.book / 'manuscript/front-matter.md').unlink()
        report = covers.audit(self.root)
        self.assertEqual(len(report['errors']), 2)
        self.assertFalse(report['ok'])

    def test_empty_title_does_not_pass_when_both_files_are_empty(self):
        self.readme = self.readme.replace('# Example', '')
        self.front = self.front.replace('# Example', '')
        self.write()
        self.assertTrue(any('title' in e for e in covers.audit(self.root)['errors']))

    def test_numbered_and_embedded_front_matter(self):
        for filename in ['00-front-matter.md', 'book.md']:
            (self.book / 'README.md').write_text(self.readme.replace('front-matter.md', filename))
            (self.book / 'manuscript' / filename).write_text(self.front)
            self.assertTrue(covers.audit(self.root)['ok'])

    def test_tagline_allowed_and_no_arbitrary_length_cap(self):
        tagline = '*' + 'Established edition note ' * 60 + '*\n\n'
        self.front = self.front.replace('**Sven Hardy Benson**', tagline + '**Sven Hardy Benson**')
        self.write()
        self.assertTrue(covers.audit(self.root)['ok'])

    def test_combined_title_and_duplicate_subtitle_rejected(self):
        self.readme = self.readme.replace('# Example', '# Example: An Established Subtitle')
        self.front = self.front.replace('# Example', '# Example: An Established Subtitle')
        self.write()
        self.assertTrue(any('duplicated' in e for e in covers.audit(self.root)['errors']))

    def test_focused_json_cli_and_unknown_slug(self):
        for slug, expected in [('example', 0), ('missing', 1), ('../escape', 1)]:
            result = subprocess.run([sys.executable, str(SCRIPT), '--root', str(self.root), '--json', slug], capture_output=True, text=True)
            self.assertEqual(result.returncode, expected)
            self.assertEqual(json.loads(result.stdout)['ok'], expected == 0)

    def test_title_page_cannot_escape_book_folder(self):
        self.readme = self.readme.replace('manuscript/front-matter.md', 'manuscript/../../../front-matter.md')
        self.write()
        self.assertTrue(any('leaves' in e for e in covers.audit(self.root)['errors']))


if __name__ == '__main__':
    unittest.main()
