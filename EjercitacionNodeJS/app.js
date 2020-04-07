const term = require('terminal-kit').terminal;

term.magenta("Ingrese su nombre:");
term.inputField(
    function(error, input){
        term.green("\nTu nombre es '%s'\n", input);
    }
)