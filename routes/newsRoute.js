import { Router } from "express";


const newsRoute = Router()

newsRoute.get("/all-news");

export default newsRoute;