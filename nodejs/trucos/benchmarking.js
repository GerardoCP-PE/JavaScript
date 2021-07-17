let suma = 0;
//CONSOLE TIME PARA SABER CUANTO DEMORA EN EJECUTARSE LOS PROCESOS
console.time("bucle");
for (let i = 0; i < 100000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

console.log('Empieza el proceso asincrono')
console.time('asincrono');
asincrona()
.then(() => {
    console.timeEnd('asincrono');

})


let suma2 = 0;
//CONSOLE TIME PARA SABER CUANTO DEMORA EN EJECUTARSE LOS PROCESOS
console.time("bucle 2");
for (let j = 0; j < 200000; j++) {
  suma2 += 1;
}
console.timeEnd("bucle 2");

function asincrona() {
  return new Promise((resolve) =>
    setTimeout(function () {
      console.log("Termino el proceso");
      resolve();
    })
  );
}
