// src/pages/Contact.jsx
import { useState } from "react";
import Agent from "../components/Agent/Agent";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Industrial Machinery",
    region: "Africa",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.region
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9()#&+*-=.]+$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number");
      return;
    }

    // If all validation passes
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Industrial Machinery",
      region: "Africa",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Contact Us</h1>
          <h5>SERENTA TRADING - GET EVERYTHING YOU NEED</h5>
          <p>
            Looking for reliable industrial machines, cutting-edge technology,
            or world-class lab equipment? Connect with us today and discover how
            Serenta Trading can support your business goals.
          </p>
        </div>
      </section>

      {/* Offices Section */}
      <section className="offices">
        <div className="container">
          <div className="offices-grid">
            <div className="office-card">
              <h3>UAE Office</h3>
              <p>
                Dubai Abc Steet, UAE
                <br />
                +(971) 581 336 247
              </p>
              <p>
                Wide Product Portfolio – One-stop source for machinery, tech,
                and laboratory equipment.
              </p>
              <a href="mailto:info@serentatrading.com" className="btn">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form">
            <h2>Get In Touch</h2>
            <p>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Person or Company Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-col">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-col">
                  <div className="form-group">
                    <label htmlFor="phone">Telephone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+123456789"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-col">
                  <div className="form-group">
                    <label htmlFor="service">Select Service (optional)</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="Industrial Machinery">
                        Industrial Machinery
                      </option>
                      <option value="Technology Equipment">
                        Technology Equipment
                      </option>
                      <option value="Laboratory Equipment">
                        Laboratory Equipment
                      </option>
                      <option value="Smart City & Smart Poles">
                        Smart City & Smart Poles
                      </option>
                      <option value="Row Materials & Finished Products">
                        Row Materials & Finished Products
                      </option>
                      <option value="Electrical Equipment's & Solar Energy">
                        Electrical Equipment's & Solar Energy
                      </option>
                      <option value="Other (Specify on the Comments)">
                        Other (Specify on the Comments)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="form-col">
                  <div className="form-group">
                    <label htmlFor="region">Select Region</label>
                    <select
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      required
                    >
                      <option value="Africa">Africa</option>
                      <option value="Asia">Asia</option>
                      <option value="Europe">Europe</option>
                      <option value="Middle East">Middle East</option>
                      <option value="South America">South America</option>
                      <option value="US/Canada">US/Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
