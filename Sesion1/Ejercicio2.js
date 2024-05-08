const { availableParallelism } = require('os');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

rl.question('Ingrese una cadena de texto:', (cadena) => {
    console.log(`numero de caracteres: ${cadena.length}`)
});