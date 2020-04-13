const datosPreguntas = require('../data/faqs.json');
const cantidadDePreguntas = datosPreguntas.total_faqs;
const listadoPreguntas = datosPreguntas.faqs.map( (unaPregunta) => {
    return {
        'Titulo': unaPregunta.faq_title,
        'Respuesta': unaPregunta.faq_answer
    };
});

