import { Container } from "react-bootstrap";
import UsersList from "../../components/UsersList/UsersList";
import '../../components/UsersList/UsersList.css'
import Footer from '../../components/Footer/Footer'

function UserListPage() {

    return (
        <>
            <Container className="users-list">
                <h2>Our Community</h2>
                <UsersList />
            </Container>

            <Footer />
        </>
    )
}

export default UserListPage