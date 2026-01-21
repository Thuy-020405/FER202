import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
  return (
    <div className="about-page pb-5">
      {/* 1. Header của trang About (Banner nhỏ) */}
      <div className="about-header text-center text-white d-flex align-items-center justify-content-center mb-5">
        <h1 className="fw-bold display-3 text-uppercase shadow-text">About Our Store</h1>
      </div>

      <Container>
        {/* 2. Phần giới thiệu chính */}
        <Row className="align-items-center mb-5 g-5">
          <Col lg={6}>
            <img 
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2069&auto=format&fit=crop" 
              alt="Pizza Oven" 
              className="img-fluid shadow-lg border-start border-warning border-5"
            />
          </Col>
          <Col lg={6} className="text-white">
            <h2 className="text-warning mb-3">The Art of Pizza</h2>
            <p className="lead fw-normal">
              Được thành lập từ niềm đam mê ẩm thực Ý bất tận, Pizza House mang đến hương vị 
              truyền thống kết hợp với sự sáng tạo hiện đại.
            </p>
            <p className="text-light-50">
              Chúng tôi sử dụng loại bột được ủ lên men tự nhiên trong 48 giờ, nướng trực tiếp 
              trong lò gạch ở nhiệt độ 400°C. Mỗi chiếc bánh là một tác phẩm nghệ thuật với 
              nguyên liệu tươi ngon nhất từ địa phương và phô mai Mozzarella nhập khẩu trực tiếp từ Ý.
            </p>
          </Col>
        </Row>

        {/* 3. Phần các giá trị cốt lõi (Cards nhỏ gọn) */}
        <Row className="text-center g-4 mt-5">
          <Col md={4}>
            <Card className="bg-white text-dark border-0 h-100 p-3 rounded-0 shadow-sm">
              <Card.Body>
                <div className="fs-1 text-warning mb-3"><i className="bi bi-heart-fill"></i></div>
                <Card.Title className="fw-bold text-uppercase">Phục vụ tận tâm</Card.Title>
                <Card.Text className="small">Khách hàng luôn là trọng tâm trong mọi dịch vụ của chúng tôi.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-white text-dark border-0 h-100 p-3 rounded-0 shadow-sm">
              <Card.Body>
                <div className="fs-1 text-warning mb-3"><i className="bi bi-star-fill"></i></div>
                <Card.Title className="fw-bold text-uppercase">Chất lượng Ý</Card.Title>
                <Card.Text className="small">Công thức bột bánh và nước sốt độc quyền chuẩn vị Napoli.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-white text-dark border-0 h-100 p-3 rounded-0 shadow-sm">
              <Card.Body>
                <div className="fs-1 text-warning mb-3"><i className="bi bi-truck"></i></div>
                <Card.Title className="fw-bold text-uppercase">Giao hàng nhanh</Card.Title>
                <Card.Text className="small">Đảm bảo pizza luôn nóng hổi khi đến tay bạn trong 30 phút.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;