import { useState, useContext } from "react"
import { Form, Button } from 'react-bootstrap'
import authService from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './../../context/auth.context'

function LoginForm() {

    const [loginForm, setLoginForm] = useState({
        password: "",
        email: ""
    })

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleInputChange = e => {
        const { name, value } = e.target
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .login(loginForm)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={loginForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={loginForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit" className="button-sm-sm" style={{ width: '100%' }}>Log-in</Button>

        </Form>
    )
}

export default LoginForm
