function mostrarMensaje(texto, tipo = 'info') {
    // Muestra mensajes de error o éxito en la interfaz.
    const mensajeEl = document.getElementById('message-box');
    if (!mensajeEl) {
        console.log(texto);
        return;
    }

    mensajeEl.textContent = texto;
    mensajeEl.style.color = tipo === 'error' ? '#ffb4b4' : '#f2d8c7';
}

function obtenerUsuarios() {
    // Lee la lista de usuarios guardados en localStorage.
    try {
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        return Array.isArray(usuarios) ? usuarios : [];
    } catch {
        return [];
    }
}

function asegurarUsuarioPredeterminado() {
    // Asegura que exista un usuario demo para pruebas rápidas.
    const usuarios = obtenerUsuarios();
    const correoPredeterminado = 'Blues@gmail.com';

    const usuarioExiste = usuarios.some(
        usuario => typeof usuario?.usuario === 'string' && usuario.usuario.toLowerCase() === correoPredeterminado.toLowerCase()
    );

    if (!usuarioExiste) {
        usuarios.push({
            nombre: 'Blues',
            apellido: '',
            alias: 'Blues',
            usuario: correoPredeterminado,
            clave: '12345',
            confirmar: '12345'
        });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        return;
    }

    const usuarioPredeterminado = usuarios.find(
        usuario => typeof usuario?.usuario === 'string' && usuario.usuario.toLowerCase() === correoPredeterminado.toLowerCase()
    );

    if (usuarioPredeterminado.clave === '1234') {
        usuarioPredeterminado.clave = '12345';
        usuarioPredeterminado.confirmar = '12345';
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
}

function obtenerDatosDelFormulario(form) {
    // Extrae email y contraseña del formulario.
    const emailInput = form.querySelector('input[name="email"]');
    const passwordInput = form.querySelector('input[name="password"]');

    return {
        email: emailInput ? emailInput.value.trim() : '',
        password: passwordInput ? passwordInput.value : ''
    };
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function iniciarSesion(form, event) {
    // Valida credenciales y crea la sesión activa.
    event.preventDefault();

    const { email, password } = obtenerDatosDelFormulario(form);

    if (!email || !password) {
        mostrarMensaje('Completa todos los campos', 'error');
        return;
    }

    if (!validarEmail(email) || password.length < 5) {
        mostrarMensaje('Ingresa un correo válido y una contraseña de al menos 5 caracteres.', 'error');
        return;
    }

    const usuarios = obtenerUsuarios();

    const usuarioEncontrado = usuarios.find(
        u => typeof u?.usuario === 'string' && u.usuario.toLowerCase() === email.toLowerCase()
    );

    if (!usuarioEncontrado || usuarioEncontrado.clave !== password) {
        mostrarMensaje('Correo o contraseña incorrectos', 'error');
        return;
    }

    localStorage.setItem('bluesCurrentUser', JSON.stringify(usuarioEncontrado));
    mostrarMensaje('Inicio de sesión correcto');
    form.reset();

    const modal = document.getElementById('modal-exito');
    if (modal) {
        modal.classList.add('modal-visible');
        setTimeout(() => {
            modal.classList.remove('modal-visible');
            window.location.href = "home.html";
        }, 2000);
    } else {
        window.location.href = "home.html";
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    asegurarUsuarioPredeterminado();

    document.querySelectorAll('input[type="password"]').forEach((input) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'password-wrap';
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'password-toggle';
        toggle.textContent = 'Mostrar';
        toggle.setAttribute('aria-label', 'Mostrar contraseña');
        toggle.addEventListener('click', () => {
            const visible = input.type === 'text';
            input.type = visible ? 'password' : 'text';
            toggle.textContent = visible ? 'Mostrar' : 'Ocultar';
            toggle.setAttribute('aria-label', visible ? 'Mostrar contraseña' : 'Ocultar contraseña');
        });
        wrapper.appendChild(toggle);
    });

    if (form) {
        form.addEventListener("submit", function(e) {
            iniciarSesion(form, e);
        });
    }
});