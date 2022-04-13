import { Card, Col, ListGroup, ListGroupItem, Button, Container, Accordion } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import footprintServiceBack from '../../services/footprintBack.service'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'
import carIcon from './car-icon.png'
import './Co2footprint.css'


const Co2Carfootprint = ({ carFootprints }) => {

    const { user } = useContext(AuthContext)

    const [ownFootprints, setOwnFootprints] = useState([carFootprints])

    function refreshPage() {
        window.location.reload();
    }

    const deleteFootprintCar = (id) => {

        footprintServiceBack
            .deleteFootprintCar(id)
            .then(() => refreshPage())
            .catch(err => console.log(err))
    }

    const formatDate = (Date) => {
        const formated = Date.replace(/T.*/, '').split('-').reverse().join('-')
        return formated
    }

    return carFootprints.length > 0 && (

        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Vehicle</Accordion.Header>
                <Accordion.Body>
                    {carFootprints.map((carFootprint, i) => {

                        return (
                            <ListGroup variant="flush">
                                <ListGroup.Item className='list-item'>
                                    <strong>Date:</strong> {formatDate(carFootprint.createdAt)} |
                                    <strong> Co2 Kg:</strong> {carFootprint.carbon_kg} |
                                    <strong> Distance:</strong> {carFootprint.distance_value} {carFootprint.distance_unit} |
                                    <strong> Vehicle:</strong> {carFootprint.vehicle_make} {carFootprint.vehicle_model} {carFootprint.vehicle_year}
                                    {(user._id === carFootprint.user) ? (<Button className='button-sm-sm' variant="primary" type="submit" onClick={() => deleteFootprintCar(carFootprint._id)} >X</Button>) : null}
                                </ListGroup.Item>
                            </ListGroup>
                        )
                    })}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>


    )
}

export default Co2Carfootprint