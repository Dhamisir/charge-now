const mongoose= require("mongoose");

const connect = async()=>{
   mongoose.set("strictQuery",false)
  console.log(mongoose.connection.readyState)  
  mongoose.connect(process.env.DB_URL)
  console.log(mongoose.connection.readyState)  
}

module.exports = connect;