const salas = require('../data/theaters.json');
const cantidadDeSalas = salas.total_theaters;
const listadoDeSalas = salas.theaters.map( (unaSala) => {
    return {
        'Nombre': unaSala.name,
        'Dirección': unaSala.address,
        'Descripción': unaSala.description
    };
});

