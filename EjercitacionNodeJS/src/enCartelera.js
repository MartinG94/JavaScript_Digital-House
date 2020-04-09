const movies = require("../data/movies");
const cantidadDePeliculas = movies.length;
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

const pelisYSusReseñas = orderedMovies.map(
  (movie) =>
    `Titulo: ${movie.title}
Reseña:${movie.overview}`
);

const datosDeCartelera = {
  Titulo: "En Cartelera",
  "Total de peliculas": cantidadDePeliculas,
  "Listado De Peliculas": pelisYSusReseñas,
};

module.exports = datosDeCartelera;
