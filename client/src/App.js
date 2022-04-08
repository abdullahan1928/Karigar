import React from 'react';
import { BrowserRouter as  Router, Routes,Route,Redirect} from "react-router-dom";
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import LoginPage from './authPages/LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';
import './App.css';
import AlertNotifications from './shared/components/AlertNotifications';
import Service from './Dashboard/Services/Service';
import About from './About/About';
import Contact from './Contact/Contact';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/service" element={<Service/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route
        path="/"
        element={<Dashboard to="/dashboard" replace />}
    />
   
    </Routes>
    <AlertNotifications/> 
  </Router>
  );
}

export default App;
