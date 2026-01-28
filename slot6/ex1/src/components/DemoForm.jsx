import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, InputGroup, Alert } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';

const DemoForm = () => {
    // 1. Quản lý state cho form [cite: 3, 8]
    const [formData, setFormData] = useState({
        hoTen: '',
        diaChi: '',
        diTu: 'Hà Nội',
        den: 'Hà Nội',
        chieuDi: []
    });
        // 2. Hàm xử lý thay đổi input
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const list = [...formData.chieuDi];
            if (checked) list.push(value);
            else list.splice(list.indexOf(value), 1);
            setFormData({ ...formData, chieuDi: list });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
    

    
        <Container className="mt-3" style={{ maxWidth: '600px', border: '1px solid #ccc', padding: '20px' }}>
            {/* Alert component trên cùng  */}
            <Alert variant="warning" dismissible className="text-end">
                <small>×</small>
            </Alert>

            {/* Tiêu đề H1  */}
            <h1 className="mb-4">Form đặt vé máy bay</h1>

            <Form>
                {/* Form-group: Họ tên (bao gồm Input Group: prepend, input, append)  */}
                <Form.Group className="mb-3">
                    <Form.Label>Họ tên</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><Person /></InputGroup.Text>
                        <Form.Control name="hoTen" placeholder="Họ tên" onChange={handleChange} />
                        <InputGroup.Text>vnđ</InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="text-muted">Phải nhập 5 ký tự, in hoa....</Form.Text>
                </Form.Group>

                {/* Form-group: Địa chỉ  */}
                <Form.Group className="mb-3">
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control name="diaChi" type="text" onChange={handleChange} />
                    <Form.Text className="text-muted">Phải nhập 5 ký tự, in hoa....</Form.Text>
                </Form.Group>

                {/* Grid hệ 12 cho Đi từ và Đến  */}
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Đi từ</Form.Label>
                            <Form.Select name="diTu" onChange={handleChange}>
                                <option>Hà Nội</option>
                                <option>Đà Nẵng</option>
                                <option>TP.HCM</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Đến</Form.Label>
                            <Form.Select name="den" onChange={handleChange}>
                                <option>Hà Nội</option>
                                <option>Đà Nẵng</option>
                                <option>TP.HCM</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Form-group: Checkbox  */}
                <Form.Group className="mb-3">
                    <Form.Label className="d-block">Chọn chiều đi (Khứ hồi)</Form.Label>
                    <Form.Check inline label="Đi" type="checkbox" value="Đi" onChange={handleChange} />
                    <Form.Check inline label="Về" type="checkbox" value="Về" onChange={handleChange} />
                </Form.Group>

                {/* Nút Submit  */}
                <Button variant="primary" type="submit" className="w-100">
                    Đặt vé
                </Button>
            </Form>
        </Container>
    );
};

export default DemoForm;