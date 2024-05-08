const { availableParallelism } = require('os');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

rl.question('Ingrese su cadena: ', (cadena) => {
    const cadenainvertida = cadena.split('').reverse().join('');
    console.log(`Cadena invertidad: ${cadenainvertida}`);

})