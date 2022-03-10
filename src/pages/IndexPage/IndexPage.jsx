import { Container, Row, Col } from "react-bootstrap"

import './IndexPage.css'

const IndexPage = () => {
    return (

        <Container className="container">

            <Row className="card block blockOne">

                <h1>You can make a difference, you can reduce your Co2 Footprint</h1>

            </Row>

            <Row className=" blockOne">
                <Col className="card col">
                    <h2>Live a low-carbon lifestyle </h2>
                </Col>
                <Col className="card col">
                    <h2>Check the latest news about Co2</h2>

                </Col>
            </Row>
            <Row className="card block blockOne">

            </Row>

        </Container >

    )
}

export default IndexPage