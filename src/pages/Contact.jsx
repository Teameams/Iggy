import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a backend service
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p className="lead">Let's discuss your project and create something amazing together</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="info-block">
            <h3>📧 Email</h3>
            <p>hello@elshiney.com</p>
            <p className="description">We typically respond within 24 hours</p>
          </div>

          <div className="info-block">
            <h3>📞 Phone</h3>
            <p>Available upon request</p>
            <p className="description">Schedule a consultation call</p>
          </div>

          <div className="info-block">
            <h3>🏢 Company</h3>
            <p>Elshiney web</p>
            <p className="description">CVR: 46456807</p>
          </div>

          <div className="info-block">
            <h3>⏰ Hours</h3>
            <p>Monday - Friday: 9 AM - 6 PM</p>
            <p className="description">We're here to help during business hours</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="I need a webshop for my business"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How long does a project take?</h4>
            <p>Most projects take 2-4 weeks depending on complexity. We'll provide a timeline during our initial consultation.</p>
          </div>
          <div className="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept bank transfers and major payment methods. A 50% deposit is required to start, with the balance due at completion.</p>
          </div>
          <div className="faq-item">
            <h4>Do you provide hosting?</h4>
            <p>We can recommend reliable hosting providers and help with setup, or you can use your own hosting provider.</p>
          </div>
          <div className="faq-item">
            <h4>Can you redesign my existing website?</h4>
            <p>Absolutely! We can modernize your existing site or build something completely new. Let's discuss your needs.</p>
          </div>
          <div className="faq-item">
            <h4>What about ongoing support?</h4>
            <p>All projects include 30 days of free support. After that, we offer maintenance packages at competitive rates.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer payment plans?</h4>
            <p>For larger projects, we can discuss custom payment arrangements. Contact us to discuss your specific situation.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
