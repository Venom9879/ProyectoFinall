document.addEventListener("DOMContentLoaded", () => {

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
        window.location.href = "../html/pagina_principal.html";
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
});
