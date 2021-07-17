const express = require("express");
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const db = require('./db');
//const router = require('./components/messages/network');
const socket = require('./socket');
const router = require('./network/routes');
db('URI');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
socket.connect(server);

//app.use(router);
router(app);
app.use("/app", express.static("public"));

// app.use("/", function (req, res) {
//   res.send("Hola");
// });

server.listen(3000, function(){
    console.log("la aplicacion esta escuchando en http://localhost:3000");
});
