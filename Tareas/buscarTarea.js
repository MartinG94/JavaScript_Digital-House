module.exports = function buscarTarea(unaTarea, tareas){
    for(let i = 0; i < tareas.length; i++){
        if(unaTarea === tareas[i].titulo){
            return tareas[i];
        };
    };
    return 'No se encontró la tarea buscada';
};