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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={waterfall}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={mistForest}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row className="">

                <Col className="card col">
                    <h2>Live a low-carbon lifestyle </h2>
                </Col>

                <Col className="card col">
                    <h2>Check the latest news about Co2</h2>
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
                <Row className="block text-align-left">
                    <h3>Integrated Climate Action</h3>
                </Row>
                <Row className="block text-align-left">
                    <h2>We bring together everything that’s required to integrate climate into your customer experiences.</h2>
                </Row>
                <Row className="block">
                    <Col>
                        <Row>
                            <Col sm={12}>
                                I occupy 12
                            </Col>
                            <Col sm={12}>
                                I occupy 12
                            </Col>
                            <Col sm={12}>
                                I occupy 12
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