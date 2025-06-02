import jwt from "jsonwebtoken";
import User from "../models/user.js";



export const protect = async (req,res,next)=>{
try {
    let token ;
    if (req.headers.authorization) {
        token = req.headers.authorization.split(" ")[1];
        console.log("2) Verifying with JWT_SECRET:", JSON.stringify(process.env.JWT_SECRET));
        console.log("📨 Token received:", token);
        const decoded = jwt.verify (token , process.env.JWT_SECRET);
      console.log("JWT payload:", decoded);
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
};

export const isAdmin = (req, res, next) => {
  const allowedAdminEmail = "aoughellanetmeriem@gmail.com";
  if (req.user && req.user.email === allowedAdminEmail) {
    next();
  } else {
    res.status(403).json({ message: 'Admin access only' });
  }
};

