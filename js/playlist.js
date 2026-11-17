function hasActiveSession() {
  // Comprueba si hay una sesión guardada antes de mostrar la playlist.
  try {
    const user = JSON.parse(localStorage.getItem('bluesCurrentUser'));
    return Boolean(user && typeof user === 'object');
  } catch {
    return false;
  }
}

if (!hasActiveSession()) {
  // Si no hay sesión, se fuerza al usuario a iniciar sesión.
  sessionStorage.setItem('bluesAccessMessage', 'Inicia sesión para escuchar las playlists.');
  window.location.replace('start.html');
}

const wc   = document.getElementById('waveCanvas');
const wctx = wc?.getContext('2d');
let W, H;

// Ajusta el fondo a la pantalla.
function resizeWaveCanvas() { 
  if (!wc) return;
  W = wc.width = window.innerWidth; 
  H = wc.height = window.innerHeight; 
}

resizeWaveCanvas();
window.addEventListener('resize', resizeWaveCanvas);

let waveTime = 0;

// Dibuja las ondas del fondo.
function drawWaves() {
  if (!wctx) return;
  wctx.clearRect(0, 0, W, H);
  const waves = [
    { amp:40, freq:0.01,  speed:0.5,  y:H*0.44, a:0.05 },
    { amp:20, freq:0.018, speed:0.85, y:H*0.50, a:0.09 },
    { amp:55, freq:0.007, speed:0.35, y:H*0.55, a:0.04 },
    { amp:16, freq:0.022, speed:1.1,  y:H*0.47, a:0.07 },
  ];
  
  waves.forEach(w => {
    wctx.beginPath();
    wctx.strokeStyle = `rgba(61,84,160,${w.a})`;
    wctx.lineWidth = 1.2;
    for (let x=0; x<=W; x+=2) {
      const y = w.y + Math.sin(x*w.freq + waveTime*w.speed)*w.amp;
      x===0 ? wctx.moveTo(x,y) : wctx.lineTo(x,y);
    }
    wctx.stroke();
  });
  
  const bars = 55;
  const bw = W / bars;
  for (let i=0; i<bars; i++) {
    const bh = (Math.sin(i*0.38 + waveTime*1.1)*0.5+0.5)*70+8;
    const a  = 0.03 + (bh/78)*0.045;
    wctx.fillStyle = `rgba(61,84,160,${a})`;
    wctx.fillRect(i*bw+2, H*0.5-bh/2, bw-4, bh);
  }
  
  waveTime += 0.013;
  requestAnimationFrame(drawWaves);
}
drawWaves();

