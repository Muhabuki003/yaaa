// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  renderGrid('trendingGrid', MOVIE_DATA.trending);
  renderGrid('moviesGrid', MOVIE_DATA.movies);
  renderGrid('tvGrid', MOVIE_DATA.tvShows);
  renderContinueWatching('continueGrid', MOVIE_DATA.continueWatching);
  initSidebar();
  initSearch();
  initNavigation();
});

// ===== HERO =====
function initHero() {
  const featured = MOVIE_DATA.trending[0];
  document.getElementById('heroTitle').textContent = featured.title;
  document.getElementById('heroYear').textContent = featured.year;
  document.getElementById('heroRating').textContent = featured.rating;
  document.getElementById('heroDuration').textContent = featured.duration;
  document.getElementById('heroDesc').textContent = featured.desc;
  const tags = document.getElementById('heroTags');
  tags.innerHTML = featured.genres.map(g => `<span>${g}</span>`).join('');
  
  const backdrop = document.getElementById('heroBackdrop');
  backdrop.style.background = `linear-gradient(135deg, ${featured.color} 0%, #0a0a1a 50%, #0d0d1a 100%)`;
  
  // Add subtle particle effect
  createParticles();
}

function createParticles() {
  const hero = document.querySelector('.hero');
  const backdrop = document.getElementById('heroBackdrop');
  
  // Small floating dots
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(139, 92, 246, ${Math.random() * 0.3 + 0.1});
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
    `;
    backdrop.appendChild(dot);
  }
}

// Add float keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    33% { transform: translateY(-10px) translateX(5px); }
    66% { transform: translateY(5px) translateX(-5px); }
  }
`;
document.head.appendChild(style);

// ===== RENDER GRID =====
function renderGrid(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  
  grid.innerHTML = items.map(item => `
    <div class="movie-card" data-id="${item.id}" tabindex="0" role="button" aria-label="${item.title}">
      <div class="movie-card-poster">
        <div class="poster-placeholder" style="background: linear-gradient(135deg, ${item.color || '#1a1a25'}, var(--bg-card));">
          ${item.emoji || '🎬'}
        </div>
        <div class="movie-card-overlay">
          <div class="play-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
      </div>
      <div class="movie-card-info">
        <div class="movie-card-title">${item.title}</div>
        <div class="movie-card-meta">
          <span>${item.year}</span>
          <span class="movie-card-rating">★ ${item.rating}</span>
          <span class="movie-card-type">${item.type || 'Movie'}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== RENDER CONTINUE WATCHING =====
function renderContinueWatching(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  
  grid.innerHTML = items.map(item => `
    <div class="movie-card continue-card" data-id="${item.id}" tabindex="0" role="button" aria-label="${item.title}">
      <div class="movie-card-poster" style="background: linear-gradient(135deg, ${item.color || '#1a1a25'}, var(--bg-card));">
        <div class="poster-placeholder" style="font-size: 36px;">
          ${item.emoji || '🎬'}
        </div>
        <div class="movie-card-overlay">
          <div class="play-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width: ${item.progress}%"></div>
        </div>
      </div>
      <div class="movie-card-info">
        <div class="movie-card-title">${item.title}</div>
        <div class="movie-card-meta">
          <span>${item.progress}% complete</span>
          <span class="movie-card-type">${item.type || 'Movie'}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== SIDEBAR TOGGLE =====
function initSidebar() {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('overlay');
  
  if (!menuToggle || !sidebar || !overlay) return;
  
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
  });
  
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });
  
  // Close sidebar on nav click on mobile
  sidebar.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });
}

