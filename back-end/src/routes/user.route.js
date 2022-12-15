const express= require("express");
const { register, login, getAllUsersdata, getSingleUserData } = require("../controller/user.controller");

const router= express.Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/Alluserdata").get(getAllUsersdata)
router.route("/getSinngleUser/:id").get(getSingleUserData)
module.exports=router