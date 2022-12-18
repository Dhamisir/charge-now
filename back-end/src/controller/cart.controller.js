const Cart = require("../model/cart.model");
const User = require("../model/user.model")
const Software = require("../model/software.model")
const jwt = require("jsonwebtoken")

exports.addService = async (req, res) => {
   const { email, softwareId } = req.body;
   const user = await User.findOne({ email })
   const software = await Software.findById(softwareId)
   try {
      if (user) {
         const newuser = await User.findByIdAndUpdate(
            user._id,
            { $set: { remainingEmail: user.remainingEmail + software.emailCount, serviceName: software.object } },
            { new: true }
         );

         const token = jwt.sign({ ...newuser }, "VIKALP@99", {
            expiresIn: "7 days"
         })

         return res.status(201).send({ message: true, user: newuser, token })
      }
   }
   catch (e) {
      return res.status(400).send(e.message)
   }
}

