import footprintServiceBack from '../../services/footprintBack.service'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const FootprintFormFlight = () => {

    const [footprintForm, setFootprintForm] = useState({
        passengers: "",
        departure_airport: "",
        destination_airport: "",
    })
    console.log(footprintForm)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setFootprintForm({
            ...footprintForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        footprintServiceBack
            .getFlightFootprint(footprintForm)
            .then(() => {
                navigate('/')
            })

    }

    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Passengers</Form.Label>
                    <Form.Control type="text" name="passengers" value={footprintForm.passengers} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Departure Airport</Form.Label>
                    <Form.Control type="text" name="departure_airport" value={footprintForm.departure_airport} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Destination Airport</Form.Label>
                    <Form.Control type="text" name="destination_airport" value={footprintForm.destination_airport} onChange={handleInputChange} />
                </Form.Group>

                <Button variant="dark" type="submit" style={{ width: '100%' }}>Calculate</Button>

            </Form>
        </>
    )


}

export default FootprintFormFlight