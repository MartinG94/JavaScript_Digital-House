/*
1. Calculadora con operaciones básicas
2. Suma, Resta, Multiplicacion, Division
3. Tomar valores desde la terminal
4. Guardar un String que represente la operación (Yo preferí guardarlo como un Objeto Literal)
*/

// const process = require('process');
// No hace falta requerir el modulo process, es una variable global

const calculadora = require('./calculadora');
const [,,operacion, ...numeros] = process.argv;

switch(operacion){
    case 'sumar':{
        calculadora.sumar(...numeros);
    };
    break;
    case 'restar':{
        calculadora.restar(...numeros);
    };
    break;
    case 'multiplicar':{
        calculadora.multiplicar(...numeros);
    };
    break;
    case 'dividir':{
        calculadora.dividir(...numeros);
    };
    break;
    case 'historial':{
        let memoria = calculadora.leerJSON();
        console.log(memoria);
    };
    break;
    case 'filtrar':{
        let operacion = process.argv[3];
        calculadora.filtrarSegun(operacion);
    };
    break;
    case 'limpiar':{
        calculadora.limpiarMemoria();
    };
    break;
    default:{
        calculadora.opcionesDisponibles();
    };
}