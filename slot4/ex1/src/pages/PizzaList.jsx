// PizzaList.jsx dùng để hiển thị danh sách các pizza, dữ liệu của các p
import React from 'react';
import PizzaCard from '../components/PizzaCard';
import { pizzaList as pizzaLists } from '../data/pizzaList'; // Import và đổi tên để khớp với hình ảnh
import { Container, Row, Col } from 'react-bootstrap';

function PizzaList() {
    {/* Sử dụng hàm map để lặp qua mảng pizzaLists, dữ liệu được chứa */}
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Pizza Menu</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {pizzaLists.map((pizza) => (
                    <Col key={pizza.id} className="d-flex">
                        <PizzaCard pizza={pizza} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PizzaList;