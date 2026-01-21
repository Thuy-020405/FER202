import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function BookingForm() {
  return (
    <Container className="my-5 pb-5">
      
      <h2 className="text-center text-white mb-5 fw-light">Book Your Table</h2>
      
      <Form className="px-md-5">
        
        <Row className="mb-4">
          <Col md={4} className="mb-3">
            <Form.Control 
              placeholder="Your Name *" 
              className="rounded-0 bg-white py-2" 
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="Your Email *" 
              className="rounded-0 bg-white py-2" 
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Select className="rounded-0 bg-white py-2 text-secondary">
              <option>Select a Service</option>
              <option value="1">Dine-in</option>
              <option value="2">Takeaway</option>
              <option value="3">Event Booking</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Hàng 2: Message area */}
        <Row className="mb-4">
          <Col>
            <Form.Control 
              as="textarea" 
              rows={6} 
              placeholder="Please write your comment" 
              className="rounded-0 bg-white"
            />
          </Col>
        </Row>

        {/* Nút gửi tin nhắn căn giữa */}
        <div className="d-grid gap-2 col-md-3 mx-auto">
          <Button 
            variant="warning" 
            className="rounded-0 fw-bold text-white py-2 shadow-sm"
            style={{ backgroundColor: '#ffb400', border: 'none' }}
          >
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default BookingForm;