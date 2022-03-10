import { Container, Row, Col, Button, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom";
import companyLogs from './images/company_logos.png'
import mobileImg from './images/mobile-img.png'
import codeGif from './images/code_gif.gif'
import niceRiver from './images/river_nice.jpg'
import mistForest from './images/forest_mist.jpg'
import waterfall from './images/waterfall.jpg'
import forest_lake from './images/forest_lake.jpg'
import './IndexPage.css'

const IndexPage = () => {
    return (

        <Container className="container-margin-bottom">

            <Row className="card block blockOne">

                <h1>You can make a difference, you can reduce your Co2 Footprint</h1>


            </Row>

            <Carousel className="carousel">
                <Carousel.Item className="carouselItem" interval={1500}>
                    <img
                        className="d-block w-100"
                        src={forest_lake}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p>.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={waterfall}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={mistForest}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row className="">

                <Col className="card col">
                    <h1>Live a low-carbon lifestyle </h1>
                </Col>

                <Col className="card col">
                    <h1>Check the latest news about Co2</h1>
                    <Link to='/news'>
                        <Button className="button">
                            News
                        </Button>
                    </Link>
                </Col>
            </Row>

            <Row className="card-block">

                <Col >
                    <img className="logo-images" src={companyLogs} />
                </Col>

                <Col >
                    <h2>Our partner companies</h2>
                    <p>More than 50 of the top tech-companies are already checking their Co2Footprint through our app!</p>
                </Col>

            </Row>
            <Row>
                <Row className="block text-align-left white-border">
                    <h3>Integrated Climate Action</h3>
                    <hr></hr>
                </Row>
                <Row className="block text-align-left">
                    <h2>We bring together everything that’s required to integrate climate into your customer experiences.</h2>
                </Row>
                <Row className="block">
                    <Col>
                        <Row className="happy-p">
                            <Col sm={12}>
                                <strong><p>😁 Happy Customers, Happy Planet</p></strong>
                                <p className="justify-content">We know that when you put customers at the center of climate action, the impact becomes greater. So we work with you to integrate climate into modern, market-leading customer experiences.</p>
                            </Col>
                            <Col sm={12}>
                                <strong><p>📂 Optimized</p></strong>
                                <p className="justify-content">Our RESTful API enables partners to optimize climate integrations, flexibility adjusting for any customer type, market, or compliance specification.</p>
                            </Col>
                            <Col sm={12}>
                                <strong><p>🌍Global</p></strong>
                                <p className="justify-content">Climate change is a global challenge. Our integrations support secure climate-oriented customer experiences in 40+ languages, all currencies and major payment methods, ensuring you can enable your customers wherever they are.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img className="mobile-image" src={mobileImg} />
                    </Col>
                    <Col sm={6}>
                        <img className="code-gif" src={codeGif} />
                    </Col>
                </Row>
            </Row>

        </Container >

    )
}

export default IndexPage