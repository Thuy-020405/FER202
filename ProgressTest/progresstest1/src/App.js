import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Login from './pages/Login';
import AccountList from './pages/AccountList';
import AccountDetails from './pages/AccountDetails';
import AppNavbar from './components/Navbar';

const ProtectedRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const user = state?.user || JSON.parse(localStorage.getItem('user'));

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AppNavbar /> 

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
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;