import express from 'express'
import userController from '../controllers/userController.js';
const userRoute=express.Router();

userRoute.get('/get-user',userController.getUser);
userRoute.put('/update-user',userController.updateUser);
userRoute.get('/get-pic',userController.getUserProfilePic);
export default userRoute;