import usersService from '../../services/users.service'
import { useEffect, useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './UsersList.css'

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
                <Row xs={1} md={5} className="g-4">
                    {users.map((elm, i) => {
                        return (
                            <Col className='users-list' key={i}>
                                <Card className="card" style={{ width: '18rem' }}>
                                    <Card.Img className='profile-image' variant="top" src={elm.profileImg} />
                                    <Card.Body className="body">
                                        <Card.Title>{elm.username}</Card.Title>
                                        <Link to={`/users/${elm._id}`}>
                                            <Button
                                                className='button-sm' variant="primary">Check the user!</Button>
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