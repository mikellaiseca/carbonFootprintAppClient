import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../components/LoginForm/LoginForm'

function LoginPage() {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <h1>Log-in</h1>
                    <hr />
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage