import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('Desk Contents stays non-modal for keyboard tabbing while real modals keep Bookself focus management', async () => {
  const source = await readFile(new URL('./app-loader.js', import.meta.url), 'utf8');
  assert.match(source, /const preserveNonModalTabbing = \(event\) => \{/);
  assert.match(source, /if \(event\.key !== 'Tab'\) return;/);
  assert.match(source, /if \(!drawer\.classList\.contains\('active'\) \|\| otherModalOpen\(\)\) return;/);
  assert.match(source, /event\.stopImmediatePropagation\(\);/);
  assert.match(source, /document\.addEventListener\('keydown', preserveNonModalTabbing, true\)/);

  const block = source.slice(
    source.indexOf('const preserveNonModalTabbing'),
    source.indexOf('const syncDrawer', source.indexOf('const preserveNonModalTabbing')),
  );
  assert.doesNotMatch(block, /preventDefault\(\)/);
});

test('Desk Contents drawer remains explicitly non-modal when active', async () => {
  const source = await readFile(new URL('./app-loader.js', import.meta.url), 'utf8');
  assert.match(source, /drawer\.getAttribute\('aria-modal'\) !== 'false'/);
  assert.match(source, /drawer\.setAttribute\('aria-modal', 'false'\)/);
  assert.match(source, /app\.inert = false/);
});
