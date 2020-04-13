const moduloHome = require('./home');
const moduloCartelera = require('./enCartelera');
const moduloMasVotadas = require('./masVotadas');
const moduloSucursales = require('./sucursales');

const paginaWeb = {
    home: moduloHome,
    cartelera: moduloCartelera,
    masVotadas: moduloMasVotadas,
    sucursales: moduloSucursales
};

module.exports = paginaWeb;