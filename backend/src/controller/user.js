import User from "../models/user.js";

export async function createUser(req,res){
    try {
        const{ name,email,password } = req.body;
        const user = User.creat({ name,email,password});
        if(!user){
            res.status(400).json({message:"User not created"})
        }
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message : error.message });
    }
}