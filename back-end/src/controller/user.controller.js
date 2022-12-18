const User= require("../model/user.model");
const argon2 =require("argon2")
const jwt= require("jsonwebtoken")
exports.register=async(req,res)=>{
    const {name,email, companyName,password}= req.body;
    let user = await User.findOne({email:email})
    const hash= await argon2.hash(password)
    try{
       if(user){
         return res.status(400).send("user already exist")
       }else{
        const newUser= new User({name,email,password:hash,companyName});
        await newUser.save();
        return res.status(201).send({meassage:"user created sucessfully","user":newUser})
       }       
           
    }
    catch(e){
     console.log(e.meassage)
    }
}

exports.login=async(req,res)=>{
    const {email, password}= req.body;
    const user= await User.findOne({email});
    if(await argon2.verify(user.password,password)){
        const token= jwt.sign({
            ...user
        },"VIKALP@99",{
            expiresIn:"7 days"
        })
        const refreshToken=jwt.sign({id:user._id},"REFRESHSECRET",{
            expiresIn:"28 days"
        })
        return res.send({message:"Login success",token, refreshToken, user:user})
    }

    return res.status(401).send("Invalid credentials");
}


exports.getAllUsersdata=async(req,res)=>{
   try{ const AllUserData= await User.find();
    console.log(process.env.paymentKey)
    return res.status(200).send({
        message:"true",
        Users:AllUserData
    })
 } 
 catch(e){
    return res.status(400).send(e.message)
}
}

exports.getSingleUserData=async(req,res)=>{
    const user = await User.findById(req.params.id);
    try{ if(!user){
         return res.status(401).send("user not found")
     }
     else{
         return res.status(200).send({message:true,user:user})
     }}
     catch{
         return res.status(400).send(e.message)
     }
}


exports.verifytoken = async (req, res) => {
    let token = req.params.token
    try {
        let user = jwt.decode(token, "VIKALP@99")
        delete user._doc.password
        res.status(200).send({error:false, user:user._doc})
    } catch (error) {
        res.status(200).send({error:true, msg:'Token verification failed'})   
    }
}