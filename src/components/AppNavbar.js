import React from 'react';
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
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
                        <div className='line'></div>
                        <Nav.Link href="/admin-dashboard">My Dashboard</Nav.Link>
                        <div className='line'></div>

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