
// ====== Cargar Header Dinámicamente ======
document.addEventListener("DOMContentLoaded", () => {
  fetch("../html/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
      inicializarMenu();
    });

// ====== Inicializar menú ======
function inicializarMenu() {
  const menuBtns = document.querySelectorAll(".menu-icon");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (!menuBtns.length || !sidebar || !overlay) return;

  menuBtns.forEach(menuBtn => {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("show");
    });
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("show");
  });

 // >> LÓGICA DEL PANEL DE NOTIFICACIONES <<
    // Se ejecuta DESPUÉS de que header.html ha cargado
    const btnNotificaciones = document.getElementById("iconoNotificaciones"); // AHORA BUSCA EL ID CORRECTO
    const buzon = document.getElementById("buzon-entrada");

    // Comprobar que ambos elementos existan antes de añadir el listener
    if (btnNotificaciones && buzon) {
        console.log("Listener de Notificaciones adjuntado.");
        btnNotificaciones.addEventListener('click', () => {
            console.log("Notificaciones clickeadas. Alternando clase 'oculto'.");
            buzon.classList.toggle('oculto');
        });
    } 
    //BTN De notificaciones "cerrar"
    const btnCerrar = document.getElementById("btnCerrar");
    if (btnCerrar) {
      btnCerrar.addEventListener('click', () => {
            buzon.classList.toggle('oculto');
        })
    }
    // VER MENSAJE
    // Obtener elementos internos
const btnVer = document.getElementById('btnVerMensaje');
const btnVolver = document.getElementById('btnVolver');
const contenidoCorto = document.getElementById('contenido-corto');
const contenidoLargo = document.getElementById('contenido-largo');
const buzonContainer = document.getElementById('buzon-entrada');

// BOTON "Ver mensaje"
if (btnVer) {
    btnVer.addEventListener('click', () => {
        // 1. Expandir la caja violeta
        buzonContainer.classList.add('expandido');
        // 2. Ocultar corto, mostrar largo
        contenidoCorto.style.display = 'none';
        contenidoLargo.style.display = 'block';
    });
}

// BOTON "Cerrar mensaje" (el de abajo)
if (btnVolver) {
    btnVolver.addEventListener('click', () => {
        buzonContainer.classList.remove('expandido');
        contenidoCorto.style.display = 'block';
        contenidoLargo.style.display = 'none';
    });
}
  // ====== BOTÓN "HACER UNA CONSULTA" (Segundo li en el menú) ======
const btnHacerConsulta = document.getElementById("btnHacerConsulta"); 
if (btnHacerConsulta) {
  btnHacerConsulta.addEventListener("click", () => {
    window.location.href = "../html/nueva-consulta.html"; // <-- NUEVA REDIRECCIÓN
  });
};
  // ====== BOTÓN "VER PUBLICACIONES" ======
const btnVerPublicaciones = document.getElementById("btnVerPublicaciones"); 
if (btnVerPublicaciones) {
  btnVerPublicaciones.addEventListener("click", () => {
    window.location.href = "../html/publicaciones.html"; // NUEVA REDIRECCIÓN
  });
};
  // ====== BOTÓN "HACER UNA CONSULTA" (Boton de arriba) ======
