import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext'; 
import MessageModal from './MessageModal'; 

function LoginForm() {
  const [identifier, setIdentifier] = useState(''); 
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); 
  const [serverError, setServerError] = useState(''); 
  const [showModal, setShowModal] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const { dispatch } = useContext(AuthContext); 
  const navigate = useNavigate();

  
  const handleLogin = async (e) => {
    e.preventDefault();
    setServerError('');
    let vErrors = {};

    if (!identifier) vErrors.identifier = "Username or Email is required.";
    if (!password) vErrors.password = "Password is required.";

    if (Object.keys(vErrors).length > 0) {
      setErrors(vErrors);
      return;
    }

    try {
      
      const response = await axios.get('http://localhost:3001/accounts');
      const accounts = response.data;

      
      const user = accounts.find(
        (u) => (u.username === identifier || u.email === identifier) && u.password === password
      );

  
      if (!user) {
        setServerError("Invalid username/email or password!");
      } else if (user.role !== 'admin') {
        setServerError("Access denied. Only admin users can log in.");
      } else if (user.status === 'locked') {
        setServerError("Account is locked. Please contact admin.");
      } else {
        // ĐĂNG NHẬP THÀNH CÔNG
        setLoggedInUser(user);
        
        // Cập nhật AuthContext
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        
        // Hiển thị Modal chào mừng
        setShowModal(true);
      }
    } catch (err) {
      setServerError("Could not connect to the server. Please check json-server.");
    }
  };

  // 3. Hàm xử lý khi nhấn "Continue" trên Modal
  const handleContinue = () => {
    setShowModal(false); // Đóng modal trước
    navigate('/accounts'); // Chuyển sang trang danh sách tài khoản
  };
  
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={5}>
          <Card className="shadow-sm">
            <Card.Header className="bg-white border-0">
              <h3 className="text-center mt-3">Login</h3>
            </Card.Header>
            <Card.Body className="px-4">
              {serverError && (
                <Alert variant="danger" dismissible onClose={() => setServerError('')}>
                  {serverError}
                </Alert>
              )}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="identifier">
                  <Form.Label>Username or email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username or email"
                    isInvalid={!!errors.identifier}
                    value={identifier}
                    onChange={(e) => {
                        setIdentifier(e.target.value);
                        setErrors({...errors, identifier: ''});
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.identifier}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    isInvalid={!!errors.password}
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setErrors({...errors, password: ''});
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex gap-2 mb-3">
                  <Button variant="primary" type="submit" className="flex-fill py-2">
                    Login
                  </Button>
                  <Button variant="secondary" type="button" className="flex-fill py-2" onClick={() => {setIdentifier(''); setPassword('');}}>
                    Cancel
                  </Button>
                </div>
              </Form>

              <div className="text-center">
                <p className="small mb-0">
                  Don't have an account? <a href="#signup" className="text-decoration-none">Sign up</a>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <MessageModal 
        show={showModal} 
        handleClose={handleContinue} 
        username={loggedInUser?.username} 
      />
    </Container>
  );
}

export default LoginForm;