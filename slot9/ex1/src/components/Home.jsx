import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import MyCarousel from './MyCarousel'; // Import component slide ảnh

function Home() {
  return (
    <Container className="mt-4">
      {/* 1. Phần Slide ảnh (Carousel) */}
      <Row className="mb-4">
        <Col>
          <MyCarousel />
        </Col>
      </Row>
      
      {/* 2. Tiêu đề chính của trang */}
      <h1 className="text-danger text-center mb-4">This is Home Page</h1>

      {/* 3. Phần thông tin tác giả và cấu trúc Project */}
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-primary border-bottom pb-2">
                1. Thông tin tác giả
              </Card.Title>
              <Card.Text className="mt-3">
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li><strong>Mã SV:</strong> DE191048</li>
                  <li><strong>Họ tên:</strong> thuy</li>
                  <li>
                    <strong>GitHub:</strong>{' '}
                    <a href="https://github.com/Thuy-020405/FER202" target="_blank" rel="noreferrer">
                      Link Github
                    </a>
                  </li>
                </ul>
              </Card.Text>
              
              <hr />
              
              <Card.Title className="text-primary border-bottom pb-2">
                2. Cấu trúc project
              </Card.Title>
              <Card.Text className="mt-3">
                <p>
                  Project được tổ chức theo cấu trúc chuyên nghiệp: 
                  <strong> components, data, reducers, pages, utils.</strong>
                </p>
                <p>
                  Sử dụng <code>react-router-dom</code> để điều hướng và 
                  <code> useReducer</code> để quản lý trạng thái bài Quiz.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;