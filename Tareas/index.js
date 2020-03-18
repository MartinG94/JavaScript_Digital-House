const fs = require('fs'); //Importo el modulo de manejo de archivos// FS de File System
const tareas = JSON.parse(fs.readFileSync('./tareas.json')); // Leo el archivo y lo parseo a JSON.

const nuevaTarea = (nuevoTitulo, nuevoEstado) => {
    tareas.push({
        titulo: nuevoTitulo,
        estado: nuevoEstado,
    });
};

//Agregar una tarea a este JSON

//TAREA: Forma de buscar un elemento del array y alterarlo. Editar una tarea existente.
//Metodo array.find() o array.filter();

const argumentos = process.argv;
const funcion = argumentos[2];
const arg1 = argumentos[3];
const arg2 = argumentos[4];
const arg3 = argumentos[5];

// console.log(reemplazarTitulo(buscarTarea('Repasar JS', tareas), 'Repasar C++'));

const buscarTarea = (unaTarea) => {
    let tareaBuscada = tareas.find(elemento => elemento.titulo === unaTarea);
    if(tareaBuscada === undefined){
        return;
    }
    return tareaBuscada;
};

const cambiarTitulo = (unaTarea, nuevoTitulo, callback) => {
    let tareaBuscada = callback(unaTarea);
    tareaBuscada.titulo = nuevoTitulo;
};

const cambiarEstado = (unaTarea, nuevoEstado, callback) => {
    let tareaBuscada = callback(unaTarea);
    tareaBuscada.estado = nuevoEstado;
};

nuevaTarea('Jugar al LOL', 'Pendiente');
cambiarTitulo('Repasar C++','Repasar Python', buscarTarea);
cambiarEstado('Break','TPendiente',buscarTarea);

fs.writeFileSync('./tareas.json', JSON.stringify(tareas, 'utf-8', 4));