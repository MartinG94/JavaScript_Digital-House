const paginaWeb = require('./src/index');

function ruteo(req, res) {
  switch (req.url) {
    case "/":
      {
        res.end(JSON.stringify(paginaWeb.Home));
      }
      break;
    case "/en-cartelera":
      {
        res.end(JSON.stringify(paginaWeb["En Cartelera"]));
      }
      break;
    case "/mas-votadas":
      {
        res.end(JSON.stringify(paginaWeb["Mas Votadas"]));
      }
      break;
    case "/sucursales":
      {
        res.end(JSON.stringify(paginaWeb.Sucursales));
      }
      break;
    case "/contacto":
      {
        res.end(JSON.stringify(paginaWeb.Sucursales));
      }
      break;
    case "/preguntas-frecuentes":
      {
        res.end(JSON.stringify(paginaWeb["Preguntas Frecuentes"]));
      }
      break;
    default: {
      res.end("404 not found");
    }
  }
}

module.exports = ruteo;
