import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ServicePage.css";

const serviceData = {
  "fragrance-solutions": {
    title: "Fragrance Solutions",
    subtitle: "Creating memorable fragrances for distinctive brands.",
    description:
      "Safal Cosmetics provides complete fragrance manufacturing solutions, helping brands develop unique products from concept to production.",
    services: [
      "Custom fragrance development",
      "Perfume manufacturing",
      "Body spray production",
      "Deodorant formulations",
      "Packaging support",
    ],
  },

  "aerosol-products": {
    title: "Aerosol Products",
    subtitle: "Reliable aerosol solutions engineered for performance.",
    description:
      "We manufacture a range of aerosol-based products with a focus on quality, consistency and efficient production.",
    services: [
      "Aerosol manufacturing",
      "Air fresheners",
      "Body sprays",
      "Custom aerosol formulations",
      "Private label production",
    ],
  },

  "personal-care": {
    title: "Personal Care",
    subtitle: "Quality personal care products built around your brand.",
    description:
      "From formulation to finished packaging, we help brands create personal care products tailored to their customers.",
    services: [
      "Skin care products",
      "Body care",
      "Grooming products",
      "Custom formulations",
      "Brand-specific packaging",
    ],
  },

  "private-label-manufacturing": {
    title: "Private Label Manufacturing",
    subtitle: "Your brand. Our manufacturing expertise.",
    description:
      "Safal Cosmetics supports businesses throughout the complete product development journey, from idea and formulation to manufacturing and delivery.",
    services: [
      "Product concept development",
      "Custom formulation",
      "Manufacturing",
      "Packaging solutions",
      "Quality control",
    ],
  },
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service not found</h1>
        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <main className="service-page">
      <section className="service-page-hero">

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <span className="service-page-label">
          SAFAL COSMETICS • OUR SERVICES
        </span>

        <h1>{service.title}</h1>

        <h2>{service.subtitle}</h2>

        <p>{service.description}</p>

      </section>

      <section className="service-details">

        <div className="service-details-heading">
          <span>WHAT WE OFFER</span>
          <h2>Built around your requirements.</h2>
        </div>

        <div className="service-list">
          {service.services.map((item, index) => (
            <div className="service-list-item" key={index}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <div>↗</div>
            </div>
          ))}
        </div>

      </section>

      <section className="service-cta">
        <p>READY TO BUILD YOUR PRODUCT?</p>

        <h2>
          Let's create something
          <span> exceptional.</span>
        </h2>

        <button
          onClick={() => navigate("/#contact")}
        >
          Request a Quote ↗
        </button>
      </section>
    </main>
  );
};

export default ServicePage;