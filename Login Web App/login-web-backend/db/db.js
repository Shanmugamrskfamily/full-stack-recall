import mongoose from "mongoose";

export const connectToDB=async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected!');
    } catch (error) {
        throw error
        console.log('Database Error: ',error);
    }
}

