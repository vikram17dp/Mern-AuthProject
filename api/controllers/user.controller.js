import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import bcrypt from 'bcryptjs'
import hashSync  from "bcryptjs"
export const test = (req,res)=>{
    res.json({
        message:"Api is Working"
    })
}
export const updateUser = async (req,res,next)=>{
    if(req.user.id !== req.params.id){
        return next(errorHandler(401,'You Can Update Only Your Account!'))
    }
   
    try {
        if(req.body.password){
            req.body.password = bcrypt.hashSync(req.body.password,10);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            {
            $set:{
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                profileImage:req.body.profileImage
            }
        },
        {new:true}
        );
    
        const {password , ...rest} = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
}

// delete
export const deleteUser = async (req,res,next)=>{

    if(req.user.id !== req.params.id){
        return next(errorHandler(401,"You Can Delete  Only Your Account!"))
    }
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...")
    } catch (error) {
        next(error)
    }
}