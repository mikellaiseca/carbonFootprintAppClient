import { Card, Col, ListGroup, ListGroupItem, Button, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import footprintServiceBack from '../../services/footprintBack.service'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'
import shippingIcon from './shipping-icon.png'
import './Co2footprint.css'

const Co2Shippingfootprint = ({ shippingFootprints }) => {

    console.log(shippingFootprints)

    const { user } = useContext(AuthContext)

    const [ownFootprints, setOwnFootprints] = useState([shippingFootprints])

    function refreshPage() {
        window.location.reload();
    }

    const deleteFootprintShipping = (id) => {

        footprintServiceBack
            .deleteFootprintShipping(id)
            .then(() => refreshPage())
            .catch(err => console.log(err))
    }

    const formatDate = (Date) => {
        const formated = Date.replace(/T.*/, '').split('-').reverse().join('-')
        return formated
    }

    return shippingFootprints.length > 0 && (

        shippingFootprints.map((shippingFootprint, i) => {

            return (

                <Col key={i} className='footprints'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='fp-icon' variant="top" src={shippingIcon} />
                        <Card.Body>
                            <Card.Title className='card-title'>Carbon Kg: {shippingFootprint.carbon_kg}</Card.Title>
                            <Card.Text className='card-title'>
                                {formatDate(shippingFootprint.createdAt)}
                            </Card.Text>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className='list-item'>Weight: <strong>{shippingFootprint.weight_value} {shippingFootprint.weight_unit}</strong></ListGroupItem>
                            <ListGroupItem className='list-item'>Distance: <strong>{shippingFootprint.distance_value}{shippingFootprint.distance_unit}</strong></ListGroupItem>
                            <ListGroupItem className='list-item'>Transport Method: <strong>{shippingFootprint.transport_method}</strong></ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            {(user._id === shippingFootprint.user) ? (<Button className='button-sm-sm' variant="primary" type="submit" onClick={() => deleteFootprintShipping(shippingFootprint._id)} >Delete Footprint</Button>) : null}
                        </Card.Body>
                    </Card>
                </Col >
            )
        })
    )

}

export default Co2Shippingfootprint
