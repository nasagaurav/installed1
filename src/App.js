import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin';
import User from './User';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/Login" element={<Login/>} />
        <Route path = "/Signup" element={<Signup/>} />
        <Route path = "/Admin" element={< Admin/>} />
        <Route path = "/User" element={<User/>} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <link to="/">Home</link>
      </li>
      <li>
        <link to="/Login">Login</link>
      </li>
      <li>
        <link to="/Signup">Signup</link>
      </li>
      <li>
        <link to="/Admin">Admin</link>
      </li>
      <li>
        <link to="/User">User</link>
      </li>
    </ul>
  );
}
