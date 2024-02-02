import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectToDB } from './db/db.js';
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

await connectToDB();

const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`Server is Running On http://localhost:${PORT}`);
})
