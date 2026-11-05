# Maqueta de la nueva página de inicio · Reformas Khali

Abre `index.html` para verla. Es una **maqueta**: enseña cómo podría ser la web, pero el formulario no envía datos y los enlaces "Ver más" no llevan a páginas propias todavía.

## Idea de diseño: Toledo de las tres culturas

El diseño se inspira en la arquitectura de Toledo, donde se mezclan lo cristiano, lo judío y lo musulmán. Solo usa formas de arquitectura, sin símbolos religiosos.

| Elemento | Inspiración | Dónde aparece |
|---|---|---|
| Arco de herradura con dovelas rojas y blancas, enmarcado por un alfiz | Mezquita del Cristo de la Luz, Santa María la Blanca | Foto principal y "Quiénes somos" |
| Lacería de estrellas de ocho puntas | Alicatados y yeserías mudéjares | Fondos, cifras y pie de página |
| Muro de ladrillo visto | Mudéjar toledano (San Román, Santiago del Arrabal) | "Cómo trabajamos" |
| Cenefa de rombos | Sebka y frisos de azulejo | Separadores |
| Oro sobre azul oscuro | Damasquinado toledano y el naranja del logo | Detalles y pie |
| Arcos de medio punto en las fotos | Arquitectura cristiana | Tarjetas de proyectos |

**Colores:** cal `#F7F1E6`, azul azulejo `#1E3F66`, verde `#2E5E4E`, ladrillo `#A9472A` y oro `#D9962B` (parecido al naranja del logo actual).
**Letras:** Cormorant Garamond (títulos) y Figtree (texto).

## Cómo responde a los puntos débiles del informe

- **Móvil (punto 3):** cabecera compacta. El mensaje y los botones se ven nada más entrar.
- **Contacto (punto 4):** un único botón "Pide presupuesto", WhatsApp flotante y una barra fija con "Llamar" y "WhatsApp" en el móvil.
- **Confianza (puntos 5 y 6):** fotos reales con título y categoría, un comparador antes/durante y un hueco para las reseñas de Google.
- **Google (punto 7):** título y descripción pensados para búsquedas, y datos estructurados de negocio local.
- **Accesibilidad (punto 8):** todas las imágenes tienen descripción.
- **Peso (punto 10):** 11 fotos optimizadas (unos 660 KB en total), sin complementos ni jQuery.

## Datos que Khali tiene que confirmar

- [ ] **Teléfono principal.** He puesto 614 192 057 para llamadas y 640 288 725 para WhatsApp. El fijo 925 627 396 no aparece.
- [ ] **"0 € visita y presupuesto"** y **"Presupuesto sin compromiso"**: ¿la visita es siempre gratis?
- [ ] **"Equipo propio y cualificado"**: ¿es correcto?
- [ ] **Opiniones:** las tres tarjetas son **ejemplos** y hay que cambiarlas por reseñas reales de Google.
- [ ] **Titular y NIF** para el pie de página y el Aviso legal.
- [ ] **Fotos:** confirmar qué obra es cada una y, si es posible, conseguir pares de "antes y después".
- [ ] **Comparador:** usa dos fotos del mismo muro tomadas el mismo día (12/09/2024): saneado y trasdosado de pladur.

## Notas técnicas

- La página lleva `noindex` para que, si se publica en GitHub Pages, Google no la confunda con la web real.
- Archivos: `index.html`, `css/styles.css`, `js/main.js` e `img/`. No necesita instalar nada.
