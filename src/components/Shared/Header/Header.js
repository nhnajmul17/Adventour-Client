import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg'
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"

                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand as={Link} to="/home" className='fw-bold'>Adventour</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#offers">Offers</Nav.Link>
                            {user?.email ? <Nav.Link as={Link} to="/mybookings">My Bookings</Nav.Link> : ''}
                            {user?.email ? <Nav.Link as={Link} to="/managebookings">Manage All Bookings</Nav.Link> : ''}
                            {user?.email ? <Nav.Link as={Link} to="/addoffer">Add a new Offer</Nav.Link> : ''}
                        </Nav>
                        <Nav>
                            {user?.email ? <p className='text-white me-5'>User Name: {user.displayName} </p> : ''} {' '}
                            {user?.email ? <button onClick={logOut} className='btn-danger rounded'>logout <FontAwesomeIcon icon={faSignOutAlt} className='text-dark' /></button> : <Nav.Link as={Link} to="login">  <button className='btn-danger rounded'>Login <FontAwesomeIcon icon={faSignInAlt} className='text-dark' /></button> </Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;