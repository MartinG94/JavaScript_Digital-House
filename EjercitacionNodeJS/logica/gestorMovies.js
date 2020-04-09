const fs = require('fs');

const gestorMovies = {
    rutaArchivo: './data/movies.json',
    leerJSON: function(){
        let moviesJSON = fs.readFileSync(this.rutaArchivo, 'utf-8');
        let moviesARRAY = JSON.parse(moviesJSON);
        return moviesARRAY;
    },
    cantidadDePeliculas: function(){
        let peliculas = this.leerJSON();
        return peliculas.lenght;
    }
};

module.exports = gestorMovies;