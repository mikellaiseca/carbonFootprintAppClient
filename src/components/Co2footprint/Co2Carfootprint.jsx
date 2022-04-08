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

        // carFootprints.map((carFootprint, i) => {

        //     return (

        //         <Col key={i} className='footprints'>

        //             <Card style={{ width: '18rem' }}>
        //                 <Card.Img className='fp-icon' variant="top" src={carIcon} />
        //                 <Card.Body>
        //                     <Card.Title className='card-title'>Carbon Kg: {carFootprint.carbon_kg}</Card.Title>
        //                     <Card.Text className='card-title'>
        //                         {formatDate(carFootprint.createdAt)}
        //                     </Card.Text>

        //                 </Card.Body>
        //                 <ListGroup className="list-group-flush">
        //                     <ListGroupItem className='list-item'>Distance: <strong>{carFootprint.distance_value} {carFootprint.distance_unit}</strong></ListGroupItem>
        //                     <ListGroupItem className='list-item'>Maker: <strong>{carFootprint.vehicle_make}</strong></ListGroupItem>
        //                     <ListGroupItem className='list-item'>Model: <strong>{carFootprint.vehicle_model}</strong></ListGroupItem>
        //                     <ListGroupItem className='list-item'>Model Year: <strong>{carFootprint.vehicle_year}</strong></ListGroupItem>

        //                 </ListGroup>
        //                 <Card.Body>
        //                     {(user._id === carFootprint.user) ? (<Button className='button-sm-sm' variant="primary" type="submit" onClick={() => deleteFootprintCar(carFootprint._id)} >Delete Footprint</Button>) : null}
        //                 </Card.Body>
        //             </Card>
        //         </Col >
        //     )
        // })


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