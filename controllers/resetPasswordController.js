import { UsersModel } from "../models/usersModel.js";
import nodemailer from "nodemailer";



const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString();
}

export const resetPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await UsersModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User does not exist" })
        }

        const otp = generateOTP()

        user.resetToken = otp;

        await user.save();

        //send otp via email
        const transporter = nodemailer.createTransport({
            host: process.env.HOST_EMAIL,
            port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASS
            }
        });

        const mailOptions = {
            from: process.env.HOST_EMAIL,
            to: user.email,
            subject: "Reset Password",
            text: `Please use the following OTP to complete the process of resetting your password:\n\n${otp}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`
        }

        const info = await transporter.sendMail(mailOptions);

        console.log(`Message sent: ${info.messageId}`);

        res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}