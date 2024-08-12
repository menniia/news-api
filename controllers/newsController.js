import { apiKey, fetchNews } from "../utils/fetchNews.js";


const getAllNews = async (req, res) => {
    try {
        let pageSize = parseInt(req.query.pageSize) || 50;
        let page = parseInt(req.query.page) || 1;
        let url = `https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
        fetchNews(url, res);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

const topHeadlines = async (req, res) => {
    try {
        let pageSize = parseInt(req.query.pageSize) || 30;
        let page = parseInt(req.query.page) || 1;
        let category = req.query.category || "general";

        let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
        fetchNews(url, res);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}




export { getAllNews, topHeadlines }
