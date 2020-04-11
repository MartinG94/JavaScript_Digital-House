const movies = require("../data/movies");
const moviesMasVotadas = movies.filter( pelicula => pelicula.vote_average >= 7);
const cantidadDePeliculasMasVotadas = moviesMasVotadas.length;
const promedios = moviesMasVotadas.map( unaPeli => {
    return unaPeli.vote_average;
});
const sumasDePromedios = (listaDePromedios) => {
    let suma = 0;
    for(let promedio of listaDePromedios){
        suma += promedio;
    }
    return suma;
};

const ratingPromedio = sumasDePromedios(promedios) / cantidadDePeliculasMasVotadas;

const ratingPromedioFixeado = Number(ratingPromedio.toFixed(2));

const listaPeliculas = moviesMasVotadas.map( pelicula => {
    return {'Titulo':pelicula.title, 'Rating':pelicula.vote_average, 'Reseña':pelicula.overview};
});

const datosDeMasVotados = {
    Titulo: 'Mas Votadas',
    'Total de Peliculas': cantidadDePeliculasMasVotadas,
    'Rating Promedio': ratingPromedioFixeado,
    'Listado de Peliculas': listaPeliculas,
};

module.exports = datosDeMasVotados;