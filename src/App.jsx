import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import notebook from './data.js';

const DEFAULT_SLUG = 'note-template';

const stripHtml = (value = '') => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

function getSlugFromLocation() {
  const slug = new URLSearchParams(window.location.search).get('note');
  return notebook.notes[slug] ? slug : DEFAULT_SLUG;
}

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
      if (block.lines) parts.push(...block.lines.flatMap(line => [stripHtml(line.jp || ''), line.zh || '']));
    }
  }
  return parts.join(' ');
}

function buildToc(note) {
  const entries = [];
  for (const section of note.sections || []) {
    entries.push({ id: section.id, title: section.title, level: section.level || 2 });
    for (const block of section.blocks || []) {
      if (block.type === 'heading') entries.push({ id: block.id, title: block.title, level: block.level || 3 });
    }
  }
  return entries;
}

function Icon({ name }) {
  const common = { viewBox: '0 0 24 24', 'aria-hidden': true };
  switch (name) {
    case 'menu':
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case 'search':
      return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>;
    case 'panel-close':
      return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16M14 9l-3 3 3 3" /></svg>;
    case 'panel-open':
      return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16M11 9l3 3-3 3" /></svg>;
    case 'reading':
      return <svg {...common}><path d="M5 5h7M8.5 5v8M5.8 9h5.4M4 15h9M16 6h4M18 6v12M15 11h6" /></svg>;
    case 'moon':
      return <svg {...common}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" /></svg>;
    default:
      return null;
  }
}

function ToggleSwitch({ on }) {
  return <span className={`toggle-switch ${on ? 'on' : ''}`} aria-hidden="true"><span /></span>;
}

function SettingButton({ icon, title, subtitle, on, onClick }) {
  return (
    <button className="sidebar-setting" type="button" aria-pressed={on} onClick={onClick}>
      <span className="sidebar-setting-icon"><Icon name={icon} /></span>
      <span className="sidebar-setting-copy">
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </span>
      <ToggleSwitch on={on} />
    </button>
  );
}

function Heading({ id, title, level = 2 }) {
  const tag = `h${Math.min(4, Math.max(2, level))}`;
  const handleAnchor = async event => {
    event.preventDefault();
    const nextUrl = `${window.location.pathname}${window.location.search}#${id}`;
    window.history.replaceState(null, '', nextUrl);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    try { await navigator.clipboard.writeText(window.location.href); } catch (_) { /* clipboard is optional */ }
  };

  return React.createElement(
    tag,
    { id, className: 'section-heading' },
    <a className="heading-anchor" href={`#${id}`} aria-label={`複製 ${title} 連結`} onClick={handleAnchor}>#</a>,
    title
  );
}

function PracticeBlock({ block }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="practice-card">
      <div className="practice-label">練習</div>
      <p>{block.question}</p>
      <div className="option-list">
        {block.options.map((option, index) => <span key={`${option}-${index}`}><b>{index + 1}</b>{option}</span>)}
      </div>
      <button className="answer-button" type="button" onClick={() => setOpen(value => !value)}>{open ? '收合解答' : '顯示解答'}</button>
      {open && (
        <div className="answer-panel">
          <div className="answer-title">解答</div>
          <div className="answer-text">{block.answer}</div>
          <p>{block.explanation}</p>
        </div>
      )}
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return <p dangerouslySetInnerHTML={{ __html: block.html }} />;
    case 'heading':
      return <Heading id={block.id} title={block.title} level={block.level || 3} />;
    case 'callout':
      return (
        <aside className={`callout ${block.tone || 'info'}`}>
          <div className="callout-icon">{block.tone === 'warning' ? '!' : 'i'}</div>
          <div><strong>{block.title || ''}</strong><div dangerouslySetInnerHTML={{ __html: block.html }} /></div>
        </aside>
      );
    case 'table':
      return (
        <div className="table-wrap">
          <table>
            <thead><tr>{block.headers.map(header => <th key={header}>{header}</th>)}</tr></thead>
            <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    case 'example':
      return <div className="example"><div className="example-jp" dangerouslySetInnerHTML={{ __html: block.jp }} /><div className="example-zh">{block.zh}</div></div>;
    case 'dialogue':
      return (
        <div className="dialogue">
          {block.lines.map((line, index) => (
            <div className="dialogue-line" key={`${line.speaker}-${index}`}>
              <div className="speaker">{line.speaker}</div>
              <div><div className="dialogue-jp" dangerouslySetInnerHTML={{ __html: line.jp }} /><div className="dialogue-zh">{line.zh}</div></div>
            </div>
          ))}
        </div>
      );
    case 'practice':
      return <PracticeBlock block={block} />;
    default:
      return null;
  }
}

