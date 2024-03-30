import express from 'express';
import authController from '../controllers/authController.js';

const authRouter=express.Router();

authRouter.get('/',authController.check);
authRouter.post('/signup',authController.signUp);
authRouter.get('/verify/:emailToken',authController.verifyEmail);
authRouter.post('/login',authController.login);

export default authRouter;