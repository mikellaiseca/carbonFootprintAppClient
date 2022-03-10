import APIHandler from "../../services/news.service"
import { useState, useEffect } from "react"
import { Card, Button, Container, Row, Col, Spinner } from 'react-bootstrap'
import './NewsPage.css'
import Footer from '../../components/Footer/Footer'



const NewsPage = () => {

    const newsAPI = new APIHandler

    const [news, setNews] = useState([])


    useEffect(() => {
        loadNews()
    }, [])

    const loadNews = () => {
        newsAPI
            .getFullListNews()
            .then(response =>
                setNews(response.data.articles))
            .catch(err => console.log(err))
    }


    return !news ? (<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>) : (
        <>
            <Container className="news-section">

                <h2>Latest news</h2>
                <Row xs={1} md={5} className="g-4">
                    {news.map((elm, i) => {
                        return (
                            <Col className="card-news " key={i}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img className="news-img" variant="top" src={elm.urlToImage} />
                                    <Card.Body className="body">
                                        <Card.Title>{elm.title}</Card.Title>
                                        <Card.Text className="text">
                                            {elm.description}
                                        </Card.Text>

                                        <Button className="button-sm-sm" role='link' href={elm.url} as='a' target="_blank"
                                            variant="primary">Continue reading</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                        )

                    })

                    }
                </Row>

            </Container>
            <Footer />
        </>
    )
}

export default NewsPage