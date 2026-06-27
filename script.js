/* ===================================================
   script.js — Portfolio OS v2.0
   IDE Navigation, Theme Engine & Interactions
   =================================================== */

// ============================================================
// STATE
// ============================================================
let currentFile  = 'readme';
let openTabs     = ['readme'];
let searchSelectedIndex = 0;
let searchResults = [];

let settings = {
  theme:        'light',
  fontSize:     14,
  smoothScroll: true,
  statusBar:    true,
  compact:      false,
};

// ============================================================
// SVG ICON REGISTRY
// ============================================================
const ICONS = {
  'file-code': `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/></svg>`,
  'info':       `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  'file-text':  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  'folder-kanban': `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/></svg>`,
  'mail':       `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>`,
  'video':      `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>`,
  'trophy': `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  'shield':     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  'settings':   `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  'search':     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
};

// File color coding
const FILE_COLORS = {
  'readme':   '#e8ab53',
  'about':    '#4ec9b0',
  'resume':   '#9cdcfe',
  'projects': '#ffcb6b',
  'contact':  '#82aaff',
  'vlogs':    '#c792ea',
  'achievements': '#ffd700',
  'settings': '#9cdcfe',
  'search-google': '#4285F4',
};

// ============================================================
// FILE METADATA
// ============================================================
const FILES = [
  { id: 'readme',   label: 'README.md',    icon: 'file-code',    desc: 'Home — intro and overview',      lang: 'MD'   },
  { id: 'about',    label: 'about.mdx',    icon: 'info',         desc: 'About me, skills, education',    lang: 'MDX'  },
  { id: 'resume',   label: 'resume.md',    icon: 'file-text',    desc: 'Experience, projects, skills',   lang: 'MD'   },
  { id: 'projects', label: 'projects.md',  icon: 'folder-kanban',desc: 'All projects with demos',        lang: 'MD'   },
  { id: 'contact',  label: 'contact.mdx',  icon: 'mail',         desc: 'Get in touch',                   lang: 'MDX'  },
  { id: 'vlogs',    label: 'vlogs.md',     icon: 'video',        desc: 'Videos and dev vlogs',           lang: 'MD'   },
  { id: 'achievements', label: 'achievements.md', icon: 'trophy', desc: 'Achievements and Certificates', lang: 'MD' },
];

const OUTLINE_MAP = {
  readme:   [{ id:'what-i-do', label:'What I Do' }, { id:'featured-projects', label:'Featured Projects' }, { id:'current-focus', label:'Current Focus' }],
  about:    [{ id:'skills', label:'Skills' }, { id:'education', label:'Education' }],
  resume:   [{ id:'experience', label:'Experience' }, { id:'projects', label:'Projects' }, { id:'education', label:'Education' }],
  projects: [],
  contact:  [],
  vlogs:    [],
  achievements: [],
  settings: [],
};

// ============================================================
// DOM REFS
// ============================================================
const contentView    = document.getElementById('content-view');
const tabsBar        = document.getElementById('tabs');
const breadcrumb     = document.getElementById('breadcrumb');
const fileList       = document.getElementById('file-list');
const outlineSection = document.getElementById('outline-section');
const rightOutlineSection = document.getElementById('right-outline-section');
const searchOverlay  = document.getElementById('search-overlay');
const searchInput    = document.getElementById('search-input');
const searchResultsEl= document.getElementById('search-results');
const statusFile     = document.getElementById('status-file');
const statusLang     = document.getElementById('status-lang');
const statusbar      = document.getElementById('statusbar');
const sidebar        = document.getElementById('sidebar');
const statusTheme    = document.getElementById('status-theme');
const toastContainer = document.getElementById('toast-container');

// ============================================================
// BOOT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  renderFileList();
  openFile('readme', false);
  setupKeyBindings();
  setupActivityBar();
  startClock();
});

// ============================================================
// SETTINGS — PERSISTENCE
// ============================================================
function loadSettings() {
  try {
    const saved = localStorage.getItem('portfolio-settings');
    if (saved) {
      const parsed = JSON.parse(saved);
      // If user explicitly chose a theme before, respect it; otherwise use new default (light)
      settings = { ...settings, ...parsed };
    }
    // Clear any stale cached 'dark-plus' that predates the user's light-default preference
    // Only honour it if the user explicitly opened Settings and clicked a theme
    if (!localStorage.getItem('portfolio-theme-chosen')) {
      settings.theme = 'light';
    }
  } catch(e) {}

  applyAllSettings();
}

function saveSettings() {
  try {
    localStorage.setItem('portfolio-settings', JSON.stringify(settings));
  } catch(e) {}
}

function applyAllSettings() {
  // Theme
  document.documentElement.setAttribute('data-theme', settings.theme);

  // Font size
  document.getElementById('content-view').style.fontSize = settings.fontSize + 'px';

  // Status bar visibility
  if (statusbar) statusbar.style.display = settings.statusBar ? 'flex' : 'none';

  // Smooth scroll
  if (contentView) contentView.style.scrollBehavior = settings.smoothScroll ? 'smooth' : 'auto';

  // Compact sidebar
  if (sidebar) sidebar.style.width = settings.compact ? '200px' : '248px';

  // Update status bar theme label
  if (statusTheme) statusTheme.textContent = settings.theme.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase());
}

// ============================================================
// THEME ENGINE
// ============================================================
function applyTheme(themeId, cardEl) {
  settings.theme = themeId;
  saveSettings();
  localStorage.setItem('portfolio-theme-chosen', '1'); // remember user picked explicitly

  // Update DOM
  document.documentElement.setAttribute('data-theme', themeId);

  // Update theme cards
  document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active'));
  if (cardEl) cardEl.classList.add('active');

  // Update status bar
  if (statusTheme) statusTheme.textContent = themeId.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase());

  showToast(`🎨 Theme applied: ${themeId.replace(/-/g,' ')}`, 'success');
}

// ============================================================
// FONT SIZE
// ============================================================
function changeFontSize(delta) {
  settings.fontSize = Math.min(22, Math.max(11, settings.fontSize + delta));
  saveSettings();

  if (contentView) contentView.style.fontSize = settings.fontSize + 'px';

  const el = document.getElementById('font-size-val');
  if (el) el.textContent = settings.fontSize + 'px';
}

// ============================================================
// TOGGLE SETTINGS
// ============================================================
function toggleSetting(btnEl, key) {
  btnEl.classList.toggle('on');
  settings[key] = btnEl.classList.contains('on');
  saveSettings();
  applyAllSettings();
}

function resetSettings() {
  settings = { theme:'light', fontSize:14, smoothScroll:true, statusBar:true, compact:false };
  saveSettings();
  localStorage.removeItem('portfolio-theme-chosen');
  applyAllSettings();

  // Refresh settings page
  openFile('settings');
  showToast('⚙️ Settings reset to defaults', 'info');
}

// ============================================================
// OPEN FILE
// ============================================================
function openFile(id, scrollToTop = true) {
  const file = CONTENT[id];
  if (!file) return;

  currentFile = id;

  if (!openTabs.includes(id)) {
    openTabs.push(id);
  }

  renderTabs();
  renderBreadcrumb(file, id);
  renderContent(file, id);
  updateFileList();
  renderOutline(id);
  updateStatusBar(file, id);

  // Re-sync settings controls if settings page
  if (id === 'settings') {
    setTimeout(() => syncSettingsUI(), 50);
  }

  if (scrollToTop && contentView) contentView.scrollTop = 0;
}

// ============================================================
// SYNC SETTINGS UI STATE (after render)
// ============================================================
function syncSettingsUI() {
  // Font size
  const fsEl = document.getElementById('font-size-val');
  if (fsEl) fsEl.textContent = settings.fontSize + 'px';

  // Toggles
  const syncToggle = (id, key) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (settings[key]) el.classList.add('on'); else el.classList.remove('on');
  };

  syncToggle('toggle-smooth', 'smoothScroll');
  syncToggle('toggle-statusbar', 'statusBar');
  syncToggle('toggle-compact', 'compact');

  // Active theme card
  document.querySelectorAll('.theme-card').forEach(c => {
    c.classList.toggle('active', c.dataset.theme === settings.theme);
  });
}

// ============================================================
// RENDER TABS
// ============================================================
function renderTabs() {
  tabsBar.innerHTML = '';

  openTabs.forEach(id => {
    const file = CONTENT[id];
    if (!file) return;
    const meta  = FILES.find(f => f.id === id) || { icon: 'settings', label: file.title };
    const color = FILE_COLORS[id] || '#ccc';

    const tab = document.createElement('div');
    tab.className = `tab ${id === currentFile ? 'active' : ''}`;
    tab.dataset.id = id;
    tab.innerHTML = `
      <span class="tab-icon" style="color:${color}">${ICONS[meta.icon] || ICONS['file-code']}</span>
      <span class="tab-filename">${file.title}</span>
      <span class="tab-close" data-close="${id}" title="Close tab">×</span>
    `;

    tab.addEventListener('click', e => {
      if (e.target.closest('.tab-close')) return;
      openFile(id);
    });

    tabsBar.appendChild(tab);
  });

  tabsBar.querySelectorAll('.tab-close').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      closeTab(btn.dataset.close);
    });
  });
}

// ============================================================
// CLOSE TAB
// ============================================================
function closeTab(id) {
  const idx = openTabs.indexOf(id);
  if (idx === -1) return;

  openTabs.splice(idx, 1);

  if (openTabs.length === 0) {
    openTabs = ['readme'];
    openFile('readme');
  } else if (currentFile === id) {
    const newIdx = Math.min(idx, openTabs.length - 1);
    openFile(openTabs[newIdx]);
  } else {
    renderTabs();
  }
}

// ============================================================
// BREADCRUMB
// ============================================================
function renderBreadcrumb(file, id) {
  const color = FILE_COLORS[id] || 'var(--accent)';
  breadcrumb.innerHTML = `
    <div class="breadcrumb-path">
      <span>yash-vijay-date</span>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-filename" style="color:${color}">${file.title}</span>
    </div>
    <div class="breadcrumb-actions">
      <button class="breadcrumb-btn" onclick="contentView.scrollTop=0" title="Scroll to top">↑ Top</button>
    </div>
  `;
}

// ============================================================
// RENDER CONTENT
// ============================================================
function renderContent(file, id) {
  contentView.innerHTML = `<div id="doc-wrapper">${file.content}</div>`;
  // Apply current font size
  contentView.style.fontSize = settings.fontSize + 'px';
}

// ============================================================
// FILE LIST
// ============================================================
function renderFileList() {
  fileList.innerHTML = '';
  FILES.forEach(f => {
    const color = FILE_COLORS[f.id] || '#ccc';
    const btn = document.createElement('button');
    btn.className = `file-item ${f.id === currentFile ? 'active' : ''}`;
    btn.dataset.id = f.id;
    btn.innerHTML = `
      <span class="file-icon" style="color:${color}">${ICONS[f.icon]}</span>
      <span class="file-name">${f.label}</span>
      <span class="file-lang-badge">${f.lang}</span>
    `;
    btn.addEventListener('click', () => openFile(f.id));
    fileList.appendChild(btn);
  });
}

function updateFileList() {
  fileList.querySelectorAll('.file-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.id === currentFile);
  });
}

// ============================================================
// OUTLINE
// ============================================================
function renderOutline(id) {
  const items = OUTLINE_MAP[id] || [];
  outlineSection.innerHTML = '';

  items.forEach(item => {
    const a = document.createElement('a');
    a.className = 'outline-item';
    a.href = `#${item.id}`;
    a.innerHTML = `<span class="outline-dot"></span><span>${item.label}</span>`;
    a.addEventListener('click', e => {
      e.preventDefault();
      const el = contentView.querySelector(`#${item.id}, [id="${item.id}"]`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    outlineSection.appendChild(a);
  });
}

// ============================================================
// STATUS BAR
// ============================================================
function updateStatusBar(file, id) {
  if (statusFile) statusFile.textContent = file.title;
  if (statusLang) statusLang.textContent = file.language.toUpperCase();
}

function startClock() {
  const clockEl = document.getElementById('status-clock');
  if (!clockEl) return;

  const update = () => {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
  };
  update();
  setInterval(update, 1000);
}

// ============================================================
// SEARCH
// ============================================================
function openSearch() {
  searchOverlay.classList.add('visible');
  searchInput.value = '';
  searchSelectedIndex = 0;
  searchInput.focus();
  renderSearchResults('');
}

function closeSearch() {
  searchOverlay.classList.remove('visible');
  searchSelectedIndex = 0;
}

function renderSearchResults(query) {
  const q = query.trim().toLowerCase();

  const allItems = [
    ...FILES.map(f => ({ ...f, type: 'file' })),
    { id:'settings', label:'settings.json', icon:'settings', desc:'Themes, font size, preferences', lang:'JSON', type:'file' },
  ];

  searchResults = q === ''
    ? allItems
    : allItems.filter(f =>
        f.label.toLowerCase().includes(q) ||
        f.desc.toLowerCase().includes(q) ||
        f.id.toLowerCase().includes(q)
      );

  if (q !== '') {
    searchResults.push({
      id: 'search-google',
      label: `Search Google for "${query}"`,
      icon: 'search',
      desc: 'Web Search',
      lang: 'WEB'
    });
  }

  if (searchResults.length === 0) {
    searchResultsEl.innerHTML = `
      <div class="search-no-results">
        <div class="search-no-results-icon">🔍</div>
        No results found for <strong>"${query}"</strong>
      </div>`;
    return;
  }

  searchResultsEl.innerHTML = searchResults.map((f, i) => {
    const color = FILE_COLORS[f.id] || '#ccc';
    return `
      <div class="search-result-item ${i === searchSelectedIndex ? 'selected' : ''}" data-id="${f.id}">
        <span class="search-result-icon" style="color:${color}">${ICONS[f.icon] || ICONS['file-code']}</span>
        <div class="search-result-body">
          <div class="search-result-title">${f.label}</div>
          <div class="search-result-desc">${f.desc}</div>
        </div>
        <span class="search-result-badge">${f.lang || 'FILE'}</span>
      </div>`;
  }).join('');

  searchResultsEl.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.id;
      if (id === 'search-google') {
        window.open('https://www.google.com/search?q=' + encodeURIComponent(query.trim()), '_blank');
      } else {
        openFile(id);
      }
      closeSearch();
    });
  });
}

