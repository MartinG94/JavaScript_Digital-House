const fs = require('fs');

const gestorTheaters = {
    rutaArchivo: './data/theaters.json',
    leerJSON: function(){
        let theatersJSON = fs.readFileSync(this.rutaArchivo, 'utf-8');
        let theatersARRAY = JSON.parse(theatersJSON);
        return theatersARRAY;
    },
    
};

module.exports = gestorTheaters;