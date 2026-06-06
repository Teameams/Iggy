import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Elshiney web</h3>
          <p>Professional web development for businesses of all sizes.</p>
          <div className="social-links">
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Twitter">tw</a>
            <a href="#" title="GitHub">gh</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#business">Business Websites</a></li>
            <li><a href="#ecommerce">E-Commerce Webshops</a></li>
            <li><a href="#custom">Custom Projects</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="mailto:hello@elshiney.com">hello@elshiney.com</a></li>
            <li>Monday - Friday</li>
            <li>9 AM - 6 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Elshiney web. All rights reserved. | CVR: 46456807</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
