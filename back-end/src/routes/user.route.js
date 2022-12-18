const express= require("express");
const { register, login, getAllUsersdata, getSingleUserData, verifytoken } = require("../controller/user.controller");

const router= express.Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/Alluserdata").get(getAllUsersdata)
router.route("/getSinngleUser/:id").get(getSingleUserData)
router.route('/verifytoken/:token').get(verifytoken)

module.exports=router