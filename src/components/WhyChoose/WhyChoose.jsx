import "./WhyChoose.css";

import {
  FaFlask,
  FaIndustry,
  FaBoxOpen,
  FaGlobeAsia
} from "react-icons/fa";

const features = [
  {
    icon: <FaFlask />,
    title: "Custom Fragrance Development",
    description:
      "Develop unique fragrances tailored to your brand identity and market."
  },

  {
    icon: <FaIndustry />,
    title: "Advanced Manufacturing",
    description:
      "Modern production facilities ensuring consistency and international quality."
  },

  {
    icon: <FaBoxOpen />,
    title: "Premium Packaging",
    description:
      "Elegant bottles, caps and packaging solutions to elevate your brand."
  },

  {
    icon: <FaGlobeAsia />,
    title: "Global Supply",
    description:
      "Reliable manufacturing partner serving businesses across multiple markets."
  }
];

function WhyChoose() {
  return (
    <section className="why">

      <div className="why-heading">

        <span>WHY LEADING BRANDS CHOOSE SAFAL</span>

        <h2>
          Excellence in Every
          <br />
          Step of Manufacturing
        </h2>

      </div>

      <div className="why-grid">

        {features.map((item, index) => (

          <div className="why-card" key={index}>

            <div className="why-icon">

              {item.icon}

            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChoose;