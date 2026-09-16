import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const reader = await readFile(new URL('../reader/js/desk-red-sox-diplomacy.js', import.meta.url), 'utf8');
const bookCss = await readFile(new URL('../reader/css/desk-red-sox-diplomacy.css', import.meta.url), 'utf8');
const academicCss = await readFile(new URL('../reader/css/academic.css', import.meta.url), 'utf8');
const notes = await readFile(new URL('../books/red-sox-diplomacy/manuscript/source-notes.md', import.meta.url), 'utf8');

assert.match(reader, /data\.rsdChapter|dataset\.rsdChapter/, 'Reader should expose the active Red Sox chapter for title-scoped apparatus styling');
assert.match(reader, /Preparing for the International Age/, 'Reader should know the exact title of the 1997 WPI source');
assert.match(reader, /GENERIC_SOURCE_LABEL/, 'Reader should repair generic source anchors without changing their destinations');
assert.match(reader, /MutationObserver/, 'citation labels should be re-polished after Reader re-renders');

assert.match(bookCss, /data-rsd-chapter="source-notes"/, 'Source Notes should have a dedicated typesetting mode');
assert.match(bookCss, /DOCUMENTARY RECORD/, 'Source-note sections should use the documentary-record eyebrow');
assert.match(bookCss, /text-indent:\s*calc\(-1 \* var\(--rsd-source-indent\)\)/, 'Source notes should retain their hanging rhythm');

assert.match(academicCss, /\.reader-reference\s*\{/, 'Desk must ship the academic stylesheet expected by the canonical Bookself Reader');
assert.match(academicCss, /content:\s*" <" attr\(href\) ">"/, 'Desk print citations should expose original URLs');

assert.match(notes, /Preparing for the International Age/, 'source notes should name the WPI record rather than call it a primary source');
assert.doesNotMatch(notes, /\[(?:source|primary source|source scan|primary transcript)\]\(/i, 'source notes should not use generic visible source labels');
assert.match(notes, /Name the record, not the link/, 'the book should state its descriptive-link editorial rule');

console.log('Red Sox citation presentation tests ok');
