const { availableParallelism } = require('os');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

rl.question('ingrese un palabra:', (palabra) => {
    const vocales = palabra.match(/[aeiou]/gi);
    const numeroVocales = vocales ? vocales.length : 0;
    console.log(`numero de vocales: ${numeroVocales}`);

})