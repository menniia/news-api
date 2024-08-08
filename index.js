import express, { response } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import axios from "axios";
import usersRoute from "./routes/usersRoute.js";

await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const app = express();


// use middlewares
app.use(express.json());

//use routes
app.use("/api/v1", usersRoute);

const apiKey = process.env.NEWS_API_KEY;

const fetchNews = (url, res) => {
    axios.get(url)
        .then(response => {
            if (response.data.totalResults > 0) {
                res.status(200).json({ message: "Fetched data successfully", data: response.data });
            } else {
                res.status(200).json({ message: "No results fetched" })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to fetch data from API", err: err.message });
        })
}

app.get("/all-news", async (req, res, next) => {
    try {
        let pageSize = parseInt(req.query.pageSize) || 50;
        let page = parseInt(req.query.page) || 1;
        let url = `https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
        fetchNews(url, res);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
})

const port = process.env.PORT || 5678;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})