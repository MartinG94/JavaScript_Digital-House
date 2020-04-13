const datosPeliculas = require('../data/movies.json');
const cantidadDePeliculas = datosPeliculas.total_movies;
const peliculasDisponibles = datosPeliculas.movies;
const titulosDePeliculasDisponibles = peliculasDisponibles.map( (unaPelicula) => {
    return unaPelicula.title;
})

const home = {
    Titulo: 'Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn',
    'Total de Peliculas en Cartelera': cantidadDePeliculas,
    'Listado de Peliculas': titulosDePeliculasDisponibles,
    'Pié de página': [
        'En Cartelera',
        'Mas Votadas',
        'Sucursales',
        'Contacto',
        'Preguntas Frecuentes'
    ]
};

module.exports = home;