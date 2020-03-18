const fs = require('fs');

const calculadora = {
    archivo: './memoria.json',
    leerJSON: function () {
        let memoriaJSON = fs.readFileSync(this.archivo, 'utf-8');
        let memoriaARRAY = JSON.parse(memoriaJSON);
        return memoriaARRAY;
    },
    escribirJSON: function(operaciones){
        let memoriaJSON = JSON.stringify(operaciones, 'utf-8', 4);
        fs.writeFileSync(this.archivo, memoriaJSON);
    },
    generarOperacion: function(unaOperacion, unResultado, ...unosNumeros){
        let memoria = this.leerJSON();
        let nuevaOperacion = {
            operacion: unaOperacion,
            numeros: unosNumeros,
            resultado: unResultado
        };
        memoria.push(nuevaOperacion);
        this.escribirJSON(memoria);
    },
    sumar: function(...unosNumeros){
        let resultado = unosNumeros.reduce((res, elem)=>{
            return Number(res) + Number(elem);
        });
        console.log(resultado);
        this.generarOperacion('sumar', resultado, ...unosNumeros);
    },
    restar: function(...unosNumeros){
        let resultado = unosNumeros.reduce((res, elem)=>{
            return Number(res) - Number(elem);
        });
        console.log(resultado);
        this.generarOperacion('restar',resultado, ...unosNumeros);
    },
    multiplicar: function(...unosNumeros){
        let resultado = unosNumeros.reduce((res, elem)=>{
            return Number(res) * Number(elem);
        });
        console.log(resultado);
        this.generarOperacion('multiplicar',resultado, ...unosNumeros);
    },
    dividir: function(...unosNumeros){
        let resultado = unosNumeros.reduce((res, elem)=>{
            return Number(res) / Number(elem);
        });
        console.log(resultado);
        this.generarOperacion('dividir',resultado, ...unosNumeros);
    },
    opcionesDisponibles: function(){
        let operaciones = ['sumar','restar','multiplicar','dividir'];
        console.log('*** OPERACIONES DISPONIBLES ***')
        operaciones.forEach((elemento, indice)=> {
            console.log((indice+1)+'. '+elemento);
        });
    },
    filtrarSegun: function(unaOperacion){
        let validos = ['sumar','restar','multiplicar','dividir'];
        if(unaOperacion === undefined){
            console.log('*** INGRESE UNA OPERACIÓN ***');
            return;
        }
        if(unaOperacion!='sumar'&&unaOperacion!='restar'&&unaOperacion!='multiplicar'&&unaOperacion!='dividir'){
            console.log('*** INGRESE UNA DE LAS SIGUIENTES OPERACIONES VALIDAS ***');
            validos.forEach((elemento, indice) => {
                console.log((indice+1)+'. '+elemento)
            });
            return;
        };
        let memoria = this.leerJSON();
        let memoriaFiltrada = memoria.filter(elemento => {
            return elemento.operacion == unaOperacion;
        });
        console.log('*** Operaciones realizadas según: '+unaOperacion+' ***');
        switch(unaOperacion){
            case 'sumar':{
                memoriaFiltrada.forEach((elemento, indice) => {
                    console.log('['+(indice+1)+']. '+elemento.numeros.join(' + ')+' = '+elemento.resultado);
                })
            };
            break;
            case 'restar':{
                memoriaFiltrada.forEach((elemento, indice) => {
                    console.log('['+(indice+1)+']. '+elemento.numeros.join(' - ')+' = '+elemento.resultado);
                })
            };
            break;
            case 'multiplicar':{
                memoriaFiltrada.forEach((elemento, indice) => {
                    console.log('['+(indice+1)+']. '+elemento.numeros.join(' * ')+' = '+elemento.resultado);
                })
            };
            break;
            case 'dividir':{
                memoriaFiltrada.forEach((elemento, indice) => {
                    console.log('['+(indice+1)+']. '+elemento.numeros.join(' / ')+' = '+elemento.resultado);
                })
            };
            break;
        };
    },
    limpiarMemoria: function(){
        let listaVacia = [];
        this.escribirJSON(listaVacia);
        console.log('*** LA MEMORIA HA SIDO RESETEADA ***')
    }
};

module.exports = calculadora;