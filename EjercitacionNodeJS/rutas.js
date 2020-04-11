const moduleHome = require("./src/home");
const moduleEnCartelera = require("./src/enCartelera");
const moduleMasVotadas = require("./src/masVotadas");
const moduleSucursales = require("./src/sucursales");
const moduleContacto = require("./src/contacto");
const modulePreguntasFrecuentes = require("./src/preguntasFrecuentes");

function ruteo(req, res) {
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
        res.end(JSON.stringify(moduleSucursales));
      }
      break;
    case "/contacto":
      {
        res.end(JSON.stringify(moduleContacto));
      }
      break;
    case "/preguntas-frecuentes":
      {
        res.end(JSON.stringify(modulePreguntasFrecuentes));
      }
      break;
    default: {
      res.end("404 not found");
    }
  }
}

module.exports = ruteo;
