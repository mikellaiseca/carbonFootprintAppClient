import { useContext } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import { AuthContext } from './../../context/auth.context'
import { useParams } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  const { user_id } = useParams()

  return (

    <Navbar className='full-navbar' bg="light" expand="lg">
      <Container>
        <NavLink className="navbar-links" to='/'>
          <Navbar.Brand as="span">Co2</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
            <NavLink className="navbar-links" to='/news'>
              <Nav.Link as='span'>News</Nav.Link>
            </NavLink>

            {
              !isLoggedIn ?
                <>
                  <Nav className='ms-auto'>
                    <NavLink className="navbar-links" to="/sign-up">
                      <Nav.Link as="span">Sign up</Nav.Link>
                    </NavLink>
                    <NavLink className="navbar-links" to="/log-in">
                      <Nav.Link as="span">Log in</Nav.Link>
                    </NavLink>
                  </Nav>
                </>
                :
                <>
                  <NavLink className="navbar-links" to="/car-form">
                    <Nav.Link as="span">Footprint Calculator</Nav.Link>
                  </NavLink>
                  <NavLink className="navbar-links" to="/users">
                    <Nav.Link as="span">Our Community</Nav.Link>
                  </NavLink>
                  <Nav className='ms-auto'>
                    <NavLink className="navbar-links" to={`/users/${user?._id}`}>
                      <Nav.Link as="span">¡Hi, {user?.username}!</Nav.Link>
                    </NavLink>
                    <Nav.Link className='log-out' as="span" onClick={logOutUser}>Logout</Nav.Link>
                  </Nav>
                </>
            }
            <NavLink className="navbar-links" to='/contact-us'>
              <Nav.Link as='span'>Contact Us</Nav.Link>
            </NavLink>

          </Nav >
        </Navbar.Collapse >
      </Container >
    </Navbar >
  )
}

export default Navigation