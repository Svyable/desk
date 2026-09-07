import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const research = readFileSync(new URL('../books/_TEMPLATE/research/README.md', import.meta.url), 'utf8');

assert.match(research, /^# Research trail/m);
assert.match(research, /canonical evidence and provenance package/);
assert.match(research, /travels with the publication from Desk to Shelf/);
assert.match(research, /^## Source ledger$/m);
assert.match(research, /manuscript chapter, passage, claim, figure, or calculation informed/);
assert.match(research, /limitations, assumptions, uncertainty, counterevidence, or competing views/);
assert.match(research, /recheck before release/);
assert.match(research, /^## Reader-facing evidence$/m);
assert.match(research, /not automatically part of the Reader table of contents/);
assert.match(research, /^## Source-material rights$/m);
assert.match(research, /provenance, not permission to republish/);
assert.match(research, /^## Before release$/m);
assert.match(research, /docs\/research\.md/);
assert.doesNotMatch(research, /api\.github\.com|localStorage|sessionStorage|fetch\(/);

console.log('Desk research starter contract ok');
