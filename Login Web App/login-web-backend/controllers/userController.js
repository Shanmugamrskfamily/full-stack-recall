import { User } from "../models/userModel.js";


const getUser=async(req,res)=>{
    const userId=req.user.id;
    try {
        const user= await User.findById(userId);
        if(!user){
            return res.status(405).json({message:'User Not Found!'});
        }
        return res.status(200).json({message:'User found!',User_Details:user})
    } catch (error) {
        console.log(`Server Error: ${error}`);
        return res.status(500).json({message:'Server Down!',Error:error.message});
    }
}

export default{getUser};