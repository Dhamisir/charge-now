const express= require("express");
const { addService } = require("../controller/cart.controller");

const router= express.Router();

router.route("/addservice").post(addService)

module.exports= router;
