import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import './FootprintPageMain.css'

const FootprintPageMain = () => {

    return (
        <Container className="footprintMain card-block">

            <Row className="row">
                <h1> Here you can choose whether you want to calculate your car or flight footprint</h1>

                <h3>The first step towards living a low-carbon lifestyle is realising how much kg you are producing in your day to day life.</h3>

            </Row>

            <Row className="row">
                <Col>
                    <Link to='/car-form'>
                        <Button className="button">
                            Calculate car footprint
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to='/flight-form'>
                        <Button className="button">
                            Calculate flight footprint
                        </Button>
                    </Link>
                </Col>

            </Row>

            <Row>

            </Row>


        </Container>
    )
}

export default FootprintPageMain