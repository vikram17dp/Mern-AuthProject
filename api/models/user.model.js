import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        default:"https://imgs.search.brave.com/QVhkaoJskGF_AnT4aNfaeUa5-HYc41DxtOcFdYvD8U4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzUwLzYwLzU1/LzM2MF9GXzU1MDYw/NTU0OV9QYVRQODFw/amFDc3JOVG5mVWFZ/bFVaOHdtUHBRU0hZ/OC5qcGc"
    }
},{timestamps:true});

const User = mongoose.model('User',UserSchema);
export default User;