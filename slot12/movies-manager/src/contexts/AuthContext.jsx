// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import movieApi from '../api/movieAPI';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user từ localStorage khi reload trang
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await movieApi.get('/accounts');

      const account = response.data.find(
        acc => acc.username === username && acc.password === password
      );

      if (!account) {
        return { success: false, message: 'Sai tài khoản hoặc mật khẩu' };
      }

      // 👉 Chỉ cho phép admin đăng nhập
      if (account.role !== 'admin') {
        return { success: false, message: 'Chỉ Admin mới có quyền đăng nhập' };
      }

      setUser(account);
      localStorage.setItem('user', JSON.stringify(account));

      return { success: true };

    } catch (error) {
      return { success: false, message: 'Lỗi hệ thống, thử lại sau' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};