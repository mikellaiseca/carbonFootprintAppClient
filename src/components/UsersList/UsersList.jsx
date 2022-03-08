import usersService from '../../services/users.service'
import { useEffect, useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const UsersList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {
        usersService
            .getAllUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))

    }
    return (
        <>

            <Container className="users-section">
                <Row xs={1} md={3} className="g-4">
                    {users.map((elm, i) => {
                        return (
                            <Col key={i}>
                                <Card className="card" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={elm.profileImg} />
                                    <Card.Body className="body">
                                        <Card.Title>{elm.username}</Card.Title>
                                        <Link to={`/users/${elm._id}`}>
                                            <Button
                                                variant="primary">Check the user!</Button>
                                        </Link>
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

export default UsersList