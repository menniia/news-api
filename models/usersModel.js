import { model, Schema } from "mongoose";


const usersSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    resetToken: { type: String },
    password: { type: String, required: true, trim: true }
});

export const UsersModel = model("User", usersSchema);