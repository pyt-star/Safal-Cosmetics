import { useState } from "react";
import "./Contact.css";
import Reveal from "../Reveal";

function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* ================================
          CONTACT SECTION
      ================================= */}

      <section className="contact-section" id="contact">

        <Reveal className="contact-container">

          {/* Left Side */}
          <div className="contact-content">

            <div className="contact-label">
              <span></span>
              GET IN TOUCH
            </div>

            <h2>
              Let's create
              <br />
              <span>something remarkable.</span>
            </h2>

            <p>
              Have a product idea, fragrance concept or private
              label requirement? Tell us what you're looking for
              and our team will get back to you.
            </p>

            <button
              className="contact-button"
              onClick={() => setShowForm(true)}
            >
              Send an Enquiry
              <span>↗</span>
            </button>

          </div>


          {/* Right Side */}
          <div className="contact-info">

            <div className="contact-info-card">

              <span className="info-label">
                WHAT WE WORK WITH
              </span>

              <div className="info-list">

                <span>Perfumes</span>
                <span>Air Fresheners</span>
                <span>After Shave Lotion</span>
                <span>Attars</span>
                <span>Sanitizers</span>
                <span>Gift Sets</span>

              </div>

            </div>


            <div className="contact-info-card">

              <span className="info-label">
                ENQUIRIES
              </span>

              <a
                href="mailto:safalcosmetics@gmail.com"
                className="email-link"
              >
                safalcosmetics@gmail.com
              </a>

            </div>

          </div>

        </Reveal>


        {/* Bottom */}
        <div className="contact-bottom">

          <span>
            PRIVATE LABEL
          </span>

          <span className="contact-dot"></span>

          <span>
            CONTRACT MANUFACTURING
          </span>

          <span className="contact-dot"></span>

          <span>
            FRAGRANCE SOLUTIONS
          </span>

        </div>

      </section>


      {/* ================================
          GOOGLE FORM MODAL
      ================================= */}

      {showForm && (

        <div
          className="form-overlay"
          onClick={() => setShowForm(false)}
        >

          <div
            className="form-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="form-modal-header">

              <div>
                <span className="form-small-label">
                  SAFAL COSMETICS
                </span>

                <h3>
                  Send us an enquiry
                </h3>
              </div>

              <button
                className="close-form"
                onClick={() => setShowForm(false)}
                aria-label="Close form"
              >
                ×
              </button>

            </div>


            {/* Google Form */}
            <div className="google-form-container">

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdm-vCMxguLdQTMSfg7o_JrHi22_PPxqnMG-RgRQ0MCI4fLZA/viewform?usp=header"
                title="Safal Cosmetics Enquiry Form"
                className="google-form"
              >
                Loading…
              </iframe>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Contact;
