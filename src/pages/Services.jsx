// src/pages/Services.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      id: 1,
      title: "Supply of Industrial Machinery",
      image: "/Images/Industrial Machinary.jpg",
      description: "Heavy and precision equipment for manufacturing, construction, processing, and more.",
      modal: "industrial"
    },
    {
      id: 2,
      title: "Supply Technology Equipment",
      image: "/Images/Technology Equipment.jpg",
      description: "Our goal is to provide smart, future-ready solutions that support automation, efficiency, and data-driven operations.",
      modal: "technology"
    },
    {
      id: 3,
      title: "Supply Laboratory Equipment",
      image: "/Images/Laboratory Equipments.jpg",
      description: "Whether for a university, hospital, or industrial lab, we ensure you receive equipment that supports accuracy and innovation.",
      modal: "laboratory"
    },
    {
      id: 4,
      title: "Smart City & Smart Poles Import and Installation",
      image: "/Images/Smart City and Smart poles.jpg",
      description: "You can concentrate more time on the most successful aspects of your company.",
      modal: "smart-city"
    },
    {
      id: 5,
      title: "Supply of Raw Materials & Finished Products",
      image: "/Images/Raw materials and finished products.jpg",
      description: "You can concentrate more time on the most successful aspects of your company.",
      modal: "raw-materials"
    },
    {
      id: 6,
      title: "Supply of Electrical Equipment's & Solar Energy",
      image: "/Images/Electrical Equipments and.jpg",
      description: "You can concentrate more time on the most successful aspects of your company.",
      modal: "electrical"
    }
  ];

  const partners = [
    { id: 1, logo: "/Logoimags/cat-logo.png", alt: "Caterpillar" },
    { id: 2, logo: "/Logoimags/PerkinElmer_Logo.png", alt: "PerkinElmer" },
    { id: 3, logo: "/Logoimags/John_Deere_logo.png", alt: "John Deere" },
    { id: 4, logo: "/Logoimags/Sanyo_logo.png", alt: "Sanyo" },
    { id: 5, logo: "/Logoimags/Thermo_Fisher_Scientific_logo.png", alt: "Thermo Fisher Scientific" },
    { id: 6, logo: "/Logoimags/XCMG_logo.png", alt: "XCMG" }
  ];

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    // Partner logo slider animation
    const partnersSlider = document.querySelector(".partners-slider");
    if (partnersSlider && window.innerWidth > 768) {
      let scrollPosition = 0;
      const scrollSpeed = 1;

      function scrollPartners() {
        scrollPosition += scrollSpeed;

        if (scrollPosition >= partnersSlider.scrollWidth / 2) {
          scrollPosition = 0;
        }

        partnersSlider.scrollLeft = scrollPosition;
        requestAnimationFrame(scrollPartners);
      }

      requestAnimationFrame(scrollPartners);
    }
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Services</h1>
          <p>Call Us Today +971 58 133 6247</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>
                    <button 
                      className="service-modal-trigger"
                      onClick={() => openModal(service.modal)}
                    >
                      {service.title}
                    </button>
                  </h3>
                  <p>{service.description}</p>
                  <button 
                    className="service-link service-modal-trigger"
                    onClick={() => openModal(service.modal)}
                  >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8.707 8L5.354 4.646a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L8.707 8z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>B2B Connections</h2>
          <p>
            Connect with us today and discover how Serenta Trading can support
            your business goals.
          </p>
          <Link to="/contact" className="btn cta-btn">Contact Us</Link>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Partners</h2>
          </div>
          <div className="partners-slider">
            {partners.map(partner => (
              <div key={partner.id} className="partner-logo">
                <img src={partner.logo} alt={partner.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      {activeModal === 'industrial' && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h3 className="modal-title">Supply of Industrial Machinery</h3>
            <p>
              At Serenta Trading, we understand the critical role industrial
              machinery plays in productivity and growth. We work with certified
              global manufacturers to supply high-performance, durable, and
              cost-effective machinery to meet a wide array of operational needs.
            </p>
            <ul>
              <li>CNC machines and precision tools</li>
              <li>Food processing and packaging machines</li>
              <li>Heavy construction and mining equipment</li>
              <li>Industrial automation and production systems</li>
            </ul>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      )}

      {activeModal === 'technology' && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h3 className="modal-title">Supply Technology Equipment</h3>
            <p>
              We provide the latest in technology and electronics, enabling
              businesses to stay competitive and connected. Our technology solutions
              are tailored to support both industrial and commercial clients looking
              for dependable and scalable digital tools.
            </p>
            <ul>
              <li>Computer systems, servers, and networking hardware</li>
              <li>Industrial sensors and IoT devices</li>
              <li>Communication and control systems</li>
              <li>Power supply units and electronic components</li>
            </ul>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      )}

      {activeModal === 'laboratory' && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h3 className="modal-title">Laboratory Equipment Supply</h3>
            <p>
              Precision, reliability, and compliance are the cornerstones of
              laboratory operations. Serenta Trading sources a wide variety of
              laboratory instruments and systems that meet international standards
              for research, testing, and analysis.
            </p>
            <ul>
              <li>Analytical instruments (spectrometers, chromatographs, etc.)</li>
              <li>Microscopes and imaging systems</li>
              <li>Environmental and temperature control units</li>
              <li>Chemical storage and safety equipment</li>
              <li>Laboratory furniture and fittings</li>
            </ul>
            <Link to="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;