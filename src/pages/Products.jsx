import { Link } from 'react-router-dom';
import '../styles/Products.css';

function Products() {
  return (
    <div className="products">
      <section className="products-hero">
        <h1>Our Services</h1>
        <p className="lead">Professional web solutions tailored to your business needs</p>
      </section>

      <section className="products-grid">
        <div className="product-card featured">
          <div className="badge">Most Popular</div>
          <h2>E-Commerce Webshop</h2>
          <p className="description">
            Complete online store solution with everything you need to start selling online.
          </p>
          
          <div className="price-range">
            <span className="price">$700 - $1600</span>
            <p className="based-on">Based on number of products</p>
          </div>

          <h3>Includes:</h3>
          <ul className="features">
            <li>✓ Product catalog management</li>
            <li>✓ Shopping cart system</li>
            <li>✓ Payment gateway integration</li>
            <li>✓ Inventory tracking</li>
            <li>✓ Order management system</li>
            <li>✓ Customer accounts</li>
            <li>✓ Analytics & reporting</li>
            <li>✓ Mobile responsive design</li>
            <li>✓ SEO optimization</li>
            <li>✓ 30 days free support</li>
          </ul>

          <Link to="/contact" className="cta">Get Your Webshop</Link>
        </div>

        <div className="product-card">
          <h2>Business Website</h2>
          <p className="description">
            Professional business page to establish your online presence and attract customers.
          </p>
          
          <div className="price-range">
            <span className="price">$200 - $500</span>
            <p className="based-on">Based on complexity</p>
          </div>

          <h3>Includes:</h3>
          <ul className="features">
            <li>✓ Custom design</li>
            <li>✓ About page</li>
            <li>✓ Services/Products showcase</li>
            <li>✓ Contact form</li>
            <li>✓ Mobile responsive</li>
            <li>✓ Fast loading times</li>
            <li>✓ SEO friendly</li>
            <li>✓ Social media integration</li>
            <li>✓ Basic analytics</li>
            <li>✓ 30 days free support</li>
          </ul>

          <Link to="/contact" className="cta">Get Your Website</Link>
        </div>

        <div className="product-card">
          <h2>Custom Project</h2>
          <p className="description">
            Have a unique idea? Let's create a custom solution specifically for your needs.
          </p>
          
          <div className="price-range">
            <span className="price">Custom Pricing</span>
            <p className="based-on">Get a personalized quote</p>
          </div>

          <h3>Perfect for:</h3>
          <ul className="features">
            <li>✓ Complex applications</li>
            <li>✓ SaaS platforms</li>
            <li>✓ Membership sites</li>
            <li>✓ Community platforms</li>
            <li>✓ Integration projects</li>
            <li>✓ Migration projects</li>
            <li>✓ API development</li>
            <li>✓ Database solutions</li>
            <li>✓ Performance optimization</li>
            <li>✓ Ongoing maintenance</li>
          </ul>

          <Link to="/contact" className="cta">Discuss Your Idea</Link>
        </div>
      </section>

      <section className="why-section">
        <h2>Why Our Pricing is Worth It</h2>
        <div className="why-grid">
          <div className="why-item">
            <h4>Quality Code</h4>
            <p>Clean, maintainable code that performs well and is easy to update</p>
          </div>
          <div className="why-item">
            <h4>Security</h4>
            <p>Built with security best practices to protect your business and customers</p>
          </div>
          <div className="why-item">
            <h4>Future Proof</h4>
            <p>Scalable solutions that grow with your business</p>
          </div>
          <div className="why-item">
            <h4>Support</h4>
            <p>Direct access to developer for questions and technical support</p>
          </div>
        </div>
      </section>

      <section className="process">
        <h2>Our Development Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Discovery</h3>
            <p>Understanding your business goals and requirements</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Design</h3>
            <p>Creating mockups and getting your approval</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Development</h3>
            <p>Building your website with clean, modern code</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Testing</h3>
            <p>Thorough testing across browsers and devices</p>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <h3>Launch</h3>
            <p>Deploying your site and ensuring everything runs smoothly</p>
          </div>
          <div className="step">
            <div className="step-number">6</div>
            <h3>Support</h3>
            <p>Ongoing maintenance and support after launch</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <Link to="/contact" className="cta-button">Contact Us Today</Link>
      </section>
    </div>
  );
}

export default Products;
