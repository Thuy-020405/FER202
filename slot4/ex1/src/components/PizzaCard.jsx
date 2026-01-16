// PizzaCard.jsx dùng để tạo 1 thẻ hiển thị thông tin pizza gồm: id, hình ảnh, tên pizza, price, oldPrice, mô tả, tag và nút đặt hàng
import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

function PizzaCard({ pizza }) {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={pizza.image} alt={pizza.name} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text className="flex-grow-1">{pizza.description}</Card.Text>
                
                <div className="mb-2">
                    {pizza.tags && pizza.tags.map((tag, index) => (
                        <Badge key={index} bg="info" className="me-1">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="mb-3">
                    <span className="h5 text-danger me-2">${pizza.price.toFixed(2)}</span>
                    {pizza.oldPrice && (
                        <span className="text-muted text-decoration-line-through">
                            ${pizza.oldPrice.toFixed(2)}
                        </span>
                    )}
                </div>

                <Button variant="primary">Order Now</Button>
            </Card.Body>
        </Card>
    );
}

export default PizzaCard;