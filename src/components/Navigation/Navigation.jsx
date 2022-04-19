import { useContext } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import { AuthContext } from './../../context/auth.context'
import './Navigation.css'
import logo from './logo.png'

const Navigation = () => {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

  return (

    <Navbar className='full-navbar' bg="light" expand="lg">
      <Container>
        <NavLink className="navbar-links" to='/'>
          <img className='logo-app-nav'
            src={logo}
            alt="web page logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
            <NavLink className="navbar-links" to='/news'>
              <Nav.Link className='links-navbar' as='span'>News</Nav.Link>
            </NavLink>

            {
              !isLoggedIn ?
                <>
                  <Nav className='ms-auto'>
                    <NavLink className="navbar-links" to="/sign-up">
                      <Nav.Link className='links-navbar' as="span">Sign up</Nav.Link>
                    </NavLink>
                    <NavLink className="navbar-links" to="/log-in">
                      <Nav.Link className='links-navbar' as="span">Log in</Nav.Link>
                    </NavLink>
                  </Nav>
                </>
                :
                <>
                  <NavLink className="navbar-links" to="/footprint-form">
                    <Nav.Link className='links-navbar' as="span">Footprint Calculator</Nav.Link>
                  </NavLink>
                  <NavLink className="navbar-links" to="/users">
                    <Nav.Link className='links-navbar' as="span">Our Community</Nav.Link>
                  </NavLink>
                  <Nav className='ms-auto'>
                    <NavLink className="navbar-links" to={`/users/${user?._id}`}>
                      <Nav.Link className='links-navbar' as="span">¡Hi, {user?.username}!</Nav.Link>
                    </NavLink>
                    <Nav.Link className='links-navbar log-out' as="span" onClick={logOutUser}>Logout</Nav.Link>
                  </Nav>
                </>
            }
            <NavLink className="navbar-links" to='/contact-us'>
              <Nav.Link className='links-navbar' as='span'>Contact Us</Nav.Link>
            </NavLink>

          </Nav >
        </Navbar.Collapse >
      </Container >
    </Navbar >
  )
}

export default Navigation