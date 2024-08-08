import joi from "joi";


export const usersValidator = joi.object({
    firstName: joi.string().required(),
    middleName: joi.string(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    phoneNumber: joi.string(),
    password: joi.string().required(),
    confirmPassword: joi.ref("password")
}).with("password", "confirmPassword");