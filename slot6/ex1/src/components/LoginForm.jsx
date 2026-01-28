import React from 'react';
import { Form, Button, Card, Container, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Person, Lock } from 'react-bootstrap-icons';

const LoginForm = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/manage'); 
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card className="shadow-lg border-0 p-4" style={{ width: '400px', borderRadius: '24px' }}>
        <Card.Body>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Welcome Back</h2>
            <p className="text-muted small">Please enter your credentials to access the dashboard</p>
          </div>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Username</Form.Label>
              <InputGroup className="bg-light rounded-3">
                <InputGroup.Text className="bg-transparent border-0"><Person /></InputGroup.Text>
                <Form.Control className="bg-transparent border-0" placeholder="Enter username" />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="small fw-bold">Password</Form.Label>
              <InputGroup className="bg-light rounded-3">
                <InputGroup.Text className="bg-transparent border-0"><Lock /></InputGroup.Text>
                <Form.Control type="password" className="bg-transparent border-0" placeholder="Enter password" />
              </InputGroup>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 py-2 fw-bold shadow-sm mb-2" style={{ borderRadius: '12px' }}>Login</Button>
            <Button variant="outline-light" className="w-100 py-2 text-dark border shadow-sm" style={{ borderRadius: '12px' }} onClick={() => navigate('/')}>Cancel</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginForm;