// Node nos da la posibilidad de crear un servidor

const http = require('http');

// Creación del servidor
// Se encargará de manejar todas las peticiones
// req tiene toda la información del request que vino desde el cliente

http.createServer( function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});

    switch(req.url){
        case '/':
            res.end('Bienvenido a mi Homepage!');
            break;
        case '/productos':
            res.end('Estos son nuestros productos');
            break;
        default:
            res.end('Error 404');
            break;
    };

    res.end('Terminado');

}).listen(3030, "localHost"); // Cualquier numero de 4 digitos