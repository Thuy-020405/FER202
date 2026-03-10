import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // 1. Kiểm tra để trống giống hình image_5fa5f5.png
        if (!username || !password) {
            setError("Username and password are required");
            return;
        }

        // 2. Kiểm tra độ dài mật khẩu giống hình image_5fa5bc.png
        if (password.length < 6) {
            setError("password_length");
            return;
        }

        try {
            const success = await login(username, password);
            if (success) {
                navigate('/home');
            } else {
                setError("Invalid username or password");
            }
        } catch (err) {
            setError("Server connection error!");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <Card className="p-4 shadow-sm border-0" style={{ width: '400px', borderRadius: '10px' }}>
                <h1 className="text-center mb-4 fw-bold">Login</h1>

                {/* Hiển thị Alert khi thiếu thông tin */}
                {error && error !== "password_length" && (
                    <Alert variant="danger" className="py-2 text-center small">
                        {error}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="bg-light border-0 py-2"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 text-start">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-light border-0 py-2"
                            /* Hiện đỏ nếu lỗi độ dài */
                            isInvalid={error === "password_length"}
                        />
                        {/* Thông báo lỗi dưới ô password */}
                        {error === "password_length" ? (
                            <Form.Control.Feedback type="invalid">
                                Password must be at least 6 characters
                            </Form.Control.Feedback>
                        ) : (
                            <small className="text-muted">(at least 6 characters)</small>
                        )}
                    </Form.Group>

                    <Row className="g-2">
                        <Col xs={7}>
                            <Button variant="primary" type="submit" className="w-100 py-2 fw-bold">
                                Login
                            </Button>
                        </Col>
                        <Col xs={5}>
                            <Button variant="secondary" className="w-100 py-2" onClick={() => { setUsername(''); setPassword(''); setError(''); }}>
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Login;