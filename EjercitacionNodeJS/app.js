const term = require('terminal-kit').terminal;

term.magenta("Ingrese su nombre:");
term.inputField(
    function(error, input){
        term.green("\nTu nombre es '%s'\n", input);
    }
)

// Trabajar con métodos ya creados por el modulo
// Nos soluciona la vida! :D