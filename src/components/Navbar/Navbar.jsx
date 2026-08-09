import React, { useEffect, useState } from "react";
import "./Navbar.css";

import safalLogo from "../../assets/images/safallogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar">

        {/* Logo */}
        <a href="#home" className="navbar-brand">
          <img
            src={safalLogo}
            alt="Safal Cosmetics"
            className="navbar-logo"
          />
        </a>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Capabilities</a>
          <a href="#clients">Valued Clients</a>
          <a href="#contact">Contact</a>
        </div>

        {/* CTA */}
        <a href="#contact" className="quote-btn">
          <span>Request a Quote</span>

          <span className="quote-icon">
            ↗
          </span>
        </a>

      </nav>
    </header>
  );
};

export default Navbar;