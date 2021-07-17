const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post("/", function (req, res) {
  //console.log(req.query);
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "Internal error", //+ e.message,
        500,
        e
      );
    });
});

router.get("/", function (req, res) {
    const filterMessages = req.query.user || null;
  
    controller
      .getUsers(filterMessages)
      .then((userLists) => {
        response.success(req, res, userLists, 200);
      })
      .catch((e) => {
        response.error(req, res, "Unexpected Error", 500, e);
      });
  });

module.exports = router;
