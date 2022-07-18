import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Order from './pages/Order';
import Logout from './pages/Logout';
import Errorpage from './pages/Errorpage';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
       <Routes>
       <Route path="" element={<Home/>} />
       <Route path="Login" element={<Login/>} />
       <Route path="Signup" element={<Signup/>} />
       <Route path="Order" element={<Order/>} />
       <Route path="Logout" element={<Logout/>} />
       <Route path="*" element={<Errorpage/>} />
       <Routes/>
      <Footer />
    </BrowserRouter>
  );
}
