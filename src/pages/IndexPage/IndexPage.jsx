import { Container, Row, Col, Button, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom";
import companyLogs from './images/company_logos.png'
import mobileImg from './images/mobile-img.png'
import codeGif from './images/code_gif.gif'
import flight from './images/flighthub3.jpeg'
import highway from './images/highway.jpeg'
import shipping from './images/shipping.jpeg'
import Footer from '../../components/Footer/Footer'

import './IndexPage.css'

const IndexPage = () => {
    return (
        <>
            <Container className="container-margin-bottom">

                <Carousel className="carousel">
                    <Carousel.Item className="carouselItem" interval={4000}>
                        <Link to='/car-form'>
                            <img
                                className="d-block w-100"
                                src={highway}
                                alt="First slide"
                            />
                            <Carousel.Caption className="carousel-caption">
                                <h3>Calculate your car CO<sub>2</sub> Footprint</h3>
                                <p>Petrol and diesel cars are known to be big contributors to greenhouse gas emissions</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <Link to='/flight-form'>
                            <img
                                className="d-block w-100"
                                src={flight}
                                alt="Second slide"
                            />
                            <Carousel.Caption className="carousel-caption">
                                <h3>Calculate your flights' CO<sub>2</sub> Footprint</h3>
                                <p>Aviation accounts for around 2.5% of global CO<sub>2</sub> emissions</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <Link to='/shipping-form'>
                            <img
                                className="d-block w-100"
                                src={shipping}
                                alt="Third slide"
                            />
                            <Carousel.Caption className="carousel-caption">
                                <h3>Calculate your shipment's CO<sub>2</sub> Footprint</h3>
                                <p>The shipping industry is responsible for around 940 million tonnes of CO<sub>2</sub> annually</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                </Carousel>

                <Row className="">
                    <Col className="card col">
                        <h1>Check the latest news about CO<sub>2</sub></h1>
                        <Link to='/news'>
                            <Button className="button" variant="dark">
                                News
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Row className="card-block">
                    <Col >
                        <img className="logo-images"
                            src={companyLogs}
                            alt="company logos"
                        />
                    </Col>
                    <Col >
                        <h2>Our partner companies</h2>
                        <p>More than 50 of the top tech-companies are already checking their Co2Footprint through our app!</p>
                    </Col>
                </Row>

                <Row>
                    <Row className="block text-align-left">
                        <h3>Integrated Climate Action</h3>
                        <hr></hr>
                    </Row>
                    <Row className="block text-align-left">
                        <h2>We bring together everything that???s required to integrate climate into your customer experiences.</h2>
                    </Row>
                    <Row className="block">
                        <Col>
                            <Row className="happy-p">
                                <Col sm={12}>
                                    <strong><p>???? Optimized</p></strong>
                                    <p className="justify-content">Our RESTful API enables partners to optimize climate integrations, flexibility adjusting for any customer type, market, or compliance specification.</p>
                                </Col>
                                <Col sm={12}>
                                    <strong><p>????Global</p></strong>
                                    <p className="justify-content">Climate change is a global challenge. Our integrations support secure climate-oriented customer experiences in 40+ languages, all currencies and major payment methods, ensuring you can enable your customers wherever they are.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <img className="mobile-image"
                                src={mobileImg}
                                alt="mobile" />
                        </Col>
                        <Col sm={6}>
                            <img className="code-gif"
                                src={codeGif}
                                alt="codeGif" />
                        </Col>
                    </Row>
                </Row>

            </Container >

            <Footer />
        </>

    )
}

export default IndexPage