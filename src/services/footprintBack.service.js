import axios from 'axios'

class FootprintServiceBack {

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


    getFlightFootprint = (body) => {

        return this.api.post('/flight-form', body)
    }

    getCarFootprint = (body) => {

        return this.api.post('/car-form', body)
    }

    getCarCustomFootprint = (userId) => {

        return this.api.get(`/car-custom-footprints/${userId
            }`)
    }

    getFlightCustomFootprint = (userId) => {

        console.log(userId, 'service frontttttttttttt')

        return this.api.get(`/flight-custom-footprints/${userId}`)
    }

}

const footprintServiceBack = new FootprintServiceBack()

export default footprintServiceBack