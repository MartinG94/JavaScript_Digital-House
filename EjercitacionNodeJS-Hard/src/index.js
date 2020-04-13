const moduloHome = require('./home');
const moduloCartelera = require('./enCartelera');

const paginaWeb = {
    home: moduloHome,
    cartelera: moduloCartelera
};

module.exports = paginaWeb;