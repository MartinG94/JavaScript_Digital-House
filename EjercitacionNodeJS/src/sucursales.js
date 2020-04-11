const teatros = require('../data/theaters');
const totalDeSalas = teatros.length;
const listadoDeSalas = teatros.map( unTeatro => {
    return {'Nombre': unTeatro.name, 'Dirección': unTeatro.address, 'Descripción': unTeatro.description};
});

const datosSucursales = {
    Titulo: 'Nuestras Sucursales',
    'Total de Salas': totalDeSalas,
    'Listado de Salas': listadoDeSalas
};

module.exports = datosSucursales;