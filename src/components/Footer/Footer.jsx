// src/components/Footer/Footer.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h2>Subscribe To Us</h2>
            <p>
              We are more than just a trading company – we are your strategic
              supply partner.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Website Developed By:
            <strong>
              <a href="https://solsportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                Solomon Adugna
              </a>
            </strong>
            | Copyright © 2026 <span>Serenta Trading</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;