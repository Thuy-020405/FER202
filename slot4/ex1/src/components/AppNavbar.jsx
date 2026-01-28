import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
// 1. Import Link từ react-router-dom
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="py-2">
      <Container>
        {/* 2. Sử dụng as={Link} và to="/" cho Logo để về trang chủ */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          Pizza House
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            {/* 3. Thay href bằng as={Link} và to="..." cho các mục menu */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="rounded-0 border-0" 
              aria-label="Search"
            />
            <Button 
              variant="danger" 
              className="rounded-0" 
            >
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AppNavbar;