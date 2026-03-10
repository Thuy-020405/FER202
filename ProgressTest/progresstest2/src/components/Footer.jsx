import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-auto py-3 border-top bg-white">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Phần bên trái: Bản quyền */}
        <span className="text-muted small">
          © 2025 PersonalBudget Demo
        </span>

        {/* Phần bên phải: Công nghệ sử dụng */}
        <span className="text-muted small">
          Built with React, Redux Toolkit & JSON Server
        </span>
      </Container>
    </footer>
  );
};

export default Footer;