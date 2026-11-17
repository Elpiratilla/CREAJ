function mostrarMensaje(texto, tipo = 'info') {
    // Muestra mensajes de validación o confirmación.
    const mensajeEl = document.getElementById('message-box');
    if (!mensajeEl) {
        console.log(texto);
        return;
    }

    mensajeEl.textContent = texto;
    mensajeEl.style.color = tipo === 'error' ? '#ffb4b4' : '#f2d8c7';
}

function obtenerUsuarios() {
    // Recupera la lista de usuarios guardados.
    try {
        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
        return Array.isArray(usuarios) ? usuarios : [];
    } catch {
        return [];
    }
}

function textoConfirmar() {
    const textoconf = document.getElementById('textoconf-exito');
    
    if (!textoconf) {
        console.error("No se encontró el elemento con id 'textoconf-exito' en el HTML.");
        window.location.href = "iniciosesion.html";
        return;
    }
    
    textoconf.classList.add('textoconf-visible');
}

function guardarUsuarios(usuarios) {
    // Guarda la lista actualizada de usuarios.
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function obtenerDatosDelFormulario(form) {
    // Recupera los datos del formulario de registro.
    const nombreInput = form.querySelector('input[name="nombre"]');
    const apellidoInput = form.querySelector('input[name="apellido"]');
    const aliasInput = form.querySelector('input[name="alias"]');
    const emailInput = form.querySelector('input[name="email"]');
    const passwordInput = form.querySelector('input[name="password"]');
    const confirmInput = form.querySelector('input[name="confirm"]');

    return {
        nombre: nombreInput ? nombreInput.value.trim() : '',
        apellido: apellidoInput ? apellidoInput.value.trim() : '',
        alias: aliasInput ? aliasInput.value.trim() : '',
        email: emailInput ? emailInput.value.trim() : '',
        password: passwordInput ? passwordInput.value : '',
        confirm: confirmInput ? confirmInput.value : ''
    };
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function registrar(form, event) {
    // Valida el registro y crea la cuenta nueva.
    event.preventDefault();

    const { nombre, apellido, alias, email, password, confirm } = obtenerDatosDelFormulario(form);

    if (!nombre || !apellido || !alias || !email || !password || !confirm ) {
        mostrarMensaje('Completa todos los campos', 'error');
        return;
    }

    if (password !== confirm) {
        mostrarMensaje('Las contraseñas no coinciden.', 'error')
        return;

    }

    if (!validarEmail(email)) {
        mostrarMensaje('Por favor, ingresa un correo electrónico válido', 'error');
        return;
    }

    if (password.length < 8) {
        mostrarMensaje('La contraseña debe tener al menos 8 caracteres.', 'error');
        return;
    }

    const usuarios = obtenerUsuarios();

    const usuarioExiste = usuarios.some(
        u => typeof u?.usuario === 'string' && u.usuario.toLowerCase() === email.toLowerCase()
    );

    if (usuarioExiste) {
        mostrarMensaje('Ese correo ya está registrado', 'error');
        return;
    }

    usuarios.push({
        nombre,
        apellido,
        alias,
        usuario: email,
        clave: password,
        confirmar: confirm
    });

    guardarUsuarios(usuarios);

    form.reset();

    mostrarPantallaTemporal();
}

function mostrarPantallaTemporal() {
    // Muestra el modal de éxito y redirige al login.
    const modal = document.getElementById('modal-exito');
    
    if (!modal) {
        console.error("No se encontró el elemento con id 'modal-exito' en el HTML.");
        window.location.href = "iniciosesion.html";
        return;
    }
    
    modal.classList.add('modal-visible');
    
    setTimeout(() => {
        modal.classList.remove('modal-visible');
        window.location.href = "iniciosesion.html"; 
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form");

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
            registrar(form, e);
        });
    }
});