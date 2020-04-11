const faqs = require('../data/faqs');
const totalDePreguntas = faqs.length;
const listadoPreguntas = faqs.map( unaPregunta => {
    return {'Pregunta': unaPregunta.faq_title, 'Respuesta': unaPregunta.faq_answer};
});

const datosPreguntas = {
    Titulo: 'Preguntas Frecuentes',
    'Total de Preguntas': totalDePreguntas,
    'Listado de Preguntas': listadoPreguntas,
};

module.exports = datosPreguntas;