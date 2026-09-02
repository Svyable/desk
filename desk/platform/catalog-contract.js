/**
 * Selective local-first promotion from Bookself reader/js/catalog.js.
 * This authoring adapter keeps only the catalog/publication parsing surface used
 * by desk/desk.js; Reader-only front-matter/color helpers remain upstream.
 */

export function extractSection(markdown, heading) {
  const re = new RegExp(`^##\\s+${heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'im');
  const match = re.exec(markdown);
  if (!match) return '';
  const start = match.index + match[0].length;
  const rest = markdown.slice(start);
  const next = rest.search(/^##\s+/m);
  return (next === -1 ? rest : rest.slice(0, next)).trim();
}

export function parsePortalCatalog(markdown) {
  const section = extractSection(markdown, 'The books') || markdown;
  const slugs = [];
  const re = /\]\((?:\.\/)?books\/([a-z0-9][a-z0-9-]*)\/?\)/gi;
  let m;
  while ((m = re.exec(section))) {
    const slug = m[1];
    if (slug === '_TEMPLATE') continue;
    if (!slugs.includes(slug)) slugs.push(slug);
  }
  return slugs;
}

function cell(markdown, label) {
  const re = new RegExp(
    `\\|\\s*\\*\\*${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*\\*\\s*\\|\\s*([^|\\n]+)\\|`,
    'i'
  );
  const m = markdown.match(re);
  return m ? m[1].trim() : '';
}

function normalizeFormat(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (['paper', 'whitepaper', 'white paper', 'research paper', 'preprint', 'thesis', 'dissertation'].includes(raw)) return 'paper';
  if (['magazine', 'periodical', 'zine'].includes(raw)) return 'magazine';
  if (['newspaper', 'gazette', 'daily'].includes(raw)) return 'newspaper';
  if (['journal', 'academic journal', 'research journal', 'proceedings', 'conference proceedings'].includes(raw)) return 'journal';
  if (['newsletter', 'bulletin'].includes(raw)) return 'newsletter';
  if (['comic', 'graphic novel', 'graphic narrative'].includes(raw)) return 'comic';
  if (['anthology', 'collection', 'chapbook', 'poetry collection', 'story collection'].includes(raw)) return 'anthology';
  if (['report', 'annual report', 'field report', 'manual', 'handbook', 'guide', 'catalog', 'catalogue', 'pamphlet', 'brochure'].includes(raw)) return 'report';
  return 'book';
}

function parseLinks(value) {
  const links = [];
  const seen = new Set();
  const re = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/gi;
  let m;
  while ((m = re.exec(String(value || '')))) {
    const url = m[2].trim();
    if (seen.has(url)) continue;
    seen.add(url);
    links.push({ label: m[1].trim(), url });
  }
  return links;
}

function mergeLinks(...lists) {
  const links = [];
  const seen = new Set();
  for (const list of lists) {
    for (const link of list) {
      if (!link?.url || seen.has(link.url)) continue;
      seen.add(link.url);
      links.push(link);
    }
  }
  return links;
}

function plainInlineText(value) {
  return String(value || '')
    .replace(/\[([^\]]+)\]\(https?:\/\/[^)\s]+\)/gi, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizedIsbn(value) {
  const compact = String(value || '').replace(/[^0-9Xx]/g, '').toUpperCase();

  if (/^\d{13}$/.test(compact)) {
    const sum = [...compact.slice(0, 12)].reduce(
      (total, digit, index) => total + Number(digit) * (index % 2 === 0 ? 1 : 3),
      0
    );
    const check = (10 - (sum % 10)) % 10;
    return check === Number(compact[12]) ? compact : '';
  }

  if (/^\d{9}[\dX]$/.test(compact)) {
    const digits = [...compact].map((digit) => digit === 'X' ? 10 : Number(digit));
    const sum = digits.reduce((total, digit, index) => total + digit * (10 - index), 0);
    return sum % 11 === 0 ? compact : '';
  }

  return '';
}

function identifierLinks(isbn, doi, explicitLinks) {
  const links = [];
  const labels = new Set(explicitLinks.map((link) => link.label.trim().toLowerCase()));

  const compactIsbn = normalizedIsbn(isbn);
  if (!labels.has('open library') && compactIsbn) {
    links.push({ label: 'Open Library', url: `https://openlibrary.org/isbn/${compactIsbn}` });
  }

  const cleanDoi = String(doi || '').trim().replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '');
  if (!labels.has('doi') && /^10\.\d{4,9}\/.+/.test(cleanDoi)) {
    links.push({ label: 'DOI', url: `https://doi.org/${cleanDoi}` });
  }

  return links;
}

export function parseBookReadme(markdown, slug) {
  const titleMatch = markdown.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : slug;
  const status = cell(markdown, 'Status');
  const authorsRaw = cell(markdown, 'Authors');
  const authors = plainInlineText(authorsRaw);
  const chaptersCell = cell(markdown, 'Chapters');
  const formatLabel = cell(markdown, 'Format');
  const rights = cell(markdown, 'Rights') || 'All Rights Reserved';
  const aiUse = cell(markdown, 'AI use') || 'AI training and generative use reserved';
  const rightsFile = cell(markdown, 'Rights file') || '[RIGHTS.md](RIGHTS.md)';
  const contents = [];
  const re = /^- \[[ xX]\] \[([^\]]+)\]\((manuscript\/[^)\s]+)\)/gm;
  let m;
  while ((m = re.exec(markdown))) {
    const file = m[2].replace(/^\.\//, '');
    const id = file.replace(/^manuscript\//, '').replace(/\.md$/i, '');
    contents.push({ title: m[1].trim(), file, id });
  }

  const isbn = cell(markdown, 'ISBN');
  const doi = cell(markdown, 'DOI');
  const explicitExternalLinks = mergeLinks(
    parseLinks(cell(markdown, 'Links')),
    parseLinks(cell(markdown, 'Find elsewhere'))
  );

  return {
    slug,
    title,
    status,
    authors,
    authorsRaw,
    authorLinks: mergeLinks(parseLinks(authorsRaw), parseLinks(cell(markdown, 'Author Links'))),
    chaptersCell,
    format: normalizeFormat(formatLabel),
    formatLabel: formatLabel || 'Book',
    publisher: cell(markdown, 'Publisher'),
    venue: cell(markdown, 'Venue'),
    doi,
    edition: cell(markdown, 'Edition'),
    language: cell(markdown, 'Language'),
    isbn,
    issn: cell(markdown, 'ISSN'),
    series: cell(markdown, 'Series'),
    volume: cell(markdown, 'Volume'),
    issue: cell(markdown, 'Issue'),
    publicationDate: cell(markdown, 'Publication date') || cell(markdown, 'Date'),
    frequency: cell(markdown, 'Frequency'),
    rights,
    aiUse,
    rightsFile,
    externalLinks: mergeLinks(
      explicitExternalLinks,
      identifierLinks(isbn, doi, explicitExternalLinks)
    ),
    tags: cell(markdown, 'Tags')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean),
    contents,
    published: status === 'Published',
  };
}
