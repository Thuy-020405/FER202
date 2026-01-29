import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import các component đã tạo
import NavBar from './components/NavBar';
import CapNhatSoLuong from './components/CapNhatSoLuong'; // Exercise 1
import ModalConfirm from './components/ModalConfirm';     // Exercise 2
import ProductForm from './components/ProductForm';       // Exercise 3
import TodoList from './components/TodoList';             // Exercise 4

function App() {
  return (
    <Router>
      <div className="App">
        {/* Thanh điều hướng chứa liên kết Exercise 1 -> 4  */}
        <NavBar />

        {/* Khu vực hiển thị nội dung chi tiết từng bài tập */}
        <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <Routes>
            {/* Điều hướng mặc định về Exercise 1 khi mở ứng dụng */}
            <Route path="/" element={<Navigate to="/ex1" />} />

            {/* Route cho Exercise 1: Chỉnh sửa số lượng [cite: 24] */}
            <Route path="/ex1" element={<CapNhatSoLuong />} />

            {/* Route cho Exercise 2: Modal xác nhận đơn hàng [cite: 27] */}
            <Route path="/ex2" element={<ModalConfirm />} />

            {/* Route cho Exercise 3: Form quản lý bằng Object [cite: 34] */}
            <Route path="/ex3" element={<ProductForm />} />

            {/* Route cho Exercise 4: Todo List [cite: 38] */}
            <Route path="/ex4" element={<TodoList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;