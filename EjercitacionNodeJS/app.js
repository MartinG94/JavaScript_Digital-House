const http = require("http");
const fs = require('fs');
const moduleHome = require('./src/home');
const moduleEnCartelera = require('./src/enCartelera');

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

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
          res.end("Más Votadas");
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
  })
  .listen(3030, "localhost", () => console.log("Server running in 3030 port"));
