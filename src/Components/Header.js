// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShopLogo</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <input type="search" placeholder="Search products..." />
    </header>
  );
};
export default Header;
