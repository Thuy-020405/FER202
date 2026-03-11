import React from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import CounterComponent from "./components/CounterComponent";
import LightSwitch from "./components/LightSwitch";
import LoginForm from "./components/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';
// Component bao ngoài để áp dụng Theme cho toàn bộ các trang
const PageWrapper = ({ children }) => {
  const { theme } = useTheme();
  const style = {
    minHeight: '100vh',
    backgroundColor: theme === 'light' ? '#f8f9fa' : '#121212',
    color: theme === 'light' ? '#212529' : '#f8f9fa',
    transition: 'all 0.3s ease'
  };
  return <div style={style}>{children}</div>;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <PageWrapper>
            {/* Thanh điều hướng giống image_1c1e19.jpg */}
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
              <Container>
                <Navbar.Brand as={Link} to="/">UseContext Demo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/ex1">Exercise 1</Nav.Link>
                    <Nav.Link as={Link} to="/ex2">Exercise 2</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Container>
              <Routes>
                {/* Trang 1: Theme & Counter (giống image_1c1e19.jpg) */}
                <Route path="/ex1" element={
                  <div className="animate__animated animate__fadeIn">
                    <h2 className="mb-4">Exercise 1 - Theme & Counter</h2>
                    <div className="p-4 border rounded shadow-sm bg-body-tertiary">
                      <CounterComponent />
                      <hr className="my-4" />
                      <LightSwitch />
                    </div>
                  </div>
                } />

                {/* Trang 2: Login System (giống image_1c1dfd.png) */}
                <Route path="/ex2" element={
                  <div className="animate__animated animate__fadeIn">
                    <h2 className="mb-4 text-center">Exercise 2 - Login System</h2>
                    <LoginForm />
                  </div>
                } />

                {/* Trang mặc định khi mới vào app */}
                <Route path="/" element={
                  <div className="text-center mt-5">
                    <h1>Chào mừng bạn đến với bài tập React Context</h1>
                    <p>Hãy chọn Exercise trên thanh Menu để bắt đầu.</p>
                  </div>
                } />
              </Routes>
            </Container>
          </PageWrapper>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;