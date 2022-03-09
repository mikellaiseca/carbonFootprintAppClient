import { Card, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import footprintServiceBack from '../../services/footprintBack.service'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'

const Co2Flightfootprint = ({ profileId }) => {

    const [flightFootprints, setFlightFootprint] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {

        checkThereIsAprofile()

    }, [profileId])

    const checkThereIsAprofile = () => {

        return profileId?.length > 0 && loadCo2footprints()

    }

    const loadCo2footprints = () => {

        footprintServiceBack
            .getFlightCustomFootprint(profileId)
            .then(({ data }) => setFlightFootprint(data))
            .catch(err => console.log(err))
    }

    const deleteFootprintFlight = () => {

        flightFootprints.map(flightFootprint => {

            footprintServiceBack
                .deleteFootprintFlight(flightFootprint._id)
                .then(() => console.log('footprint eliminada'))
                .catch(err => console.log(err))
        })
    }

    return flightFootprints.length > 0 && (


        flightFootprints.map((flightFootprint, i) => {
            return (

                < Col key={i}>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://zijderlaan.nl/media/k2/items/cache/3899dfe821816fbcb3db3e3b23f81585_XL.jpg" />
                        <Card.Body>
                            <Card.Title>Your CO2 Flight Footprint</Card.Title>
                            <Card.Text>
                                {flightFootprint.carbon_kg}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Distance: {flightFootprint.distance_value} {flightFootprint.distance_unit} </ListGroupItem>

                            <ListGroupItem>Passengers: {flightFootprint.passengers}</ListGroupItem>
                            <ListGroupItem>
                                Round trip:
                                <br>
                                </br>
                                {flightFootprint.legs[0].departure_airport}-{flightFootprint.legs[0].destination_airport}
                                <br>
                                </br>
                                {flightFootprint.legs[0].destination_airport}-
                                {flightFootprint.legs[0].departure_airport}

                            </ListGroupItem>

                            <ListGroupItem>{flightFootprint.vehicle_year}</ListGroupItem>

                        </ListGroup>
                        <Card.Body>
                            {(user._id === flightFootprint.user) ? (<Button variant="primary" type="submit" onClick={deleteFootprintFlight}>Delete Footprint</Button>) : null}
                        </Card.Body>
                    </Card>
                </Col >

            )
        })

    )
}

export default Co2Flightfootprint