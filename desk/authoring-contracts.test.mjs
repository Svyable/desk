import assert from 'node:assert/strict';
import {
  READER_PRESENTATION_OPTIONS,
  READER_PRESENTATION_PRESETS,
  READER_PRESENTATION_VERSION,
  normalizeReaderPresentation,
} from './reader-presentation-contract.js';
import {
  COVER_PRESENTATION_DEFAULTS,
  COVER_PRESENTATION_OPTIONS,
  coverStyleState,
  normalizeCoverPresentation,
  resolveCoverPresentation,
} from './cover-presentation-contract.js';

let assertions = 0;
const equal = (...args) => { assertions += 1; assert.equal(...args); };
const deepEqual = (...args) => { assertions += 1; assert.deepEqual(...args); };
const ok = (...args) => { assertions += 1; assert.ok(...args); };

// Adapted from Bookself reader/js/presentation.test.mjs @
// ccffc8052f5ec3c3d5b61e5b22726d74c9f767e2. Only the pure authoring-facing
// presentation contract is promoted here; Reader storage ownership stays shared.
equal(READER_PRESENTATION_VERSION, 1);
ok(READER_PRESENTATION_OPTIONS.themes.includes('contrast-dark'));
ok(READER_PRESENTATION_OPTIONS.fonts.includes('clear'));
deepEqual(READER_PRESENTATION_OPTIONS.ranges.fontSize, { min: 14, max: 32, step: 1 });
equal(READER_PRESENTATION_PRESETS.literary.appearance.theme, 'sepia');
equal(READER_PRESENTATION_PRESETS.accessible.typography.font, 'clear');

const normalized = normalizeReaderPresentation({
  appearance: { theme: 'sepia', warmth: 'soft', ignored: true },
  typography: {
    fontSize: 40,
    font: 'literary',
    fontWeight: 500,
    tracking: 0.2,
    leading: 1.7,
    measure: 'narrow',
    align: 'left',
    paragraph: 'airy',
    indent: 'gentle',
    mode: 'scroll',
    hyphens: 'off',
  },
});
deepEqual(normalized.appearance, { theme: 'sepia', warmth: 'soft' });
deepEqual(normalized.typography, {
  fontSize: 32,
  font: 'literary',
  fontWeight: 500,
  tracking: 0.08,
  leading: 1.7,
  measure: 'narrow',
  align: 'left',
  paragraph: 'airy',
  indent: 'gentle',
  mode: 'scroll',
  hyphens: 'off',
});

const preset = normalizeReaderPresentation({
  preset: 'night-story',
  typography: { fontSize: 21, measure: 'balanced' },
});
equal(preset.preset, 'night-story');
deepEqual(preset.appearance, { theme: 'midnight', warmth: 'soft' });
equal(preset.typography.font, 'warm');
equal(preset.typography.fontSize, 21);
equal(preset.typography.measure, 'balanced');
equal(preset.typography.mode, 'paged');

const invalid = normalizeReaderPresentation({
  preset: 'unknown-preset',
  appearance: { theme: 'remote-theme', warmth: 'hot' },
  typography: {
    fontSize: null,
    leading: '',
    tracking: undefined,
    font: 'custom-font',
    fontWeight: 700,
    mode: 'flipbook',
  },
});
equal(invalid.preset, undefined);
deepEqual(invalid.appearance, {});
deepEqual(invalid.typography, {});

// Adapted from Bookself reader/js/cover-presentation.test.mjs @
// da1bc388594bf90396dbbe9df281e9217e646b63.
ok(COVER_PRESENTATION_OPTIONS.layouts.includes('lower-third'));
ok(COVER_PRESENTATION_OPTIONS.fits.includes('contain'));
deepEqual(COVER_PRESENTATION_OPTIONS.ranges.positionX, { min: 0, max: 100, step: 1 });

deepEqual(normalizeCoverPresentation({
  cover: {
    layout: 'centered',
    align: 'left',
    fit: 'contain',
    positionX: 120,
    positionY: -20,
    shade: 1,
    titleScale: 2,
    tone: 'dark',
    ignored: true,
  },
}), {
  layout: 'centered',
  align: 'left',
  fit: 'contain',
  positionX: 100,
  positionY: 0,
  shade: 0.75,
  titleScale: 1.4,
  tone: 'dark',
});

deepEqual(normalizeCoverPresentation({
  layout: 'not-real', align: 'right', fit: 'stretch', tone: 'auto',
}), {});
deepEqual(resolveCoverPresentation({}), COVER_PRESENTATION_DEFAULTS);

const state = coverStyleState({
  layout: 'lower-third',
  positionX: 36,
  positionY: 72,
  shade: 0.5,
  titleScale: 1.2,
});
equal(state.layout, 'lower-third');
equal(state.positionX, 36);
equal(state.positionY, 72);
equal(state.shade, 0.5);
equal(state.shadeTop, 0.15);
equal(state.titleScale, 1.2);
equal(state.titleSize, 'clamp(2.04rem, 4.80vw, 3.36rem)');
equal(state.align, 'center');
equal(state.fit, 'cover');
equal(state.tone, 'light');

console.log(`Desk authoring contracts: ${assertions} assertions passed`);
