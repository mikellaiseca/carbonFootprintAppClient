import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import footprintServiceBack from '../../services/footprintBack.service'



const Co2Flightfootprint = ({ profileId }) => {

    console.log(profileId)

    const [flightFootprints, setFlightFootprint] = useState([])

    console.log(flightFootprints, 'soy las footprints')

    useEffect(() => {

        checkThereIsAprofile()


    }, [profileId])



    const checkThereIsAprofile = () => {

        return profileId?.length > 0 && loadCo2footprints()

    }


    const loadCo2footprints = () => {

        console.log(profileId, 'estoy entrandoooooooooooooooo')

        footprintServiceBack
            .getFlightCustomFootprint(profileId)
            .then(({ data }) => setFlightFootprint(data))
            .catch(err => console.log(err))


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
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col >

            )
        })

    )
}

export default Co2Flightfootprint