import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import AppNavbar from './components/Navbar';

import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* Navbar sẽ tự hiển thị dựa trên trạng thái đăng nhập */}
          <AppNavbar />

          <Routes>
            {/* Trang mặc định là Login */}
            <Route path="/login" element={<Login />} />
            
            {/* Trang Home được bảo vệ bởi ProtectedRoute */}
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />

            {/* Điều hướng các đường dẫn lạ về trang Login hoặc Home */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;