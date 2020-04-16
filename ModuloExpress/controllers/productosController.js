const controladorDeProductos = {
    detalle: (req, res) => {
        let id = req.params.idProducto;
        res.send(`Bienvenidos al detalle del producto ${id}`)
    },
    detalleComentarios: (req, res) => {
        let idProd = req.params.idProducto;
        let idComent = req.params.idComentario;
        if(idComent == undefined){
            res.send(`Bienvenidos a los comentarios del producto ${idProd}`);
            return;
        };
        res.send(`Bienvenidos a los comentarios del producto ${idProd} y enfocado en el comentario ${idComent}`);
    }
};

module.exports = controladorDeProductos;