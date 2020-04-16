const express = require('express');
const app = express(); // Variable donde están disponibles todos los metodos del Framework
const rutasProductos = require('./routes/productos.js');
const rutasMain = require('./routes/main.js');

app.listen(3000, () => {
    console.log('Servidor en ejecución');
});

// Todas las rutas que comiencen con /productos serán manejadas por el modulo rutasProductos
app.use('/productos', rutasProductos);
app.use('/', rutasMain);