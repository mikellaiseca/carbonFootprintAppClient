import { Container } from "react-bootstrap";
import UserDetails from "../../components/UserDetails/UserDetails";
import Footer from '../../components/Footer/Footer'


function UserDetailsPage() {

    return (
        <>
            <Container>
                <UserDetails />
            </Container>
            <Footer />
        </>
    )
}

export default UserDetailsPage