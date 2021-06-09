import React from 'react';
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import carlogo from '../assets/logo.png'
import './Nav.css'


function AppNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" className='Nav'>
                <Navbar.Brand> <Link to='/'><img src={carlogo} className='car-logos' alt='logo' /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/post-car">Post car</Nav.Link>
                        <Nav.Link href="/admin-dashboard">My Dashboard</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link to='/login'>
                            <Button variant="outline-dark" className='btn'>Login</Button>
                        </Link>
                        <Link to='/sign-up'>
                            <Button variant="outline-dark" className='btn'>Sign up</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;