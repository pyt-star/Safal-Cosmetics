import { useState, useEffect } from "react";
import "./QuoteModal.css";
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaClipboardList, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "", requirements: "" });
    onClose();
  };

  return (
    <div className="quote-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="quote-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={onClose} aria-label="Close quote modal">
          <FaTimes />
        </button>

        {isSubmitted ? (
          <div className="quote-success-container">
            <div className="quote-success-icon">
              <FaCheckCircle />
            </div>
            <h2>Quote Request Received!</h2>
            <p>
              Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding your product requirements and will get back to you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> within 24 business hours.
            </p>
            <button className="quote-submit-btn" onClick={handleResetAndClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="quote-modal-header">
              <span className="quote-modal-tag">GET A CUSTOM QUOTE</span>
              <h2>Request a Quote</h2>
              <p>Fill in the details below and our team will get in touch with a customized solution for your brand.</p>
            </div>

            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-group">
                <label htmlFor="quote-name">
                  <FaUser className="form-icon" /> Full Name <span className="required">*</span>
                </label>
                <input
                  id="quote-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="quote-email">
                  <FaEnvelope className="form-icon" /> Email Address <span className="required">*</span>
                </label>
                <input
                  id="quote-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="quote-phone">
                  <FaPhone className="form-icon" /> Phone Number <span className="required">*</span>
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 (555) 000-0000"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="quote-requirements">
                  <FaClipboardList className="form-icon" /> Product Requirements <span className="required">*</span>
                </label>
                <textarea
                  id="quote-requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Describe your product requirements (e.g., fragrance type, quantity, packaging specifications)..."
                  rows={4}
                  required
                ></textarea>
              </div>

              <button type="submit" className="quote-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Quote Request <FaPaperPlane style={{ marginLeft: "8px" }} />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default QuoteModal;
