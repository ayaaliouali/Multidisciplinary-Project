import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    "KEY",
    { expiresIn: "30d" }
  );
};

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    


    // Find user
    const user = await User.findOne({ email:email});
    if (!user) {
      console.error(`Login failed: No user found for email ${sanitizedEmail}`);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.error(`Login failed: Incorrect password for email ${sanitizedEmail}`);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken(user);
    console.log('🔑 Newly signed token:', token);

    // Return only necessary fields
    res.status(200).json({
      message: 'Login successful',
      data: {
        token,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
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