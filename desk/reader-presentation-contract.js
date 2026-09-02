// Selective local authoring contract promoted from Svyable/bookself
// reader/js/presentation.js @ 366bc90859c77f1d5e4a27d232d302141872fbe4.
// This file intentionally carries only the pure presentation schema/normalizer
// needed by Publishing Desk studios; Reader loading/storage remains Shelf-backed.

export const READER_PRESENTATION_VERSION = 1;

export const READER_PRESENTATION_OPTIONS = Object.freeze({
  themes: Object.freeze([
    'light', 'linen', 'porcelain', 'sage', 'lavender', 'ivory', 'sepia', 'rose', 'sand',
    'dark', 'slate', 'midnight', 'forest', 'ember', 'deep-sea', 'aubergine',
    'contrast', 'contrast-dark',
  ]),
  warmths: Object.freeze(['off', 'soft', 'golden']),
  fonts: Object.freeze(['book', 'literary', 'warm', 'classic', 'modern', 'clear', 'humanist', 'system']),
  fontWeights: Object.freeze([400, 500, 600]),
  measures: Object.freeze(['narrow', 'balanced', 'wide']),
  aligns: Object.freeze(['left', 'justify']),
  paragraphs: Object.freeze(['compact', 'normal', 'airy']),
  indents: Object.freeze(['none', 'gentle', 'classic']),
  modes: Object.freeze(['paged', 'scroll']),
  hyphens: Object.freeze(['auto', 'off']),
  ranges: Object.freeze({
    fontSize: Object.freeze({ min: 14, max: 32, step: 1 }),
    tracking: Object.freeze({ min: -0.02, max: 0.08, step: 0.01 }),
    leading: Object.freeze({ min: 1.3, max: 2, step: 0.05 }),
  }),
});

export const READER_PRESENTATION_PRESETS = Object.freeze({
  book: Object.freeze({
    appearance: Object.freeze({ theme: 'ivory', warmth: 'off' }),
    typography: Object.freeze({
      fontSize: 18, font: 'book', fontWeight: 400, tracking: 0,
      leading: 1.55, measure: 'balanced', align: 'justify', paragraph: 'normal',
      indent: 'gentle', mode: 'paged', hyphens: 'auto',
    }),
  }),
  literary: Object.freeze({
    appearance: Object.freeze({ theme: 'sepia', warmth: 'soft' }),
    typography: Object.freeze({
      fontSize: 19, font: 'literary', fontWeight: 400, tracking: 0,
      leading: 1.65, measure: 'balanced', align: 'justify', paragraph: 'normal',
      indent: 'classic', mode: 'paged', hyphens: 'auto',
    }),
  }),
  'modern-essay': Object.freeze({
    appearance: Object.freeze({ theme: 'porcelain', warmth: 'off' }),
    typography: Object.freeze({
      fontSize: 18, font: 'modern', fontWeight: 400, tracking: 0,
      leading: 1.6, measure: 'wide', align: 'left', paragraph: 'normal',
      indent: 'none', mode: 'scroll', hyphens: 'off',
    }),
  }),
  editorial: Object.freeze({
    appearance: Object.freeze({ theme: 'linen', warmth: 'off' }),
    typography: Object.freeze({
      fontSize: 18, font: 'humanist', fontWeight: 400, tracking: 0.01,
      leading: 1.55, measure: 'wide', align: 'left', paragraph: 'compact',
      indent: 'none', mode: 'scroll', hyphens: 'off',
    }),
  }),
  poetry: Object.freeze({
    appearance: Object.freeze({ theme: 'ivory', warmth: 'soft' }),
    typography: Object.freeze({
      fontSize: 19, font: 'classic', fontWeight: 400, tracking: 0,
      leading: 1.7, measure: 'wide', align: 'left', paragraph: 'airy',
      indent: 'none', mode: 'scroll', hyphens: 'off',
    }),
  }),
  'night-story': Object.freeze({
    appearance: Object.freeze({ theme: 'midnight', warmth: 'soft' }),
    typography: Object.freeze({
      fontSize: 19, font: 'warm', fontWeight: 400, tracking: 0,
      leading: 1.68, measure: 'narrow', align: 'justify', paragraph: 'normal',
      indent: 'gentle', mode: 'paged', hyphens: 'auto',
    }),
  }),
  accessible: Object.freeze({
    appearance: Object.freeze({ theme: 'contrast', warmth: 'off' }),
    typography: Object.freeze({
      fontSize: 22, font: 'clear', fontWeight: 500, tracking: 0.01,
      leading: 1.8, measure: 'narrow', align: 'left', paragraph: 'airy',
      indent: 'none', mode: 'scroll', hyphens: 'off',
    }),
  }),
  'quiet-study': Object.freeze({
    appearance: Object.freeze({ theme: 'sage', warmth: 'off' }),
    typography: Object.freeze({
      fontSize: 18, font: 'literary', fontWeight: 400, tracking: 0,
      leading: 1.65, measure: 'narrow', align: 'left', paragraph: 'normal',
      indent: 'none', mode: 'scroll', hyphens: 'off',
    }),
  }),
});

