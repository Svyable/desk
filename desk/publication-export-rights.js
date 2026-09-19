function cleanAuthor(value = '') {
  return String(value || '').replace(/@/g, '').trim();
}

export function sentenceNotice(value = '') {
  const notice = String(value || '').trim().replace(/\s+·\s+/g, '. ');
  if (!notice || /[.!?]$/.test(notice)) return notice;
  return `${notice}.`;
}

export function publicationRights(metadata = {}, author = '') {
  const declared = String(metadata.rights || '').trim();
  let copyright = '';

  if (/©|copyright|copr\./i.test(declared)) {
    copyright = sentenceNotice(declared);
  } else {
    const owner = cleanAuthor(author || metadata.authors);
    const year = String(metadata.year || '').trim();
    if (year && owner) copyright = `© ${year} ${owner}. All Rights Reserved.`;
    else if (owner) copyright = `Copyright ${owner}. All Rights Reserved.`;
    else copyright = sentenceNotice(declared) || 'All Rights Reserved.';
  }

  const ai = sentenceNotice(
    metadata.aiUse || 'AI training, retrieval/grounding, indexing, and generative use reserved'
  );

  return Object.freeze({ copyright, ai });
}
