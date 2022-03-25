import axios from 'axios'

class NewsServiceBack {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_SERVER}`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getFullListNews = (body) => {
        return this.api.get('/news', body)
    }
}

const newsServiceBack = new NewsServiceBack()

export default newsServiceBack