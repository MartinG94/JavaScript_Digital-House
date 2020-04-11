const moduleHome = require("./home");
const moduleEnCartelera = require("./enCartelera");
const moduleMasVotadas = require("./masVotadas");
const moduleSucursales = require("./sucursales");
const moduleContacto = require("./contacto");
const modulePreguntasFrecuentes = require("./preguntasFrecuentes");

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
