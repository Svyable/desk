function finite(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

export function relativeSavedLabel(savedAt, now = Date.now()) {
  const saved = finite(savedAt);
  if (saved <= 0) return '';
  const elapsed = Math.max(0, finite(now) - saved);
  const minutes = Math.floor(elapsed / 60000);
  if (minutes < 1) return 'Saved just now';
  if (minutes < 60) return `Saved ${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Saved ${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `Saved ${days}d ago`;
  try {
    return `Saved ${new Date(saved).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`;
  } catch {
    return '';
  }
}

export function chapterResumeLabel(meta, progress) {
  const contents = Array.isArray(meta?.contents) ? meta.contents : [];
  if (!contents.length || !progress?.chapter) return '';
  const index = contents.findIndex((chapter) => chapter.id === progress.chapter);
  if (index < 0) return '';
  const title = String(contents[index]?.title || '').trim();
  return `${title || `Chapter ${index + 1}`} · ${index + 1} of ${contents.length}`;
}

export function slugFromContinueHref(href) {
  const input = String(href || '');
  const match = input.match(/#\/b\/([^/?#]+)/);
  if (!match) return '';
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return match[1];
  }
}
