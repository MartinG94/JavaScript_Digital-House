const movies = require('../data/movies');
let nombre = 'Juan';
const moviesLength = movies.length;
const orderedMovies = movie.sort(
    (movie1, movie2) => {
        if( movie1.title < movie2.title ){
            return -1;
        }
        if( movie1.title > movie.title){
            return 1;
        };
        return 0;
});

const datosDeInicio = {
    Titulo: `Bienvenido ${nombre} a DH movies el mejor sitio para encontrar las mejores peliculas, Incluso mucho mejor que Netflix, Cuevana y PopCorn`,
    'Total de Peliculas en Cartelera': moviesLength,
}