import { UsersModel } from "../models/usersModel.js";
import { usersValidator } from "../validators/usersValidator.js";
import bcrypt from "bcrypt";



export const signUp = async (req, res) => {
    try {
        const { error, value } = usersValidator.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message })
        }

        const { email } = value;

        const ifUserExits = await UsersModel.findOne({ email });

        if (ifUserExits) {
            return res.status(400).json({ message: "User already exists, try logging in" });
        }

        const hashedPassword = await bcrypt.hash(value.password, 10);

        await UserModel.create({
            ...value,
            password: hashedPassword
        })

        res.status(201).json({ message: "Registration Successful" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const login = async (req, res, next) => {
    try {

    } catch (error) {
        console.log(error);
        next(error);
    }
}

export const logout = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}