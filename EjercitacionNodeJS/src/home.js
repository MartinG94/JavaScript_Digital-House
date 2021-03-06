const movies = require("../data/movies");
const moviesLength = movies.length;

const orderedMovies = movies.sort((movie1, movie2) => {
  const movie1Title = movie1.title;
  const movie2Title = movie2.title;
  if (movie1Title < movie2Title) {
    return -1;
  }
  if (movie1Title > movie2Title) {
    return 1;
  }
  return 0;
});

const datosDeInicio = {
  Titulo: `Bienvenido a DH movies el mejor sitio para encontrar las mejores peliculas, Incluso mucho mejor que Netflix, Cuevana y PopCorn`,
  "Total de Peliculas en Cartelera": moviesLength,
  "Listado de peliculas": orderedMovies.map( (movie) => movie.title ),
  "Pie de pagina": [
    "En Cartelera",
    "Más Votadas",
    "Sucursales",
    "Contacto",
    "Preguntas Frecuentes",
  ],
};

module.exports = datosDeInicio;
