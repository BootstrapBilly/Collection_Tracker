//!Imports

//custom imports
const homeLoader = require("../controllers/homeLoader");

//external imports
const express = require("express");

//=App configuration

const router = express.Router();

//-Routes

router.get("/", homeLoader.getHomePage);

router.post("/post", homeLoader.postRequestHandler);

module.exports = router;