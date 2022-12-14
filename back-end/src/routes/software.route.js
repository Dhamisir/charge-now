const express= require("express");
const { createSoftware, getSoftware, deleteSoftware } = require("../controller/software.controller");


const router= express.Router();
router.route("/getSoftware").get(getSoftware)
router.route("/newSoftware").post(createSoftware)
router.route("/deleteSoftware/:id").delete(deleteSoftware)
module.exports=router