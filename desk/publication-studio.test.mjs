import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import {
  PUBLICATION_STUDIO_EDITIONS,
  publicationReadiness,
} from './publication-studio.js';

test('studio keeps the edition list intentionally small', () => {
  assert.deepEqual(PUBLICATION_STUDIO_EDITIONS.map((edition) => edition.id), [
    'kindle',
    'paperback-6x9',
    'hardcover-6x9',
  ]);
  assert.equal(PUBLICATION_STUDIO_EDITIONS.filter((edition) => edition.state === 'ready').length, 1);
});

test('readiness separates export from release readiness', () => {
  assert.deepEqual(publicationReadiness('drafting', 0), {
    tone: 'neutral',
    label: 'Draft export is available',
    detail: 'Use EPUB as a proof while you write. Release readiness remains separate from export.',
  });

  assert.equal(publicationReadiness('ready', 0).tone, 'good');
  assert.equal(publicationReadiness('drafting', 2).label, 'Review 2 readiness issues');
});

test('manuscript cards expose only the focused primary action set', async () => {
  const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
  const template = html.match(/<template id="bookCardTemplate">([\s\S]*?)<\/template>/)?.[1] || '';

  assert.match(template, />Preview</);
  assert.match(template, />Prepare edition</);
  assert.match(template, />Edit hub</);
  assert.match(template, /<summary>More<\/summary>/);
  assert.match(template, /class="export-epub-action"[^>]*hidden/);
  assert.match(template, /class="export-kdp-action"[^>]*hidden/);
  assert.match(template, /class="book-secondary-links"[\s\S]*?>Files<[\s\S]*?>History</);
});

test('print editions are honest about current capability', async () => {
  const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
  assert.match(html, /Paperback · 6 × 9/);
  assert.match(html, /Hardcover · 6 × 9/);
  assert.match(html, /Print-PDF export is not enabled yet\./);
  assert.match(html, /class="[^"]*studio-export-epub[^"]*"/);
});

test('export observer survives terminal state long enough to restore the idle label', async () => {
  const source = await readFile(new URL('./publication-studio.js', import.meta.url), 'utf8');
  assert.match(source, /let sawTerminalState = false;/);
  assert.match(source, /if \(\/downloaded\/i\.test\(text\)\)[\s\S]*?sawTerminalState = true;[\s\S]*?return;/);
  assert.match(source, /if \(\/failed\/i\.test\(text\)\)[\s\S]*?sawTerminalState = true;[\s\S]*?return;/);
  assert.match(source, /if \(sawTerminalState\) stopWatching\(\);/);
});


test('terminal export states remain disabled until the hidden exporter returns idle', async () => {
  const source = await readFile(new URL('./publication-studio.js', import.meta.url), 'utf8');
  assert.match(source, /if \(\/downloaded\/i\.test\(text\)\)[\s\S]*?button\.disabled = true;[\s\S]*?return;/);
  assert.match(source, /if \(\/failed\/i\.test\(text\)\)[\s\S]*?button\.disabled = true;[\s\S]*?return;/);
  assert.match(source, /button\.textContent = idleLabel;[\s\S]*?button\.disabled = false;[\s\S]*?if \(sawTerminalState\) stopWatching\(\);/);
});


test('stale export observers are detached when the studio changes context', async () => {
  const source = await readFile(new URL('./publication-studio.js', import.meta.url), 'utf8');
  assert.match(source, /const exportUiCleanup = new WeakMap\(\)/);
  assert.match(source, /function clearExportUi\(button\)/);
  assert.match(source, /function syncExportButton[\s\S]*?clearExportUi\(button\)/);
  assert.match(source, /function openStudio[\s\S]*?clearExportUi\(ui\.epub\)[\s\S]*?clearExportUi\(ui\.html\)/);
  assert.match(source, /function closeStudio[\s\S]*?clearExportUi\(ui\.epub\)[\s\S]*?clearExportUi\(ui\.html\)/);
});


test('reopening the studio mirrors an already-running hidden export without starting another', async () => {
  const source = await readFile(new URL('./publication-studio.js', import.meta.url), 'utf8');
  assert.match(source, /function restoreExportButton\(button, trigger, idleLabel\)/);
  assert.match(source, /syncExportButton\(button, trigger, idleLabel, \{ start: false \}\)/);
  assert.match(source, /restoreExportButton\(ui\.epub, card\.querySelector\('\.export-epub-action'\), 'Download EPUB'\)/);
  assert.match(source, /restoreExportButton\(ui\.html, card\.querySelector\('\.export-kdp-action'\), 'Download HTML'\)/);
  assert.match(source, /if \(start\) trigger\.click\(\)/);
});

test('export watchdog never re-enables a genuinely busy or terminal export', async () => {
  const source = await readFile(new URL('./publication-studio.js', import.meta.url), 'utf8');
  assert.match(source, /getAttribute\('aria-busy'\) === 'true'[\s\S]*?button\.disabled = true;[\s\S]*?setTimeout\(onWatchdog, 60000\)/);
  assert.match(source, /if \(\/downloaded\|failed\/i\.test\(text\)\)[\s\S]*?update\(\);[\s\S]*?setTimeout\(onWatchdog, 5000\)/);
});
