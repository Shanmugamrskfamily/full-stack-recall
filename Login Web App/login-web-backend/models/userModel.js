import mongoose, { Schema } from "mongoose";

const UserSchema=new Schema({
    profilePictureUrl:{type:String, required:true, default:'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String,unique:true ,required:true},
    password: {type:String, required:true},
    isEmailVerified:{type: Boolean, default: false},
    emailToken:{type: String},
    resetToken: {type: String,default: null},
    resetTokenExpiration: {type: Date,default: null}
    
},{timestamps:true})

export const User=mongoose.model('User',UserSchema);
