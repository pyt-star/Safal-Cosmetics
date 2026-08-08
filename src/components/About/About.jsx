import React from "react";
import "./About.css";

function About() {
  const capabilities = [
    {
      title: "Perfumes",
      icon: "perfume",
    },
    {
      title: "Fragrances",
      icon: "fragrance",
    },
    {
      title: "Air Fresheners",
      icon: "air",
    },
    {
      title: "Attars",
      icon: "attar",
    },
    {
      title: "Personal Care",
      icon: "care",
    },
    {
      title: "Gift Sets",
      icon: "gift",
    },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case "perfume":
        return (
          <svg viewBox="0 0 64 64">
            <path d="M26 14h12v8H26z" />
            <path d="M22 22h20v30H22z" />
            <path d="M27 14V9h10v5" />
            <path d="M30 9V5h4v4" />
            <path d="M22 31h20" />
          </svg>
        );

      case "fragrance":
        return (
          <svg viewBox="0 0 64 64">
            <path d="M24 21h16" />
            <path d="M29 21v-7h6v7" />
            <path d="M20 27c0-5 4-8 12-8s12 3 12 8v21c0 5-4 8-12 8s-12-3-12-8V27Z" />
            <path d="M26 34c3-3 8-3 12 0" />
          </svg>
        );

      case "air":
        return (
          <svg viewBox="0 0 64 64">
            <rect x="20" y="19" width="24" height="34" rx="4" />
            <path d="M27 19v-6h10v6" />
            <path d="M27 30c5-4 9 4 14 0" />
            <path d="M27 38c5-4 9 4 14 0" />
          </svg>
        );

      case "attar":
        return (
          <svg viewBox="0 0 64 64">
            <path d="M27 17h10" />
            <path d="M29 17v-6h6v6" />
            <path d="M23 23h18v27c0 4-4 6-9 6s-9-2-9-6V23Z" />
            <path d="M28 31h8" />
            <circle cx="32" cy="42" r="4" />
          </svg>
        );

      case "care":
        return (
          <svg viewBox="0 0 64 64">
            <path d="M20 23h24v29H20z" />
            <path d="M26 23v-6h12v6" />
            <path d="M25 36c4-5 10-5 14 0" />
            <path d="M32 32v9" />
            <path d="M28 36h8" />
          </svg>
        );

      case "gift":
        return (
          <svg viewBox="0 0 64 64">
            <rect x="14" y="25" width="36" height="27" rx="2" />
            <path d="M32 25v27" />
            <path d="M11 25h42v8H11z" />
            <path d="M32 25c-7 0-12-3-12-7 0-3 3-5 6-4 4 1 6 6 6 11Z" />
            <path d="M32 25c7 0 12-3 12-7 0-3-3-5-6-4-4 1-6 6-6 11Z" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section className="about-section" id="about">

      {/* Decorative background */}
      <div className="about-decoration"></div>

      <div className="about-container">

        {/* =================================
            LEFT CONTENT
        ================================= */}

        <div className="about-content">

         

          <h2>
            Your Trusted
            <br />
            <strong>Fragrance Partner.</strong>
          </h2>

          <p className="about-intro">
            Safal Cosmetics is a third-party and private label
            manufacturer specialising in perfumes, fragrances and
            personal care solutions.
          </p>

          <p>
            We work closely with businesses to transform fragrance
            concepts into finished products — from formulation and
            sourcing to filling, packaging and large-scale production.
          </p>

          <p>
            With a focus on quality, consistency and flexible
            manufacturing, we help brands create products that are
            ready for the market and built to scale.
          </p>


          {/* =================================
              CAPABILITIES
          ================================= */}

          <div className="capabilities-heading">
            Our Core Capabilities
          </div>

          <div className="capabilities-grid">

            {capabilities.map((item) => (
              <div className="capability" key={item.title}>

                <div className="capability-circle">
                  {renderIcon(item.icon)}
                </div>

                <span>{item.title}</span>

              </div>
            ))}

          </div>

        </div>


        {/* =================================
            RIGHT PANEL
        ================================= */}

        <div className="about-side">

          <div className="side-top-line">
            <span>01</span>
            <div></div>
            <span>SAFAL COSMETICS</span>
          </div>


          <div className="side-content">

            <div className="side-symbol">
              ✦
            </div>

            <h3>
              From
              <br />
              <span>Concept</span>
              <br />
              to Creation.
            </h3>

            <p>
              We combine fragrance expertise, manufacturing
              capabilities and thoughtful execution to help
              businesses bring their products to life.
            </p>

            <div className="side-points">

              <div>
                <strong>01</strong>
                <span>Custom Formulation</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Flexible Production</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Packaging Solutions</span>
              </div>

            </div>

          </div>


          <div className="side-bottom">
            <span>PRIVATE LABEL</span>
            <span>•</span>
            <span>CONTRACT MANUFACTURING</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;