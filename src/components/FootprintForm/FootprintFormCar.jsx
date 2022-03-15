import footprintServiceBack from '../../services/footprintBack.service'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import FootprintFormCarModel from './FootprintFormCarModel'
import usersService from '../../services/users.service'

const FootprintFormCar = () => {

    const [footprintFormCar, setFootprintFormCar] = useState({
        distance_value: "",
        vehicle_model_id: "",

    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setFootprintFormCar({
            ...footprintFormCar,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        footprintServiceBack
            .getCarFootprint(footprintFormCar)
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err))

    }

    const findModelId = (id) => {
        setFootprintFormCar({
            ...footprintFormCar,
            vehicle_model_id: id
        })

    }

    return (
        <Container className="footprintFormCar">
            <h3>Vehicle Footprint</h3>

            <Form onSubmit={handleSubmit} className="form">

                <Form.Group className="mb-3 formLabel">
                    <Form.Label className="formLabel">Distance (km)</Form.Label>
                    <Form.Control className='input' type="text" name="distance_value" value={footprintFormCar.distance_value} onChange={handleInputChange} />
                </Form.Group>



                <Form.Group className="mb-3  formLabel red ">
                    <Form.Label>Vehicle model ID</Form.Label>

                    <Form.Control placeholder='This input will autofill' className='input-red' type="text" name="vehicle_model_id" value={footprintFormCar.vehicle_model_id} onChange={handleInputChange}

                    />
                </Form.Group>

                <FootprintFormCarModel findModelId={findModelId} />

                <Button className='button' variant="dark" type="submit" style={{ width: '100%' }}>Calculate</Button>

            </Form>
        </Container>
    )

}

export default FootprintFormCar

