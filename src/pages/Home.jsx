// src/pages/Home.jsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const statsRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    staff: 0
  });
  const [countersStarted, setCountersStarted] = useState(false);

  // Image slides for the carousel
  const slides = [
    {
      id: 1,
      image: "./Images/Serenta Loader.jpg",
      alt: "Industrial Machinery"
    },
    {
      id: 2,
      image: "./Images/Serenta Conecction.jpg", 
      alt: "Technology Products"
    },
    {
      id: 3,
      image: "./Images/Serenta Microscop.jpg",
      alt: "Laboratory Equipment"
    }
  ];

  // Service data with images
  const services = [
    {
      id: 1,
      title: "Industrial Machinery",
      description: "Heavy and precision equipment for manufacturing, construction, processing, and more. With international shipment.",
      image: "./Images/Industrial Machinary.jpg",
      delay: '0s'
    },
    {
      id: 2,
      title: "Technology Products",
      description: "Corporate IT Equipments to Smart City Building equipments, Smart Pole and EV Charging Stations",
      image: "./Images/Technology Equipment.jpg",
      delay: '0.2s'
    },
    {
      id: 3,
      title: "Laboratory Equipments",
      description: "Accurate and reliable tools for scientific, industrial, and educational applications. For Medical Centers and Schools.",
      image: "./Images/Laboratory Equipments.jpg",
      delay: '0.4s'
    }
  ];

  useEffect(() => {
    // Initialize counters when stats section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            startCounters();
            setCountersStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [countersStarted]);

  // Auto slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const startCounters = () => {
    const targets = {
      years: 5,
      projects: 100,
      clients: 163,
      staff: 15
    };

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    Object.keys(targets).forEach((key, index) => {
      const target = targets[key];
      const stepValue = target / steps;
      
      let currentStep = 0;
      
      const counterInterval = setInterval(() => {
        currentStep++;
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.min(Math.floor(stepValue * currentStep), target)
        }));

        if (currentStep >= steps) {
          clearInterval(counterInterval);
          // Ensure final values are exact
          setTimeout(() => {
            setCounters(prev => ({
              ...prev,
              [key]: target
            }));
          }, 100);
        }
      }, stepDuration);
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h5>Supplying Innovation across Industries</h5>
          <h1>SERENTA TRADING</h1>
          <p>
            Operating from Dubai, a global business and logistics hub, we cater to
            clients across Europe, Africa, the Middle East, Asia, and the
            USA.
          </p>
          <Link to="/services" className="btn">Explore</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="explore">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div 
                key={service.id} 
                className="service-card animate-fadeInUp" 
                style={{animationDelay: service.delay}}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <Link to="/services" className="btn btn-outline">
                    <i className="fas fa-angle-right"></i> Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container about-container">
          <div className="about-content">
            <h2>Your Partner for Global Technology and Machinery Supply.</h2>
            <p>
              Founded in September 2020, Serenta Trading was built on a vision to
              bridge industries with the tools and technologies they need to excel
              in a rapidly changing world.
            </p>

            <ul className="feature-list">
              <li><i className="fas fa-check"></i> Industrial Machinery Supply</li>
              <li>
                <i className="fas fa-check"></i> Technology Products & Innovations
              </li>
              <li><i className="fas fa-check"></i> Latest Laboratory Equipment</li>
              <li>
                <i className="fas fa-check"></i> Smart City Equipments & Smart Pole
              </li>
            </ul>

            <Link to="/about" className="btn">Read More</Link>
          </div>

          <div className="about-image">
            <div className="image-carousel">
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
                <button className="slider-btn prev" onClick={prevSlide}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="slider-btn next" onClick={nextSlide}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="slide-indicators">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise">
        <div className="container">
          <div className="section-header">
            <h2>Our Expertise & Services</h2>
            <p>
              Our team combines global sourcing expertise, technical knowledge,
              and a dedication to service excellence, making us a trusted
              extension of your supply chain.
            </p>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card animate-fadeInUp">
              <div className="expertise-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Smart City</h3>
              <p>
                We supply advanced smart poles designed for modern urban
                infrastructure. Our smart poles integrate energy-efficient
                lighting, CCTV cameras, 5G/Wi-Fi connectivity, environmental
                sensors, digital displays, and more supporting safer, more
                connected, and sustainable smart cities.
              </p>
            </div>

            <div className="expertise-card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="expertise-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Industrial Machinery</h3>
              <p>
                We provide reliable industrial machinery for manufacturing,
                construction, agricultural machinery and processing industries.
                Our solutions include high-performance equipment sourced from
                trusted global brands ensuring efficiency, durability, and
                productivity for your operations.
              </p>
            </div>

            <div className="expertise-card animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <div className="expertise-icon">
                <i className="fas fa-biohazard"></i>
              </div>
              <h3>Laboratory Equipment</h3>
              <p>
                We supply high-quality laboratory equipment for medical, research,
                educational, and industrial labs. From precision instruments to
                complete lab setups, our solutions ensure accuracy, reliability,
                and compliance with international standards. With Installation,
                calibration, and after-sales support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section className="top-destinations">
        <div className="container top-destinations-container">
          <div className="top-destinations-left">
            <h2>Top Destinations For The Last<br />5 Years</h2>
            <p>
              Over the past five years, our reach has extended across key global
              regions. Africa and the Middle East remain strong markets driven by
              rapid development and smart infrastructure investments. USA and
              Canada offer consistent demand for high-quality technology and
              machinery, reflecting strong industrial and research sectors. In
              Asia, fast-growing economies and innovation hubs have created
              dynamic opportunities across various industries.
            </p>
            <Link to="/about" className="read-more-link">
              Read More <i className="fas fa-angle-right"></i>
            </Link>
          </div>
          <div className="top-destinations-right">
            <div className="progress-group">
              <div className="progress-label">Africa &amp; Middle East</div>
              <div className="progress-bar-bg">
                <div className="progress-bar" style={{width: '85%'}}>85%</div>
              </div>
            </div>
            <div className="progress-group">
              <div className="progress-label">USA &amp; Canada</div>
              <div className="progress-bar-bg">
                <div className="progress-bar" style={{width: '70%'}}>70%</div>
              </div>
            </div>
            <div className="progress-group">
              <div className="progress-label">Europe &amp; Asia</div>
              <div className="progress-bar-bg">
                <div className="progress-bar" style={{width: '75%'}}>75%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>{counters.years}+</h3>
              <p>Years in Business</p>
            </div>

            <div className="stat-item">
              <h3>{counters.projects}+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-item">
              <h3>{counters.clients}+</h3>
              <p>Clients</p>
            </div>

            <div className="stat-item">
              <h3>{counters.staff}+</h3>
              <p>Staff Members</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;