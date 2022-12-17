const RazorPay= require("razorpay")
const crypto= require("crypto")
const Payment = require("../model/payment.model")
const instance = new RazorPay({
    key_id: process.env.paymentKey,
    key_secret: process.env.paymentSceret,
});
exports.checkout =async(req,res)=>{
    const options={
        amount:Number(req.body.amount*100),
        currency:"INR",
    };
    const order = await instance.orders.create(options)
    
     res.status(200).send({
        success:true,
        order
    })
}
exports.paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
  
    const body = razorpay_order_id + "|" + razorpay_payment_id;
  
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
      .update(body.toString())
      .digest("hex");
  
    const isAuthentic = expectedSignature === razorpay_signature;
  
    if (isAuthentic) {
      // Database comes here
  
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
    } else {
      res.status(400).json({
        success: false,
      });
    }
  };

