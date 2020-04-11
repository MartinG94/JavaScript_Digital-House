const moduleHome = require("./src/home");
const moduleEnCartelera = require("./src/enCartelera");
const moduleMasVotadas = require("./src/masVotadas");
const moduleSucursales = require("./src/sucursales");
const moduleContacto = require("./src/contacto");
const modulePreguntasFrecuentes = require("./src/preguntasFrecuentes");

const paginaWeb = {
    'Home': moduleHome,
    'En Cartelera': moduleEnCartelera,
    'Mas Votadas': moduleMasVotadas,
    'Sucursales': moduleSucursales,
    'Contacto': moduleContacto,
    'Preguntas Frecuentes': modulePreguntasFrecuentes
};

module.exports = paginaWeb;