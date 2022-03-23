import APIHandler from "../../services/news.service"
import { useState, useEffect } from "react"
import { Card, Button, Container, Row, Col, Spinner } from 'react-bootstrap'
import './News.css'

const News = () => {

    const newsAPI = new APIHandler

    const [news, setNews] = useState([])


    useEffect(() => {
        loadNews()
    }, [])

    const loadNews = () => {
        newsAPI
            .getFullListNews()
            .then(response =>
                setNews(response.data.data))
            .catch(err => console.log(err))
    }


    return !news ? (<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>) : (
        <>
            <Container className="news-section">

                <h2>Latest news</h2>
                <Row className="g-4">
                    {news.map((elm, i) => {
                        return (
                            <Col className="card-news " key={i}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img className="news-img" variant="top" src={elm.image} />
                                    <Card.Body className="body">
                                        <Card.Title>{elm.title}</Card.Title>
                                        <Card.Text>Source: {elm.source}</Card.Text>
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
        </>
    )

}

export default News