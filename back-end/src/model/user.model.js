const mongoose= require("mongoose");

const CompanySchema= new mongoose.Schema({
    email:{
        type:String,
        reuire:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    remainingEmail:{
       type:Number,
       default:10
    },
    serviceName:{
        type:String,
        default:""
    },
    serviceEmail:{
      type:[String],
      default:[]
    },
    name:{
       type:String,
       require:true,
    },
    companyName:{
        type:String,
        require:true
    },
    otp:{
      type:Number,
      default:0
    },
    role:{
        type:String,
        enum:["admin",
            "user"],
        default:"user"
    }
})

const User= mongoose.model("user",CompanySchema)
module.exports=User