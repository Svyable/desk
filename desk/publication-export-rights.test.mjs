import test from 'node:test';
import assert from 'node:assert/strict';

import { publicationRights, sentenceNotice } from './publication-export-rights.js';

test('sentenceNotice normalizes Bookself metadata punctuation', () => {
  assert.equal(sentenceNotice('© 2026 Ada Author · All Rights Reserved'), '© 2026 Ada Author. All Rights Reserved.');
  assert.equal(sentenceNotice('Already complete.'), 'Already complete.');
  assert.equal(sentenceNotice('Reserved'), 'Reserved.');
});

test('publicationRights falls back without inventing a year', () => {
  assert.deepEqual(publicationRights({}, 'Ada Author'), {
    copyright: 'Copyright Ada Author. All Rights Reserved.',
    ai: 'AI training, retrieval/grounding, indexing, and generative use reserved.',
  });
  assert.deepEqual(publicationRights({ year: '2026' }, 'Ada Author'), {
    copyright: '© 2026 Ada Author. All Rights Reserved.',
    ai: 'AI training, retrieval/grounding, indexing, and generative use reserved.',
  });
});
