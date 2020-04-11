const moduleHome = require("./home");
const moduleEnCartelera = require("./enCartelera");
const moduleMasVotadas = require("./masVotadas");
const moduleSucursales = require("./sucursales");
const moduleContacto = require("./contacto");
const modulePreguntasFrecuentes = require("./preguntasFrecuentes");

const paginaWeb = {
    'Home': moduleHome,
    'En Cartelera': moduleEnCartelera,
    'Mas Votadas': moduleMasVotadas,
    'Sucursales': moduleSucursales,
    'Contacto': moduleContacto,
    'Preguntas Frecuentes': modulePreguntasFrecuentes
};

module.exports = paginaWeb;