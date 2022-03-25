import axios from 'axios'

class ContactService {

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

    contact(contactForm) {
        return this.api.post('/contact-us', contactForm)
    }
}

const contactService = new ContactService()
export default contactService