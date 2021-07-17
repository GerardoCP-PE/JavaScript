const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();


router.post("/", function (req, res) {
    //console.log(req.query);
    controller
      .addChat(req.body.users)
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

  router.get("/:userId", function (req, res) {
    const filterChats = req.query.userId || null;
  
    controller
      .getChats(filterChats)
      .then((chatList) => {
        response.success(req, res, chatList, 200);
      })
      .catch((e) => {
        response.error(req, res, "Unexpected Error", 500, e);
      });
  });

  module.exports = router;
