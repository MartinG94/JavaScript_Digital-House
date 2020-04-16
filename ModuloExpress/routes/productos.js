const express = require('express');
const router = express.Router(); // Permite crear rutas montables y desmontables en la app.
const controladorProductos = require('../controllers/productosController');

// ruta parametrizada y genérica
router.get('/:idProducto', controladorProductos.detalle);
router.get('/:idProducto/comentarios/:idComentario?', controladorProductos.detalleComentarios);

module.exports = router;