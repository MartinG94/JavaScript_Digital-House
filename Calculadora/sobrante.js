module.exports = function sobrante(numeroA, numeroB){
    if(numeroB == 0){
        console.log('No se puede dividir por 0!');
        return;
    };
    console.log(numeroA % numeroB);
};