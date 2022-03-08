const axios = require('axios')

class NewsService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://newsapi.org/v2/'
        })
    }

    getFullListNews() {
        return this.axiosApp.get(`everything?q=co2&apiKey=${process.env.REACT_APP_API_KEY}`)
    }

}

module.exports = NewsService

