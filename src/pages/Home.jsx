import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Daniel Adeniyi Temitope</h1>
          <p className="hero-subtitle">Professional Web Solutions for Your Business</p>
          <p className="hero-description">
            Tailored webshops and business websites that drive growth. 4 years of expertise in creating beautiful, 
            high-performing digital experiences.
          </p>
          <Link to="/contact" className="hero-cta">Get Started Today</Link>
        </div>
      </section>

      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🛒</div>
            <h3>E-Commerce Webshops</h3>
            <p>Custom webshops with payment integration, product management, and analytics</p>
            <p className="price">$700 - $1600</p>
            <Link to="/products" className="learn-more">Learn More →</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Business Websites</h3>
            <p>Professional business pages that showcase your brand and attract customers</p>
            <p className="price">$200 - $500</p>
            <Link to="/products" className="learn-more">Learn More →</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">⚙️</div>
            <h3>Custom Solutions</h3>
            <p>Tailored projects designed specifically for your unique business needs</p>
            <p className="price">Custom Pricing</p>
            <Link to="/contact" className="learn-more">Inquire →</Link>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose Daniel Adeniyi Temitope?</h2>
        <div className="features">
          <div className="feature">
            <h4>4 Years of Experience</h4>
            <p>Proven track record of successful projects and satisfied clients</p>
          </div>
          <div className="feature">
            <h4>Tailored Solutions</h4>
            <p>Every website is custom-built to match your specific business goals</p>
          </div>
          <div className="feature">
            <h4>Fast & Responsive</h4>
            <p>Lightning-fast loading times and mobile-optimized designs</p>
          </div>
          <div className="feature">
            <h4>Ongoing Support</h4>
            <p>Continuous maintenance and support after your site launches</p>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <h2>Ready to Grow Your Business?</h2>
        <p>Let's create something amazing together</p>
        <Link to="/contact" className="cta-button">Start Your Project</Link>
      </section>
    </div>
  );
}

export default Home;
