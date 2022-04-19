import { Col, ListGroup } from "react-bootstrap"
import './Footer.css'
import logo from './logo.png'

const Footer = () => {
    return (
        <footer>
            <Col>
                <h4>Explore</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item>Our Mission</ListGroup.Item>
                    <ListGroup.Item>Our accountability</ListGroup.Item>
                    <ListGroup.Item>Newsroom</ListGroup.Item>
                    <ListGroup.Item>Magazine</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col>
                <h4>Connect</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item>Contact Us</ListGroup.Item>
                    <ListGroup.Item>Careers</ListGroup.Item>
                    <ListGroup.Item>FAQ</ListGroup.Item>
                    <ListGroup.Item>Ethics helpline</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col>
                <h4>Give</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item>Donate now</ListGroup.Item>
                    <ListGroup.Item>Membership</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col>
                <img className="logo-app" src={logo} alt="logo" />
            </Col>
        </footer>
    )
}

export default Footer