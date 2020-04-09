const http = require("http");

const gestorMovies = require("./logica/gestorMovies.js");
const gestorFaqs = require("./logica/gestorFaqs.js");
const gestorTheaters = require("./logica/gestorTheaters.js");

let totalPeliculas = gestorMovies.cantidadDePeliculas();

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

    switch (req.url) {
      case "/":
        {
          res.write("Bienvenidos a DH Movies \n");
          res.write("El mejor sitio para encontrar las mejores películas \n");
          res.write("Incluso mejor que Netfliz, Cuevana o PopCorn \n \n");
          res.write(
            "El total de peliculas disponibles es de " + totalPeliculas
          );
          res.end();
        }
        break;
      case "/en-cartelera":
        {
          res.end("En cartelera");
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
