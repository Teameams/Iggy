import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for your message! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p className="lead">
          Let's discuss your project and create something amazing together
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="info-block">
            <h3>📧 Email</h3>
            <p>hello@elshiney.com</p>
            <p className="description">
              We typically respond within 24 hours
            </p>
          </div>

          <div className="info-block">
            <h3>📞 Phone</h3>
            <p>Available upon request</p>
            <p className="description">
              Schedule a consultation call
            </p>
          </div>

          <div className="info-block">
            <h3>🏢 Company</h3>
            <p>Elshiney web</p>
            <p className="description">CVR: 46456807</p>
          </div>

          <div className="info-block">
            <h3>📍 Address</h3>
            <p>Kolding 6000</p>
            <p className="description">Denmark</p>
          </div>

          <div className="info-block">
            <h3>⏰ Hours</h3>
            <p>Monday - Friday: 9 AM - 6 PM</p>
            <p className="description">
              We're here to help during business hours
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="6"
            required
          />

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-grid">
          <div className="faq-item">
            <h4>How long does a project take?</h4>
            <p>Most projects take 2-4 weeks depending on complexity.</p>
          </div>

          <div className="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept bank transfers and major payment methods.</p>
          </div>

          <div className="faq-item">
            <h4>Do you provide hosting?</h4>
            <p>We can help you choose and set up hosting.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;