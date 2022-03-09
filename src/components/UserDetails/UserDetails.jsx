import usersService from '../../services/users.service'
import commentService from '../../services/comment.service'
import { useEffect, useState } from 'react'
import { Card, Form, Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'
import './UserDetails.css'
import CommentList from '../../components/CommentList/CommentList.jsx'
import Co2Carfootprint from "../Co2footprint/Co2Carfootprint"
import Co2Flightfootprint from '../Co2footprint/Co2Flightfootprint'

const UserDetails = () => {

    const [userDetails, setUserDetails] = useState([])
    console.log(userDetails)
    const [comment, setComment] = useState({
        author: "",
        profile: "",
        content: "",
        date: "",
    })

    const [loadingComment, setLoadingComment] = useState(false)

    const [commentsList, setCommentsList] = useState([])

    const navigate = useNavigate()

    const { user_id } = useParams()

    const { content } = comment

    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadUserDetails()
        loadUserComments()
    }, [])

    useEffect(() => {
        comment.content.length > 0 ? setLoadingComment(true) : setLoadingComment(false)
    }, [comment])

    const loadUserDetails = () => {
        usersService
            .getOneUser(user_id)
            .then(({ data }) => {
                setUserDetails(data)
            })
            .then()
            .catch(err => console.log(err))
    }

    const loadUserComments = () => {
        commentService
            .getUserProfileComments(user_id)
            .then(({ data }) => {
                setCommentsList(data)
            })
            .catch(err => console.log(err))
    }


    const handleInputChange = e => {

        const { name, value } = e.target
        setComment({
            ...comment,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        commentService
            .createComment({ content, author: user, profile: user_id, date: new Date })
            .then(() => {
                setLoadingComment(false)
                setComment({
                    author: "",
                    profile: "",
                    content: "",
                    date: "",
                })
                navigate(`/users/${user_id}`)
            })
            .catch(err => console.log(err))

    }

    const totalfootprint = (carFootprint, flightFootprint) => {

        const totalkgFootprint = carFootprint + flightFootprint

        console.log(totalkgFootprint)

        return totalkgFootprint

    }

    return (
        <>

            <Container className="user-section">

                <Container className='main-info'>
                    <Row className='profileAndComments'>

                        <Col>
                            <Card className="card" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={userDetails.profileImg} />
                                <Card.Body className="body">
                                    <Card.Title>{userDetails.username}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                    <Container className='user-footprints'>
                        {<Row className='profileAndComments'>
                            <h3>Car Footprints</h3>
                            <Co2Carfootprint profileId={userDetails._id} totalfootprint={totalfootprint} />
                        </Row>}

                        {<Row className='profileAndComments'>
                            <h3>Flight Footprints</h3>
                            <Co2Flightfootprint profileId={userDetails._id} totalfootprint={totalfootprint} />
                        </Row>}
                    </Container>
                </Container>

                <Row className='profileAndComments'>

                    {(user?._id !== user_id) ?
                        <Form onSubmit={handleSubmit}>

                            <Form.Group className="comment-box" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} name="content" placeholder="Leave your comment" value={content} onChange={handleInputChange} />
                            </Form.Group>
                            {loadingComment && <Button variant="primary" type="submit">Post</Button>}
                        </Form>

                        :

                        null

                    }

                </Row>

                <Row>
                    {commentsList?.map((comment, idx) => {
                        return <CommentList key={idx} commentId={comment} />
                    })}
                </Row>

            </Container>
        </>
    )
}

export default UserDetails