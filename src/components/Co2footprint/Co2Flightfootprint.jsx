import { ListGroup, Button, Accordion } from 'react-bootstrap'
import footprintServiceBack from '../../services/footprintBack.service'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'
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


        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Flight</Accordion.Header>
                <Accordion.Body>
                    {flightFootprints.map((flightFootprint, i) => {

                        return (
                            <ListGroup variant="flush" key={i}>
                                <ListGroup.Item className='list-item'>
                                    <strong>Date:</strong> {formatDate(flightFootprint.createdAt)} |
                                    <strong> Co2 Kg:</strong> {flightFootprint.carbon_kg} |
                                    <strong> Passengers:</strong> {flightFootprint.passengers} |
                                    <strong> Round trip: </strong> {flightFootprint.legs[0].departure_airport}-{flightFootprint.legs[0].destination_airport}
                                    {(user._id === flightFootprint.user) ? (<Button className='button-sm-sm' variant="dark" type="submit" onClick={() => deleteFootprintFlight(flightFootprint._id)}>X</Button>) : null}
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