// Node nos da la posibilidad de crear un servidor

const http = require('http');

// Creación del servidor
// Se encargará de manejar todas las peticiones

http.createServer( function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Mi primer server con Node');

}).listen(3030, "localHost"); // Cualquier numero de 4 digitos