const paginaWeb = require('./src/index');

function rutear(req, res){
    switch(req.url){
        case '/':
            res.end(JSON.stringify(paginaWeb.home));
            break;
        case '/en-cartelera':
            res.end(JSON.stringify(paginaWeb.cartelera));
            break;
        case '/mas-votadas':
            res.end(JSON.stringify(paginaWeb.masVotadas));
            break;
        case '/sucursales':
            res.end(JSON.stringify(paginaWeb.sucursales));
            break;
        case '/contacto':
            res.end(JSON.stringify(paginaWeb.contacto));
            break;
        case '/preguntas-frecuentes':
            res.end(JSON.stringify(paginaWeb.preguntasFrecuentes));
            break;
        default:
            res.end("404 not found");
    };
};

module.exports = rutear;