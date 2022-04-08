import { Card, Col, ListGroup, ListGroupItem, Button, Accordion } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import footprintServiceBack from '../../services/footprintBack.service'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'
import planeIcon from './plane-icon.png'
import './Co2footprint.css'

const Co2Flightfootprint = ({ flightFootprints }) => {

    const { user } = useContext(AuthContext)

    function refreshPage() {
        window.location.reload();
    }

    const deleteFootprintFlight = (id) => {

        footprintServiceBack
            .deleteFootprintFlight(id)
            .then(() => refreshPage())
            .catch(err => console.log(err))
    }

    const formatDate = (Date) => {
        const formated = Date.replace(/T.*/, '').split('-').reverse().join('-')
        return formated
    }

    return flightFootprints.length > 0 && (


        // flightFootprints.map((flightFootprint, i) => {
        //     return (

        //         < Col key={i}>


        //             <Card style={{ width: '18rem' }}>
        //                 <Card.Img className='fp-icon' variant="top" src={planeIcon} />
        //                 <Card.Body>
        //                     <Card.Title className='card-title'>Carbon Kg: {flightFootprint.carbon_kg}</Card.Title>
        //                     <Card.Text className='card-title'>
        //                         {formatDate(flightFootprint.createdAt)}
        //                     </Card.Text>
        //                 </Card.Body>
        //                 <ListGroup className="list-group-flush">
        //                     <ListGroupItem className='list-item'>Distance: <strong>{flightFootprint.distance_value} {flightFootprint.distance_unit}</strong> </ListGroupItem>

        //                     <ListGroupItem className='list-item'>Passengers: <strong>{flightFootprint.passengers}</strong></ListGroupItem>
        //                     <ListGroupItem className='list-item'>
        //                         Round trip:
        //                         <br>
        //                         </br>
        //                         <strong>{flightFootprint.legs[0].departure_airport}-{flightFootprint.legs[0].destination_airport}</strong>
        //                         <br>
        //                         </br>
        //                         <strong>{flightFootprint.legs[0].destination_airport}-
        //                             {flightFootprint.legs[0].departure_airport}</strong>

        //                     </ListGroupItem>

        //                 </ListGroup>
        //                 <Card.Body>
        //                     {(user._id === flightFootprint.user) ? (<Button className='button-sm-sm' variant="primary" type="submit" onClick={() => deleteFootprintFlight(flightFootprint._id)}>Delete Footprint</Button>) : null}
        //                 </Card.Body>
        //             </Card>
        //         </Col >

        //     )
        // })


        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Flight</Accordion.Header>
                <Accordion.Body>
                    {flightFootprints.map((flightFootprint, i) => {

                        return (
                            <ListGroup variant="flush">
                                <ListGroup.Item className='list-item'>
                                    <strong>Date:</strong> {formatDate(flightFootprint.createdAt)} |
                                    <strong> Co2 Kg:</strong> {flightFootprint.carbon_kg} |
                                    <strong> Passengers:</strong> {flightFootprint.passengers} |
                                    <strong> Round trip: </strong> {flightFootprint.legs[0].departure_airport}-{flightFootprint.legs[0].destination_airport}
                                    {(user._id === flightFootprint.user) ? (<Button className='button-sm-sm' variant="primary" type="submit" onClick={() => deleteFootprintFlight(flightFootprint._id)}>X</Button>) : null}
                                </ListGroup.Item>
                            </ListGroup>
                        )
                    })}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    )
}

export default Co2Flightfootprint