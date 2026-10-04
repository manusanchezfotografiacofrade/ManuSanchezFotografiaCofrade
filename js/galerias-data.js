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
    id: "domingo-de-ramos-2026",          // sin espacios ni tildes; es el identificador
    titulo: "Domingo de Ramos 2026",
    evento: "Semana Santa 2026",
    categoria: "Semana Santa",            // tipo de culto: Semana Santa, Cuaresma, Glorias, Corpus Christi, Besamanos, Besapiés, Procesión extraordinaria, Otros
    fecha: "2026-03-29",                  // AAAA-MM-DD
    lugar: "Jerez de la Frontera",
    hermandad: "Hermandad de ejemplo",    // deja "" si no corresponde
    carpeta: "img/galerias/domingo-de-ramos-2026",
    portada: "",                          // opcional: nombre de la foto de portada; si está vacío usa la primera
    fotos: ["01.svg","02.svg","03.svg","04.svg","05.svg","06.svg","07.svg","08.svg"]
  },
  {
    id: "besamanos-magno", titulo: "Besamanos Magno", evento: "Besamanos", categoria: "Besamanos",
    fecha: "2026-04-03", lugar: "Jerez de la Frontera", hermandad: "Prendimiento, Buena Muerte, Sacramental de Santiago, Madre de Dios del Rosario, Los Remedios, La Soledad, La Piedad",
    carpeta: "img/galerias/", portada: "",
    fotos: [""]
  },
];
