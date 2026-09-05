// Desk adapter for Bookself's optional shelf/resume -> cover/read handoff.
// Shared Shelf runtime remains canonical; this module owns presentation continuity only.
let pending = null;
let cleanupTimer = 0;

function reducedMotionPreferred() {
  try { return !!matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; }
}

function routeSlug(href) {
  const match = String(href || '').match(/#\/b\/([^/?#]+)/);
  return match ? decodeURIComponent(match[1]) : '';
}

function cleanupPending() {
  clearTimeout(cleanupTimer);
  pending?.clone?.remove?.();
  document.body.classList.remove('book-handoff-cover-arriving','book-handoff-cover-reveal','book-handoff-resume-arriving');
  pending = null;
}

function captureSource(event) {
  if ((event.button != null && event.button !== 0) || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || reducedMotionPreferred()) return;
  const resume = event.target.closest?.('#continueCardLink');
  const volume = event.target.closest?.('.volume');
  const link = resume || volume;
  if (!link) return;
  const slug = routeSlug(link.getAttribute('href'));
  const source = resume ? (resume.querySelector('.continue-book-object') || resume) : volume;
  if (!slug || !source) return;
  const rect = source.getBoundingClientRect();
  if (rect.width < 8 || rect.height < 8) return;
  cleanupPending();
  const clone = source.cloneNode(true);
  clone.removeAttribute('id');
  clone.querySelectorAll('[id]').forEach((node) => node.removeAttribute('id'));
  clone.querySelectorAll('a,button,input,textarea,select,[tabindex]').forEach((node) => node.setAttribute('tabindex','-1'));
  clone.classList.add('book-handoff-clone', resume ? 'book-handoff-resume' : 'book-handoff-shelf');
  clone.setAttribute('aria-hidden','true');
  Object.assign(clone.style,{left:`${rect.left}px`,top:`${rect.top}px`,width:`${rect.width}px`,height:`${rect.height}px`});
  document.body.appendChild(clone);
  pending = { kind:resume ? 'resume' : 'shelf', slug, clone, sourceRect:rect };
  cleanupTimer = setTimeout(cleanupPending,2800);
}

function syncCoverMaterial() {
  const page = document.getElementById('coverPage');
  const face = document.getElementById('coverFront');
  const cloth = face?.style.getPropertyValue('--cloth').trim();
  if (page && cloth) page.style.setProperty('--book-handoff-cloth',cloth);
}

async function settlePending() {
  if (!pending) return;
  const stage = document.body.dataset.stage;
  if ((pending.kind === 'shelf' && stage !== 'cover') || (pending.kind === 'resume' && stage !== 'read')) return;
  const currentSlug = routeSlug(location.hash);
  if (currentSlug && currentSlug !== pending.slug) return cleanupPending();
  const paged = document.documentElement.dataset.readerMode !== 'scroll';
  const target = pending.kind === 'shelf' ? document.getElementById('coverPage') : ((paged && document.getElementById('pagesWrapper')?.getBoundingClientRect().width > 20) ? document.getElementById('pagesWrapper') : document.getElementById('bookStage'));
  if (!target) return;
  document.body.classList.add(pending.kind === 'shelf' ? 'book-handoff-cover-arriving' : 'book-handoff-resume-arriving');
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  if (!pending || !target.isConnected) return;
  const targetRect = target.getBoundingClientRect();
  if (targetRect.width < 20 || targetRect.height < 20 || typeof pending.clone.animate !== 'function') return cleanupPending();
  const { clone, kind, sourceRect } = pending;
  const endOpacity = kind === 'resume' ? .08 : .94;
  const animation = clone.animate([
    {left:`${sourceRect.left}px`,top:`${sourceRect.top}px`,width:`${sourceRect.width}px`,height:`${sourceRect.height}px`,opacity:1},
    {left:`${targetRect.left}px`,top:`${targetRect.top}px`,width:`${targetRect.width}px`,height:`${targetRect.height}px`,opacity:endOpacity}
  ],{duration:kind === 'shelf' ? 430 : 360,easing:'cubic-bezier(.2,.82,.24,1)',fill:'forwards'});
  await animation.finished.catch(() => {});
  if (pending?.clone !== clone) return;
  if (kind !== 'shelf') return cleanupPending();
  document.body.classList.add('book-handoff-cover-reveal');
  document.body.classList.remove('book-handoff-cover-arriving');
  if (typeof clone.animate !== 'function') return cleanupPending();
  const fade = clone.animate([{opacity:.94},{opacity:0}],{duration:240,easing:'ease-out',fill:'forwards'});
  await fade.finished.catch(() => {});
  if (pending?.clone === clone) cleanupPending();
}

function initialize() {
  document.documentElement.dataset.bookOpeningHandoff = 'true';
  syncCoverMaterial();
  document.addEventListener('click',captureSource,true);
  const observer = new MutationObserver(() => { syncCoverMaterial(); void settlePending(); });
  observer.observe(document.body,{attributes:true,attributeFilter:['data-stage']});
  window.addEventListener('popstate',cleanupPending);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',initialize,{once:true});
else initialize();
