import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};

export async function login (req,res) {
 try {
      const {email,password} = req.body;
      if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }
      const user = await User.findOne({email});
      if (user){
        const isMatch = await bcrypt.compare(password ,user.password)
        if(isMatch) {
             const token = generateToken(user);
            console.log("🔑 Newly signed token:", token);
            delete user._doc.password;
       return res.status(200).json({message:"login is successfull",data:{token,...user._doc}})
       
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
      if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
      const existingUser = await User.findOne({email});
     if(existingUser){
        return res.status(400).json ({message:"Email already exists"});
}
const hashedPassword = await bcrypt.hash(password,10)
const user = new User({name,email,password:hashedPassword})
await user.save();
    const token = generateToken(user);
    delete user._doc.password;
    res.status(201).json({data: { token, ...user._doc },message:"Your Account Created Successfully"})
 } catch (error) {
    console.log(error);
      res.status(500).json({message:error.message});
 }
}