function hasActiveSession() {
  // Comprueba si hay un usuario activo en la sesión.
  try {
    const user = JSON.parse(localStorage.getItem('bluesCurrentUser'));
    return Boolean(user && typeof user === 'object');
  } catch {
    return false;
  }
}

if (!hasActiveSession()) {
  sessionStorage.setItem('bluesAccessMessage', 'Necesitas iniciar sesión para entrar a Blue\'s.');
  window.location.replace('start.html');
}

function setupGameAccess() {
  document.querySelectorAll('a[href*="adivinacancion.html"]').forEach(btn => {
    btn.addEventListener('click', () => {
      sessionStorage.setItem('bluesGameAccess', 'true');
    });
  });
}
setupGameAccess();

const wc   = document.getElementById('waveCanvas');
const wctx = wc.getContext('2d');
let W, H;

// Ajusta el canvas a la pantalla.
function resizeWaveCanvas() { 
  W = wc.width = window.innerWidth; 
  H = wc.height = window.innerHeight; 
}
resizeWaveCanvas();
window.addEventListener('resize', resizeWaveCanvas);

let waveTime = 0;

// Dibuja el fondo animado.
function drawWaves() {
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

function initCarousel() {

  // Configura el carrusel de imágenes y su navegación.

    const slides = Array.from(document.querySelectorAll('.carrusel-slide'));
    const dots = Array.from(document.querySelectorAll('.dot'));
    const prevBtn = document.querySelector('.carrusel-btn.prev');
    const nextBtn = document.querySelector('.carrusel-btn.next');
    if (slides.length === 0) return;

    let current = 0;
    let autoplayId;

    function show(index) {
      // Muestra una sola imagen.
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        slides.forEach((s, i) => { s.style.display = i === index ? 'block' : 'none'; });
        dots.forEach((d, i) => { d.classList.toggle('active', i === index); });
        current = index;
    }

      function restartAutoplay() {
        clearInterval(autoplayId);
        autoplayId = setInterval(() => show(current + 1), 5200);
      }

    prevBtn && prevBtn.addEventListener('click', () => { show(current - 1); restartAutoplay(); });
    nextBtn && nextBtn.addEventListener('click', () => { show(current + 1); restartAutoplay(); });

    dots.forEach(d => d.addEventListener('click', (e) => {
        const idx = Number(e.currentTarget.getAttribute('data-index'));
        if (!Number.isNaN(idx)) { show(idx); restartAutoplay(); }
    }));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { show(current - 1); restartAutoplay(); }
        if (e.key === 'ArrowRight') { show(current + 1); restartAutoplay(); }
    });

    show(0);
      restartAutoplay();
      const carousel = document.querySelector('.carrusel');
      carousel && carousel.addEventListener('mouseenter', () => clearInterval(autoplayId));
      carousel && carousel.addEventListener('mouseleave', restartAutoplay);
}

    function initMobileMenu() {
      // Abre y cierra el menú en pantallas pequeñas.
      const nav = document.querySelector('nav');
      const toggle = document.querySelector('.nav-menu-toggle');
      if (!nav || !toggle) return;
      toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('menu-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
      });
      nav.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
        nav.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
      }));
    }

