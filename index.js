import express, { response } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import usersRoute from "./routes/usersRoute.js";
import cors from "cors";
import newsRoute from "./routes/newsRoute.js";

await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const app = express();


// use middlewares
app.use(express.json());
app.use(cors());

//use routes
app.use("/api/v1", usersRoute);
app.use("/api/v1", newsRoute);


app.get("/country", async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
})

const port = process.env.PORT || 5678;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})