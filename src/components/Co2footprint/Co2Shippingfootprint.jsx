import { Card, Col, ListGroup, ListGroupItem, Button, Container, Accordion } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import footprintServiceBack from '../../services/footprintBack.service'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'
import shippingIcon from './shipping-icon.png'
import './Co2footprint.css'

const Co2Shippingfootprint = ({ shippingFootprints }) => {

    const { user } = useContext(AuthContext)

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

        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Shipping</Accordion.Header>
                <Accordion.Body>
                    {shippingFootprints.map((shippingFootprint, i) => {

                        return (
                            <ListGroup variant="flush" key={i}>
                                <ListGroup.Item className='list-item'>
                                    <strong>Date:</strong> {formatDate(shippingFootprint.createdAt)} |
                                    <strong> Co2 Kg:</strong> {shippingFootprint.carbon_kg} |
                                    <strong> Weight:</strong> {shippingFootprint.weight_value} {shippingFootprint.weight_unit} |
                                    <strong> Distance:</strong> {shippingFootprint.distance_value}{shippingFootprint.distance_unit} |
                                    <strong> Transport Method:</strong> {shippingFootprint.transport_method}
                                    {(user._id === shippingFootprint.user) ? (<Button className='button-sm-sm' variant="primary" type="submit" onClick={() => deleteFootprintShipping(shippingFootprint._id)} >X</Button>) : null}
                                </ListGroup.Item>
                            </ListGroup>
                        )
                    })}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    )
}

export default Co2Shippingfootprint
