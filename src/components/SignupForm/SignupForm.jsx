import { useState, useContext } from "react"
import { Form, Button } from 'react-bootstrap'
import authService from "../../services/auth.service"
// import { MessageContext } from './../../context/userMessage.context'
import { useNavigate } from 'react-router-dom'
import uploadService from "../../services/upload.service"

function SignupForm() {

    const [signupForm, setSignupForm] = useState({
        username: "",
        password: "",
        email: "",
        profileImg: "",
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupForm({
            ...signupForm,
            [name]: value
        })
    }

    const uploadProfileImage = e => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setSignupForm({ ...signupForm, profileImg: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .signup(signupForm)
            .then(({ data }) => {
                navigate('/')
            })
            .catch(err => console.log('Authentication error', err))

    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" value={signupForm.username} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={signupForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={signupForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="profileImage" className="mb-3">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="file" onChange={uploadProfileImage} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }} disabled={loadingImage}>{loadingImage ? 'Just a moment...' : 'Create user'}</Button>

        </Form>
    )
}

export default SignupForm