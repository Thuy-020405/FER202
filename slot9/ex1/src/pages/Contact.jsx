import React, { useReducer, useState } from 'react';
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { formReducer, initialFormState } from '../reducers/formReducer';
import { SharedModal, SharedToast } from '../components/SharedComponents';

const Contact = () => {
    const [state, dispatch] = useReducer(formReducer, initialFormState);
    const [validated, setValidated] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        dispatch({
            type: 'UPDATE_FIELD',
            field: name,
            value: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Khi validate thành công
            setShowModal(true);
            setShowToast(true);
        }
        setValidated(true);
    };

    return (
        <Container className="mt-4">
            <h2 className="text-danger fw-bold mb-4">CONTACT FORM</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="shadow p-4 bg-white rounded">
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>First name</Form.Label>
                        <Form.Control required type="text" name="firstName" placeholder="Mark" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control required type="text" name="lastName" placeholder="Otto" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control required type="text" name="username" placeholder="Username" onChange={handleChange} />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>City</Form.Label>
                        <Form.Control required type="text" name="city" placeholder="City" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                        <Form.Label>State</Form.Label>
                        <Form.Control required type="text" name="state" placeholder="State" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control required type="text" name="zip" placeholder="Zip" onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check required name="agree" label="Agree to terms and conditions" onChange={handleChange} feedback="Bạn phải đồng ý trước khi gửi." feedbackType="invalid" />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>

            {/* Modal hiển thị thông tin đã đăng ký */}
            <SharedModal 
                show={showModal} 
                handleClose={() => setShowModal(false)} 
                title="Đăng ký thành công!" 
                body={
                    <div>
                        <p><strong>Họ tên:</strong> {state.firstName} {state.lastName}</p>
                        <p><strong>Username:</strong> @{state.username}</p>
                        <p><strong>Địa chỉ:</strong> {state.city}, {state.state}</p>
                    </div>
                } 
            />

            {/* Toast thông báo */}
            <SharedToast 
                show={showToast} 
                onClose={() => setShowToast(false)} 
                message="Dữ liệu của bạn đã được gửi thành công!" 
            />
        </Container>
    );
};

export default Contact;