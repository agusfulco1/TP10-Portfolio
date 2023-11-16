import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Styles/Layout.css"
export default function NavBar() {

    return (
        <>
            <div className='navbar'>
                <Navbar expand="lg" variant='light'>
                    <div className='container-fluid'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                                <Nav.Link as={Link} to="/creaciones">Creaciones</Nav.Link>
                                <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>
                                <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
            <Outlet />
        </>

    )
}