import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Styles/Layout.css"
import Badge from '@mui/material/Badge';
import {favoritoContext} from '../Contexts/favoritoContext'
import { useContext } from 'react';
export default function NavBar() {

    const objetoContext = useContext(favoritoContext)
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
                                <Nav.Link as={Link} to="/favoritos"><Badge badgeContent={objetoContext.favorito.length} color="primary">Favoritos</Badge></Nav.Link>
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