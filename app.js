(() => {
  const db = window.NOTEBOOK;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const article = $('#article');
  const sidebarContent = $('#sidebarContent');
  const toc = $('#toc');
  const sidebar = $('#sidebar');
  const overlay = $('#mobileOverlay');
  const menuButton = $('#menuButton');
  const searchDialog = $('#searchDialog');
  const searchInput = $('#searchInput');
  const searchResults = $('#searchResults');
  const shortcutHint = $('#shortcutHint');
  const themeButton = $('#themeButton');
  const feedbackLink = $('#feedbackLink');

  let currentSlug = new URLSearchParams(location.search).get('note') || 'note-template';
  let activeResult = 0;
  let currentSearchItems = [];
  let observer = null;

  const stripHtml = (value = '') => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const escapeHtml = (value = '') => value.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function getNoteText(note) {
    const parts = [note.title, note.description, ...(note.keywords || [])];
    for (const section of note.sections || []) {
      parts.push(section.title);
      for (const block of section.blocks || []) {
        if (block.html) parts.push(stripHtml(block.html));
        if (block.jp) parts.push(stripHtml(block.jp));
        if (block.zh) parts.push(block.zh);
        if (block.question) parts.push(block.question, ...(block.options || []), block.answer || '', block.explanation || '');
        if (block.rows) parts.push(...block.rows.flat());
        if (block.lines) parts.push(...block.lines.flatMap(x => [stripHtml(x.jp || ''), x.zh || '']));
      }
    }
    return parts.join(' ');
  }

  function renderSidebar() {
    sidebarContent.innerHTML = `
      <div class="sidebar-section sidebar-intro">
        <div class="sidebar-caption">${escapeHtml(db.site.homeDescription)}</div>
      </div>
      ${db.groups.map(group => `
        <section class="sidebar-section" data-group="${group.id}">
          <button class="sidebar-group-title" aria-expanded="true">
            <span>${escapeHtml(group.title)}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          <div class="sidebar-items">
            ${group.items.map(item => `<a class="sidebar-link ${item.slug === currentSlug ? 'active' : ''}" href="?note=${encodeURIComponent(item.slug)}">${escapeHtml(item.title)}</a>`).join('')}
          </div>
        </section>
      `).join('')}
    `;

    $$('.sidebar-group-title', sidebarContent).forEach(btn => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        btn.parentElement.classList.toggle('collapsed', expanded);
      });
    });
  }

  function headingHtml(id, title, level = 2) {
    const tag = `h${Math.min(4, Math.max(2, level))}`;
    return `<${tag} id="${id}" class="section-heading"><a class="heading-anchor" href="#${id}" aria-label="複製 ${escapeHtml(title)} 連結">#</a>${escapeHtml(title)}</${tag}>`;
  }

  function renderBlock(block) {
    switch (block.type) {
      case 'p': return `<p>${block.html}</p>`;
      case 'heading': return headingHtml(block.id, block.title, block.level || 3);
      case 'callout': return `<aside class="callout ${block.tone || 'info'}"><div class="callout-icon">${block.tone === 'warning' ? '!' : 'i'}</div><div><strong>${escapeHtml(block.title || '')}</strong><div>${block.html}</div></div></aside>`;
      case 'table': return `<div class="table-wrap"><table><thead><tr>${block.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      case 'example': return `<div class="example"><div class="example-jp">${block.jp}</div><div class="example-zh">${escapeHtml(block.zh)}</div></div>`;
      case 'dialogue': return `<div class="dialogue">${block.lines.map(line => `<div class="dialogue-line"><div class="speaker">${escapeHtml(line.speaker)}</div><div><div class="dialogue-jp">${line.jp}</div><div class="dialogue-zh">${escapeHtml(line.zh)}</div></div></div>`).join('')}</div>`;
      case 'practice': return `<div class="practice-card"><div class="practice-label">練習</div><p>${escapeHtml(block.question)}</p><div class="option-list">${block.options.map((o, i) => `<span><b>${i + 1}</b>${escapeHtml(o)}</span>`).join('')}</div><button class="answer-button" type="button">顯示解答</button><div class="answer-panel" hidden><div class="answer-title">解答</div><div class="answer-text">${escapeHtml(block.answer)}</div><p>${escapeHtml(block.explanation)}</p></div></div>`;
      default: return '';
    }
  }

  function renderArticle() {
    const note = db.notes[currentSlug] || db.notes['note-template'];
    currentSlug = db.notes[currentSlug] ? currentSlug : 'note-template';
    document.title = `${note.title} - ${db.site.title}`;

    const breadcrumbs = `<div class="breadcrumbs"><a href="./">${escapeHtml(db.site.title)}</a><span>/</span><span>${escapeHtml(note.category)}</span></div>`;
    const content = note.sections.map(section => `
      <section class="content-section">
        ${headingHtml(section.id, section.title, section.level || 2)}
        ${section.blocks.map(renderBlock).join('')}
      </section>
    `).join('');

    const navCard = (item, dir) => item ? `<a class="pager-card ${dir}" href="?note=${encodeURIComponent(item.slug)}"><span class="pager-kicker">${dir === 'prev' ? 'Previous' : 'Next'}</span><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.description || '')}</span></a>` : '<div></div>';

    article.innerHTML = `
      ${breadcrumbs}
      <header class="article-header">
        <h1>${escapeHtml(note.title)}</h1>
        <p class="lead">${escapeHtml(note.description)}</p>
      </header>
      <hr class="rule" />
      ${content}
      <div class="updated">最近更新：${escapeHtml(note.updated)}</div>
      <nav class="pager" aria-label="前後篇導覽">${navCard(note.prev, 'prev')}${navCard(note.next, 'next')}</nav>
      <section class="feedback" id="feedback"><strong>這份筆記有需要補充嗎？</strong><span>把 feedbackUrl 改成你的 GitHub Issues，就能把這裡接成回饋入口。</span></section>
    `;

    $$('.answer-button', article).forEach(btn => {
      btn.addEventListener('click', () => {
        const panel = btn.nextElementSibling;
        const isHidden = panel.hidden;
        panel.hidden = !isHidden;
        btn.textContent = isHidden ? '收合解答' : '顯示解答';
      });
    });

    $$('.heading-anchor', article).forEach(anchor => {
      anchor.addEventListener('click', async () => {
        const url = `${location.origin}${location.pathname}${location.search}${anchor.getAttribute('href')}`;
        try { await navigator.clipboard.writeText(url); } catch (_) {}
      });
    });

    renderToc();
  }

  function renderToc() {
    const headings = $$('.section-heading', article);
    toc.innerHTML = headings.map(h => `<a href="#${h.id}" data-target="${h.id}" class="toc-level-${h.tagName === 'H3' ? '3' : '2'}">${escapeHtml(h.textContent.replace(/^#/, ''))}</a>`).join('');

    if (observer) observer.disconnect();
    observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;
      const id = visible[0].target.id;
      $$('.toc a', toc).forEach(a => a.classList.toggle('active', a.dataset.target === id));
    }, { rootMargin: '-90px 0px -70% 0px', threshold: [0, 1] });
    headings.forEach(h => observer.observe(h));
  }

  function openSearch() {
    if (!searchDialog.open) searchDialog.showModal();
    searchInput.value = '';
    renderSearch('');
    requestAnimationFrame(() => searchInput.focus());
  }

  function closeSearch() {
    if (searchDialog.open) searchDialog.close();
  }

  function renderSearch(query) {
    const q = query.trim().toLocaleLowerCase('zh-Hant');
    currentSearchItems = Object.entries(db.notes)
      .map(([slug, note]) => ({ slug, note, haystack: getNoteText(note).toLocaleLowerCase('zh-Hant') }))
      .filter(x => !q || x.haystack.includes(q) || x.note.title.toLocaleLowerCase('zh-Hant').includes(q))
      .slice(0, 8);

    activeResult = Math.min(activeResult, Math.max(0, currentSearchItems.length - 1));
    if (!currentSearchItems.length) {
      searchResults.innerHTML = `<div class="search-empty">找不到符合「${escapeHtml(query)}」的筆記</div>`;
      return;
    }
    searchResults.innerHTML = currentSearchItems.map((x, i) => `<button class="search-result ${i === activeResult ? 'active' : ''}" role="option" aria-selected="${i === activeResult}" data-slug="${x.slug}"><span class="result-category">${escapeHtml(x.note.category)}</span><strong>${escapeHtml(x.note.title)}</strong><span>${escapeHtml(x.note.description)}</span></button>`).join('');
    $$('.search-result', searchResults).forEach((btn, i) => {
      btn.addEventListener('mouseenter', () => { activeResult = i; updateActiveSearchResult(); });
      btn.addEventListener('click', () => goToNote(btn.dataset.slug));
    });
  }

  function updateActiveSearchResult() {
    $$('.search-result', searchResults).forEach((el, i) => {
      el.classList.toggle('active', i === activeResult);
      el.setAttribute('aria-selected', String(i === activeResult));
      if (i === activeResult) el.scrollIntoView({ block: 'nearest' });
    });
  }

  function goToNote(slug) {
    closeSearch();
    location.href = `?note=${encodeURIComponent(slug)}`;
  }

  function toggleMobileMenu(force) {
    const next = typeof force === 'boolean' ? force : !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', next);
    overlay.classList.toggle('show', next);
    menuButton.setAttribute('aria-expanded', String(next));
    document.body.classList.toggle('no-scroll', next);
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('note-theme', theme);
  }

  function initTheme() {
    const stored = localStorage.getItem('note-theme');
    const preferred = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(stored || preferred);
  }

  function bindEvents() {
    feedbackLink.href = db.site.feedbackUrl || '#feedback';
    $('#searchTrigger').addEventListener('click', openSearch);
    menuButton.addEventListener('click', () => toggleMobileMenu());
    overlay.addEventListener('click', () => toggleMobileMenu(false));
    themeButton.addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

    searchInput.addEventListener('input', e => { activeResult = 0; renderSearch(e.target.value); });
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); activeResult = Math.min(activeResult + 1, currentSearchItems.length - 1); updateActiveSearchResult(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); activeResult = Math.max(activeResult - 1, 0); updateActiveSearchResult(); }
      if (e.key === 'Enter' && currentSearchItems[activeResult]) { e.preventDefault(); goToNote(currentSearchItems[activeResult].slug); }
    });

    searchDialog.addEventListener('click', e => { if (e.target === searchDialog) closeSearch(); });
    document.addEventListener('keydown', e => {
      const isSearchShortcut = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
      if (isSearchShortcut) { e.preventDefault(); openSearch(); }
      if (e.key === 'Escape' && sidebar.classList.contains('open')) toggleMobileMenu(false);
    });

    matchMedia('(min-width: 1025px)').addEventListener('change', e => { if (e.matches) toggleMobileMenu(false); });
  }

  function initPlatformHint() {
    const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
    shortcutHint.textContent = isMac ? '⌘ K' : 'Ctrl K';
  }

  initTheme();
  initPlatformHint();
  renderSidebar();
  renderArticle();
  bindEvents();
})();
