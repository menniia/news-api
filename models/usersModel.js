import { model, Schema } from "mongoose";


const usersModel = new Schema({
    firstName: { type: String, required: true, trim: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true, trim: true }
});

export const UserModel = model("User", usersModel);