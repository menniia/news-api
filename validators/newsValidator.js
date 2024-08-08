import joi from "joi";


export const newsValidator = joi.object({
    title: joi.string().min(5).required(),
    description: joi.string().default(" "),
    url: joi.string().uri(),
    content: joi.string().required(),
    imageUrl: joi.string().required(),
    author: joi.string().required(),
    category: joi.string().valid("Home", "For You", "Following", "Africa", "World", "Local", "Business", "Technology", "Entertainment", "Sports", "Science", "Health"),
    publishDate: joi.date().default(() => Date.now())
});