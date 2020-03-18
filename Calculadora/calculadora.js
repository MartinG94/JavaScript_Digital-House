const suma = require('./suma');
const resta = require('./resta');
const producto = require('./producto');
const division = require('./division');
const sobrante = require('./sobrante')
const potencia = require('./potencia');
const logaritmoNatural = require('./logNatural');
const logaritmo = require('./logaritmo');
const factorial = require('./factorial');
const fibonacci = require('./fibonacci');
const random = require('./random');

// console.log(process.argv)
// process.argv guarda en una lista los argumentos que se escriben en la terminal

const parametros = process.argv;
const operacion = parametros[2];
const numeroA = Number(parametros[3]); // parseInt lo pasa a entero, no importan los decimales.
const numeroB = Number(parametros[4]);

// console.log('Operacion seleccionada ' + operacion)
// console.log('El numeroA es ' + numeroA)
// console.log('El numeroB es ' + numeroB)

let funcionesDisponibles = [
    "sumar / 2",
    "restar / 2",
    "producto / 2",
    "division / 2",
    "sobrante / 2",
    "potencia / 2",
    "logaritmoNatural / 1",
    "logaritmo / 2",
    "factorial / 1",
    "fibonacci / 1",
    "random / 0"
]

switch(operacion){
    case 'suma':
    case 'sumar':
        suma(numeroA, numeroB);
        break;
    case 'resta':
    case 'restar':
        resta(numeroA, numeroB);
        break;
    case 'producto':
    case 'multiplicacion':
    case 'multiplicar':
        producto(numeroA, numeroB);
        break;
    case 'division':
    case 'dividir':
        division(numeroA, numeroB);
        break;
    case 'resto':
    case 'sobrante':
        sobrante(numeroA, numeroB);
        break;
    case 'potencia':
        potencia(numeroA, numeroB);
        break;
    case 'logaritmoNatural':
        logaritmoNatural(numeroA);
        break;
    case 'logaritmo':
        logaritmo(numeroA, numeroB);
        break;
    case 'factorial':
        console.log(factorial(numeroA));
        break;
    case 'fibonacci':
        console.log(fibonacci(numeroA));
        break;
    case 'random':
    case 'numeroRandom':
    case 'aleatorio':
        random();
        break;
    case 'opciones':
        console.log(funcionesDisponibles);
        break;
    default:
        console.log('Operacion Inexistente');
};