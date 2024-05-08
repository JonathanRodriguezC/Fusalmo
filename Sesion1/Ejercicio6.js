const { availableParallelism } = require('os');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});


rl.question('Ingrese una frase:', (frase) => {
    const palabra = frase.split(' ');
    console.log(`numero de palabras: ${palabra.length}`);
})