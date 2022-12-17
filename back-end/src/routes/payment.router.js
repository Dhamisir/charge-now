const express= require("express");
const { checkout, paymentVerification } = require("../controller/payment.controller");


const router= express.Router();

router.route("/checkout").post(checkout)
router.route("/verfied").post(paymentVerification)
module.exports= router;