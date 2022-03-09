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
}

const usersService = new UsersService()

export default usersService






