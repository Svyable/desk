import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('remote workspace URL is committed before manuscript cards notify dependent studios', async () => {
  const source = await readFile(new URL('./desk.js', import.meta.url), 'utf8');
  const start = source.indexOf('async function loadRemoteWorkspace');
  const end = source.indexOf('function bindUi()', start);
  const remoteLoad = source.slice(start, end);
  const urlCommit = remoteLoad.indexOf("history.replaceState(null, '',");
  const assignBooks = remoteLoad.indexOf('state.books = books;');
  const finish = remoteLoad.indexOf('finishLoad(meta);');
  assert.ok(urlCommit >= 0, 'remote loader must commit the loaded repository to the URL');
  assert.ok(assignBooks > urlCommit, 'remote URL must be committed before books are assigned for rendering');
  assert.ok(finish > assignBooks, 'rendering must happen after the URL identifies the loaded workspace');
});
