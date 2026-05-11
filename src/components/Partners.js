import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    {
      name: "Emirates Airlines",
      description: "Official airline partner providing seamless connections and premium services.",
      category: "Airlines"
    },
    {
      name: "Dubai Airports",
      description: "Strategic partnership with DXB for exclusive lounge access and facilities.",
      category: "Airports"
    },
    {
      name: "Marhaba Services",
      description: "Premium meet and greet services throughout Dubai International Airport.",
      category: "Services"
    },
    {
      name: "Al Majlis Lounges",
      description: "Exclusive access to premium lounges with world-class amenities.",
      category: "Lounges"
    },
    {
      name: "DNATA",
      description: "Ground handling and aviation services for enhanced travel experience.",
      category: "Ground Services"
    },
    {
      name: "Luxury Transportation",
      description: "Premium chauffeur services and luxury vehicle fleet.",
      category: "Transportation"
    }
  ];

  const categories = [...new Set(partners.map(partner => partner.category))];

  return (
    <div className="partners">
      <div className="container">
        <h1 className="section-title">Our Partners</h1>
        <p className="partners-subtitle">
          We collaborate with industry leaders to provide exceptional VIP experiences
        </p>
        
        <div className="partners-content">
          {categories.map(category => (
            <div key={category} className="partner-category">
              <h2 className="category-title">{category}</h2>
              <div className="partners-grid">
                {partners
                  .filter(partner => partner.category === category)
                  .map((partner, index) => (
                    <div key={index} className="partner-card">
                      <div className="partner-logo">
                        {partner.name.split(' ').map(word => word[0]).join('')}
                      </div>
                      <h3 className="partner-name">{partner.name}</h3>
                      <p className="partner-description">{partner.description}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
        
        <div className="partnership-benefits">
          <h2>Partnership Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Exclusive Access</h4>
              <p>Special privileges and access to premium facilities through our partner network.</p>
            </div>
            <div className="benefit-item">
              <h4>Seamless Integration</h4>
              <p>Coordinated services across all partners for a smooth and luxurious experience.</p>
            </div>
            <div className="benefit-item">
              <h4>Quality Assurance</h4>
              <p>Rigorous standards maintained across all partner services and facilities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;