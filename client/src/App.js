import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import AlertNotifications from './shared/components/AlertNotifications';
import About from './About/About';
import Services from './Services/Service';
import Contact from './Contact/Contact';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import LoginPage from './authPages/LoginPage/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <AlertNotifications />
    </Router>
  );
}

export default App;
