import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Daniel Adeniyi Temitope</h1>
        <p className="lead">Professional web development with 4 years of excellence</p>
      </section>

      <section className="about-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, Daniel Adeniyi Temitope was born from a passion for creating exceptional digital experiences. 
              What started as a small freelance operation has grown into a trusted partner for businesses across multiple industries.
            </p>
            <p>
              With 4 years of hands-on experience, we've successfully delivered custom webshops and business websites 
              to startups, small businesses, and established companies. We understand that every business is unique, 
              and we pride ourselves on creating tailored solutions that perfectly match your brand and business goals.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise">
        <h2>Our Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-item">
            <h3>E-Commerce Solutions</h3>
            <p>Custom webshops with integrated payment systems, inventory management, and analytics</p>
          </div>
          <div className="expertise-item">
            <h3>Business Websites</h3>
            <p>Professional business pages that showcase your brand and drive customer engagement</p>
          </div>
          <div className="expertise-item">
            <h3>Responsive Design</h3>
            <p>Beautiful websites that look perfect on desktop, tablet, and mobile devices</p>
          </div>
          <div className="expertise-item">
            <h3>Performance Optimization</h3>
            <p>Lightning-fast load times and optimized for search engines</p>
          </div>
          <div className="expertise-item">
            <h3>Ongoing Support</h3>
            <p>Continuous maintenance, updates, and support after your site goes live</p>
          </div>
          <div className="expertise-item">
            <h3>SEO Ready</h3>
            <p>Built with best practices to help your business rank higher in search results</p>
          </div>
        </div>
      </section>

      <section className="team-intro">
        <h2>Dedicated to Your Success</h2>
        <p>
          As a solo-founded business, I bring personal attention to every project. 
          You'll work directly with the developer who created your website, ensuring clear communication 
          and a final product that exceeds your expectations.
        </p>
      </section>
    </div>
  );
}

export default About;
