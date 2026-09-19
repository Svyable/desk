function cleanMetadataValue(value = '') {
  return String(value)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\\\|/g, '|')
    .replace(/`/g, '')
    .trim();
}

export function parsePublicationMetadata(markdown = '') {
  const rows = {};
  const rowRe = /^\|\s*\*\*([^*]+)\*\*\s*\|\s*(.*?)\s*\|\s*$/gm;
  let match;
  while ((match = rowRe.exec(markdown))) rows[match[1].trim().toLowerCase()] = cleanMetadataValue(match[2]);

  const date = rows['publication date'] || rows.date || rows.year || '';
  const year = String(date).match(/\b(?:19|20)\d{2}\b/)?.[0] || '';

  return {
    authors: rows.authors || rows.author || '',
    language: rows.language || 'English',
    isbn: rows.isbn || '',
    publisher: rows.publisher || '',
    rights: rows.rights || rows.copyright || '',
    aiUse: rows['ai use'] || rows['ai-use'] || '',
    year,
  };
}
