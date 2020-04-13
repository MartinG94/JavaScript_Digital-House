const datosPeliculas = require('../data/movies.json');
const cantidadDePeliculas = datosPeliculas.total_movies;
const listadoPeliculas = datosPeliculas.movies.map( (unaPelicula) => {
    return {
        'Titulo': unaPelicula.title,
        'Reseña': unaPelicula.overview
    };
});

const enCartelera = {
    Titulo: 'En Cartelera',
    'Total de películas': cantidadDePeliculas,
    'Listado de peliculas': listadoPeliculas
};

module.exports = enCartelera;