function App() {
  const [currentSlug, setCurrentSlug] = useState(getSlugFromLocation);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => localStorage.getItem('note-sidebar-collapsed') === 'true');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState({});
  const [theme, setTheme] = useState(() => localStorage.getItem('note-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  const [showFurigana, setShowFurigana] = useState(() => localStorage.getItem('note-furigana') !== 'hidden');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeResult, setActiveResult] = useState(0);
  const [activeToc, setActiveToc] = useState('');
  const searchDialogRef = useRef(null);
  const searchInputRef = useRef(null);

  const note = notebook.notes[currentSlug] || notebook.notes[DEFAULT_SLUG];
  const tocEntries = useMemo(() => buildToc(note), [note]);

  const searchItems = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase('zh-Hant');
    return Object.entries(notebook.notes)
      .map(([slug, item]) => ({ slug, note: item, haystack: getNoteText(item).toLocaleLowerCase('zh-Hant') }))
      .filter(item => !query || item.haystack.includes(query) || item.note.title.toLocaleLowerCase('zh-Hant').includes(query))
      .slice(0, 8);
  }, [searchQuery]);

  const navigate = useCallback((slug, { replace = false } = {}) => {
    const safeSlug = notebook.notes[slug] ? slug : DEFAULT_SLUG;
    const nextUrl = `${window.location.pathname}?note=${encodeURIComponent(safeSlug)}`;
    window.history[replace ? 'replaceState' : 'pushState']({ slug: safeSlug }, '', nextUrl);
    setCurrentSlug(safeSlug);
    setMobileOpen(false);
    setSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentSlug(getSlugFromLocation());
      setMobileOpen(false);
      setSearchOpen(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('note-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.furigana = showFurigana ? 'shown' : 'hidden';
    localStorage.setItem('note-furigana', showFurigana ? 'shown' : 'hidden');
  }, [showFurigana]);

  useEffect(() => {
    localStorage.setItem('note-sidebar-collapsed', String(sidebarCollapsed));
  }, [sidebarCollapsed]);

  useEffect(() => {
    document.title = `${note.title} - ${notebook.site.title}`;
    const hash = window.location.hash.slice(1);
    if (hash) requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ block: 'start' }));
  }, [note]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', mobileOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [mobileOpen]);

  useEffect(() => {
    const media = matchMedia('(min-width: 1025px)');
    const handleChange = event => { if (event.matches) setMobileOpen(false); };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const dialog = searchDialogRef.current;
    if (!dialog) return;
    if (searchOpen && !dialog.open) {
      dialog.showModal();
      requestAnimationFrame(() => searchInputRef.current?.focus());
    } else if (!searchOpen && dialog.open) {
      dialog.close();
    }
  }, [searchOpen]);

  useEffect(() => setActiveResult(0), [searchQuery]);

  useEffect(() => {
    setActiveResult(index => Math.min(index, Math.max(0, searchItems.length - 1)));
  }, [searchItems.length]);

  useEffect(() => {
    const headings = [...document.querySelectorAll('.section-heading')];
    if (!headings.length) return undefined;
    setActiveToc(headings[0].id);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveToc(visible[0].target.id);
    }, { rootMargin: '-90px 0px -70% 0px', threshold: [0, 1] });
    headings.forEach(heading => observer.observe(heading));
    return () => observer.disconnect();
  }, [currentSlug]);

  useEffect(() => {
    const handleKeyDown = event => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchQuery('');
        setSearchOpen(true);
      }
      if (event.key === 'Escape' && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const openSearch = () => {
    setSearchQuery('');
    setActiveResult(0);
    setSearchOpen(true);
  };

  const handleSearchKeyDown = event => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveResult(index => Math.min(index + 1, searchItems.length - 1));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveResult(index => Math.max(index - 1, 0));
    }
    if (event.key === 'Enter' && searchItems[activeResult]) {
      event.preventDefault();
      navigate(searchItems[activeResult].slug);
    }
  };

  const handleNoteLink = (event, slug) => {
    event.preventDefault();
    navigate(slug);
  };

  const scrollToHeading = (event, id) => {
    event.preventDefault();
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const isMac = /Mac|iPhone|iPad/.test(navigator.platform);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <button className="icon-button mobile-only" aria-label="開啟目錄" aria-expanded={mobileOpen} onClick={() => setMobileOpen(value => !value)}><Icon name="menu" /></button>
          <a className="brand" href="?note=note-template" aria-label="日本語筆記首頁" onClick={event => handleNoteLink(event, DEFAULT_SLUG)}>
            <span className="brand-mark">上</span><span className="brand-text">日本語筆記</span>
          </a>

          <button className="search-trigger" type="button" aria-label="搜尋筆記" onClick={openSearch}>
            <Icon name="search" /><span>Search</span><kbd>{isMac ? '⌘ K' : 'Ctrl K'}</kbd>
          </button>

          <nav className="topnav desktop-only" aria-label="主要導覽">
            <a href={notebook.site.feedbackUrl || '#feedback'}>意見回饋</a>
            <a href="?note=note-template" onClick={event => handleNoteLink(event, 'note-template')}>文法筆記</a>
            <a href="?note=vocabulary-template" onClick={event => handleNoteLink(event, 'vocabulary-template')}>單字練習</a>
          </nav>
        </div>
      </header>

      <div className={`mobile-overlay ${mobileOpen ? 'show' : ''}`} onClick={() => setMobileOpen(false)} />

      <div className={`docs-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <div className="sidebar-rail desktop-sidebar-rail" aria-label="側邊欄控制">
          <button className="rail-button" type="button" aria-label={sidebarCollapsed ? '展開側邊欄' : '摺疊側邊欄'} onClick={() => setSidebarCollapsed(value => !value)}>
            <Icon name={sidebarCollapsed ? 'panel-open' : 'panel-close'} />
          </button>
        </div>

        <aside className={`sidebar ${mobileOpen ? 'open' : ''}`} aria-label="筆記目錄">
          <div className="sidebar-scroll">
            <div className="sidebar-section sidebar-intro"><div className="sidebar-caption">{notebook.site.homeDescription}</div></div>
            {notebook.groups.map(group => {
              const collapsed = Boolean(collapsedGroups[group.id]);
              return (
                <section className={`sidebar-section ${collapsed ? 'collapsed' : ''}`} data-group={group.id} key={group.id}>
                  <button className="sidebar-group-title" type="button" aria-expanded={!collapsed} onClick={() => setCollapsedGroups(value => ({ ...value, [group.id]: !value[group.id] }))}>
                    <span>{group.title}</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
                  </button>
                  <div className="sidebar-items">
                    {group.items.map(item => (
                      <a className={`sidebar-link ${item.slug === currentSlug ? 'active' : ''}`} href={`?note=${encodeURIComponent(item.slug)}`} onClick={event => handleNoteLink(event, item.slug)} key={item.slug}>{item.title}</a>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="sidebar-footer">
            <SettingButton icon="reading" title="顯示漢字讀音" subtitle={showFurigana ? '平假名顯示中' : '平假名已隱藏'} on={showFurigana} onClick={() => setShowFurigana(value => !value)} />
            <SettingButton icon="moon" title="深色模式" subtitle={theme === 'dark' ? '目前使用深色' : '目前使用淺色'} on={theme === 'dark'} onClick={() => setTheme(value => value === 'dark' ? 'light' : 'dark')} />
          </div>
        </aside>

        <main className="main-column">
          <article className="article">
            <div className="breadcrumbs"><a href="?note=note-template" onClick={event => handleNoteLink(event, DEFAULT_SLUG)}>{notebook.site.title}</a><span>/</span><span>{note.category}</span></div>
            <header className="article-header"><h1>{note.title}</h1><p className="lead">{note.description}</p></header>
            <hr className="rule" />

            {note.sections.map(section => (
              <section className="content-section" key={section.id}>
                <Heading id={section.id} title={section.title} level={section.level || 2} />
                {section.blocks.map((block, index) => <Block block={block} key={`${section.id}-${block.id || block.type}-${index}`} />)}
              </section>
            ))}

            <div className="updated">最近更新：{note.updated}</div>
            <nav className="pager" aria-label="前後篇導覽">
              {note.prev ? <a className="pager-card prev" href={`?note=${encodeURIComponent(note.prev.slug)}`} onClick={event => handleNoteLink(event, note.prev.slug)}><span className="pager-kicker">Previous</span><strong>{note.prev.title}</strong><span>{note.prev.description || ''}</span></a> : <div />}
              {note.next ? <a className="pager-card next" href={`?note=${encodeURIComponent(note.next.slug)}`} onClick={event => handleNoteLink(event, note.next.slug)}><span className="pager-kicker">Next</span><strong>{note.next.title}</strong><span>{note.next.description || ''}</span></a> : <div />}
            </nav>
            <section className="feedback" id="feedback"><strong>這份筆記有需要補充嗎？</strong><span>把 feedbackUrl 改成你的 GitHub Issues，就能把這裡接成回饋入口。</span></section>
          </article>
        </main>

        <aside className="toc-column" aria-label="本頁目錄">
          <div className="toc-sticky">
            <div className="toc-title">On this page</div>
            <nav className="toc">
              {tocEntries.map(entry => <a href={`#${entry.id}`} className={`toc-level-${entry.level} ${activeToc === entry.id ? 'active' : ''}`} onClick={event => scrollToHeading(event, entry.id)} key={entry.id}>{entry.title}</a>)}
            </nav>
          </div>
        </aside>
      </div>

      <dialog className="search-dialog" ref={searchDialogRef} aria-label="搜尋筆記" onClose={() => setSearchOpen(false)} onClick={event => { if (event.target === searchDialogRef.current) setSearchOpen(false); }}>
        <div className="search-panel">
          <div className="search-input-wrap"><Icon name="search" /><input ref={searchInputRef} type="search" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} onKeyDown={handleSearchKeyDown} placeholder="搜尋標題、內容或關鍵字…" autoComplete="off" /><kbd>Esc</kbd></div>
          <div className="search-results" role="listbox">
            {searchItems.length ? searchItems.map((item, index) => (
              <button className={`search-result ${index === activeResult ? 'active' : ''}`} role="option" aria-selected={index === activeResult} type="button" onMouseEnter={() => setActiveResult(index)} onClick={() => navigate(item.slug)} key={item.slug}>
                <span className="result-category">{item.note.category}</span><strong>{item.note.title}</strong><span>{item.note.description}</span>
              </button>
            )) : <div className="search-empty">找不到符合「{searchQuery}」的筆記</div>}
          </div>
          <div className="search-footer"><span><kbd>↑</kbd><kbd>↓</kbd> 選擇</span><span><kbd>Enter</kbd> 開啟</span></div>
        </div>
      </dialog>
    </>
  );
}

export default App;
