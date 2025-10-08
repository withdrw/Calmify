// src/components/Header.js
import React from 'react';
import './Header.css';
import { GiShoppingCart } from "react-icons/gi";
import logo from './images/logo.png';


const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <a href="#" className="logo">
            <img  className="logo" src={logo} alt="" />
          </a>
          <nav>
            <ul>
              {/* <li><a href="#">Home</a></li> */}
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Support</a></li>
              <li className='cart'>
                <GiShoppingCart />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;