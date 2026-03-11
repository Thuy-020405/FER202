import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import AccountList from '../pages/AccountList';
import AccountDetails from '../pages/AccountDetails';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const user = state.user || JSON.parse(localStorage.getItem('user'));

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route 
        path="/accounts" 
        element={
          <ProtectedRoute>
            <AccountList />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/accounts/:id" 
        element={
          <ProtectedRoute>
            <AccountDetails />
          </ProtectedRoute>
        } 
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;