function initProfile() {
  // Carga el perfil del usuario autenticado y su menú.
  const area = document.getElementById('profile-area');
  const trigger = document.getElementById('profile-trigger');
  const card = document.getElementById('profile-card');
  const logout = document.getElementById('profile-logout');
  if (!area || !trigger || !card) return;

  let user;
  try {
    user = JSON.parse(localStorage.getItem('bluesCurrentUser'));
  } catch {
    user = null;
  }
  if (!user) return;

  const displayName = (typeof user.alias === 'string' && user.alias.trim())
    || `${typeof user.nombre === 'string' ? user.nombre : ''} ${typeof user.apellido === 'string' ? user.apellido : ''}`.trim()
    || (typeof user.usuario === 'string' ? user.usuario : 'Usuario');
  const fullName = `${user.nombre || ''} ${user.apellido || ''}`.trim();
  document.getElementById('profile-trigger-name').textContent = displayName;
  document.getElementById('profile-name').textContent = fullName || displayName;
  document.getElementById('profile-email').textContent = user.usuario;
  document.getElementById('profile-avatar').textContent = displayName.charAt(0).toUpperCase();
  area.hidden = false;

  trigger.addEventListener('click', () => {
    const isOpen = !card.hidden;
    card.hidden = isOpen;
    trigger.setAttribute('aria-expanded', String(!isOpen));
  });
  logout?.addEventListener('click', () => {
    localStorage.removeItem('bluesCurrentUser');
    window.location.href = 'start.html';
  });
  document.addEventListener('click', (event) => {
    if (!area.contains(event.target)) {
      card.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
}

function initSurpriseButton() {
  // Elige una playlist aleatoria cuando el usuario no sabe qué mood tiene.
  const btn = document.getElementById('surpriseBtn');
  if (!btn) return;

  const playlists = [
    'playlisttranquilo.html',
    'playlistalegre.html',
    'playlistansioso.html',
    'playlisttriste.html',
    'playlistamor.html'
  ];

  btn.addEventListener('click', () => {
    const elegida = playlists[Math.floor(Math.random() * playlists.length)];
    window.location.href = elegida;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupGameAccess();
  initCarousel();
  initMobileMenu();
  initSurpriseButton();
  initProfile();
});


(function () {
  // Panel interno del equipo para revisar mensajes enviados desde la web.
  const TEAM_USER = 'Blues';
  const TEAM_PASS = '12345';
  const STORAGE_KEY = 'bluesContactMessages';

  const form = document.getElementById('contactForm');
  const toggleBtn = document.getElementById('teamToggleBtn');
  const loginBox = document.getElementById('teamLoginBox');
  const adminPanel = document.getElementById('adminPanel');

  if (!form || !toggleBtn || !loginBox || !adminPanel) return;

  function getMessages() {
    // Lee los mensajes guardados.
    try {
      const messages = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Array.isArray(messages)
        ? messages.filter(message => message && typeof message === 'object')
        : [];
    } catch (e) {
      return [];
    }
  }

  function saveMessages(list) {
    // Guarda los mensajes.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function renderMessages() {
    // Actualiza la lista de mensajes.
    const list = getMessages();
    const container = document.getElementById('messagesList');
    if (!container) return;

    container.replaceChildren();

    if (!list.length) {
      const emptyMessage = document.createElement('p');
      emptyMessage.className = 'message-empty';
      emptyMessage.textContent = 'Aún no hay mensajes recibidos.';
      container.appendChild(emptyMessage);
      return;
    }

    list.forEach((message) => {
      const card = document.createElement('div');
      card.className = 'message-card';
      card.dataset.id = String(message.id ?? '');

      const meta = document.createElement('div');
      meta.className = 'message-meta';
      meta.textContent = String(message.fecha ?? '');

      const name = document.createElement('div');
      name.className = 'message-name';
      name.textContent = `${String(message.nombre ?? '')} — ${String(message.asunto ?? '')}`;

      const body = document.createElement('div');
      body.className = 'message-body';
      body.textContent = String(message.mensaje ?? '');

      const actions = document.createElement('div');
      actions.className = 'message-actions';
      const deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.className = 'button-danger button-delete';
      deleteButton.textContent = 'Eliminar';
      actions.appendChild(deleteButton);

      card.append(meta, name, body, actions);
      container.appendChild(card);
    });

    container.querySelectorAll('.button-delete').forEach((btn) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.message-card');
        const id = Number(card.dataset.id);
        saveMessages(getMessages().filter((m) => m.id !== id));
        renderMessages();
      });
    });

  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const list = getMessages();
    list.unshift({
      id: Date.now(),
      nombre: document.getElementById('cNombre').value.trim(),
      asunto: document.getElementById('cAsunto').value.trim(),
      mensaje: document.getElementById('cMensaje').value.trim(),
      fecha: new Date().toLocaleString('es-SV', { dateStyle: 'medium', timeStyle: 'short' })
    });

    saveMessages(list);
    form.reset();
    const msg = document.getElementById('formMsg');
    msg.textContent = '✓ Mensaje enviado. ¡Gracias por escribirnos!';
    setTimeout(() => (msg.textContent = ''), 4000);

    if (adminPanel.style.display === 'block') renderMessages();
  });

  toggleBtn.addEventListener('click', () => {
    loginBox.style.display = loginBox.style.display === 'none' ? 'flex' : 'none';
  });

  document.getElementById('loginBtn').addEventListener('click', () => {
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value;
    const errorEl = document.getElementById('loginError');

    if (user === TEAM_USER && pass === TEAM_PASS) {
      errorEl.textContent = '';
      adminPanel.style.display = 'block';
      loginBox.style.display = 'none';
      document.getElementById('loginUser').value = '';
      document.getElementById('loginPass').value = '';
      renderMessages();
      setTimeout(() => adminPanel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    } else {
      errorEl.textContent = 'Usuario o contraseña incorrectos.';
    }
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    adminPanel.style.display = 'none';
  });
})();


const secciones = document.querySelectorAll("section[id]");
const botonesNav = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let seccionActual = "";

    secciones.forEach(seccion => {

        const posicion = seccion.getBoundingClientRect();

        if (posicion.top <= 150 && posicion.bottom >= 150) {
            seccionActual = seccion.id;
        }

    });

    const llegoAlFinal = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (llegoAlFinal && secciones.length) {
        seccionActual = secciones[secciones.length - 1].id;
    }

    botonesNav.forEach(boton => {

        boton.classList.remove("active");

        if (boton.getAttribute("href") === "#" + seccionActual) {
            boton.classList.add("active");
        }

    });

});