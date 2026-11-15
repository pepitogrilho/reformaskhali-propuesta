# Web de Reformas Khali

Nueva web de [Reformas Khali](https://www.reformaskhali.es/), empresa de reformas de Toledo. Es una web estática (HTML y CSS), con un formulario en PHP.

## Páginas

| Carpeta | Página |
|---|---|
| `index.html` | Inicio |
| `servicios/` | Servicios en detalle |
| `proyectos-realizados/` | Trabajos realizados (fotos por tipo de trabajo) |
| `contacto/` | Contacto y formulario (`enviar.php` manda el correo a info@) |
| `aviso-legal/`, `politica-privacidad/`, `politica-de-cookies/` | Textos legales |
| `404.html` | Página de error |

Otros archivos: `css/`, `js/`, `img/` (fotos; las de Khali en `img/obras/`), `fonts/` (fuentes alojadas aquí, sin Google Fonts), `.htaccess` (redirecciones de la web antigua), `robots.txt` y `sitemap.xml`.

## Versión de prueba

- **En línea:** https://pepitogrilho.github.io/reformaskhali-propuesta/
- Lleva `noindex` y el aviso «Versión de prueba». El formulario no envía nada (GitHub Pages no tiene PHP).
- Los datos privados del titular aparecen como `[[NIE]]` y `[[DOMICILIO]]`: no se guardan en este repositorio, que es público.

## Publicar en reformaskhali.es

```
python herramientas/preparar-publicacion.py RUTA/datos-legales.json ../publicar
```

Crea una copia lista para subir a `public_html`: rellena los datos privados, quita `noindex` y el aviso de prueba, y deja fuera los archivos internos.

Otros documentos: [`informe-debilidades-web.md`](informe-debilidades-web.md) (análisis de la web antigua) y [`NOTAS-MAQUETA.md`](NOTAS-MAQUETA.md) (idea de diseño).
