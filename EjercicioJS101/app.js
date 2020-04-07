const archivoTareas = require('./tareas.js');
// Implementar readline()
let accion = process.argv[2];
let argumento = process.argv[3];

switch(accion) {
    case 'listar':
        archivoTareas.listarTareas();
        break;
    case 'cantidad':
        archivoTareas.cantidadDeTareas();
        break;
    case 'crear':
        archivoTareas.crearNuevaTarea(argumento);
        break;
    case 'filtrar':
        archivoTareas.filtrarTareasConElEstado(argumento);
        break;
    case 'actualizar':
        archivoTareas.actualizarEstado(argumento);
        break;
    case 'eliminar':
        archivoTareas.eliminarTarea(argumento);
        break;
    case 'limpiar':
        archivoTareas.resetearDatos();
        break;
    default:
        archivoTareas.opcionesDisponibles();
};