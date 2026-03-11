import React, { useReducer } from 'react';
import { Form, Button, Alert, Card, Spinner, Row, Col } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const LoginForm = () => {
    const { login, user, logout, loading, error } = useAuth();
    const [fields, setFields] = useReducer((s, a) => ({...s, [a.f]: a.v}), { email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(fields.email, fields.password);
    };

    if (user) {
        return (
            <div className="d-flex justify-content-center">
                <Card className="p-4 shadow-sm text-center" style={{ width: '400px', borderRadius: '15px' }}>
                    <h3>Chào mừng, {user.username || user.email}!</h3>
                    <p className="text-muted">Bạn đã đăng nhập thành công.</p>
                    <Button variant="primary" onClick={logout}>Đăng xuất</Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-center">
            <Card className="p-5 shadow border-0" style={{ width: '450px', borderRadius: '20px' }}>
                <Card.Body>
                    <h1 className="text-center mb-4" style={{ fontWeight: '400' }}>Login</h1>
                    
                    {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}
                    
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-muted">Email / Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Nhập username hoặc email" 
                                className="py-2"
                                onChange={e => setFields({f: 'email', v: e.target.value})}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="text-muted">Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Nhập password" 
                                className="py-2"
                                onChange={e => setFields({f: 'password', v: e.target.value})}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 py-2 shadow-sm" disabled={loading}>
                            {loading ? <Spinner size="sm" /> : 'Đăng nhập'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LoginForm;