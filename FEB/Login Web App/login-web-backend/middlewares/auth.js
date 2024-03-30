import jwt  from "jsonwebtoken";
import { User } from "../models/userModel.js";
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = async (req, res, next) => {
    const token = req.headers['token'];
    if (!token) {
        return res.status(401).json({ message: 'You are not authorized!' }); 
    }
    try {
        const decode = jwt.verify(token, process.env.secretKey);
        const user = await User.findById(decode.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Verification failed. Invalid token!' });
    }
};
