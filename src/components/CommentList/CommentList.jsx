import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import commentService from "../../services/comment.service"
import usersService from "../../services/users.service"

const CommentList = (commentId) => {

    const { user } = useContext(AuthContext)

    const commentInfo = commentId.commentId

    const deleteComment = () => {

        usersService.pullComment(commentInfo._id, user._id)
            .then(() => {
                return commentService.deleteComment(commentInfo._id)
            })
            .then(() => console.log('comentario eliminado'))
            .catch(err => console.log(err))
    }
    return (
        <>
            <Card className='comments-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{commentInfo.author?.username}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{commentInfo.date}</Card.Subtitle>
                    <p>{commentInfo.content}</p>
                    {(user._id === commentInfo.profile._id) ? (<Button variant="primary" type="submit" onClick={deleteComment}>Delete</Button>) : null}
                </Card.Body>
            </Card>
        </>
    )
}

export default CommentList