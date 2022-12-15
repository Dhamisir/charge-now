const express= require("express");
const MailSender = require('../controller/Mailer.controller')

const router= express.Router();

router.post('/sendmail', async (req, res)=>{
    console.log(1111)
    const {email, subject, body} = req.body
    
    let outcome = MailSender(email, subject, body)

    if(outcome.error==false){
        res.status(200).send({error:false, msg:'Mails sent successfully'})
    } else {
        res.status(200).send({error:true, msg:'Mails sending failed'})
    }
})


module.exports = router

