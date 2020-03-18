// Variables
// Dato almacenado en la memoria RAM (Virtual)

// Una variable es la memoria en tiempo real. Tiene un identificador y un valor.
// Podemos declararla mediante las palabras resevadas VAR LET o CONST

//NOTA: SCOPE = ALCANCE

// Tipos de datos Array - Booleano - String - Numero - Objetos
// Para JavaScript todo es un objeto. Y como tales, tienen métodos.

// console.log()
// -------------

// Ejecución con Node


// Operadores
// ----------

console.log('hola' + 3 + 1);
// Operadores Aritméticos
// ----------------------

/* if(2 == '2'){
    console.log('Es true!, estas usando comparador debil');
}; */

if(2 === '2'){
    return 'Nada';
}else{
    console.log('Es false!, estas usando comparador fuerte!');
};

// Operadores de comparación
// -------------------------

// Operadores lógicos
// ------------------

// Condicionales
// ------------------

// let ternario = condicion ? function() {} : function() {};

// Bucles
// While - Do While (No sabemos cuando va a terminar)- For(Sabemos cuando va a terminar).

// ForEach
// ---

const array = [4,30,38,124];

array.forEach(function(numero){
    console.log(numero)
})

const noticias = [
    {
        titulo: 'noticia 1',
        contenido: 'Contenido 1 Noticia 1'
    },
    {
        titulo: 'noticia 2',
        contenido: 'Contenido 1 noticia 2'
    }]

noticias.forEach(function(noticia){
    console.log(noticia.titulo)
})

// noticias.forEach(noticia => console.log(noticia.contenido));

noticias.map(noticia => console.log(noticia.contenido)); // Mejor performance que forEach

const soloTitulos = noticias.map(noticia => noticia.titulo);

console.log(soloTitulos);
// Funciones
// ---------
