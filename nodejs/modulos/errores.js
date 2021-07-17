function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}
function serompeasync(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      cb(err);
    }
  }, 1000);
}
try {
  //otraFuncion();
  serompeasync(function test(err) {
      console.log(err.message);
  });
} catch (err) {
  console.error("Vaya, algo se ha roto : ", err.message);
}

console.log("Pero no pasa nada, ya esta capturado");
console.log("El final SI!!");
