import React from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
  const packages = [
    {
      name: "Essential VIP",
      price: "$150",
      features: [
        "VIP Lounge Access",
        "Priority Check-in",
        "Complimentary Refreshments",
        "Wi-Fi Access",
        "Comfortable Seating"
      ]
    },
    {
      name: "Premium VIP",
      price: "$250",
      features: [
        "All Essential VIP Features",
        "Fast Track Immigration",
        "Priority Security",
        "Shower Facilities",
        "Premium Dining",
        "Business Center Access"
      ],
      popular: true
    },
    {
      name: "Luxury VIP",
      price: "$400",
      features: [
        "All Premium VIP Features",
        "Personal Concierge",
        "Private Suite",
        "Spa Services",
        "Chauffeur Service",
        "Priority Boarding",
        "Baggage Assistance"
      ]
    }
  ];

  return (
    <div className="packages">
      <div className="container">
        <h1 className="section-title">Our VIP Packages</h1>
        <p className="packages-subtitle">
          Choose the perfect VIP experience for your journey through Dubai International Airport
        </p>
        
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="package-header">
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <div className="price-period">per person</div>
              </div>
              
              <div className="package-features">
                <ul>
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <Link to="/contact" className="btn-primary package-btn">
                Book Now
              </Link>
            </div>
          ))}
        </div>
        
        <div className="packages-info">
          <h2>What's Included</h2>
          <div className="info-grid">
            <div className="info-item">
              <h4>Lounge Access</h4>
              <p>Access to premium lounges with comfortable seating, complimentary food and beverages, and entertainment facilities.</p>
            </div>
            <div className="info-item">
              <h4>Priority Services</h4>
              <p>Skip the lines with fast-track check-in, security, and immigration services for a seamless airport experience.</p>
            </div>
            <div className="info-item">
              <h4>Personal Assistance</h4>
              <p>Dedicated staff to assist with your needs, from baggage handling to flight information and special requests.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;