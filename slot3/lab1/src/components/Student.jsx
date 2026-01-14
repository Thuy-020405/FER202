import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { students } from '../data/StudentData'; // Đảm bảo chữ S hoa

function Student() {
    return (
        <Container className="mt-4">
            <Row>
                {students.map((item) => (
                    <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={item.avatar} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    ID: {item.id} <br/>
                                    Age: {item.age} - Grade: {item.grade}
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Student;