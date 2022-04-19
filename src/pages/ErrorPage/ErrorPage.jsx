import { Container } from "react-bootstrap"
import Mike from "./404.webp"

const ErrorPage = () => {
    return (
        <>
            <Container>
                <h3>Ooops! We couldn't find this route</h3>
                <img src={Mike}
                    style={{ height: '250px', width: '500px' }}
                    alt="mike wazowsky gif" />

            </Container>
        </>
    )
}

export default ErrorPage