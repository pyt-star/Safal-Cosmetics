import "./Process.css";

import {
  FaComments,
  FaFlask,
  FaIndustry,
  FaBoxOpen,
  FaShieldAlt,
  FaTruck
} from "react-icons/fa";

const steps = [
  {
    icon: <FaComments />,
    title: "Consultation",
    text: "Understanding your vision and business goals."
  },
  {
    icon: <FaFlask />,
    title: "Fragrance",
    text: "Developing a unique fragrance formula."
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing",
    text: "Large-scale production with strict standards."
  },
  {
    icon: <FaBoxOpen />,
    title: "Packaging",
    text: "Premium bottles, labels and packaging."
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Check",
    text: "Every batch is thoroughly inspected."
  },
  {
    icon: <FaTruck />,
    title: "Delivery",
    text: "Safe packaging and timely dispatch."
  }
];

function Process() {
  return (
    <section className="process">

      <div className="process-heading">

        <span>HOW WE BRING YOUR BRAND TO LIFE</span>

        <h2>
          Our Journey From
          <br />
          Idea to Shelf
        </h2>

        <p>
          Every product goes through a carefully managed process to ensure
          premium quality, consistency and timely delivery.
        </p>

      </div>

      <div className="timeline">

        {steps.map((step, index) => (
          <div className="timeline-item" key={index}>

            <div className="circle">

              {step.icon}

            </div>

            <span className="step-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Process;