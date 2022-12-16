const Cart= require("../model/cart.model");
const User= require("../model/user.model")
const Software= require("../model/software.model")
exports.addService=async(req,res)=>{
    const {email,softwareId}= req.body;
    const user= await User.findOne({email})
    const software= await Software.findById(softwareId)

    
    try{
      if(user){
         const newuser=await User.findByIdAndUpdate(
            user._id,
            {$set: { remainingEmail: remainingEmail+software.emailCount,serviceName:software.name}},
            {new:true}
           );
           console.log(newuser)
           return res.status(201).send({message:true,user:newuser}) 
      }
    }
    catch(e){
       return res.status(400).send(e.message)
    }
}

