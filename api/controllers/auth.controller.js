import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req,res,next)=>{
    
    const {username,email,password} = req.body;
    const hashedpassword = await bcryptjs.hash(password,10);
    const newUser = new User({username,email,password:hashedpassword});
    try {
        await newUser.save();
        res.status(201).json({message:"User created successfully"});
        
    } catch (error) {
        // next(errorHandler(500,"something went wrong"))
        next(error)
    }
}