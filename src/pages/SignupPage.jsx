import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../components/SignupForm/SignupForm'
import Footer from '../components/Footer/Footer'


function SignupPage() {

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <h1>Sign up</h1>
                        <hr />
                        <SignupForm />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default SignupPage