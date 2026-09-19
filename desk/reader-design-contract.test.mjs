import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('Reader Design disables stale export actions while a new book loads', async () => {
  const source = await readFile(new URL('./reader-design.js', import.meta.url), 'utf8');
  assert.match(source, /function setDesignInteractionState/);
  assert.match(source, /form\.inert = locked/);
  assert.match(source, /presets\.inert = locked/);
  assert.match(source, /\['readerDesignReload', 'readerDesignCopy', 'readerDesignDownload'\]/);
  assert.match(source, /setDesignInteractionState\(\{ loading: true \}\)/);
  assert.match(source, /setDesignInteractionState\(\{ unavailable: true \}\)/);
  assert.match(source, /requestId === designLoadSequence[\s\S]*?setDesignInteractionState\(\)/);
});

test('reader.json download keeps the blob URL alive through the click', async () => {
  const source = await readFile(new URL('./reader-design.js', import.meta.url), 'utf8');
  assert.match(source, /document\.body\.appendChild\(link\)/);
  assert.match(source, /link\.click\(\)[\s\S]*?link\.remove\(\)/);
  assert.match(source, /setTimeout\(\(\) => URL\.revokeObjectURL\(url\), 1000\)/);
});
