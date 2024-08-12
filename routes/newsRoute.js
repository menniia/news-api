import { Router } from "express";
import { getAllNews, topHeadlines } from "../controllers/newsController.js";


const newsRoute = Router()

newsRoute.get("/all-news", getAllNews);

newsRoute.get("/top-headlines", topHeadlines);

export default newsRoute;