const THEMES = new Set(READER_PRESENTATION_OPTIONS.themes);
const WARMTHS = new Set(READER_PRESENTATION_OPTIONS.warmths);
const FONTS = new Set(READER_PRESENTATION_OPTIONS.fonts);
const MEASURES = new Set(READER_PRESENTATION_OPTIONS.measures);
const ALIGNS = new Set(READER_PRESENTATION_OPTIONS.aligns);
const PARAGRAPHS = new Set(READER_PRESENTATION_OPTIONS.paragraphs);
const INDENTS = new Set(READER_PRESENTATION_OPTIONS.indents);
const MODES = new Set(READER_PRESENTATION_OPTIONS.modes);
const HYPHENS = new Set(READER_PRESENTATION_OPTIONS.hyphens);
const WEIGHTS = new Set(READER_PRESENTATION_OPTIONS.fontWeights);

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function finite(value) {
  if (value == null || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function pick(set, value) {
  return set.has(value) ? value : undefined;
}

function presetFor(value) {
  return Object.prototype.hasOwnProperty.call(READER_PRESENTATION_PRESETS, value)
    ? READER_PRESENTATION_PRESETS[value]
    : null;
}

export function normalizeReaderPresentation(raw = {}) {
  const presetName = typeof raw?.preset === 'string' && presetFor(raw.preset) ? raw.preset : undefined;
  const preset = presetName ? presetFor(presetName) : {};
  const appearanceRaw = {
    ...(preset?.appearance || {}),
    ...(raw && typeof raw.appearance === 'object' ? raw.appearance : {}),
  };
  const typographyRaw = {
    ...(preset?.typography || {}),
    ...(raw && typeof raw.typography === 'object' ? raw.typography : {}),
  };
  const fontSize = finite(typographyRaw.fontSize);
  const tracking = finite(typographyRaw.tracking);
  const leading = finite(typographyRaw.leading);
  const fontWeight = finite(typographyRaw.fontWeight);
  const ranges = READER_PRESENTATION_OPTIONS.ranges;

  const appearance = {
    theme: pick(THEMES, appearanceRaw.theme),
    warmth: pick(WARMTHS, appearanceRaw.warmth),
  };
  const typography = {
    fontSize: fontSize == null ? undefined : Math.round(clamp(fontSize, ranges.fontSize.min, ranges.fontSize.max)),
    font: pick(FONTS, typographyRaw.font),
    fontWeight: WEIGHTS.has(fontWeight) ? fontWeight : undefined,
    tracking: tracking == null ? undefined : Number(clamp(tracking, ranges.tracking.min, ranges.tracking.max).toFixed(2)),
    leading: leading == null ? undefined : Number(clamp(leading, ranges.leading.min, ranges.leading.max).toFixed(2)),
    measure: pick(MEASURES, typographyRaw.measure),
    align: pick(ALIGNS, typographyRaw.align),
    paragraph: pick(PARAGRAPHS, typographyRaw.paragraph),
    indent: pick(INDENTS, typographyRaw.indent),
    mode: pick(MODES, typographyRaw.mode),
    hyphens: pick(HYPHENS, typographyRaw.hyphens),
  };

  return {
    version: READER_PRESENTATION_VERSION,
    ...(presetName ? { preset: presetName } : {}),
    appearance: Object.fromEntries(Object.entries(appearance).filter(([, value]) => value !== undefined)),
    typography: Object.fromEntries(Object.entries(typography).filter(([, value]) => value !== undefined)),
  };
}
