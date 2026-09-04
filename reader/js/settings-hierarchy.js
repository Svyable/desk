import {
  loadPrefs,
  resetReadingAppearancePrefs,
  savePrefs,
} from 'https://svyable.github.io/shelf/reader/js/storage.js';

const SETTINGS_STYLE_HREF = 'https://svyable.github.io/shelf/reader/css/settings-panel.css';

function $(id) {
  return document.getElementById(id);
}

function installStyles() {
  if (document.querySelector(`link[href="${SETTINGS_STYLE_HREF}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = SETTINGS_STYLE_HREF;
  document.head.appendChild(link);
}

function section(title, className = '') {
  const node = document.createElement('section');
  node.className = `settings-section ${className}`.trim();
  const heading = document.createElement('h4');
  heading.textContent = title;
  node.appendChild(heading);
  return node;
}

function moveButtons(container, ids) {
  for (const id of ids) {
    const button = $(id);
    if (button) container.appendChild(button);
  }
}

function resetAppearance() {
  const button = $('resetAppearanceBtn');
  if (!button || button.disabled) return;
  savePrefs(resetReadingAppearancePrefs(loadPrefs()));
  button.disabled = true;
  button.textContent = 'Resetting…';
  window.setTimeout(() => window.location.reload(), 80);
}

export function installSettingsHierarchy() {
  const panel = $('settingsPanel');
  const card = panel?.querySelector('.settings-card');
  if (!panel || !card || card.dataset.settingsHierarchy === 'true') return false;
  card.dataset.settingsHierarchy = 'true';
  installStyles();

  const title = card.querySelector(':scope > h3');
  if (title) title.textContent = 'Reading settings';

  const rows = [...card.querySelectorAll(':scope > .setting-row')];
  const legacyActions = card.querySelector(':scope > .setting-actions');
  const close = $('settingsClose');

  const appearance = section('Appearance', 'settings-appearance');
  const appearanceHead = document.createElement('div');
  appearanceHead.className = 'settings-section-head';
  const appearanceTitle = appearance.querySelector('h4');
  appearanceTitle.remove();
  appearanceHead.appendChild(appearanceTitle);

  const reset = document.createElement('button');
  reset.id = 'resetAppearanceBtn';
  reset.className = 'settings-reset';
  reset.type = 'button';
  reset.textContent = 'Reset appearance';
  reset.setAttribute('aria-describedby', 'appearanceResetHelp');
  reset.addEventListener('click', resetAppearance);
  appearanceHead.appendChild(reset);
  appearance.appendChild(appearanceHead);

  const help = document.createElement('p');
  help.id = 'appearanceResetHelp';
  help.className = 'settings-note';
  help.textContent = 'Restores paper, lamp, type size, typeface, and line height. Your place, notes, bookmarks, reading mode, and focus setting stay put.';
  appearance.appendChild(help);
  rows.forEach((row) => appearance.appendChild(row));

  const tools = section('Reading tools');
  const toolActions = document.createElement('div');
  toolActions.className = 'setting-actions settings-action-grid';
  moveButtons(toolActions, ['shareBtn', 'focusBtn', 'progressBtn', 'helpBtn']);
  tools.appendChild(toolActions);

  const exports = section('Export & print');
  const exportActions = document.createElement('div');
  exportActions.className = 'setting-actions settings-action-grid';
  moveButtons(exportActions, ['printBtn', 'downloadMd', 'downloadHtml', 'exportNotesBtn']);
  exports.appendChild(exportActions);

  legacyActions?.remove();
  if (close) {
    card.insertBefore(appearance, close);
    card.insertBefore(tools, close);
    card.insertBefore(exports, close);
  } else {
    card.append(appearance, tools, exports);
  }
  return true;
}

installSettingsHierarchy();
