const mongoose=require("mongoose");
const cartSchema=new mongoose.Schema({
  software:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"software",
    required:true,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true,
  },
  paymentInfo:{
    id:{
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  // paidAt: {
  //   type: Date,
  //   required: true,
  // }
});
const Cart= mongoose.model("cart",cartSchema);
module.exports=Cart;