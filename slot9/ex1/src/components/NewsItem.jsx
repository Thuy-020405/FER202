import React from 'react';
import { Card, Col } from 'react-bootstrap';

const NewsItem = ({ item }) => (
  <Col md={3} className="mb-4 d-flex align-items-stretch">
    <Card>
      <Card.Img variant="top" src={item.images} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="h6">{item.title}</Card.Title>
        <Card.Text className="small flex-grow-1">{item.description}</Card.Text>
        <Card.Link href="#" className="small mt-auto">Read more...</Card.Link>
      </Card.Body>
    </Card>
  </Col>
);
export default NewsItem;