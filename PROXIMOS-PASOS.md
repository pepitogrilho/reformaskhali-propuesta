# Próximos pasos · Renovación web de Reformas Khali

**Última actualización:** 5 de noviembre de 2026

## Dónde estamos

- [x] Análisis de la web actual → [`informe-debilidades-web.md`](informe-debilidades-web.md) (11 puntos débiles)
- [x] Maqueta de la nueva página de inicio → https://pepitogrilho.github.io/reformaskhali-propuesta/
- [x] Repositorio en GitHub → https://github.com/pepitogrilho/reformaskhali-propuesta
- [ ] Enviar la propuesta a Khali (borrador en [`BORRADOR-EMAIL-KHALI.md`](BORRADOR-EMAIL-KHALI.md))

---

## 1. Presentar la propuesta (esta semana)

- [ ] Enviar el correo a `info@reformaskhali.es`, en el idioma que Khali prefiera.
- [ ] Quedar con Khali y enseñarle la maqueta **en su móvil**.
- [ ] Repasar con él la lista de datos a confirmar de [`NOTAS-MAQUETA.md`](NOTAS-MAQUETA.md):
  - [ ] Teléfono principal y teléfono de WhatsApp
  - [ ] ¿La visita y el presupuesto son siempre gratis?
  - [ ] ¿"Equipo propio"? ¿Cuántos años exactos de experiencia?
  - [ ] Titular, NIF y dirección para el Aviso legal
  - [ ] Qué obra es cada foto (tipo de trabajo, zona y duración)
- [ ] Preguntarle qué le gusta y qué cambiaría del diseño.

## 2. Arreglos urgentes en la web actual (1 día)

Se pueden hacer ya, sin esperar a la web nueva. Hace falta acceso al panel de WordPress (`/wp-admin`) o al hosting (Webempresa).

- [ ] **Enlace de privacidad roto:** corregir el enlace del pie (`/politica-de-privacidad/` → `/politica-privacidad/`) o crear una redirección 301.
- [ ] **Aviso legal:** crear la página con titular, NIF, dirección y correo de contacto (ley LSSI). Conviene que lo revise su gestor.
- [ ] **Un único correo** en los textos legales: cambiar `servicioskn2@gmail.com` por `info@reformaskhali.es`, o al revés si Khali lo prefiere.
- [ ] **Borrar la entrada de prueba** "WordPress felizmente alojado en Webempresa".
- [ ] **Política de cookies:** adaptar el texto a lo que la web usa de verdad.
- [ ] **Seguridad básica:** actualizar WordPress y los complementos, limitar los intentos de acceso, activar la verificación en dos pasos y comprobar que hay copias de seguridad.

## 3. Reunir el contenido de la web nueva (1–2 semanas, lo aporta Khali)

- [ ] **Ficha de Google Business:** ¿existe? Si no, crearla. Pedir reseñas a 5–10 clientes contentos.
- [ ] **Fotos de antes y después** de al menos 3–4 obras.
- [ ] **Datos de cada proyecto:** qué se hizo, zona (Toledo, Madrid, Ciudad Real…) y cuánto duró.
- [ ] **Foto del equipo** o de Khali en una obra, para "Quiénes somos".
- [ ] **Textos de servicios:** 2–3 párrafos por servicio importante (qué incluye, plazos típicos, preguntas frecuentes).
- [ ] **Redes sociales,** si las tiene (Instagram y Facebook).

## 4. Decidir cómo construir la web nueva

| Opción | Ventajas | Inconvenientes |
|---|---|---|
| **A. Limpiar el WordPress actual:** quitar los 7 complementos de Elementor y aplicar el diseño nuevo sobre GeneratePress | Khali sigue editando como ahora. El hosting no cambia. | Hay que rehacer igualmente casi todas las páginas. Sigue necesitando mantenimiento. |
| **B. Web estática** como la maqueta: HTML y CSS, publicada en el hosting actual o en Netlify o Cloudflare | Muy rápida, casi sin mantenimiento ni riesgos de seguridad, y la maqueta ya está hecha. | Para cambiar textos o fotos hace falta alguien que sepa, o añadir un editor sencillo. |
| **C. WordPress nuevo y ligero:** tema de bloques y el editor de WordPress, sin Elementor | Equilibrio entre facilidad de edición y velocidad. | Más trabajo inicial que B. |

- [ ] Elegir la opción con Khali. Pregunta clave: **¿quiere cambiar él mismo fotos y textos, o prefiere pedirlo?**

## 5. Construir la web completa

- [ ] **Inicio:** la maqueta ya hecha, con los datos reales.
- [ ] **Una página por servicio importante:** reformas integrales, cocinas y baños, pladur, fachadas y cubiertas, instalaciones y comunidades.
- [ ] **Proyectos:** una ficha por obra con antes y después.
- [ ] **Páginas por zona:** "Reformas en Toledo", "Reformas en Madrid" y "Reformas en Ciudad Real".
- [ ] **Contacto:** formulario que funcione de verdad, con aviso a `info@reformaskhali.es` y protección antispam.
- [ ] **Legales:** Aviso legal, Política de privacidad y Política de cookies, revisadas.
- [ ] **Antes de publicar:**
  - Quitar `noindex` de la cabecera, que ahora está para que Google no indexe la maqueta.
  - Revisar títulos y descripciones de Google en cada página.
  - Revisar los datos de negocio local.
  - Comprobar que todas las imágenes tienen descripción.

## 6. Publicar y medir

- [ ] Publicar en el dominio `reformaskhali.es`.
- [ ] **Redirecciones 301** de las direcciones antiguas (`/servicios/`, `/proyectos-realizados/`, etc.) a las nuevas, para no perder posiciones en Google.
- [ ] Dar de alta la web en **Google Search Console** y enviar el mapa del sitio.
- [ ] Pasar **PageSpeed Insights** antes y después; el día del análisis no se pudo por límite de uso.
- [ ] Si se quiere medir visitas, poner una analítica respetuosa con las cookies (por ejemplo Plausible o Matomo sin cookies), o Google Analytics con el aviso de cookies bien configurado.

## 7. Después del lanzamiento

- [ ] Añadir una obra nueva cada mes con sus fotos.
- [ ] Pedir reseña de Google a cada cliente al terminar la obra.
- [ ] Revisar cada 3 meses: actualizaciones, copias de seguridad y posiciones en Google.

---

## Notas del repositorio

- GitHub Pages sirve **solo para enseñar la maqueta**. La web real irá en el dominio de Khali.
- Para actualizar la maqueta: cambiar los archivos de esta carpeta, hacer commit y push. GitHub Pages se actualiza en un minuto.
- El repositorio es **público**. No subir datos privados de Khali ni el borrador del correo.
