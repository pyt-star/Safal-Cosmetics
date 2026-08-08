import React from "react";
import "./Hero.css";

import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="safal-hero" id="home">

      {/* Background decorative element */}
      <div className="hero-orbit"></div>

      {/* LEFT CONTENT */}
      <div className="safal-hero-content">

        

        <h1>
          Crafting Fragrance.
          <br />
          <span>Building Brands.</span>
        </h1>

        <p className="hero-description">
          From concept to production, Safal Cosmetics delivers
          premium fragrance solutions for businesses seeking
          quality, consistency and scale.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          <a
            href="#services"
            className="hero-btn hero-btn-primary"
          >
            Explore Our Services
            <span>↗</span>
          </a>

          <a
            href="#contact"
            className="hero-btn hero-btn-secondary"
          >
            Partner With Us
          </a>

        </div>

        {/* Stats */}
        <div className="hero-stats">

          <div className="hero-stat">
            <strong>25+</strong>
            <span>Years of<br />Expertise</span>
          </div>

          <div className="hero-stat-divider"></div>

          <div className="hero-stat">
            <strong>360°</strong>
            <span>Fragrance<br />Solutions</span>
          </div>

          <div className="hero-stat-divider"></div>

          <div className="hero-stat">
            <strong>B2B</strong>
            <span>Manufacturing<br />Partner</span>
          </div>

        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div className="safal-hero-visual">

        {/* Large circle behind product */}
        <div className="hero-circle"></div>

        {/* Image container */}
        <div className="hero-image-container">

          <img
            src={heroImage}
            alt="Safal Cosmetics fragrance manufacturing"
          />

        </div>

        {/* Floating card */}
        <div className="hero-floating-card">

          <div className="floating-icon">
            ✦
          </div>

          <div>
            <span>Our Expertise</span>
            <strong>Perfume Solutions</strong>
          </div>

        </div>

        {/* Vertical text */}
        <div className="hero-vertical-text">
          SAFAL COSMETICS · FRAGRANCE SOLUTIONS
        </div>

      </div>


      

    </section>
  );
}

export default Hero;