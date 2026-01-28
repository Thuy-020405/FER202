import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm sticky-top">
    <Container>
      <Navbar.Brand as={NavLink} to="/" className="fw-bold">USER SYSTEM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/" end>Đặt Vé</Nav.Link>
          <Nav.Link as={NavLink} to="/manage">Quản Lý</Nav.Link>
          <Nav.Link as={NavLink} to="/login">Đăng Nhập</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;