import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          DXB VIP Lounge Service
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link 
            to="/packages" 
            className={`nav-link ${isActive('/packages') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            PACKAGES
          </Link>
          <Link 
            to="/partners" 
            className={`nav-link ${isActive('/partners') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            PARTNERS
          </Link>
          <Link 
            to="/faqs" 
            className={`nav-link ${isActive('/faqs') ? 'active' : 'highlighted'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            FAQS
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
          <span className="nav-link arabic">العربية</span>
        </nav>
        
        <Link to="/contact" className="book-btn">
          BOOK NOW
        </Link>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;