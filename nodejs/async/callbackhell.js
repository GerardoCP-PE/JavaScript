function hola(nombre, micallback) {
  //console.log('Hola, soy una función asincrona');
  setTimeout(function () {
    console.log("Hola, " + nombre);
    micallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla bla ");
    callbackHablar();
  }, 1000);
}
function adios(nombre, otrocallback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
    otrocallback();
  }, 1000);
}
function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  }
  else
  {
      adios(nombre, callback);
  }
}

console.log("Iniciando proceso...");
hola('Gerardo',function(nombre){
    conversacion(nombre,3,function(){
        console.log("Proceso terminado");
    });
});
// hola("Gerardo", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log("Terminando proceso...");
//         });
//       });
//     });
//   });
// });
