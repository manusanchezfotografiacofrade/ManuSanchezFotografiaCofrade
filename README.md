# Manu Sánchez Fotografía Cofrade

Web estática (HTML + CSS + JavaScript) lista para GitHub Pages. No necesita instalar nada.

## Estructura
```
index.html  galerias.html  sobre-mi.html  contacto.html
css/styles.css          estilos y colores (variables al principio)
js/galerias-data.js     LISTA DE GALERÍAS (lo que más editarás)
js/script.js            lógica (filtros, visor); no hace falta tocarlo
img/portada/            foto de portada
img/galerias/<galeria>/ fotos grandes + carpeta thumbs/ con miniaturas
img/logos/              favicon y retrato
sitemap.xml  robots.txt
```

## 1. Antes de subir: cambia estos placeholders
- `TU-USUARIO` y `NOMBRE-REPO` en `sitemap.xml`, `robots.txt` y en las etiquetas `canonical`/`og:url` de los 4 HTML (Buscar y reemplazar en VS Code: Ctrl+Shift+H).
- `REEMPLAZAR-URL-INSTAGRAM`, `-FACEBOOK`, `-YOUTUBE` y `REEMPLAZAR@EMAIL.COM` en `index.html` y `contacto.html`.
- Crea `img/portada/og.jpg` (1200×630): es la imagen que sale al compartir el enlace.

## 2. Subir a GitHub
1. Crea cuenta en github.com → **New repository** → nombre (p. ej. `manusanchez-fotografia`) → **Public** → Create.
2. Con Git instalado, en la carpeta del proyecto: 
   `git init` · `git add .` · `git commit -m "Primera versión"` · `git branch -M main` · `git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPO.git` · `git push -u origin main`
   (Alternativa sin Git: en el repositorio, **Add file → Upload files** y arrastra todo el contenido.)
3. **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. En 1-2 minutos estará en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.
5. Para actualizar: edita en VS Code → `git add .` → `git commit -m "Nueva galería"` → `git push`.

## 3. Cómo preparar las fotos
Para cada foto crea **dos versiones** con el mismo nombre (minúsculas, sin espacios ni tildes: `01.jpg`, `02.jpg`…):
| Versión | Lado largo | Calidad JPEG | Peso objetivo | Carpeta |
|---|---|---|---|---|
| Grande (visor) | 1600 px (2000 px si quieres más detalle) | 78-82 | 250-450 KB | `img/galerias/<galeria>/` |
| Miniatura | 600 px de ancho | 70-75 | 40-90 KB | `img/galerias/<galeria>/thumbs/` |

- Exporta en **sRGB**, JPEG, con la nitidez de salida en "pantalla".
- **Sin marca de agua en el archivo**: la web la superpone con CSS, así tus ficheros no se modifican.
- Lightroom: Exportar → JPEG → redimensionar "lado largo" → calidad. Para lotes sin Lightroom: XnConvert o squoosh.app.
- Las miniaturas se muestran en formato 4:5 recortado; la foto grande siempre se ve completa y sin deformar.
- Ojo: una marca por CSS es visible pero no impide que alguien descargue la foto. Por eso conviene subir solo versiones de 1600 px.
- Límite orientativo de GitHub Pages: repositorio de ~1 GB. Con ~400 KB por foto caben muchos cientos.

## 4. Añadir una galería nueva
1. Crea `img/galerias/mi-galeria/` y dentro `thumbs/`.
2. Pon las fotos grandes y las miniaturas (mismo nombre).
3. Abre `js/galerias-data.js`, copia un bloque `{ ... }`, pega al final (con coma entre bloques) y cambia `id`, `titulo`, `fecha`, `lugar`, `hermandad`, `categoria`, `carpeta` y la lista `fotos`.
4. Aparece sola en inicio (las 3 más recientes) y en Galerías, con filtros de año, tipo y hermandad.

## 5. Añadir fotos a una galería existente
Copia las fotos (grande + miniatura) a su carpeta y añade sus nombres a `fotos: [...]`. El número de fotos se actualiza solo.

## 6. Cambiar portada y textos
- **Portada**: guarda tu foto en `img/portada/` (2000-2400 px, <400 KB) y cambia `portada.svg` por tu nombre en la etiqueta `<img>` de `index.html`.
- **Textos**: edita directamente `index.html`, `sobre-mi.html`, `contacto.html` (busca los comentarios `CAMBIAR`).
- **Colores**: variables `--bg`, `--gold`, `--wine`… al inicio de `css/styles.css`.
- **Retrato**: sustituye `img/logos/retrato.svg` por tu foto y ajusta el nombre en `sobre-mi.html`.

## 7. Qué tocarás normalmente
`js/galerias-data.js` (casi siempre), los textos de los HTML y las carpetas `img/`.

## SEO
Cada página tiene su `title`, `description`, Open Graph, `canonical` y HTML semántico. Cuando esté publicada, da de alta la web en Google Search Console y envía el `sitemap.xml`. Cada galería nueva debería tener título, lugar y hermandad bien rellenos: Google lee ese texto.
