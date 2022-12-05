const express = require("express");
const Controller = require("../Controller/Place-controller");
const router = express.Router();

//Get route
router.get("/", Controller.getapi);

router.post("/test", Controller.postapi);

module.exports = router;
