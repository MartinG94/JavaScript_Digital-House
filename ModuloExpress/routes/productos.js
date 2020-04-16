const express = require('express');
const router = express.Router(); // Permite crear rutas montables y desmontables en la app.

// ruta parametrizada y genérica
router.get('/:idProducto', (req, res) => {
    let id = req.params.idProducto;
    res.send(`Bienvenidos al detalle del producto ${id}`);
});

router.get('/:idProducto/comentarios/:idComentario?', (req, res) => {
    let idProd = req.params.idProducto;
    let idComent = req.params.idComentario;
    if(idComent == undefined){
        res.send(`Bienvenidos a los comentarios del producto ${idProd}`);
        return;
    };
    res.send(`Bienvenidos a los comentarios del producto ${idProd} y enfocado en el comentario ${idComent}`);
});

module.exports = router;