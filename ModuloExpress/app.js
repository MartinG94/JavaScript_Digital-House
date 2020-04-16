const express = require('express');
const app = express(); // Variable donde están disponibles todos los metodos del Framework

app.listen(3000, () => {
    console.log('Servidor en ejecución');
});

app.get('/', (req, res) => {
    res.send('Hola Mundo! By Express');
});