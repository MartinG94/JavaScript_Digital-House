const movies = require("../data/movies");
const moviesMasVotadas = movies.filter( pelicula => pelicula.vote_average > 7);
const cantidadDePeliculasMasVotadas = moviesMasVotadas.length;
const sumasDePromedios = (moviesMasVotadas) => {
    let suma = 0;
    for(let promedio of moviesMasVotadas){
        suma += promedio;
    }
    return suma;
};

const ratingPromedio = sumasDePromedios / cantidadDePeliculasMasVotadas;

const listaPeliculas = moviesMasVotadas.map( pelicula => {
    return {'Titulo':pelicula.title, 'Rating':pelicula.vote_average, 'Reseña':pelicula.overview};
});

const datosDeMasVotados = {
    Titulo: 'Mas Votadas',
    'Total de Peliculas': cantidadDePeliculasMasVotadas,
    'Rating Promedio': ratingPromedio,
    'Listado de Peliculas': listaPeliculas,
};

module.exports = datosDeMasVotados;