// ===== SEARCH =====
function initSearch() {
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  
  if (!searchToggle || !searchBar || !searchClose || !searchInput) return;
  
  searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open')) {
      searchInput.focus();
    }
  });
  
  searchClose.addEventListener('click', () => {
    searchBar.classList.remove('open');
    searchInput.value = '';
  });
  
  // Ctrl+K / Cmd+K shortcut
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchBar.classList.toggle('open');
      if (searchBar.classList.contains('open')) {
        searchInput.focus();
      }
    }
  });
  
  // Real-time search across all movies
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const allMovies = [...MOVIE_DATA.trending, ...MOVIE_DATA.movies, ...MOVIE_DATA.tvShows];
    
    document.querySelectorAll('.content-section').forEach(section => {
      const grid = section.querySelector('.movie-grid');
      if (!grid) return;
      
      if (!query) {
        section.style.display = '';
        return;
      }
      
      // Show sections that have matching items
      const sectionTitle = section.querySelector('.section-title')?.textContent?.toLowerCase() || '';
      const isResults = section.classList.contains('search-results');
      
      if (!isResults) {
        section.style.display = 'none';
      }
    });
    
    if (!query) {
      document.querySelector('.content-sections').style.display = '';
      const results = document.querySelector('.search-results');
      if (results) results.remove();
      return;
    }
    
    const results = allMovies.filter(m => 
      m.title.toLowerCase().includes(query) ||
      m.genres?.some(g => g.toLowerCase().includes(query))
    );
    
    // Replace or create search results section
    let resultsSection = document.querySelector('.search-results');
    if (!resultsSection) {
      resultsSection = document.createElement('section');
      resultsSection.className = 'content-section search-results';
      resultsSection.innerHTML = `<div class="section-header"><h2 class="section-title">Search Results</h2></div><div class="movie-grid" id="searchGrid"></div>`;
      document.querySelector('.content-sections').prepend(resultsSection);
    }
    
    resultsSection.style.display = '';
    document.querySelector('.content-sections').style.display = '';
    
    const searchGrid = document.getElementById('searchGrid');
    if (results.length === 0) {
      searchGrid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 40px; font-size: 14px;">No results found for "${query}"</p>`;
    } else {
      renderGrid('searchGrid', results);
    }
  });
}

// ===== NAVIGATION =====
function initNavigation() {
  document.querySelectorAll('.nav-item[data-nav]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item[data-nav]').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      
      // Scroll to corresponding section
      const nav = item.dataset.nav;
      const sections = {
        home: null,
        movies: document.querySelector('.content-sections'),
        tv: document.querySelector('.content-sections'),
        trending: document.querySelector('.content-sections'),
      };
      
      // Simple scroll to top for "home"
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Highlight section
      if (nav === 'movies') {
        document.querySelector('.content-section:nth-child(2)')?.scrollIntoView({ behavior: 'smooth' });
      } else if (nav === 'tv') {
        document.querySelector('.content-section:nth-child(3)')?.scrollIntoView({ behavior: 'smooth' });
      } else if (nav === 'trending') {
        document.querySelector('.content-section:nth-child(1)')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ===== WATCH BUTTONS =====
document.addEventListener('click', (e) => {
  const playBtn = e.target.closest('.play-btn');
  const movieCard = e.target.closest('.movie-card');
  
  if (playBtn) {
    // Simulate watching - show a toast-like notification
    showNotification('🎬 Playing: ' + document.getElementById('heroTitle')?.textContent || 'Movie');
  }
  
  if (movieCard) {
    const title = movieCard.querySelector('.movie-card-title')?.textContent || 'Content';
    showNotification('▶️ Opening: ' + title);
  }
});

// ===== NOTIFICATION =====
function showNotification(message) {
  const existing = document.querySelector('.notification-toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'notification-toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed; bottom: 24px; right: 24px; z-index: 9999;
    background: var(--bg-card); color: var(--text-primary);
    padding: 12px 20px; border-radius: var(--radius);
    font-size: 14px; font-weight: 500;
    border: 1px solid var(--border);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Add slideIn animation
const slideStyle = document.createElement('style');
slideStyle.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;
document.head.appendChild(slideStyle);
