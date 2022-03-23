import { Container } from 'react-bootstrap'
import News from "../../components/News/News"
import Footer from '../../components/Footer/Footer'

const NewsPage = () => {

    return (
        <>
            <Container>

                <News />

            </Container>
            <Footer />
        </>
    )

}

export default NewsPage