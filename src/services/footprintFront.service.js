const axios = require('axios')

class FootprintServiceFront {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://www.carboninterface.com/api/v1'
        })
    }

    getMaker() {
        return this.axiosApp.get('/vehicle_makes', {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_CARBONTOKEN
                    }`
            }
        })
    }

    getCarModels(vehicle_make_id) {

        return this.axiosApp.get(`/vehicle_makes/${vehicle_make_id}/vehicle_models`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_CARBONTOKEN}`
            }
        })
    }

}

const footprintServiceFront = new FootprintServiceFront()

module.exports = footprintServiceFront