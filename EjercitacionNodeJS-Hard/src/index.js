const moduloHome = require('./home');
const moduloCartelera = require('./enCartelera');
const moduloMasVotadas = require('./masVotadas');
const moduloSucursales = require('./sucursales');
const moduloContacto = require('./contacto');

const paginaWeb = {
    home: moduloHome,
    cartelera: moduloCartelera,
    masVotadas: moduloMasVotadas,
    sucursales: moduloSucursales,
    contacto: moduloContacto
};

module.exports = paginaWeb;