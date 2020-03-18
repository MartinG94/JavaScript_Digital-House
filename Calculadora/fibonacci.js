module.exports = function fibonacci(numeroA){
    let resultado = [0,1];
    for (let i = 2; i < numeroA; i++) {
        resultado.push(resultado[i - 2] + resultado[i - 1]);
    };
    return resultado;
};