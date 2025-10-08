import React from 'react';
import './Footer.css';
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-links-container">
                        <a href="/about" className="footer-link">About Us</a>
                        <a href="/refund" className="footer-link">Refund Policy</a>
                        <a href="/shop" className="footer-link">Shop</a>
                        <a href="/products" className="footer-link">Products</a>
                        <a href="/terms" className="footer-link">Terms of Condition</a>
                    </div>
                    <div className="footer-social">
                        <a href="https://instagram.com/calmify" className="social-icon" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://tiktok.com/calmify" className="social-icon" aria-label="TikTok">
                            <FaTiktok />
                        </a>
                        <a href="https://facebook.com/calmify" className="social-icon" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="copyright">
                        © {currentYear} Calmify. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;