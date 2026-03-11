import React, { Suspense, lazy } from 'react'; // Phải có Suspense và lazy [cite: 75]
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPizza from './components/NavBarPizza';
import Home from './components/Home';
import News from './pages/News';
import Quiz from './pages/Quiz';
import DangKyForm from './components/DangKyForm';
import Contact from './pages/Contact';

const UsersPage = lazy(() => import('./pages/UsersPage'));
const PostsPage = lazy(() => import('./pages/PostsPage'));

function App() {
  return (
    <Router>
      <NavBarPizza />
      {/* Suspense bắt buộc phải bao bọc các Route sử dụng lazy loading [cite: 83] */}
      <Suspense fallback={<div className="container mt-5 text-center">正在加载... (Loading...)</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/register" element={<DangKyForm />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Thêm các Route mới cho Users và Posts */}
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;