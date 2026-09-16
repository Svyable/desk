import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const runtime = readFileSync(new URL('./desk-viewport-stability-runtime.js', import.meta.url), 'utf8');
const firstRender = readFileSync(new URL('./desk-first-render.js', import.meta.url), 'utf8');
const loader = readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');

test('saved Reader experience is settled before the canonical app can paginate', () => {
  assert.match(firstRender, /svyable-desk:reader-experience/);
  assert.match(firstRender, /dataset\.readerPrefsPrimed/);
  assert.match(firstRender, /--reader-font-size/);
  assert.match(firstRender, /--reader-leading/);
  assert.match(firstRender, /--reader-font-weight/);
  assert.match(firstRender, /--reader-tracking/);
  assert.match(firstRender, /document\.fonts\.load/);
  assert.match(firstRender, /document\.fonts\?\.ready/);
  assert.match(firstRender, /dataset\.readerFirstRenderReady\s*=\s*'true'/);
  assert.match(firstRender, /await twoFrames\(window\)/);

  const prepareCall = runtime.indexOf('await prepareDeskReaderFirstRender({ window, document });');
  const libraryCall = runtime.indexOf('primeDeskLibrary();');
  assert.ok(prepareCall >= 0, 'critical first-render preparation must be awaited at module startup');
  assert.ok(libraryCall > prepareCall, 'first-render settlement must precede noncritical startup work');

  const stabilityImport = loader.indexOf('await import(viewportStabilityUrl)');
  const canonicalImport = loader.indexOf('await import(canonicalAppUrl)');
  assert.ok(stabilityImport >= 0 && canonicalImport > stabilityImport,
    'Desk must await viewport/first-render setup before importing canonical app.js');
});

test('redundant startup resize cannot trigger a second first-render pagination', () => {
  assert.match(firstRender, /installRedundantStartupResizeGuard/);
  assert.match(firstRender, /event\.isTrusted/);
  assert.match(firstRender, /geometrySignature/);
  assert.match(firstRender, /event\.stopImmediatePropagation\(\)/);
});

test('mobile Contents is a viewport-stable navigation drawer', () => {
  assert.match(firstRender, /deskContentsDrawerContract/);
  assert.match(firstRender, /top:\s*var\(--reader-toc-top/);
  assert.match(firstRender, /height:\s*calc\(100dvh - var\(--reader-toc-top/);
  assert.match(firstRender, /transform:\s*translateX\(102%\)/);
  assert.match(firstRender, /\.toc-overlay\.active[^{]*\{\s*transform:\s*translateX\(0\)/);
  assert.match(firstRender, /#tocList[\s\S]*overflow:\s*auto/);
});

test('opening Contents on compact viewports cannot autofocus its search field', () => {
  assert.match(firstRender, /search\.focus\s*=\s*\(options\)\s*=>/);
  assert.match(firstRender, /matchMedia\('\(max-width: 700px\), \(pointer: coarse\)'\)/);
  assert.match(firstRender, /close\?\.focus\?\.\(\{ preventScroll: true \}\)/);
});
