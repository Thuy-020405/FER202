import React, { useState } from 'react';
import { Card, Button, Badge, Modal } from 'react-bootstrap';

function PizzaCard({ pizza }) {
    // 1. Khai báo trạng thái để đóng/mở Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="h-100 border-0 shadow-sm">
                <Card.Img variant="top" src={pizza.image} alt={pizza.name} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{pizza.name}</Card.Title>
                    <Card.Text className="flex-grow-1 text-muted">
                        {pizza.description}
                    </Card.Text>
                    
                    <div className="mb-2">
                        {pizza.tags && pizza.tags.map((tag, index) => (
                            <Badge key={index} bg="warning" text="dark" className="me-1">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <div className="mb-3">
                        <span className="h5 text-danger fw-bold me-2">${pizza.price.toFixed(2)}</span>
                        {pizza.oldPrice && (
                            <span className="text-muted text-decoration-line-through">
                                ${pizza.oldPrice.toFixed(2)}
                            </span>
                        )}
                    </div>

                    <div className="d-flex gap-2">
                        {/* 2. Gán sự kiện handleShow vào nút View Details */}
                        <Button 
                            variant="outline-dark" 
                            className="flex-grow-1 rounded-0 fw-bold"
                            onClick={handleShow}
                        >
                            View Details
                        </Button>
                        <Button variant="dark" className="flex-grow-1 rounded-0 fw-bold btn-buy">
                            Buy
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            {/* 3. Thành phần Modal hiển thị chi tiết */}
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={pizza.image} alt={pizza.name} className="img-fluid rounded shadow-sm" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="text-danger fw-bold">${pizza.price.toFixed(2)}</h4>
                            <p className="mt-3"><strong>Description:</strong> {pizza.description}</p>
                            <p><strong>Ingredients:</strong> Fresh flour, tomato sauce, mozzarella cheese, and premium toppings.</p>
                            <div className="mt-4">
                                <h6>Available Tags:</h6>
                                {pizza.tags && pizza.tags.map((tag, index) => (
                                    <Badge key={index} bg="info" className="me-1 px-3 py-2">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className="rounded-0">
                        Close
                    </Button>
                    <Button variant="dark" onClick={handleClose} className="rounded-0">
                        Add to Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PizzaCard;