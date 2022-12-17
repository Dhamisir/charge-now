require("dotenv").config();
const express= require("express");
const cors= require("cors");
const connect = require("./config/db");


const user= require("./routes/user.route")
const software= require("./routes/software.route")
const mailer = require('./routes/mailer.route')
const cart =require('./routes/cart.router')
const payment= require("./routes/payment.router")
const PORT= process.env.PORT

const app= express();
app.use(express.json());
app.use(cors());

app.use("/chargebee/user",user)
app.use("/chargebee/software",software)
app.use('/mailer', mailer)
app.use("/chargebee/service",cart)
app.use("/chargebee/payment",payment)




 
app.listen(PORT,async()=>{
    await connect();
    console.log(`listening at http://localhost:${PORT}`)
})