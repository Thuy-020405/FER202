import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AppNavbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) return null;

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
    
        <Navbar bg="white" expand="lg" className="border-bottom py-2 mb-4 shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center text-dark fw-bold">
                    <img
                        src="/images/logo.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                        style={{ borderRadius: '4px' }}
                        alt="Logo"
                    />
                    PersonalBudget
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="align-items-center">
                       
                        <Navbar.Text className="me-2 text-muted small">
                            Signed in as: <strong className="text-dark">{user.fullName || user.name}</strong>
                        </Navbar.Text>

                        <Button 
                            variant="outline-danger" 
                            size="sm" 
                            onClick={handleLogout}
                            style={{ paddingLeft: '15px', paddingRight: '15px' }}
                        >
                            Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;