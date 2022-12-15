require('dotenv').config()
const nodemailer = require('nodemailer')
const GmailMailerId = process.env.GmailMailerId
const GmailMailerPassword = process.env.GmailMailerPassword
const UserModel = require("../model/user.model");

const mailTransporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:GmailMailerId,
        pass:GmailMailerPassword
    }
})

const MailSender = async (email, subject, body) => {
    let user = await UserModel.findOne({email:email})
    
    try {
        user.serviceEmail.map(ele=>{
            let details = {
                from:GmailMailerId,
                to:ele,
                subject:subject,
                text:body
            }
            mailTransporter.sendMail(details, (err)=>{
                console.log(err)
            })
        })
        
        return {
            error:false
        }
    } catch (error) {
        return {
            error:true,
            msg:error
        }
    }
}

module.exports = MailSender