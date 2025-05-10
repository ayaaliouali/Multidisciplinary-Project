import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function login (req,res) {
 try {
      const {email,password} = req.body;
      const user = await User.findOne({email});
      if (user){
        const isMatch = await bcrypt.compare(password ,user.password)
        if(isMatch) {
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"30d"});
            console.log("🔑 Newly signed token:", token);
            delete user._doc.password;
       return res.status(200).json({message:"login is successfull",datas:{token,...user._doc}})
       
        }else{
            return res.status(400).json({message:"Invalid credentials"})
        }
      }
      return res.status(400).json({message:"Invalid credentials"})
        
 } catch (error) {
    console.log(error);
      res.status(500).json({message:error.message});
    
 }
}

export async function register(req,res){
 try {
      const {name,email,password} = req.body;
      const existingUser = await User.findOne({email});
     if(existingUser){
         res.status(400).json ({message:"Email already exists"});
}
const hashedPassword = await bcrypt.hash(password,10)
const user = new User({name,email,password:hashedPassword})
await user.save();
    delete user._doc.password;
    res.status(201).json({data:user ,message:"Your Account Created Successfully"})
 } catch (error) {
    console.log(error);
      res.status(500).json({message:error.message});
 }
}