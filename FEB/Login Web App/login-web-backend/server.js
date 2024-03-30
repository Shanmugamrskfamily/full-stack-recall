import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectToDB } from './db/db.js';
import authRouter from './routes/authRoutes.js';
import { verifyToken } from './middlewares/auth.js';
import userRoute from './routes/userRoutes.js';
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

await connectToDB();

app.use('/',authRouter);
app.use('/user',verifyToken,userRoute);





const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`Server is Running On http://localhost:${PORT}`);
})


