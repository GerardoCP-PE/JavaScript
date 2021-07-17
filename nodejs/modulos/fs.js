const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    //Leido
    console.log(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.log("No he podido escribirlo", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

//escribir(__dirname+ "/archivo.txt",'Soy un archivo de por ahi', console.log)
//leer(__dirname + "/archivo.txt", console.log);
//borrar(__dirname+'/1.txt',console.log)