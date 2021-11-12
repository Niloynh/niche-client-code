import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <>
            <Navbar  className="header-container" bg="light" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home"><img className="w-75" src="https://i.ibb.co/kc2PBCZ/header-logotype-autline-min.webp" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home" className="text-black fw-bold fs-6">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/contacts" className="text-black fw-bold fs-6">Contact</Nav.Link>

                        <Nav.Link as={HashLink} to="/explore" className="text-black fw-bold fs-6">Explore</Nav.Link>

                        {user?.email && <Nav.Link as={HashLink} to="/dashboard" className="text-black fw-bold fs-6">Dashboard</Nav.Link>}
                        
                        {user?.email ?
                            <Button onClick={logOut} variant="light" className="text-info signOut-btn"><FontAwesomeIcon icon={faSignOutAlt} /> Sign out</Button> 
                            :
                            <Nav.Link as={HashLink} to="/register" className="text-black fw-bold fs-6"><FontAwesomeIcon icon={faSignInAlt} /> Sign in</Nav.Link>}
                            <span className="fw-bold text-info">{user.displayName}</span>
                            {user.email && <img className="img-size mx-2" src={user.photoURL} alt="" />}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;