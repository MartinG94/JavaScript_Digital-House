const moduleHome = require('./src/home');
const moduleEnCartelera = require('./src/enCartelera');
const moduleMasVotadas = require('./src/masVotadas');

function ruteo(req, res){
    switch (req.url) {
        case "/":
          {
              res.end(JSON.stringify(moduleHome));
          }
          break;
        case "/en-cartelera":
          {
            res.end(JSON.stringify(moduleEnCartelera));
          }
          break;
        case "/mas-votadas":
          {
            res.end(JSON.stringify(moduleMasVotadas));
          }
          break;
        case "/sucursales":
          {
            res.end("Sucursales");
          }
          break;
        case "/contacto":
          {
            res.end("Contacto");
          }
          break;
        case "/preguntas-frecuentes":
          {
            res.end("Preguntas Frecuentes");
          }
          break;
        default: {
          res.end("404 not found");
        }
      }
};

module.exports = ruteo;