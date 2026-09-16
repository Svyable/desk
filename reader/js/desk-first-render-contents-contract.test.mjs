import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const runtime = readFileSync(new URL('./desk-viewport-stability-runtime.js', import.meta.url), 'utf8');
const loader = readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');

test('saved Reader experience is primed before the canonical app can paginate', () => {
  assert.match(runtime, /svyable-desk:reader-experience/);
  assert.match(runtime, /data(?:set)?\.readerPrefsPrimed|dataset\.readerPrefsPrimed/);
  assert.match(runtime, /--reader-font-size/);
  assert.match(runtime, /--reader-leading/);
  assert.match(runtime, /--reader-font-weight/);
  assert.match(runtime, /--reader-tracking/);

  const primeCall = runtime.lastIndexOf('applySavedReaderExperienceBeforePagination({ document });');
  const libraryCall = runtime.lastIndexOf('primeDeskLibrary();');
  assert.ok(primeCall >= 0, 'critical typography priming must run at module startup');
  assert.ok(libraryCall > primeCall, 'typography priming must precede noncritical startup work');

  const stabilityImport = loader.indexOf('await import(viewportStabilityUrl)');
  const canonicalImport = loader.indexOf('await import(canonicalAppUrl)');
  assert.ok(stabilityImport >= 0 && canonicalImport > stabilityImport,
    'Desk must await viewport/first-render setup before importing canonical app.js');
});

test('mobile Contents is a viewport-stable navigation drawer', () => {
  assert.match(runtime, /deskContentsDrawerContract/);
  assert.match(runtime, /top:\s*var\(--reader-toc-top/);
  assert.match(runtime, /height:\s*calc\(100dvh - var\(--reader-toc-top/);
  assert.match(runtime, /transform:\s*translateX\(102%\)/);
  assert.match(runtime, /\.toc-overlay\.active[\s\S]*translateX\(0\)/);
  assert.match(runtime, /#tocList[\s\S]*overflow:\s*auto/);
});

test('opening Contents on compact viewports cannot autofocus its search field', () => {
  assert.match(runtime, /search\.focus\s*=\s*\(options\)\s*=>/);
  assert.match(runtime, /matchMedia\('\(max-width: 700px\), \(pointer: coarse\)'\)/);
  assert.match(runtime, /close\?\.focus\?\.\(\{ preventScroll: true \}\)/);
});
