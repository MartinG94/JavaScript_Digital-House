const fs = require('fs');

const gestorMovies = {
    rutaArchivo: './data/movies.json',
    leerJSON: function(){
        let moviesJSON = fs.readFileSync(this.rutaArchivo, 'utf-8');
        let moviesARRAY = JSON.parse(moviesJSON);
        return moviesARRAY;
    },
    
};

module.exports = gestorMovies;