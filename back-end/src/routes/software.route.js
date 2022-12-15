const express= require("express");
const { createSoftware, getSoftware, deleteSoftware, getSingleSoftware } = require("../controller/software.controller");


const router= express.Router();
router.route("/getSoftware").get(getSoftware)
router.route("/getSingleSoftware/:id").get(getSingleSoftware)
router.route("/newSoftware").post(createSoftware)
router.route("/deleteSoftware/:id").delete(deleteSoftware)
module.exports=router