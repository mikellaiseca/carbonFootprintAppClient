import axios from 'axios'

class AuthService {

    //Qué BaseUrl es más consistente todo en el .env o así?

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_SERVER}/auth` })
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