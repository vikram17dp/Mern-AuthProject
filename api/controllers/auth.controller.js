import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'


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
export const signin = async (req,res,next)=>{

    const {email,password} = req.body;
    try {
        const validUser = await  User.findOne({email});
        if(!validUser) return next(errorHandler(404,"User not found"));
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword) return next(errorHandler(401,"wrong credentials"));
        if (!process.env.JWT_SECRET) {
            return next(errorHandler(500, "JWT_SECRET is not defined"));
        }
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {password:hashedpassword,...rest} = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
        res.cookie('access_token',token,{httpOnly:true,expires:expiryDate}),
        res.status(200),
        res.json(rest);
        
    } catch (error) {
        next(error)
    }
}