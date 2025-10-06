// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <a href="#" className="logo">Calmify</a>
          <nav>
            <ul>
              {/* <li><a href="#">Home</a></li> */}
              <li><a href="#products">Products</a></li>
              <li>
                <a href="#" className="cart-icon">
                  Cart
                  {/* <span className="cart-count">0</span> */}
                </a>
              </li>
              <li><a href="#contact">Support</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;