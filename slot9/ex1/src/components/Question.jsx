import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Question = ({ data, onAnswer }) => (
    <Card className="border-0 shadow p-3 mb-5 bg-white rounded">
        <Card.Body>
            <Card.Title className="text-center mb-4 fs-3 fw-bold text-dark">
                {data.question}
            </Card.Title>
            <Row className="g-3">
                {data.options.map((option, index) => (
                    <Col xs={12} key={index}>
                        <Button 
                            variant="outline-warning" 
                            className="w-100 text-dark text-start p-3 fs-5 fw-semibold border-2 hover-shadow"
                            onClick={() => onAnswer(option)}
                        >
                            <span className="me-3 text-danger">{String.fromCharCode(65 + index)}.</span>
                            {option}
                        </Button>
                    </Col>
                ))}
            </Row>
        </Card.Body>
    </Card>
);

export default Question;