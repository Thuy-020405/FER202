import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'; // Đảm bảo tệp là Footer.jsx
import HeroCarousel from './components/HeroCarousel'; // Đảm bảo tệp là HeroCarousel.jsx
import PizzaList from './pages/PizzaList'; // Đừng quên import trang danh sách Pizza
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <HeroCarousel />
      <div className="d-flex flex-column min-vh-100">
        <Container fluid className="flex-grow-1">
          <PizzaList /> {/* Thêm dòng này để hiển thị 10 cái Pizza bạn vừa tạo */}
        </Container>
        <Footer myProfile={{
          avatar: '/images/logo.jpg',
          name: 'Thuy PTD',
          email: 'phanthidinhthuy6.@gmail.com',
        }} />
      </div>
    </>
  );
}

export default App;