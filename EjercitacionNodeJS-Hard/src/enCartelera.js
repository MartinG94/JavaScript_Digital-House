const datosPeliculas = require('../data/movies.json');
const cantidadDePeliculas = datosPeliculas.total_movies;
const listadoPeliculas = datosPeliculas.movies.map( (unaPelicula) => {
    return {
        'Titulo': unaPelicula.title,
        'Reseña': unaPelicula.overview
    };
});

