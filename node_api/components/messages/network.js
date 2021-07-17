const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();
const multer = require('multer');//ESTA COSA GESTIONA ARCHIVOS
const path = require("path")

const storage = multer.diskStorage({
  destination : "public/files",
  filename : function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + 
      path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage });

router.get("/", function (req, res) {
  console.log(req.headers.authorization);
  const filterMessages = req.query.user || null;

  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

router.post("/", upload.single('file'), function (req, res) {
  //console.log(req.query);
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message,  req.file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "Información inválida", //+ e.message,
        400,
        "Error en el logueo"
      );
    });

  // if (req.query.error == "ok") {
  //   response.error(
  //     req,
  //     res,
  //     "Error indesperado",
  //     500,
  //     "Es solo una simmulación de los errores"
  //   );
  // } else {
  //   response.success(req, res, "Creado correctamente", 201);
  // }
  //console.log(req.body);
});

router.patch("/:id", function (req, res) {
  console.log(req.params.id);
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
  //res.send("ok");
});

router.delete("/:id", function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
    })
    .catch((e) => {
      response.error(req, res, e, 500, e);
    });
  //res.send('Mensaje borrado correctamente');
});

module.exports = router;
