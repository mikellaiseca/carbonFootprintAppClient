import axios from 'axios'

class AuthService {

    //Qué BaseUrl es más consistente todo en el .env o así?

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_SERVER}/auth` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    signup(credentials) {
        return this.api.post('/sign-up', credentials)
    }

    login(credentials) {
        return this.api.post('/log-in', credentials)
    }

    verify(token) {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }

}

const authService = new AuthService()

export default authService