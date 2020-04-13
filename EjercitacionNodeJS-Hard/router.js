const paginaWeb = require('./src/index');

function rutear(req, res){
    switch(req.url){
        case '/':
            res.end(JSON.stringify(paginaWeb.home));
            break;
        case '/en-cartelera':
            res.end(JSON.stringify(paginaWeb.cartelera));
            break;
    };
};

module.exports = rutear;