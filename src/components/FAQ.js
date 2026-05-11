import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      question: "Does making a booking with Al Majlis guarantee that the service will be provided?",
      answer: "Yes, making a confirmed booking with Al Majlis guarantees that the VIP lounge service will be provided as per the terms and conditions. However, the service is subject to flight schedules and airport operations."
    },
    {
      question: "Why is there a need for the passenger to pre-register for the Al Majlis service?",
      answer: "Pre-registration is required to ensure proper planning and allocation of resources. It helps us prepare the necessary arrangements for your arrival and ensures a seamless VIP experience tailored to your specific needs."
    },
    {
      question: "Does booking Al Majlis service entitle the passenger to airline benefits such as upgrades and excess baggage allowances?",
      answer: "No, Al Majlis VIP lounge service is independent of airline benefits. It provides airport lounge access and premium services but does not include airline-specific benefits like seat upgrades or additional baggage allowances."
    },
    {
      question: "Why is there a need to submit credit card details when booking?",
      answer: "Credit card details are required for payment processing and to secure your booking. This ensures a guaranteed reservation and allows for efficient payment processing. All payment information is handled securely according to industry standards."
    },
    {
      question: "Can passengers that report late for a flight, and refused by the airline, request for a refund?",
      answer: "Refund policies for passengers who miss their flights due to late arrival depend on the specific circumstances and our terms and conditions. Generally, if the service was not utilized due to airline refusal, a partial refund may be considered on a case-by-case basis."
    },
    {
      question: "Can no-show passenger request for a refund?",
      answer: "No-show passengers may request a refund, but it will be processed according to our cancellation and refund policy. Refunds for no-shows are typically not provided unless there are exceptional circumstances covered under our terms and conditions."
    },
    {
      question: "Can passengers that advise cancellation, prior to 24 hours of the flight, opt to hold the payment with us?",
      answer: "Yes, passengers who cancel their booking at least 24 hours before their flight may be eligible to hold their payment as credit for future bookings. This option is subject to our terms and conditions and may have specific validity periods."
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="container">
        <h1 className="section-title">
          QUESTIONS WE OFTEN GET FROM OUR CUSTOMERS
        </h1>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleItem(index)}
                aria-expanded={openItem === index}
              >
                <span className="question-text">{item.question}</span>
                <span className={`faq-icon ${openItem === index ? 'open' : ''}`}>
                  +
                </span>
              </button>
              
              <div className={`faq-answer ${openItem === index ? 'open' : ''}`}>
                <div className="answer-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;