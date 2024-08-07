import express from "express";


const app = express();


// use middlewares
app.use(express.json());


const port = process.env.PORT || 5678;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})