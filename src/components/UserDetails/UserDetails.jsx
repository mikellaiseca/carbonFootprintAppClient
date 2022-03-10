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
import GraphicsUser from '../GraphicsUser/GraphicsUser'
import footprintServiceBack from '../../services/footprintBack.service'


const UserDetails = () => {

    const [userDetails, setUserDetails] = useState([])
    const [comment, setComment] = useState({
        author: "",
        profile: "",
        content: "",
        date: "",
    })

    const [loadingComment, setLoadingComment] = useState(false)

    const [commentsList, setCommentsList] = useState([])

    const [carFootprints, setCarFootprint] = useState([])
    console.log(carFootprints)
    const [totalCarFootprints, setTotalCarFootprint] = useState([])

    const [flightFootprints, setFlightFootprint] = useState([])
    const [totalFlightFootprints, setTotalFlightFootprint] = useState([])

    const navigate = useNavigate()

    const { user_id } = useParams()

    const { content } = comment

    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadUserDetails()
        loadUserComments()
    }, [])

    useEffect(() => {
        userDetails._id && loadCarfootprints()
        userDetails._id && loadFlightfootprints()
    }, [userDetails])

    const loadCarfootprints = () => {
        footprintServiceBack
            .getCarCustomFootprint(userDetails._id)
            .then(({ data }) => {
                let total = data.reduce((acc, elm) => acc + elm.carbon_kg, 0)
                setCarFootprint(data)
                setTotalCarFootprint(total)
            })
            .catch(err => console.log(err))
    }

    const loadFlightfootprints = () => {
        footprintServiceBack
            .getFlightCustomFootprint(userDetails._id)
            .then(({ data }) => {
                let total = data.reduce((acc, elm) => acc + elm.carbon_kg, 0)
                setFlightFootprint(data)
                setTotalFlightFootprint(total)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        comment.content.length > 0 ? setLoadingComment(true) : setLoadingComment(false)
    }, [comment])

    const loadUserDetails = () => {
        usersService
            .getOneUser(user_id)
            .then(({ data }) => setUserDetails(data))
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

    return (
        <>

            <Container className="user-section">

                <h2>Welcome {userDetails.username}!</h2>

                <Row>

                    <Col className='profileAndComments' >
                        <Card className="profile-card" style={{ width: '18rem' }}>
                            <Card.Img className='profile-image' variant="top" src={userDetails.profileImg} />
                        </Card>
                        {(user?._id !== user_id) ?
                            <Form onSubmit={handleSubmit}>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control className="comment-box" as="textarea" rows={3} name="content" placeholder="Leave your comment" value={content} onChange={handleInputChange} />
                                </Form.Group>
                                {loadingComment && <Button variant="primary" type="submit" className='comment-button'>Post</Button>}
                            </Form>

                            :

                            null

                        }
                        {commentsList?.map((comment, idx) => {
                            return <CommentList key={idx} commentId={comment} />
                        })}
                    </Col>

                    <Col sm={8}>
                        <GraphicsUser totalCarFootprints={totalCarFootprints} totalFlightFootprints={totalFlightFootprints} />
                        <Row>
                            {<Col className='profileAndComments'>

                                <Co2Carfootprint carFootprints={carFootprints} profileId={userDetails._id} />
                            </Col>}

                            {<Col className='profileAndComments'>

                                <Co2Flightfootprint flightFootprints={flightFootprints} profileId={userDetails._id} />
                            </Col>}
                        </Row>
                    </Col>

                </Row>



            </Container>
        </>
    )
}

export default UserDetails