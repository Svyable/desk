import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('./', import.meta.url);
const js = readFileSync(new URL('workspace-nav.js', root), 'utf8');
const css = readFileSync(new URL('workspace-nav.css', root), 'utf8');
const boundary = readFileSync(new URL('authoring-boundary.js', root), 'utf8');

let assertions = 0;
const match = (value, pattern) => { assertions += 1; assert.match(value, pattern); };
const no = (value, pattern) => { assertions += 1; assert.doesNotMatch(value, pattern); };

// Preserve Bookself's proven workspace map and search shortcut.
match(boundary, /import\('\.\/workspace-nav\.js'\)/);
match(js, /summaryGrid[\s\S]*readerDesignStudio[\s\S]*newPublicationStudio[\s\S]*manuscriptList/);
match(js, /event\.metaKey \|\| event\.ctrlKey/);
match(js, /aria-current/);
match(js, /prefers-reduced-motion/);

// Svyable adaptation: do not show a Mac-only shortcut label and do not turn
// the workspace map into a second persistent chrome bar on phones/touch.
match(js, /Mac\|iPhone\|iPad/);
match(js, /'Ctrl K'/);
match(css, /@media \(max-width:\s*700px\), \(pointer:\s*coarse\)[\s\S]*position:\s*relative;[\s\S]*top:\s*auto;/);
match(css, /@media \(max-width:\s*560px\)[\s\S]*min-height:\s*2\.75rem/);

// Accessibility remains explicit while this stays presentation/navigation only.
match(css, /@media \(forced-colors:\s*active\)/);
match(css, /outline:\s*2px solid Highlight/);
no(js, /localStorage|sessionStorage/);
no(js, /fetch\(|XMLHttpRequest/);
no(css, /\.page-inner|\.page-surface|--page-/);

console.log(`Desk workspace navigation contract: ${assertions} assertions passed`);
