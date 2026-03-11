import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { newLists } from '../data/newsData';

const News = () => (
    <Container className="mt-4">
        {/* Tiêu đề màu đỏ đậm theo đề bài */}
        <h2 className="text-danger mb-4 fw-bold">NEWS CATEGORY</h2>
        <Row>
            {newLists.map((item) => (
                <Col key={item.id} xs={12} sm={6} md={3} className="mb-4 d-flex">
                    <Card className="shadow-sm border-0">
                        {/* Thêm / trước path để tránh lỗi đường dẫn khi chuyển route */}
                        <Card.Img variant="top" src={`/${item.images}`} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="h6 fw-bold text-dark" style={{minHeight: '40px'}}>
                                {item.title}
                            </Card.Title>
                            <Card.Text className="small text-secondary flex-grow-1">
                                {item.description}
                            </Card.Text>
                            <a href="#" className="mt-2 text-decoration-none fw-bold" style={{color: '#0d6efd'}}>
                                Read more...
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

export default News;