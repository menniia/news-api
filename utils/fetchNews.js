import axios from "axios";;

const apiKey = process.env.NEWS_API_KEY;

const fetchNews = async (url, res) => {
    try {
        const response = await axios.get(url);
        if (response.data.totalResults > 0) {
            res.status(200).json({ message: "Fetched data successfully", data: response.data });
        } else {
            res.status(200).json({ message: "No results fetched" })
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch data from API", error: error.message });
    }
}

export { apiKey, fetchNews };