import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">Ecommerce</div>

      <div>
        <Link to="/">Home</Link>
        <Link to="Login">Login</Link>
        <Link to="Signup">Signup</Link>
        <Link to="Profile">Profile</Link>
        <Link to="Order">Order</Link>
        <Link to="Cart">Cart</Link>
        <Link to="Logout">Logout</Link>
      </div>
    </header>
  );
}
export default Header;
 