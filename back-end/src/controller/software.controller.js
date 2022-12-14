const software = require("../model/software.model");
const Software= require("../model/software.model");

exports.createSoftware= async(req,res)=>{
    const { billing_period,billing_period_unit, emailCount,
        currency_code, object}= req.body;
        const date= Date.now()
   try{ const newSoftware= new Software( { billing_period,billing_period_unit, emailCount,
        currency_code, object, created_at:date});
    await newSoftware.save();
    return res.status(201).send({
        message:"software created sucessFull",
        software:newSoftware
    })
    }
    catch(e){
        return res.status(400).send(e.message) 
    }
}
exports.getSoftware=async(req,res)=>{
   try{ const softwares= await Software.find();
    return res.status(200).send({
        message:"true",
        softwares:softwares
    })
}
catch(e){
    return res.status(400).send(e.message)
}
}
exports.deleteSoftware=async(req,res)=>{
    const software = await Software.findById(req.params.id);
   try{ if(!software){
        return res.status(401).send("software not found")
    }
    else{
        await software.remove();
        return res.status(200).send("softeare Delete sucessfull")
    }}
    catch{
        return res.status(400).send(e.message)
    }
}