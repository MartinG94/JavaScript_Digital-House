module.exports = function logaritmo(base, argumento){
    if(base < 0 || argumento < 0){
        console.log('No existe el logaritmo de un número negativo!');
        return;
    }else if(base == 0 || argumento == 0){
        console.log('No se puede operar con el numero 0!');
        return
    };
    console.log(Math.log(argumento) / Math.log(base));
};