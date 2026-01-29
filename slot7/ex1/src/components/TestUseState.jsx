import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function TestUseState() {
   
    const [username, setUsername] = useState('Thuy');
    const [age, setAge] = useState(18);

    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        setMessage(`Hello, ${username}. You are ${age} years old.`);
    };

    return (
        <div className="mt-4">
            <Container>
                <h2 className="mb-4">Test useState Hook</h2>
                
                {/* Dòng 1: Nhập Username */}
                <Row className="mb-3">
                    <Col md={2}>
                        <label htmlFor="username" className="form-label">Username:</label>
                    </Col>
                    <Col md={4}>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Col>
                </Row>

                {/* Dòng 2: Nhập Age */}
                <Row className="mb-3">
                    <Col md={2}>
                        <label htmlFor="age" className="form-label">Age:</label>
                    </Col>
                    <Col md={4}>
                        <input
                            type="number"
                            id="age"
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </Col>
                </Row>

                {/* Dòng 3: Nút bấm Submit */}
                <Row className="mb-3">
                    <Col md={6}>
                
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>

             
                {message && (
                    <Row className="mt-3">
                        <Col md={6}>
                            <div className="alert alert-info">
                                {message}
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default TestUseState;