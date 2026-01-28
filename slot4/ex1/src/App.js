
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel'; 
import BookingForm from './components/BookingForm';

import PizzaList from './pages/PizzaList'; 
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="bg-dark text-white min-vh-100 d-flex flex-column">
        <AppNavbar />

        <main className="flex-grow-1">
          <Routes>
            
            <Route path="/" element={
              <>
                <HeroCarousel /> 
                <div className="container py-5">
                  <PizzaList />
                </div>
                <BookingForm />
              </>
            } />
            
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer myProfile={{
          avatar: '/images/logo.jpg',
          name: 'Thuy PTD',
          email: 'phanthidinhthuy6.@gmail.com',
        }} />
      </div>
    </Router>
  );
}

export default App;