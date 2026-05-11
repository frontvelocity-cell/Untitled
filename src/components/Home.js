import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <section className="hero">
          <h1 className="hero-title">
            Welcome to DXB VIP Lounge Service
          </h1>
          <p className="hero-subtitle">
            Experience premium comfort and luxury at Dubai International Airport
          </p>
          <Link to="/contact" className="btn-primary hero-cta">
            Book Your Experience
          </Link>
        </section>
        
        <section className="features">
          <div className="features-grid">
            <div className="feature-card">
              <h3>Premium Lounges</h3>
              <p>Access to exclusive VIP lounges with world-class amenities</p>
            </div>
            <div className="feature-card">
              <h3>Priority Services</h3>
              <p>Fast-track immigration, security, and boarding processes</p>
            </div>
            <div className="feature-card">
              <h3>Concierge Support</h3>
              <p>Dedicated staff to assist with all your travel needs</p>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <h2>Ready to elevate your travel experience?</h2>
          <p>Discover our packages and book your VIP service today</p>
          <div className="cta-buttons">
            <Link to="/packages" className="btn-primary">
              View Packages
            </Link>
            <Link to="/faqs" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;