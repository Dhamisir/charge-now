require("dotenv").config();
const express= require("express");
const cors= require("cors");
const connect = require("./config/db");
const mongoose = require('mongoose')
const user= require("./routes/user.route")
const software= require("./routes/software.route")
const mailer = require('./routes/mailer.route')
const PORT= process.env.PORT
const http = require('http') 
const {Server} = require('socket.io')


const app= express();
const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin:'http://localhost:3000',
        methods:["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
})

io.on('connection', (socket)=>{})

app.use(express.json());
app.use(cors());
app.use((req,res,next)=>{
    req.io = io
    return next()
})
app.use("/chargebee/user",user)
app.use("/chargebee/software",software)
app.use('/mailer', mailer)


server.listen(PORT,async()=>{
    await connect();
    console.log(`listening at http://localhost:${PORT}`)
})

