import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import contactService from "../../services/contact.service"

function ContactForm() {
    const [contactForm, setContactForm] = useState({
        email: '',
        message: ''
    })
    const navigate = useNavigate()

    const handleInputChange = e => {

        const { name, value } = e.target
        setContactForm({ ...contactForm, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        contactService
            .contact(contactForm)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate('/')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Your email</Form.Label>
                <Form.Control type="email" name="email" value={contactForm.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Ask us anything</Form.Label>
                <Form.Control as="textarea" name="message" style={{ height: '100px' }} value={contactForm.message} onChange={handleInputChange} />
            </Form.Group>
            <Button type="submit" className="button-sm-sm" style={{ width: '100%' }}>Send</Button>

        </Form>
    )
}

export default ContactForm