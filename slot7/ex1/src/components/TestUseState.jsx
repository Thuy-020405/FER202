import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function TestUseState() {
    // 1. State lưu trữ giá trị từ ô nhập liệu
    const [username, setUsername] = useState('Thuy');
    const [age, setAge] = useState(18);

    // 2. State lưu trữ thông báo hiển thị sau khi nhấn Submit
    const [message, setMessage] = useState('');

    // 3. Hàm xử lý khi nhấn nút Submit
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
                        {/* Gán sự kiện click gọi hàm handleSubmit */}
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>

                {/* Dòng 4: Hiển thị message khi đã nhấn Submit */}
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