(() => {
  function getNavControls(nav) {
    let controls = nav.querySelector('.nav-controls');
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'nav-controls';
      Array.from(nav.children)
        .filter(child => child.classList.contains('nav-actions') || child.classList.contains('profile-area'))
        .forEach(child => controls.appendChild(child));
      nav.appendChild(controls);
    }
    return controls;
  }

  function createThemeControl() {
    const nav = document.querySelector('nav');
    if (!nav || nav.querySelector('.theme-control')) return;

    const controls = getNavControls(nav);
    const wrapper = document.createElement('div');
    wrapper.className = 'theme-control';
    wrapper.innerHTML = '<button class="theme-toggle" type="button" aria-pressed="false" aria-label="Activar modo claro">Claro</button>';
    const toggle = wrapper.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('bluesTheme') === 'light' ? 'light' : 'dark';

    const updateTheme = theme => {
      const isLight = theme === 'light';
      document.body.classList.toggle('light-mode', isLight);
      toggle.setAttribute('aria-pressed', String(isLight));
      toggle.setAttribute('aria-label', isLight ? 'Activar modo oscuro' : 'Activar modo claro');
      toggle.textContent = isLight ? 'Oscuro' : 'Claro';
    };

    updateTheme(savedTheme);
    toggle.addEventListener('click', () => {
      const theme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
      localStorage.setItem('bluesTheme', theme);
      updateTheme(theme);
    });
    controls.appendChild(wrapper);
  }

  const initTheme = () => {
    if (document.body) createThemeControl();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme, { once: true });
  } else {
    initTheme();
  }
})();
