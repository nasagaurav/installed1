import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { removeStorage } from '../services';

function Header() {
  const state = useSelector((s) => s);
  const state = useDispatch();
  const { user, loggedin } = state;
  const logout = () => {
    removeStorage('uid');
    removeStorage('name');
    removeStorage('email');
    removeStorage('phone');
    removeStorage('password');
    dispatch ({type:'logout'})
  };

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
        {loggedin && <button onClick={Logout}>Logout({user.name})</button>}
      </div>
    </header>
  );
}
export default Header;
