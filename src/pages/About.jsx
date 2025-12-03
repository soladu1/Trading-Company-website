// src/pages/About.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: "/Images/Serenta Loader.jpg", alt: "Industrial Machinery" },
    { id: 2, image: "/Images/Serenta Conecction.jpg", alt: "Technology Products" },
    { id: 3, image: "/Images/Serenta Microscop.jpg", alt: "Laboratory Equipment" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="about-page">
      {/* About Intro */}
      <section className="about-intro">
        <div className="container">
          <p>
            Founded in September 2020, Serenta Trading was built on a vision to
            bridge industries with the tools and technologies they need to excel
            in a rapidly changing world. Operating from Dubai, a global business
            and logistics hub, we cater to clients across Europe, Africa, the
            Middle East, Asia, and the USA.
          </p>
          <Link to="/contact" className="btn">Contact Serenta</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container services-container">
          <div className="services-content">
            <h2>Your Partner for Global Technology and Machinery Supply.</h2>
            <p>
              With our broad expertise and adaptable solutions, we support
              organizations across many sectors
            </p>
            <ul className="services-list">
              <li>Industrial Machinery Supply</li>
              <li>Technology Products & Innovations</li>
              <li>Latest Laboratory Equipment</li>
              <li>Smart City Equipments & Smart Pole</li>
            </ul>
            <Link to="/services" className="btn">Our Services</Link>
          </div>
          <div className="services-slider">
            <div className="slider-container">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={slide.image} alt={slide.alt} />
                </div>
              ))}
            </div>
            <div className="slider-nav">
              <button className="slider-btn prev" onClick={prevSlide}>‹</button>
              <button className="slider-btn next" onClick={nextSlide}>›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container features-container">
          <div className="feature-box">
            <div className="feature-icon">🌐</div>
            <h3 className="feature-title">Global Reach</h3>
            <p className="feature-desc">
              Extensive network of suppliers and logistics partners across
              continents
            </p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">⏱️</div>
            <h3 className="feature-title">Reliable Delivery</h3>
            <p className="feature-desc">
              Efficient procurement processes and on-time shipping wherever you
              are
            </p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">🔧</div>
            <h3 className="feature-title">Technical Expertise</h3>
            <p className="feature-desc">
              Extensive network of suppliers and logistics partners across
              continents
            </p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">👥</div>
            <h3 className="feature-title">Client-Centric</h3>
            <p className="feature-desc">
              Personalized service with long-term relationship focus
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>All Your Needs, In one Place<br />Contact Us Today.</h2>
          <Link to="/contact" className="btn">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default About;