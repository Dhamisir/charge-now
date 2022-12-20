const express= require("express");
const {MailSender, delServiceEmail, addServiceMail, SendOtp, verifyOtp } = require('../controller/Mailer.controller')

const router= express.Router();

router.post('/sendmail', async (req, res)=>{
    const {email, subject, body} = req.body

    let outcome = await MailSender(req, email, subject, body)

    if(outcome.error==false){
        res.status(200).send({error:false, msg:'Mails sent successfully', token:outcome.token})
    } else {
        res.status(200).send({error:true, msg:'Mails sending failed'})
    }
})

router.post('/addServiceEmail', async (req, res)=>{
    const {email, adderEmail} = req.body

    let work = await addServiceMail(email, adderEmail)

    if(!work.error){
        res.status(200).send({error:false, msg:'Email added successfully', token:work.token, serviceEmail:work.serviceEmail})
    } else {
        res.status(200).send({error:true, msg:work.msg})
    }
})

router.post('/delServiceEmail', async (req, res)=>{
    const {email, delEmail} = req.body

    let work = await delServiceEmail(email, delEmail)

    if(!work.error){
        res.status(200).send({error:false, msg:'Email deleted successfully', token:work.token, serviceEmail:work.serviceEmail})
    } else {
        res.status(200).send({error:true, msg:work.msg})
    }
})

router.post('/sendotp', async (req, res)=>{
    let {email} = req.body
    
    let work = await SendOtp(email)

    if(!work.error){
        res.status(200).send({
            error:false,
            msg:work.msg
        })
    } else {
        res.status(200).send({
            error:true,
            msg:work.msg
        })
    }
})

router.post('/verifyOtp', async (req, res)=>{
    const {email, newPassword, otp} = req.body

    let work = await verifyOtp(email, newPassword, otp)

    res.status(200).send({
        error:work.error,
        msg:work.msg
    })
})

module.exports = router

