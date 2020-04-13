const datosPeliculas = require('../data/movies.json');
const peliculasMasVotadas = datosPeliculas.movies.filter( (unaPelicula) => {
    return unaPelicula.vote_average >= 7;
});
const promediosDeLasMasVotadas = peliculasMasVotadas.map( (unaPelicula) => {
    return unaPelicula.vote_average;
});
const cantidadPeliculasMasVotadas = peliculasMasVotadas.length;
let sumarArray = (unArray) => {
    let resultado = 0;
    for(let elemento of unArray){
        resultado += elemento;
    };
    return resultado;
};
let ratingPromedio = Number((sumarArray(promediosDeLasMasVotadas) / cantidadPeliculasMasVotadas).toFixed(2));
