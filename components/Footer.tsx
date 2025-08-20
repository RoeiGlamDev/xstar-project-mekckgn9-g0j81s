import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">HouseIL</div>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </nav>
                <div className="footer-social">
                    <a href="#facebook" className="social-icon">Facebook</a>
                    <a href="#twitter" className="social-icon">Twitter</a>
                    <a href="#instagram" className="social-icon">Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} HouseIL. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;