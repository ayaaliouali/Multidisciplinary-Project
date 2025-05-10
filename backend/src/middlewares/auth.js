import jwt from "jsonwebtoken";
import User from "../models/user.js";



export const protect = async (req,res,next)=>{
try {
    let token ;
    if (req.headers.authorization) {
        token = req.headers.authorization;
        const decoded = jwt.verify (token , process.env.JWT_SECRET);
      console.log(decoded);
      const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        } 
        req.user = user;
        next();
   
    }
    
} catch (error) {
     console.log (error);
        return res.status(500).json(
            {message:error.message})
}
}
