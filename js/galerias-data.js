/* =====================================================
   DATOS DE LAS GALERÍAS  (el archivo que más vas a editar)
   Para añadir una galería: copia un bloque { ... }, cambia
   los datos y añade el nombre de tus fotos.
   Estructura de carpetas de cada galería:
     img/galerias/<carpeta>/01.jpg          (foto grande, 1600 px)
     img/galerias/<carpeta>/thumbs/01.jpg   (miniatura, 600 px)
   ===================================================== */
const MARCA_AGUA = "Manu Sánchez Fotografía Cofrade";

const GALERIAS = [
  {
    id: "besamanos-magno", titulo: "Besamanos Magno - Hermandad de la Soledad", evento: "Besamanos", categoria: "Besamanos",
    fecha: "2026-09-27", lugar: "Jerez de la Frontera", hermandad: "La Soledad",
    carpeta: "img/galerias/", portada: "",
    fotos: [""]
  },

   {
    id: "san-francisco-entrega", titulo: "Procesión San Francisco de Asís - Hermandad de la Entrega", evento: "Procesión", categoria: "Procesión",
    fecha: "2026-10-04", lugar: "Jerez de la Frontera", hermandad: "La Entrega",
    carpeta: "img/galerias/", portada: "",
    fotos: [""]
  },
];
