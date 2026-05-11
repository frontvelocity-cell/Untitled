import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your booking request! We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="contact">
      <div className="container">
        <h1 className="section-title">Book Your VIP Experience</h1>
        <p className="contact-subtitle">
          Ready to elevate your travel experience? Contact us to book your VIP lounge service.
        </p>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">VIP Package *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a package</option>
                    <option value="essential">Essential VIP - $150</option>
                    <option value="premium">Premium VIP - $250</option>
                    <option value="luxury">Luxury VIP - $400</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="date">Travel Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Special Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please let us know if you have any special requirements or requests..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Book Now'}
              </button>
              
              {submitMessage && (
                <div className="submit-message">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
          
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <div className="info-item">
                <strong>Phone:</strong>
                <span>+971 4 216 5555</span>
              </div>
              <div className="info-item">
                <strong>Email:</strong>
                <span>info@dxbviplounge.com</span>
              </div>
              <div className="info-item">
                <strong>Location:</strong>
                <span>Dubai International Airport, UAE</span>
              </div>
              <div className="info-item">
                <strong>Operating Hours:</strong>
                <span>24/7</span>
              </div>
            </div>
            
            <div className="info-card">
              <h3>Booking Guidelines</h3>
              <ul>
                <li>Book at least 24 hours in advance</li>
                <li>Provide valid flight information</li>
                <li>Arrive at the airport 3 hours before departure</li>
                <li>Carry a valid passport and boarding pass</li>
                <li>Payment confirmation required</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;