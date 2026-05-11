import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1 className="error-title">Page Not Found</h1>
          <p className="error-message">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="error-actions">
            <Link to="/" className="btn-primary">
              Go Home
            </Link>
            <Link to="/faqs" className="btn-secondary">
              View FAQs
            </Link>
          </div>
          
          <div className="helpful-links">
            <h3>You might be looking for:</h3>
            <ul>
              <li><Link to="/packages">VIP Packages</Link></li>
              <li><Link to="/partners">Our Partners</Link></li>
              <li><Link to="/contact">Book Now</Link></li>
              <li><Link to="/faqs">Frequently Asked Questions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;