import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/terms" className="footer-link">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
        </div>
        
        <div className="footer-social">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;