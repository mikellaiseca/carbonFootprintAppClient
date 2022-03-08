import axios from 'axios'

class UsersService {

    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_SERVER}` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllUsers = () => {
        return this.api.get('/users')
    }

    getOneUser = id => {
        return this.api.get(`/users/${id}`)
    }

    pushComment = (user_id, info) => {
        return this.api.put(`/${user_id}/push-comment-post`, info)
    }

    pullComment = (comment_id) => {
        return this.api.put(`/${comment_id}/pull-comment-post`)
    }

    pushFootprintCar = (info) => {
        console.log(info, 'sigo creandome en service del front')
        return this.api.put('/push-footprintCar', info)
    }
}

const usersService = new UsersService()

export default usersService






