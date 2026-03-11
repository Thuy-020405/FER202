import React, { useState } from 'react';
import { Form, Button, Alert, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Vui lòng nhập đầy đủ tài khoản và mật khẩu');
      return;
    }

    const result = await login(username, password);

    if (result.success) {
      navigate('/movies');
    } else {
      setError(result.message);
    }
  };

  return (
    <div style={styles.background}>
      {/* Lớp phủ tối để text dễ đọc hơn trên nền ảnh movie1.jpg */}
      <div style={styles.overlay}></div>

      <Container className="d-flex justify-content-center align-items-center" style={{ zIndex: 2 }}>
        <Card style={styles.card} className="shadow-lg border-0">
          <Card.Body className="p-4">
            <h2 className="text-center mb-1 fw-bold" style={styles.title}>
              MOVIE SYSTEM
            </h2>
            <p className="text-center mb-4 text-light small opacity-75">
              Quản lý điện ảnh chuyên nghiệp
            </p>

            {error && <Alert variant="danger" className="py-2 small text-center">{error}</Alert>}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="text-light small fw-bold">TÀI KHOẢN</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={styles.input}
                  isInvalid={validated && !username}
                />
                <Form.Control.Feedback type="invalid">
                  Không được để trống
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="text-light small fw-bold">MẬT KHẨU</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={styles.input}
                  isInvalid={validated && !password}
                />
                <Form.Control.Feedback type="invalid">
                  Không được để trống
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" style={styles.button} className="w-100 fw-bold border-0 shadow">
                ĐĂNG NHẬP
              </Button>
            </Form>

            <div className="mt-4 text-center">
              <small style={{ color: 'rgba(255,255,255,0.5)' }}>
                &copy; 2026 Admin Control Panel
              </small>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

const styles = {
  background: {
    height: '100vh',
    width: '100vw',
    backgroundImage: "url('/images/movie2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    margin: 0,
    padding: 0
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)', 
    zIndex: 1
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    padding: '2rem',
    borderRadius: '15px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 2,
    color: '#fff'
  },
  title: {
    color: '#17a5d0ff', 
    fontWeight: 'bold',
    letterSpacing: '2px',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#17a5d0ff', 
    border: 'none',
    padding: '10px',
    fontWeight: 'bold',
    marginTop: '1rem'
  }
};

export default Login;