import React from "react";
import "./Products.css";

const services = [
  {
    number: "01",
    title: "End-to-End Solutions",
    description:
      "Complete cosmetic solutions from product concept and development to filling, packing and final delivery.",
    tag: "FULL SERVICE",
  },
  {
    number: "02",
    title: "Product Design & Development",
    description:
      "Transform your product idea into reality through concept development, mock-ups, formulation and product design.",
    tag: "DEVELOPMENT",
  },
  {
    number: "03",
    title: "Component Solutions",
    description:
      "Local as well as import and export solutions for cosmetic components and packaging requirements.",
    tag: "COMPONENTS",
  },
  {
    number: "04",
    title: "Quality Inspection",
    description:
      "Need-based quality inspection services to help maintain consistency and quality throughout production.",
    tag: "QUALITY",
  },
  {
    number: "05",
    title: "Cosmetic Expertise",
    description:
      "An experienced team with extensive knowledge across cosmetic product development and manufacturing.",
    tag: "EXPERTISE",
  },
  {
    number: "06",
    title: "Filling & Packing",
    description:
      "Filling services for perfumes, air fresheners, aftershave lotions, sanitizers, attars and disinfectant sprays.",
    tag: "MANUFACTURING",
  },
  {
    number: "07",
    title: "Gift Sets",
    description:
      "Create complete and customized cosmetic gift sets with coordinated product and packaging solutions.",
    tag: "GIFT SETS",
  },
];

function Products() {
  return (
    <section className="products-section" id="services">

      {/* Header */}
      <div className="products-header">

        

        <div className="products-title-row">

          <h2>
            Services built
            <br />
            <span>around your brand.</span>
          </h2>

          <p>
            From the first product idea to the finished package,
            Safal Cosmetics provides the expertise and support
            needed to bring cosmetic brands to life.
          </p>

        </div>

      </div>


      {/* Decorative line */}
      <div className="products-line">
        <span></span>
      </div>


      {/* Cards */}
      <div className="services-grid">

        {services.map((service) => (
          <article
            className="service-card"
            key={service.number}
          >

            {/* Top */}
            <div className="service-top">

              <div className="service-number">
                {service.number}
              </div>

              <div className="service-arrow">
                ↗
              </div>

            </div>


            {/* Content */}
            <div className="service-content">

              <div className="service-tag">
                {service.tag}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>


            

          </article>
        ))}

      </div>


      {/* Bottom CTA */}
      <div className="services-cta">

        <div>
          <span className="cta-small">
            HAVE A PRODUCT IDEA?
          </span>

          <h3>
            Let's build it together.
          </h3>
        </div>

        <a href="#contact">
          Discuss Your Project
          <span>↗</span>
        </a>

      </div>

    </section>
  );
}

export default Products;