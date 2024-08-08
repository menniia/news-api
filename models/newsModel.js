import { model, Schema } from "mongoose";


const newsSchema = new Schema({
    author: { type: String, trim: true, required: true },
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true },
    url: { type: String, trim: true, unique: true },
    urlToImage: { type: String, required: true },
    publishAt: { type: Date, default: () => Date.now() },
    content: { type: String, trim: true, required: true },
    category: { type: String, required: true, enum: ['Home', 'For You', 'Following', 'Africa', 'World', 'Local', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science', 'Health'] },
});

export const NewsModel = model("News", newsSchema);