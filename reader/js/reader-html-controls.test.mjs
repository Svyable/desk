import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('Reader search, note, and library sort controls have durable accessible names', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /id="librarySearch"[^>]*aria-label="Search Desk manuscripts"/);
  assert.match(html, /class="setting-pills" role="group" aria-label="Sort Desk manuscripts"/);
  assert.match(html, /data-sort="title" aria-pressed="true"/);
  assert.match(html, /data-sort="recent" aria-pressed="false"/);
  assert.match(html, /id="tocSearch"[^>]*aria-label="Search chapters"/);
  assert.match(html, /id="bookSearch"[^>]*aria-label="Search this book"/);
  assert.match(html, /id="noteBody"[^>]*aria-label="Note text"/);
});
