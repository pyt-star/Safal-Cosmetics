import React from "react";
import "./Navbar.css";

import safalLogo from "../../assets/images/safallogo.png";

function Navbar() {
  const handleQuoteClick = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar-wrapper">

      <nav className="navbar">

        {/* ================================
            LOGO
        ================================= */}

        <a href="#home" className="navbar-logo">
          <img
            src={safalLogo}
            alt="Safal Cosmetics"
          />
        </a>


        {/* ================================
            NAVIGATION
        ================================= */}

        <div className="navbar-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About us
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#clients">
            Valued Clients
          </a>

          <a href="#contact">
            Contact us
          </a>

        </div>


        {/* ================================
            REQUEST QUOTE
        ================================= */}

        <button
          className="quote-button"
          onClick={handleQuoteClick}
        >
          <span>Request a Quote</span>

          <span className="quote-arrow">
            ↗
          </span>
        </button>


        {/* Mobile menu button */}
        <button
          className="mobile-menu"
          aria-label="Open navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>

    </header>
  );
}

export default Navbar;