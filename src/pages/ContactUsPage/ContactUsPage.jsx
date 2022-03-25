import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'

const ContactUsPage = () => {
    return (
        <>
            <Container>
                <h1>Any doubts? We are here to help</h1>

                <Row className="justify-content-md-center">
                    <Col md={5}>
                        <p>We will get back to you as soon as possible</p>
                        <ContactForm />
                    </Col>
                </Row>


            </Container>
            <Footer />
        </>

    )
}

export default ContactUsPage