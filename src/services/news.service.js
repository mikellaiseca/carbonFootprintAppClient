const axios = require('axios')

class NewsService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api.mediastack.com/v1/'
        })
    }

    getFullListNews() {
        return this.axiosApp.get(`news?access_key=${process.env.REACT_APP_API_KEY}&keywords=co2&languages=en`)
    }

}

export default NewsService

