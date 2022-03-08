import APIHandler from "../../services/news.service"
import { useState, useEffect, useContext } from "react"
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './NewsPage.css'


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


    return !news ? (<h1>Cargando</h1>) : (
        <>
            <Container className="news-section">
                <Row xs={1} md={3} className="g-4">
                    {news.map((elm, i) => {
                        return (
                            <Col key={i}>
                                <Card className="card" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={elm.urlToImage} />
                                    <Card.Body className="body">
                                        <Card.Title>{elm.title}</Card.Title>
                                        <Card.Text className="text">
                                            {elm.description}
                                        </Card.Text>

                                        <Button role='link' href={elm.url} as='a' target="_blank"
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

export default NewsPage