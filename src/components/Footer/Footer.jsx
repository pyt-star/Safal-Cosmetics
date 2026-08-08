import React from "react";
import "./Footer.css";

import safalLogo from "../../assets/images/safallogo.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* =================================
          TOP FOOTER
      ================================= */}

      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">

          <img
            src={safalLogo}
            alt="Safal Cosmetics"
            className="footer-logo"
          />

          <p>
            Your trusted partner for private label,
            contract manufacturing and fragrance
            solutions.
          </p>

          <button
            className="footer-enquiry"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Start a Conversation
            <span>↗</span>
          </button>

        </div>


        {/* Navigation */}
        <div className="footer-column">

          <h4>
            NAVIGATION
          </h4>

          <a href="#home">Home</a>

          <a href="#about">About Us</a>

          <a href="#services">Services</a>

          <a href="#clients">Valued Clients</a>

          <a href="#contact">Contact Us</a>

        </div>


        {/* Services */}
        <div className="footer-column">

          <h4>
            SERVICES
          </h4>

          <a href="#services">
            Product Development
          </a>

          <a href="#services">
            Private Label
          </a>

          <a href="#services">
            Contract Manufacturing
          </a>

          <a href="#services">
            Filling & Packing
          </a>

          <a href="#services">
            Gift Sets
          </a>

        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">

          <h4>
            CONTACT
          </h4>

          <span>
            Have a product idea?
          </span>

          <a
            href="#contact"
            className="footer-contact-link"
          >
            Send an Enquiry ↗
          </a>

          <span className="footer-contact-label">
            EMAIL
          </span>

          <a href="mailto:safalcosmetics@gmail.com">
            safalcosmetics@gmail.com
          </a>

        </div>

      </div>


      {/* =================================
          LARGE BRAND TEXT
      ================================= */}

      <div className="footer-brand-text">
        SAFAL
      </div>


      {/* =================================
          BOTTOM BAR
      ================================= */}

      <div className="footer-bottom">

        <div className="footer-copyright">
          © {new Date().getFullYear()} Safal Cosmetics.
          All rights reserved.
        </div>

        <div className="footer-bottom-links">

          <a href="#privacy">
            Privacy Policy
          </a>

          <a href="#terms">
            Terms & Conditions
          </a>

        </div>

        <button
          className="back-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>

      </div>

    </footer>
  );
}

export default Footer;