const btnConsulta = document.getElementById("btnConsulta"); 
if (btnConsulta) {
  btnConsulta.addEventListener("click", () => {
    window.location.href = "../html/nueva-consulta.html"; // <-- NUEVA REDIRECCIÓN
  });
    // ====== BOTÓN "VER PUBLICACIONES" (Boton de arriba) ======
const btnPublicaciones = document.getElementById("btnPublicaciones"); 
if (btnPublicaciones) {
  btnPublicaciones.addEventListener("click", () => {
    window.location.href = "../html/publicaciones.html"; // <-- NUEVA REDIRECCIÓN
  });
   // ====== BOTÓN "VOLVER INICIO" ======
  const btnVolverInicio = document.getElementById("btnVolverInicio");
  if (btnVolverInicio) {
  btnVolverInicio.addEventListener("click", () => {
    window.location.href = "../html/principal.html";
  });
  };
  // ====== BOTÓN "QUIÉNES SOMOS" ======
  const btnQuienes = document.getElementById("btnQuienes");
  if (btnQuienes) {
  btnQuienes.addEventListener("click", () => {
    window.location.href = "../html/quien.html";
  });
  };
  // ====== BOTÓN "COMO USAR EL SITIO" ======
  const btnComo = document.getElementById("btnComo");
  if (btnComo) {
  btnComo.addEventListener("click", () => {
    window.location.href = "../html/como-usar.html";
  });
  };
 // ====== BOTÓN "ESTUDIO" ======
  const btnEstudio = document.getElementById("btnEstudio");
  if (btnEstudio) {
  btnEstudio.addEventListener("click", () => {
    window.location.href = "../html/estudio.html";
  });
  };
// ====== BOTÓN "SOPORTE" ======
  const btnSoporte = document.getElementById("btnSoporte");
  if (btnSoporte) {
  btnSoporte.addEventListener("click", () => {
    window.location.href = "../html/soporte.html";
  });
  };
  //boton enviar en formulario
   const btnEnviar= document.getElementById("btnEnviar");
  if (btnEnviar) {
  btnEnviar.addEventListener("click", () => {
    alert("Su formulario ha sido enviado.");
    return;
  });
  };
// ====== BOTÓN "FAQ" ======
  const btnFAQ = document.getElementById("btnFAQ");
  if (btnFAQ) {
  btnFAQ.addEventListener("click", () => {
    window.location.href = "../html/faq.html";
  });
  };
  // ====== BOTÓN "TERMINOS Y CONDICIONES" ======
  const btnTerminos = document.getElementById("btnTerminos");
  if (btnTerminos) {
  btnTerminos.addEventListener("click", () => {
    window.location.href = "../html/terminos.html";
  });
  };
  // ====== BOTÓN "POLITICAS PRIVACIDAD" ======
  const btnPoliticas = document.getElementById("btnPoliticas");
  if (btnPoliticas) {
  btnPoliticas.addEventListener("click", () => {
    window.location.href = "../html/politicas.html";
  });
  };
  // ====== BOTÓN "PERFIL" ======
  const btnPerfil= document.getElementById("btnPerfil");
  if (btnPerfil) {
  btnPerfil.addEventListener("click", () => {
    window.location.href = "../html/perfil.html";
  });
  };
  // ====== BOTÓN "COMENTARIOS" ======
  const btnComentarios= document.getElementById("btnComentarios");
  if (btnComentarios) {
  btnComentarios.addEventListener("click", () => {
    window.location.href = "../html/comentarios.html";
  });
  };
  }
}
 // ===== BOTON ENVIAR EN CONSULTA ============
  const btnEnviarConsulta= document.getElementById("btnEnviarConsulta");
  if (btnEnviarConsulta) {
  btnEnviarConsulta.addEventListener("click", () => {
    alert("¡¡SU CONSULTA HA SIDO ENVIADA!!");
    return;
  });
}
  // ====== REGISTRO ======
  const botonCrearCuenta = document.getElementById("btnCrearCuenta");
  if (botonCrearCuenta) {
    botonCrearCuenta.addEventListener("click", () => {
      const correo = document.getElementById("correo").value.trim();
      const pass = document.getElementById("pass").value.trim();

      if (!correo || !pass) {
        alert("Por favor completa todos los campos.");
        return;
      }

      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      // Verificar si ya existe ese correo
      if (usuarios.find(u => u.correo === correo)) {
        alert("Ese correo ya está registrado. Intenta iniciar sesión.");
        return;
      }

      // Guardar usuario nuevo
      usuarios.push({ correo, pass });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      alert("Cuenta creada con éxito 🎉");
      window.location.href = "../html/index.html";
    });
  }

  // ====== LOGIN ======
  const btnLogin = document.getElementById("btnLogin");
  if (btnLogin) {
    btnLogin.addEventListener("click", () => {
      const correo = document.getElementById("correoLogin").value.trim();
      const pass = document.getElementById("passLogin").value.trim();

      if (!correo || !pass) {
        alert("Por favor ingresa tu correo y contraseña.");
        return;
      }

      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      let usuario = usuarios.find(u => u.correo === correo && u.pass === pass);

      if (usuario) {
        alert("Inicio de sesión correcto ✅");
        window.location.href = "../html/principal.html";
      } else {
        alert("Correo o contraseña incorrectos. Verifica tus datos o regístrate.");
      }
    });
  }

  // ====== BOTÓN DE REDIRECCIÓN AL REGISTRO (desde login) ======
  const btnRegistro = document.getElementById("btnRegistro");
  if (btnRegistro) {
    btnRegistro.addEventListener("click", () => {
      window.location.href = "../html/registro.html";
    });
  }
  //PRINCIPAL

 const btnLogin2 = document.getElementById("btn-login");
  if (btnLogin2) {
    btnLogin2.addEventListener("click", () => {
      window.location.href = "../html/index.html";
    });
  }
  
// ====== Cargar Footer Dinámicamente ======

  fetch("../html/footer.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("footer").outerHTML = data;
    })
    .catch(err => console.error("Error cargando footer:", err));
}  });
