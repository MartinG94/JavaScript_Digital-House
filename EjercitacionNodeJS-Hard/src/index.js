const moduloHome = require('./home');
const moduloCartelera = require('./enCartelera');
const moduloMasVotadas = require('./masVotadas');

const paginaWeb = {
    home: moduloHome,
    cartelera: moduloCartelera,
    masVotadas: moduloMasVotadas
};

module.exports = paginaWeb;