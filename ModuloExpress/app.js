const express = require('express');
const app = express(); // Variable donde están disponibles todos los metodos del Framework

app.listen(3000, () => {
    console.log('Servidor en ejecución');
});

app.get('/', (req, res) => {
    res.send('Hola Mundo! By Express');
});

// ruta parametrizada y genérica
app.get('/productos/:idProducto', (req, res) => {
    let id = req.params.idProducto;
    res.send(`Bienvenidos al detalle del producto ${id}`);
});

app.get('/productos/:idProducto/comentarios/:idComentario?', (req, res) => {
    let idProd = req.params.idProducto;
    let idComent = req.params.idComentario;
    if(idComent == undefined){
        res.send(`Bienvenidos a los comentarios del producto ${idProd}`);
        return;
    };
    res.send(`Bienvenidos a los comentarios del producto ${idProd} y enfocado en el comentario ${idComent}`);
});