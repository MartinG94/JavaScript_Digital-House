const movies = require('../data/movies');
let nombre = 'Martin';
const moviesLength = movies.length;
const orderedMovies = movie.sort(
    (movie1, movie2) => {
        const movie1Title = movie1.title;
        const movie2Title = movie2.title;

        if( movie1Title < movie2Title ){
            return -1;
        }
        if( movie1Title > movie2Title){
            return 1;
        };
        return 0;
});

const datosDeInicio = {
    Titulo: `Bienvenido ${nombre} a DH movies el mejor sitio para encontrar las mejores peliculas, Incluso mucho mejor que Netflix, Cuevana y PopCorn`,
    'Total de Peliculas en Cartelera': moviesLength,
    'Listados de peliculas': orderedMovies,
    'Pie de pagina': [
        'En Cartelera',
        'Más Votadas',
        'Sucursales',
        'Contacto',
        'Preguntas Frecuentes'
    ],
}