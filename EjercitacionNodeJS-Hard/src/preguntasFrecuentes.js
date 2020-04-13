const datosPreguntas = require('../data/faqs.json');
const cantidadDePreguntas = datosPreguntas.total_faqs;
const listadoPreguntas = datosPreguntas.faqs.map( (unaPregunta) => {
    return {
        'Titulo': unaPregunta.faq_title,
        'Respuesta': unaPregunta.faq_answer
    };
});

const preguntasFrecuentes = {
    Titulo: 'Preguntas Frecuentes',
    'Total de preguntas': cantidadDePreguntas,
    'Listado de preguntas': listadoPreguntas
};

module.exports = preguntasFrecuentes;