// ============================================================
// ACTIVITY BAR
// ============================================================
function setupActivityBar() {
  document.querySelectorAll('.activity-item[data-file]').forEach(item => {
    item.addEventListener('click', () => {
      const fileId = item.dataset.file;
      openFile(fileId);

      document.querySelectorAll('.activity-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Settings activity item
  const settingsBtn = document.getElementById('settings-activity-btn');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      openFile('settings');
      document.querySelectorAll('.activity-item').forEach(i => i.classList.remove('active'));
      settingsBtn.classList.add('active');
    });
  }
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
function setupKeyBindings() {
  document.addEventListener('keydown', e => {
    // Ctrl+K  — search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
      return;
    }

    // Ctrl+, — settings
    if ((e.ctrlKey || e.metaKey) && e.key === ',') {
      e.preventDefault();
      openFile('settings');
      return;
    }

    // Escape — close search
    if (e.key === 'Escape' && searchOverlay.classList.contains('visible')) {
      closeSearch();
      return;
    }

    // Arrow navigation in search
    if (searchOverlay.classList.contains('visible')) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        searchSelectedIndex = Math.min(searchSelectedIndex + 1, searchResults.length - 1);
        renderSearchResults(searchInput.value);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        searchSelectedIndex = Math.max(searchSelectedIndex - 1, 0);
        renderSearchResults(searchInput.value);
      } else if (e.key === 'Enter') {
        if (searchResults[searchSelectedIndex]) {
          openFile(searchResults[searchSelectedIndex].id);
          closeSearch();
        }
      }
    }

    // Ctrl+Tab — cycle tabs
    if ((e.ctrlKey || e.metaKey) && e.key === 'Tab') {
      e.preventDefault();
      const idx = openTabs.indexOf(currentFile);
      const next = (idx + 1) % openTabs.length;
      openFile(openTabs[next]);
    }
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchSelectedIndex = 0;
      renderSearchResults(e.target.value);
    });
  }

  // Close search backdrop
  searchOverlay.addEventListener('click', e => {
    if (e.target === searchOverlay) closeSearch();
  });
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
function showToast(msg, type = 'info', duration = 3000) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-dot"></span><span>${msg}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => toast.remove(), duration + 400);
}

// ============================================================
// CONTACT FORM
// ============================================================
function handleContact(e) {
  e.preventDefault();
  showToast('✉️ Message sent! I\'ll get back to you soon.', 'success');
  e.target.reset();
}

// ============================================================
// PROJECT FILTER
// ============================================================
function filterProjects(btn, category) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.querySelectorAll('.project-card').forEach(card => {
    const show = category === 'all' || card.dataset.category === category;

    if (show) {
      card.classList.remove('hidden');
      card.style.animation = 'fadeSlideIn 0.25s ease both';
    } else {
      card.classList.add('hidden');
    }
  });
}

// ============================================================
// EXPOSE GLOBALS (for onclick handlers in HTML strings)
// ============================================================
window.openFile       = openFile;
window.applyTheme     = applyTheme;
window.changeFontSize = changeFontSize;
window.toggleSetting  = toggleSetting;
window.resetSettings  = resetSettings;
window.handleContact  = handleContact;
window.filterProjects = filterProjects;
window.showToast      = showToast;
window.openSearch     = openSearch;
window.closeSearch    = closeSearch;
window.contentView    = contentView;
