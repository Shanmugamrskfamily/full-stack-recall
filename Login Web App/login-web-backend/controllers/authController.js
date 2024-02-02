import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';

dotenv.config();

const check = async (req, res) => {
    try {
        return res.status(200).json({ message: 'Welcome To My Web Application. Server is Running Good' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Down!', error: error.message });
    }
};

const signUp = async (req, res) => {
    const { profilePictureUrl, firstName, lastName, email, password } = req.body;
    try {
        const existUser = await User.findOne({ email });
        if (existUser && !existUser.isEmailVerified) {
            return res.status(401).json({ message: 'User Already Exists and Email not Verified!' });
        }
        if (existUser) {
            return res.status(409).json({ message: 'User Already Exists!' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const emailToken = crypto.randomBytes(6).toString('hex');
        const link = `http://localhost:${process.env.PORT || 5000}/verify/${emailToken}`;
        const user = new User({ profilePictureUrl, firstName, lastName, email, password: hashedPassword, emailToken });
        await user.save();

        const transporter = nodemailer.createTransport({
            service: 'Outlook',
            auth: {
                user: process.env.E_MAIL,
                pass: process.env.E_PASS
            }
        });

        const mailOptions = {
            from: process.env.E_MAIL,
            to: email,
            subject: 'Email Verification- Web Application',
            html: `<h3>Web Application</h3>
            <p>Dear ${firstName} ${lastName},<br/>
            Thank you for signing up with us. Kindly Verify Your Email: <a href='${link}'><button>Verify Email</button></a><br/>
            Best Regards,<br/>
            Web Application Team
            </p>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error on Email Sending', error);
                return res.status(500).json({ message: 'Unable to Send Email', error: error.message });
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json({ message: 'Verification Link Sent!' });
            }
        });

    } catch (error) {
        console.error(`Server Error: ${error}`);
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const verifyEmail = async (req, res) => {
    const emailToken = req.params.emailToken;
    try {
        if (!emailToken) {
            return res.status(400).json({ message: 'Email Token Not Available' });
        }
        const user = await User.findOne({ emailToken });
        if (!user) {
            return res.status(401).json({ message: 'Invalid Email Token!' });
        }
        user.isEmailVerified = true;
        user.emailToken = null;
        await user.save();
        return res.status(200).json({ message: 'Email Verified Successfully. Now you can Login!', userName: `${user.firstName} ${user.lastName}` });
    } catch (error) {
        console.error(`Error on Verifying Email: ${error}`);
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid Email Address!' });
        }
        if (!user.isEmailVerified) {
            return res.status(401).json({ message: 'Email not verified. Please check your email for verification instructions.' });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(409).json({ message: 'Invalid Password! Please Check and Try Again..' });
        }

        const token = jwt.sign({ id: user.id }, process.env.secretKey);
        return res.status(200).json({ message: 'Login Success', token: token, name: `${user.firstName} ${user.lastName}` });
    } catch (error) {
        console.error(`Server Error: ${error}`);
        return res.status(500).json({ message: 'Server Down!', error: error.message });
    }
};

export default { signUp, check, verifyEmail, login };
