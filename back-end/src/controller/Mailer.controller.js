require('dotenv').config()
const nodemailer = require('nodemailer')
const GmailMailerId = process.env.GmailMailerId
const GmailMailerPassword = process.env.GmailMailerPassword
const UserModel = require("../model/user.model");
const argon2 =require("argon2")
const jwt = require('jsonwebtoken')

const mailTransporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:GmailMailerId,
        pass:GmailMailerPassword
    }
})


const MailSender = async (req, email, subject, body) => {
    let user = await UserModel.findOne({email:email})
    let count = 0
    let tobesent = user.serviceEmail.length
    if(user.remainingEmail<tobesent){
        return {
            error:true
        }
    }
    user.serviceEmail.map(ele=>{
        let details = {
            from:GmailMailerId,
            to:ele,
            subject:subject,
            text:body
        }
        mailTransporter.sendMail(details, (err)=>{
            console.log(err)
            count++
            req.io.emit('new', count)
        })
    })
    let update = await UserModel.findOneAndUpdate({email:email}, {
        remainingEmail:user.remainingEmail-tobesent})
    const token = jwt.sign({
        ...update
    },"VIKALP@99",{
        expiresIn:"7 days"
    })
    return {
        error:false,
        token
    }
}

const addServiceMail = async (email, adderEmail) => {
    try {
        let user = await UserModel.findOne({email:email})
        let arr = user.serviceEmail
        arr.push(adderEmail)
        let work = await UserModel.findOneAndUpdate({email:email}, {serviceEmail:arr})
        const token = jwt.sign({
            ...work
        },"VIKALP@99",{
            expiresIn:"7 days"
        })
        return {
            error:false,
            token,
            serviceEmail:arr
        }
    } catch (error) {
        return {
            error:true,
            msg:error
        }
    }
}

const delServiceEmail = async (email, delEmail) => {
    try {
        let user = await UserModel.findOne({email:email})
        let arr = user.serviceEmail
        arr = arr.filter(ele=>ele!=delEmail)
        let work = await UserModel.findOneAndUpdate({email:email}, {serviceEmail:arr})
        const token = jwt.sign({
            ...work
        },"VIKALP@99",{
            expiresIn:"7 days"
        })
        return {
            error:false,
            token,
            serviceEmail:arr
        } 
    } catch (error) {
        return {
            error:true,
            msg:error
        }
    }
}

const SendOtp = async (email) => {
    let otp = Math.floor(100000 + Math.random() * 900000)

    try {
        let user = await UserModel.findOneAndUpdate({email:email}, {otp:otp})

        let details = {
            from:GmailMailerId,
            to:email,
            subject:'Password verification',
            text:`
            The otp for your latest password verification request is ${otp}
            `
        }
        mailTransporter.sendMail(details, (err)=>{
            console.log(err)
        })
        return {
            error:false, 
            msg:'OTP sent successfully'
        }
    } catch (error) {
        return {
            error:true, 
            msg:error
        }
    }
}

const verifyOtp = async (email, newPassword, otp) => {
    try {
        let user = await UserModel.findOne({email:email})
        const hash= await argon2.hash(newPassword)
        
        if(user.otp!=otp){
            return {
                error:true,
                msg:'Invalid OTP'
            }
        }
        let final = await UserModel.findOneAndUpdate({email: email}, {password:hash, otp:0})
        return {
            error:false,
            msg:'Password updated successfully'
        }
    } catch (error) {
        return {
            error:true,
            msg:error
        }
    }
}

module.exports = { MailSender, addServiceMail, delServiceEmail, SendOtp, verifyOtp }