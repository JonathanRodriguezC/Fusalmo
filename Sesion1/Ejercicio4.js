const { availableParallelism } = require('os');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

rl.question('ingrese una frase:', (frase) => {
    rl.question(`Ingrese la palabra que sea reemplazar:`, (palabraremplazar) => {
        rl.question('Ingrese la nueva palabra', (nuevapalabra) => {
            const frasemodificada = frase.replace(new RegExp(palabraremplazar, 'gi'), nuevapalabra)
            console.log('Frase modificada', frasemodificada)
        })
    })
})