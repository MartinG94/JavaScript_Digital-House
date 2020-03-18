module.exports = function logaritmoNatural(numeroA){
    if(numeroA < 0){
        console.log('No existe el logaritmo de un número negativo!');
        return;
    }else if(numeroA == 0){
        console.log('No se puede operar con el numero 0!');
        return;
    };
    console.log(Math.log(numeroA));
};