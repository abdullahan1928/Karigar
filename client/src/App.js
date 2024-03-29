import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import AlertNotifications from './shared/components/AlertNotifications';
import About from './pages/About/About';
import Services from './pages/Services/Service';
import Contact from './pages/Contact/Contact';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import LoginPage from './authPages/LoginPage/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard';
import SubService from './pages/Subservices/Subservices'
import Profile from './pages/Dashboard/Profile/Profile';
import { userInputs } from './formSource';
import PreviousOrders from './pages/Dashboard/PreviousOrders/PreviousOrders';
import OrdersInQueue from './pages/Dashboard/OrdersInQueue/OrdersInQueue';
import Checkout from './pages/Subservices/Checkout/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" >
          <Route index element={<Services />} />
          <Route path=":title" >
            <Route index element={<SubService />} />
            <Route path="checkout" element={<Checkout />} />
          </Route >
        </Route >
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile inputs={userInputs} />} />
          <Route path="previousorders" element={<PreviousOrders />} />
          <Route path="ordersinqueue" element={<OrdersInQueue />} />
        </Route>
      </Routes>
      <AlertNotifications />
    </Router >
  );
}

export default App;
