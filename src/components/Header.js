import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const state = useSelector((s) => s);

  const { user, loggedin } = state;
  return (
    <header>
      <div className="logo">Ecommerce</div>

      <div>
        <Link to="/">Home</Link>

        {!loggedin && <Link to="Login">Login</Link>}
        {!loggedin && <Link to="Signup">Signup</Link>}
        {loggedin && <Link to="Profile">Profile</Link>}
        {loggedin && <Link to="Order">Order</Link>}
        {loggedin && <Link to="Cart">Cart</Link>}
        {loggedin && <Link to="Logout">Logout</Link>}
      </div>
    </header>
  );
}
export default Header;
