import footprintServiceBack from '../../services/footprintBack.service'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
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
                navigate('/flight-form')
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
        <>
            <Form onSubmit={handleSubmit} className="form">

                <Form.Group className="mb-3">
                    <Form.Label>Distance (km)</Form.Label>
                    <Form.Control type="text" name="distance_value" value={footprintFormCar.distance_value} onChange={handleInputChange} />
                </Form.Group>

                <FootprintFormCarModel findModelId={findModelId} />

                <Form.Group className="mb-3">
                    <Form.Label>Vehicle model ID</Form.Label>

                    <Form.Control type="text" name="vehicle_model_id" value={footprintFormCar.vehicle_model_id} onChange={handleInputChange}

                    />
                </Form.Group>

                <Button variant="dark" type="submit" style={{ width: '100%' }}>Calculate</Button>

            </Form>
        </>
    )

}

export default FootprintFormCar

