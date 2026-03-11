import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 

function NavBarPizza() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-4 shadow">  
            <Container>
                {/* Logo ứng dụng - Click vào sẽ về trang chủ */}
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        src="images/pizza1.jpg" 
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                        alt="Pizza logo"
                        style={{ borderRadius: '50%' }}
                    />
                    Pizza Order App
                </Navbar.Brand>

                {/* Nút toggle khi thu nhỏ màn hình (mobile) */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />  

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" end>
                            Home
                        </Nav.Link>
                        
                        <Nav.Link as={NavLink} to="/news">
                            News
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/quiz">
                            Quiz
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/register">
                            Đăng Ký Form
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/contact">
                            ContactS
                        </Nav.Link>
                        
                        <Nav.Link as={NavLink} to="/users">
                            Users
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/posts">
                            Posts
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>  
            </Container>
        </Navbar>
    );
}   

export default NavBarPizza;