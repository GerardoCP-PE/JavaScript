const http = require("http");
http.createServer(router).listen(3000);

function router(req, res) {
  console.log("nueva petición!");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola, que tal");
      res.end();
      break;

    default:
      res.write("Error 404: No se lo que quieres");
      res.end();
  }

//   res.writeHead(201, { "Content-type": "text/plain" });
//   res.write("Hola ya se usar http de node.JS");
//   res.end();
}
//PONER UN LISTENER
console.log("Escuchando en el puerto 3000");
