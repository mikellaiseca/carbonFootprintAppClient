import axios from "axios";

class CommentService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_SERVER}` })
    }

    createComment(comment) {
        return this.api.post('/create-comment', comment)
    }

    deleteComment(id) {
        return this.api.delete(`/delete-comment/${id}`)
    }

    getUserComments(id) {
        return this.api.get(`/comments/${id}`)
    }

    getUserProfileComments(id) {
        return this.api.get(`/comments/profile/${id}`)
    }

}

const commentService = new CommentService()

export default commentService