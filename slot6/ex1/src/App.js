import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import DemoForm from './components/DemoForm';
import LoginForm from './components/LoginForm';
import ManageUsers from './components/ManageUsers';

function App() {
  return (
    <Router>
      <div className="bg-light" style={{ minHeight: '100vh' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<DemoForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/manage" element={<ManageUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;