const fs = require('fs');

const archivoTareas = {
    archivo: './tareas.json',
    leerJSON: function () {
        let tareasJSON = fs.readFileSync(this.archivo, 'utf-8');
        let tareasARRAY = JSON.parse(tareasJSON);
        return tareasARRAY;
    },
    escribirJSON: function(listaDeTareas){
        let tareasJSON = JSON.stringify(listaDeTareas, 'utf-8', 4);
        fs.writeFileSync(this.archivo, tareasJSON);
    },
    resetearDatos: function(){
        let listaVacia = [];
        this.escribirJSON(listaVacia);
    },
    opcionesDisponibles: function(){
        let opciones = ['listar','crear','limpiar','filtrar','actualizar','eliminar'];
        console.log('*** OPERACIONES DISPONIBLES ***');
        opciones.forEach((elemento, indice) => {
            return console.log((indice+1)+'. '+elemento);
        });
    },
    listarTareas: function() {
        let listaDeTareas = this.leerJSON();
        console.log('*** LISTADO DE TAREAS ***');
        listaDeTareas.forEach((elemento, indice) => {
            return console.log(
                '['+(indice+1)+']'+ ' Titulo: '+elemento.titulo+' --- '+elemento.estado);
        });
    },
    crearNuevaTarea: function(nuevoTitulo){
        if(nuevoTitulo === undefined){
            console.log('*** INGRESE EL TITULO DE LA TAREA QUE DESEA REGISTRAR ***');
            return;
        };
        let listaDeTareas = this.leerJSON();
        let tareaNueva = {
            titulo: nuevoTitulo,
            estado: 'Pendiente',
        };
        listaDeTareas.push(tareaNueva);
        this.escribirJSON(listaDeTareas);
        return console.log('*** TAREA REGISTRADA CON ÉXITO ***');
    },
    filtrarTareasConElEstado: function(estado){
        let estadosValidos = ['Pendiente','En Proceso','Terminada'];
        if(estado === undefined){
            console.log('*** INGRESE UNO DE ESTOS ESTADOS VALIDOS ***');
            estadosValidos.forEach((elemento, indice) => {
                return console.log((indice+1)+'. '+elemento);
            });
            return;
        };
        if(estado != 'Pendiente' && estado != 'En Proceso' && estado != 'Terminada'){
            console.log('*** ESTADO NO VÁLIDO ***');
            console.log('*** INGRESE UNO DE ESTOS ESTADOS VALIDOS ***');
            estadosValidos.forEach((elemento, indice) => {
                return console.log((indice+1)+'. '+elemento);
            });
            return;
        };
        let listaDeTareas = this.leerJSON();
        let listaDeTareasSegunEstado = listaDeTareas.filter(elemento => {
            return elemento.estado == estado;
        });
        console.log('*** TAREAS CON EL ESTADO: '+estado+' ***');
        listaDeTareasSegunEstado.forEach((elemento, indice) => {
            return console.log('['+(indice+1)+'] '+elemento.titulo);
        });
    },
    actualizarEstado: function(unTitulo){
        if(unTitulo === undefined){
            console.log('*** INGRESE EL TITULO DE LA TAREA QUE DESEA ACTUALIZAR ***');
            return;
        };
        let listaDeTareas = this.leerJSON();
        let tareaBuscada = listaDeTareas.find(elemento => {
            return elemento.titulo == unTitulo;
        });
        if(tareaBuscada === undefined){
            console.log('*** LA TAREA NO EXISTE ***');
            return;
        };
        switch(tareaBuscada.estado){
            case 'Pendiente':
                tareaBuscada.estado = 'En Proceso';
                break;
            case 'En Proceso':
                tareaBuscada.estado = "Terminada";
                break;
            default:
                console.log('*** LA TAREA YA HA FINALIZADO ***');
                return;
        };
        this.escribirJSON(listaDeTareas);
        return console.log('*** EL ESTADO DE LA TAREA ['+tareaBuscada.titulo+'] FUE ACTUALIZADO CON ÉXITO ***');
    },
    eliminarTarea: function(unTitulo){
        if(unTitulo === undefined){
            console.log('*** INGRESE EL TITULO DE LA TAREA QUE DESEA ELIMINAR ***');
            return;
        };
        let listaDeTareas = this.leerJSON();
        let nuevaListaDeTareas = listaDeTareas.filter(elemento => {
            return elemento.titulo != unTitulo;
        });
        if(listaDeTareas.length === nuevaListaDeTareas.length){
            console.log('*** LA TAREA NO EXISTE ***');
            return;
        };
        this.escribirJSON(nuevaListaDeTareas);
        return console.log('*** TAREA ELIMINADA EXITOSAMENTE ***');
    }
};

module.exports = archivoTareas;