function Persona(nombre, edad, fraseFavorita){
    this.nombre = nombre,
    this.edad = edad,
    this.fraseFavorita = fraseFavorita
    this.saludarA = function(Persona){ // Es una función anonima, se asigna por la clave del objeto.
        return 'Hola! ' + Persona.nombre + ' mi nombre es ' + this.nombre;
    }
    this.aumentarEdad = function(){
        edad = this.edad++;
    };
};

const martin = new Persona('Martín', 25, 'Quiero mover el bote!');
const soli = new Persona('Maria Sol', 24, 'Quiero matar a Santiago');
const silvia = new Persona('Silvia Ruth', 49, 'Amo a SAM!!!');

silvia.retarA = function(Persona){
    return Persona.nombre + ' PONETE A ESTUDIAR !!!';
};

martin.maneja = true; // Puedo crear nuevas propiedades desde afuera del objeto.

console.log(martin.edad);
martin.aumentarEdad();
console.log(martin.edad);
console.log(martin.saludarA(soli));
console.log(silvia.retarA(martin));

let mensaje = 'Esto es una prueba de lo aprendido en el curso de Digital House';

console.log(mensaje.slice(-10));
console.log(String(true));

let doble = numero => numero * 2;
let triple = numero => numero * 3;

let apply = (numero, callback) => callback(numero);

console.log(apply(3, triple));

let parametros = process.argv;

console.log(parametros);

let fecha = new Date();

fecha.setFullYear(1994);
fecha.setMonth(6);
fecha.setDate(7);

console.log(fecha);

const nombre = new String('Juan');
console.log(nombre);
const nuevoNombre = nombre.replace('Juan','Pedro');
console.log(nuevoNombre);

// Arrow  Function no tiene ninguna diferencia con la función normal, excepto el contexto.
// Acostumbrarse a escribir todo como arrow function con () y {}.

let ohaio = () => {
    return console.log('Ohaio Gosaimasu'); // Funciona.
};

ohaio();

// Callbacks, buscar más información en google.
//Dos o más definiciones para la misma funcion.

//Closures casi nunca, o nunca se usarán.

// Asincronismo, es lo que define a node. Operaciones no bloqueantes, lo que le da tanto poder a javascript.
// Permite ejecutar varias tareas al mismo tiempo o en segundo plano o en el futuro.
// Maneja mediante la cola de tareas(Cuando se vacie la pila, se ejecuta) y la pila de tareas(Lo que se hace ahora) los procesos que se van ejecutando.
/*
*/

setTimeout( () => {
    console.log('hola 2');
}, 0); // Aunque tenga 0 segundos, java lo mueve automaticamente a la cola de tareas

console.log('hola'); // Una vez que se ejecuta, y la pila se vacia, se ejecuta lo de la cola de tareas
console.log(2);

// Ver v8 Node.
// Ver NPM
// Ver Non Blocking
// Ver Event Loop (La mente de JavaSript)
