import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import MessageModal from '../components/MessageModal';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); 

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmail = (v) => v.includes('@');

  const setFieldError = (name, msg) =>
    setErrors((prev) => {
      if (!msg) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [name]: msg };
    });

  const onIdentifierChange = (e) => {
    const v = e.target.value;
    setIdentifier(v);
    setAuthError(null);
    if (!v.trim()) {
      setFieldError('identifier', 'Username or Email is required.');
    } else if (isEmail(v) && !emailRe.test(v)) {
      setFieldError('identifier', 'Email is invalid format.');
    } else {
      setFieldError('identifier', null);
    }
  };

  const onPasswordChange = (e) => {
    const v = e.target.value;
    setPassword(v);
    setAuthError(null);
    if (!v.trim()) setFieldError('password', 'Password is required.');
    else setFieldError('password', null);
  };

  const validateForm = () => {
    const errs = {};
    if (!identifier.trim()) errs.identifier = 'Username or Email is required.';
    else if (isEmail(identifier) && !emailRe.test(identifier))
      errs.identifier = 'Email is invalid format.';
    if (!password.trim()) errs.password = 'Password is required.';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError(null);
    const errs = validateForm();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const res = await login(identifier.trim(), password);
    
    if (!res.ok) {
      setAuthError(res.message);
      return;
    }

    setLoggedInUser(res.account);
    setShowWelcome(true);
  };

  const handleContinue = () => {
    setShowWelcome(false);
    navigate('/accounts'); 
  };

  const handleCancel = () => {
    setIdentifier('');
    setPassword('');
    setErrors({});
    setAuthError(null);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="shadow">
            <Card.Header className="bg-white">
              <h3 className="text-center mb-0 py-2">Login</h3>
            </Card.Header>
            <Card.Body className="p-4">
              {authError && (
                <Alert variant="danger" dismissible onClose={() => setAuthError(null)}>
                  {authError}
                </Alert>
              )}
              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group controlId="identifier" className="mb-3">
                  <Form.Label>Username or email</Form.Label>
                  <Form.Control
                    type="text"
                    value={identifier}
                    onChange={onIdentifierChange}
                    isInvalid={!!errors.identifier}
                    placeholder="Enter username or email"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.identifier}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="password" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                    isInvalid={!!errors.password}
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex gap-2 mb-3">
                  <Button variant="primary" type="submit" className="flex-fill py-2">
                    Login
                  </Button>
                  <Button variant="secondary" type="button" className="flex-fill py-2" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>

                <div className="text-center">
                  <Link to="/signup" className="text-decoration-none">Don’t have an account? Sign up.</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <MessageModal
        show={showWelcome}
        handleClose={handleContinue}
        username={loggedInUser?.username}
      />
    </Container>
  );
}