import { Container } from "react-bootstrap";
import UsersList from "../../components/UsersList/UsersList";

function UserListPage() {

    return (
        <Container className="users-list">
            <h2>Our Community</h2>
            <UsersList />
        </Container>
    )
}

export default UserListPage