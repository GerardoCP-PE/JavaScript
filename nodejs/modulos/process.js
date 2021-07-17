//const process = require('process');
process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});
process.on('exit', () => {
    console.log('Ale, el proceso acabo');
});

//SE NOS OLVIDO EL PODEROSO TRY CATCH
process.on('uncaughtException', (err,origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    console.error(err);
    setTimeout(() => {
        console.log('Esto si se ve');
    }, 0);
});

functionQueNoExiste();
console.log('Esto si el error no se recoje, no sale');

