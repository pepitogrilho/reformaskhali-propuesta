"""Prepara la carpeta que se sube al alojamiento (public_html) de reformaskhali.es.

Qué hace:
  1. Copia la web a una carpeta nueva, sin los archivos internos (.git, .md, herramientas…).
  2. Rellena los datos privados ([[NIE]], [[DOMICILIO]]) desde un archivo que NO está en GitHub,
     y pone la fecha de hoy en [[FECHA]].
  3. Quita la marca «noindex» (para que Google pueda indexar la web) y el aviso de «Versión de prueba».
  4. Comprueba que no queda ningún [[…]] sin rellenar.

Uso (desde la carpeta v202611):
  python herramientas/preparar-publicacion.py ../log/datos-legales.json ../publicar

El archivo de datos es un JSON así:  {"NIE": "…", "DOMICILIO": "…"}
"""
import datetime, json, re, shutil, sys
from pathlib import Path

MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
         "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
NO_COPIAR = {".git", ".gitignore", "herramientas", "README.md", "NOTAS-MAQUETA.md", "informe-debilidades-web.md"}


def main() -> None:
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    datos_ruta, destino = Path(sys.argv[1]), Path(sys.argv[2])
    origen = Path(__file__).resolve().parent.parent

    datos = json.loads(datos_ruta.read_text(encoding="utf-8"))
    hoy = datetime.date.today()
    datos["FECHA"] = f"{hoy.day} de {MESES[hoy.month - 1]} de {hoy.year}"

    if destino.exists():
        sys.exit(f"La carpeta {destino} ya existe. Bórrala o elige otra.")
    shutil.copytree(origen, destino, ignore=lambda carpeta, nombres: [n for n in nombres if n in NO_COPIAR])

    for pagina in destino.rglob("*.html"):
        texto = pagina.read_text(encoding="utf-8")
        for clave, valor in datos.items():
            texto = texto.replace(f'<span class="pendiente">[[{clave}]]</span>', valor)
            texto = texto.replace(f"[[{clave}]]", valor)
        texto = texto.replace('  <meta name="robots" content="noindex">\n', "")
        texto = re.sub(r'\s*<div class="aviso-maqueta">.*?</div>\n', "\n", texto)
        quedan = re.findall(r"\[\[\w+\]\]", texto)
        if quedan:
            sys.exit(f"{pagina}: faltan datos {sorted(set(quedan))}")
        pagina.write_text(texto, encoding="utf-8", newline="\n")

    print(f"Listo: {destino}. Sube su contenido a public_html.")


if __name__ == "__main__":
    main()
