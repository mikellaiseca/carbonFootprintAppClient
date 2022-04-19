import footprintServiceBack from '../../services/footprintBack.service'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useContext } from 'react'
import { AuthContext } from './../../context/auth.context'

const FootprintFormShipping = () => {

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const [footprintFormShipping, setFootprintFormShipping] = useState({
        weight_unit: "",
        weight_value: "",
        distance_value: "",
        transport_method: "",
    })


    const handleInputChange = e => {
        const { name, value } = e.target
        setFootprintFormShipping({
            ...footprintFormShipping,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        footprintServiceBack
            .getShippingFootprint(footprintFormShipping)
            .then(() => {
                navigate(`/users/${user._id}`)
            })

    }

    return (
        <Container className='footprintFormCar'>

            <h3>Shipping Footprint</h3>

            <Form onSubmit={handleSubmit} className="form">

                <Form.Group className="mb-3 formLabel">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control className='input' type="text" name="weight_value" value={footprintFormShipping.weight_value} onChange={handleInputChange} />
                </Form.Group>
                < br></br>
                <Form.Select aria-label="Default select example" className='input MuiOutlinedInput-notchedOutline' type="text" name="weight_unit" value={footprintFormShipping.weight_unit} onChange={handleInputChange}>
                    <option>Weight Unit</option>
                    <option value='g'>Grams</option>
                    <option value='kg'>Kilograms</option>
                    <Form.Control />
                </Form.Select>
                < br></br>
                <Form.Group className="mb-3 formLabel">
                    <Form.Label>Distance (Km)</Form.Label>
                    <Form.Control className='input' type="text" name="distance_value" value={footprintFormShipping.distance_value} onChange={handleInputChange} />
                </Form.Group>
                < br></br>
                <Form.Select aria-label="Default select example" className='input MuiOutlinedInput-notchedOutline' type="text" name="transport_method" value={footprintFormShipping.transport_method} onChange={handleInputChange}>
                    <option>Transport Method</option>
                    <option value='ship'>Ship</option>
                    <option value='train'>Train</option>
                    <option value='truck'>Truck</option>
                    <option value='plane'>Plane</option>
                    <Form.Control />
                </Form.Select>

                <Button className='button' variant="dark" type="submit" style={{ width: '100%' }}>Calculate</Button>

            </Form>

        </Container>
    )

}

export default FootprintFormShipping