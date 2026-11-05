// Reformas Khali · Maqueta: menú móvil, comparador antes/durante y formulario de demostración.
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

  // Formulario: en la maqueta no se envía nada
  var formulario = document.getElementById('formulario');
  var aviso = document.getElementById('mensaje-maqueta');
  if (formulario && aviso) {
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
      aviso.classList.add('visible');
    });
  }

  // Año actual en el pie
  var anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();
})();
