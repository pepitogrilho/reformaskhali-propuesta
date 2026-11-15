// Reformas Khali · menú móvil, comparador antes/durante y avisos del formulario.
(function () {
  // Menú móvil
  var boton = document.querySelector('.boton-menu');
  var menu = document.getElementById('menu');
  if (boton && menu) {
    boton.addEventListener('click', function () {
      var abierto = menu.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('abierto');
        boton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Comparador antes / durante
  var comparador = document.getElementById('comparador');
  var deslizador = document.getElementById('deslizador');
  if (comparador && deslizador) {
    var actualizar = function () { comparador.style.setProperty('--pos', deslizador.value + '%'); };
    deslizador.addEventListener('input', actualizar);
    actualizar();
  }

  // Formulario
  var formulario = document.getElementById('formulario');
  var aviso = document.getElementById('aviso-formulario');
  if (formulario && aviso) {
    var mostrar = function (texto, tipo) {
      aviso.textContent = texto;
      aviso.className = 'aviso-formulario ' + tipo;
      aviso.hidden = false;
    };

    // En la versión de prueba (GitHub Pages o archivo local) no hay PHP: no se envía nada.
    var dePrueba = location.protocol === 'file:' || /github\.io$/.test(location.hostname);
    if (dePrueba) {
      formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        mostrar('Versión de prueba: el formulario todavía no envía nada. En la web publicada la solicitud llegará a info@reformaskhali.es.', 'ok');
      });
    }

    // Si el envío falló, enviar.php vuelve con ?error=1
    if (/[?&]error=1/.test(location.search)) {
      mostrar('No se ha podido enviar. Revisa que has puesto tu nombre, un teléfono y que has aceptado la política de privacidad. Si sigue sin funcionar, escríbenos por WhatsApp al 640 288 725.', 'error');
      formulario.scrollIntoView();
    }
  }

  // Año actual en el pie
  var anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();
})();