document.addEventListener('DOMContentLoaded', () => {
  // Prepara la lista, los botones y el carrusel cuando termina de cargar el HTML.
  // Playlist base vacía; las canciones se cargan desde el HTML de cada página.
  const defaultTracks = [];

  function normalize(str) {
    // Normaliza texto para buscar sin depender de mayúsculas ni tildes.
    return (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  // Convierte un enlace de Spotify a un reproductor embebido.
  function toEmbedUrl(url) {
    if (!url) return '';
    const match = url.match(/track\/([a-zA-Z0-9]+)/);
    if (!match) return url;
    return `https://open.spotify.com/embed/track/${match[1]}`;
  }

  // Lee las canciones definidas en el HTML de la playlist.
  function readCustomTracks() {
    const source = document.getElementById('custom-tracks-source');
    if (!source) return [];

    return Array.from(source.querySelectorAll('.custom-track')).map(el => {
      return {
        title: el.dataset.title || 'Sin título',
        artist: el.dataset.artist || 'Desconocido',
        album: el.dataset.album || '',
        art: el.dataset.art || '??',
        spotify: toEmbedUrl(el.dataset.spotify || ''),
        info: el.dataset.info || ''
      };
    });
  }

  const sourceTracks = readCustomTracks();
  const playlist = [...defaultTracks, ...sourceTracks];
  let currentIndex = -1;
  let favoriteOnly = false;
  const favoriteKey = `blues-favorites-${window.location.pathname}`;
  let storedFavorites = [];
  try {
    const parsedFavorites = JSON.parse(localStorage.getItem(favoriteKey) || '[]');
    storedFavorites = Array.isArray(parsedFavorites) ? parsedFavorites : [];
  } catch {
    storedFavorites = [];
  }
  const favorites = new Set(storedFavorites);

  // Guarda referencias a los elementos que se actualizan durante la reproducción.
  const listContainer = document.getElementById('track-list');
  const spotifyFrame = document.getElementById('spotify-frame');
  const spotifyPlayerEl = document.querySelector('.spotify-player');

  const infoPanel = document.createElement('div');
  infoPanel.className = 'track-info-panel';
  infoPanel.innerHTML = `
    <div class="track-info-title" id="track-info-title"></div>
    <div class="track-info-artist" id="track-info-artist"></div>
    <div class="track-info-text" id="track-info-text"></div>
  `;
  spotifyPlayerEl?.appendChild(infoPanel);
  const infoTitleEl = infoPanel.querySelector('#track-info-title');
  const infoArtistEl = infoPanel.querySelector('#track-info-artist');
  const infoTextEl = infoPanel.querySelector('#track-info-text');
  const searchInput = document.getElementById('track-search');
  const searchCount = document.getElementById('search-count');
  const trackCountBadge = document.getElementById('track-count-badge');
  const tracklistEl = document.querySelector('.tracklist');
  const tracklistToggle = document.getElementById('tracklist-toggle');

  // Añade los controles que no vienen escritos en cada HTML.
  const favoriteToggle = document.createElement('button');
  favoriteToggle.type = 'button';
  favoriteToggle.className = 'favorite-filter';
  favoriteToggle.setAttribute('aria-pressed', 'false');
  favoriteToggle.textContent = 'Favoritos';
  document.querySelector('.playlist-search')?.appendChild(favoriteToggle);

  const shuffleBtn = document.createElement('button');
  shuffleBtn.type = 'button';
  shuffleBtn.className = 'shuffle-filter';
  shuffleBtn.textContent = '🔀 Aleatoria';
  shuffleBtn.setAttribute('aria-label', 'Reproducir una canción aleatoria');
  document.querySelector('.playlist-search')?.appendChild(shuffleBtn);

  function translateTrackInfoText(text) {
    return window.translateText ? window.translateText(text || '') : (text || '');
  }

  function applyPlaylistTranslations() {
    const isEnglish = document.documentElement.lang === 'en' || localStorage.getItem('bluesLanguage') === 'en';
    const translate = text => isEnglish && window.translateText ? window.translateText(text) : text;

    if (favoriteToggle) {
      favoriteToggle.textContent = translate('Favoritos');
      favoriteToggle.setAttribute('aria-label', translate('Mostrar canciones favoritas'));
    }

    if (shuffleBtn) {
      shuffleBtn.textContent = translate('🔀 Aleatoria');
      shuffleBtn.setAttribute('aria-label', translate('Reproducir una canción aleatoria'));
    }

    const currentTrack = playlist[currentIndex];
    if (currentTrack && infoTextEl) {
      infoTextEl.textContent = translateTrackInfoText(currentTrack.info || 'Una pieza que acompaña este momento emocional.');
    }
  }

  window.applyPlaylistTranslations = applyPlaylistTranslations;

  function saveFavorites() {
    // Guarda los índices favoritos en localStorage.
    localStorage.setItem(favoriteKey, JSON.stringify([...favorites]));
  }

  function renderPlaylist() {
    // Crea la tabla visual de canciones con su estado favorito.
    listContainer.innerHTML = '';

    playlist.forEach((track, index) => {
      const row = document.createElement('div');
      row.classList.add('track-row');
      row.setAttribute('data-index', index);

      const artContent = track.artUrl
        ? `<img src="${track.artUrl}" alt="${track.title}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
        : (track.art || '??');

      row.innerHTML = `
        <div class="track-index">${index + 1}</div>
        <div class="track-meta">
          <div class="track-art">${artContent}</div>
          <div class="track-titles">
            <div class="track-title">${track.title}</div>
            <div class="track-artist">${track.artist}</div>
          </div>
        </div>
        <div class="track-album">${track.album}</div>
        <div class="track-duration" id="dur-${index}">${track.duration || ''}</div>
        <button class="track-favorite${favorites.has(index) ? ' is-favorite' : ''}" type="button" aria-label="${favorites.has(index) ? 'Quitar de favoritos' : 'Añadir a favoritos'}" aria-pressed="${favorites.has(index)}">&#9733;</button>
      `;

      row.addEventListener('click', () => loadTrack(index));
      row.querySelector('.track-favorite').addEventListener('click', (event) => {
        event.stopPropagation();
        if (favorites.has(index)) favorites.delete(index);
        else favorites.add(index);
        saveFavorites();
        renderPlaylist();
      });

      listContainer.appendChild(row);
    });
    highlightActiveRow();
    if (trackCountBadge) trackCountBadge.textContent = playlist.length;
    applyFilter();
  }

  function applyFilter() {
    // Filtra canciones por búsqueda y favoritos activos.
    if (!searchInput) return;
    const query = normalize(searchInput.value.trim());
    let visible = 0;

    document.querySelectorAll('.track-row').forEach(row => {
      const idx = parseInt(row.getAttribute('data-index'), 10);
      const track = playlist[idx];
      if (!track) return;
      const haystack = normalize(`${track.title} ${track.artist} ${track.album}`);
      const matchesQuery = !query || haystack.includes(query);
      const matches = matchesQuery && (!favoriteOnly || favorites.has(idx));
      row.style.display = matches ? '' : 'none';
      if (matches) visible += 1;
    });

    if (searchCount) {
      searchCount.textContent = query ? `${visible} de ${playlist.length}` : '';
    }

    if (query && tracklistEl && tracklistEl.classList.contains('collapsed')) {
      setCollapsed(false);
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilter);
  }

  favoriteToggle.addEventListener('click', () => {
    favoriteOnly = !favoriteOnly;
    favoriteToggle.classList.toggle('is-active', favoriteOnly);
    favoriteToggle.setAttribute('aria-pressed', String(favoriteOnly));
    applyFilter();
  });

  shuffleBtn.addEventListener('click', () => {
    // Toma solo las canciones visibles (respeta búsqueda y favoritos activos).
    const visibles = Array.from(document.querySelectorAll('.track-row'))
      .filter(row => row.style.display !== 'none');
    if (!visibles.length) return;

    const elegida = visibles[Math.floor(Math.random() * visibles.length)];
    const idx = parseInt(elegida.getAttribute('data-index'), 10);
    loadTrack(idx);
    elegida.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (tracklistEl && tracklistEl.classList.contains('collapsed')) {
      setCollapsed(false);
    }
  });

  function setCollapsed(collapsed) {
    if (!tracklistEl) return;
    tracklistEl.classList.toggle('collapsed', collapsed);
    if (tracklistToggle) tracklistToggle.setAttribute('aria-expanded', String(!collapsed));
  }

  if (tracklistToggle && tracklistEl) {
    // Permite esconder la lista para dejar más espacio al reproductor.
    tracklistToggle.addEventListener('click', () => {
      setCollapsed(!tracklistEl.classList.contains('collapsed'));
    });
  }

  document.addEventListener('keydown', (event) => {
    // Las flechas cambian de canción cuando el usuario no está escribiendo.
    if (event.target.matches('input, textarea')) return;
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const direction = event.key === 'ArrowDown' ? 1 : -1;
    loadTrack((currentIndex + direction + playlist.length) % playlist.length);
  });

  function loadTrack(index) {
    // Carga la canción seleccionada en el reproductor y panel informativo.
    if (index < 0 || index >= playlist.length) return;
    currentIndex = index;
    const track = playlist[index];

    if (track.spotify && track.spotify.includes('/embed/track/') && spotifyFrame) {
      // Usa & si el enlace ya tiene parámetros para no romper la URL del iframe.
      const separator = track.spotify.includes('?') ? '&' : '?';
      spotifyFrame.src = `${track.spotify}${separator}autoplay=1`;
    } else if (spotifyFrame) {
      spotifyFrame.removeAttribute('src');
    }

    if (infoTitleEl) {
      infoTitleEl.textContent = track.title;
      infoArtistEl.textContent = track.artist;
      infoTextEl.textContent = translateTrackInfoText(track.info || 'Una pieza que acompaña este momento emocional.');
    }

    highlightActiveRow();
  }

  function highlightActiveRow() {
    // Marca la canción actualmente reproducida en la lista.
    document.querySelectorAll('.track-row').forEach(row => {
      const idx = parseInt(row.getAttribute('data-index'), 10);
      row.classList.toggle('playing', idx === currentIndex);
    });
  }

  renderPlaylist();
  applyPlaylistTranslations();

  if (playlist.length > 0) loadTrack(0);
});

(function() {
  // Controla el carrusel de información que aparece al final de la playlist.
  const carousel = document.getElementById('science-carousel');
  if (!carousel) return;

  const points = carousel.querySelectorAll('.science-point');
  const dotsContainer = document.getElementById('science-dots');
  let current = 0;
  let timer;

  const previousButton = document.createElement('button');
  previousButton.type = 'button';
  previousButton.className = 'science-carousel-arrow science-carousel-prev';
  previousButton.setAttribute('aria-label', 'Anterior');
  previousButton.innerHTML = '&#10094;';

  const nextButton = document.createElement('button');
  nextButton.type = 'button';
  nextButton.className = 'science-carousel-arrow science-carousel-next';
  nextButton.setAttribute('aria-label', 'Siguiente');
  nextButton.innerHTML = '&#10095;';

  carousel.append(previousButton, nextButton);

  points.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'science-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Punto ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('.science-dot');

  function goTo(index) {
    points[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    points[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() {
    goTo((current + 1) % points.length);
  }

  function previous() {
    goTo((current - 1 + points.length) % points.length);
  }

  previousButton.addEventListener('click', previous);
  nextButton.addEventListener('click', next);

  function startAutoplay() {
    timer = setInterval(next, 5000);
  }
  function stopAutoplay() {
    clearInterval(timer);
  }

  startAutoplay();
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
})();