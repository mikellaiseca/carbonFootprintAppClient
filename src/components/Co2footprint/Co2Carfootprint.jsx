import { Card, Col, ListGroup, ListGroupItem, Button, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import footprintServiceBack from '../../services/footprintBack.service'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'
import carIcon from './car-icon.png'
import './Co2footprint.css'


const Co2Carfootprint = ({ carFootprints }) => {

    console.log(carFootprints)

    const { user } = useContext(AuthContext)

    const deleteFootprintCar = (id) => {

        footprintServiceBack
            .deleteFootprintCar(id)
            .then(() => console.log('footprint eliminada'))
            .catch(err => console.log(err))
    }

    const formatDate = (Date) => {
        const formated = Date.replace(/T.*/, '').split('-').reverse().join('-')
        return formated
    }

    return carFootprints.length > 0 && (

        carFootprints.map((carFootprint, i) => {

            return (

                <Col key={i} className='footprints'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='fp-icon' variant="top" src={carIcon} />
                        <Card.Body>
                            <Card.Title className='card-title'>Carbon Kg: {carFootprint.carbon_kg}</Card.Title>
                            <Card.Text className='card-title'>
                                {formatDate(carFootprint.createdAt)}
                            </Card.Text>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className='list-item'>Distance: <strong>{carFootprint.distance_value} {carFootprint.distance_unit}</strong></ListGroupItem>
                            <ListGroupItem className='list-item'>Maker: <strong>{carFootprint.vehicle_make}</strong></ListGroupItem>
                            <ListGroupItem className='list-item'>Model: <strong>{carFootprint.vehicle_model}</strong></ListGroupItem>
                            <ListGroupItem className='list-item'>Model Year: <strong>{carFootprint.vehicle_year}</strong></ListGroupItem>

                        </ListGroup>
                        <Card.Body>
                            {(user._id === carFootprint.user) ? (<Button className='button-sm-sm' variant="primary" type="submit" onClick={() => deleteFootprintCar(carFootprint._id)} >Delete Footprint</Button>) : null}
                        </Card.Body>
                    </Card>
                </Col >
            )
        })
    )
}

export default Co2Carfootprint