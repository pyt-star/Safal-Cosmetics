import React from "react";
import "./Hero.css";

import heroImage from "../../assets/images/hero2.png";

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Background decorative elements */}
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span>PRIVATE LABEL & CONTRACT MANUFACTURING</span>
          </div>

          <h1>
            We Create
            <span className="hero-outline"> Fragrances</span>
            <br />
            For Your
            <span className="hero-blue"> Brand.</span>
          </h1>

          <p className="hero-description">
            From concept and formulation to manufacturing, packaging and
            delivery — Safal Cosmetics transforms fragrance ideas into
            products ready for the market.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="hero-primary-btn">
              <span>Explore Our Capabilities</span>
              <span className="hero-arrow">↗</span>
            </a>

            <a href="#contact" className="hero-secondary-btn">
              Start Your Project
              <span>→</span>
            </a>
          </div>

          {/* Bottom info */}
          <div className="hero-info">

            <div className="hero-info-item">
              <span className="info-number">01</span>

              <div>
                <span className="info-title">CONCEPT</span>
                <span className="info-text">
                  Your vision begins here
                </span>
              </div>
            </div>

            <div className="info-divider"></div>

            <div className="hero-info-item">
              <span className="info-number">02</span>

              <div>
                <span className="info-title">CREATION</span>
                <span className="info-text">
                  From formula to final product
                </span>
              </div>
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="hero-visual">

          <div className="image-frame">

            <img
              src={heroImage}
              alt="Safal Cosmetics Manufacturing"
              className="hero-image"
            />

            <div className="image-overlay"></div>

          </div>


          


          {/* Floating badge */}
          <div className="hero-floating-card">

            <div className="floating-icon">
              ✦
            </div>

            <div>
              <span>OUR EXPERTISE</span>
              <strong>Perfume Solutions</strong>
            </div>

          </div>


          {/* Decorative outline */}
          <div className="hero-circle-outline"></div>

          <div className="hero-small-square"></div>

        </div>

      </div>


      {/* Bottom scrolling text */}
      <div className="hero-marquee">

        <div className="marquee-track">

          <span>FRAGRANCE FORMULATION</span>
          <i>✦</i>

          <span>PRIVATE LABEL</span>
          <i>✦</i>

          <span>CONTRACT MANUFACTURING</span>
          <i>✦</i>

          <span>PERFUME DEVELOPMENT</span>
          <i>✦</i>

          {/* Duplicate for smooth infinite loop */}

          <span>FRAGRANCE FORMULATION</span>
          <i>✦</i>

          <span>PRIVATE LABEL</span>
          <i>✦</i>

          <span>CONTRACT MANUFACTURING</span>
          <i>✦</i>

          <span>PERFUME DEVELOPMENT</span>
          <i>✦</i>

        </div>

      </div>

    </section>
  );
};

export default Hero;