module.exports = function factorial(numeroA){
    let numeroEntero = parseInt(numeroA);
    if(numeroEntero == 0){
        return 1;
    };
    return numeroEntero * factorial(numeroEntero - 1);
};