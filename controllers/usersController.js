import { usersSchema } from "../validators/usersSchema";




export const signUp = async (req, res, next) => {
    try {
        const { error, value } = usersSchema.validate(req.body);

        if (error) {
            res.status(400).json({ message: error.details[0].message })
        }

        const { email, phoneNumber } = value;

        if (email || phoneNumber)
    } catch (error) {
        console.log(error);
        next(error);
    }
}