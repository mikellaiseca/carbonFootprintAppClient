import { Card, Col, ListGroup, ListGroupItem, Button, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import footprintServiceBack from '../../services/footprintBack.service'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'
import './Co2footprint.css'


const Co2Carfootprint = ({ profileId, totalCarFootprint }) => {

    const [carFootprints, setCarFootprint] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {

        checkThereIsAprofile()

    }, [profileId])

    const checkThereIsAprofile = () => {

        return profileId?.length > 0 && loadCo2footprints()

    }

    const loadCo2footprints = () => {

        footprintServiceBack
            .getCarCustomFootprint(profileId)
            .then(({ data }) => setCarFootprint(data))
            .catch(err => console.log(err))
    }

    const deleteFootprintCar = () => {

        carFootprints.map(carFootprint => {

            footprintServiceBack
                .deleteFootprintCar(carFootprint._id)
                .then(() => console.log('footprint eliminada'))
                .catch(err => console.log(err))
        })
    }

    return carFootprints.length > 0 && (


        carFootprints.map((carFootprint, i) => {

            return (

                <Col key={i} className='footprints'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://zijderlaan.nl/media/k2/items/cache/3899dfe821816fbcb3db3e3b23f81585_XL.jpg" />
                        <Card.Body>
                            <Card.Title>Your CO2 Car Footprint</Card.Title>
                            <Card.Text>
                                {carFootprint.carbon_kg}
                                {totalCarFootprint(carFootprint.carbon_kg)}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{carFootprint.distance_value}</ListGroupItem>
                            <ListGroupItem>{carFootprint.distance_unit}</ListGroupItem>
                            <ListGroupItem>{carFootprint.vehicle_make}</ListGroupItem>
                            <ListGroupItem>{carFootprint.vehicle_model}</ListGroupItem>

                            <ListGroupItem>{carFootprint.vehicle_year}</ListGroupItem>

                        </ListGroup>
                        <Card.Body>
                            {(user._id === carFootprint.user) ? (<Button variant="primary" type="submit" onClick={deleteFootprintCar}>Delete Footprint</Button>) : null}
                        </Card.Body>
                    </Card>
                </Col >


            )
        })

    )
}

export default Co2Carfootprint