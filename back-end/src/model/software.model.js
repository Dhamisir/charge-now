const mongoose= require("mongoose");

const softwareSchema= mongoose.Schema({
    billing_period:{
        type:Number,
        require:true
    },
    serviceAmount:{
        type:String,
        require:true
    },
    billing_period_unit:{
        type:String,
        enum:["month","year"],
        default:"month",
        require:true
    },
    created_at:{
        type:Number,
        default:0
    },
    currency_code:{
        type:String,
        default:"USD"
    },
    current_term_end:{
      type:Number,
      default:0
    },
    current_term_start:{
      type:Number,
      default:0
    },
    emailCount:{
     type:Number,
     require:true
    },
    object:{
     type:String
    }
})

const software= mongoose.model("software",softwareSchema);
module.exports=software